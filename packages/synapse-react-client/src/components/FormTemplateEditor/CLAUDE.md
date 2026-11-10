# FormTemplateEditor

ACT uses this editor to author a `FormTemplate`: a JSON Schema body plus an ordered list of steps. Each step binds schema properties as slots (`FormTemplateField`). Requesters fill out the result through `JsonSchemaRequestWizard`; `FormTemplatePreview` renders the same steps inside the editor.

## Layers

1. `FormTemplateEditor` fetches the template and the schema it references, then mounts `FormTemplateEditorForm`. It keeps the schema's `$ref`s, so a saved version still extends the base schema instead of inlining it.
2. `FormTemplateEditorForm` composes the draft, drag-and-drop, validation and save. It renders no loading state.
3. `useFormTemplateDraft` is a thin React shell. Each mutation calls `setDraft(prev => transition(prev, ...))`, so mutations batched in one event compose.
4. `formTemplateDraftState` holds the transitions: pure functions `(FormTemplateDraftState, ...) => FormTemplateDraftState`. Put draft logic here and unit-test it here.
5. `useSaveFormTemplate` validates, registers a new schema version when the body changed, and creates or updates the template. It takes the steps as the template stores them, not the draft's shape.

## The draft model

A property binds to at most one slot (`validateFormTemplateFields` rejects duplicates, as the server does). So a slot's configuration is a per-property setting, and the draft stores it per property:

- `steps: EditableFormTemplateStep[]`: each step's `fieldPaths` are references (`schemaPath`s), in order. They carry no slot configuration.
- `fieldSettings: FieldSettingsByPath`: everything a slot carries apart from its `schemaPath` (`uiDefinition`, `isPublic`, `templateFileHandleId`, ...), keyed by `schemaPath`. A path without an entry reads as `DEFAULT_FIELD_SETTINGS` through `fieldSettingsFor`.

Consequences:

- Binding, unbinding, moving a field between steps, and drag cancel only change `fieldPaths`, so a field keeps its settings across unbind and rebind.
- Renaming a property moves its settings entry; removing it deletes the entry. Raw JSON Schema edits leave settings alone, so a property the raw editor drops mid-edit gets its settings back when it returns. A key the guided editor creates (`createField`, or a rename onto it) starts from defaults instead of inheriting leftovers.
- The `FormTemplateStep[]` shape exists only at the boundary. `toEditableSteps` splits loaded steps into `steps` and `fieldSettings`; `toFormTemplateSteps` joins them back. The hook exposes the joined result as `formTemplateSteps`; validation, the preview and save read it.

A new per-slot setting goes into `FieldSettings`, edited through the `updateFieldSettings` transition. Keep it out of `EditableFormTemplateStep`. A new derived view of the draft goes in `useFormTemplateDraft` as a `useMemo` over draft state; keep a second copy of the data out of the draft.

## Schema conventions

- Every template schema extends `ACCESS_REQUIREMENT_BASE_SCHEMA_ID`, which declares the reserved `x-synapse-submissionContext` property.
- A Request-only or Renewal-only property lives in an `allOf` `if`/`then` branch keyed on that property. Read and write properties through the submission-context helpers (`resolveSchemaPropertyAtPointer`, `setSchemaProperty`, `renameSchemaProperty`, ...), never by indexing `properties` directly.
- `detectFieldType` maps a property to the `SimpleFieldType` the guided editor can author. Anything else (`null`) is "advanced" and editable only in the raw JSON Schema editor.
- Registered schema versions are immutable: each save that changes the body registers a new version (`getNextSchemaVersion`).

## Validation

`validateFormTemplateFields` mirrors the server's per-step and per-field rules, so the editor can point at the offending step or field before saving; the server returns only a flat message. It runs against `formTemplateSteps`. Its `stepIndex`/`fieldIndex` therefore match the order of `steps` and `fieldPaths`.

## Drag and drop

`useFormTemplateDrag` turns dnd-kit events into draft transitions (`moveStep`, `moveSlot`, `bindField`). `sortableIds` owns the id scheme: steps by `uiKey`, slots by `schemaPath`. Reorders apply on drag-over, not on drop, because dnd-kit's `OptimisticSortingPlugin` otherwise moves DOM nodes behind React's back. A canceled drag restores the steps snapshotted at drag start.

## Testing

- Transitions: build a `FormTemplateDraftState` literal, call the transition, and assert on the returned state.
- The editor end to end: render `FormTemplateEditor` against MSW handlers and assert on the template the save request carries.
