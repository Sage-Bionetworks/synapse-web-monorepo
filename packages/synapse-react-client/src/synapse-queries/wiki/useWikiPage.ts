import { ObjectType, WikiPage } from '@sage-bionetworks/synapse-types'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { useSynapseContext } from '../../utils'
import SynapseClient from '../../synapse-client'

export function useWikiPage(
  ownerId: string,
  wikiPageId: string = '',
  objectType: ObjectType = ObjectType.ENTITY,
  options?: UseQueryOptions<WikiPage, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery({
    ...options,
    queryKey: keyFactory.getWikiPageKey(ownerId, wikiPageId),
    queryFn: () =>
      SynapseClient.getEntityWiki(accessToken, ownerId, wikiPageId, objectType),
  })
}
