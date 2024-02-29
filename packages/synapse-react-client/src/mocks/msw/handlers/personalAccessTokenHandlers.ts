import { http, HttpResponse } from 'msw'
import {
  mockAccessTokenRecordListPageOne,
  mockAccessTokenRecordListPageTwo,
} from '../../personalAccessToken/mockPersonalAccessToken'
import {
  AccessTokenGenerationRequest,
  AccessTokenGenerationResponse,
  AccessTokenRecordList,
} from '@sage-bionetworks/synapse-types'
import { SynapseApiResponse } from '../handlers'

export function getPersonalAccessTokenHandlers(
  backendOrigin: string,
  tokenRecordOverride?: AccessTokenRecordList,
) {
  return [
    http.get<never, never, AccessTokenRecordList>(
      `${backendOrigin}/auth/v1/personalAccessToken`,
      ({ request }) => {
        const url = new URL(request.url)
        let response = mockAccessTokenRecordListPageOne
        if (tokenRecordOverride) {
          response = tokenRecordOverride
        } else if (url.searchParams.get('nextPageToken')) {
          response = mockAccessTokenRecordListPageTwo
        }

        return HttpResponse.json(response, { status: 200 })
      },
    ),
    http.delete<{ id: string }, never, SynapseApiResponse<''>>(
      `${backendOrigin}/auth/v1/personalAccessToken/:id`,
      () => {
        return HttpResponse.text('', { status: 202 })
      },
    ),

    http.post<
      never,
      AccessTokenGenerationRequest,
      SynapseApiResponse<AccessTokenGenerationResponse>
    >(`${backendOrigin}/auth/v1/personalAccessToken`, () => {
      const responseBody: AccessTokenGenerationResponse = {
        token: 'your-token-here',
      }
      return HttpResponse.json(responseBody, { status: 201 })
    }),
  ]
}
