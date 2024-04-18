import {
  FileHandleResults,
  ObjectType,
  WikiPage,
  WikiPageKey,
} from '@sage-bionetworks/synapse-types'
import { rest } from 'msw'
import {
  WIKI_OBJECT_TYPE,
  WIKI_PAGE,
  WIKI_PAGE_ID,
} from '../../../utils/APIConstants'
import { MOCK_WIKI_ETAG, NEW_WIKI_PAGE_ID, mockWikiPages } from '../../mockWiki'
import { mockWikiPageKeys } from '../../mockWikiPageKey'
import { MOCK_USER_ID } from '../../user/mock_user_profile'
import { SynapseApiResponse } from '../handlers'

const wikiOwnerObjectTypes = [
  ObjectType.ENTITY,
  ObjectType.ACCESS_REQUIREMENT,
  ObjectType.EVALUATION,
]

export function getWikiPage(backendOrigin: string) {
  return wikiOwnerObjectTypes.map(ownerObjectType => {
    return rest.get(
      `${backendOrigin}${WIKI_PAGE_ID(
        ownerObjectType,
        ':ownerObjectId',
        ':wikiPageId',
      )}`,
      async (req, res, ctx) => {
        let status = 404
        let response: SynapseApiResponse<WikiPage> = {
          reason: `Mock Service worker could not find a wiki page with ID ${req.params.wikiPageId}`,
        }

        const wikiPage = mockWikiPages.find(
          wp => wp.id === req.params.wikiPageId,
        )
        if (wikiPage) {
          response = wikiPage
          status = 200
        }
        return res(ctx.status(status), ctx.json(response))
      },
    )
  })
}

export const getWikiHandlers = (backendOrigin: string) => [
  ...getWikiPage(backendOrigin),
  rest.get(
    `${backendOrigin}/repo/v1/:objectType/:objectId/wiki2/:wikiId/attachmenthandles`,
    async (req, res, ctx) => {
      const status = 200
      const response: SynapseApiResponse<FileHandleResults> = {
        list: [],
      }
      return res(ctx.status(status), ctx.json(response))
    },
  ),
]

export function getRootWikiPageKeyHandler(backendOrigin: string) {
  return wikiOwnerObjectTypes.map(ownerObjectType => {
    return rest.get(
      `${backendOrigin}${WIKI_OBJECT_TYPE(
        ownerObjectType,
      )}/:ownerObjectId/wikikey`,

      async (req, res, ctx) => {
        let status = 404
        let response: SynapseApiResponse<WikiPageKey> = {
          reason: `Mock Service worker could not find a WikiPageKey for ${ownerObjectType} ${req.params.ownerObjectId}`,
        }
        const wikiPageKey = mockWikiPageKeys.find(
          wikiPageKey => wikiPageKey.ownerObjectId === req.params.ownerObjectId,
        )

        if (wikiPageKey) {
          response = wikiPageKey
          status = 200
        }

        return res(ctx.status(status), ctx.json(response))
      },
    )
  })
}

export function createWikiPage(backendOrigin: string) {
  return wikiOwnerObjectTypes.map(ownerObjectType => {
    return rest.post(
      `${backendOrigin}${WIKI_PAGE(ownerObjectType, ':ownerObjectId')}`,
      async (req, res, ctx) => {
        const requestBody: WikiPage = await req.json()
        const now = new Date().toISOString()
        return res(
          ctx.status(201),
          ctx.json({
            ...requestBody,
            etag: MOCK_WIKI_ETAG,
            id: NEW_WIKI_PAGE_ID,
            createdBy: MOCK_USER_ID,
            createdOn: now,
            modifiedBy: MOCK_USER_ID,
            modifiedOn: now,
          }),
        )
      },
    )
  })
}

export function updateWikiPage(backendOrigin: string) {
  return wikiOwnerObjectTypes.map(ownerObjectType => {
    return rest.put(
      `${backendOrigin}${WIKI_PAGE_ID(
        ownerObjectType,
        ':ownerObjectId',
        ':wikiPageId',
      )}`,
      async (req, res, ctx) => {
        const requestBody: WikiPage = await req.json()
        return res(ctx.status(201), ctx.json(requestBody))
      },
    )
  })
}

export function getAllWikiHandlers(backendOrigin: string) {
  return [
    ...getWikiHandlers(backendOrigin),
    ...getRootWikiPageKeyHandler(backendOrigin),
    ...createWikiPage(backendOrigin),
    ...updateWikiPage(backendOrigin),
  ]
}
