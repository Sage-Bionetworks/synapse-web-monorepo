FROM node:22-slim

# mise (https://mise.jdx.dev) - manages Java/Node/pnpm per mise.toml.
RUN apt-get update \
    && apt-get install -y --no-install-recommends curl git ca-certificates unzip xz-utils extrepo \
    && extrepo enable mise \
    && apt-get remove -y --auto-remove extrepo \
    && apt-get update \
    && apt-get install -y --no-install-recommends mise=2026.9.12 \
    && rm -rf /var/lib/apt/lists/*

# chown ~/.local/share dirs that `root` added from `root` to `node` so the `node` user can write as needed
RUN mkdir -p /home/node/.local/share/mise && chown -R node:node /home/node/.local

# Switch to non-root user
USER node

# Add mise shims and pnpm's global bin dir to the PATH.
ENV PNPM_HOME="/home/node/.local/share/pnpm"
ENV PATH="/home/node/.local/share/mise/shims:${PNPM_HOME}:${PATH}"

WORKDIR /workspace
