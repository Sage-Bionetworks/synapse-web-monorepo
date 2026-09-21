# Used to copy `mise` binary into this image (https://mise.jdx.dev/mise-cookbook/docker.html#copy-the-binary-into-your-own-image)
# Declared as a build stage so Dependabot tracks it
FROM ghcr.io/jdx/mise:2026.9.12@sha256:868b004119abb2e7c146618da63371ec65da40bfb0f38a0ec4128ca9e96c057a AS mise

FROM mcr.microsoft.com/devcontainers/base:debian

COPY --from=mise /usr/local/bin/mise /usr/local/bin/mise

ENV MISE_DATA_DIR="/mnt/mise-data"
ENV MISE_CACHE_DIR="/mnt/mise-data/cache"
ENV PNPM_STORE_DIR="/mnt/pnpm-store"
ENV PNPM_HOME="/home/vscode/.local/share/pnpm"
ENV PATH="${MISE_DATA_DIR}/shims:${PNPM_HOME}:${PATH}"

# Ensures interactive terminals have the toolchain in the PATH
RUN printf '%s\n' \
    'eval "$(mise activate bash)"' \
    'export PATH="${PNPM_HOME}:${PATH}"' \
    >> /home/vscode/.bashrc

RUN install -d -o vscode -g vscode /mnt/mise-data /mnt/pnpm-store

USER vscode

WORKDIR /workspace
