import React from 'react'
import { useGoogleAnalytics } from '../../utils/hooks'

export type GoogleAnalyticsProps = {
  measurementId?: string
}
/**
 * GoogleAnalytics is a component wrapper for the useGoogleAnalytics() hook.
 * This is exported for use in the Synapse.org GWT codebase.
 * @param props
 */
export const GoogleAnalytics: React.FunctionComponent<GoogleAnalyticsProps> = (
  props: GoogleAnalyticsProps,
) => {
  const { measurementId } = props
  useGoogleAnalytics(measurementId)
  return <></>
}
export default GoogleAnalytics
