import PortalsDoiIdSerializer from '@/utils/PortalsDoiIdSerializer'
import { RouteObject, Navigate, useSearchParams } from 'react-router'

/**
 * Given a resource type and set of key,value pairs that comprise the resource key, returns the URL to redirect to.
 */
export type PortalResourceRedirector<
  TResourceType extends string,
  TResourceTypeAttributes extends Record<string, string> = Record<
    string,
    string
  >,
> = (
  resourceType: TResourceType,
  resourceKey: TResourceTypeAttributes,
) => string

// The request parameter that contains the Portal DOI ID
// This is hard-coded by the Synapse backend.
const OBJECT_ID_QUERY_PARAM = 'objectId'

/**
 * Component to redirect the Portal DOI ID to the resource in the portal.
 * Portal DOI IDs are a JSON string with ordered attributes. A deserializer and redirector are provided to
 *
 * 1. Deserialize the ID to get the resource type and key attributes
 * 2. Use the resource type and key attributes to get the URL to redirect
 *
 * If no id is provided in the URLSearchParams, or if the deserializer or redirector throw an error, the user is redirected to the home page.
 */
function DoiRedirectComponent<TResourceType extends string>(props: {
  deserializer: PortalsDoiIdSerializer<TResourceType>
  redirector: PortalResourceRedirector<TResourceType>
}) {
  const { redirector, deserializer } = props
  const [searchParams] = useSearchParams()
  const doiId = searchParams.get(OBJECT_ID_QUERY_PARAM)

  let redirectUrl: string = '/'

  if (!doiId) {
    console.error(
      'Could not redirect to DOI: no id provided in the URLSearchParams.',
    )
  } else {
    try {
      const [resourceType, keyAttributes] = deserializer.deserialize(doiId)
      redirectUrl = redirector(resourceType, keyAttributes)
    } catch (e) {
      console.error(
        `Could not redirect to DOI: error deserializing id '${doiId}' provided in the URLSearchParams.`,
        e,
      )
    }
  }

  return <Navigate to={redirectUrl} replace={true} />
}

/**
 * Creates a route to handle redirecting the ID specified in a Portal DOI to the resource in the portal.
 * @param configuration.redirector a function that maps the resource type/ID to the URL of the resource in the portal
 * @param configuration.deserializer a class that can deserialize a portal ID to extract the resource key to pass to the redirector
 */
export function getDoiRedirectRoute<
  TResourceType extends string,
>(configuration: {
  redirector: PortalResourceRedirector<TResourceType>
  deserializer: PortalsDoiIdSerializer<TResourceType>
}): RouteObject {
  const { redirector, deserializer } = configuration
  // e.g., maps /doi?id=foo to /Explore/MyResource/DetailsPage?myResourceId=bar
  // The logic for parsing the DOI ID to get the resource information is handled by the deserializer
  // The logic for redirecting to the details page given the resource information is handled by the redirector
  return {
    path: 'doi',
    element: (
      <DoiRedirectComponent
        redirector={redirector}
        deserializer={deserializer}
      />
    ),
  }
}
