#!/usr/bin/env bash
# Install/update vscode-theme. Wraps the manual copy-paste block in README.md
# so the same flow can be run as `./install.sh`. Rerun any time to update —
# every step is idempotent (file copies overwrite, profile append is guarded).
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# 1. Create the theme directory
mkdir -p ~/.vscode-themes

# 2. Copy the bundled theme JSONs
cp .vscode-themes/*.json ~/.vscode-themes/

# 3. Bake the current version into vscode-theme.sh, copy it to the install
#    location, then revert the repo copy back to its __VERSION__ placeholder
#    so the working tree stays clean.
VERSION=$(cat VERSION)
sed -i.bak "s/__VERSION__/${VERSION}/" vscode-theme.sh
cp vscode-theme.sh ~/.vscode-themes/vscode-theme.sh
mv vscode-theme.sh.bak vscode-theme.sh

# 4. Pick the shell profile (zsh by default; bash if $SHELL points to bash).
case "${SHELL:-}" in
    */bash) PROFILE="${HOME}/.bashrc" ;;
    *)      PROFILE="${HOME}/.zshrc"  ;;
esac

# 5. Add to shell profile — idempotent: only append if the line isn't already
#    there, so rerunning as an update is safe.
LINE='source ~/.vscode-themes/vscode-theme.sh'
touch "$PROFILE"
if ! grep -qF "$LINE" "$PROFILE"; then
    echo "$LINE" >> "$PROFILE"
    echo "Added '$LINE' to $PROFILE"
else
    echo "Source line already present in $PROFILE — left unchanged"
fi

echo
echo "vscode-theme $VERSION installed/updated."
echo "Reload your shell to pick it up:"
echo "  source $PROFILE"
