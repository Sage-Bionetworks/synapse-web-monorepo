import { rest } from 'msw'
import { ACCESS_REQUIREMENT_WIKI_PAGE } from '../../../utils/APIConstants'
import { FileHandleResults, WikiPage } from '@sage-bionetworks/synapse-types'
import { SynapseApiResponse } from '../handlers'
import { mockWikiPages } from '../../mockWiki'

export const getWikiHandlers = (backendOrigin: string) => [
  rest.get(
    `${backendOrigin}${ACCESS_REQUIREMENT_WIKI_PAGE(':arId', ':wikiId')}`,
    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<WikiPage> = {
        reason: `Mock Service worker could not find a wiki page with ID ${req.params.wikiId}`,
      }

      const wikiPage = mockWikiPages.find(wp => wp.id === req.params.wikiId)
      if (wikiPage) {
        response = wikiPage
        status = 200
      }
      return res(ctx.status(status), ctx.json(response))
    },
  ),
  rest.get(
    `${backendOrigin}/repo/v1/:objectType/:objectId/wiki2/:wikiId/attachmenthandles`,
    async (req, res, ctx) => {
      let status = 200
      let response: SynapseApiResponse<FileHandleResults> = {
        list: [],
      }
      return res(ctx.status(status), ctx.json(response))
    },
  ),
]
