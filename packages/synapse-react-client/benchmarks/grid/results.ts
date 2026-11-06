import {
  appendFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from 'node:fs'
import path from 'node:path'
import { RESULTS_DIR, RUN_LABEL } from './config'
import type { HeartbeatReading } from './pageProbes'

export type InteractionResult = {
  /** From the action starting to its patch frame reaching the mock server. */
  toPatchMs: number
  heartbeat: HeartbeatReading
}

export type EditResult = {
  /** Clicking the cell, which writes the selection into the model. */
  select: InteractionResult
  /** Pressing Enter to commit a typed value. */
  commit: InteractionResult
}

export type RunStatus = 'ok' | 'crash' | 'timeout' | 'error'

export type RunResult = {
  label: string
  browser: string
  browserVersion: string
  rows: number
  cols: number
  rep: number
  /** Trace runs record peak heap; tracing slows the page, so their timings are reported apart. */
  traced: boolean
  status: RunStatus
  error?: string
  /** The step the run was in when it failed. */
  failedAt?: string
  snapshotBytes: number
  /** Click on "Start Grid Session" to grid ready. Includes the mocked REST calls and the snapshot download. */
  clickToReadyMs?: number
  /** Last snapshot byte sent to grid ready: CBOR and CRDT decoding, fork, first render. */
  snapshotToReadyMs?: number
  /** Last snapshot byte sent to the client's second clock sync, which it sends once the model exists. */
  snapshotToModelMs?: number
  /** Heartbeat from the click until the load has settled. */
  loadHeartbeat?: HeartbeatReading
  /** Chromium: JS heap after a forced GC once the load has settled. */
  steadyHeapMB?: number
  /** Chromium: JS heap after a forced GC before the load started. */
  baselineHeapMB?: number
  /** Chromium trace runs: largest JS heap size seen in GC and counter trace events during the load. */
  peakHeapMB?: number
  edits: EditResult[]
  unhandledRequests: string[]
}

const resultsFile = (label: string) => path.join(RESULTS_DIR, `${label}.jsonl`)

export function resetResults() {
  mkdirSync(RESULTS_DIR, { recursive: true })
  writeFileSync(resultsFile(RUN_LABEL), '')
}

export function appendResult(result: RunResult) {
  mkdirSync(RESULTS_DIR, { recursive: true })
  appendFileSync(resultsFile(result.label), `${JSON.stringify(result)}\n`)
}

export function readResults(label: string): RunResult[] {
  const file = resultsFile(label)
  if (!existsSync(file)) return []
  return readFileSync(file, 'utf8')
    .split('\n')
    .filter(Boolean)
    .map(line => JSON.parse(line) as RunResult)
}

function median(values: number[]) {
  const sorted = values.toSorted((a, b) => a - b)
  const mid = sorted.length >> 1
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2
}

/** `median (min–max)` in seconds, or `—` when nothing was measured. */
function seconds(values: (number | undefined)[]) {
  const measured = values.filter((v): v is number => v !== undefined)
  if (measured.length === 0) return '—'
  const s = (ms: number) => (ms / 1000).toFixed(ms < 10_000 ? 2 : 1)
  if (measured.length === 1) return s(measured[0])
  return `${s(median(measured))} (${s(Math.min(...measured))}–${s(Math.max(...measured))})`
}

function megabytes(values: (number | undefined)[], notMeasured: string) {
  const measured = values.filter((v): v is number => v !== undefined)
  if (measured.length === 0) return notMeasured
  return `${Math.round(median(measured))}`
}

function statusSummary(runs: RunResult[]) {
  const failures = runs.filter(r => r.status !== 'ok')
  const ok = `${runs.length - failures.length}/${runs.length} ok`
  if (failures.length === 0) return ok
  const reasons = failures.map(
    r => `${r.status}${r.failedAt ? ` during ${r.failedAt}` : ''}`,
  )
  return `${ok}; ${[...new Set(reasons)].join(', ')}`
}

/**
 * One row per browser and size. Timings are `median (min–max)` in seconds over the untraced runs;
 * heap figures are medians in MB.
 */
export function renderMarkdown(results: RunResult[]) {
  const header = [
    'Browser',
    'Rows × cols',
    'Runs',
    'Click → ready (s)',
    'Snapshot → model (s)',
    'Snapshot → ready (s)',
    'Load max block (s)',
    'Load blocked total (s)',
    'Steady heap (MB)',
    'Peak heap (MB)',
    'Select → patch (s)',
    'Commit → patch (s)',
    'Commit max block (s)',
  ]
  const lines = [
    `| ${header.join(' | ')} |`,
    `|${header.map(() => '---').join('|')}|`,
  ]
  const groups = new Map<string, RunResult[]>()
  for (const r of results) {
    const key = `${r.browser}|${r.rows}|${r.cols}`
    groups.set(key, [...(groups.get(key) ?? []), r])
  }
  for (const runs of groups.values()) {
    const { browser, browserVersion, rows, cols } = runs[0]
    const timed = runs.filter(r => !r.traced)
    const okTimed = timed.filter(r => r.status === 'ok')
    const edits = okTimed.flatMap(r => r.edits)
    const isChromium = browser === 'chromium'
    lines.push(
      `| ${[
        `${browser} ${browserVersion}`,
        `${rows.toLocaleString('en-US')} × ${cols}`,
        statusSummary(runs),
        seconds(okTimed.map(r => r.clickToReadyMs)),
        seconds(okTimed.map(r => r.snapshotToModelMs)),
        seconds(okTimed.map(r => r.snapshotToReadyMs)),
        seconds(okTimed.map(r => r.loadHeartbeat?.maxGapMs)),
        seconds(okTimed.map(r => r.loadHeartbeat?.blockedMs)),
        megabytes(
          runs.map(r => r.steadyHeapMB),
          isChromium ? '—' : 'not measured',
        ),
        megabytes(
          runs.map(r => r.peakHeapMB),
          isChromium ? '—' : 'not measured',
        ),
        seconds(edits.map(e => e.select.toPatchMs)),
        seconds(edits.map(e => e.commit.toPatchMs)),
        seconds(edits.map(e => e.commit.heartbeat.maxGapMs)),
      ].join(' | ')} |`,
    )
  }
  const unhandled = [...new Set(results.flatMap(r => r.unhandledRequests))]
  const errors = results.filter(r => r.error)
  return [
    ...lines,
    '',
    ...(unhandled.length
      ? [
          'Requests answered with 404 or aborted:',
          ...unhandled.map(u => `- \`${u}\``),
          '',
        ]
      : []),
    ...(errors.length
      ? [
          'Failed runs:',
          ...errors.map(
            r =>
              `- ${r.browser} ${r.rows} rows rep ${r.rep}${r.traced ? ' (traced)' : ''}: ${r.status} during ${r.failedAt}: ${r.error?.split('\n')[0]}`,
          ),
          '',
        ]
      : []),
  ].join('\n')
}

export function writeReport(label: string) {
  const results = readResults(label)
  const markdown = renderMarkdown(results)
  writeFileSync(path.join(RESULTS_DIR, `${label}.md`), `${markdown}\n`)
  writeFileSync(
    path.join(RESULTS_DIR, `${label}.json`),
    JSON.stringify(results, null, 2),
  )
  return markdown
}
