import { http, HttpResponse } from 'msw'
import { ACCESS_REQUIREMENT_WIKI_PAGE } from '../../../utils/APIConstants'
import { FileHandleResults, WikiPage } from '@sage-bionetworks/synapse-types'
import { SynapseApiResponse } from '../handlers'
import { mockWikiPages } from '../../mockWiki'

export const getWikiHandlers = (backendOrigin: string) => [
  http.get<
    { arId: string; wikiId: string },
    never,
    SynapseApiResponse<WikiPage>
  >(
    `${backendOrigin}${ACCESS_REQUIREMENT_WIKI_PAGE(':arId', ':wikiId')}`,
    ({ params }) => {
      let status = 404
      let response: SynapseApiResponse<WikiPage> = {
        reason: `Mock Service worker could not find a wiki page with ID ${params.wikiId}`,
      }

      const wikiPage = mockWikiPages.find(wp => wp.id === params.wikiId)
      if (wikiPage) {
        response = wikiPage
        status = 200
      }
      return HttpResponse.json(response, { status })
    },
  ),
  http.get<
    { objectType: string; objectId: string; wikiId: string },
    never,
    SynapseApiResponse<FileHandleResults>
  >(
    `${backendOrigin}/repo/v1/:objectType/:objectId/wiki2/:wikiId/attachmenthandles`,
    () => {
      const status = 200
      const response: SynapseApiResponse<FileHandleResults> = {
        list: [],
      }
      return HttpResponse.json(response, { status })
    },
  ),
]
