import { rest } from 'msw'
import {
  mockAccessTokenRecordListPageOne,
  mockAccessTokenRecordListPageTwo,
} from '../../personalAccessToken/mockPersonalAccessToken'
import {
  AccessTokenGenerationResponse,
  AccessTokenRecordList,
} from '@sage-bionetworks/synapse-types'

export function getPersonalAccessTokenHandlers(
  backendOrigin: string,
  tokenRecordOverride?: AccessTokenRecordList,
) {
  return [
    rest.get(
      `${backendOrigin}/auth/v1/personalAccessToken`,
      async (req, res, ctx) => {
        let response = mockAccessTokenRecordListPageOne
        if (tokenRecordOverride) {
          response = tokenRecordOverride
        } else if (req.url.searchParams.get('nextPageToken')) {
          response = mockAccessTokenRecordListPageTwo
        }

        return res(ctx.status(200), ctx.json(response))
      },
    ),
    rest.delete(
      `${backendOrigin}/auth/v1/personalAccessToken/:id`,
      async (req, res, ctx) => {
        return res(ctx.status(202))
      },
    ),

    rest.post(
      `${backendOrigin}/auth/v1/personalAccessToken`,
      async (req, res, ctx) => {
        const responseBody: AccessTokenGenerationResponse = {
          token: 'your-token-here',
        }
        return res(ctx.status(201), ctx.json(responseBody))
      },
    ),
  ]
}
