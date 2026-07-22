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
  - `MetadataTasksPage` — Router-wrapped page (mirrors `GridPageRouter`) displaying the task table with "View only assigned to me" filter, plus `create` and `edit/:taskId` routes for the create/edit task flow. `MetadataTasksPageInternal` (in the same file) is the table content itself; the default export wraps it with `MetadataTasksPageRouter`. Users with `canAddChild` permission on the project see a **New Task** button (gated by `FeatureFlagEnum.CURATION_TASK_PAGE_SHOW_NEW_TASK_BUTTON`) that navigates to `create`.
  - `MetadataTasksPageRouter` — The router wrapper itself (index -> table, `create/*` -> `CreateCurationTaskFlow`, `edit/:taskId` -> `EditCurationTaskPage`).
  - `MetadataTaskTableActionCell` — Task row actions. Data managers (`canEdit`) see an **Edit** button that navigates to `edit/:taskId`. All users see the **Open** (curator) button to launch the grid session.
  - `MetadataTasksTableAssigneeCell` — Shows current assignee; **editable by managers only** to reassign tasks
- **`create-task/`** — Page-based create/edit flow for curation tasks (dialog-based flow was removed)
  - `CreateCurationTaskFlow` — Hosts the 3-step "Create New Task" wizard (category picker -> compute/curate form -> confirmation) via nested `react-router` routes (`compute` and `curate` sibling routes). The task is created on the step-2-to-step-3 transition. The category-picker and confirmation steps share a `CreateTaskLayout` route wrapper (generic centered "Create New Task" heading); the form steps supply their own more specific title/subtitle via `pageTitle`/`pageDescription` props instead. **Routing gotcha**: the compute/curate forms' "Back" button (return to the category picker) uses `navigate(-1)`, not a relative `navigate('..')` — this flow is always mounted at a splat route (e.g. `create/*`) inside a host router, and relative `..` from within its own nested `<Routes>` overshoots past the splat boundary to the _host's_ index (the task list) rather than this flow's own index (the category picker). `navigate(-1)` works because the only way to reach `compute`/`curate` is a `navigate('compute')`/`navigate('curate')` push from the index, so history-back is always exactly one step. See the regression test in `CreateCurationTaskFlow.test.tsx` that reproduces the real host-router nesting.
  - `CreateTaskCategoryPicker` — Step 1: choose a task category, rendered as a row of `TaskCategoryCard` tiles, **Curate Data before Compute Data**. Both are active.
  - `TaskCategoryCard` — A single category tile (light illustration area over a dark, centered title footer, per the Figma design). Renders a placeholder icon when no `illustrationSrc` is supplied — the Figma MCP can't export the illustration art as real assets, so the real images need to be exported from Figma and imported manually.
  - `ComputeTaskForm` — The create/edit form for a Compute Data task (`compute` route, and reused directly by `EditCurationTaskPage` for Compute Data tasks). Renders as a single centered column (compute type selector, an optional project selector shown only when no `projectId` context is supplied and not editing, `CommonTaskFields`, a status `Select` in edit mode, then the type-specific fields), with an optional centered `pageTitle`/`pageDescription` above it and a full-width action-button row below. When editing a task whose category isn't a Compute Data type (e.g. a Curate Data task with an otherwise-unrecognized `taskProperties` shape), the type-specific section is hidden and the existing `taskProperties` are carried over unchanged on save. `EditCurationTaskPage` uses this fallback behavior for any task that is neither a recognized Compute nor Curate Data type. An optional `onExit` prop renders a top-left "Back to All Tasks" button that exits straight to the task list, distinct from `onBack` (create mode; returns to the category picker) and `onCancel` (edit mode; also exits, but stays at the bottom action row).
  - `CurateTaskForm` — The create/edit form for a Curate Data task (`curate` route, and reused directly by `EditCurationTaskPage` for Curate Data tasks). Mirrors `ComputeTaskForm`'s layout (type selector, optional project selector, `CommonTaskFields`, status `Select` in edit mode, and the same `onExit`/`onBack`/`onCancel` button trio) but with File-Based/Records-Based entity-finder fields (`FileBasedFields`/`RecordBasedFields`) and an **Authorization Mode** radio group (`NONE`/`SESSION_OWNER`/`SOURCE_BENEFACTOR`, mapped to `suggestedAuthorizationMode`). In edit mode, changing the Authorization Mode shows a warning that it will orphan the task's active grid session. There is no UI for `collaboratorPrincipalIds` (pending broader "multiple owners" support) — the existing value is preserved unchanged on save via `buildCurateTaskPayload`.
  - `CommonTaskFields` — Shared fields: task name, due date, instructions, assignee. Due date lives on `TaskStatus` (not `CurationTask`) and is read/written via `useGetCurationTaskStatus`/`useUpdateCurationTaskStatus`; in create mode it's applied to the auto-created status immediately after the task itself is created.
  - `ProjectSelectorField`, `SampleSheetFields`, `RecordSetFields` — Compute Data category/type-specific fields.
  - `FileBasedFields`, `RecordBasedFields` — Curate Data category/type-specific fields (upload folder + FileView; RecordSet, respectively). Their entity-finder fields are disabled in edit mode since they're immutable once the task is created.
  - `CreateTaskConfirmation` — Step 3: confirms the task was created (generic copy, shared by both categories).
  - `EditCurationTaskPage` — Fetches the task by ID (from `edit/:taskId`) and dispatches to `CurateTaskForm` if `getCurateTaskConcreteType` recognizes the task's category, otherwise `ComputeTaskForm` (which also handles the fully-unrecognized case). Passes `pageTitle`/`pageDescription` for the "Edit Task" heading rather than the form rendering its own.
  - `utils/buildComputeTaskPayload.ts`, `utils/buildCurateTaskPayload.ts`, `utils/taskIdValidation.ts` — Payload construction (one builder per category) and task-ID field validation helpers.
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
  - `types.ts` — `getComputeTaskConcreteType`/`getCurateTaskConcreteType` (and their `instanceOf*` guards) narrow a task's `taskProperties.concreteType` to determine which create/edit form and payload builder apply
  - `constants.ts` — String constants for UI labels, tooltips, and error/warning messages

## Key Pattern: Grid Session Lifecycle

The path taken when a user clicks **Open** depends on whether the task has `suggestedAuthorizationMode` set in `taskProperties`:

- **`suggestedAuthorizationMode` is set** → `useGridSessionForCurationTask` (task-linked path). The mode is passed directly as `authorizationMode` on the `CreateGridRequest`. For `SESSION_OWNER` mode, `ownerPrincipalId` is set to the task's assignee, scoping the session to that user. For `SOURCE_BENEFACTOR` mode, no owner is set.
- **`suggestedAuthorizationMode` is absent** → `useGridSessionForCurationTask_legacy` (legacy path). Creates a session owned by the calling user; session is not linked to the task.

The action cell gates the **Open** button on READ access to the source entity, but various other permission scenarios may block the user from accessing a grid session, depending on the session's authorization mode.

## Testing

Follow the standard synapse-react-client pattern:

- API calls mocked via MSW handlers in `src/mocks/msw/handlers/`, or by mocking `@/synapse-queries/curation/task/useCurationTask` directly for components under `create-task/` (there are no MSW handlers for the curation task endpoints yet, so component tests mock the hooks instead — see `ComputeTaskForm.test.tsx`/`CurateTaskForm.test.tsx` for the pattern).
- Use `createWrapper()` from `src/testutils/TestingLibraryUtils.tsx` for test setup
- Components that call `useNavigate`/render `<Routes>` need a `<MemoryRouter>` (or `useMemoryRouter` on the page routers) in tests

## Related Code

- Synapse API: `ListCurationTaskRequest`, `TaskBundle`, `CurationTask`, `TaskStatus` (from `@sage-bionetworks/synapse-client`)
- Compute Data task property types: `SampleSheetGenerationExecutionProperties`, `RecordSetGenerationExecutionProperties`
- Curate Data task property types: `FileBasedMetadataTaskProperties`, `RecordBasedMetadataTaskProperties` (together, `GridSupportedTaskProperties`)
- Grid session API: `CreateGridRequest`, `GridSession`
- Queries defined in `src/synapse-queries/curation/task/` (task list, task/status CRUD, grid session ops)
