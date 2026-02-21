import './AnalyticsTypes'
import { useEffect } from 'react'
import {
  CookiePreference,
  useCookiePreferences,
} from '../hooks/useCookiePreferences'

// This hook code is globally executed once
let isExecuted = false

export const useGoogleAnalytics = (measurementId: string = 'GTM-KPW4KS62') => {
  const [cookiePreferences] = useCookiePreferences()

  useEffect(() => {
    if (
      shouldEnableGoogleAnalytics(
        window.location.hostname,
        cookiePreferences,
      ) &&
      !isExecuted
    ) {
      window.dataLayer = window.dataLayer || []

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

export function shouldEnableGoogleAnalytics(
  hostname: string,
  cookiePreferences: CookiePreference,
) {
  const isAnalyticsAllowed = cookiePreferences.analyticsAllowed

  const isOnSynapseDomain = hostname.includes('synapse.org')
  const isOnTestDomain =
    hostname.includes('localhost') ||
    hostname.includes('staging') ||
    hostname.includes('dev')

  return isAnalyticsAllowed && isOnSynapseDomain && !isOnTestDomain
}

export default useGoogleAnalytics
