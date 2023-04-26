import {
  BatchFileRequest,
  BatchFileResult,
  Renewal,
  Request,
} from '../../../src/lib/utils/synapseTypes'
import { rest } from 'msw'
import {
  ACCESS_REQUIREMENT_DATA_ACCESS_REQUEST_FOR_UPDATE,
  DATA_ACCESS_REQUEST,
  FILE_HANDLE_BATCH,
} from '../../../src/lib/utils/APIConstants'
import { MOCK_DATA_ACCESS_REQUEST } from '../../dataaccess/MockDataAccessRequest'
import { MOCK_REPO_ORIGIN } from '../../../src/lib/utils/functions/getEndpoint'
import { mockFileHandle, mockFileHandles } from '../../mock_file_handle'

export function getFileHandlers(backendOrigin: string) {
  return [
    rest.post(
      `${MOCK_REPO_ORIGIN}${FILE_HANDLE_BATCH}`,
      async (req, res, ctx) => {
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
      },
    ),
  ]
}
