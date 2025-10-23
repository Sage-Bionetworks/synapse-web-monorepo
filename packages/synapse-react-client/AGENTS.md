synapse-react-client is a TypeScript-based package that provides React components and utilities for building user interfaces that interact with Synapse, a collaborative research platform. The package includes components for displaying data, managing user authentication, and integrating with Synapse services.

synapse-react-client is used in various applications. Some of them are contained in this monorepo, while others are external projects. For this reason, it is important to avoid unnecessary breaking changes to the API defined in src/SWC.index.ts

## Code Standards

### Repository Structure
- `src/assets` - Static assets like images and icons.
- `src/components` - Reusable React components.
- `src/mocks` - Reusable mock data and mock objects.
- `src/synapse-client` - Logic for making API calls to Synapse. Making changes to `SynapseClient.ts` is discouraged; use the generated API client from the `@sage-bionetworks/synapse-client` package instead (the source for this package can be found in `<workspace_root>/packages/synapse-client`).
- `src/synapse-queries` - Reusable Synapse API hooks that use @tanstack/react-query.

### Development Considerations
- Use the TypeScript compiler (`pnpm tsc -b --watch`) to catch type errors early.
- Try to keep business logic out of React components and in separate modules to facilitate testing and reuse.
- API calls should be made using @tanstack/react-query. Each API call should have its own custom hook.
  - Mutations should invalidate relevant queries to keep data synchronized.
- This project has technical debt. When modifying existing code, consider refactoring to improve code quality, but ensure you prompt the user for confirmation before making significant changes.

### Testing Guidelines
- Use Vitest for all tests.
- Use @testing-library/react for testing React components.
- Thorough unit testing for business logic is more important than component testing

## Commit messages

Commit messages should be of the following format:
```
<ticket_number> - <optional_short_description>

<list of changes made>

<optional explanation of why the changes were made>
```