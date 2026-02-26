import { Navigate, useLocation } from 'react-router'

/**
 * Handles redirects from old query-string–based detail page URLs to the new
 * clean path-segment form.
 *
 * Examples:
 *   /Explore/Datasets/DetailsPage?id=syn123          → /Explore/Datasets/syn123
 *   /Explore/Studies/DetailsPage?studyId=syn456       → /Explore/Studies/syn456
 *   /Organizations/DetailsPage?abbreviation=CTF       → /Organizations/CTF
 *
 * @param paramName - The primary query parameter name to promote to a path segment.
 * @param fallbackParamName - An alternative parameter to try when the primary
 *   is absent (e.g. `fundingAgency` for Organization pages that can also be
 *   identified by that value).
 */
export default function LegacyDetailsPageRedirect({
  paramName,
  fallbackParamName,
}: {
  paramName: string
  fallbackParamName?: string
}) {
  const { search, pathname } = useLocation()
  const params = new URLSearchParams(search)
  const id =
    params.get(paramName) ??
    (fallbackParamName ? params.get(fallbackParamName) : null)

  // Strip the trailing /DetailsPage segment from the current pathname to get
  // the new base, e.g. /Explore/Datasets/DetailsPage → /Explore/Datasets
  const newBase = pathname.replace(/\/DetailsPage$/, '')

  if (!id) {
    return <Navigate to={newBase} replace />
  }
  return <Navigate to={`${newBase}/${encodeURIComponent(id)}`} replace />
}
