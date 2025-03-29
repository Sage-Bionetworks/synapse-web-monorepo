import { rest, server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { cleanup, renderHook, waitFor } from '@testing-library/react'
import usePreFetchResource from './usePreFetchResource'

const onReceivedRequest = jest.fn()

const PRESIGNED_URL = 'https://test-url.notarealurl/presigned.pdf'

describe('usePreFetchResource tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Returns undefined when passed URL is undefined', () => {
    const { result } = renderHook(() => usePreFetchResource(undefined), {
      wrapper: createWrapper(),
    })
    expect(result.current).toBe(undefined)
  })

  it('Returns a local URL when passed a presigned URL', async () => {
    server.use(
      rest.get(
        PRESIGNED_URL,

        async (req, res, ctx) => {
          onReceivedRequest()
          return res(
            ctx.status(200),
            ctx.set('Content-Type', 'image/jpeg'),
            ctx.body('abcdef'),
          )
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
