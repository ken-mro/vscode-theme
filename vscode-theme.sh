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

# Print a single theme's row as a colored status-bar-style block + accent hint.
# Falls back to a plain dim row when truecolor isn't available.
_vt_colored_block() {
  local name="$1" bg_hex="$2" fg_hex="$3" accent_hex="$4"
  local padded
  padded=$(printf " %-20s " "$name")
  if _vt_supports_truecolor && [[ -n "$bg_hex" && -n "$fg_hex" ]]; then
    local fR fG fB bR bG bB aR aG aB
    read -r fR fG fB <<< "$(_vt_hex_to_rgb "$fg_hex")"
    read -r bR bG bB <<< "$(_vt_hex_to_rgb "$bg_hex")"
    if [[ -n "$accent_hex" ]]; then
      read -r aR aG aB <<< "$(_vt_hex_to_rgb "$accent_hex")"
      printf "  \033[38;2;%d;%d;%dm\033[48;2;%d;%d;%dm%s\033[0m  \033[90maccent\033[0m \033[38;2;%d;%d;%dm%s\033[0m\n" \
        "$fR" "$fG" "$fB" "$bR" "$bG" "$bB" "$padded" "$aR" "$aG" "$aB" "$accent_hex"
    else
      printf "  \033[38;2;%d;%d;%dm\033[48;2;%d;%d;%dm%s\033[0m\n" \
        "$fR" "$fG" "$fB" "$bR" "$bG" "$bB" "$padded"
    fi
  else
    if [[ -n "$accent_hex" ]]; then
      _vt_dim "• $name  (accent $accent_hex)"
    else
      _vt_dim "• $name"
    fi
  fi
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
    _vt_err "Usage: vscode-theme set <name> [-g | --global]"
    _vt_cmd_list
    return 1
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
  echo -e "    ${_vscode_theme_color_cyan}set${_vscode_theme_color_reset} <theme-name> [-g | --global]"
  echo "        Apply a theme by name (the JSON filename without .json)."
  echo "        Defaults to workspace scope. Use -g / --global for global scope."
  echo "        If colorCustomizations already exist and were not set by this"
  echo "        tool, they are backed up inside settings.json before overwriting."
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
