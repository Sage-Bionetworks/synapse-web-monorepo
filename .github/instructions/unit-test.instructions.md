---
applyTo: '**/*.test.{ts,tsx}'
---

Your task is to write unit tests for one or more files.

When writing unit tests in this codebase, follow these guidelines to ensure consistency and quality:

- Use Vitest as the testing framework.
- Place test files alongside the components they test, using the `.test.ts` or `.test.tsx` suffix.
- Use descriptive test names that clearly indicate the purpose of the test.
- When testing React components or hooks, use `@testing-library/react` to mount the instance.
- When testing React components, use `@testing-library/react` to query elements.
- When testing React components, use `@testing-library/user-event` to simulate user interactions. Do NOT use `fireEvent` unless absolutely necessary.
- Mock external dependencies and API calls to isolate the unit being tested. If this is too complicated consider halting and suggesting potential refactors to the to make the code more testable

## Mock style

When mocking modules, follow these guidelines:

- Write `vi.mock` before creating mock functions, since `vi.mock` calls are hoisted.
- Use `vi.mocked` to typecast mocked modules for better type safety.

For example:

```typescript
import { myFunction } from './myModule'

vi.mock('./myModule', () => ({
  myFunction: vi.fn(),
}))
const mockMyFunction = vi.mocked(myFunction)
```
