import {
  EntityBundle,
  EntityType,
  EXTERNAL_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  ExternalFileHandle,
  ExternalGoogleCloudUploadDestination,
  ExternalObjectStoreFileHandle,
  ExternalObjectStoreUploadDestination,
  ExternalS3UploadDestination,
  ExternalUploadDestination,
  FileEntity,
  GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  GoogleCloudFileHandle,
  PROXY_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  ProxyFileHandle,
  S3_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  S3FileHandle,
  UploadType,
} from '@sage-bionetworks/synapse-types'
import mockFileEntityData from '../../mocks/entity/mockFileEntity'
import {
  mockExternalObjectStoreFileHandle,
  mockFileHandle,
} from '../../mocks/mock_file_handle'
import { MOCK_USER_ID } from '../../mocks/user/mock_user_profile'
import {
  getDataFileHandle,
  getFileHandleStorageInfo,
  getStorageLocationName,
  getUploadDestinationString,
} from './FileHandleUtils'
import { SYNAPSE_STORAGE_LOCATION_ID } from '../../synapse-client'
import {
  mockExternalGoogleCloudUploadDestination,
  mockExternalObjectStoreUploadDestination,
  mockExternalS3UploadDestination,
  mockExternalUploadDestination,
  mockS3UploadDestination,
} from '../../mocks/mock_upload_destination'

describe('File Handle Utils', () => {
  describe('getDataFileHandle', () => {
    it('Returns the data file handle ID if it exists', () => {
      const dataFileHandleId = '123'
      const fileHandle = {
        ...mockFileHandle,
        id: dataFileHandleId,
      }
      const entityBundle: EntityBundle = {
        ...mockFileEntityData.bundle,
        entity: {
          dataFileHandleId: dataFileHandleId,
        } as FileEntity,
        fileHandles: [fileHandle],
        entityType: EntityType.FILE,
      }

      expect(getDataFileHandle(entityBundle)).toEqual(fileHandle)
    })

    it('Returns undefined if the bundle does not contain a data file handle', () => {
      const dataFileHandleId = '123'
      const entityBundle: EntityBundle = {
        ...mockFileEntityData.bundle,
        entity: {
          dataFileHandleId: dataFileHandleId,
        } as FileEntity,
        fileHandles: [],
        entityType: EntityType.FILE,
      }

      expect(getDataFileHandle(entityBundle)).toBeUndefined()
    })
  })

  describe('getFileHandleStorageInfo', () => {
    it('Returns a URL for a ProxyFileHandle', () => {
      const url = mockExternalUploadDestination.url
      const fileHandle: ProxyFileHandle = {
        createdOn: '',
        etag: '',
        concreteType: PROXY_FILE_HANDLE_CONCRETE_TYPE_VALUE,
        filePath: url,
        id: '123',
        fileName: 'example.txt',
        contentType: 'text/plain',
        contentSize: 123,
        createdBy: MOCK_USER_ID.toString(),
        modifiedOn: '',
        storageLocationId: mockExternalUploadDestination.storageLocationId,
        status: 'AVAILABLE',
      }
      const result = getFileHandleStorageInfo(
        fileHandle,
        mockExternalUploadDestination,
      )
      expect(result).toEqual({ url: url })
    })
    it('Returns storage location information for an ExternalObjectStoreFileHandle', () => {
      const endpoint = mockExternalObjectStoreUploadDestination.endpointUrl
      const bucket = mockExternalObjectStoreUploadDestination.bucket
      const fileKey = 'myFileKey'
      const fileHandle: ExternalObjectStoreFileHandle = {
        createdOn: '',
        etag: '',
        concreteType: EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE_VALUE,
        endpointUrl: endpoint,
        bucket: bucket,
        fileKey: fileKey,
        id: '123',
        fileName: 'example.txt',
        contentType: 'text/plain',
        contentSize: 123,
        createdBy: MOCK_USER_ID.toString(),
        modifiedOn: '',
        storageLocationId:
          mockExternalObjectStoreUploadDestination.storageLocationId,
        status: 'AVAILABLE',
      }
      const result = getFileHandleStorageInfo(
        fileHandle,
        mockExternalObjectStoreUploadDestination,
      )
      expect(result).toEqual({ endpoint, bucket, fileKey })
    })

    it('Returns a URL for an ExternalFileHandle', () => {
      const url = mockExternalUploadDestination.url
      const fileHandle: ExternalFileHandle = {
        createdOn: '',
        etag: '',
        concreteType: EXTERNAL_FILE_HANDLE_CONCRETE_TYPE_VALUE,
        externalURL: url,
        id: '123',
        fileName: 'example.txt',
        contentType: 'text/plain',
        contentSize: 123,
        createdBy: MOCK_USER_ID.toString(),
        modifiedOn: '',
        storageLocationId: mockExternalUploadDestination.storageLocationId,
        status: 'AVAILABLE',
      }
      const result = getFileHandleStorageInfo(
        fileHandle,
        mockExternalUploadDestination,
      )
      expect(result).toEqual({ url: url })
    })

    it('Returns Synapse Storage an S3FileHandle in the default Synapse StorageLocation', () => {
      const fileHandle: S3FileHandle = {
        storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
        createdOn: '',
        etag: '',
        concreteType: S3_FILE_HANDLE_CONCRETE_TYPE_VALUE,
        bucketName: 'myBucket',
        key: 'myKey',
        id: '123',
        fileName: 'example.txt',
        contentType: 'text/plain',
        contentSize: 123,
        createdBy: MOCK_USER_ID.toString(),
        isPreview: false,
        modifiedOn: '',
        status: 'AVAILABLE',
      }
      const result = getFileHandleStorageInfo(
        fileHandle,
        mockS3UploadDestination,
      )
      expect(result).toEqual({
        location: 'Synapse Storage',
      })
    })
    it('Returns an S3 path for an S3FileHandle in a custom S3 storage location', () => {
      const fileHandle: S3FileHandle = {
        storageLocationId: mockExternalS3UploadDestination.storageLocationId,
        createdOn: '',
        etag: '',
        concreteType: S3_FILE_HANDLE_CONCRETE_TYPE_VALUE,
        bucketName: mockExternalS3UploadDestination.bucket,
        key: 'myKey',
        id: '123',
        fileName: 'example.txt',
        contentType: 'text/plain',
        contentSize: 123,
        createdBy: MOCK_USER_ID.toString(),
        isPreview: false,
        modifiedOn: '',
        status: 'AVAILABLE',
      }
      const result = getFileHandleStorageInfo(
        fileHandle,
        mockExternalS3UploadDestination,
      )
      expect(result).toEqual({
        location: `s3://${mockExternalS3UploadDestination.bucket}/${mockExternalS3UploadDestination.baseKey}`,
      })
    })

    it('Returns an gs path for a Google Cloud file handle', () => {
      const fileHandle: GoogleCloudFileHandle = {
        storageLocationId:
          mockExternalGoogleCloudUploadDestination.storageLocationId,
        createdOn: '',
        etag: '',
        concreteType: GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE_VALUE,
        bucketName: mockExternalGoogleCloudUploadDestination.bucket,
        key: 'myKey',
        id: '123',
        fileName: 'example.txt',
        contentType: 'text/plain',
        contentSize: 123,
        createdBy: MOCK_USER_ID.toString(),
        isPreview: false,
        modifiedOn: '',
        status: 'AVAILABLE',
      }
      const result = getFileHandleStorageInfo(
        fileHandle,
        mockExternalGoogleCloudUploadDestination,
      )
      expect(result).toEqual({
        location: `gs://${mockExternalGoogleCloudUploadDestination.bucket}/${mockExternalGoogleCloudUploadDestination.baseKey}`,
      })
    })
  })

  describe('getStorageLocationName', () => {
    it("Returns 'Synapse Storage' for a file in  Synapse Storage", () => {
      const fileHandle: S3FileHandle = {
        ...mockFileHandle,
        storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
        concreteType: S3_FILE_HANDLE_CONCRETE_TYPE_VALUE,
      }
      const result = getStorageLocationName(fileHandle, mockS3UploadDestination)
      expect(result).toEqual('Synapse Storage')
    })

    it('Returns an s3 path for an S3 file handle in a custom storage location', () => {
      const fileHandle: S3FileHandle = {
        ...mockFileHandle,
        storageLocationId: mockExternalS3UploadDestination.storageLocationId,
        bucketName: mockExternalS3UploadDestination.bucket,
        concreteType: S3_FILE_HANDLE_CONCRETE_TYPE_VALUE,
      }
      const result = getStorageLocationName(
        fileHandle,
        mockExternalS3UploadDestination,
      )
      expect(result).toEqual(
        `s3://${mockExternalS3UploadDestination.bucket}/${mockExternalS3UploadDestination.baseKey}`,
      )
    })
    it('Returns a gs path for an Google Cloud file handle in a custom storage location', () => {
      const fileHandle: GoogleCloudFileHandle = {
        ...mockFileHandle,
        storageLocationId:
          mockExternalGoogleCloudUploadDestination.storageLocationId,
        bucketName: mockExternalGoogleCloudUploadDestination.bucket,
        concreteType: GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE_VALUE,
      }
      const result = getStorageLocationName(
        fileHandle,
        mockExternalGoogleCloudUploadDestination,
      )
      expect(result).toEqual(
        `gs://${mockExternalGoogleCloudUploadDestination.bucket}/${mockExternalGoogleCloudUploadDestination.baseKey}`,
      )
    })
    it('Returns the file path for a ProxyFileHandle', () => {
      const path = mockExternalUploadDestination.url
      const fileHandle: ProxyFileHandle = {
        ...mockFileHandle,
        filePath: path,
        concreteType: PROXY_FILE_HANDLE_CONCRETE_TYPE_VALUE,
      }
      const result = getStorageLocationName(
        fileHandle,
        mockExternalUploadDestination,
      )
      expect(result).toEqual(path)
    })

    it('Returns the external url for an External File Handle', () => {
      const url = mockExternalUploadDestination.url
      const fileHandle: ExternalFileHandle = {
        ...mockFileHandle,
        externalURL: url,
        concreteType: EXTERNAL_FILE_HANDLE_CONCRETE_TYPE_VALUE,
      }
      const result = getStorageLocationName(
        fileHandle,
        mockExternalUploadDestination,
      )
      expect(result).toEqual(url)
    })
    it('Returns the bucket for an external object store file handle', () => {
      const { bucket, endpointUrl } = mockExternalObjectStoreUploadDestination
      const fileHandle: ExternalObjectStoreFileHandle = {
        ...mockExternalObjectStoreFileHandle,
        bucket: bucket,
        concreteType: EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE_VALUE,
      }
      const result = getStorageLocationName(
        fileHandle,
        mockExternalObjectStoreUploadDestination,
      )
      expect(result).toEqual(`${endpointUrl}/${bucket}`)
    })
  })
  describe('getUploadDestinationString', () => {
    it("Returns 'Synapse Storage' the Synapse Storage upload destination", () => {
      const result = getUploadDestinationString(mockS3UploadDestination)
      expect(result).toEqual('Synapse Storage')
    })
    it('Returns the URL for an ExternalUploadDestination', () => {
      const uploadDestination: ExternalUploadDestination = {
        ...mockExternalUploadDestination,
        uploadType: UploadType.HTTPS,
        url: 'https://testUrl.com/abcdef',
      }
      const result = getUploadDestinationString(uploadDestination)
      expect(result).toEqual('https://testUrl.com/abcdef')
    })
    it('Strips everything after the trailing slash for an ExternalUploadDestination with SFTP', () => {
      const uploadDestination: ExternalUploadDestination = {
        ...mockExternalUploadDestination,
        uploadType: UploadType.SFTP,
        url: 'sftp://testUrl.com/abcdef',
      }
      const result = getUploadDestinationString(uploadDestination)
      expect(result).toEqual('sftp://testUrl.com')
    })
    it('Returns an s3 path for an ExternalS3UploadDestination', () => {
      const uploadDestination: ExternalS3UploadDestination = {
        ...mockExternalS3UploadDestination,
        bucket: 'myBucket',
        baseKey: 'myKey',
        endpointUrl: 'https://example.com',
      }
      const result = getUploadDestinationString(uploadDestination)
      expect(result).toEqual('s3://myBucket/myKey')
    })

    it('Returns a gs path for an ExternalGoogleCloudUploadDestination', () => {
      const uploadDestination: ExternalGoogleCloudUploadDestination = {
        ...mockExternalGoogleCloudUploadDestination,
        bucket: 'myBucket',
        baseKey: 'myKey',
      }
      const result = getUploadDestinationString(uploadDestination)
      expect(result).toEqual('gs://myBucket/myKey')
    })

    it('Returns a path for an ExternalObjectStoreUploadDestination', () => {
      const uploadDestination: ExternalObjectStoreUploadDestination = {
        ...mockExternalObjectStoreUploadDestination,
        endpointUrl: 'https://example.com',
        bucket: 'myBucket',
        keyPrefixUUID: 'uuid123',
      }
      const result = getUploadDestinationString(uploadDestination)
      expect(result).toEqual('https://example.com/myBucket')
    })
  })
})
