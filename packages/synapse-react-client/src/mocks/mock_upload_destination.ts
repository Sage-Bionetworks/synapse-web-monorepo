import {
  ExternalGoogleCloudUploadDestination,
  ExternalObjectStoreUploadDestination,
  ExternalS3UploadDestination,
  ExternalUploadDestination,
  S3UploadDestination,
  UploadDestination,
  UploadType,
} from '@sage-bionetworks/synapse-types'
import { SYNAPSE_STORAGE_LOCATION_ID } from '../synapse-client'

export const MOCK_EXTERNAL_S3_STORAGE_LOCATION_ID = 1111
export const MOCK_EXTERNAL_GOOGLE_CLOUD_STORAGE_LOCATION_ID = 2222
export const MOCK_EXTERNAL_STORAGE_LOCATION_ID = 3333
export const MOCK_EXTERNAL_OBJECT_STORE_STORAGE_LOCATION_ID = 4444

const baseUploadDestination: UploadDestination = {
  storageLocationId: SYNAPSE_STORAGE_LOCATION_ID,
  uploadType: UploadType.S3,
  banner: '',
  concreteType: 'org.sagebionetworks.repo.model.file.S3UploadDestination',
}

export const mockS3UploadDestination: S3UploadDestination = {
  ...baseUploadDestination,
  baseKey: 'exampleS3BaseKey',
  stsEnabled: true,
  concreteType: 'org.sagebionetworks.repo.model.file.S3UploadDestination',
}

export const mockExternalS3UploadDestination: ExternalS3UploadDestination = {
  ...mockS3UploadDestination,
  storageLocationId: MOCK_EXTERNAL_S3_STORAGE_LOCATION_ID,
  endpointUrl: 'https://my-endpoint.fake',
  bucket: 'myExternalS3Bucket',
  concreteType:
    'org.sagebionetworks.repo.model.file.ExternalS3UploadDestination',
}

export const mockExternalGoogleCloudUploadDestination: ExternalGoogleCloudUploadDestination =
  {
    ...baseUploadDestination,
    baseKey: 'exampleGCPBaseKey',
    storageLocationId: MOCK_EXTERNAL_GOOGLE_CLOUD_STORAGE_LOCATION_ID,
    uploadType: UploadType.GOOGLECLOUDSTORAGE,
    bucket: 'myExternalGCPBucket',
    concreteType:
      'org.sagebionetworks.repo.model.file.ExternalGoogleCloudUploadDestination',
  }

export const mockExternalUploadDestination: ExternalUploadDestination = {
  ...baseUploadDestination,
  storageLocationId: MOCK_EXTERNAL_STORAGE_LOCATION_ID,
  uploadType: UploadType.HTTPS,
  url: 'https://myurl.fake',
  concreteType: 'org.sagebionetworks.repo.model.file.ExternalUploadDestination',
}

export const mockExternalObjectStoreUploadDestination: ExternalObjectStoreUploadDestination =
  {
    ...baseUploadDestination,
    storageLocationId: MOCK_EXTERNAL_OBJECT_STORE_STORAGE_LOCATION_ID,
    uploadType: UploadType.HTTPS,
    endpointUrl: 'https://my-endpoint.fake',
    bucket: 'myExternalObjectStoreBucket',
    keyPrefixUUID: 'uuidKeyPrefix',
    concreteType:
      'org.sagebionetworks.repo.model.file.ExternalObjectStoreUploadDestination',
  }

export const mockUploadDestinations = [
  mockS3UploadDestination,
  mockExternalS3UploadDestination,
  mockExternalGoogleCloudUploadDestination,
  mockExternalUploadDestination,
  mockExternalObjectStoreUploadDestination,
]
