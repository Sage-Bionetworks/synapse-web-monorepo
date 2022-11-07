import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Sends a page view event to Google Analytics every time the location changes.
 *
 * This hook must be called within a react-router Router.
 */
export default function useAnalytics() {
  const location = useLocation()

  useEffect(() => {
    // send page view event to Google Analytics
    // (casting to 'any' type to get compile-time access to gtag())
    const windowAny: any = window
    const gtag = windowAny.gtag
    if (gtag) {
      gtag('config', 'UA-29804340-1', {
        page_location: window.location.href,
        page_path: `/${location.pathname}`,
      })
    }
  }, [location])
}
