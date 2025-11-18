# Copilot Instructions for synapse-web-monorepo

This monorepo contains TypeScript projects for Sage Bionetworks' Synapse platform, including React apps, shared libraries, and API clients. AI coding agents should follow these guidelines to be productive and maintain consistency.

## Architecture Overview
- **Monorepo managed by Nx and pnpm**: All builds, tests, and dependency management use Nx and pnpm. Use `pnpm nx ...` for project tasks.
- **Apps**: Located in `apps/`, including portals, account management, and OAuth sign-in clients.
- **Packages**: Located in `packages/`, including `synapse-react-client` (UI components), `synapse-client` (API client), and shared config/utilities.
- **Shared config**: `shared/` contains TypeScript and build configs used across projects.

## Developer Workflows
- **Install dependencies**: `pnpm i`
- **Build all projects**: `pnpm build`
- **Test all projects**: `pnpm test`
- **Run a portal locally**: `pnpm nx run <portalName>:start` (after building dependencies)
- **Generate API client code**: `pnpm nx run @sage-bionetworks/synapse-client:build`
- **Update OpenAPI spec**: `pnpm get-spec` (production) or `pnpm get-spec:staging` (staging)

## Project Conventions
- **React components**: Business logic should be separated from UI components. Use hooks and utility modules for logic.
- **API calls**: Use `@tanstack/react-query` hooks for all API interactions. Mutations must invalidate relevant queries.
- **Testing**: Use Vitest for all tests. Use `@testing-library/react` for component tests. Use `@testing-library/user-event` to test interactions in component tests. Prioritize unit tests for business logic. Tests are colocated with the code they test.
- **Commit messages**: Format as `<ticket_number> - <short description>`, followed by a bullet list of changes and optional explanation.
- **Avoid breaking changes**: Especially in public APIs (e.g., `src/SWC.index.ts` in `synapse-react-client`).
- **Use generated API clients**: Do not modify `SynapseClient.ts` directly; use the generated client from `@sage-bionetworks/synapse-client`.

## Integration Patterns
- **Cross-package imports**: Use workspace-relative imports (e.g., `@/synapse-queries/...`).
- **Context providers**: All components requiring Synapse API access must be wrapped in `SynapseContextProvider`.
- **React Query cache**: Place context providers high in the component tree to share cache.

## Key Files & Directories
- `apps/portals/README.md`: Portal run instructions
- `packages/synapse-client/README.md`: API client generation and OpenAPI spec update instructions
- `packages/synapse-react-client/AGENTS.md`: Component, API, and testing conventions
- `shared/tsconfig.base.json`: Shared TypeScript config

## Example: Adding a New API Hook
1. Create a hook in `src/synapse-queries/` using `@tanstack/react-query`.
2. Use the generated client from `@sage-bionetworks/synapse-client`.
3. Invalidate queries on mutation.
4. Add unit tests in `src/synapse-queries/__tests__/` using Vitest.

---

If any section is unclear or missing important project-specific details, please provide feedback so this guide can be improved.
