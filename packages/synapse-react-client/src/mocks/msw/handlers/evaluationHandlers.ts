import { EVALUATION, EVALUATION_BY_ID } from '@/utils/APIConstants'
import { Evaluation, PaginatedResults } from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'
import { mockEvaluations } from '../../entity/mockEvaluationQueue'
import { SynapseApiResponse } from '../handlers'

export function getEvaluationHandlers(backendOrigin: string) {
  return [
    /**
     * Get by ID
     */
    http.get(
      `${backendOrigin}${EVALUATION_BY_ID(':evaluationId')}`,
      ({ params }) => {
        let status = 404
        let response: SynapseApiResponse<Evaluation> = {
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
          reason: `Mock Service worker could not find a mock evaluation queue with ID ${params.evaluationId}`,
        }

        const match = mockEvaluations.find(
          evaluation => evaluation.id === params.entityId,
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
    http.get(`${backendOrigin}${EVALUATION}`, () => {
      const status = 200
      const response: SynapseApiResponse<PaginatedResults<Evaluation>> = {
        results: mockEvaluations,
        totalNumberOfResults: mockEvaluations.length,
      }

      // TODO: Filtering

      return HttpResponse.json(response, { status })
    }),
  ]
}
