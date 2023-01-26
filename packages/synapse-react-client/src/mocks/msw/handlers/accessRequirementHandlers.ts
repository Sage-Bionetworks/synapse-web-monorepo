import { rest } from 'msw'
import {
  ACCESS_REQUIREMENT_BY_ID,
  ACCESS_REQUIREMENT_WIKI_PAGE_KEY,
} from '../../../lib/utils/APIConstants'
import { MOCK_REPO_ORIGIN } from '../../../lib/utils/functions/getEndpoint'
import {
  AccessRequirement,
  ObjectType,
  WikiPageKey,
} from '../../../lib/utils/synapseTypes'
import { SynapseApiResponse } from '../handlers'
import {
  mockAccessRequirements,
  mockAccessRequirementWikiPageKeys,
} from '../../mockAccessRequirements'

export const getAccessRequirementHandlers = (backendOrigin: string) => [
  rest.get(
    `${backendOrigin}${ACCESS_REQUIREMENT_BY_ID(':id')}`,

    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<AccessRequirement> = {
        reason: `Mock Service worker could not find an access requirement with ID ${req.params.id}`,
      }
      const ar = mockAccessRequirements.find(
        ar => ar.id.toString() === req.params.id,
      )

      if (ar) {
        response = ar
        status = 200
      }

      return res(ctx.status(status), ctx.json(response))
    },
  ),
  rest.get(
    `${MOCK_REPO_ORIGIN}${ACCESS_REQUIREMENT_WIKI_PAGE_KEY(':id')}`,
    async (req, res, ctx) => {
      let status = 404
      let response: SynapseApiResponse<WikiPageKey> = {
        reason: `Mock Service worker could not find an access requirement wiki page key with AR ID ${req.params.id}`,
      }
      const wikiPageKey = mockAccessRequirementWikiPageKeys.find(
        wpk =>
          (wpk.ownerObjectType === ObjectType.ACCESS_REQUIREMENT &&
            wpk.ownerObjectId.toString()) === req.params.id,
      )

      if (wikiPageKey) {
        response = wikiPageKey
        status = 200
      }

      return res(ctx.status(status), ctx.json(response))
    },
  ),
]
