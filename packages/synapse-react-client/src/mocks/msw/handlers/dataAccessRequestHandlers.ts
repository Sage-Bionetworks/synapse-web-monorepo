import {
  ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE,
  DATA_ACCESS_REQUEST,
  DATA_ACCESS_REQUEST_SUBMISSION,
} from '@/utils/APIConstants'
import { Renewal, Request } from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'
import {
  MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID,
  mockManagedACTAccessRequirement,
} from '../../accessRequirement/mockAccessRequirements'
import {
  MOCK_DATA_ACCESS_RENEWAL,
  MOCK_DATA_ACCESS_REQUEST,
} from '../../dataaccess/MockDataAccessRequest'
import BasicMockedCrudService from '../util/BasicMockedCrudService'

const mockDataAccessRequestService = new BasicMockedCrudService<
  Request | Renewal,
  'id'
>({
  idField: 'id',
  autoGenerateId: true,
  initialData: [MOCK_DATA_ACCESS_REQUEST, MOCK_DATA_ACCESS_RENEWAL],
})

const mockMapARToDataAccessRequestService = new BasicMockedCrudService<{
  accessRequirementId: string
  requestId: string
}>({
  initialData: [
    {
      accessRequirementId: String(mockManagedACTAccessRequirement.id),
      requestId: MOCK_DATA_ACCESS_REQUEST.id,
    },
    {
      accessRequirementId: String(MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID),
      requestId: MOCK_DATA_ACCESS_RENEWAL.id,
    },
  ],
})

export function getDataAccessRequestHandlers(backendOrigin: string) {
  return [
    http.get(
      `${backendOrigin}${ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE(
        ':id',
      )}`,
      ({ params }) => {
        const response = mockMapARToDataAccessRequestService.getOneByField(
          'accessRequirementId',
          params.id as string,
        )
        if (response && response.requestId) {
          const dataAccessRequest = mockDataAccessRequestService.getOneById(
            response.requestId,
          )
          if (dataAccessRequest) {
            return HttpResponse.json(dataAccessRequest, { status: 200 })
          }
        }
        return HttpResponse.json(
          {
            message: `MSW: Request or Renewal not found for access requirement ID: ${params.id}`,
          },
          { status: 404 },
        )
      },
    ),
    http.post<never, Request | Renewal>(
      `${backendOrigin}${DATA_ACCESS_REQUEST}`,
      async ({ request }) => {
        const resp = await request.json()
        const existingRequest = resp.id
          ? mockDataAccessRequestService.getOneById(resp.id)
          : null

        let updated
        if (existingRequest) {
          updated = mockDataAccessRequestService.update(resp.id, resp)
        } else {
          updated = mockDataAccessRequestService.create(resp)
        }

        return HttpResponse.json(updated, { status: 201 })
      },
    ),

    http.post(
      `${backendOrigin}${DATA_ACCESS_REQUEST_SUBMISSION(':id')}`,
      () => {
        return HttpResponse.json({}, { status: 201 })
      },
    ),
  ]
}
