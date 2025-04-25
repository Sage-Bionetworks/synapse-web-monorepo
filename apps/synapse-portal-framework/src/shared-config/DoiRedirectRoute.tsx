import { RouteObject, Navigate, useSearchParams } from 'react-router'

export type DoiRedirectConfig<TResourceType extends string> = (
  resourceType: TResourceType,
  resourceId: string,
) => string

/**
 * Component to redirect the Portal DOI ID to the resource in the portal.
 * Portal DOI IDs are of the form "RESOURCETYPE.RESOURCEID". For example, `STUDY.syn123`.
 *
 * If no id is provided in the URLSearchParams, the user is redirected to the home page.
 * @param props contains the redirectConfig function that maps the resource type/ID to the URL of the resource in the portal
 */
function DoiRedirectComponent<TResourceType extends string>(props: {
  redirectConfig: DoiRedirectConfig<TResourceType>
}) {
  const { redirectConfig } = props
  const [searchParams] = useSearchParams()
  const doiId = searchParams.get('id')

  if (!doiId) {
    console.error(
      'Could not redirect to DOI: no id provided in the URLSearchParams.',
    )
    return <Navigate to={'/'} replace={true} />
  }

  // Only split on the first `.` -- the ID may contain `.` itself
  const parts = doiId.split('.', 2)
  if (parts.length !== 2) {
    console.error(
      `Could not redirect to DOI: malformed id '${doiId}' provided in the URLSearchParams.`,
    )
    return <Navigate to={'/'} replace={true} />
  }
  const [resourceType, resourceId] = parts

  const redirectUrl = redirectConfig(resourceType as TResourceType, resourceId)
  return <Navigate to={redirectUrl} replace={true} />
}

/**
 * Creates a route to handle redirecting the ID specified in a Portal DOI to the resource in the portal.
 * @param config a function that maps the resource type/ID to the URL of the resource in the portal
 */
export function getDoiRedirectRoute<TResourceType extends string>(
  config: DoiRedirectConfig<TResourceType>,
): RouteObject {
  // e.g., maps /doi?id=MYRESOURCE.syn123 to /Explore/MyResource/DetailsPage?myResourceId=syn123
  return {
    path: 'doi',
    element: <DoiRedirectComponent redirectConfig={config} />,
  }
}
