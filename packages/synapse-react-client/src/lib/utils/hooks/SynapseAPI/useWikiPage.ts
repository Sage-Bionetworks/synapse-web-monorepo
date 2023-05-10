import { useQuery, UseQueryOptions } from 'react-query'
import { SynapseClient } from '../../..'
import { ObjectType, WikiPage } from '../../synapseTypes'
import { SynapseClientError } from '../../SynapseClientError'
import { useSynapseContext } from '../../SynapseContext'

export function useWikiPage(
  ownerId: string,
  wikiPageId: string = '',
  objectType: ObjectType = ObjectType.ENTITY,
  options?: UseQueryOptions<WikiPage, SynapseClientError>,
) {
  const { accessToken, keyFactory } = useSynapseContext()
  return useQuery<WikiPage, SynapseClientError>(
    keyFactory.getWikiPageKey(ownerId, wikiPageId),
    () =>
      SynapseClient.getEntityWiki(accessToken, ownerId, wikiPageId, objectType),
    options,
  )
}
