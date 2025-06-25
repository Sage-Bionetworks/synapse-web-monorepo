import {
  ACCESS_REQUIREMENT_RESEARCH_PROJECT_FOR_UPDATE,
  RESEARCH_PROJECT,
} from '@/utils/APIConstants'
import { ResearchProject } from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'
import { MOCK_RESEARCH_PROJECT } from '../../dataaccess/MockResearchProject'

export function getResearchProjectHandlers(backendOrigin: string) {
  return [
    http.post(`${backendOrigin}${RESEARCH_PROJECT}`, async ({ request }) => {
      const resp = await request.json()
      return HttpResponse.json(resp, { status: 201 })
    }),
    http.get<{ id: string }>(
      `${backendOrigin}${ACCESS_REQUIREMENT_RESEARCH_PROJECT_FOR_UPDATE(
        ':id',
      )}`,
      ({ params }) => {
        const response: ResearchProject = {
          ...MOCK_RESEARCH_PROJECT,
          accessRequirementId: params.id.toString(),
        }
        return HttpResponse.json(response, { status: 200 })
      },
    ),
  ]
}
