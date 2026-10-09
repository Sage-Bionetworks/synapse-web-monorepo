import { server } from '@/mocks/msw/server'
import { createWrapperAndQueryClient } from '@/testutils/TestingLibraryUtils'
import { FILE_HANDLE_BATCH } from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  BatchFileRequest,
  BatchFileResult,
  FileHandleAssociateType,
} from '@sage-bionetworks/synapse-types'
import { renderHook, waitFor } from '@testing-library/react'
import { delay, http, HttpResponse } from 'msw'
import { useImageUrl } from './useImageUrlUtils'

const REPO_ORIGIN = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)
const BATCH_FILE_URL = `${REPO_ORIGIN}${FILE_HANDLE_BATCH}`
const PRESIGNED_URL = 'https://somewebsite.com/imageofacat'

const onBatchFileRequest = vi.fn()
const onPresignedUrlRequest = vi.fn()

describe('useImageUrl tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns dataUrl when fileId and entityId are provided and dataUrl is available', async () => {
    const fileId = 'file123'
    const entityId = 'entity123'
    server.use(
      http.post<never, BatchFileRequest>(
        BATCH_FILE_URL,
        async ({ request }) => {
          onBatchFileRequest(await request.json())
          const response: BatchFileResult = {
            requestedFiles: [
              { fileHandleId: fileId, preSignedURL: PRESIGNED_URL },
            ],
          }
          return HttpResponse.json(response, { status: 201 })
        },
      ),
      http.get(PRESIGNED_URL, () => {
        onPresignedUrlRequest()
        return new Response('image data', {
          status: 200,
          headers: { 'Content-Type': 'image/jpeg' },
        })
      }),
    )
    const { wrapperFn } = createWrapperAndQueryClient()

    const { result } = renderHook(() => useImageUrl(fileId, entityId), {
      wrapper: wrapperFn,
    })

    // The URL returned is a local URL created for the blob fetched from the presigned URL
    await waitFor(() =>
      expect(result.current).toBe('blob:mockBlobUrlConfiguredInTestSetup'),
    )
    expect(onPresignedUrlRequest).toHaveBeenCalled()
    expect(URL.createObjectURL).toHaveBeenCalledWith(expect.any(Blob))
    expect(onBatchFileRequest).toHaveBeenCalledWith(
      expect.objectContaining({
        requestedFiles: [
          {
            associateObjectId: entityId,
            associateObjectType: FileHandleAssociateType.TableEntity,
            fileHandleId: fileId,
          },
        ],
      }),
    )
  })

  it('returns undefined if no dataUrl is available', async () => {
    const fileId = 'file123'
    const entityId = 'entity123'
    server.use(
      http.post(BATCH_FILE_URL, async () => {
        onBatchFileRequest()
        await delay('infinite')
      }),
    )
    const { wrapperFn } = createWrapperAndQueryClient()

    const { result } = renderHook(() => useImageUrl(fileId, entityId), {
      wrapper: wrapperFn,
    })

    await waitFor(() => expect(onBatchFileRequest).toHaveBeenCalled())
    expect(result.current).toBeUndefined()
  })

  it('returns undefined if fileId is not provided', () => {
    const fileId = ''
    const entityId = 'entity123'
    server.use(
      http.post(BATCH_FILE_URL, () => {
        onBatchFileRequest()
        return HttpResponse.json({ requestedFiles: [] }, { status: 201 })
      }),
    )
    const { wrapperFn, queryClient } = createWrapperAndQueryClient()

    const { result } = renderHook(() => useImageUrl(fileId, entityId), {
      wrapper: wrapperFn,
    })

    expect(result.current).toBeUndefined()
    // The query is disabled, so no request should be made
    expect(queryClient.isFetching()).toBe(0)
    expect(onBatchFileRequest).not.toHaveBeenCalled()
  })
})
