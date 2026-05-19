import { Navigate, useLocation } from 'react-router'

/**
 * Redirects old query-string detail page URLs to path-segment form,
 * preserving any trailing tab sub-path:
 *
 *   /Explore/Studies/DetailsPage/Details?studyId=syn1 → /Explore/Studies/syn1/Details
 *
 * Unknown tab segments fall through to the parent route's
 * `DefaultTabWildcardRedirect`, which recovers to the default tab.
 *
 * @param paramName - Query parameter to promote to a path segment.
 */
export default function LegacyDetailsPageRedirect({
  paramName,
}: {
  paramName: string
}) {
  const { search, pathname } = useLocation()
  const id = new URLSearchParams(search).get(paramName)

  // Split at /DetailsPage to keep any trailing tab segment (e.g. "/Details").
  const match = pathname.match(/^(.*?)\/DetailsPage(\/.*)?$/)
  const newBase = match?.[1] ?? pathname
  const tabPath = match?.[2] ?? ''

  if (!id) {
    return <Navigate to={`${newBase}${tabPath}`} replace />
  }
  return (
    <Navigate to={`${newBase}/${encodeURIComponent(id)}${tabPath}`} replace />
  )
}
