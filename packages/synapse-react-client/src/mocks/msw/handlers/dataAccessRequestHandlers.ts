import {
  CreateSubmissionRequest,
  Renewal,
  Request,
  StatusEnum,
  SubmissionStatus,
} from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'
import {
  ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE,
  DATA_ACCESS_REQUEST,
  DATA_ACCESS_REQUEST_SUBMISSION,
} from '../../../utils/APIConstants'
import { SynapseApiResponse } from '../handlers'

export function getDataAccessRequestHandlers(backendOrigin: string) {
  return [
    http.get<{ id: string }, never, SynapseApiResponse<Request | Renewal>>(
      `${backendOrigin}${ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE(
        ':id',
      )}`,
      async ({ request }) => {
        const response = await request.json()
        return HttpResponse.json(response, { status: 200 })
      },
    ),
    http.post<never, Request | Renewal, SynapseApiResponse<Request | Renewal>>(
      `${backendOrigin}${DATA_ACCESS_REQUEST}`,
      async ({ request }) => {
        const resp = await request.json()
        return HttpResponse.json(resp, { status: 201 })
      },
    ),
    http.post<
      { id: string },
      CreateSubmissionRequest,
      SynapseApiResponse<SubmissionStatus>
    >(`${backendOrigin}${DATA_ACCESS_REQUEST_SUBMISSION(':id')}`, () => {
      return HttpResponse.json(
        {
          state: StatusEnum.SUBMITTED_WAITING_FOR_REVIEW,
        },
        { status: 201 },
      )
    }),
  ]
}
