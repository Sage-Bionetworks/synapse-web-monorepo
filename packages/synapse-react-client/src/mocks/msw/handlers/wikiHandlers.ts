import { WIKI_OBJECT_TYPE, WIKI_PAGE, WIKI_PAGE_ID } from '@/utils/APIConstants'
import {
  FileHandleResults,
  ObjectType,
  WikiPage,
  WikiPageKey,
} from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'
import { MOCK_WIKI_ETAG, mockWikiPages } from '../../mockWiki'
import { mockWikiPageKeys } from '../../mockWikiPageKey'
import { MOCK_USER_ID } from '../../user/mock_user_profile'
import { SynapseApiResponse } from '../handlers'
import BasicMockedCrudService from '../util/BasicMockedCrudService'

const wikiOwnerObjectTypes = [
  ObjectType.ENTITY,
  ObjectType.ACCESS_REQUIREMENT,
  ObjectType.EVALUATION,
]

const mockWikiPageService = new BasicMockedCrudService<WikiPage, 'id'>({
  initialData: mockWikiPages,
  idField: 'id',
  autoGenerateId: true,
})

const mockWikiPageKeyService = new BasicMockedCrudService<WikiPageKey>({
  initialData: mockWikiPageKeys,
})

export function getWikiPage(backendOrigin: string) {
  return wikiOwnerObjectTypes.map(ownerObjectType => {
    return http.get(
      `${backendOrigin}${WIKI_PAGE_ID(
        ownerObjectType,
        ':ownerObjectId',
        ':wikiPageId',
      )}`,
      ({ params }) => {
        let status = 404
        let response: SynapseApiResponse<WikiPage> = {
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
          reason: `Mock Service worker could not find a wiki page with ID ${params.wikiPageId}`,
        }

        const wikiPage = mockWikiPageService.getOneById(
          params.wikiPageId as string,
        )
        if (wikiPage) {
          response = wikiPage
          status = 200
        }
        return HttpResponse.json(response, { status })
      },
    )
  })
}

export const getWikiHandlers = (backendOrigin: string) => [
  ...getWikiPage(backendOrigin),
  http.get(
    `${backendOrigin}/repo/v1/:objectType/:objectId/wiki2/:wikiId/attachmenthandles`,
    () => {
      const status = 200
      const response: SynapseApiResponse<FileHandleResults> = {
        list: [],
      }
      return HttpResponse.json(response, { status })
    },
  ),
]

export function getRootWikiPageKeyHandler(backendOrigin: string) {
  return wikiOwnerObjectTypes.map(ownerObjectType => {
    return http.get(
      `${backendOrigin}${WIKI_OBJECT_TYPE(
        ownerObjectType,
      )}/:ownerObjectId/wikikey`,

      ({ params }) => {
        let status = 404
        let response: SynapseApiResponse<WikiPageKey> = {
          concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
          reason: `Mock Service worker could not find a WikiPageKey for ${ownerObjectType} ${params.ownerObjectId}`,
        }
        const wikiPageKey = mockWikiPageKeyService.getOneByPredicate(
          wikiPageKey => wikiPageKey.ownerObjectId === params.ownerObjectId,
        )

        if (wikiPageKey) {
          response = wikiPageKey
          status = 200
        }

        return HttpResponse.json(response, { status })
      },
    )
  })
}

export function createWikiPage(backendOrigin: string) {
  return wikiOwnerObjectTypes.map(ownerObjectType => {
    return http.post<{ ownerObjectId: string }, WikiPage>(
      `${backendOrigin}${WIKI_PAGE(ownerObjectType, ':ownerObjectId')}`,
      async ({ request }) => {
        const requestBody: WikiPage = await request.json()
        const now = new Date().toISOString()
        const created = mockWikiPageService.create({
          ...requestBody,
          etag: MOCK_WIKI_ETAG,
          createdBy: String(MOCK_USER_ID),
          createdOn: now,
          modifiedBy: String(MOCK_USER_ID),
          modifiedOn: now,
        })

        return HttpResponse.json(created, { status: 201 })
      },
    )
  })
}

export function updateWikiPage(backendOrigin: string) {
  return wikiOwnerObjectTypes.map(ownerObjectType => {
    return http.put<{ ownerObjectId: string; wikiPageId: string }, WikiPage>(
      `${backendOrigin}${WIKI_PAGE_ID(
        ownerObjectType,
        ':ownerObjectId',
        ':wikiPageId',
      )}`,
      async ({ request }) => {
        const requestBody: WikiPage = await request.json()
        const updated = mockWikiPageService.update(
          requestBody.id,
          requestBody,
          'replace',
        )
        return HttpResponse.json(updated, { status: 201 })
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
