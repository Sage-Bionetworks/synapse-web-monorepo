FROM node:22-slim

RUN apt-get update \
    && apt-get install -y --no-install-recommends curl git ca-certificates unzip xz-utils \
    && rm -rf /var/lib/apt/lists/*

# mise (https://mise.jdx.dev) - manages Java/Node/pnpm per mise.toml
RUN curl -fsSL https://mise.run | sh
ENV PATH="/root/.local/bin:/root/.local/share/mise/shims:${PATH}"

RUN npm install -g @anthropic-ai/claude-code

WORKDIR /workspace
