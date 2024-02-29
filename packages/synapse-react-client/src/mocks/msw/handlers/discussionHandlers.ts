import { http, HttpResponse } from 'msw'
import { FORUM, FORUM_THREAD, THREAD } from '../../../utils/APIConstants'
import {
  CreateDiscussionThread,
  DiscussionFilter,
  DiscussionThreadBundle,
  Forum,
  PaginatedIds,
  PaginatedResults,
} from '@sage-bionetworks/synapse-types'
import { SynapseApiResponse } from '../handlers'
import {
  mockDiscussionThreadBundles,
  mockForums,
} from '../../discussion/mock_discussion'
import { MOCK_USER_ID } from '../../user/mock_user_profile'
import { uniqueId } from 'lodash-es'
import mockProject from '../../entity/mockProject'

const forums: Forum[] = [...mockForums]

const threads: DiscussionThreadBundle[] = [...mockDiscussionThreadBundles]

function getAllThreadsMatchingForum(forumId: string, filter: DiscussionFilter) {
  return threads
    .filter(thread => thread.forumId === forumId)
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
    http.get<{ id: string }, never, SynapseApiResponse<Forum>>(
      `${backendOrigin}${FORUM}/:id`,
      ({ params }) => {
        let status = 404
        let resp: SynapseApiResponse<Forum> = {
          reason: `MSW could not find a mock forum object with ID ${params.id}`,
        }

        const match = forums.find(f => f.id === params.id)
        if (match) {
          status = 200
          resp = match
        }

        return HttpResponse.json(resp, { status: status })
      },
    ),

    http.get<{ id: string }, never, SynapseApiResponse<DiscussionThreadBundle>>(
      `${backendOrigin}${THREAD}/:id`,
      ({ params }) => {
        let status = 404
        let resp: SynapseApiResponse<DiscussionThreadBundle> = {
          reason: `MSW could not find a mock discussion thread bundle object with ID ${params.id}`,
        }
        if (params.id === 'messageUrl') {
          // This is a different endpoint
          resp = {
            reason: 'GET /thread/messageUrl is not yet implemented',
          }
        }

        const match = threads.find(dtb => dtb.id === params.id)
        if (match) {
          status = 200
          resp = match
        }

        return HttpResponse.json(resp, { status: status })
      },
    ),

    http.post<
      never,
      CreateDiscussionThread,
      SynapseApiResponse<DiscussionThreadBundle>
    >(`${backendOrigin}${THREAD}`, async ({ request }) => {
      const requestBody: CreateDiscussionThread = await request.json()

      const newDiscussionThreadBundle: DiscussionThreadBundle = {
        id: uniqueId(),
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
      }

      threads.push(newDiscussionThreadBundle)
      return HttpResponse.json(newDiscussionThreadBundle, { status: 201 })
    }),

    http.get<
      { forumId: string },
      never,
      SynapseApiResponse<PaginatedResults<DiscussionThreadBundle>>
    >(`${backendOrigin}${FORUM_THREAD(':forumId')}`, ({ request, params }) => {
      const url = new URL(request.url)
      const offsetParam = url.searchParams.get('offset')
      const offset = offsetParam ? parseInt(offsetParam) : 0
      const limitParam = url.searchParams.get('limit')
      const limit = limitParam ? parseInt(limitParam) : 10
      const filter: DiscussionFilter =
        (url.searchParams.get('filter') as DiscussionFilter) ??
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
    }),
    http.get<{ id: string }, never, SynapseApiResponse<PaginatedIds>>(
      `${backendOrigin}${FORUM}/:id/moderators`,
      () => {
        const resp: PaginatedIds = {
          results: [String(MOCK_USER_ID)],
          totalNumberOfResults: 1,
        }
        return HttpResponse.json(resp, { status: 200 })
      },
    ),
  ]
}
