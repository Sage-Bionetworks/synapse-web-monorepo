# Grid load benchmark

Measures how long a production build of `SynapseGrid` takes to load and edit large grids in Chromium and Firefox, and how much it blocks the main thread. Network and server are mocked, so the numbers cover client work only. See SWC-8085.

## Run

```bash
# Once, and after every change to the grid: build dependencies and the production Storybook
pnpm nx run synapse-react-client:storybook:build

# Once per machine: browsers for this Playwright version
cd packages/synapse-react-client
pnpm exec playwright install chromium firefox

# The full matrix: 10k, 20k and 40k rows × 100 columns, Chromium and Firefox
GRID_BENCH_LABEL=baseline pnpm benchmark:grid
```

Results go to `benchmarks/grid/.cache/results/<label>.md` (table) and `<label>.json` (every run). The table is also printed at the end. Each invocation overwrites the results for its label.

Options (environment variables):

| Variable           | Default               | Meaning                                                         |
| ------------------ | --------------------- | --------------------------------------------------------------- |
| `GRID_BENCH_LABEL` | `local`               | Names the results file                                          |
| `GRID_BENCH_ROWS`  | `10000,20000,40000`   | Row counts                                                      |
| `GRID_BENCH_COLS`  | `100`                 | Column count                                                    |
| `GRID_BENCH_REPS`  | 3, or 2 for 40k+ rows | Untraced runs per size and browser                              |
| `GRID_BENCH_EDITS` | `3`                   | Cell edits per run                                              |
| `GRID_BENCH_TRACE` | on                    | `0` skips the extra traced Chromium run that measures peak heap |

Playwright options pass through, for example `pnpm benchmark:grid --project=firefox`.

## How it works

- The `Components/SynapseGrid/GridLoadBenchmark` story renders `SynapseGrid` on the `mock` stack with MSW turned off, plus a "Start Grid Session" button.
- `globalSetup` builds one snapshot per size before any browser starts. The model has the shape the grid service sends: `cols` named columns, one string per cell, and per-row validation metadata. It is encoded with json-joy's indexed codec and CBOR, and cached in `.cache/` keyed by size.
- A static server inside the Playwright worker serves the Storybook build and the snapshots from one origin.
- Service workers are blocked. `page.route` answers every REST call the grid makes on `https://mock-repo.sagebase.org` and aborts requests to other origins. `page.routeWebSocket` plays the grid service: `connected`, then the snapshot URL in reply to the first clock sync, then a completed sync, and an immediate acknowledgement for every patch.

## What each column means

All timings are `median (min–max)` in seconds over the untraced runs that finished. **Runs** counts every run, including the traced Chromium run.

- **Click → ready**: from clicking "Start Grid Session" until the grid shows data rows and "Syncing…" is gone. Includes the mocked REST calls and the snapshot download over loopback.
- **Snapshot → model**: from the static server sending the last snapshot byte until the client's second clock sync, which it sends as soon as it has built its model. Reading the body, CBOR decode, CRDT decode, and fork.
- **Snapshot → ready**: from the last snapshot byte until ready. Everything in Snapshot → model, plus building rows and the first render.
- **Load max block** / **Load blocked total**: an in-page `setTimeout(0)` heartbeat. The longest gap between beats, and the sum of gaps over 50 ms, from the click until 2 s after ready.
- **Steady heap** (Chromium): `Runtime.getHeapUsage` after a forced GC, 2 s after ready.
- **Peak heap** (Chromium): the largest JS heap size in the GC and memory-counter events of a Chrome trace of one extra load. It only sees the heap when a GC or counter event fires, so the true peak can be higher. The traced run's timings are not in the table, because tracing slows the page.
- **Select → patch**: clicking a visible cell writes the selection into the model. Time from the click until that patch reaches the mock server. It includes the client's 250 ms patch throttle.
- **Commit → patch**: typing a value and pressing Enter. Time from the key press until the patch carrying the value reaches the mock server.
- **Commit max block**: the longest heartbeat gap from the key press until 2 s after the patch.

A run that crashes the page, or does not finish a step in time (5 min for the load, 60 s for a patch), is recorded with its status and the step it failed in. Firefox has no CDP, so heap is not measured there.

## Known limits

- The mock server answers at once and sends no patches from other replicas, so this measures client cost only.
- Every cell is a distinct short string, and all were written by the one source replica. Real grids have more varied values, and remote edits add attribution work.
- No JSON schema or source entity is attached to the session, so validation and schema-driven column types are not exercised.
- Timings come from one machine and include whatever else it was running. Compare runs from the same machine.
