# DataGrid

A spreadsheet-style editor for Synapse curation data. Many people can edit the same grid at the same time. The shared data lives in a CRDT (a data structure that merges edits from many users without conflicts). Each browser keeps its own copy of the CRDT and syncs it with the server over a websocket.

Entry point: `SynapseGrid`. It opens a grid session, connects the websocket, and renders the grid with `@sage-bionetworks/react-datasheet-grid` (called "DSG" below). This is the in-repo fork of react-datasheet-grid, so it can be changed in this repository.

## How data flows

1. The user edits a cell or row in DSG. DSG calls `onChange` with the new rows and a list of operations (create, update, delete).
2. `mapOperationsToModelChanges` turns these into `ModelChange` objects.
3. `applyModelChange` writes each change into the local CRDT model. The model notifies its subscribers, so the grid re-renders now, without waiting for the server.
4. `DataGridWebSocket.sendPatch` collects the pending CRDT edits into a patch and sends it to the server. Sending is throttled (250 ms).
5. When another user edits, the server sends a `new-patch` notification. `DataGridWebSocket` replies with `synchronize-clock`, receives the missing patches, and applies them to the local model. The model notifies its subscribers again.
6. On every model change, local or remote, `useCRDTModelView` takes a snapshot, `modelRowsToGrid` turns it into plain row objects, and React re-renders DSG.

The CRDT model is the source of truth. React state is a read-only view of it. Never edit `rowValues` directly; write a `ModelChange`.

## The CRDT model

The shape is defined by `gridSchema` in `DataGridTypes`:

- `columnNames`: a vector of column names. A column's index in this vector never changes.
- `columnOrder`: an array of indices into `columnNames`. It sets the display order. Reordering columns replaces the whole array. `columnNames` and row `data` are not touched.
- `rows`: an array of rows. Each row has `data` (one value per column, in `columnNames` order) and `metadata` (validation results, Synapse row id).
- `selection`: one entry per replica, holding that participant's selection. A selection stores the CRDT ids of `rows` and `columnOrder` elements, not row numbers. A row selection stays correct when rows are inserted or deleted around it. Reordering columns replaces every `columnOrder` element, so stored column selections no longer match.

Terms:

- **Replica**: one participant in a session, such as a browser tab or a service. It has a numeric id, which is also its CRDT session id.
- **Patch**: a batch of CRDT operations. Patches depend on earlier patches (for example, a row insert refers to objects created by an earlier patch).
- **Snapshot**: the plain JSON view of the whole model, from `model.api.getSnapshot()`.

## The websocket

`DataGridWebSocket` talks JSON-Rx (see `JsonRx` and its message classes). A "request complete" message with an id is answered by a "response complete" message with the same id.

- **One patch in flight.** The server must store patches in the order they were sent, but the gateway does not keep frames in order if several are in flight (see PLFM-10021). So the client sends one patch, waits for its acknowledgement, then sends the next. Unsent and unacknowledged patches wait in an ordered queue.
- **Acknowledgements and syncs are different.** A "response complete" whose id matches the patch in flight is an acknowledgement. Any other one ends a clock sync. Do not mix them up.
- **Large patches are split.** `splitPatch` cuts a patch into parts of at most 30 KB (the gateway limit is 32 KB). A single operation that is too large is sent alone. Each part is queued like any other patch.
- **Missing acknowledgement.** If none arrives within 15 seconds, the client drops the socket and reconnects.
- **Reconnect.** `useDataGridWebSocket` creates a new `DataGridWebSocket` for each connection. For the same session and replica, it passes the old model and the result of `getPendingPatches()` to the new one. Patches left over from any dropped connection are resent in order. Resending is safe because the server ignores patches it already stored.
- **Disconnect.** `disconnect()` sends what is queued, one patch at a time, and closes after the last acknowledgement. It must never send the whole queue at once.

Clock sync messages (`synchronize-clock`) do not need ordering and do not use the queue.

## Performance rules

Grids can have thousands of rows and dozens of columns. "Add N rows" with N of 1000+ and large pastes must stay fast. See SWC-8023.

1. **Do not call `getSnapshot()` or `view()` on the whole model inside a loop or a per-change function.** json-joy reuses a snapshot only until the next change. The first snapshot after any change visits every cell. A batch of N changes that each take a snapshot costs N times the size of the grid. Read only the node you need, for example `model.api.vec(['columnNames']).view()`, `model.api.arr(['rows']).length()`, or `model.api.vec(['rows', index, 'data'])`.
2. **Take at most one snapshot per user action.** If several functions need the same snapshot, pass it in as an argument.
3. **Do not serialize a growing value on every loop step.** `JSON.stringify` of a 30 KB chunk, repeated for each operation, is quadratic. Measure each item once and keep a running total (see `splitPatch`).
4. **Per-row work in render must be cheap.** `modelRowsToGrid` and `enrichRowsWithChangeInfo` run for every row, and for every cell, each time the model changes. Avoid new CRDT path lookups, deep comparisons, or object spreads there unless they are needed. Unchanged rows keep the same object in each snapshot, so per-row memoization can key on the snapshot row.
5. **Remember that selection moves are model changes.** Moving the cursor writes `SET_SELECTION` into the model, and that triggers a snapshot and a full row rebuild. Keep anything on the selection path small. `computeReplicaSelectionModel` and `replicaSelectionToGridSelection` call `getSnapshot()` only to read a few values. That is cheap while json-joy still has the snapshot cached, but reading `arr(...).length()` and `vec(['columnNames']).view()` directly stays cheap if they ever run after a change.
6. **Never do heavy work in a click handler.** The throttled send can run inside the handler if the main thread was busy past the throttle time, so expensive work in the send path blocks the click.

When you change code on these paths, test with a large grid (several thousand rows, 20+ columns), not only a handful of rows. A regression test can spy on `getSnapshot` or `JSON.stringify` and check how often they run, which is more reliable than a timing test.

## Where things live

- `SynapseGrid`: the main component. Wires everything together.
- `DataGrid`: renders DSG: columns, row keys, row and cell styles, the context menu, and column resizing.
- `DataGridTypes`: `gridSchema` and the shared types.
- `DataGridWebSocket`: the connection, patch queue, and sync logic.
- `useDataGridWebSocket`: React hook that owns the connection and reconnects.
- `useCRDTModelView`: subscribes to the model and returns snapshots.
- `useInitializeGridConnection`, `StartGridSession`: create or find the session and create this client's replica.
- `SyncGridWithSourceButton`, `useMergeGridWithSource`, `useMergeGridWithTable`: merge the grid with its source data.
- `utils/`: helpers. Most are pure: `applyModelChange`, `splitPatch`, `modelRowsToGrid`, selection conversion, column factories, paste parsing.
- `hooks/`: undo and redo, remote selections, replica users, grid schema loading, CSV export, column resize.
- `columns/`: custom DSG column types (autocomplete, date-time, number).
- `components/`: toolbar buttons, dialogs, the loading state, and the context menu.

## Testing

- Build a test model with `createTestModel(nRows, nCols, sid)`, or create a `Model` from `gridSchema`. `createTestModel` leaves its build operations unflushed, so the first `sendPatch` sends them.
- To test the websocket, pass a fake socket through the `socket` option, as the `DataGridWebSocket` tests do.
- Use fake timers for the throttle and the acknowledgement timeout. The `patchThrottleMs` and `patchAckTimeoutMs` options shorten them.
- To check patch order, decode the sent patches and compare their clock times. Do not compare against the class's own queue.
