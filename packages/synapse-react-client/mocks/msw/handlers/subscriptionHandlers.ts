import { rest } from 'msw'
import {
  Subscription,
  SubscriptionObjectType,
  SubscriptionPagedResults,
  SubscriptionRequest,
} from '@sage-bionetworks/synapse-types'
import { SynapseApiResponse } from '../handlers'
import { forumSubscriptions, threadSubscriptions } from '../../mockSubscription'

export function getSubscriptionHandlers(backendOrigin: string) {
  return [
    rest.get(
      `${backendOrigin}/repo/v1/subscription/all`,
      async (req, res, ctx) => {
        const objectType = req.url.searchParams.get('objectType')
        const sortDirection = req.url.searchParams.get('sortDirection')
        const offset = req.url.searchParams.get('offset')
        const limit = req.url.searchParams.get('limit')
        let allResults: Subscription[] = []
        if (objectType === SubscriptionObjectType.FORUM) {
          allResults = forumSubscriptions
        } else if (objectType === SubscriptionObjectType.THREAD) {
          allResults = threadSubscriptions
        }

        const totalResults = allResults.length

        if (sortDirection) {
          allResults = allResults.sort((a, b) => {
            const val = new Date(b.createdOn) - new Date(a.createdOn)
            return sortDirection === 'ASC' ? val : -1 * val
          })
        }

        let offsetValue = 0
        let limitValue = undefined
        if (offset) {
          offsetValue = parseInt(offset)
        }
        if (limit) {
          limitValue = parseInt(limit)
        }

        allResults = allResults.slice(offsetValue, offsetValue + limitValue)

        let resp: SynapseApiResponse<SubscriptionPagedResults> = {
          results: allResults,
          totalNumberOfResults: totalResults,
        }

        return res(ctx.status(200), ctx.json(resp))
      },
    ),
    rest.post(
      `${backendOrigin}/repo/v1/subscription/list`,
      async (req, res, ctx) => {
        const request: SubscriptionRequest = await req.json()
        const objectType = request.objectType
        let allResults = []
        if (objectType === SubscriptionObjectType.FORUM) {
          allResults = forumSubscriptions
        } else if (objectType === SubscriptionObjectType.THREAD) {
          allResults = threadSubscriptions
        }

        allResults.filter(sub => request.idList.includes(sub.subscriptionId))

        const totalResults = allResults.length

        let resp: SynapseApiResponse<SubscriptionPagedResults> = {
          results: allResults,
          totalNumberOfResults: totalResults,
        }

        return res(ctx.status(200), ctx.json(resp))
      },
    ),
  ]
}
