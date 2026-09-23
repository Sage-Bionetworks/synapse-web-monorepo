import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest'
import {
  PRELOAD_ERROR_RELOAD_COOLDOWN_MS,
  registerPreloadErrorReloadHandler,
} from './reloadOnPreloadError'

function dispatchPreloadError() {
  const event = new Event('vite:preloadError', { cancelable: true })
  Object.assign(event, { payload: new Error('Unable to preload CSS') })
  window.dispatchEvent(event)
  return event
}

describe('registerPreloadErrorReloadHandler', () => {
  const reload = vi.fn()
  const originalLocation = window.location
  let unregister: () => void

  beforeAll(() => {
    // @ts-expect-error - TS doesn't allow deleting location, but we replace it immediately
    delete window.location
    // @ts-expect-error - TS doesn't allow reassigning location - https://github.com/microsoft/TypeScript/issues/61335
    window.location = Object.defineProperties(
      {},
      {
        ...Object.getOwnPropertyDescriptors(originalLocation),
        reload: { configurable: true, value: reload },
      },
    ) as Location
  })

  afterAll(() => {
    // @ts-expect-error - TS doesn't allow reassigning location - https://github.com/microsoft/TypeScript/issues/61335
    window.location = originalLocation
  })

  beforeEach(() => {
    vi.useFakeTimers()
    reload.mockClear()
    window.sessionStorage.clear()
    unregister = registerPreloadErrorReloadHandler()
  })

  afterEach(() => {
    unregister()
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('reloads the page on a preload error', () => {
    dispatchPreloadError()

    expect(reload).toHaveBeenCalledOnce()
  })

  // Cancelling would make Vite resolve the failed import with `undefined`,
  // which breaks React Router's own route-module reload recovery
  it('leaves the event uncancelled so Vite still rethrows the error', () => {
    const event = dispatchPreloadError()

    expect(event.defaultPrevented).toBe(false)
  })

  it('does not reload again while the cooldown is active', () => {
    dispatchPreloadError()
    vi.advanceTimersByTime(PRELOAD_ERROR_RELOAD_COOLDOWN_MS - 1)
    dispatchPreloadError()

    expect(reload).toHaveBeenCalledOnce()
  })

  it('reloads again for a preload error after the cooldown elapses', () => {
    dispatchPreloadError()
    vi.advanceTimersByTime(PRELOAD_ERROR_RELOAD_COOLDOWN_MS)
    dispatchPreloadError()

    expect(reload).toHaveBeenCalledTimes(2)
  })

  it('does not reload when sessionStorage is unavailable', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('sessionStorage is disabled')
    })
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('sessionStorage is disabled')
    })

    dispatchPreloadError()

    expect(reload).not.toHaveBeenCalled()
  })

  it('stops reloading once unregistered', () => {
    unregister()

    dispatchPreloadError()

    expect(reload).not.toHaveBeenCalled()
  })
})
