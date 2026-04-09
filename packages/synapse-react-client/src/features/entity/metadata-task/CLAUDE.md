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
  - `MetadataTasksPage` — Main page displaying the task table with "View only assigned to me" filter (useful for both roles)
  - `MetadataTaskTableActionCell` — Task row actions: **Open** (contributors edit data), **Curator** button (managers mark complete)
  - `MetadataTasksTableAssigneeCell` — Shows current assignee; **editable by managers only** to reassign tasks
- **`hooks/`** — Data fetching and state management
  - `useMetadataTaskTable` — TanStack Table instance with columns and data fetching
  - `useGetOrCreateGridSessionForSource` — Gets or creates a grid session for a task's data source
  - `useGridSessionForCurationTask` — Higher-level hook combining task data + grid session
- **`utils/`** — Helper functions
  - `getGridSourceIdForTask` — Determines the entity ID to open for editing
  - `getLatestGridSessionForSource` — Finds the most recent grid session for a data source
  - `getCreateGridRequestForMetadataTask` — Builds the grid session creation payload
  - `taskHasAssignee` — Boolean check for assignment state

## Key Pattern: Grid Session Lifecycle

1. User opens a task → `useGridSessionForCurationTask` is called
2. Hook checks if a grid session exists for this task's data source
3. If missing → `useGetOrCreateGridSessionForSource` creates one
4. Grid session ID is used to open the editing context (usually opens SWC)
5. Subsequent tasks from the same source reuse the grid session

## Testing

Follow the standard synapse-react-client pattern:

- API calls mocked via MSW handlers in `src/mocks/msw/handlers/`
- Use `createWrapper()` from `src/testutils/TestingLibraryUtils.tsx` for test setup

## Related Code

- Synapse API: `ListCurationTaskRequest`, `TaskBundle` (from `@sage-bionetworks/synapse-client`)
- Grid session API: `CreateGridRequest`, `GridSession`
- Queries defined in `src/synapse-queries/curation/task/` (task list, grid session ops)
