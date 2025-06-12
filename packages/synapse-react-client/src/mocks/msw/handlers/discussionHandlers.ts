import { FORUM, FORUM_THREAD, THREAD } from '@/utils/APIConstants'
import {
  CreateDiscussionThread,
  DiscussionFilter,
  DiscussionThreadBundle,
  Forum,
  PaginatedIds,
  PaginatedResults,
} from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'
import {
  mockDiscussionThreadBundles,
  mockForums,
} from '../../discussion/mock_discussion'
import mockProject from '../../entity/mockProject'
import { MOCK_USER_ID } from '../../user/mock_user_profile'
import { SynapseApiResponse } from '../handlers'
import BasicMockedCrudService from '../util/BasicMockedCrudService'

const forumService = new BasicMockedCrudService<Forum, 'id'>({
  initialData: mockForums,
  idField: 'id',
  autoGenerateId: true,
})

const threadService = new BasicMockedCrudService<DiscussionThreadBundle, 'id'>({
  initialData: mockDiscussionThreadBundles,
  idField: 'id',
  autoGenerateId: true,
})

function getAllThreadsMatchingForum(forumId: string, filter: DiscussionFilter) {
  return threadService
    .getMany(thread => thread.forumId === forumId)
    .filter(thread => {
      switch (filter) {
        case DiscussionFilter.NO_FILTER:
          return true
        case DiscussionFilter.DELETED_ONLY:
          return thread.isDeleted
        case DiscussionFilter.EXCLUDE_DELETED:
          return !thread.isDeleted
      }
    })
}

export function getDiscussionHandlers(backendOrigin: string) {
  return [
    http.get(`${backendOrigin}${FORUM}/:id`, ({ params }) => {
      let status = 404
      let resp: SynapseApiResponse<Forum> = {
        concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
        reason: `MSW could not find a mock forum object with ID ${params.id}`,
      }

      const match = forumService.getOneById(params.id as string)
      if (match) {
        status = 200
        resp = match
      }

      return HttpResponse.json(resp, { status: status })
    }),

    http.get(`${backendOrigin}${THREAD}/:id`, ({ params }) => {
      let status = 404
      let resp: SynapseApiResponse<Forum> = {
        concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
        reason: `MSW could not find a mock discussion thread bundle object with ID ${params.id}`,
      }
      if (params.id === 'messageUrl') {
        // This is a different endpoint
        resp = {
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
          reason: 'GET /thread/messageUrl is not yet implemented',
        }
      }

      const match = threadService.getOneById(params.id as string)
      if (match) {
        status = 200
        resp = match
      }

      return HttpResponse.json(resp, { status: status })
    }),

    http.post<never, CreateDiscussionThread>(
      `${backendOrigin}${THREAD}`,
      async ({ request }) => {
        const requestBody = await request.json()

        const newDiscussionThreadBundle = threadService.create({
          forumId: requestBody.forumId,
          projectId: mockProject.id,
          title: requestBody.title,
          createdOn: new Date().toISOString(),
          createdBy: String(MOCK_USER_ID),
          modifiedOn: new Date().toISOString(),
          etag: 'etag',
          messageKey: 'todo key',
          numberOfViews: 0,
          numberOfReplies: 0,
          lastActivity: new Date().toISOString(),
          activeAuthors: [String(MOCK_USER_ID)],
          isEdited: false,
          isDeleted: false,
          isPinned: false,
        })

        return HttpResponse.json(newDiscussionThreadBundle, { status: 201 })
      },
    ),

    http.get(
      `${backendOrigin}${FORUM_THREAD(':forumId')}`,
      ({ params, request }) => {
        const offsetParam = new URL(request.url).searchParams.get('offset')
        const offset = offsetParam ? parseInt(offsetParam) : 0
        const limitParam = new URL(request.url).searchParams.get('limit')
        const limit = limitParam ? parseInt(limitParam) : 10
        const filter: DiscussionFilter =
          (params.filter as DiscussionFilter) ??
          DiscussionFilter.EXCLUDE_DELETED

        const matchingThreads = getAllThreadsMatchingForum(
          params.forumId as string,
          filter,
        )

        const response: SynapseApiResponse<
          PaginatedResults<DiscussionThreadBundle>
        > = {
          results: matchingThreads.slice(offset, offset + limit),
          totalNumberOfResults: matchingThreads.length,
        }
        return HttpResponse.json(response, { status: 200 })
      },
    ),
    http.get(`${backendOrigin}${FORUM}/:id/moderators`, () => {
      const resp: PaginatedIds = {
        results: [String(MOCK_USER_ID)],
        totalNumberOfResults: 1,
      }
      return HttpResponse.json(resp, { status: 200 })
    }),
  ]
}
