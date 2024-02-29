import { http, HttpResponse } from 'msw'
import { EVALUATION, EVALUATION_BY_ID } from '../../../utils/APIConstants'
import { Evaluation, PaginatedResults } from '@sage-bionetworks/synapse-types'
import { SynapseApiResponse } from '../handlers'
import { mockEvaluations } from '../../entity/mockEvaluationQueue'

export function getEvaluationHandlers(backendOrigin: string) {
  return [
    /**
     * Get by ID
     */
    http.get<{ evaluationId: string }, never, SynapseApiResponse<Evaluation>>(
      `${backendOrigin}${EVALUATION_BY_ID(':evaluationId')}`,
      ({ params }) => {
        let status = 404
        let response: SynapseApiResponse<Evaluation> = {
          reason: `Mock Service worker could not find a mock evaluation queue with ID ${params.evaluationId}`,
        }

        const match = mockEvaluations.find(
          evaluation => evaluation.id === params.evaluationId,
        )
        if (match) {
          response = match
          status = 200
        }
        return HttpResponse.json(response, { status })
      },
    ),

    /**
     * Get paginated list
     */
    http.get<never, never, SynapseApiResponse<PaginatedResults<Evaluation>>>(
      `${backendOrigin}${EVALUATION}`,
      () => {
        let status = 200
        let response: SynapseApiResponse<PaginatedResults<Evaluation>> = {
          results: mockEvaluations,
          totalNumberOfResults: mockEvaluations.length,
        }

        // TODO: Filtering

        return HttpResponse.json(response, { status })
      },
    ),
  ]
}
