import { ACCESS_REQUIREMENT_ACL } from '@/utils/APIConstants'
import { AccessControlList } from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'
import { mockAccessRequirementAcls } from '../../accessRequirement/mockAccessRequirementAcls'
import { SynapseApiResponse } from '../handlers'

export function getAccessRequirementAclHandler(backendOrigin: string) {
  return http.get(
    `${backendOrigin}${ACCESS_REQUIREMENT_ACL(':id')}`,

    ({ params }) => {
      let status = 404
      let response: SynapseApiResponse<AccessControlList> = {
        concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
        reason: `Mock Service worker could not find an ACL for access requirement with ID ${params.id}`,
      }
      const acl = mockAccessRequirementAcls.find(acl => acl.id === params.id)

      if (acl) {
        response = acl
        status = 200
      }

      return HttpResponse.json(response, { status })
    },
  )
}

export function deleteAccessRequirementAcl(backendOrigin: string) {
  return http.delete(`${backendOrigin}${ACCESS_REQUIREMENT_ACL(':id')}`, () => {
    return new Response('', { status: 200 })
  })
}

export function createAccessRequirementAcl(backendOrigin: string) {
  return http.post<{ id: string }, AccessControlList>(
    `${backendOrigin}${ACCESS_REQUIREMENT_ACL(':id')}`,
    async ({ request }) => {
      const requestBody = await request.json()
      return HttpResponse.json(requestBody, { status: 201 })
    },
  )
}

export function updateAccessRequirementAcl(backendOrigin: string) {
  return http.put<{ id: string }, AccessControlList>(
    `${backendOrigin}${ACCESS_REQUIREMENT_ACL(':id')}`,
    async ({ request }) => {
      const requestBody: AccessControlList = await request.json()
      return HttpResponse.json(requestBody, { status: 200 })
    },
  )
}

export function getAllAccessRequirementAclHandlers(backendOrigin: string) {
  return [
    getAccessRequirementAclHandler(backendOrigin),
    deleteAccessRequirementAcl(backendOrigin),
    createAccessRequirementAcl(backendOrigin),
    updateAccessRequirementAcl(backendOrigin),
  ]
}
