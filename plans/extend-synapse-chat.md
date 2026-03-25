# Plan: Entity Context Selection in SynapseChat

## Context

SynapseChat already supports displaying and removing context chips, but there's no UI for users to _add_ entities as context. This adds an "Add entity" button that opens `EntityFinderModal`, converts selections to `EntityContext` items, and shows them as removable chips. `SynapseChatDialog` gets internal state management so callers don't need to wire up context themselves.

## Files to Modify

- `packages/synapse-react-client/src/components/SynapseChat/SynapseChatContextChips.tsx`
- `packages/synapse-react-client/src/components/SynapseChat/SynapseChat.tsx`
- `packages/synapse-react-client/src/components/SynapseChat/SynapseChatDialog.tsx`
- `packages/synapse-react-client/src/components/SynapseChat/SynapseChatDialog.stories.ts`

## Implementation

### 1. `SynapseChatContextChips.tsx` — Add `onAdd` prop + "Add entity" button

Add `onAdd?: () => void` to `SynapseChatContextChipsProps`.

Change the early-return guard so the container renders when `onAdd` is present even if contexts is empty:

```typescript
if ((!contexts || contexts.length === 0) && !onAdd) {
  return null
}
```

Add a "Add entity" button inside the `Stack` after the chips:

```tsx
{
  onAdd && (
    <Button
      size="small"
      variant="outlined"
      startIcon={<Add />}
      onClick={onAdd}
      sx={{ alignSelf: 'center' }}
    >
      Add entity
    </Button>
  )
}
```

Import `Add` from `@mui/icons-material` and `Button` from `@mui/material`.

### 2. `SynapseChat.tsx` — Host `EntityFinderModal`, wire up "add" flow

Add internal state:

```typescript
const [showEntityFinder, setShowEntityFinder] = useState(false)
```

Update chips rendering block (currently lines 304-320) to show when `isContextEditable=true` even with empty context, and pass `onAdd`:

```tsx
{
  ;((promptContext && promptContext.length > 0) || isContextEditable) && (
    <Box sx={{ mb: 1 }}>
      <SynapseChatContextChips
        contexts={promptContext ?? []}
        onRemove={
          isContextEditable && onPromptContextChange
            ? context =>
                onPromptContextChange(promptContext!.filter(c => c !== context))
            : undefined
        }
        onAdd={isContextEditable ? () => setShowEntityFinder(true) : undefined}
        variant="compact"
      />
    </Box>
  )
}
```

Mount `EntityFinderModal` conditionally at the end of the JSX return (inside the outer Box):

```tsx
{
  isContextEditable && (
    <EntityFinderModal
      show={showEntityFinder}
      title="Add Entity Context"
      confirmButtonCopy="Add to Chat"
      promptCopy="Select entities to include as context with your chat message."
      configuration={{
        selectMultiple: true,
        initialScope: FinderScope.ALL_PROJECTS,
        initialContainer: 'root',
        versionSelection: VersionSelectionType.TRACKED,
      }}
      initialSelected={(promptContext ?? [])
        .filter(
          c =>
            c.concreteType ===
            'org.sagebionetworks.repo.model.agent.EntityContext',
        )
        .map(c => ({
          targetId: (c as EntityContext).entityId ?? '',
          targetVersionNumber: (c as EntityContext).versionNumber,
        }))
        .filter(r => r.targetId !== '')}
      onConfirm={selected => {
        if (onPromptContextChange) {
          const newEntityContexts: AgentPromptSessionContext[] = selected.map(
            ref => ({
              concreteType:
                'org.sagebionetworks.repo.model.agent.EntityContext',
              entityId: ref.targetId,
              versionNumber: ref.targetVersionNumber,
            }),
          )
          // Preserve non-entity contexts (e.g. TableRowContext), replace entity contexts
          const existingNonEntity = (promptContext ?? []).filter(
            c =>
              c.concreteType !==
              'org.sagebionetworks.repo.model.agent.EntityContext',
          )
          onPromptContextChange([...existingNonEntity, ...newEntityContexts])
        }
        setShowEntityFinder(false)
      }}
      onCancel={() => setShowEntityFinder(false)}
    />
  )
}
```

**Deduplication strategy**: Pre-populate `initialSelected` with existing entity contexts so the finder shows current selections. Confirming replaces all entity contexts in one shot (non-entity contexts like `TableRowContext` are preserved separately). This avoids tracking duplicate keys.

Add imports:

```typescript
import { EntityFinderModal } from '../EntityFinder/EntityFinderModal'
import { FinderScope } from '../EntityFinder/tree/EntityTree'
import { VersionSelectionType } from '../EntityFinder/VersionSelectionType'
import { EntityContext } from '@sage-bionetworks/synapse-client'
```

### 3. `SynapseChatDialog.tsx` — Internal context state + default `isContextEditable=true`

Use a controlled/uncontrolled hybrid (mirrors `externalSession`/`localAgentSession` pattern in `SynapseChat`):

```typescript
export function SynapseChatDialog(props: SynapseChatDialogProps) {
  const {
    chatbotName = 'SynapseChat',
    open,
    onClose,
    promptContext: controlledPromptContext,
    onPromptContextChange: controlledOnPromptContextChange,
    isContextEditable,
    ...rest
  } = props

  const [localPromptContext, setLocalPromptContext] = useState<
    AgentPromptSessionContext[]
  >([])
  const isControlled = controlledPromptContext !== undefined
  const promptContext = isControlled
    ? controlledPromptContext
    : localPromptContext

  const handlePromptContextChange = (
    newContexts: AgentPromptSessionContext[],
  ) => {
    if (!isControlled) setLocalPromptContext(newContexts)
    controlledOnPromptContextChange?.(newContexts)
  }

  return (
    <DialogBase
      title={chatbotName}
      open={open}
      onCancel={onClose}
      maxWidth="lg"
      content={
        <SynapseChat
          hideTitle={true}
          textboxPositionOffset="-24px"
          {...rest}
          chatbotName={chatbotName}
          promptContext={promptContext}
          onPromptContextChange={handlePromptContextChange}
          isContextEditable={isContextEditable ?? true}
        />
      }
      actions={
        <Button variant="contained" color="primary" onClick={onClose}>
          Close
        </Button>
      }
    />
  )
}
```

Key: destructure `promptContext`, `onPromptContextChange`, `isContextEditable` _before_ the `...rest` spread to `SynapseChat`, then pass resolved values explicitly _after_ `...rest` so they take precedence.

Add imports: `useState` from react, `AgentPromptSessionContext` from `@sage-bionetworks/synapse-client`.

### 4. `SynapseChatDialog.stories.ts` — Add story with context

Add a story that exercises the dialog's built-in context management:

```typescript
export const ChatDialogWithEditableContext: Story = {
  args: {
    open: true,
    onClose: fn(),
    initialMessage: 'hello',
    promptContext: [
      {
        concreteType: 'org.sagebionetworks.repo.model.agent.EntityContext',
        entityId: 'syn123',
      },
    ],
  },
  parameters: {
    /* same msw handlers */
  },
}
```

## Verification

1. **Storybook**: Run `cd packages/synapse-react-client && pnpm start` and check:

   - `SynapseChatDialog` story shows "Add entity" button by default
   - Clicking "Add entity" opens EntityFinderModal
   - Selected entities appear as removable chips
   - Removing chips updates context correctly
   - Context is included in chat API request (visible in network tab)

2. **Unit tests** (existing): Run `pnpm nx run synapse-react-client:test` to verify no regressions in chat or EntityFinder tests.

3. **Type check**: Run `pnpm nx run synapse-react-client:type-check` to verify no TypeScript errors.
