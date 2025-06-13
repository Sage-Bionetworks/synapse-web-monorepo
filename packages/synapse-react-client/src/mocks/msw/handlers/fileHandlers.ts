import { FILE, FILE_HANDLE_BATCH } from '@/utils/APIConstants'
import { ExternalFileHandleInterface } from '@sage-bionetworks/synapse-client'
import {
  BatchFileRequest,
  BatchFileResult,
  MultipartUploadStatus,
} from '@sage-bionetworks/synapse-types'
import { uniqueId } from 'lodash-es'
import { http, HttpResponse } from 'msw'
import { MOCK_FILE_HANDLE_ID, mockFileHandles } from '../../mock_file_handle'
import { MOCK_USER_ID } from '../../user/mock_user_profile'
import { SynapseApiResponse } from '../handlers'

export function getFileHandlers(backendOrigin: string) {
  return [
    http.post<never, BatchFileRequest>(
      `${backendOrigin}${FILE_HANDLE_BATCH}`,
      async ({ request }) => {
        const requestBody: BatchFileRequest = await request.json()

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

    http.post(`${backendOrigin}${FILE}/file/multipart`, () => {
      const response: SynapseApiResponse<MultipartUploadStatus> = {
        state: 'COMPLETED',
        resultFileHandleId: MOCK_FILE_HANDLE_ID,
        uploadId: 'mockUploadId',
        startedBy: String(MOCK_USER_ID),
        startedOn: new Date().toISOString(),
        updatedOn: new Date().toISOString(),
        partsState: '1',
      }

      return HttpResponse.json(response, { status: 201 })
    }),
    http.put(`${backendOrigin}${FILE}/file/multipart/:id/complete`, () => {
      const response: SynapseApiResponse<MultipartUploadStatus> = {
        state: 'COMPLETED',
        resultFileHandleId: MOCK_FILE_HANDLE_ID,
        uploadId: 'mockUploadId',
        startedBy: String(MOCK_USER_ID),
        startedOn: new Date().toISOString(),
        updatedOn: new Date().toISOString(),
        partsState: '1',
      }

      return HttpResponse.json(response, { status: 201 })
    }),

    http.post<never, ExternalFileHandleInterface>(
      `${backendOrigin}${FILE}/externalFileHandle`,
      async ({ request }) => {
        const requestBody = await request.json()

        const response: SynapseApiResponse<ExternalFileHandleInterface> = {
          ...requestBody,
          id: uniqueId(),
          etag: 'fake-etag',
          createdBy: MOCK_USER_ID.toString(),
          createdOn: new Date().toISOString(),
          modifiedOn: new Date().toISOString(),
        }

        return HttpResponse.json(response, { status: 201 })
      },
    ),
  ]
}
