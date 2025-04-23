import { RouteObject, Navigate, useSearchParams } from 'react-router'

export type DoiRedirectConfig<TResourceType extends string> = (
  resourceType: TResourceType,
  resourceId: string,
) => string

// Portal DOI IDs are of the form "RESOURCETYPE.RESOURCEID". For example, `STUDY.syn123`.

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

  const [resourceType, resourceId] = doiId.split('.', 2)

  const redirectUrl = redirectConfig(resourceType as TResourceType, resourceId)
  return <Navigate to={redirectUrl} replace={true} />
}

export function getDoiRedirectRoute<TResourceType extends string>(
  config: DoiRedirectConfig<TResourceType>,
): RouteObject {
  return {
    path: 'doi',
    element: <DoiRedirectComponent redirectConfig={config} />,
  }
}
