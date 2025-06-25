import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { cleanup, renderHook, waitFor } from '@testing-library/react'
import { http } from 'msw'
import usePreFetchResource from './usePreFetchResource'

const onReceivedRequest = vi.fn()

const PRESIGNED_URL = 'https://test-url.notarealurl/presigned.pdf'

describe('usePreFetchResource tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('Returns undefined when passed URL is undefined', () => {
    const { result } = renderHook(() => usePreFetchResource(undefined), {
      wrapper: createWrapper(),
    })
    expect(result.current).toBe(undefined)
  })

  it('Returns a local URL when passed a presigned URL', async () => {
    server.use(
      http.get(
        PRESIGNED_URL,

        () => {
          onReceivedRequest()
          return new Response('abcdef', {
            status: 200,
            headers: { 'Content-Type': 'image/jpeg' },
          })
        },
      ),
    )

    const { result } = renderHook(() => usePreFetchResource(PRESIGNED_URL), {
      wrapper: createWrapper(),
    })

    await waitFor(() => {
      expect(onReceivedRequest).toHaveBeenCalled()
      expect(URL.createObjectURL).toHaveBeenCalled()
      expect(result.current).toBeDefined()
    })

    cleanup()

    expect(URL.revokeObjectURL).toHaveBeenCalled()
  })
})
