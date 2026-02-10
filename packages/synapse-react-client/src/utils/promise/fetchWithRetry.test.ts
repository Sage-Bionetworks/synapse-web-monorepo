import { describe, expect, it, vi, beforeEach } from 'vitest'
import { fetchWithRetry, FetchError } from './fetchWithRetry'
import { RetryError } from './promiseWithRetry'

describe('fetchWithRetry', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return the response if the fetch succeeds on the first attempt', async () => {
    const mockResponse = new Response('{"data": "test"}', {
      status: 200,
      statusText: 'OK',
    })
    const fetchMock = vi.fn().mockResolvedValue(mockResponse)
    global.fetch = fetchMock

    const response = await fetchWithRetry('https://api.example.com/data')

    expect(response.status).toBe(200)
    expect(fetchMock).toHaveBeenCalledTimes(1)
  })

  describe('retryable status codes', () => {
    it.each([
      [408, 'Request Timeout'],
      [429, 'Too Many Requests'],
      [500, 'Internal Server Error'],
      [502, 'Bad Gateway'],
      [503, 'Service Unavailable'],
      [504, 'Gateway Timeout'],
    ])('should retry on status %i (%s)', async (statusCode, statusText) => {
      const successResponse = new Response('{"data": "success"}', {
        status: 200,
      })
      const errorResponse = new Response('error', {
        status: statusCode,
        statusText,
      })

      const fetchMock = vi
        .fn()
        .mockResolvedValueOnce(errorResponse)
        .mockResolvedValueOnce(errorResponse)
        .mockResolvedValue(successResponse)

      global.fetch = fetchMock

      const response = await fetchWithRetry(
        'https://api.example.com/data',
        undefined,
        {
          retries: 3,
          delayMs: 10,
        },
      )

      expect(response.status).toBe(200)
      expect(fetchMock).toHaveBeenCalledTimes(3)
    })
  })

  describe('non-retryable status codes', () => {
    it.each([
      [400, 'Bad Request'],
      [401, 'Unauthorized'],
      [403, 'Forbidden'],
      [404, 'Not Found'],
      [422, 'Unprocessable Entity'],
    ])('should not retry on status %i (%s)', async (statusCode, statusText) => {
      const errorResponse = new Response('error', {
        status: statusCode,
        statusText,
      })

      const fetchMock = vi.fn().mockResolvedValue(errorResponse)
      global.fetch = fetchMock

      await expect(
        fetchWithRetry('https://api.example.com/data'),
      ).rejects.toThrow(FetchError)

      expect(fetchMock).toHaveBeenCalledTimes(1)
    })
  })

  it('should throw FetchError for non-retryable errors', async () => {
    const errorResponse = new Response('Not Found', {
      status: 404,
      statusText: 'Not Found',
    })

    global.fetch = vi.fn().mockResolvedValue(errorResponse)

    try {
      await fetchWithRetry('https://api.example.com/data')
      expect.fail('Should have thrown FetchError')
    } catch (error) {
      expect(error).toBeInstanceOf(FetchError)
      if (error instanceof FetchError) {
        expect(error.status).toBe(404)
        expect(error.message).toBe('HTTP 404: Not Found')
        expect(error.response).toBeDefined()
      }
    }
  })

  it('should throw RetryError when all retries are exhausted', async () => {
    const errorResponse = new Response('Service Unavailable', {
      status: 503,
      statusText: 'Service Unavailable',
    })

    global.fetch = vi.fn().mockResolvedValue(errorResponse)

    await expect(
      fetchWithRetry('https://api.example.com/data', undefined, {
        retries: 2,
        delayMs: 10,
      }),
    ).rejects.toThrow(RetryError)

    expect(global.fetch).toHaveBeenCalledTimes(3)
  })

  it('should use default retry options', async () => {
    const successResponse = new Response('{"data": "success"}', {
      status: 200,
    })
    const errorResponse = new Response('error', { status: 503 })

    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(errorResponse)
      .mockResolvedValue(successResponse)

    global.fetch = fetchMock

    const startTime = Date.now()
    const response = await fetchWithRetry('https://api.example.com/data')
    const endTime = Date.now()

    expect(response.status).toBe(200)
    expect(fetchMock).toHaveBeenCalledTimes(2)
    expect(endTime - startTime).toBeGreaterThanOrEqual(1000)
  })

  it('should respect custom retry configuration', async () => {
    const successResponse = new Response('{"data": "success"}', {
      status: 200,
    })
    const errorResponse = new Response('error', { status: 503 })

    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(errorResponse)
      .mockResolvedValue(successResponse)

    global.fetch = fetchMock

    const startTime = Date.now()
    await fetchWithRetry('https://api.example.com/data', undefined, {
      retries: 5,
      delayMs: 50,
      exponentialBackoff: false,
    })
    const endTime = Date.now()

    expect(endTime - startTime).toBeGreaterThanOrEqual(50)
    expect(endTime - startTime).toBeLessThan(100)
  })

  it('should pass fetch options correctly', async () => {
    const mockResponse = new Response('{"data": "test"}', { status: 200 })
    const fetchMock = vi.fn().mockResolvedValue(mockResponse)
    global.fetch = fetchMock

    const init: RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: 'value' }),
    }

    await fetchWithRetry('https://api.example.com/data', init)

    expect(fetchMock).toHaveBeenCalledWith('https://api.example.com/data', init)
  })

  it('should work with URL objects', async () => {
    const mockResponse = new Response('{"data": "test"}', { status: 200 })
    const fetchMock = vi.fn().mockResolvedValue(mockResponse)
    global.fetch = fetchMock

    const url = new URL('https://api.example.com/data')
    await fetchWithRetry(url)

    expect(fetchMock).toHaveBeenCalledWith(url, undefined)
  })

  it('should work with Request objects', async () => {
    const mockResponse = new Response('{"data": "test"}', { status: 200 })
    const fetchMock = vi.fn().mockResolvedValue(mockResponse)
    global.fetch = fetchMock

    const request = new Request('https://api.example.com/data', {
      method: 'GET',
    })
    await fetchWithRetry(request)

    expect(fetchMock).toHaveBeenCalledWith(request, undefined)
  })

  it('should use exponential backoff by default', async () => {
    const successResponse = new Response('{"data": "success"}', {
      status: 200,
    })
    const errorResponse = new Response('error', { status: 503 })

    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(errorResponse)
      .mockResolvedValueOnce(errorResponse)
      .mockResolvedValue(successResponse)

    global.fetch = fetchMock

    const startTime = Date.now()
    await fetchWithRetry('https://api.example.com/data', undefined, {
      retries: 3,
      delayMs: 50,
    })
    const endTime = Date.now()

    // First retry: 50ms, second retry: 100ms, total: 150ms
    expect(endTime - startTime).toBeGreaterThanOrEqual(150)
    expect(endTime - startTime).toBeLessThan(200)
  })

  it('should handle network errors without retrying', async () => {
    const networkError = new TypeError('Failed to fetch')
    global.fetch = vi.fn().mockRejectedValue(networkError)

    await expect(
      fetchWithRetry('https://api.example.com/data'),
    ).rejects.toThrow(TypeError)

    expect(global.fetch).toHaveBeenCalledTimes(1)
  })

  it('should clone response before throwing RetryError', async () => {
    const errorResponse = new Response('Service Unavailable', {
      status: 503,
    })
    const clonedResponse = errorResponse.clone()

    const fetchMock = vi.fn().mockResolvedValue(errorResponse)
    global.fetch = fetchMock

    try {
      await fetchWithRetry('https://api.example.com/data', undefined, {
        retries: 0,
        delayMs: 10,
      })
    } catch (error) {
      if (error instanceof RetryError) {
        expect(error.cause).toBeInstanceOf(Response)
        const response = error.cause as Response
        expect(response.status).toBe(503)
      }
    }
  })
})

describe('FetchError', () => {
  it('should create an error with response and status', () => {
    const response = new Response('Not Found', {
      status: 404,
      statusText: 'Not Found',
    })
    const error = new FetchError('HTTP 404: Not Found', response)

    expect(error).toBeInstanceOf(Error)
    expect(error.name).toBe('FetchError')
    expect(error.message).toBe('HTTP 404: Not Found')
    expect(error.status).toBe(404)
    expect(error.response).toBe(response)
  })
})
