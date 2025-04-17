import { delay } from './fetchWithExponentialTimeout'
import { waitForAsyncResult } from './waitForAsyncResult'

vi.mock('./fetchWithExponentialTimeout')

const mockDelay = vi.mocked(delay)

describe('waitForAsyncResult', () => {
  test('waits for the async result to be no longer PROCESSING', async () => {
    const mockGetAsyncResult = vi.fn()
    mockGetAsyncResult
      .mockResolvedValueOnce({ jobState: 'PROCESSING' })
      .mockResolvedValueOnce({ jobState: 'PROCESSING' })
      .mockResolvedValueOnce({ jobState: 'PROCESSING' })
      .mockResolvedValueOnce({ jobState: 'PROCESSING' })
      .mockResolvedValueOnce({ jobState: 'PROCESSING' })
      .mockResolvedValueOnce({ jobState: 'COMPLETED', result: 'foo' })

    const result = await waitForAsyncResult(mockGetAsyncResult)

    expect(result).toEqual({ jobState: 'COMPLETED', result: 'foo' })
    expect(mockGetAsyncResult).toHaveBeenCalledTimes(6)
    expect(mockDelay).toHaveBeenCalledTimes(5)
    expect(mockDelay).toHaveBeenNthCalledWith(1, 125)
    expect(mockDelay).toHaveBeenNthCalledWith(2, 250)
    expect(mockDelay).toHaveBeenNthCalledWith(3, 500)
    expect(mockDelay).toHaveBeenNthCalledWith(4, 1000)
    expect(mockDelay).toHaveBeenNthCalledWith(4, 1000)
  })
})
