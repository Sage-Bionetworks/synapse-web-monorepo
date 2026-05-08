import { Navigate, useSearchParams } from 'react-router'
import { doiRedirector, doiSerializer } from '@/config/doiRedirector'

const OBJECT_ID_QUERY_PARAM = 'objectId'

export default function DoiRedirect() {
  const [searchParams] = useSearchParams()
  const doiId = searchParams.get(OBJECT_ID_QUERY_PARAM)

  let redirectUrl: string = '/'

  if (!doiId) {
    console.error(
      'Could not redirect to DOI: no id provided in the URLSearchParams.',
    )
  } else {
    try {
      const [resourceType, keyAttributes] = doiSerializer.deserialize(doiId)
      redirectUrl = doiRedirector(resourceType, keyAttributes)
    } catch (e) {
      console.error(
        `Could not redirect to DOI: error deserializing id '${doiId}' provided in the URLSearchParams.`,
        e,
      )
    }
  }

  return <Navigate to={redirectUrl} replace={true} />
}
