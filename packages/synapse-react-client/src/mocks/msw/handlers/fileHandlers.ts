import {
  BatchFileRequest,
  BatchFileResult,
} from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'
import { FILE_HANDLE_BATCH } from '../../../utils/APIConstants'
import { mockFileHandles } from '../../mock_file_handle'
import { SynapseApiResponse } from '../handlers'

export function getFileHandlers(backendOrigin: string) {
  return [
    http.post<never, BatchFileRequest, SynapseApiResponse<BatchFileResult>>(
      `${backendOrigin}${FILE_HANDLE_BATCH}`,
      async ({ request }) => {
        const requestBody = await request.json()

        const response: BatchFileResult = {
          requestedFiles: [],
        }

        requestBody.requestedFiles.forEach(fileHandleAssociation => {
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

        return HttpResponse.json(response, { status: 201 })
      },
    ),
  ]
}
