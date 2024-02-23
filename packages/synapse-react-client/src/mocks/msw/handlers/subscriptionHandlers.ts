import { rest } from 'msw'
import {
  SortDirection,
  SubscriberPagedResults,
  Subscription,
  SubscriptionObjectType,
  SubscriptionPagedResults,
  SubscriptionRequest,
  Topic,
} from '@sage-bionetworks/synapse-types'
import { SynapseApiResponse } from '../handlers'
import { forumSubscriptions, threadSubscriptions } from '../../mockSubscription'
import { remove, uniqueId } from 'lodash-es'
import { MOCK_USER_ID } from '../../user/mock_user_profile'

const subscriptions: Subscription[] = [
  ...forumSubscriptions,
  ...threadSubscriptions,
]

function getSubscriptions(
  objectType?: SubscriptionObjectType,
  sortDirection: SortDirection = 'ASC',
  offset = 0,
  limit = 10,
  idList?: string[],
): SubscriptionPagedResults {
  const allResults = subscriptions
    .filter(s => {
      if (objectType) {
        return s.objectType === objectType
      }
      return true
    })
    .filter(s => {
      if (idList) {
        return idList.includes(s.objectId)
      }
      return true
    })
    .sort((a, b) => {
      const val =
        new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime()
      return sortDirection === 'ASC' ? val : -1 * val
    })

  const totalNumberOfResults = allResults.length

  return {
    results: allResults.slice(offset, offset + limit),
    totalNumberOfResults,
  }
}

export function getSubscriptionHandlers(backendOrigin: string) {
  return [
    rest.get(
      `${backendOrigin}/repo/v1/subscription/all`,
      async (req, res, ctx) => {
        const objectType =
          (req.url.searchParams.get('objectType') as SubscriptionObjectType) ??
          undefined
        const sortDirection =
          (req.url.searchParams.get('sortDirection') as SortDirection) ??
          undefined
        const offsetParam = req.url.searchParams.get('offset')
        const offset = offsetParam ? parseInt(offsetParam) : undefined
        const limitParam = req.url.searchParams.get('limit')
        const limit = limitParam ? parseInt(limitParam) : undefined

        const resp: SynapseApiResponse<SubscriptionPagedResults> =
          getSubscriptions(
            objectType ?? undefined,
            sortDirection,
            offset,
            limit,
          )

        return res(ctx.status(200), ctx.json(resp))
      },
    ),
    rest.post(
      `${backendOrigin}/repo/v1/subscription/list`,
      async (req, res, ctx) => {
        const request: SubscriptionRequest = await req.json()

        const resp: SynapseApiResponse<SubscriptionPagedResults> =
          getSubscriptions(
            request.objectType,
            request.sortDirection,
            undefined,
            undefined,
            request.idList,
          )

        return res(ctx.status(200), ctx.json(resp))
      },
    ),
    rest.post(
      `${backendOrigin}/repo/v1/subscription`,
      async (req, res, ctx) => {
        const requestBody: Topic = await req.json()

        const newSubscription: Subscription = {
          subscriptionId: uniqueId(),
          subscriberId: String(MOCK_USER_ID),
          objectId: requestBody.objectId,
          objectType: requestBody.objectType,
          createdOn: new Date().toISOString(),
        }

        subscriptions.push(newSubscription)
        return res(ctx.status(201), ctx.json(newSubscription))
      },
    ),
    rest.delete(
      `${backendOrigin}/repo/v1/subscription/:id`,
      async (req, res, ctx) => {
        const subscriptionId = req.params.id as string
        remove(subscriptions, s => s.subscriptionId === subscriptionId)
        return res(ctx.status(200), ctx.body(''))
      },
    ),
    rest.post(
      `${backendOrigin}/repo/v1/subscription/subscribers`,
      async (req, res, ctx) => {
        const topic: Topic = await req.json()

        const matchingSubscriptions = subscriptions.filter(
          s =>
            s.objectType === topic.objectType && s.objectId === topic.objectId,
        )

        const resp: SubscriberPagedResults = {
          subscribers: matchingSubscriptions.map(s => s.subscriberId),
        }
        return res(ctx.status(200), ctx.json(resp))
      },
    ),
  ]
}
