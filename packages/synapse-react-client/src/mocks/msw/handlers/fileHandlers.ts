import {
  BatchFileRequest,
  BatchFileResult,
} from '@sage-bionetworks/synapse-types'
import { rest } from 'msw'
import { FILE_HANDLE_BATCH } from '../../../utils/APIConstants'
import { mockFileHandles } from '../../mock_file_handle'

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
  ]
}
