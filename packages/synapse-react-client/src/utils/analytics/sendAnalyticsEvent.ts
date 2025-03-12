/**
 * Submits an event to Google Analytics. This is a noop if gtag is not available, which is possible
 * if the user has not consented to analytics tracking or their browser blocks trackers.
 * @param eventName
 * @param eventData
 */
export function sendAnalyticsEvent(
  eventName: string,
  eventData?: Record<string, string | number>,
) {
  const gtag = (window as any)?.gtag
  if (gtag) {
    gtag('event', eventName, {
      ...eventData,
    })
  }
}
