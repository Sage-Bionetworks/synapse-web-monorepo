import { FILE, FILE_HANDLE, FILE_HANDLE_BATCH } from '@/utils/APIConstants'
import { ExternalFileHandleInterface } from '@sage-bionetworks/synapse-client'
import {
  BatchFileRequest,
  BatchFileResult,
  MultipartUploadRequest,
  MultipartUploadStatus,
  S3FileHandle,
} from '@sage-bionetworks/synapse-types'
import { uniqueId } from 'lodash-es'
import { http, HttpResponse } from 'msw'
import { mockFileHandle, mockFileHandles } from '../../mock_file_handle'
import { MOCK_USER_ID } from '../../user/mock_user_profile'
import { SynapseApiResponse } from '../handlers'

/** Synapse file handle IDs are numeric. These start above the IDs of the mock file handles. */
function nextUploadedFileHandleId() {
  return String(800000000 + Number(uniqueId()))
}

export function getFileHandlers(backendOrigin: string) {
  // The file handles created by uploads, so that their names can be looked up like those of the mock file handles
  const uploadedFileHandles: S3FileHandle[] = []
  const uploadedFileNames = new Map<string, string>()
  const findFileHandle = (id: string) =>
    mockFileHandles.find(fh => fh.id === id) ??
    uploadedFileHandles.find(fh => fh.id === id)
  function createUploadedFileHandle(fileName: string | undefined) {
    const uploaded: S3FileHandle = {
      ...mockFileHandle,
      id: nextUploadedFileHandleId(),
      fileName: fileName ?? 'uploaded-file',
      previewId: undefined,
      createdOn: new Date().toISOString(),
      modifiedOn: new Date().toISOString(),
    }
    uploadedFileHandles.push(uploaded)
    return uploaded
  }

  return [
    http.post<never, BatchFileRequest>(
      `${backendOrigin}${FILE_HANDLE_BATCH}`,
      async ({ request }) => {
        const requestBody: BatchFileRequest = await request.json()

        const response: BatchFileResult = {
          requestedFiles: [],
        }

        requestBody.requestedFiles.forEach(fileHandleAssociation => {
          const fileHandle = findFileHandle(fileHandleAssociation.fileHandleId)
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

    http.get<{ id: string }>(
      `${backendOrigin}${FILE_HANDLE}/:id`,
      ({ params }) => {
        const fileHandle = findFileHandle(params.id)
        return fileHandle
          ? HttpResponse.json(fileHandle)
          : HttpResponse.json(
              { reason: `FileHandle not found: ${params.id}` },
              { status: 404 },
            )
      },
    ),

    http.post<never, MultipartUploadRequest>(
      `${backendOrigin}${FILE}/file/multipart`,
      async ({ request }) => {
        const requestBody = await request.json()
        const uploadId = uniqueId('mockUploadId')
        uploadedFileNames.set(uploadId, requestBody.fileName)
        // Each upload must get its own fileHandleId -- reusing MOCK_FILE_HANDLE_ID for every
        // call made multi-file uploads (e.g. in chat attachments) collide on the same id, so
        // removing one attachment would remove them all.
        const response: SynapseApiResponse<MultipartUploadStatus> = {
          state: 'COMPLETED',
          resultFileHandleId: createUploadedFileHandle(requestBody.fileName).id,
          uploadId,
          startedBy: String(MOCK_USER_ID),
          startedOn: new Date().toISOString(),
          updatedOn: new Date().toISOString(),
          partsState: '1',
        }

        return HttpResponse.json(response, { status: 201 })
      },
    ),
    http.put(
      `${backendOrigin}${FILE}/file/multipart/:id/complete`,
      ({ params }) => {
        const response: SynapseApiResponse<MultipartUploadStatus> = {
          state: 'COMPLETED',
          resultFileHandleId: createUploadedFileHandle(
            uploadedFileNames.get(String(params.id)),
          ).id,
          uploadId: String(params.id),
          startedBy: String(MOCK_USER_ID),
          startedOn: new Date().toISOString(),
          updatedOn: new Date().toISOString(),
          partsState: '1',
        }

        return HttpResponse.json(response, { status: 201 })
      },
    ),

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
