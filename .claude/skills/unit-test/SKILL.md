---
name: unit-test
description: Write unit tests for one or more files following this codebase's conventions (Vitest, Testing Library, inline mocks). Use this skill whenever the user asks to write, add, or generate tests — including "write tests for X", "add test coverage", "test this component", or "how do I test this".
argument-hint: '[file to test]'
---

Read the file(s) under test thoroughly before writing anything. Understanding the component's real behavior — its props, state, side effects, and edge cases — is what makes a test suite useful rather than just mechanical.

## Framework and file conventions

- **Vitest** is the test runner.
- Place test files alongside the source file: `MyComponent.test.tsx` next to `MyComponent.tsx`.
- Use descriptive `it()` names that read like a sentence explaining what the component does — not what the test does. `it('shows an error message when the request fails')` is better than `it('renders error state')`.

## Testing React components and hooks

- Use `@testing-library/react` to render components and query the DOM. Prefer queries that reflect what a user sees: `getByRole`, `getByLabelText`, `getByText` over `getByTestId`.
- Use `@testing-library/user-event` to simulate interactions. Avoid `fireEvent` — `userEvent` more closely models real browser behavior and catches bugs that `fireEvent` misses.
- When testing hooks, use `renderHook` from `@testing-library/react`.

## Mocking modules

`vi.mock` calls are hoisted to the top of the file by Vitest, so declare them before any mock variable assignments to avoid initialization order issues. Use `vi.mocked` to get proper TypeScript types on the mock.

```typescript
import { myFunction } from './myModule'

vi.mock('./myModule', () => ({
  myFunction: vi.fn(),
}))
const mockMyFunction = vi.mocked(myFunction)
```

If mocking is getting very complicated, consider pausing and suggesting a refactor to make the code more testable — that's often the better investment.

## Keep tests self-contained — avoid the "Mystery Guest" anti-pattern

Define all test data and mock return values **inline in the test file**. When a test relies on data imported from an external fixture file, the reader has to navigate away to understand what the test is actually doing — this makes tests harder to debug and easier to misread.

Each test should tell its whole story in one place.

**Do this:**

```typescript
it('renders the study title', async () => {
  mockGetEntity.mockResolvedValue({
    id: 'syn123',
    name: 'My Study',
    concreteType: 'org.sagebionetworks.repo.model.FileEntity',
  })
  // ...
})
```

**Not this:**

```typescript
import { mockFileEntity } from '../../mocks/entity/mockFileEntity'

it('renders the study title', async () => {
  mockGetEntity.mockResolvedValue(mockFileEntity)
  // reader now has to open mockFileEntity.ts to understand the test
})
```

Exception: if a shared mock already exists in the codebase and is a close fit for what you need, reuse it rather than duplicating it.
