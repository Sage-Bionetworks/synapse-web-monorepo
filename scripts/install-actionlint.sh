#!/usr/bin/env bash
# Downloads the actionlint binary to ./bin/actionlint for the pre-commit hook.
# Pinned to a specific version for reproducibility.
set -euo pipefail

ACTIONLINT_VERSION="1.7.12"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BIN_DIR="$REPO_ROOT/bin"
BIN="$BIN_DIR/actionlint"

if [ -x "$BIN" ] && [ "$("$BIN" -version 2>/dev/null | head -n1)" = "$ACTIONLINT_VERSION" ]; then
  exit 0
fi

mkdir -p "$BIN_DIR"

DOWNLOAD_URL="https://raw.githubusercontent.com/rhysd/actionlint/v${ACTIONLINT_VERSION}/scripts/download-actionlint.bash"
TMP_SCRIPT="$(mktemp)"
trap 'rm -f "$TMP_SCRIPT"' EXIT

if ! curl -fsSL "$DOWNLOAD_URL" -o "$TMP_SCRIPT"; then
  echo "actionlint: failed to download installer; skipping (pre-commit will fail if invoked)" >&2
  exit 0
fi

bash "$TMP_SCRIPT" "$ACTIONLINT_VERSION" "$BIN_DIR" >/dev/null
echo "Installed actionlint $ACTIONLINT_VERSION to $BIN"
