import {
  ACCESS_REQUIREMENT_RESEARCH_PROJECT_FOR_UPDATE,
  RESEARCH_PROJECT,
} from '@/utils/APIConstants'
import { ResearchProject } from '@sage-bionetworks/synapse-types'
import { rest } from 'msw'
import { MOCK_RESEARCH_PROJECT } from '../../dataaccess/MockResearchProject'

export function getResearchProjectHandlers(backendOrigin: string) {
  return [
    rest.post(`${backendOrigin}${RESEARCH_PROJECT}`, async (req, res, ctx) => {
      const resp = await req.json()
      return res(ctx.status(201), ctx.json(resp))
    }),
    rest.get(
      `${backendOrigin}${ACCESS_REQUIREMENT_RESEARCH_PROJECT_FOR_UPDATE(
        ':id',
      )}`,
      async (req, res, ctx) => {
        const response: ResearchProject = {
          ...MOCK_RESEARCH_PROJECT,
          accessRequirementId: req.params.id.toString(),
        }
        return res(ctx.status(200), ctx.json(response))
      },
    ),
  ]
}
