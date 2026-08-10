export const WAIT_FOR_ELEMENT_TIMEOUT_MS = 8_000

/**
 * Resolves with the first element matching `selector`, observing DOM
 * mutations until it appears. Resolves with `null` if the element does not
 * appear within `timeoutMs`. Resolution is deferred by one animation frame so
 * a newly-mounted element has been laid out before callers measure it.
 */
export function waitForElement(
  selector: string,
  timeoutMs: number = WAIT_FOR_ELEMENT_TIMEOUT_MS,
): Promise<Element | null> {
  return new Promise(resolve => {
    const settle = (element: Element | null) => {
      requestAnimationFrame(() => resolve(element))
    }

    const existing = document.querySelector(selector)
    if (existing) {
      settle(existing)
      return
    }

    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector)
      if (element) {
        clearTimeout(timeoutId)
        observer.disconnect()
        settle(element)
      }
    })
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
    })

    const timeoutId = setTimeout(() => {
      observer.disconnect()
      resolve(null)
    }, timeoutMs)
  })
}
