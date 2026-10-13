# DataGrid

A spreadsheet-style editor for Synapse curation data. Many people can edit the same grid at the same time. The shared data lives in a CRDT (a data structure that merges edits from many users without conflicts). Each browser keeps its own copy of the CRDT and syncs it with the server over a websocket.

Entry point: `SynapseGrid`. It opens a grid session, connects the websocket, and renders the grid with `react-datasheet-grid` (called "DSG" below).

## How data flows

Edits flow one way around a loop:

1. The user edits a cell or row in DSG. DSG calls `onChange` with the new rows and a list of operations (create, update, delete).
2. `mapOperationsToModelChanges` turns these into `ModelChange` objects.
3. `applyModelChange` writes each change into the local CRDT model.
4. `DataGridWebSocket.sendPatch` collects the pending CRDT edits into a patch and sends it to the server. Sending is throttled (250 ms).
5. The server sends patches from other users. `DataGridWebSocket` applies them to the local model.
6. The model notifies subscribers. `useCRDTModelView` takes a snapshot of the model, `modelRowsToGrid` turns it into plain row objects, and React re-renders DSG.

The CRDT model is the source of truth. React state is a read-only view of it. Never edit `rowValues` directly; write a `ModelChange`.

## The CRDT model

The shape is defined by `gridSchema` in `DataGridTypes`:

- `columnNames`: a vector of column names. A column's index in this vector never changes.
- `columnOrder`: an array of indices into `columnNames`. It sets the display order. Reordering columns edits this array only.
- `rows`: an array of rows. Each row has `data` (one value per column, in `columnNames` order) and `metadata` (validation results, Synapse row id).
- `selection`: one entry per replica (one connected browser), holding that user's selection. Selections are stored as CRDT ids, not row numbers, so they stay correct when rows move.

Terms:

- **Replica**: one connected client. Each has a numeric id.
- **Patch**: a batch of CRDT operations. Patches depend on earlier patches (for example, a row insert refers to objects created by an earlier patch).
- **Snapshot**: the plain JSON view of the whole model, from `model.api.getSnapshot()`.

## The websocket

`DataGridWebSocket` talks JSON-Rx (see `utils/json-rx`). A "request complete" message with an id is answered by a "response complete" message with the same id.

- **One patch in flight.** The server must store patches in the order they were sent, but the gateway does not keep frames in order if several are in flight. So the client sends one patch, waits for its acknowledgement, then sends the next. Unsent and unacknowledged patches wait in an ordered queue.
- **Acknowledgements and syncs are different.** A "response complete" whose id matches the patch in flight is an acknowledgement. Any other one ends a clock sync. Do not mix them up.
- **Large patches are split.** `splitPatch` cuts a patch into parts under the frame size limit (about 30 KB). Each part is queued like any other patch.
- **Missing acknowledgement.** If none arrives in time, the client drops the socket and reconnects. The new socket gets the unacknowledged patches from `getPendingPatches` and resends them in order. Resending is safe because the server ignores patches it already has.
- **Disconnect.** `disconnect()` sends what is queued, one patch at a time, and closes after the last acknowledgement. It must never send the whole queue at once.
- **Reconnect keeps the model.** `useDataGridWebSocket` creates a new `DataGridWebSocket` for each connection but keeps the same model for the same session.

Clock sync messages (`synchronize-clock`) do not need ordering and do not use the queue.

## Performance rules

Grids can have thousands of rows and dozens of columns. "Add N rows" with N of 1000+ and large pastes must stay fast. The rules below come from a real freeze (SWC-8023).

1. **Do not call `getSnapshot()` or `view()` on the whole model inside a loop or a per-change function.** A snapshot visits every row. A batch of N changes that each take a snapshot costs N times the size of the grid. Read only the node you need, for example `model.api.vec(['columnNames']).view()`, `model.api.arr(['rows']).length()`, or `model.api.vec(['rows', index, 'data'])`.
2. **Take at most one snapshot per user action.** If several functions need the same snapshot, pass it in as an argument.
3. **Do not serialize a growing value on every loop step.** `JSON.stringify` of a 30 KB chunk, repeated for each operation, is quadratic. Measure each item once and keep a running total (see `splitPatch`).
4. **Per-row work in render must be cheap.** `modelRowsToGrid` and `enrichRowsWithChangeInfo` run for every row, and for every cell, each time the model changes. Avoid new CRDT path lookups, deep comparisons, or object spreads there unless they are needed.
5. **Remember that selection moves are model changes.** Moving the cursor writes `SET_SELECTION` into the model, and that triggers a snapshot and a full row rebuild. Keep anything on the selection path small.
6. **Never do heavy work in a click handler.** The throttled send can run inside the handler if the main thread was busy past the throttle time, so expensive work in the send path blocks the click.

Known places that still do more work than they need:

- Every model change rebuilds all rows (`modelRowsToGrid`, `enrichRowsWithChangeInfo`). Memoizing per row would help most.
- `computeReplicaSelectionModel` and `replicaSelectionToGridSelection` take a full snapshot only to read array lengths. They can use `arr(...).length()` instead.

When you change code on these paths, test with a large grid (several thousand rows, 20+ columns), not only a handful of rows. A regression test can spy on `getSnapshot` or `JSON.stringify` and check how often they run, which is more reliable than a timing test.

## Where things live

- `SynapseGrid`: the main component. Wires everything together.
- `DataGrid`: thin wrapper around DSG (columns, row keys, row styles).
- `DataGridTypes`: `gridSchema` and the shared types.
- `DataGridWebSocket`: the connection, patch queue, and sync logic.
- `useDataGridWebsocket`: React hook that owns the connection and reconnects.
- `useCRDTModelView`: subscribes to the model and returns snapshots.
- `useInitializeGridConnection`, `StartGridSession`: create or find the grid session.
- `utils/`: pure helpers. `applyModelChange`, `splitPatch`, `modelRowsToGrid`, selection conversion, column factories, paste parsing.
- `hooks/`: undo and redo, remote selections, replica users, CSV export, column resize.
- `columns/`: custom DSG column types (autocomplete, date-time, number).
- `components/`: toolbar buttons, dialogs, the loading state, and the context menu.

## Testing

- Build a test model with `utils/createTestModel`, or create a `Model` from `gridSchema`.
- To test the websocket, pass a fake socket through the `socket` option. See `DataGridWebSocket.test`.
- Use fake timers for throttle and acknowledgement timeouts.
- To check order, decode the sent patches and compare their clock times. Do not compare against the class's own queue.
