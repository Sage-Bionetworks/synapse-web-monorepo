import { NETWORK_UNAVAILABLE_MESSAGE } from './Constants'
import {
  SERVER_ERROR_RETRY_CODES,
  synapseClientFetch,
} from './synapseClientFetch'
import { SynapseClientError } from './SynapseClientError'

// 1000ms delay plus 0-100ms jitter
const DELAY_PLUS_MAX_JITTER = 1000 + 100
const DELAY_CAP = 10_000 // 10s

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
    await vi.advanceTimersByTimeAsync(DELAY_PLUS_MAX_JITTER)
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
    await vi.advanceTimersByTimeAsync(DELAY_PLUS_MAX_JITTER)
    expect(mockFetch).toHaveBeenCalledTimes(2)
    await vi.advanceTimersByTimeAsync(DELAY_PLUS_MAX_JITTER * 2)
    expect(mockFetch).toHaveBeenCalledTimes(3)
    await vi.advanceTimersByTimeAsync(DELAY_PLUS_MAX_JITTER * 4)
    expect(mockFetch).toHaveBeenCalledTimes(4)
    await vi.advanceTimersByTimeAsync(DELAY_PLUS_MAX_JITTER * 8)
    expect(mockFetch).toHaveBeenCalledTimes(5)
    await vi.advanceTimersByTimeAsync(DELAY_CAP)
    expect(mockFetch).toHaveBeenCalledTimes(6)
    await expect(responsePromise).resolves.toEqual({ success: true })
  })

  it.each(SERVER_ERROR_RETRY_CODES)(
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
      await vi.advanceTimersByTimeAsync(DELAY_PLUS_MAX_JITTER)
      expect(mockFetch).toHaveBeenCalledTimes(2)
      await vi.advanceTimersByTimeAsync(DELAY_PLUS_MAX_JITTER * 2)
      expect(mockFetch).toHaveBeenCalledTimes(3)

      await expect(promise).rejects.toEqual(
        new SynapseClientError(code, 'Server Error', '/test-url', {
          reason: 'Server Error',
        }),
      )
    },
  )

  it('should retry on network errors and succeed if a retry succeeds', async () => {
    const mockSuccessResponse = new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      },
    )

    mockFetch
      .mockRejectedValueOnce(new Error('Network Error'))
      .mockResolvedValueOnce(mockSuccessResponse)

    const responsePromise = synapseClientFetch('/test-url', { method: 'GET' })

    expect(mockFetch).toHaveBeenCalledTimes(1)
    await vi.advanceTimersByTimeAsync(DELAY_PLUS_MAX_JITTER)
    expect(mockFetch).toHaveBeenCalledTimes(2)

    await expect(responsePromise).resolves.toEqual({ success: true })
  })

  it('should retry a limited number of times then throw on network errors', async () => {
    mockFetch.mockRejectedValue(new Error('Network Error'))

    const promise = synapseClientFetch('/test-url', { method: 'GET' })

    promise.catch(() => {
      // Error will be tested after timers are fired
    })

    // Maximum 3 attempts (SERVER_ERROR_MAX_RETRY = 3)
    expect(mockFetch).toHaveBeenCalledTimes(1)
    await vi.advanceTimersByTimeAsync(DELAY_PLUS_MAX_JITTER)
    expect(mockFetch).toHaveBeenCalledTimes(2)
    await vi.advanceTimersByTimeAsync(DELAY_PLUS_MAX_JITTER * 2)
    expect(mockFetch).toHaveBeenCalledTimes(3)

    await expect(promise).rejects.toEqual(
      new SynapseClientError(0, NETWORK_UNAVAILABLE_MESSAGE, '/test-url'),
    )
  })

  it('should share the transient error counter between server errors and network errors', async () => {
    const mock502Response = new Response(
      JSON.stringify({ reason: 'Bad Gateway' }),
      { status: 502, headers: { 'Content-Type': 'application/json' } },
    )

    // 1 server error + 2 network errors = 3 transient errors total, no more retries
    mockFetch
      .mockResolvedValueOnce(mock502Response)
      .mockRejectedValueOnce(new Error('Network Error'))
      .mockRejectedValue(new Error('Network Error'))

    const promise = synapseClientFetch('/test-url', { method: 'GET' })

    promise.catch(() => {
      // Error will be tested after timers are fired
    })

    expect(mockFetch).toHaveBeenCalledTimes(1)
    await vi.advanceTimersByTimeAsync(DELAY_PLUS_MAX_JITTER)
    expect(mockFetch).toHaveBeenCalledTimes(2)
    await vi.advanceTimersByTimeAsync(DELAY_PLUS_MAX_JITTER * 2)
    expect(mockFetch).toHaveBeenCalledTimes(3)

    await expect(promise).rejects.toEqual(
      new SynapseClientError(0, NETWORK_UNAVAILABLE_MESSAGE, '/test-url'),
    )
  })
})
