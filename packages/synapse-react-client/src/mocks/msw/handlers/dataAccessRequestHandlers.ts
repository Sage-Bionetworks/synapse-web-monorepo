import { Renewal, Request } from '@sage-bionetworks/synapse-types'
import { rest } from 'msw'
import {
  ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE,
  DATA_ACCESS_REQUEST,
  DATA_ACCESS_REQUEST_SUBMISSION,
} from '../../../utils/APIConstants'
import {
  MOCK_DATA_ACCESS_RENEWAL,
  MOCK_DATA_ACCESS_REQUEST,
} from '../../dataaccess/MockDataAccessRequest'
import BasicMockedCrudService from '../util/BasicMockedCrudService'
import {
  MOCK_ACCESS_REQUIREMENT_WITHOUT_ACL_ID,
  mockManagedACTAccessRequirement,
} from '../../accessRequirement/mockAccessRequirements'

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
    rest.get(
      `${backendOrigin}${ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE(
        ':id',
      )}`,
      async (req, res, ctx) => {
        const response = mockMapARToDataAccessRequestService.getOneByField(
          'accessRequirementId',
          req.params.id as string,
        )
        if (response && response.requestId) {
          const dataAccessRequest = mockDataAccessRequestService.getOneById(
            response.requestId,
          )
          if (dataAccessRequest) {
            return res(ctx.status(200), ctx.json(dataAccessRequest))
          }
        }
        return res(
          ctx.status(404),
          ctx.json({
            message: `MSW: Request or Renewal not found for access requirement ID: ${req.params.id}`,
          }),
        )
      },
    ),
    rest.post(
      `${backendOrigin}${DATA_ACCESS_REQUEST}`,
      async (req, res, ctx) => {
        const resp = await req.json()
        const existingRequest = resp.id
          ? mockDataAccessRequestService.getOneById(resp.id)
          : null

        let updated
        if (existingRequest) {
          updated = mockDataAccessRequestService.update(resp.id, resp)
        } else {
          updated = mockDataAccessRequestService.create(resp)
        }

        return res(ctx.status(201), ctx.json(updated))
      },
    ),

    rest.post(
      `${backendOrigin}${DATA_ACCESS_REQUEST_SUBMISSION(':id')}`,
      async (req, res, ctx) => {
        return res(ctx.status(201), ctx.json({}))
      },
    ),
  ]
}
