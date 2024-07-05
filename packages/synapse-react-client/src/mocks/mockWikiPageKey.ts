import { ObjectType, WikiPageKey } from '@sage-bionetworks/synapse-types'
import { MOCK_FILE_ENTITY_ID } from './entity/mockFileEntity'
import { mockEntityRootWikiPage, mockEntityWikiPage } from './mockWiki'
import { mockAccessRequirementWikiPageKeys } from './accessRequirement/mockAccessRequirements'

export const mockEntityRootWikiPageKey: WikiPageKey = {
  ownerObjectType: ObjectType.ENTITY,
  ownerObjectId: MOCK_FILE_ENTITY_ID,
  wikiPageId: mockEntityRootWikiPage.id,
}

export const mockEntityWikiPageKey: WikiPageKey = {
  ...mockEntityRootWikiPageKey,
  wikiPageId: mockEntityWikiPage.id,
}

export const mockWikiPageKeys: WikiPageKey[] = [
  ...mockAccessRequirementWikiPageKeys,
  mockEntityRootWikiPageKey,
  mockEntityWikiPageKey,
]
