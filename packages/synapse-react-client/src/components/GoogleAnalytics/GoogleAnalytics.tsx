import { useGoogleAnalytics } from '../../utils/hooks/useGoogleAnalytics'

export type GoogleAnalyticsProps = {
  measurementId?: string
}
/**
 * GoogleAnalytics is a component wrapper for the useGoogleAnalytics() hook.
 * This is exported for use in the Synapse.org GWT codebase.
 * @param props
 */
export function GoogleAnalytics(props: GoogleAnalyticsProps) {
  const { measurementId } = props
  useGoogleAnalytics(measurementId)
  return <></>
}
export default GoogleAnalytics
