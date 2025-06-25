import {
  SortDirection,
  SubscriberPagedResults,
  Subscription,
  SubscriptionObjectType,
  SubscriptionPagedResults,
  SubscriptionRequest,
  Topic,
} from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'
import { forumSubscriptions, threadSubscriptions } from '../../mockSubscription'
import { MOCK_USER_ID } from '../../user/mock_user_profile'
import { SynapseApiResponse } from '../handlers'
import BasicMockedCrudService from '../util/BasicMockedCrudService'

const subscriptionService = new BasicMockedCrudService<
  Subscription,
  'subscriptionId'
>({
  initialData: [...forumSubscriptions, ...threadSubscriptions],
  idField: 'subscriptionId',
  autoGenerateId: true,
})

function getSubscriptions(
  objectType?: SubscriptionObjectType,
  sortDirection: SortDirection = 'ASC',
  offset = 0,
  limit = 10,
  idList?: string[],
): SubscriptionPagedResults {
  const allResults = subscriptionService
    .getAll()
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
    http.get(`${backendOrigin}/repo/v1/subscription/all`, ({ request }) => {
      const objectType =
        (new URL(request.url).searchParams.get(
          'objectType',
        ) as SubscriptionObjectType) ?? undefined
      const sortDirection =
        (new URL(request.url).searchParams.get(
          'sortDirection',
        ) as SortDirection) ?? undefined
      const offsetParam = new URL(request.url).searchParams.get('offset')
      const offset = offsetParam ? parseInt(offsetParam) : undefined
      const limitParam = new URL(request.url).searchParams.get('limit')
      const limit = limitParam ? parseInt(limitParam) : undefined

      const resp: SynapseApiResponse<SubscriptionPagedResults> =
        getSubscriptions(objectType ?? undefined, sortDirection, offset, limit)

      return HttpResponse.json(resp, { status: 200 })
    }),
    http.post<never, SubscriptionRequest>(
      `${backendOrigin}/repo/v1/subscription/list`,
      async ({ request }) => {
        const requestBody: SubscriptionRequest = await request.json()

        const resp: SynapseApiResponse<SubscriptionPagedResults> =
          getSubscriptions(
            requestBody.objectType,
            requestBody.sortDirection,
            undefined,
            undefined,
            requestBody.idList,
          )

        return HttpResponse.json(resp, { status: 200 })
      },
    ),
    http.post<never, Topic>(
      `${backendOrigin}/repo/v1/subscription`,
      async ({ request }) => {
        const requestBody: Topic = await request.json()

        const newSubscription = subscriptionService.create({
          subscriberId: String(MOCK_USER_ID),
          objectId: requestBody.objectId,
          objectType: requestBody.objectType,
          createdOn: new Date().toISOString(),
        })
        return HttpResponse.json(newSubscription, { status: 201 })
      },
    ),
    http.delete(`${backendOrigin}/repo/v1/subscription/:id`, ({ params }) => {
      const subscriptionId = params.id as string
      subscriptionService.delete(subscriptionId)
      return new Response('', { status: 200 })
    }),
    http.post<never, Topic>(
      `${backendOrigin}/repo/v1/subscription/subscribers`,
      async ({ request }) => {
        const topic: Topic = await request.json()

        const matchingSubscriptions = subscriptionService.getMany(
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
