import {
  AccessTokenGenerationResponse,
  AccessTokenRecordList,
} from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'
import {
  mockAccessTokenRecordListPageOne,
  mockAccessTokenRecordListPageTwo,
} from '../../personalAccessToken/mockPersonalAccessToken'

export function getPersonalAccessTokenHandlers(
  backendOrigin: string,
  tokenRecordOverride?: AccessTokenRecordList,
) {
  return [
    http.get(`${backendOrigin}/auth/v1/personalAccessToken`, ({ request }) => {
      let response = mockAccessTokenRecordListPageOne
      if (tokenRecordOverride) {
        response = tokenRecordOverride
      } else if (new URL(request.url).searchParams.get('nextPageToken')) {
        response = mockAccessTokenRecordListPageTwo
      }

      return HttpResponse.json(response, { status: 200 })
    }),
    http.delete(`${backendOrigin}/auth/v1/personalAccessToken/:id`, () => {
      return new Response('', { status: 202 })
    }),

    http.post(`${backendOrigin}/auth/v1/personalAccessToken`, () => {
      const responseBody: AccessTokenGenerationResponse = {
        token: 'your-token-here',
      }
      return HttpResponse.json(responseBody, { status: 201 })
    }),
  ]
}
