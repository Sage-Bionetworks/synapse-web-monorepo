import { S3FileHandle } from '../lib/utils/synapseTypes/File/S3FileHandle'
import { MOCK_USER_ID } from './user/mock_user_profile'

export const MOCK_FILE_HANDLE_ID = '987654321'
export const MOCK_PREVIEW_FILE_HANDLE_ID = '987654322'

export const mockFileHandle: S3FileHandle = {
  id: `${MOCK_FILE_HANDLE_ID}`,
  etag: 'abc-deg-4028-8eb8-aaaaa',
  createdBy: `${MOCK_USER_ID}`,
  createdOn: '2016-05-09T22:08:22.000Z',
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

export const mockPreviewFileHandle: S3FileHandle = {
  id: '76215986',
  etag: '95404487-9f9a-46ce-bf97-03d434579fb1',
  createdBy: `${MOCK_USER_ID}`,
  createdOn: '2021-05-17T19:29:37.000Z',
  concreteType: 'org.sagebionetworks.repo.model.file.S3FileHandle',
  contentType: 'text/plain',
  fileName: 'preview.txt',
  storageLocationId: 1,
  contentSize: 100,
  bucketName: 'proddata.sagebase.org',
  key: `${MOCK_USER_ID}/mock-s3-key`,
  isPreview: true,
}
