import {
  ACCESS_TYPE,
  AccessRequirement,
  AccessRequirementSearchResponse,
  ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  ACTAccessRequirement,
  LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  LockAccessRequirement,
  MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  ManagedACTAccessRequirement,
  ObjectType,
  RestrictableObjectType,
  SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  SelfSignAccessRequirement,
  TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  TermsOfUseAccessRequirement,
  WikiPageKey,
} from '@sage-bionetworks/synapse-types'
import mockProjectData from './entity/mockProject'
import { MOCK_USER_ID } from './user/mock_user_profile'
import {
  mockACTAccessRequirementWikiPage,
  mockManagedACTAccessRequirementWikiPage,
  mockSelfSignAccessRequirementWikiPage,
  mockToUAccessRequirementWikiPage,
} from './mockWiki'
import { mockDucTemplateFileHandle } from './mock_file_handle'

const MOCK_PROJECT_ID = mockProjectData.id

const defaultAccessRequirement = {
  id: 1,
  name: 'Mocked access requirement',
  etag: '26489045-3a98-405f-b214-9e1c90208c64',
  createdOn: '2019-02-06T21:17:25.790Z',
  modifiedOn: '2020-07-24T18:11:35.323Z',
  versionNumber: 1,
  subjectIds: [
    {
      id: 'syn12664802',
      type: RestrictableObjectType.ENTITY,
    },
  ],
  createdBy: '1981374',
  modifiedBy: '1981374',
  accessType: ACCESS_TYPE.DOWNLOAD,
}

export const mockManagedACTAccessRequirement: ManagedACTAccessRequirement = {
  ...defaultAccessRequirement,
  id: 1,
  concreteType: MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  areOtherAttachmentsRequired: true,
  isCertifiedUserRequired: true,
  isDUCRequired: true,
  isIDUPublic: true,
  isIDURequired: true,
  ducTemplateFileHandleId: mockDucTemplateFileHandle.id,
  expirationPeriod: 1000 * 60 * 60 * 24, // 1 day
  isIRBApprovalRequired: true,
  isValidatedProfileRequired: true,
  isTwoFaRequired: true,
  description: '',
  subjectsDefinedByAnnotations: false,
}

export const mockManagedACTAccessRequirementWikiPageKey: WikiPageKey = {
  wikiPageId: mockManagedACTAccessRequirementWikiPage.id,
  ownerObjectId: mockManagedACTAccessRequirement.id.toString(),
  ownerObjectType: ObjectType.ACCESS_REQUIREMENT,
}

export const mockToUAccessRequirement: TermsOfUseAccessRequirement = {
  ...defaultAccessRequirement,
  id: 2,
  concreteType: TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  termsOfUse:
    'These are the termsOfUse for a TermsOfUseAccessRequirement. The content is inlined in the object, but **markdown** is supported.',
  description: '',
  subjectsDefinedByAnnotations: false,
}

export const mockSelfSignAccessRequirement: SelfSignAccessRequirement = {
  ...defaultAccessRequirement,
  id: 3,
  concreteType: SELF_SIGN_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  isCertifiedUserRequired: true,
  isValidatedProfileRequired: true,
  description: '',
  subjectsDefinedByAnnotations: false,
}

export const mockSelfSignAccessRequirementWikiPageKey: WikiPageKey = {
  wikiPageId: mockSelfSignAccessRequirementWikiPage.id,
  ownerObjectId: mockSelfSignAccessRequirement.id.toString(),
  ownerObjectType: ObjectType.ACCESS_REQUIREMENT,
}

export const mockACTAccessRequirement: ACTAccessRequirement = {
  ...defaultAccessRequirement,
  id: 4,
  concreteType: ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  actContactInfo:
    'This is the actContactInfo for the ACTAccessRequirement. You would probably email some documentation to act@sagebase.org, or something like that. **Markdown is supported**.',
  openJiraIssue: true,
  description: '',
  subjectsDefinedByAnnotations: false,
}

export const mockLockAccessRequirement: LockAccessRequirement = {
  ...defaultAccessRequirement,
  id: 5,
  concreteType: LOCK_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  description: '',
  subjectsDefinedByAnnotations: false,
  jiraKey: '',
}

export const mockToUAccessRequirementWithWiki: TermsOfUseAccessRequirement = {
  ...defaultAccessRequirement,
  id: 6,
  concreteType: TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  // termsOfUse:
  //   'These are the terms of use for a TermsOfUseAccessRequirement. The content is inlined in the object, but **markdown** is supported.',
  description: '',
  subjectsDefinedByAnnotations: false,
}

export const mockToUAccessRequirementWithWikiPageKey: WikiPageKey = {
  wikiPageId: mockToUAccessRequirementWikiPage.id,
  ownerObjectId: mockToUAccessRequirementWithWiki.id.toString(),
  ownerObjectType: ObjectType.ACCESS_REQUIREMENT,
}

export const mockACTAccessRequirementWithWiki: ACTAccessRequirement = {
  ...defaultAccessRequirement,
  id: 7,
  concreteType: ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  // actContactInfo:
  //   'This is the contact info for the ACTAccessRequirement. You would probably email some documentation to act@sagebase.org, or something like that. **Markdown is supported**.',
  openJiraIssue: true,
  description: '',
  subjectsDefinedByAnnotations: false,
}

export const mockACTAccessRequirementWithWikiPageKey: WikiPageKey = {
  wikiPageId: mockACTAccessRequirementWikiPage.id,
  ownerObjectId: mockACTAccessRequirementWithWiki.id.toString(),
  ownerObjectType: ObjectType.ACCESS_REQUIREMENT,
}

export const mockSearchResults: AccessRequirementSearchResponse = {
  results: [
    {
      id: mockManagedACTAccessRequirement.id.toString(),
      createdOn: mockManagedACTAccessRequirement.createdOn,
      type: mockManagedACTAccessRequirement.concreteType,
      modifiedOn: mockManagedACTAccessRequirement.modifiedOn,
      name: mockManagedACTAccessRequirement.name,
      version: mockManagedACTAccessRequirement.versionNumber.toString(),
      relatedProjectIds: [MOCK_PROJECT_ID],
      reviewerIds: [MOCK_USER_ID.toString()],
    },
    {
      id: '9603055',
      createdOn: '2017-08-23T18:48:20.892Z',
      type: ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
      modifiedOn: '2022-05-20T22:26:44.406Z',
      name: 'Access Requiremnent 2',
      version: '269',
      relatedProjectIds: [MOCK_PROJECT_ID],
      reviewerIds: [],
    },
    {
      id: '9605257',
      createdOn: '2021-01-15T17:05:10.544Z',
      type: ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
      modifiedOn: '2021-01-15T17:13:06.767Z',
      name: 'Another AR',
      version: '3',
      relatedProjectIds: [],
      reviewerIds: [],
    },
    {
      id: '9605529',
      createdOn: '2021-12-20T17:42:32.822Z',
      type: ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
      modifiedOn: '2021-12-20T18:17:46.904Z',
      name: 'Some mock ARs',
      version: '5',
      relatedProjectIds: [],
      reviewerIds: [],
    },
  ],
}

export const mockAccessRequirements: AccessRequirement[] = [
  mockManagedACTAccessRequirement,
  mockToUAccessRequirement,
  mockSelfSignAccessRequirement,
  mockACTAccessRequirement,
  mockLockAccessRequirement,
  mockToUAccessRequirementWithWiki,
  mockACTAccessRequirementWithWiki,
]

export const mockAccessRequirementWikiPageKeys: WikiPageKey[] = [
  mockManagedACTAccessRequirementWikiPageKey,
  mockSelfSignAccessRequirementWikiPageKey,
  mockToUAccessRequirementWithWikiPageKey,
  mockACTAccessRequirementWithWikiPageKey,
]
