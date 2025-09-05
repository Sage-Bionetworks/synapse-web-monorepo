import { OAUTH_CLIENT_ACL } from '@/utils/APIConstants'
import { AccessControlList } from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'
import { SynapseApiResponse } from '../handlers'
import { mockOAuthClientAcls } from '@/mocks/mockOAuthClientAcls'

export function getOAuthClientAclHandler(backendOrigin: string) {
  return http.get(
    `${backendOrigin}${OAUTH_CLIENT_ACL(':id')}`,

    ({ params }) => {
      let status = 404
      let response: SynapseApiResponse<AccessControlList> = {
        concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
        reason: `Mock Service worker could not find an ACL for OAuth client with ID ${params.id}`,
      }
      const acl = mockOAuthClientAcls.find(acl => acl.id === params.id)

      if (acl) {
        response = acl
        status = 200
      }

      return HttpResponse.json(response, { status })
    },
  )
}

export function updateOAuthClientAcl(backendOrigin: string) {
  return http.put<{ id: string }, AccessControlList>(
    `${backendOrigin}${OAUTH_CLIENT_ACL(':id')}`,
    async ({ request }) => {
      const requestBody: AccessControlList = await request.json()
      return HttpResponse.json(requestBody, { status: 200 })
    },
  )
}

export function getAllOAuthClientAclHandlers(backendOrigin: string) {
  return [
    getOAuthClientAclHandler(backendOrigin),
    updateOAuthClientAcl(backendOrigin),
  ]
}
