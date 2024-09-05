import {
  BatchFileRequest,
  BatchFileResult,
  MultipartUploadStatus,
} from '@sage-bionetworks/synapse-types'
import { rest } from 'msw'
import { FILE, FILE_HANDLE_BATCH } from '../../../utils/APIConstants'
import { MOCK_FILE_HANDLE_ID, mockFileHandles } from '../../mock_file_handle'
import { SynapseApiResponse } from '../handlers'
import { MOCK_USER_ID } from '../../user/mock_user_profile'

export function getFileHandlers(backendOrigin: string) {
  return [
    rest.post(`${backendOrigin}${FILE_HANDLE_BATCH}`, async (req, res, ctx) => {
      const request: BatchFileRequest = await req.json()

      const response: BatchFileResult = {
        requestedFiles: [],
      }

      request.requestedFiles.forEach(fileHandleAssociation => {
        const fileHandle = mockFileHandles.find(
          fh => fh.id === fileHandleAssociation.fileHandleId,
        )
        if (fileHandle) {
          response.requestedFiles.push({
            fileHandleId: fileHandle.id,
            fileHandle,
          })
        }
      })

      return res(ctx.status(201), ctx.json(response))
    }),

    rest.post(
      `${backendOrigin}${FILE}/file/multipart`,
      async (req, res, ctx) => {
        const response: SynapseApiResponse<MultipartUploadStatus> = {
          state: 'COMPLETED',
          resultFileHandleId: MOCK_FILE_HANDLE_ID,
          uploadId: 'mockUploadId',
          startedBy: String(MOCK_USER_ID),
          startedOn: new Date().toISOString(),
          updatedOn: new Date().toISOString(),
          partsState: '1',
        }

        return res(ctx.status(201), ctx.json(response))
      },
    ),
    rest.put(
      `${backendOrigin}${FILE}/file/multipart/:id/complete`,
      async (req, res, ctx) => {
        const response: SynapseApiResponse<MultipartUploadStatus> = {
          state: 'COMPLETED',
          resultFileHandleId: MOCK_FILE_HANDLE_ID,
          uploadId: 'mockUploadId',
          startedBy: String(MOCK_USER_ID),
          startedOn: new Date().toISOString(),
          updatedOn: new Date().toISOString(),
          partsState: '1',
        }

        return res(ctx.status(201), ctx.json(response))
      },
    ),
  ]
}
