import {
  getEntity,
  getFileHandleContent,
  getFiles,
} from '@/synapse-client/SynapseClient'
import {
  BatchFileRequest,
  BatchFileResult,
  Entity,
  FileEntity,
  FileHandle,
  FileHandleAssociateType,
  FileHandleAssociation,
} from '@sage-bionetworks/synapse-types'

const ESTIMATED_CORS_TIME_MS: number = 200
const ESTIMATED_DOWNLOAD_SPEED_EXPIRE_TIME_KEY: string =
  'ESTIMATED_DOWNLOAD_SPEED_EXPIRE_TIME'
const ESTIMATED_DOWNLOAD_SPEED_KEY: string = 'ESTIMATED_DOWNLOAD_SPEED'
const TEST_FILE_ENTITY_ID: string = 'syn12600511'
/**
 * Return the estimated download speed (bytes/second).  Result is cached.
 * Result is crude estimate since it's a single test file (small sample, only ~2MB), but is a valid test (since it's a Synapse file on s3).
 * The intent is to let the user know if the package download will take many hours to download.
 * @param accessToken
 */
export const testDownloadSpeed = async (
  accessToken: string,
): Promise<number> => {
  // check cache
  const cachedSpeedExpireTime = localStorage.getItem(
    ESTIMATED_DOWNLOAD_SPEED_EXPIRE_TIME_KEY,
  )
  const cachedSpeed = localStorage.getItem(ESTIMATED_DOWNLOAD_SPEED_KEY)
  if (cachedSpeedExpireTime && cachedSpeed) {
    // is this value expired?
    const now: number = Date.now()
    if (now < Number(cachedSpeedExpireTime)) {
      return Number(cachedSpeed)
    }
  }

  /**
   * 1.  Get the test File Entity
   * 2.  Get the file handle and presigned URL associated to the latest version of the test File Entity
   * 3.  Start the timer and fetch the file content using that presigned URL
   */
  const entity: Entity = await getEntity(accessToken, TEST_FILE_ENTITY_ID)
  const fileEntity: FileEntity = entity as FileEntity
  const fileHandleAssociationList: FileHandleAssociation[] = [
    {
      associateObjectId: fileEntity.id!,
      associateObjectType: FileHandleAssociateType.FileEntity,
      fileHandleId: fileEntity.dataFileHandleId,
    },
  ]
  const request: BatchFileRequest = {
    includeFileHandles: true,
    includePreSignedURLs: true,
    includePreviewPreSignedURLs: false,
    requestedFiles: fileHandleAssociationList,
  }
  const data: BatchFileResult = await getFiles(request, accessToken)
  const presignedUrl: string = data.requestedFiles[0].preSignedURL!
  // we know this file exists
  const fileHandle: FileHandle = data.requestedFiles[0].fileHandle!
  // start test!
  const startMs = Date.now()
  await getFileHandleContent(fileHandle, presignedUrl)
  // bytes/second
  const result =
    fileHandle.contentSize /
    ((Date.now() - startMs - ESTIMATED_CORS_TIME_MS) / 1000)
  // save result in cache (for 5 minutes)
  const now: number = Date.now()
  localStorage.setItem(
    ESTIMATED_DOWNLOAD_SPEED_EXPIRE_TIME_KEY,
    (now + 1000 * 60 * 5).toString(),
  )
  localStorage.setItem(ESTIMATED_DOWNLOAD_SPEED_KEY, result.toString())
  return result
}
