import { describe, expect, it, vi, beforeEach } from 'vitest'
import {
  fetchWithExponentialTimeout,
  HttpFetchError,
} from './fetchWithExponentialTimeout'
import { RetryError } from './promiseWithRetry'

vi.mock('./promiseWithRetry', async () => {
  const actual = await vi.importActual('./promiseWithRetry')
  return {
    ...actual,
    promiseWithRetry: vi.fn(),
  }
})

import { promiseWithRetry } from './promiseWithRetry'

const mockedPromiseWithRetry = vi.mocked(promiseWithRetry)

describe('fetchWithExponentialTimeout', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should return the response if the fetch succeeds', async () => {
    const mockResponse = new Response('{"data": "test"}', {
      status: 200,
      statusText: 'OK',
    })

    mockedPromiseWithRetry.mockImplementation(async fn => fn())
    global.fetch = vi.fn().mockResolvedValue(mockResponse)

    const response = await fetchWithExponentialTimeout(
      'https://api.example.com/data',
    )

    expect(response.status).toBe(200)
    expect(mockedPromiseWithRetry).toHaveBeenCalledWith(
      expect.any(Function),
      3,
      1000,
      true,
      undefined,
    )
  })

  it('should use custom retry options when provided', async () => {
    const mockResponse = new Response('{"data": "test"}', { status: 200 })

    mockedPromiseWithRetry.mockImplementation(async fn => fn())
    global.fetch = vi.fn().mockResolvedValue(mockResponse)

    await fetchWithExponentialTimeout(
      'https://api.example.com/data',
      undefined,
      {
        retries: 5,
        delayMs: 500,
        exponentialBackoff: false,
      },
    )

    expect(mockedPromiseWithRetry).toHaveBeenCalledWith(
      expect.any(Function),
      5,
      500,
      false,
      undefined,
    )
  })

  it('should pass maxDelayMs to promiseWithRetry when provided', async () => {
    const mockResponse = new Response('{"data": "test"}', { status: 200 })

    mockedPromiseWithRetry.mockImplementation(async fn => fn())
    global.fetch = vi.fn().mockResolvedValue(mockResponse)

    await fetchWithExponentialTimeout(
      'https://api.example.com/data',
      undefined,
      {
        retries: 5,
        delayMs: 500,
        exponentialBackoff: true,
        maxDelayMs: 3000,
      },
    )

    expect(mockedPromiseWithRetry).toHaveBeenCalledWith(
      expect.any(Function),
      5,
      500,
      true,
      3000,
    )
  })

  describe('retryable status codes', () => {
    it.each([
      [408, 'Request Timeout'],
      [429, 'Too Many Requests'],
      [500, 'Internal Server Error'],
      [502, 'Bad Gateway'],
      [503, 'Service Unavailable'],
      [504, 'Gateway Timeout'],
    ])(
      'should throw RetryError for status %i (%s)',
      async (statusCode, statusText) => {
        const errorResponse = new Response('error', {
          status: statusCode,
          statusText,
        })

        mockedPromiseWithRetry.mockImplementation(async fn => fn())
        global.fetch = vi.fn().mockResolvedValue(errorResponse)

        await expect(
          fetchWithExponentialTimeout('https://api.example.com/data'),
        ).rejects.toThrow(RetryError)

        const thrownError = await fetchWithExponentialTimeout(
          'https://api.example.com/data',
        ).catch(e => e)

        expect(thrownError).toBeInstanceOf(RetryError)
        expect(thrownError.message).toBe(`HTTP ${statusCode}: ${statusText}`)
      },
    )
  })

  describe('non-retryable status codes', () => {
    it.each([
      [400, 'Bad Request'],
      [401, 'Unauthorized'],
      [403, 'Forbidden'],
      [404, 'Not Found'],
      [422, 'Unprocessable Entity'],
    ])(
      'should throw HttpFetchError for status %i (%s)',
      async (statusCode, statusText) => {
        const errorResponse = new Response('error', {
          status: statusCode,
          statusText,
        })

        mockedPromiseWithRetry.mockImplementation(async fn => fn())
        global.fetch = vi.fn().mockResolvedValue(errorResponse)

        await expect(
          fetchWithExponentialTimeout('https://api.example.com/data'),
        ).rejects.toThrow(HttpFetchError)

        const thrownError = await fetchWithExponentialTimeout(
          'https://api.example.com/data',
        ).catch(e => e)

        expect(thrownError).toBeInstanceOf(HttpFetchError)
        expect(thrownError.status).toBe(statusCode)
        expect(thrownError.message).toBe(`HTTP ${statusCode}: ${statusText}`)
        expect(thrownError.response).toBe(errorResponse)
      },
    )
  })

  it('should throw HttpFetchError for non-retryable errors', async () => {
    const errorResponse = new Response('Not Found', {
      status: 404,
      statusText: 'Not Found',
    })

    mockedPromiseWithRetry.mockImplementation(async fn => fn())
    global.fetch = vi.fn().mockResolvedValue(errorResponse)

    try {
      await fetchWithExponentialTimeout('https://api.example.com/data')
      expect.fail('Should have thrown HttpFetchError')
    } catch (error) {
      expect(error).toBeInstanceOf(HttpFetchError)
      if (error instanceof HttpFetchError) {
        expect(error.status).toBe(404)
        expect(error.message).toBe('HTTP 404: Not Found')
        expect(error.response).toBeDefined()
      }
    }
  })

  it('should pass fetch options correctly', async () => {
    const mockResponse = new Response('{"data": "test"}', { status: 200 })
    const fetchMock = vi.fn().mockResolvedValue(mockResponse)
    global.fetch = fetchMock

    mockedPromiseWithRetry.mockImplementation(async fn => fn())

    const init: RequestInit = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: 'value' }),
    }

    await fetchWithExponentialTimeout('https://api.example.com/data', init)

    expect(fetchMock).toHaveBeenCalledWith('https://api.example.com/data', init)
  })

  it('should work with URL objects', async () => {
    const mockResponse = new Response('{"data": "test"}', { status: 200 })
    const fetchMock = vi.fn().mockResolvedValue(mockResponse)
    global.fetch = fetchMock

    mockedPromiseWithRetry.mockImplementation(async fn => fn())

    const url = new URL('https://api.example.com/data')
    await fetchWithExponentialTimeout(url)

    expect(fetchMock).toHaveBeenCalledWith(url, undefined)
  })

  it('should work with Request objects', async () => {
    const mockResponse = new Response('{"data": "test"}', { status: 200 })
    const fetchMock = vi.fn().mockResolvedValue(mockResponse)
    global.fetch = fetchMock

    mockedPromiseWithRetry.mockImplementation(async fn => fn())

    const request = new Request('https://api.example.com/data', {
      method: 'GET',
    })
    await fetchWithExponentialTimeout(request)

    expect(fetchMock).toHaveBeenCalledWith(request, undefined)
  })

  it('should handle network errors (TypeError) from fetch', async () => {
    const networkError = new TypeError('Failed to fetch')
    global.fetch = vi.fn().mockRejectedValue(networkError)

    mockedPromiseWithRetry.mockImplementation(async fn => fn())

    await expect(
      fetchWithExponentialTimeout('https://api.example.com/data'),
    ).rejects.toThrow(TypeError)
  })

  it('should clone response before throwing RetryError', async () => {
    const errorResponse = new Response('Service Unavailable', {
      status: 503,
    })

    mockedPromiseWithRetry.mockImplementation(async fn => fn())
    global.fetch = vi.fn().mockResolvedValue(errorResponse)

    try {
      await fetchWithExponentialTimeout('https://api.example.com/data')
    } catch (error) {
      if (error instanceof RetryError) {
        expect(error.cause).toBeInstanceOf(Response)
        const response = error.cause as Response
        expect(response.status).toBe(503)
        expect(error.cause).not.toBe(errorResponse)
      }
    }
  })

  it('should handle responses without statusText', async () => {
    const errorResponse = new Response('error', {
      status: 503,
      statusText: '',
    })

    mockedPromiseWithRetry.mockImplementation(async fn => fn())
    global.fetch = vi.fn().mockResolvedValue(errorResponse)

    try {
      await fetchWithExponentialTimeout('https://api.example.com/data')
    } catch (error) {
      if (error instanceof RetryError) {
        expect(error.message).toBe('HTTP 503: Unknown error')
      }
    }
  })
})

describe('HttpFetchError', () => {
  it('should create an error with response and status', () => {
    const response = new Response('Not Found', {
      status: 404,
      statusText: 'Not Found',
    })
    const error = new HttpFetchError('HTTP 404: Not Found', response)

    expect(error).toBeInstanceOf(Error)
    expect(error.name).toBe('HttpFetchError')
    expect(error.message).toBe('HTTP 404: Not Found')
    expect(error.status).toBe(404)
    expect(error.response).toBe(response)
  })
})
