import { ProgressCallback } from '@/synapse-client/index'
import { S3 } from '@aws-sdk/client-s3'
import { Upload } from '@aws-sdk/lib-storage'

export type UploadToS3Params = {
  blob: Blob
  fileKey: string
  endpoint: string
  accessKey: string
  secretKey: string
  bucketName: string
  contentType: string
  abortController?: AbortController
  progressCallback?: (progress: ProgressCallback) => void
}

/**
 * Directly (from the client runtime, e.g. browser) uploads a file to an
 * S3-compatible storage service.
 */
export async function uploadToS3({
  blob,
  fileKey,
  endpoint,
  accessKey,
  secretKey,
  bucketName,
  contentType,
  abortController,
  progressCallback,
}: UploadToS3Params) {
  const s3Client = new S3({
    endpoint,
    region: 'us-east-1',
    credentials: {
      accessKeyId: accessKey,
      secretAccessKey: secretKey,
    },
    forcePathStyle: true,
  })

  const upload = new Upload({
    client: s3Client,
    params: {
      Bucket: bucketName,
      Key: fileKey,
      ContentType: contentType,
      Body: blob,
    },
    abortController,
    leavePartsOnError: true,
  })

  upload.on('httpUploadProgress', progress => {
    if (progressCallback) {
      progressCallback({
        value: progress.loaded || 0,
        total: progress.total || 1,
      })
    }
  })

  await upload.done()
}
