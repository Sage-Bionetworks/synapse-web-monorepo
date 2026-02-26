# NF Portal — Production Docker Image
#
# Multi-stage build for the NF Data Portal SSR server.
# Build from the monorepo root:
#
#   docker build -f apps/portals/nf/Dockerfile -t nf-portal .
#   docker run -p 3001:3001 nf-portal
#
# Environment variables:
#   PORT      — Server port (default: 3001)
#   NODE_ENV  — Set to "production" by default
#
# Build arguments:
#   VITE_PORTAL_NAME        — Portal display name
#   VITE_PORTAL_DESCRIPTION — Portal meta description
#   VITE_PORTAL_KEY         — Portal key

# ---------------------------------------------------------------------------
# Stage 1: Install dependencies and build
# ---------------------------------------------------------------------------
FROM node:22-slim AS build

RUN corepack enable

# Java is required for openapi-generator-cli (used by synapse-client's
# `generate` target, which is a dependency of `nf:build` via Nx).
RUN apt-get update && \
    apt-get install -y --no-install-recommends default-jre-headless && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Copy the full monorepo (filtered by .dockerignore at repo root)
COPY . .

# Install all dependencies (including devDependencies needed for building)
RUN pnpm install --frozen-lockfile

# Build arguments for Vite env vars (baked into client bundle at build time)
ARG VITE_PORTAL_NAME="NF Data Portal"
ARG VITE_PORTAL_DESCRIPTION="Exploring the neurofibromatosis data landscape"
ARG VITE_PORTAL_KEY="nf"
ENV VITE_PORTAL_NAME=${VITE_PORTAL_NAME}
ENV VITE_PORTAL_DESCRIPTION=${VITE_PORTAL_DESCRIPTION}
ENV VITE_PORTAL_KEY=${VITE_PORTAL_KEY}

# Build the NF portal (builds workspace dependencies first via Nx)
RUN pnpm nx run nf:build

# Create a pruned production deployment with only runtime dependencies.
# pnpm deploy resolves workspace:* references and copies only production
# deps into the target directory.
RUN pnpm deploy --filter=nf --legacy /app/deploy

# ---------------------------------------------------------------------------
# Stage 2: Production image (no Java, no build tools)
# ---------------------------------------------------------------------------
FROM node:22-slim AS production

RUN groupadd --system --gid 1001 nodejs && \
    useradd --system --uid 1001 --gid nodejs appuser

WORKDIR /app

# Copy pruned production node_modules from pnpm deploy
COPY --from=build /app/deploy/node_modules ./node_modules

# Copy build output (client bundle, server bundle, pre-rendered HTML)
# Note: the sitemap is generated dynamically by the SSR server at /sitemap.xml
COPY --from=build /app/apps/portals/nf/build ./build

# Copy server entry point and package.json (needed for "type": "module")
COPY --from=build /app/apps/portals/nf/server.js ./server.js
COPY --from=build /app/apps/portals/nf/package.json ./package.json

ENV NODE_ENV=production
ENV PORT=3001

EXPOSE 3001

USER appuser

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD node -e "fetch('http://localhost:3001/health').then(r => { if (!r.ok) process.exit(1) })" || exit 1

CMD ["node", "server.js"]
