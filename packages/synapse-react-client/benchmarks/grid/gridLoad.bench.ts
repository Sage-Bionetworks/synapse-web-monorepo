import {
  test as base,
  type Browser,
  type CDPSession,
  type Page,
} from '@playwright/test'
import { statSync } from 'node:fs'
import { setTimeout as sleep } from 'node:timers/promises'
import path from 'node:path'
import {
  CACHE_DIR,
  COLS,
  EDITS_PER_RUN,
  LONG_GAP_MS,
  LOAD_TIMEOUT_MS,
  PATCH_TIMEOUT_MS,
  repsFor,
  ROW_COUNTS,
  RUN_LABEL,
  SETTLE_MS,
  SNAPSHOT_ROUTE,
  snapshotFileName,
  STORY_ID,
} from './config'
import {
  installMockBackend,
  type MockGridServer,
  type ReceivedPatch,
} from './mockBackend'
import { installHeartbeat, isGridReady } from './pageProbes'
import { appendResult, type InteractionResult, type RunResult } from './results'
import { startStaticServer, type StaticServer } from './staticServer'

// Runs, interactions, and polls must happen one at a time: concurrent work would skew the timings.
/* oxlint-disable no-await-in-loop */

const TRACE_PEAK_HEAP = process.env.GRID_BENCH_TRACE !== '0'

const test = base.extend<object, { staticServer: StaticServer }>({
  staticServer: [
    // oxlint-disable-next-line no-empty-pattern -- Playwright fixtures require a destructured first argument
    async ({}, provide) => {
      const server = await startStaticServer()
      await provide(server)
      await server.close()
    },
    { scope: 'worker' },
  ],
})

class StepTimeout extends Error {}

async function waitForPatch(
  server: MockGridServer,
  fromIndex: number,
  matches: (patch: ReceivedPatch) => boolean,
): Promise<ReceivedPatch> {
  const deadline = Date.now() + PATCH_TIMEOUT_MS
  while (Date.now() < deadline) {
    const patch = server.patches.slice(fromIndex).find(matches)
    if (patch) return patch
    await sleep(5)
  }
  throw new StepTimeout(`no matching patch within ${PATCH_TIMEOUT_MS} ms`)
}

async function heapAfterGcMB(cdp: CDPSession) {
  await cdp.send('HeapProfiler.collectGarbage')
  const { usedSize } = await cdp.send('Runtime.getHeapUsage')
  return usedSize / 1e6
}

/** Largest JS heap size in a Chromium trace, from the GC events and the timeline's memory counters. */
function peakHeapFromTraceMB(trace: Buffer) {
  type TraceEvent = {
    args?: {
      usedHeapSizeBefore?: number
      usedHeapSizeAfter?: number
      data?: { jsHeapSizeUsed?: number; usedHeapSizeBefore?: number }
    }
  }
  const { traceEvents } = JSON.parse(trace.toString('utf8')) as {
    traceEvents: TraceEvent[]
  }
  let peak = 0
  for (const { args } of traceEvents) {
    peak = Math.max(
      peak,
      args?.usedHeapSizeBefore ?? 0,
      args?.usedHeapSizeAfter ?? 0,
      args?.data?.jsHeapSizeUsed ?? 0,
      args?.data?.usedHeapSizeBefore ?? 0,
    )
  }
  return peak > 0 ? peak / 1e6 : undefined
}

/**
 * Times one interaction: from just before `act` until its patch reaches the mock server, then lets
 * trailing work finish and reads how long the main thread was blocked over the whole window.
 */
async function measureInteraction(
  page: Page,
  server: MockGridServer,
  act: () => Promise<void>,
  matches: (patch: ReceivedPatch) => boolean,
): Promise<InteractionResult> {
  await page.evaluate(() => window.gridBenchmarkHeartbeat.reset())
  const fromIndex = server.patches.length
  const startedAt = Date.now()
  await act()
  const patch = await waitForPatch(server, fromIndex, matches)
  await sleep(SETTLE_MS)
  const heartbeat = await page.evaluate(() =>
    window.gridBenchmarkHeartbeat.read(),
  )
  return { toPatchMs: patch.receivedAt - startedAt, heartbeat }
}

async function runBenchmark({
  page,
  browser,
  staticServer,
  rows,
  rep,
  traced,
}: {
  page: Page
  browser: Browser
  staticServer: StaticServer
  rows: number
  rep: number
  traced: boolean
}) {
  const browserName = browser.browserType().name()
  const snapshotName = snapshotFileName(rows, COLS)
  const result: RunResult = {
    label: RUN_LABEL,
    browser: browserName,
    browserVersion: browser.version(),
    rows,
    cols: COLS,
    rep,
    traced,
    status: 'ok',
    snapshotBytes: statSync(path.join(CACHE_DIR, snapshotName)).size,
    edits: [],
    unhandledRequests: [],
  }
  let step = 'opening the story'
  let tracing = false
  const crashed = Promise.withResolvers<never>()
  let didCrash = false
  page.on('crash', () => {
    didCrash = true
    crashed.reject(new Error('page crashed'))
  })
  // Failed waits elsewhere would otherwise leave this rejection unobserved.
  crashed.promise.catch(() => undefined)
  const unlessCrashed = <T>(work: Promise<T>) =>
    Promise.race([work, crashed.promise])

  const server = await installMockBackend(page, {
    localOrigin: staticServer.origin,
    snapshotUrl: `${staticServer.origin}${SNAPSHOT_ROUTE}${snapshotName}`,
  })
  result.unhandledRequests = server.unhandledRequests
  await page.addInitScript(installHeartbeat, LONG_GAP_MS)

  try {
    await page.goto(
      `${staticServer.origin}/iframe.html?id=${STORY_ID}&viewMode=story`,
    )
    const startButton = page.getByRole('button', { name: 'Start Grid Session' })
    await startButton.waitFor({ timeout: 60_000 })
    await sleep(1_000)

    const cdp =
      browserName === 'chromium'
        ? await page.context().newCDPSession(page)
        : undefined
    if (cdp) result.baselineHeapMB = await heapAfterGcMB(cdp)
    if (traced) {
      await browser.startTracing(page, {
        categories: [
          'devtools.timeline',
          'disabled-by-default-devtools.timeline',
          'v8',
        ],
      })
      tracing = true
    }

    step = 'loading the grid'
    await page.evaluate(() => window.gridBenchmarkHeartbeat.reset())
    const clickedAt = Date.now()
    await startButton.click()
    try {
      await unlessCrashed(
        page.waitForFunction(isGridReady, undefined, {
          polling: 'raf',
          timeout: LOAD_TIMEOUT_MS,
        }),
      )
    } catch (error) {
      if (error instanceof Error && error.name === 'TimeoutError') {
        throw new StepTimeout(`grid not ready within ${LOAD_TIMEOUT_MS} ms`)
      }
      throw error
    }
    const readyAt = Date.now()
    const snapshotSentAt = staticServer.snapshotSentAt.get(snapshotName)
    result.clickToReadyMs = readyAt - clickedAt
    if (snapshotSentAt !== undefined) {
      result.snapshotToReadyMs = readyAt - snapshotSentAt
      // The client sends its second clock sync right after it builds the model from the snapshot.
      const modelSyncAt = server.clockSyncsAt[1]
      if (modelSyncAt !== undefined) {
        result.snapshotToModelMs = modelSyncAt - snapshotSentAt
      }
    }
    await sleep(SETTLE_MS)
    result.loadHeartbeat = await unlessCrashed(
      page.evaluate(() => window.gridBenchmarkHeartbeat.read()),
    )
    if (traced) {
      step = 'reading the trace'
      tracing = false
      result.peakHeapMB = peakHeapFromTraceMB(await browser.stopTracing())
    }
    if (cdp) {
      step = 'measuring steady heap'
      result.steadyHeapMB = await unlessCrashed(heapAfterGcMB(cdp))
    }

    for (let edit = 0; edit < EDITS_PER_RUN; edit++) {
      const value = `bench-edit-${edit}`
      const cell = page
        .locator('.dsg-row:not(.dsg-row-header)')
        .nth(edit + 1)
        .locator('.dsg-cell:not(.dsg-cell-gutter)')
        .nth(edit + 1)
      step = `selecting a cell (edit ${edit + 1})`
      const select = await unlessCrashed(
        measureInteraction(
          page,
          server,
          () => cell.click(),
          () => true,
        ),
      )
      step = `typing (edit ${edit + 1})`
      await unlessCrashed(page.keyboard.type(value))
      await sleep(500)
      step = `committing (edit ${edit + 1})`
      const commit = await unlessCrashed(
        measureInteraction(
          page,
          server,
          () => page.keyboard.press('Enter'),
          // Typing starts the editor on the first key; match the tail in case that key is consumed.
          patch => patch.frame.includes(value.slice(1)),
        ),
      )
      result.edits.push({ select, commit })
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    if (didCrash) result.status = 'crash'
    else if (error instanceof StepTimeout) result.status = 'timeout'
    else result.status = 'error'
    result.error = message
    result.failedAt = step
    if (!page.isClosed() && result.status !== 'crash') {
      await page
        .screenshot({
          path: path.join(
            CACHE_DIR,
            'failures',
            `${RUN_LABEL}-${browserName}-${rows}-rep${rep}.png`,
          ),
          timeout: 10_000,
        })
        .catch(() => undefined)
    }
  } finally {
    // A trace left running would make the next run's startTracing fail.
    if (tracing) await browser.stopTracing().catch(() => undefined)
    appendResult(result)
  }
  console.log(
    `[grid-benchmark] ${browserName} ${rows}x${COLS} rep ${rep}${traced ? ' (traced)' : ''}: ${result.status}` +
      (result.clickToReadyMs !== undefined
        ? ` click→ready ${result.clickToReadyMs} ms, snapshot→ready ${result.snapshotToReadyMs} ms`
        : '') +
      (result.error
        ? ` (${result.failedAt}: ${result.error.split('\n')[0]})`
        : ''),
  )
}

for (const rows of ROW_COUNTS) {
  test.describe(`${rows} rows × ${COLS} columns`, () => {
    for (let rep = 0; rep < repsFor(rows); rep++) {
      test(`rep ${rep}`, async ({ page, browser, staticServer }) => {
        await runBenchmark({
          page,
          browser,
          staticServer,
          rows,
          rep,
          traced: false,
        })
      })
    }
    test('traced for peak heap', async ({
      page,
      browser,
      browserName,
      staticServer,
    }) => {
      test.skip(
        !TRACE_PEAK_HEAP || browserName !== 'chromium',
        'Peak heap needs a Chromium trace',
      )
      await runBenchmark({
        page,
        browser,
        staticServer,
        rows,
        rep: 0,
        traced: true,
      })
    })
  })
}
