import {
  EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  ExternalObjectStoreFileHandle,
  S3FileHandle,
} from '@sage-bionetworks/synapse-types'
import { MOCK_USER_ID } from './user/mock_user_profile'

export const MOCK_FILE_HANDLE_ID = '987654321'
export const MOCK_PREVIEW_FILE_HANDLE_ID = '987654322'
export const MOCK_DATA_ACCESS_SUBMISSION_IRB_APPROVAL_FILE_HANDLE_ID =
  '64198100'
export const MOCK_DUC_TEMPLATE_FILE_HANDLE_ID = '64198101'
export const MOCK_DUC_SUBMISSION_FILE_HANDLE_ID = '64198102'
export const MOCK_DATA_ACCESS_SUBMISSION_ATTACHMENT_1_FILE_HANDLE_ID =
  '64198103'
export const MOCK_DATA_ACCESS_SUBMISSION_ATTACHMENT_2_FILE_HANDLE_ID =
  '64198104'

export const mockFileHandle: S3FileHandle = {
  id: `${MOCK_FILE_HANDLE_ID}`,
  etag: 'abc-deg-4028-8eb8-aaaaa',
  createdBy: `${MOCK_USER_ID}`,
  createdOn: '2016-05-09T22:08:22.000Z',
  modifiedOn: '2016-05-09T22:08:22.000Z',
  status: 'AVAILABLE',
  concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
  contentType: 'application/octet-stream',
  contentMd5: '123456789',
  fileName: 'mock-file.raw',
  storageLocationId: 1,
  contentSize: 20,
  bucketName: 'proddata.sagebase.org',
  key: `${MOCK_USER_ID}/mock-s3-key/file1.txt`,
  previewId: `${MOCK_PREVIEW_FILE_HANDLE_ID}`,
  isPreview: false,
}

export const mockExternalObjectStoreFileHandle: ExternalObjectStoreFileHandle =
  {
    ...mockFileHandle,
    concreteType: EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE_VALUE,
    endpointUrl: 'https://my-endpoint.fake',
    bucket: 'my-bucket',
    fileKey: 'my-key',
  }

export const mockIrbApprovalFileHandle: S3FileHandle = {
  id: `${MOCK_DATA_ACCESS_SUBMISSION_IRB_APPROVAL_FILE_HANDLE_ID}`,
  etag: 'abc-deg-4028-8eb8-aaaaa',
  createdBy: `${MOCK_USER_ID}`,
  createdOn: '2016-05-09T22:08:22.000Z',
  modifiedOn: '2016-05-09T22:08:22.000Z',
  status: 'AVAILABLE',
  concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
  contentType: 'application/octet-stream',
  contentMd5: '123456789',
  fileName: 'Approval For My IRB Project.docx',
  storageLocationId: 1,
  contentSize: 20,
  bucketName: 'proddata.sagebase.org',
  key: `${MOCK_USER_ID}/mock-s3-key/Approval%20For%20My%20IRB%20Project.docx`,
  previewId: `${MOCK_PREVIEW_FILE_HANDLE_ID}`,
  isPreview: false,
}

export const mockDucTemplateFileHandle: S3FileHandle = {
  id: `${MOCK_DUC_TEMPLATE_FILE_HANDLE_ID}`,
  etag: 'abc-deg-4028-8eb8-aaaaa',
  createdBy: `${MOCK_USER_ID}`,
  createdOn: '2016-05-09T22:08:22.000Z',
  modifiedOn: '2016-05-09T22:08:22.000Z',
  status: 'AVAILABLE',
  concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
  contentType: 'application/octet-stream',
  contentMd5: '123456789',
  fileName: 'Mock_AR_DUC_Template.pdf',
  storageLocationId: 1,
  contentSize: 20,
  bucketName: 'proddata.sagebase.org',
  key: `${MOCK_USER_ID}/mock-s3-key/DUC_Template.pdf`,
  previewId: `${MOCK_PREVIEW_FILE_HANDLE_ID}`,
  isPreview: false,
}

export const mockDucSubmissionFileHandle: S3FileHandle = {
  id: `${MOCK_DUC_SUBMISSION_FILE_HANDLE_ID}`,
  etag: 'abc-deg-4028-8eb8-aaaaa',
  createdBy: `${MOCK_USER_ID}`,
  createdOn: '2016-05-09T22:08:22.000Z',
  modifiedOn: '2016-05-09T22:08:22.000Z',
  status: 'AVAILABLE',
  concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
  contentType: 'application/octet-stream',
  contentMd5: '123456789',
  fileName: 'DUC for ACT to review.pdf',
  storageLocationId: 1,
  contentSize: 20,
  bucketName: 'proddata.sagebase.org',
  key: `${MOCK_USER_ID}/mock-s3-key/document.pdf`,
  previewId: `${MOCK_PREVIEW_FILE_HANDLE_ID}`,
  isPreview: false,
}

export const mockDataAccessSubmissionAttachment1FileHandle: S3FileHandle = {
  id: `${MOCK_DATA_ACCESS_SUBMISSION_ATTACHMENT_1_FILE_HANDLE_ID}`,
  etag: 'abc-deg-4028-8eb8-aaaaa',
  createdBy: `${MOCK_USER_ID}`,
  createdOn: '2016-05-09T22:08:22.000Z',
  modifiedOn: '2016-05-09T22:08:22.000Z',
  status: 'AVAILABLE',
  concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
  contentType: 'application/octet-stream',
  contentMd5: '123456789',
  fileName: 'custom-attachment.csv',
  storageLocationId: 1,
  contentSize: 20,
  bucketName: 'proddata.sagebase.org',
  key: `${MOCK_USER_ID}/mock-s3-key/attachment.csv`,
  previewId: `${MOCK_PREVIEW_FILE_HANDLE_ID}`,
  isPreview: false,
}

export const mockDataAccessSubmissionAttachment2FileHandle: S3FileHandle = {
  id: `${MOCK_DATA_ACCESS_SUBMISSION_ATTACHMENT_2_FILE_HANDLE_ID}`,
  etag: 'abc-deg-4028-8eb8-aaaaa',
  createdBy: `${MOCK_USER_ID}`,
  createdOn: '2016-05-09T22:08:22.000Z',
  modifiedOn: '2016-05-09T22:08:22.000Z',
  status: 'AVAILABLE',
  concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
  contentType: 'application/octet-stream',
  contentMd5: '123456789',
  fileName: 'another-attachment-for-review.pdf',
  storageLocationId: 1,
  contentSize: 20,
  bucketName: 'proddata.sagebase.org',
  key: `${MOCK_USER_ID}/mock-s3-key/attachment.csv`,
  previewId: `${MOCK_PREVIEW_FILE_HANDLE_ID}`,
  isPreview: false,
}

export const mockPreviewFileHandle: S3FileHandle = {
  id: MOCK_PREVIEW_FILE_HANDLE_ID,
  etag: '95404487-9f9a-46ce-bf97-03d434579fb1',
  createdBy: `${MOCK_USER_ID}`,
  createdOn: '2021-05-17T19:29:37.000Z',
  modifiedOn: '2016-05-09T22:08:22.000Z',
  status: 'AVAILABLE',
  concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
  contentType: 'text/plain',
  fileName: 'preview.txt',
  storageLocationId: 1,
  contentSize: 100,
  bucketName: 'proddata.sagebase.org',
  key: `${MOCK_USER_ID}/mock-s3-key`,
  isPreview: true,
}

export const mockFileHandles = [
  mockFileHandle,
  mockPreviewFileHandle,
  mockDucTemplateFileHandle,
  mockDataAccessSubmissionAttachment1FileHandle,
  mockDataAccessSubmissionAttachment2FileHandle,
  mockIrbApprovalFileHandle,
  mockDucSubmissionFileHandle,
]
