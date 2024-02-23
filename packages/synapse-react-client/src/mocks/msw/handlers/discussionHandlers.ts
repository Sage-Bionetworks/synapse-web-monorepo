import { rest } from 'msw'
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
    rest.get(`${backendOrigin}${FORUM}/:id`, async (req, res, ctx) => {
      let status = 404
      let resp: SynapseApiResponse<Forum> = {
        reason: `MSW could not find a mock forum object with ID ${req.params.id}`,
      }

      const match = forums.find(f => f.id === req.params.id)
      if (match) {
        status = 200
        resp = match
      }

      return res(ctx.status(status), ctx.json(resp))
    }),

    rest.get(`${backendOrigin}${THREAD}/:id`, async (req, res, ctx) => {
      let status = 404
      let resp: SynapseApiResponse<Forum> = {
        reason: `MSW could not find a mock discussion thread bundle object with ID ${req.params.id}`,
      }
      if (req.params.id === 'messageUrl') {
        // This is a different endpoint
        resp = {
          reason: 'GET /thread/messageUrl is not yet implemented',
        }
      }

      const match = threads.find(dtb => dtb.id === req.params.id)
      if (match) {
        status = 200
        resp = match
      }

      return res(ctx.status(status), ctx.json(resp))
    }),

    rest.post(`${backendOrigin}${THREAD}`, async (req, res, ctx) => {
      const request: CreateDiscussionThread = await req.json()

      const newDiscussionThreadBundle: DiscussionThreadBundle = {
        id: uniqueId(),
        forumId: request.forumId,
        projectId: mockProject.id,
        title: request.title,
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
      return res(ctx.status(201), ctx.json(newDiscussionThreadBundle))
    }),

    rest.get(
      `${backendOrigin}${FORUM_THREAD(':forumId')}`,
      async (req, res, ctx) => {
        const offsetParam = req.url.searchParams.get('offset')
        const offset = offsetParam ? parseInt(offsetParam) : 0
        const limitParam = req.url.searchParams.get('limit')
        const limit = limitParam ? parseInt(limitParam) : 10
        const filter: DiscussionFilter =
          (req.params.filter as DiscussionFilter) ??
          DiscussionFilter.EXCLUDE_DELETED

        const matchingThreads = getAllThreadsMatchingForum(
          req.params.forumId as string,
          filter,
        )

        const response: SynapseApiResponse<
          PaginatedResults<DiscussionThreadBundle>
        > = {
          results: matchingThreads.slice(offset, offset + limit),
          totalNumberOfResults: matchingThreads.length,
        }
        return res(ctx.status(200), ctx.json(response))
      },
    ),
    rest.get(
      `${backendOrigin}${FORUM}/:id/moderators`,
      async (req, res, ctx) => {
        const resp: PaginatedIds = {
          results: [String(MOCK_USER_ID)],
          totalNumberOfResults: 1,
        }
        return res(ctx.status(200), ctx.json(resp))
      },
    ),
  ]
}
