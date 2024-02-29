import { http, HttpResponse } from 'msw'
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
    http.get<never, never, SynapseApiResponse<SubscriptionPagedResults>>(
      `${backendOrigin}/repo/v1/subscription/all`,
      ({ request }) => {
        const url = new URL(request.url)
        const objectType =
          (url.searchParams.get('objectType') as SubscriptionObjectType) ??
          undefined
        const sortDirection =
          (url.searchParams.get('sortDirection') as SortDirection) ?? undefined
        const offsetParam = url.searchParams.get('offset')
        const offset = offsetParam ? parseInt(offsetParam) : undefined
        const limitParam = url.searchParams.get('limit')
        const limit = limitParam ? parseInt(limitParam) : undefined

        const resp: SynapseApiResponse<SubscriptionPagedResults> =
          getSubscriptions(
            objectType ?? undefined,
            sortDirection,
            offset,
            limit,
          )

        return HttpResponse.json(resp, { status: 200 })
      },
    ),
    http.post<
      never,
      SubscriptionRequest,
      SynapseApiResponse<SubscriptionPagedResults>
    >(`${backendOrigin}/repo/v1/subscription/list`, async ({ request }) => {
      const requestBody = await request.json()

      const resp: SynapseApiResponse<SubscriptionPagedResults> =
        getSubscriptions(
          requestBody.objectType,
          requestBody.sortDirection,
          undefined,
          undefined,
          requestBody.idList,
        )

      return HttpResponse.json(resp, { status: 200 })
    }),
    http.post<never, Topic, SynapseApiResponse<Subscription>>(
      `${backendOrigin}/repo/v1/subscription`,
      async ({ request }) => {
        const requestBody: Topic = await request.json()

        const newSubscription: Subscription = {
          subscriptionId: uniqueId(),
          subscriberId: String(MOCK_USER_ID),
          objectId: requestBody.objectId,
          objectType: requestBody.objectType,
          createdOn: new Date().toISOString(),
        }

        subscriptions.push(newSubscription)
        return HttpResponse.json(newSubscription, { status: 201 })
      },
    ),
    http.delete<{ id: string }, never, SynapseApiResponse<''>>(
      `${backendOrigin}/repo/v1/subscription/:id`,
      ({ params }) => {
        const subscriptionId = params.id
        remove(subscriptions, s => s.subscriptionId === subscriptionId)
        return HttpResponse.text('', { status: 200 })
      },
    ),
    http.post<never, Topic, SynapseApiResponse<SubscriberPagedResults>>(
      `${backendOrigin}/repo/v1/subscription/subscribers`,
      async ({ request }) => {
        const topic = await request.json()

        const matchingSubscriptions = subscriptions.filter(
          s =>
            s.objectType === topic.objectType && s.objectId === topic.objectId,
        )

        const resp: SubscriberPagedResults = {
          subscribers: matchingSubscriptions.map(s => s.subscriberId),
        }
        return HttpResponse.json(resp, { status: 200 })
      },
    ),
  ]
}
