import path from 'node:path'
import { fileURLToPath } from 'node:url'

const HARNESS_DIR = path.dirname(fileURLToPath(import.meta.url))

/** Gitignored: snapshot payloads and results. */
export const CACHE_DIR = path.join(HARNESS_DIR, '.cache')
export const RESULTS_DIR = path.join(CACHE_DIR, 'results')
export const STORYBOOK_DIR = path.resolve(HARNESS_DIR, '../../storybook-static')

export const STORY_ID = 'components-synapsegrid--grid-load-benchmark'

/** Origin the `mock` Storybook stack sends REST calls to. */
export const MOCK_REPO_ORIGIN = 'https://mock-repo.sagebase.org'
export const MOCK_GRID_WS_ORIGIN = 'wss://mock-grid.sagebase.org'
/** Path under the static server that serves cached snapshot payloads. */
export const SNAPSHOT_ROUTE = '/__grid-benchmark__/'

export const SESSION_ID = 'benchmark-session'
export const USER_ID = '1000'
/** The replica that wrote the snapshot, standing in for the grid service's import replica. */
export const SOURCE_REPLICA_ID = 100_000
export const LOCAL_REPLICA_ID = 100_001

export const COLS = Number(process.env.GRID_BENCH_COLS ?? 100)
export const ROW_COUNTS = process.env.GRID_BENCH_ROWS
  ? process.env.GRID_BENCH_ROWS.split(',').map(Number)
  : [10_000, 20_000, 40_000]

// Bump when the generated model shape changes, so stale cached payloads are not reused.
const SNAPSHOT_FORMAT_VERSION = 1

export function snapshotFileName(rows: number, cols: number) {
  return `snapshot-v${SNAPSHOT_FORMAT_VERSION}-${rows}x${cols}.cbor`
}
/** Repetitions per size; sizes of at least 40k rows default to fewer because each run takes minutes. */
export function repsFor(rows: number) {
  const reps = process.env.GRID_BENCH_REPS
  if (reps) return Number(reps)
  return rows >= 40_000 ? 2 : 3
}
export const EDITS_PER_RUN = Number(process.env.GRID_BENCH_EDITS ?? 3)
/** Names the results file, e.g. `baseline` or `with-fixes`. */
export const RUN_LABEL = process.env.GRID_BENCH_LABEL ?? 'local'

/** A load that has not finished within this time is recorded as a timeout. */
export const LOAD_TIMEOUT_MS = 5 * 60_000
/** An edit whose patch has not reached the server within this time is recorded as a timeout. */
export const PATCH_TIMEOUT_MS = 60_000
/** Quiet time after a load or edit, so trailing work lands in the measured window. */
export const SETTLE_MS = 2_000
/** Heartbeat gaps longer than this count as main-thread blocking (the long-task threshold). */
export const LONG_GAP_MS = 50
