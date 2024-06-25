import { useEffect } from 'react'
import { useCookiePreferences } from './useCookiePreferences'

declare global {
  interface Window {
    dataLayer: any
  }
}

// This hook code is globally executed once
let isExecuted = false

export const useGoogleAnalytics = (measurementId?: string) => {
  const [cookiePreferences] = useCookiePreferences()

  useEffect(() => {
    if (cookiePreferences.analyticsAllowed && !isExecuted) {
      const w = window
      const d = document
      const s = 'script'
      const l = 'dataLayer'
      const i = measurementId ?? 'GTM-KPW4KS62'
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      w[l] = w[l] || []
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
      const f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? `&l=${l}` : ''
      j.async = true
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl
      f.parentNode?.insertBefore(j, f)

      isExecuted = true
    }
  }, [cookiePreferences, measurementId])

  return isExecuted
}

export default useGoogleAnalytics
