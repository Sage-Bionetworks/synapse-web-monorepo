import { rest } from 'msw'
import { ACCESS_REQUIREMENT_WIKI_PAGE } from '../../../src/lib/utils/APIConstants'
import { WikiPage } from '../../../src/lib/utils/synapseTypes'
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
]
