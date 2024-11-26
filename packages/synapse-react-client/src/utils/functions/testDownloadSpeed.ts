import {
  getEntity,
  getFileHandleContent,
  getFiles,
} from '../../synapse-client/SynapseClient'
import { FileEntity } from '@sage-bionetworks/synapse-types'
import { Entity } from '@sage-bionetworks/synapse-types'
import { BatchFileResult } from '@sage-bionetworks/synapse-types'
import { FileHandle } from '@sage-bionetworks/synapse-types'
import { BatchFileRequest } from '@sage-bionetworks/synapse-types'
import {
  FileHandleAssociation,
  FileHandleAssociateType,
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
export const testDownloadSpeed = (accessToken: string): Promise<number> => {
  return new Promise((resolve, reject) => {
    // check cache
    const cachedSpeedExpireTime = localStorage.getItem(
      ESTIMATED_DOWNLOAD_SPEED_EXPIRE_TIME_KEY,
    )
    const cachedSpeed = localStorage.getItem(ESTIMATED_DOWNLOAD_SPEED_KEY)
    if (cachedSpeedExpireTime && cachedSpeed) {
      // is this value expired?
      const now: number = new Date().getTime()
      if (now < Number(cachedSpeedExpireTime)) {
        resolve(Number(cachedSpeed))
        return
      }
    }

    /**
     * 1.  Get the test File Entity
     * 2.  Get the file handle and presigned URL associated to the latest version of the test File Entity
     * 3.  Start the timer and fetch the file content using that presigned URL
     */
    getEntity(accessToken, TEST_FILE_ENTITY_ID)
      .then((entity: Entity) => {
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
        getFiles(request, accessToken).then((data: BatchFileResult) => {
          const presignedUrl: string = data.requestedFiles[0].preSignedURL!
          // we know this file exists
          const fileHandle: FileHandle = data.requestedFiles[0].fileHandle!
          // start test!
          const startMs = new Date().getTime()
          return getFileHandleContent(fileHandle, presignedUrl).then(() => {
            // console.log(`Transferred ${fileHandle.contentSize/1000000} MB in ${((new Date().getTime() - startMs - ESTIMATED_CORS_TIME_MS)/1000)} seconds`)
            // bytes/second
            const result =
              fileHandle.contentSize /
              ((new Date().getTime() - startMs - ESTIMATED_CORS_TIME_MS) / 1000)
            // save result in cache (for 5 minutes)
            const now: number = new Date().getTime()
            localStorage.setItem(
              ESTIMATED_DOWNLOAD_SPEED_EXPIRE_TIME_KEY,
              (now + 1000 * 60 * 5).toString(),
            )
            localStorage.setItem(
              ESTIMATED_DOWNLOAD_SPEED_KEY,
              result.toString(),
            )
            resolve(result)
          })
        })
      })
      .catch(err => reject(err as Error))
  })
}
