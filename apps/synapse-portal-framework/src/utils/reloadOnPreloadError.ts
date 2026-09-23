/**
 * Recovers from stale asset references left behind by a new deployment.
 *
 * A browser session that started before a deploy holds chunk URLs that no
 * longer exist on the server, so the next dynamic import (lazy route, lazy
 * component) fails and Vite dispatches `vite:preloadError`. Reloading fetches
 * the current `index.html` and, with it, the current chunk URLs.
 *
 * See https://vite.dev/guide/build#load-error-handling
 */
import { useEffect } from 'react'

const LAST_RELOAD_TIMESTAMP_KEY = 'portal-preload-error-reload-timestamp'

/**
 * A preload error that recurs shortly after a reload signals something a
 * reload can't fix (an incomplete deployment, a broken network). Ignoring
 * errors within this window of the previous attempt stops the page from
 * reloading in a loop and lets the error reach the error boundary instead.
 */
export const PRELOAD_ERROR_RELOAD_COOLDOWN_MS = 30_000

// sessionStorage is unavailable in some privacy configurations, and is the only
// place a reload attempt can be recorded such that it survives the reload.
// Without it we can't detect a loop, so we decline to reload at all.
function readLastReloadTimestamp(): number | undefined {
  try {
    const value = window.sessionStorage.getItem(LAST_RELOAD_TIMESTAMP_KEY)
    const timestamp = value == null ? NaN : Number(value)
    return Number.isFinite(timestamp) ? timestamp : undefined
  } catch {
    return undefined
  }
}

function recordReloadAttempt(): boolean {
  try {
    window.sessionStorage.setItem(LAST_RELOAD_TIMESTAMP_KEY, String(Date.now()))
    return true
  } catch {
    return false
  }
}

function handlePreloadError(event: VitePreloadErrorEvent) {
  const lastReloadTimestamp = readLastReloadTimestamp()
  const reloadedRecently =
    lastReloadTimestamp !== undefined &&
    Date.now() - lastReloadTimestamp < PRELOAD_ERROR_RELOAD_COOLDOWN_MS
  if (reloadedRecently || !recordReloadAttempt()) {
    return
  }

  // Vite rethrows the error unless the event is cancelled. The reload makes it
  // moot, and suppressing it avoids flashing an error page on the way out.
  event.preventDefault()
  window.location.reload()
}

/**
 * Reloads the page when a dynamic import fails because its chunk is no longer
 * on the server. Returns a function that unregisters the listener.
 */
export function registerPreloadErrorReloadHandler(): () => void {
  window.addEventListener('vite:preloadError', handlePreloadError)
  return () =>
    window.removeEventListener('vite:preloadError', handlePreloadError)
}

/** React entry point for {@link registerPreloadErrorReloadHandler}. */
export function useReloadOnPreloadError() {
  useEffect(() => registerPreloadErrorReloadHandler(), [])
}
