/**
 * Code that runs inside the page. Each function is serialized by Playwright, so it must not
 * reference anything outside its own body.
 */

export type HeartbeatReading = {
  maxGapMs: number
  /** Sum of the heartbeat gaps longer than the threshold: time the main thread could not respond. */
  blockedMs: number
  longGapCount: number
}

declare global {
  interface Window {
    gridBenchmarkHeartbeat: {
      reset: () => void
      read: () => HeartbeatReading
    }
  }
}

/**
 * Starts a `setTimeout(0)` loop that records how long the main thread went without running it.
 * Install with `page.addInitScript` so it runs before the app.
 */
export function installHeartbeat(longGapMs: number) {
  let last = performance.now()
  let reading: HeartbeatReading = { maxGapMs: 0, blockedMs: 0, longGapCount: 0 }
  const recordGap = (now: number) => {
    const gap = now - last
    last = now
    reading.maxGapMs = Math.max(reading.maxGapMs, gap)
    if (gap > longGapMs) {
      reading.blockedMs += gap
      reading.longGapCount++
    }
  }
  const tick = () => {
    recordGap(performance.now())
    setTimeout(tick, 0)
  }
  setTimeout(tick, 0)
  window.gridBenchmarkHeartbeat = {
    reset: () => {
      last = performance.now()
      reading = { maxGapMs: 0, blockedMs: 0, longGapCount: 0 }
    },
    read: () => {
      recordGap(performance.now())
      return { ...reading }
    },
  }
}

/** True once the grid shows data rows and the initial sync has finished. */
export function isGridReady() {
  if (
    !document.querySelector(
      '.dsg-container .dsg-row:not(.dsg-row-header) .dsg-cell',
    )
  ) {
    return false
  }
  for (const caption of document.querySelectorAll('.MuiTypography-caption')) {
    if (caption.textContent === 'Syncing…') return false
  }
  return true
}
