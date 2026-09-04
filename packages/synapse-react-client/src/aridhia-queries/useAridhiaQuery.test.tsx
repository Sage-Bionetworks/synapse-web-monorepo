import { PropsWithChildren } from 'react'
import { act, renderHook, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { ResponseError } from '@sage-bionetworks/aridhia-client/generated/runtime'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseContextType } from '@/utils/context/SynapseContext'
import { AridhiaContextProvider } from '@/utils/context/AridhiaContext'
import {
  AridhiaError,
  toAridhiaError,
  useAridhiaMutation,
  useAridhiaQuery,
} from './useAridhiaQuery'
const GATEWAY = 'https://mock-gateway.test'
const AUTHENTICATION_REQUEST = {
  subject_token_type: 'urn:ietf:params:oauth:token-type:access_token',
  subject_token_issuer: 'sage-prod',
}

function authenticateHandler(
  response: object = { access_token: 'mock-aridhia-token', expires_in: 300 },
  status = 200,
) {
  return http.post(`${GATEWAY}/authenticate`, () =>
    HttpResponse.json(response, { status }),
  )
}

/** A `ResponseError` as the generated fetch client throws it, for exercising `toAridhiaError`. */
function responseError(body: unknown, status: number) {
  return new ResponseError(
    new Response(JSON.stringify(body), { status }),
    `Aridhia request failed (${status})`,
  )
}

/**
 * Renders a hook under a query client plus, unless `withAridhiaContext` is false, an
 * `AridhiaContextProvider` — the two prerequisites `useAridhiaQuery`/`useAridhiaMutation` gate
 * on. `synapseContext` overrides (e.g. `{ accessToken: undefined }`) simulate a signed-out user.
 */
function renderAridhiaHook<T>(
  hook: () => T,
  options: {
    withAridhiaContext?: boolean
    synapseContext?: Partial<SynapseContextType>
  } = {},
) {
  const { withAridhiaContext = true, synapseContext } = options
  const Wrapper = createWrapper(synapseContext)
  return renderHook(hook, {
    wrapper: ({ children }: PropsWithChildren) => (
      <Wrapper>
        {withAridhiaContext ? (
          <AridhiaContextProvider
            apiBasePath={GATEWAY}
            authenticationRequest={AUTHENTICATION_REQUEST}
          >
            {children}
          </AridhiaContextProvider>
        ) : (
          children
        )}
      </Wrapper>
    ),
  })
}

describe('useAridhiaQuery', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('runs queryFn with a Configuration carrying the exchanged Aridhia token', async () => {
    server.use(authenticateHandler())
    const queryFn = vi.fn().mockResolvedValue('the-data')

    const { result } = renderAridhiaHook(() =>
      useAridhiaQuery(['key'], queryFn),
    )

    await waitFor(() => expect(result.current.data).toBe('the-data'))
    expect(queryFn).toHaveBeenCalledTimes(1)
    const configuration = queryFn.mock.calls[0][0]
    expect(configuration.basePath).toBe(GATEWAY)
    await expect(configuration.accessToken?.()).resolves.toBe(
      'mock-aridhia-token',
    )
  })

  it('never calls queryFn without an AridhiaContextProvider', async () => {
    const queryFn = vi.fn()

    const { result } = renderAridhiaHook(
      () => useAridhiaQuery(['key'], queryFn),
      { withAridhiaContext: false },
    )

    await waitFor(() => expect(result.current.fetchStatus).toBe('idle'))
    expect(result.current.status).toBe('pending')
    expect(queryFn).not.toHaveBeenCalled()
  })

  it('never calls queryFn without a Synapse access token', async () => {
    const queryFn = vi.fn()

    const { result } = renderAridhiaHook(
      () => useAridhiaQuery(['key'], queryFn),
      { synapseContext: { accessToken: undefined } },
    )

    await waitFor(() => expect(result.current.fetchStatus).toBe('idle'))
    expect(result.current.status).toBe('pending')
    expect(queryFn).not.toHaveBeenCalled()
  })

  it('composes a caller-supplied enabled:false with the base prerequisite (never runs)', async () => {
    server.use(authenticateHandler())
    const queryFn = vi.fn()

    const { result } = renderAridhiaHook(() =>
      useAridhiaQuery(['key'], queryFn, { enabled: false }),
    )

    await waitFor(() => expect(result.current.fetchStatus).toBe('idle'))
    expect(result.current.status).toBe('pending')
    expect(queryFn).not.toHaveBeenCalled()
  })

  it('does not let a caller-supplied enabled:true bypass a missing prerequisite', async () => {
    const queryFn = vi.fn()

    const { result } = renderAridhiaHook(
      () => useAridhiaQuery(['key'], queryFn, { enabled: true }),
      { withAridhiaContext: false },
    )

    // Not just "queryFn was never called" — the not_configured guard inside `run` would also
    // swallow that even if wrongly enabled. Assert the query itself never attempted to run.
    await waitFor(() => expect(result.current.fetchStatus).toBe('idle'))
    expect(result.current.status).toBe('pending')
    expect(queryFn).not.toHaveBeenCalled()
  })

  it('passes non-enabled options through to useQuery unmodified', async () => {
    server.use(authenticateHandler())
    const queryFn = vi.fn().mockResolvedValue('the-data')

    const { result } = renderAridhiaHook(() =>
      useAridhiaQuery(['key'], queryFn, { staleTime: 60_000 }),
    )

    await waitFor(() => expect(result.current.data).toBe('the-data'))
    expect(result.current.isStale).toBe(false)
  })

  it('normalizes a thrown error into an AridhiaError instead of the raw error', async () => {
    server.use(authenticateHandler())
    const queryFn = vi.fn().mockRejectedValue(new Error('boom'))

    const { result } = renderAridhiaHook(() =>
      useAridhiaQuery(['key'], queryFn, { retry: false }),
    )

    await waitFor(() => expect(result.current.isError).toBe(true))
    expect(result.current.error).toBeInstanceOf(AridhiaError)
    expect((result.current.error as AridhiaError).code).toBe('unknown')
  })
})

describe('useAridhiaMutation', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('does not call mutationFn until mutate() is invoked', async () => {
    server.use(authenticateHandler())
    const mutationFn = vi.fn().mockResolvedValue('the-data')

    renderAridhiaHook(() => useAridhiaMutation(mutationFn))

    await waitFor(() => expect(mutationFn).not.toHaveBeenCalled())
  })

  it('calls mutationFn with a Configuration and the mutate() variables', async () => {
    server.use(authenticateHandler())
    const mutationFn = vi.fn().mockResolvedValue('the-data')

    const { result } = renderAridhiaHook(() =>
      useAridhiaMutation<string, { code: string }>(mutationFn),
    )

    act(() => {
      result.current.mutate({ code: 'ds-1' })
    })

    await waitFor(() => expect(result.current.data).toBe('the-data'))
    expect(mutationFn).toHaveBeenCalledTimes(1)
    const [configuration, variables] = mutationFn.mock.calls[0]
    expect(configuration.basePath).toBe(GATEWAY)
    expect(variables).toEqual({ code: 'ds-1' })
  })

  it('resolves to a not_configured AridhiaError when mutated without an AridhiaContextProvider', async () => {
    const mutationFn = vi.fn()

    const { result } = renderAridhiaHook(() => useAridhiaMutation(mutationFn), {
      withAridhiaContext: false,
    })

    act(() => {
      result.current.mutate(undefined)
    })

    await waitFor(() => expect(result.current.isError).toBe(true))
    expect(mutationFn).not.toHaveBeenCalled()
    const error = result.current.error as AridhiaError
    expect(error).toBeInstanceOf(AridhiaError)
    expect(error.code).toBe('not_configured')
  })

  it('preserves caller-supplied onSuccess alongside the internal mutationFn wiring', async () => {
    server.use(authenticateHandler())
    const mutationFn = vi.fn().mockResolvedValue('the-data')
    const onSuccess = vi.fn()

    const { result } = renderAridhiaHook(() =>
      useAridhiaMutation(mutationFn, { onSuccess }),
    )

    act(() => {
      result.current.mutate(undefined)
    })

    await waitFor(() =>
      expect(onSuccess).toHaveBeenCalledWith('the-data', undefined, undefined),
    )
  })

  it.each([
    ['invalid_token', true],
    ['invalid_issuer', true],
    // A malformed request body is our bug, not the user's eligibility.
    ['Invalid parameter', false],
  ] as const)(
    'normalizes a %s response body into an AridhiaError (isEligibilityFailure=%s)',
    async (code, isEligibilityFailure) => {
      const mutationFn = vi
        .fn()
        .mockRejectedValue(responseError({ error: code }, 401))
      server.use(authenticateHandler())

      const { result } = renderAridhiaHook(() => useAridhiaMutation(mutationFn))

      act(() => {
        result.current.mutate(undefined)
      })

      await waitFor(() => expect(result.current.isError).toBe(true))
      const error = result.current.error as AridhiaError
      expect(error.code).toBe(code)
      expect(error.isEligibilityFailure).toBe(isEligibilityFailure)
      expect(error.httpStatus).toBe(401)
    },
  )

  it('surfaces the server text verbatim for an unrecognized error body, still coded unknown', async () => {
    server.use(authenticateHandler())
    const mutationFn = vi
      .fn()
      .mockRejectedValue(
        responseError({ message: 'cohort query is invalid' }, 400),
      )

    const { result } = renderAridhiaHook(() => useAridhiaMutation(mutationFn))

    act(() => {
      result.current.mutate(undefined)
    })

    await waitFor(() => expect(result.current.isError).toBe(true))
    const error = result.current.error as AridhiaError
    expect(error.code).toBe('unknown')
    expect(error.message).toBe('cohort query is invalid')
  })

  it('surfaces the message from a nested { error: { status, message } } response body', async () => {
    server.use(authenticateHandler())
    const mutationFn = vi.fn().mockRejectedValue(
      responseError(
        {
          error: {
            status: 400,
            message:
              'Request workspace configuration error: Workspace request prohibited',
          },
        },
        400,
      ),
    )

    const { result } = renderAridhiaHook(() => useAridhiaMutation(mutationFn))

    act(() => {
      result.current.mutate(undefined)
    })

    await waitFor(() => expect(result.current.isError).toBe(true))
    const error = result.current.error as AridhiaError
    expect(error.code).toBe('unknown')
    expect(error.message).toBe(
      'Request workspace configuration error: Workspace request prohibited',
    )
    expect(error.httpStatus).toBe(400)
  })

  it('falls back to a generic message when the error response body is not JSON', async () => {
    server.use(authenticateHandler())
    const mutationFn = vi
      .fn()
      .mockRejectedValue(
        new ResponseError(new Response('not json', { status: 500 })),
      )

    const { result } = renderAridhiaHook(() => useAridhiaMutation(mutationFn))

    act(() => {
      result.current.mutate(undefined)
    })

    await waitFor(() => expect(result.current.isError).toBe(true))
    const error = result.current.error as AridhiaError
    expect(error.code).toBe('unknown')
    expect(error.message).toBe('Aridhia request failed (500)')
  })

  it('passes an AridhiaError thrown by mutationFn through unchanged', async () => {
    server.use(authenticateHandler())
    const thrown = new AridhiaError('invalid_token', 'already normalized', {
      httpStatus: 401,
      isEligibilityFailure: true,
    })
    const mutationFn = vi.fn().mockRejectedValue(thrown)

    const { result } = renderAridhiaHook(() => useAridhiaMutation(mutationFn))

    act(() => {
      result.current.mutate(undefined)
    })

    await waitFor(() => expect(result.current.isError).toBe(true))
    expect(result.current.error).toBe(thrown)
  })
})

describe('AridhiaError', () => {
  it('defaults httpStatus to undefined and isEligibilityFailure to false', () => {
    const error = new AridhiaError('unknown', 'something broke')

    expect(error).toBeInstanceOf(Error)
    expect(error.name).toBe('AridhiaError')
    expect(error.code).toBe('unknown')
    expect(error.message).toBe('something broke')
    expect(error.httpStatus).toBeUndefined()
    expect(error.isEligibilityFailure).toBe(false)
  })

  it('carries through explicit httpStatus and isEligibilityFailure', () => {
    const error = new AridhiaError('invalid_token', 'nope', {
      httpStatus: 401,
      isEligibilityFailure: true,
    })

    expect(error.httpStatus).toBe(401)
    expect(error.isEligibilityFailure).toBe(true)
  })
})

describe('toAridhiaError', () => {
  it('extracts nested error message from ResponseError', async () => {
    const error = responseError(
      {
        error: {
          status: 400,
          message:
            'Request workspace configuration error: Workspace request prohibited',
        },
      },
      400,
    )
    const normalized = await toAridhiaError(error)
    expect(normalized.message).toBe(
      'Request workspace configuration error: Workspace request prohibited',
    )
    expect(normalized.httpStatus).toBe(400)
  })

  it('extracts message from plain object body', async () => {
    const normalized = await toAridhiaError({
      error: {
        status: 400,
        message: 'Direct object error message',
      },
    })
    expect(normalized.message).toBe('Direct object error message')
  })
})
