import { NETWORK_UNAVAILABLE_MESSAGE } from './Constants'
import { synapseClientFetch } from './synapseClientFetch'
import { SynapseClientError } from './SynapseClientError'

describe('synapseClientFetch', () => {
  let mockFetch = vi.spyOn(global, 'fetch')

  beforeAll(() => {
    vi.useFakeTimers()
  })
  beforeEach(() => {
    mockFetch = vi.spyOn(global, 'fetch')
    vi.clearAllMocks()
  })

  afterAll(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
  })

  it('should handle successful responses without retries', async () => {
    const mockResponse = new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
    mockFetch.mockResolvedValue(mockResponse)

    const responseBody = await synapseClientFetch('/test-url', {
      method: 'GET',
    })

    expect(mockFetch).toHaveBeenCalledTimes(1)
    expect(responseBody).toEqual({ success: true })
  })

  it.each([400, 401, 403])('should throw on %i error', async code => {
    const mockErrorResponse = new Response(
      JSON.stringify({ reason: 'Server Error' }),
      {
        status: code,
        headers: { 'Content-Type': 'application/json' },
      },
    )

    mockFetch.mockResolvedValue(mockErrorResponse)

    const promise = synapseClientFetch('/test-url', {
      method: 'GET',
    })

    promise.catch(() => {
      // Error will be tested after timers are fired
    })

    // Only one attempt should be made for non-retryable errors
    expect(mockFetch).toHaveBeenCalledTimes(1)
    await vi.advanceTimersByTimeAsync(1_000)
    expect(mockFetch).toHaveBeenCalledTimes(1)

    await expect(promise).rejects.toEqual(
      new SynapseClientError(code, 'Server Error', '/test-url', {
        reason: 'Server Error',
      }),
    )
  })

  it('should retry many times on 429 status code', async () => {
    const mockRetryResponse = new Response(
      JSON.stringify({ error: 'Too Many Requests' }),
      {
        status: 429,
        headers: { 'Content-Type': 'application/json' },
      },
    )
    const mockSuccessResponse = new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    )

    mockFetch
      .mockResolvedValueOnce(mockRetryResponse)
      .mockResolvedValueOnce(mockRetryResponse)
      .mockResolvedValueOnce(mockRetryResponse)
      .mockResolvedValueOnce(mockRetryResponse)
      .mockResolvedValueOnce(mockRetryResponse)
      .mockResolvedValueOnce(mockSuccessResponse)

    const responsePromise = synapseClientFetch('/test-url', {
      method: 'GET',
    })

    // 5 backoff errors followed by 1 success
    expect(mockFetch).toHaveBeenCalledTimes(1)
    await vi.advanceTimersByTimeAsync(1_000)
    expect(mockFetch).toHaveBeenCalledTimes(2)
    await vi.advanceTimersByTimeAsync(2_000)
    expect(mockFetch).toHaveBeenCalledTimes(3)
    await vi.advanceTimersByTimeAsync(4_000)
    expect(mockFetch).toHaveBeenCalledTimes(4)
    await vi.advanceTimersByTimeAsync(8_000)
    expect(mockFetch).toHaveBeenCalledTimes(5)
    await vi.advanceTimersByTimeAsync(10_000)
    expect(mockFetch).toHaveBeenCalledTimes(6)
    await expect(responsePromise).resolves.toEqual({ success: true })
  })

  it.each([502, 503, 504])(
    'should retry a limited number of times on %i status code',
    async code => {
      const mockErrorResponse = new Response(
        JSON.stringify({ reason: 'Server Error' }),
        {
          status: code,
          headers: { 'Content-Type': 'application/json' },
        },
      )

      mockFetch.mockResolvedValue(mockErrorResponse)

      const promise = synapseClientFetch('/test-url', {
        method: 'GET',
      })

      promise.catch(() => {
        // Error will be tested after timers are fired
      })

      // Maximum 3 attempts
      expect(mockFetch).toHaveBeenCalledTimes(1)
      await vi.advanceTimersByTimeAsync(1_000)
      expect(mockFetch).toHaveBeenCalledTimes(2)
      await vi.advanceTimersByTimeAsync(2_000)
      expect(mockFetch).toHaveBeenCalledTimes(3)

      await expect(promise).rejects.toEqual(
        new SynapseClientError(code, 'Server Error', '/test-url', {
          reason: 'Server Error',
        }),
      )
    },
  )

  it('should throw on network errors', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network Error'))

    await expect(() =>
      synapseClientFetch('/test-url', {
        method: 'GET',
      }),
    ).rejects.toEqual(
      new SynapseClientError(0, NETWORK_UNAVAILABLE_MESSAGE, '/test-url'),
    )

    expect(mockFetch).toHaveBeenCalledTimes(1)
  })
})
