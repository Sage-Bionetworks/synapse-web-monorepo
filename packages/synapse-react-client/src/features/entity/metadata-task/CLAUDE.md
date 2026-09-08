# Metadata Task Feature

Data curation task management for Synapse. Enables two user types to collaborate on data quality:

- **Data managers** — Create tasks and assign them to contributors
- **Data contributors** — Accept assignments and curate metadata

## Architecture Overview

**Core responsibility**: Display curation tasks for both roles. Data managers can assign/reassign tasks; data contributors can view assignments and open tasks for editing.

**Key abstraction**: A **grid session** is a spreadsheet-like editing context. When a contributor opens a task, a grid session is created for the task's source data. The same grid session is shared among all team members assigned to that task, enabling collaborative editing. Grid sessions are also reused across multiple tasks for the same data source to avoid duplicate API calls.

**Scope note**: This feature manages grid session _creation and lifecycle_ only. The actual grid session UI (where data editing happens) is implemented elsewhere and typically opens in SWC (Synapse Web Client).

## File Organization

- **`components/`** — UI components
  - `MetadataTasksPage` — Main page displaying the task table with "View only assigned to me" filter. Users with `canAddChild` permission on the project also see a **New Task** button that opens `CreateOrUpdateCurationTaskDialog` in create mode.
  - `MetadataTaskTableActionCell` — Task row actions. Data managers (`canEdit`) see an **Edit** button (opens `CreateOrUpdateCurationTaskDialog` in edit mode). All users see the **Open** (curator) button to launch the grid session.
  - `MetadataTasksTableAssigneeCell` — Shows current assignee; **editable by managers only** to reassign tasks
  - `CreateOrUpdateCurationTaskDialog` — Multi-step dialog for creating or editing curation tasks. In **create mode**: 3-step wizard — (1) choose task type (`FileBasedMetadataTaskProperties` or `RecordBasedMetadataTaskProperties`), (2) fill type-specific fields (entity IDs), (3) fill common mutable fields (task name, instructions, assignee, authorization mode, collaborators). In **edit mode**: opens directly at step 3 (common mutable fields only). Shows a warning when `suggestedAuthorizationMode` is changed in edit mode, since doing so clears the active linked grid session.
- **`hooks/`** — Data fetching and state management
  - `useMetadataTaskTable` — TanStack Table instance with columns and data fetching
  - `useGetOrCreateGridSessionForSource` — Gets or creates a grid session for a task's data source
  - `useGridSessionForCurationTask_legacy` — Used when a task has no `suggestedAuthorizationMode` set. Gets or creates a grid session owned by the calling user. Does not link the session to the task. Deprecated long-term (enables a data-loss scenario when multiple users create parallel sessions).
  - `useGridSessionForCurationTask` — Task-linked variant. Used by tasks that have `suggestedAuthorizationMode` set. Reads `suggestedAuthorizationMode` from `taskProperties` and uses it as the `authorizationMode` when creating a grid session. For `SESSION_OWNER` mode, sets `ownerPrincipalId` to the task's assignee. Throws if `suggestedAuthorizationMode` is absent.
- **`utils/`** — Helper functions
  - `getGridSourceIdForTask` — Determines the entity ID to open for editing
  - `getLatestGridSessionForSource` — Finds the most recent grid session for a data source
  - `getCreateGridRequestForMetadataTask` — Builds the grid session creation payload
  - `taskHasAssignee` — Boolean check for assignment state
  - `constants.ts` — String constants for UI labels, tooltips, and error/warning messages

## Key Pattern: Grid Session Lifecycle

The path taken when a user clicks **Open** depends on whether the task has `suggestedAuthorizationMode` set in `taskProperties`:

- **`suggestedAuthorizationMode` is set** → `useGridSessionForCurationTask` (task-linked path). The mode is passed directly as `authorizationMode` on the `CreateGridRequest`. For `SESSION_OWNER` mode, `ownerPrincipalId` is set to the task's assignee, scoping the session to that user. For `SOURCE_BENEFACTOR` mode, no owner is set.
- **`suggestedAuthorizationMode` is absent** → `useGridSessionForCurationTask_legacy` (legacy path). Creates a session owned by the calling user; session is not linked to the task.

The action cell gates the **Open** button on READ access to the source entity, but various other permission scenarios may block the user from accessing a grid session, depending on the session's authorization mode.

## Testing

Follow the standard synapse-react-client pattern:

- API calls mocked via MSW handlers in `src/mocks/msw/handlers/`
- Use `createWrapper()` from `src/testutils/TestingLibraryUtils.tsx` for test setup

## Related Code

- Synapse API: `ListCurationTaskRequest`, `TaskBundle` (from `@sage-bionetworks/synapse-client`)
- Grid session API: `CreateGridRequest`, `GridSession`
- Queries defined in `src/synapse-queries/curation/task/` (task list, grid session ops)
