#!/usr/bin/env bash
set -euo pipefail

WORKSPACE="${1:-/workspace}"

# Volume content masks the image's ownership of a mount point, so a volume first
# created by a root-run container stays root-owned across every later rebuild
sudo chown -R "$(id -u):$(id -g)" "${MISE_DATA_DIR}" "${PNPM_STORE_DIR}"

mise trust "${WORKSPACE}/mise.toml"
mise install

pnpm config set --global store-dir "${PNPM_STORE_DIR}"

# Globally install claude-code, respecting the workspace's supply-chain delay.

# Global installs resolve outside the workspace and so miss its supply-chain
# delay; read the value rather than restating it
min_release_age="$(awk '/^minimumReleaseAge:[[:space:]]*[0-9]+/ { print $2; exit }' \
    "${WORKSPACE}/pnpm-workspace.yaml")"
pnpm config set --global minimumReleaseAge \
    "${min_release_age:?not found in pnpm-workspace.yaml}"

# Installing outside the workspace stops --allow-build rewriting the tracked
# pnpm-workspace.yaml; shims resolve no version out there, so use real paths
pnpm_bin="$(mise which pnpm)"
node_bin="$(dirname "$(mise which node)")"
cd "${HOME}"
PATH="${node_bin}:${PATH}" "${pnpm_bin}" add -g \
    --allow-build=@anthropic-ai/claude-code @anthropic-ai/claude-code

# Claude Code state (~/.claude and the sibling ~/.claude.json) is otherwise lost
# on Rebuild Container
claude_state="${WORKSPACE}/.claude-user"
mkdir -p "${claude_state}"
rm -rf "${HOME}/.claude" "${HOME}/.claude.json"
ln -sfn "${claude_state}" "${HOME}/.claude"
ln -sfn "${claude_state}/claude.json" "${HOME}/.claude.json"
