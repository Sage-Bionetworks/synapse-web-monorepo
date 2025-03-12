import { useEffect } from 'react'
import { useCookiePreferences } from './useCookiePreferences'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

// This hook code is globally executed once
let isExecuted = false

export const useGoogleAnalytics = (measurementId: string = 'GTM-KPW4KS62') => {
  const [cookiePreferences] = useCookiePreferences()

  useEffect(() => {
    if (cookiePreferences.analyticsAllowed && !isExecuted) {
      window.dataLayer = window.dataLayer || []
      function gtag(...args: any[]) {
        window.dataLayer.push(args)
      }

      window.gtag = gtag
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js',
      })
      const firstScriptElement = document.getElementsByTagName('script')[0]
      const gtmScript = document.createElement('script')
      const dl = `&l=dataLayer`
      gtmScript.async = true
      gtmScript.src =
        'https://www.googletagmanager.com/gtm.js?id=' + measurementId + dl
      firstScriptElement.parentNode?.insertBefore(gtmScript, firstScriptElement)

      isExecuted = true
    }
  }, [cookiePreferences, measurementId])

  return isExecuted
}

export default useGoogleAnalytics
