import { WikiPage } from '../src/lib/utils/synapseTypes'
import { MOCK_USER_ID, MOCK_USER_ID_2 } from './user/mock_user_profile'

export const mockManagedACTAccessRequirementWikiPage: WikiPage = {
  id: '123',
  etag: '00924558-f46d-4f05-9f62-0686ddecf8ed',
  createdOn: '2017-08-23T18:48:37.515Z',
  createdBy: MOCK_USER_ID.toString(),
  modifiedOn: '2022-12-06T23:18:27.877Z',
  modifiedBy: MOCK_USER_ID_2.toString(),
  title: '',
  markdown:
    'Access to these data is controlled at the request of the data contributor(s) and due to the sensitive nature of the data. ' +
    'Click the **Request Access** button below to start your application, where you will be prompted to enter information about yourself and your research project.',
  attachmentFileHandleIds: [],
}

export const mockSelfSignAccessRequirementWikiPage: WikiPage = {
  id: '124',
  etag: '00924558-f46d-4f05-9f62-0686ddecf8ed',
  createdOn: '2017-08-23T18:48:37.515Z',
  createdBy: MOCK_USER_ID.toString(),
  modifiedOn: '2022-12-06T23:18:27.877Z',
  modifiedBy: MOCK_USER_ID_2.toString(),
  title: '',
  markdown:
    'You must accept the terms of this self-sign access requirement. The terms are described here, and you sign it yourself.',
  attachmentFileHandleIds: [],
}

export const mockWikiPages: WikiPage[] = [
  mockManagedACTAccessRequirementWikiPage,
  mockSelfSignAccessRequirementWikiPage,
]
