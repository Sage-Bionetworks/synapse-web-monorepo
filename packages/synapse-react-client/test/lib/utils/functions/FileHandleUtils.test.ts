import {
  EntityBundle,
  EntityType,
  EXTERNAL_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  ExternalFileHandle,
  ExternalObjectStoreFileHandle,
  GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  GoogleCloudFileHandle,
  PROXY_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  ProxyFileHandle,
  S3_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  S3FileHandle,
} from '../../../../src/lib/utils/synapseTypes'
import {
  ExternalGoogleCloudUploadDestination,
  ExternalObjectStoreUploadDestination,
  ExternalS3UploadDestination,
  ExternalUploadDestination,
  S3UploadDestination,
  UploadType,
} from '../../../../src/lib/utils/synapseTypes/File/UploadDestination'
import { MOCK_USER_ID } from '../../../../mocks/user/mock_user_profile'
import {
  getDataFileHandle,
  getFileHandleStorageInfo,
  getStorageLocationName,
  getUploadDestinationString,
} from '../../../../src/lib/utils/functions/FileHandleUtils'

describe('File Handle Utils', () => {
  describe('getDataFileHandle', () => {
    it('Returns the data file handle ID if it exists', () => {
      const dataFileHandleId = '123'
      const fileHandle = {
        id: dataFileHandleId,
      }
      const entityBundle: EntityBundle = {
        entity: {
          dataFileHandleId: dataFileHandleId,
        },
        fileHandles: [fileHandle],
        entityType: EntityType.FILE,
      }

      expect(getDataFileHandle(entityBundle)).toEqual(fileHandle)
    })

    it('Returns undefined if the bundle does not contain a data file handle', () => {
      const dataFileHandleId = '123'
      const entityBundle: EntityBundle = {
        entity: {
          dataFileHandleId: dataFileHandleId,
        },
        fileHandles: [],
        entityType: EntityType.FILE,
      }

      expect(getDataFileHandle(entityBundle)).toBeUndefined()
    })
  })

  describe('getFileHandleStorageInfo', () => {
    it('Returns a URL for a ProxyFileHandle', () => {
      const url = 'https://example.com'
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
      }
      const result = getFileHandleStorageInfo(fileHandle)
      expect(result).toEqual({ url: url })
    })
    it('Returns storage location information for an ExternalObjectStoreFileHandle', () => {
      const endpoint = 'https://example.com'
      const bucket = 'myBucket'
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
      }
      const result = getFileHandleStorageInfo(fileHandle)
      expect(result).toEqual({ endpoint, bucket, fileKey })
    })

    it('Returns a URL for an ExternalFileHandle', () => {
      const url = 'https://example.com'
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
      }
      const result = getFileHandleStorageInfo(fileHandle)
      expect(result).toEqual({ url: url })
    })

    it('Returns Synapse Storage an S3FileHandle in the default Synapse StorageLocation', () => {
      const synapseStorageLocationId = 1

      const fileHandle: S3FileHandle = {
        storageLocationId: synapseStorageLocationId,
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
      }
      const result = getFileHandleStorageInfo(fileHandle)
      expect(result).toEqual({
        location: 'Synapse Storage',
      })
    })
    it('Returns an S3 path for an S3FileHandle in a custom S3 storage location', () => {
      const customStorageLocationId = 1243466

      const fileHandle: S3FileHandle = {
        storageLocationId: customStorageLocationId,
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
      }
      const result = getFileHandleStorageInfo(fileHandle)
      expect(result).toEqual({
        location: 's3://myBucket',
      })
    })

    it('Returns an gs path for a Google Cloud file handle', () => {
      const customStorageLocationId = 1243466

      const fileHandle: GoogleCloudFileHandle = {
        storageLocationId: customStorageLocationId,
        createdOn: '',
        etag: '',
        concreteType: GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE_VALUE,
        bucketName: 'myBucket',
        key: 'myKey',
        id: '123',
        fileName: 'example.txt',
        contentType: 'text/plain',
        contentSize: 123,
        createdBy: MOCK_USER_ID.toString(),
      }
      const result = getFileHandleStorageInfo(fileHandle)
      expect(result).toEqual({
        location: 'gs://myBucket',
      })
    })
  })
  describe('getStorageLocationName', () => {
    it("Returns 'Synapse Storage' for a file in  Synapse Storage", () => {
      const storageLocationId = 1
      const fileHandle: S3FileHandle = {
        storageLocationId: storageLocationId,
        concreteType: S3_FILE_HANDLE_CONCRETE_TYPE_VALUE,
      }
      const result = getStorageLocationName(fileHandle)
      expect(result).toEqual('Synapse Storage')
    })

    it('Returns an s3 path for an S3 file handle in a custom storage location', () => {
      const storageLocationId = 1243466
      const fileHandle: S3FileHandle = {
        storageLocationId: storageLocationId,
        bucketName: 'myBucket',
        concreteType: S3_FILE_HANDLE_CONCRETE_TYPE_VALUE,
      }
      const result = getStorageLocationName(fileHandle)
      expect(result).toEqual('s3://myBucket')
    })
    it('Returns a gs path for an Google Cloud file handle in a custom storage location', () => {
      const storageLocationId = 1243466
      const fileHandle: GoogleCloudFileHandle = {
        storageLocationId: storageLocationId,
        bucketName: 'myBucket',
        concreteType: GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE_VALUE,
      }
      const result = getStorageLocationName(fileHandle)
      expect(result).toEqual('gs://myBucket')
    })
    it('Returns the file path for a ProxyFileHandle', () => {
      const path = 'https://example.com'
      const fileHandle: ProxyFileHandle = {
        filePath: path,
        concreteType: PROXY_FILE_HANDLE_CONCRETE_TYPE_VALUE,
      }
      const result = getStorageLocationName(fileHandle)
      expect(result).toEqual(path)
    })

    it('Returns the external url for an External File Handle', () => {
      const url = 'https://example.com'
      const fileHandle: ExternalFileHandle = {
        externalURL: url,
        concreteType: EXTERNAL_FILE_HANDLE_CONCRETE_TYPE_VALUE,
      }
      const result = getStorageLocationName(fileHandle)
      expect(result).toEqual(url)
    })
    it('Returns the bucket for an external object store file handle', () => {
      const bucket = 'myExternalBucket'
      const fileHandle: ExternalObjectStoreFileHandle = {
        bucket: bucket,
        concreteType: EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE_VALUE,
      }
      const result = getStorageLocationName(fileHandle)
      expect(result).toEqual(bucket)
    })
  })
  describe('getUploadDestinationString', () => {
    it("Returns 'Synapse Storage' the Synapse Storage upload destination", () => {
      const uploadDestination: S3UploadDestination = {
        concreteType: 'org.sagebionetworks.repo.model.file.S3UploadDestination',
      }
      const result = getUploadDestinationString(uploadDestination)
      expect(result).toEqual('Synapse Storage')
    })
    it('Returns the URL for an ExternalUploadDestination', () => {
      const uploadDestination: ExternalUploadDestination = {
        concreteType:
          'org.sagebionetworks.repo.model.file.ExternalUploadDestination',
        uploadType: UploadType.HTTPS,
        url: 'https://testUrl.com/abcdef',
      }
      const result = getUploadDestinationString(uploadDestination)
      expect(result).toEqual('https://testUrl.com/abcdef')
    })
    it('Strips everything after the trailing slash for an ExternalUploadDestination with SFTP', () => {
      const uploadDestination: ExternalUploadDestination = {
        concreteType:
          'org.sagebionetworks.repo.model.file.ExternalUploadDestination',
        uploadType: UploadType.SFTP,
        url: 'sftp://testUrl.com/abcdef',
      }
      const result = getUploadDestinationString(uploadDestination)
      expect(result).toEqual('sftp://testUrl.com')
    })
    it('Returns an s3 path for an ExternalS3UploadDestination', () => {
      const uploadDestination: ExternalS3UploadDestination = {
        concreteType:
          'org.sagebionetworks.repo.model.file.ExternalS3UploadDestination',
        bucket: 'myBucket',
        baseKey: 'myKey',
      }
      const result = getUploadDestinationString(uploadDestination)
      expect(result).toEqual('s3://myBucket/myKey')
    })

    it('Returns a gs path for an ExternalGoogleCloudUploadDestination', () => {
      const uploadDestination: ExternalGoogleCloudUploadDestination = {
        concreteType:
          'org.sagebionetworks.repo.model.file.ExternalGoogleCloudUploadDestination',
        bucket: 'myBucket',
        baseKey: 'myKey',
      }
      const result = getUploadDestinationString(uploadDestination)
      expect(result).toEqual('gs://myBucket/myKey')
    })

    it('Returns a path for an ExternalObjectStoreUploadDestination', () => {
      const uploadDestination: ExternalObjectStoreUploadDestination = {
        concreteType:
          'org.sagebionetworks.repo.model.file.ExternalObjectStoreUploadDestination',
        endpointUrl: 'https://example.com',
        bucket: 'myBucket',
      }
      const result = getUploadDestinationString(uploadDestination)
      expect(result).toEqual('https://example.com/myBucket')
    })
  })
})
