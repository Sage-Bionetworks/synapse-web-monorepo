import { cleanup, renderHook } from '@testing-library/react-hooks'
import usePreFetchResource from '../../../../src/lib/utils/hooks/usePreFetchResource'
import { rest, server } from '../../../../mocks/msw/server'

const onRecievedRequest = jest.fn()

const PRESIGNED_URL = 'https://test-url.notarealurl/presigned.pdf'

describe('usePreFetchResource tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Returns undefined when passed URL is undefined', () => {
    const { result } = renderHook(() => usePreFetchResource(undefined))
    expect(result.current).toBe(undefined)
  })

  it('Returns a local URL when passed a presigned URL', async () => {
    server.use(
      rest.get(
        PRESIGNED_URL,

        async (req, res, ctx) => {
          onRecievedRequest()
          return res(
            ctx.status(200),
            ctx.set('Content-Type', 'image/jpeg'),
            ctx.body('abcdef'),
          )
        },
      ),
    )

    const { result, waitForNextUpdate } = renderHook(() =>
      usePreFetchResource(PRESIGNED_URL),
    )

    await waitForNextUpdate()
    expect(onRecievedRequest).toHaveBeenCalled()
    expect(URL.createObjectURL).toHaveBeenCalled()
    expect(result.current).toBeDefined()

    cleanup()

    expect(URL.revokeObjectURL).toHaveBeenCalled()
  })
})
