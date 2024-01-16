import { rest } from 'msw'
import { EVALUATION, EVALUATION_BY_ID } from '../../../utils/APIConstants'
import { Evaluation, PaginatedResults } from '@sage-bionetworks/synapse-types'
import { SynapseApiResponse } from '../handlers'
import { mockEvaluations } from '../../entity/mockEvaluationQueue'

export function getEvaluationHandlers(backendOrigin: string) {
  return [
    /**
     * Get by ID
     */
    rest.get(
      `${backendOrigin}${EVALUATION_BY_ID(':evaluationId')}`,
      async (req, res, ctx) => {
        let status = 404
        let response: SynapseApiResponse<Evaluation> = {
          reason: `Mock Service worker could not find a mock evaluation queue with ID ${req.params.evaluationId}`,
        }

        const match = mockEvaluations.find(
          evaluation => evaluation.id === req.params.entityId,
        )
        if (match) {
          response = match
          status = 200
        }
        return res(ctx.status(status), ctx.json(response))
      },
    ),

    /**
     * Get paginated list
     */
    rest.get(`${backendOrigin}${EVALUATION}`, async (req, res, ctx) => {
      let status = 200
      let response: SynapseApiResponse<PaginatedResults<Evaluation>> = {
        results: mockEvaluations,
        totalNumberOfResults: mockEvaluations.length,
      }

      // TODO: Filtering

      return res(ctx.status(status), ctx.json(response))
    }),
  ]
}
