# =============================================================================
# vscode-theme — VSCode UI theme switcher
# 
# Installation:
#   mkdir -p ~/.vscode-themes
#   cp bedrock-themes/*.json ~/.vscode-themes/
#   source vscode-theme.sh   # or add this line to your ~/.zshrc / ~/.bashrc
#
# Usage:
#   vscode-theme status
#   vscode-theme set                           # interactive picker
#   vscode-theme set navy-orange [-g | --global]
#   vscode-theme reset          [-g | --global]
#   vscode-theme list
# =============================================================================

VSCODE_THEME_DIR="${HOME}/.vscode-themes"
VSCODE_THEME_VERSION="__VERSION__"   # populated from ./VERSION during install; left as literal in git
# Keys written into settings.json by this tool
VSCODE_THEME_KEY_MANAGED="__vscode_theme_managed"
VSCODE_THEME_KEY_BACKUP="__vscode_theme_backup"

# ── helpers ──────────────────────────────────────────────────────────────────

_vscode_theme_color_reset="\033[0m"
_vscode_theme_color_bold="\033[1m"
_vscode_theme_color_green="\033[32m"
_vscode_theme_color_yellow="\033[33m"
_vscode_theme_color_cyan="\033[36m"
_vscode_theme_color_red="\033[31m"
_vscode_theme_color_gray="\033[90m"

_vt_ok()   { echo -e "  ${_vscode_theme_color_green}✓${_vscode_theme_color_reset}  $*"; }
_vt_info() { echo -e "  ${_vscode_theme_color_cyan}i${_vscode_theme_color_reset}  $*"; }
_vt_warn() { echo -e "  ${_vscode_theme_color_yellow}!${_vscode_theme_color_reset}  $*"; }
_vt_err()  { echo -e "  ${_vscode_theme_color_red}✗${_vscode_theme_color_reset}  $*" >&2; }
_vt_h()    { echo -e "\n${_vscode_theme_color_bold}$*${_vscode_theme_color_reset}"; }
_vt_dim()  { echo -e "  ${_vscode_theme_color_gray}$*${_vscode_theme_color_reset}"; }

# ── truecolor helpers (used by `list` to render each theme in its own colors) ─

# True if the terminal claims 24-bit color support.
_vt_supports_truecolor() {
  [[ "$COLORTERM" == "truecolor" || "$COLORTERM" == "24bit" ]]
}

# "#RRGGBB[AA]" -> "R G B" (decimal; alpha ignored).
_vt_hex_to_rgb() {
  local hex="${1#\#}"
  hex="${hex:0:6}"
  printf "%d %d %d" "0x${hex:0:2}" "0x${hex:2:2}" "0x${hex:4:2}"
}

# Extract a hex color for the given key from a theme JSON file. Returns the
# first match as `#RRGGBB` (alpha stripped), or empty if the key is missing.
_vt_read_color() {
  local file="$1" key="$2"
  grep -oE "\"${key}\"[[:space:]]*:[[:space:]]*\"#[0-9A-Fa-f]{6,8}\"" "$file" 2>/dev/null \
    | head -1 \
    | sed -E 's/.*"(#[0-9A-Fa-f]{6})[0-9A-Fa-f]*"/\1/'
}

# Format a single theme row (colored status-bar-style block + accent hint) into
# the variable named by $1, with no trailing newline. The caller supplies the
# leading prefix so it can express e.g. selection cursors. Falls back to a dim
# plain row when truecolor isn't available.
_vt_format_block() {
  local out_var="$1" prefix="$2" name="$3" bg_hex="$4" fg_hex="$5" accent_hex="$6"
  local padded
  padded=$(printf " %-20s " "$name")
  if _vt_supports_truecolor && [[ -n "$bg_hex" && -n "$fg_hex" ]]; then
    local fR fG fB bR bG bB aR aG aB
    read -r fR fG fB <<< "$(_vt_hex_to_rgb "$fg_hex")"
    read -r bR bG bB <<< "$(_vt_hex_to_rgb "$bg_hex")"
    if [[ -n "$accent_hex" ]]; then
      read -r aR aG aB <<< "$(_vt_hex_to_rgb "$accent_hex")"
      printf -v "$out_var" '%s\033[38;2;%d;%d;%dm\033[48;2;%d;%d;%dm%s\033[0m  \033[90maccent\033[0m \033[38;2;%d;%d;%dm%s\033[0m' \
        "$prefix" "$fR" "$fG" "$fB" "$bR" "$bG" "$bB" "$padded" "$aR" "$aG" "$aB" "$accent_hex"
    else
      printf -v "$out_var" '%s\033[38;2;%d;%d;%dm\033[48;2;%d;%d;%dm%s\033[0m' \
        "$prefix" "$fR" "$fG" "$fB" "$bR" "$bG" "$bB" "$padded"
    fi
  else
    if [[ -n "$accent_hex" ]]; then
      printf -v "$out_var" '%s\033[90m• %s  (accent %s)\033[0m' "$prefix" "$name" "$accent_hex"
    else
      printf -v "$out_var" '%s\033[90m• %s\033[0m' "$prefix" "$name"
    fi
  fi
}

# Print a single theme's row as a colored block + accent hint, with the same
# 2-space indent the rest of the tool uses. Wraps `_vt_format_block`.
_vt_colored_block() {
  local _vt_line=""
  _vt_format_block _vt_line "  " "$1" "$2" "$3" "$4"
  printf '%s\n' "$_vt_line"
}

# Resolve global settings.json path (handles both standard and portable VSCode)
_vt_global_settings_path() {
  local candidates=(
    "${HOME}/Library/Application Support/Code/User/settings.json"   # macOS
    "${HOME}/.config/Code/User/settings.json"                       # Linux
    "${APPDATA}/Code/User/settings.json"                            # Windows (WSL)
  )
  for p in "${candidates[@]}"; do
    if [[ -f "$p" ]]; then echo "$p"; return; fi
  done
  # Return the most likely path even if not yet created
  if [[ "$OSTYPE" == darwin* ]]; then
    echo "${HOME}/Library/Application Support/Code/User/settings.json"
  else
    echo "${HOME}/.config/Code/User/settings.json"
  fi
}

# Find .vscode/settings.json walking up from cwd
_vt_workspace_settings_path() {
  local dir="$PWD"
  while [[ "$dir" != "/" ]]; do
    if [[ -d "$dir/.vscode" ]]; then
      echo "$dir/.vscode/settings.json"
      return
    fi
    dir="$(dirname "$dir")"
  done
  # No .vscode found — use current directory
  echo "$PWD/.vscode/settings.json"
}

# Extract the managed theme name from a settings.json (stored as a comment key)
_vt_read_managed_theme() {
  local settings_file="$1"
  [[ -f "$settings_file" ]] || { echo ""; return; }
  # We store the theme name as: "__vscode_theme_managed": "<name>"
  grep -o '"__vscode_theme_managed"[[:space:]]*:[[:space:]]*"[^"]*"' "$settings_file" \
    | sed 's/.*"__vscode_theme_managed"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/'
}

# Check if python3 or python is available for JSON merging
_vt_python() {
  if command -v python3 &>/dev/null; then echo "python3"
  elif command -v python &>/dev/null; then echo "python"
  else echo ""; fi
}

# Merge theme JSON into settings.json using Python.
# - Creates settings.json (and parent dirs) if missing.
# - If colorCustomizations already exist and are NOT managed by us,
#   saves them as __vscode_theme_backup before overwriting.
# - Prints "ok:fresh"    — file was created from scratch
#         "ok:backed-up" — existing colorCustomizations were backed up
#         "ok:updated"   — already managed, just switched theme
_vt_merge_settings() {
  local theme_file="$1"
  local settings_file="$2"
  local theme_name="$3"
  local py; py=$(_vt_python)

  if [[ -z "$py" ]]; then
    _vt_err "python3 is required for JSON merging but was not found."
    return 1
  fi

  "$py" - "$theme_file" "$settings_file" "$theme_name" <<'PYEOF'
import json, sys, os

theme_file, settings_file, theme_name = sys.argv[1], sys.argv[2], sys.argv[3]
KEY_MANAGED = "__vscode_theme_managed"
KEY_BACKUP  = "__vscode_theme_backup"

with open(theme_file) as f:
    theme = json.load(f)

# Load existing settings (empty dict if file absent or unparseable)
existing = {}
file_existed = os.path.isfile(settings_file)
if file_existed:
    try:
        with open(settings_file) as f:
            existing = json.load(f)
    except (json.JSONDecodeError, OSError):
        pass

# Determine status for caller
already_managed = KEY_MANAGED in existing
has_existing_colors = "workbench.colorCustomizations" in existing

if not file_existed:
    status = "ok:fresh"
elif already_managed:
    status = "ok:updated"
elif has_existing_colors:
    # Backup the pre-existing colorCustomizations inside the JSON
    existing[KEY_BACKUP] = existing["workbench.colorCustomizations"]
    status = "ok:backed-up"
else:
    status = "ok:fresh"

# Apply theme
existing["workbench.colorCustomizations"] = theme.get("workbench.colorCustomizations", {})
existing[KEY_MANAGED] = theme_name

dir_part = os.path.dirname(settings_file)
if dir_part:
    os.makedirs(dir_part, exist_ok=True)

with open(settings_file, "w") as f:
    json.dump(existing, f, indent=2, ensure_ascii=False)
    f.write("\n")

print(status)
PYEOF
}

# Remove managed keys from settings.json and restore backup if present.
# Prints "ok:restored" — backup was found and restored into colorCustomizations
#        "ok:removed"  — no backup; colorCustomizations deleted
#        "ok:empty"    — file had no other keys; file deleted
_vt_remove_managed_keys() {
  local settings_file="$1"
  local py; py=$(_vt_python)
  [[ -f "$settings_file" ]] || { echo "ok:removed"; return 0; }

  "$py" - "$settings_file" <<'PYEOF'
import json, sys, os

settings_file = sys.argv[1]
KEY_MANAGED = "__vscode_theme_managed"
KEY_BACKUP  = "__vscode_theme_backup"

with open(settings_file) as f:
    data = json.load(f)

backup = data.pop(KEY_BACKUP, None)
data.pop(KEY_MANAGED, None)
data.pop("workbench.colorCustomizations", None)

if backup is not None:
    data["workbench.colorCustomizations"] = backup
    status = "ok:restored"
elif not data:
    os.remove(settings_file)
    print("ok:empty")
    sys.exit(0)
else:
    status = "ok:removed"

with open(settings_file, "w") as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
    f.write("\n")

print(status)
PYEOF
}

# ── interactive picker helpers ────────────────────────────────────────────────

# Pick the shortest escape-sequence timeout the current shell accepts.
# Bash 4+ and modern zsh accept fractional -t; bash 3.2 requires integer.
if [[ -n "$ZSH_VERSION" ]]; then
  _VT_ESC_T=0.05
elif [[ "${BASH_VERSINFO[0]:-0}" -ge 4 ]]; then
  _VT_ESC_T=0.05
else
  _VT_ESC_T=1
fi

# Read exactly one raw byte (no echo, no IFS splitting) into REPLY.
# Portable across bash and zsh.
_vt_read1() {
  if [[ -n "$ZSH_VERSION" ]]; then
    read -sk 1
  else
    IFS= read -rsn1
  fi
}

# Read up to 2 more bytes with a short timeout, for disambiguating escape
# sequences (e.g. "\x1b[A"). Sets REPLY to "" if no bytes were available.
_vt_read_rest() {
  REPLY=""
  if [[ -n "$ZSH_VERSION" ]]; then
    read -sk 2 -t "$_VT_ESC_T" 2>/dev/null || REPLY=""
  else
    IFS= read -rsn2 -t "$_VT_ESC_T" 2>/dev/null || REPLY=""
  fi
}

# Silent wrapper around _vt_merge_settings, for live previews.
_vt_apply_silent() {
  _vt_merge_settings "$1" "$2" "$3" >/dev/null 2>&1
}

# Snapshot the target settings file before previewing.
# Prints "exists:<tmpfile>" when the file was present, or "absent" otherwise.
_vt_snapshot_settings() {
  local settings_file="$1"
  if [[ -f "$settings_file" ]]; then
    local tmp
    tmp="$(mktemp 2>/dev/null || echo "${TMPDIR:-/tmp}/vscode-theme-snap.$$.$RANDOM")"
    cp "$settings_file" "$tmp"
    echo "exists:$tmp"
  else
    echo "absent"
  fi
}

# Restore (or delete) the settings file back to its pre-picker state.
_vt_restore_settings() {
  local settings_file="$1" snapshot="$2"
  case "$snapshot" in
    exists:*)
      local tmp="${snapshot#exists:}"
      mkdir -p "$(dirname "$settings_file")"
      cp "$tmp" "$settings_file"
      rm -f "$tmp"
      ;;
    absent)
      rm -f "$settings_file"
      ;;
  esac
}

# Throw away a snapshot without restoring (user confirmed the new theme).
_vt_discard_snapshot() {
  case "$1" in
    exists:*) rm -f "${1#exists:}" ;;
  esac
}

# ── subcommands ───────────────────────────────────────────────────────────────

_vt_cmd_list() {
  _vt_h "Available themes"
  if [[ ! -d "$VSCODE_THEME_DIR" ]]; then
    _vt_warn "Theme directory not found: ${VSCODE_THEME_DIR}"
    _vt_dim "Create it and place <name>.json files inside."
    return 1
  fi
  local found=0
  for f in "$VSCODE_THEME_DIR"/*.json; do
    [[ -f "$f" ]] || continue
    local name bg fg accent
    name="$(basename "$f" .json)"
    bg="$(_vt_read_color "$f" "statusBar.background")"
    fg="$(_vt_read_color "$f" "statusBar.foreground")"
    accent="$(_vt_read_color "$f" "activityBar.foreground")"
    _vt_colored_block "$name" "$bg" "$fg" "$accent"
    found=1
  done
  [[ $found -eq 0 ]] && _vt_warn "No theme files found in ${VSCODE_THEME_DIR}"
}

_vt_cmd_status() {
  _vt_h "VSCode theme status"

  local global_settings; global_settings="$(_vt_global_settings_path)"
  local global_theme;    global_theme="$(_vt_read_managed_theme "$global_settings")"

  echo ""
  echo -e "  ${_vscode_theme_color_bold}Global${_vscode_theme_color_reset}"
  _vt_dim "  Path: $global_settings"
  if [[ -n "$global_theme" ]]; then
    _vt_ok "Theme: ${_vscode_theme_color_cyan}${global_theme}${_vscode_theme_color_reset}  (managed)"
    # Check for backup inside the file
    if grep -q '"__vscode_theme_backup"' "$global_settings" 2>/dev/null; then
      _vt_dim "  Backup: pre-existing colorCustomizations saved in __vscode_theme_backup"
    fi
  else
    _vt_dim "Theme: (none / not managed)"
  fi

  echo ""
  echo -e "  ${_vscode_theme_color_bold}Workspace${_vscode_theme_color_reset}"
  local ws_settings; ws_settings="$(_vt_workspace_settings_path)"
  _vt_dim "  Path: $ws_settings"
  if [[ -f "$ws_settings" ]]; then
    local ws_theme; ws_theme="$(_vt_read_managed_theme "$ws_settings")"
    if [[ -n "$ws_theme" ]]; then
      _vt_ok "Theme: ${_vscode_theme_color_cyan}${ws_theme}${_vscode_theme_color_reset}  (managed)"
      if grep -q '"__vscode_theme_backup"' "$ws_settings" 2>/dev/null; then
        _vt_dim "  Backup: pre-existing colorCustomizations saved in __vscode_theme_backup"
      fi
    else
      _vt_dim "Theme: (exists but not managed by vscode-theme)"
    fi
  else
    _vt_dim "Theme: (none — falls back to global)"
  fi
  echo ""
}

_vt_cmd_set_interactive() {
  local is_global="$1"
  local settings_file scope
  if [[ "$is_global" -eq 1 ]]; then
    settings_file="$(_vt_global_settings_path)"
    scope="global"
  else
    settings_file="$(_vt_workspace_settings_path)"
    scope="workspace"
  fi

  if [[ ! -d "$VSCODE_THEME_DIR" ]]; then
    _vt_err "Theme directory not found: ${VSCODE_THEME_DIR}"
    return 1
  fi

  local themes=() bgs=() fgs=() accents=() f tf
  for f in "$VSCODE_THEME_DIR"/*.json; do
    [[ -f "$f" ]] || continue
    tf="$(basename "$f" .json)"
    themes+=("$tf")
    bgs+=("$(_vt_read_color "$f" "statusBar.background")")
    fgs+=("$(_vt_read_color "$f" "statusBar.foreground")")
    accents+=("$(_vt_read_color "$f" "activityBar.foreground")")
  done
  local count=${#themes[@]}
  if [[ "$count" -eq 0 ]]; then
    _vt_err "No theme files found in ${VSCODE_THEME_DIR}"
    return 1
  fi

  # Start on the currently-managed theme if possible, else the first one.
  local current; current="$(_vt_read_managed_theme "$settings_file")"
  local idx=0 i
  if [[ -n "$current" ]]; then
    for ((i=0; i<count; i++)); do
      if [[ "${themes[$i]}" == "$current" ]]; then
        idx=$i
        break
      fi
    done
  fi

  _vt_h "Select a theme for ${scope}"
  _vt_dim "Up/Down or j/k to navigate · Enter to confirm · Esc or q to cancel"
  echo ""

  # Viewport: when the theme list is taller than the terminal, only render a
  # window of `body_height` rows that always contains `idx`, with up/down hint
  # lines indicating how many more themes are off-screen.
  local term_h=${LINES:-0}
  if (( term_h <= 0 )); then
    term_h=$(tput lines 2>/dev/null || echo 24)
  fi
  local vh=$((term_h - 6))   # 3 header lines + 2 indicator lines + 1 prompt slot
  (( vh < 3 )) && vh=3
  local body_height=$count
  (( body_height > vh )) && body_height=$vh
  local show_scroll=0
  (( count > body_height )) && show_scroll=1
  local lines_per_frame=$body_height
  (( show_scroll )) && lines_per_frame=$((body_height + 2))

  # Anchor `top` so the initial `idx` (which may be the currently-managed theme)
  # is inside the visible window.
  local top=0
  if (( idx >= top + body_height )); then
    top=$((idx - body_height + 1))
  fi
  if (( count > body_height )) && (( top > count - body_height )); then
    top=$((count - body_height))
  fi
  (( top < 0 )) && top=0

  mkdir -p "$(dirname "$settings_file")"
  local snapshot; snapshot="$(_vt_snapshot_settings "$settings_file")"

  # Apply the starting preview so VSCode reflects the highlighted row immediately.
  _vt_apply_silent "${VSCODE_THEME_DIR}/${themes[$idx]}.json" "$settings_file" "${themes[$idx]}"

  # Ctrl-C while read() is blocked: trap fires, flag gets set, read returns ≠0,
  # loop checks the flag and treats it as a cancel.
  _vt_int_flag=0
  trap '_vt_int_flag=1' INT

  local cancelled=0 first=1 rest key end below
  while true; do
    if [[ $first -eq 1 ]]; then
      first=0
    else
      # Move cursor up by however many lines we wrote last frame, then clear.
      printf '\033[%dA\033[J' "$lines_per_frame"
    fi

    if (( show_scroll )); then
      if (( top > 0 )); then
        printf '  \033[90m↑ %d more above\033[0m\n' "$top"
      else
        printf '\n'
      fi
    fi

    local _vt_line=""
    end=$((top + body_height))
    for ((i = top; i < end; i++)); do
      if [[ $i -eq $idx ]]; then
        _vt_format_block _vt_line $'  \033[36m▸\033[0m ' "${themes[$i]}" "${bgs[$i]}" "${fgs[$i]}" "${accents[$i]}"
      else
        _vt_format_block _vt_line "    " "${themes[$i]}" "${bgs[$i]}" "${fgs[$i]}" "${accents[$i]}"
      fi
      printf '%s\n' "$_vt_line"
    done

    if (( show_scroll )); then
      below=$((count - end))
      if (( below > 0 )); then
        printf '  \033[90m↓ %d more below\033[0m\n' "$below"
      else
        printf '\n'
      fi
    fi

    _vt_read1
    key="$REPLY"
    if [[ $_vt_int_flag -eq 1 ]]; then
      cancelled=1
      break
    fi

    case "$key" in
      $'\x1b')
        _vt_read_rest
        rest="$REPLY"
        case "$rest" in
          '[A') (( idx > 0 ))          && idx=$((idx - 1)) ;;
          '[B') (( idx < count - 1 ))  && idx=$((idx + 1)) ;;
          '')   cancelled=1; break ;;   # plain Escape
        esac
        ;;
      '')     break ;;                  # Enter
      k|K)    (( idx > 0 ))         && idx=$((idx - 1)) ;;
      j|J)    (( idx < count - 1 )) && idx=$((idx + 1)) ;;
      q|Q)    cancelled=1; break ;;
    esac

    # Scroll the viewport just enough to keep `idx` visible.
    (( idx < top ))                   && top=$idx
    (( idx >= top + body_height ))    && top=$((idx - body_height + 1))
    (( top < 0 ))                     && top=0
    if (( count > body_height )) && (( top > count - body_height )); then
      top=$((count - body_height))
    fi

    _vt_apply_silent "${VSCODE_THEME_DIR}/${themes[$idx]}.json" "$settings_file" "${themes[$idx]}"
  done

  trap - INT
  echo ""

  if [[ $cancelled -eq 1 ]]; then
    _vt_restore_settings "$settings_file" "$snapshot"
    _vt_info "Cancelled. Reverted to previous ${scope} state."
    echo ""
    return 0
  fi

  _vt_discard_snapshot "$snapshot"
  _vt_ok "Theme ${_vscode_theme_color_cyan}${themes[$idx]}${_vscode_theme_color_reset} applied to ${scope}."
  _vt_dim "Reload VSCode window if colors didn't update (Cmd/Ctrl+Shift+P → Reload Window)."
  echo ""
}

_vt_cmd_set() {
  local theme_name="" is_global=0

  # Parse args
  for arg in "$@"; do
    case "$arg" in
      -g|--global) is_global=1 ;;
      -*) _vt_err "Unknown option: $arg"; return 1 ;;
      *)  theme_name="$arg" ;;
    esac
  done

  if [[ -z "$theme_name" ]]; then
    _vt_cmd_set_interactive "$is_global"
    return $?
  fi

  local theme_file="${VSCODE_THEME_DIR}/${theme_name}.json"
  if [[ ! -f "$theme_file" ]]; then
    _vt_err "Theme not found: ${theme_name}"
    _vt_dim "Expected: $theme_file"
    _vt_cmd_list
    return 1
  fi

  local settings_file
  if [[ $is_global -eq 1 ]]; then
    settings_file="$(_vt_global_settings_path)"
    local scope="global"
  else
    settings_file="$(_vt_workspace_settings_path)"
    local scope="workspace"
  fi

  _vt_h "Applying theme: ${theme_name}  →  ${scope}"

  # Ensure parent directory exists (Python also does this, but be explicit)
  mkdir -p "$(dirname "$settings_file")"

  local result; result=$(_vt_merge_settings "$theme_file" "$settings_file" "$theme_name")
  case "$result" in
    ok:fresh)
      _vt_ok "Theme ${_vscode_theme_color_cyan}${theme_name}${_vscode_theme_color_reset} applied to ${scope}."
      _vt_dim "settings.json created."
      ;;
    ok:backed-up)
      _vt_ok "Theme ${_vscode_theme_color_cyan}${theme_name}${_vscode_theme_color_reset} applied to ${scope}."
      _vt_info "Existing color customizations backed up inside settings.json (__vscode_theme_backup)."
      ;;
    ok:updated)
      _vt_ok "Theme switched to ${_vscode_theme_color_cyan}${theme_name}${_vscode_theme_color_reset} (${scope})."
      ;;
    *)
      _vt_err "Failed to apply theme. Check that python3 is installed."
      return 1
      ;;
  esac
  _vt_dim "Reload VSCode window to see changes (Cmd/Ctrl+Shift+P → Reload Window)."
  echo ""
}

_vt_cmd_reset() {
  local is_global=0

  for arg in "$@"; do
    case "$arg" in
      -g|--global) is_global=1 ;;
      -*) _vt_err "Unknown option: $arg"; return 1 ;;
    esac
  done

  local settings_file
  if [[ $is_global -eq 1 ]]; then
    settings_file="$(_vt_global_settings_path)"
    local scope="global"
  else
    settings_file="$(_vt_workspace_settings_path)"
    local scope="workspace"
  fi

  _vt_h "Resetting ${scope} theme"

  if [[ ! -f "$settings_file" ]]; then
    _vt_warn "No settings file found at:"
    _vt_dim "  $settings_file"
    if [[ $is_global -eq 0 ]]; then
      _vt_info "Workspace has no settings — design follows global settings."
    fi
    echo ""
    return 0
  fi

  local current_theme; current_theme="$(_vt_read_managed_theme "$settings_file")"
  if [[ -z "$current_theme" ]]; then
    _vt_warn "No managed theme found in ${scope} settings. Nothing to reset."
    echo ""
    return 0
  fi

  # Remove managed keys (and restore backup if present)
  local result; result=$(_vt_remove_managed_keys "$settings_file")

  case "$result" in
    ok:restored)
      _vt_ok "Reverted ${scope} to the color configuration that existed before."
      _vt_dim "(Previous colorCustomizations restored from __vscode_theme_backup.)"
      ;;
    ok:removed)
      _vt_ok "Reverted to default VSCode design."
      _vt_dim "(Color customizations removed; other settings preserved.)"
      if [[ $is_global -eq 0 ]]; then
        local global_settings; global_settings="$(_vt_global_settings_path)"
        local global_theme;    global_theme="$(_vt_read_managed_theme "$global_settings")"
        if [[ -n "$global_theme" ]]; then
          _vt_info "Workspace will now follow the global theme: ${_vscode_theme_color_cyan}${global_theme}${_vscode_theme_color_reset}"
        else
          _vt_info "Workspace will now follow the global VSCode settings."
        fi
      fi
      ;;
    ok:empty)
      _vt_ok "Reverted to default VSCode design."
      _vt_dim "(settings.json had no other settings and was removed.)"
      if [[ $is_global -eq 0 ]]; then
        local global_settings; global_settings="$(_vt_global_settings_path)"
        local global_theme;    global_theme="$(_vt_read_managed_theme "$global_settings")"
        if [[ -n "$global_theme" ]]; then
          _vt_info "Workspace will now follow the global theme: ${_vscode_theme_color_cyan}${global_theme}${_vscode_theme_color_reset}"
        else
          _vt_info "Workspace will now follow the global VSCode settings."
        fi
      fi
      ;;
    *)
      _vt_err "Unexpected result from reset. Please check settings.json manually."
      return 1
      ;;
  esac
  _vt_dim "Reload VSCode window to see changes (Cmd/Ctrl+Shift+P → Reload Window)."
  echo ""
}

_vt_cmd_version() {
  echo -e "${_vscode_theme_color_bold}vscode-theme${_vscode_theme_color_reset} version ${_vscode_theme_color_cyan}${VSCODE_THEME_VERSION}${_vscode_theme_color_reset}"
}

_vt_usage() {
  echo ""
  _vt_cmd_version
  echo ""
  echo -e "  ${_vscode_theme_color_bold}USAGE${_vscode_theme_color_reset}"
  echo "    vscode-theme <command> [arguments]"
  echo ""
  echo -e "  ${_vscode_theme_color_bold}COMMANDS${_vscode_theme_color_reset}"
  echo -e "    ${_vscode_theme_color_cyan}list${_vscode_theme_color_reset}"
  echo "        List all available theme names from the theme directory."
  echo ""
  echo -e "    ${_vscode_theme_color_cyan}status${_vscode_theme_color_reset}"
  echo "        Show the currently applied theme for both global and workspace"
  echo "        settings, including whether a pre-existing backup is stored."
  echo ""
  echo -e "    ${_vscode_theme_color_cyan}set${_vscode_theme_color_reset} [theme-name] [-g | --global]"
  echo "        Apply a theme by name (the JSON filename without .json)."
  echo "        Defaults to workspace scope. Use -g / --global for global scope."
  echo "        If colorCustomizations already exist and were not set by this"
  echo "        tool, they are backed up inside settings.json before overwriting."
  echo ""
  echo "        Omit <theme-name> to open an interactive picker:"
  echo "          Up/Down or j/k to navigate (theme applies live on each step)"
  echo "          Enter          to confirm"
  echo "          Esc or q       to cancel and revert to the previous state"
  echo ""
  echo -e "    ${_vscode_theme_color_cyan}reset${_vscode_theme_color_reset} [-g | --global]"
  echo "        Remove the applied theme from workspace (default) or global"
  echo "        settings. If a backup exists it is restored automatically."
  echo "        If no backup exists the colorCustomizations are deleted and"
  echo "        the workspace falls back to global settings."
  echo ""
  echo -e "    ${_vscode_theme_color_cyan}help${_vscode_theme_color_reset}"
  echo "        Show this help message."
  echo ""
  echo -e "    ${_vscode_theme_color_cyan}version${_vscode_theme_color_reset}"
  echo "        Show the current version of vscode-theme."
  echo ""
  echo -e "  ${_vscode_theme_color_bold}OPTIONS${_vscode_theme_color_reset}"
  echo "    -g, --global   Target global VSCode settings instead of workspace"
  echo ""
  echo -e "  ${_vscode_theme_color_bold}THEME FILES${_vscode_theme_color_reset}"
  echo "    Place <theme-name>.json files in:"
  echo -e "    ${_vscode_theme_color_gray}${VSCODE_THEME_DIR}${_vscode_theme_color_reset}"
  echo ""
  echo -e "  ${_vscode_theme_color_bold}EXAMPLES${_vscode_theme_color_reset}"
  echo "    vscode-theme list"
  echo "    vscode-theme set                             # interactive picker"
  echo "    vscode-theme set -g                          # picker, global scope"
  echo "    vscode-theme set navy-orange"
  echo "    vscode-theme set squidink-yellow --global"
  echo "    vscode-theme status"
  echo "    vscode-theme reset"
  echo "    vscode-theme reset -g"
  echo ""
}

# ── entry point ───────────────────────────────────────────────────────────────

vscode-theme() {
  local cmd="${1:-}"
  shift 2>/dev/null || true

  case "$cmd" in
    list)                  _vt_cmd_list    "$@" ;;
    status)                _vt_cmd_status  "$@" ;;
    set)                   _vt_cmd_set     "$@" ;;
    reset)                 _vt_cmd_reset   "$@" ;;
    version|--version|-v)  _vt_cmd_version      ;;
    ""|help|--help|-h)     _vt_usage            ;;
    *)
      _vt_err "Unknown command: ${cmd}"
      _vt_usage
      return 1
      ;;
  esac
}
