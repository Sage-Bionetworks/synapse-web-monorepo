import {
  useMutation,
  useQuery,
  QueryKey,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import {
  Configuration,
  ResponseError,
} from '@sage-bionetworks/aridhia-client/generated/runtime'
import { useAridhiaContextOptional } from '@/utils/context/AridhiaContext'
import { useSynapseContext } from '@/utils/context/SynapseContext'
import { createAridhiaApiConfiguration } from './aridhiaTokenExchange'

/**
 * - `invalid_token` / `invalid_issuer` — the gateway's `/authenticate` rejected the Synapse
 *   token outright (e.g. no linked RDCA-DAP account yet).
 * - `Invalid parameter` — the token-exchange request body was malformed. This is our bug, not
 *   the user's eligibility, so it is never treated as an eligibility failure.
 * - `not_configured` — called without an `AridhiaContextProvider` or a Synapse access token;
 *   an environment/wiring problem, not a user-eligibility problem.
 * - `unknown` — any other HTTP or network failure.
 */
export type AridhiaErrorCode =
  | 'invalid_token'
  | 'invalid_issuer'
  | 'Invalid parameter'
  | 'not_configured'
  | 'unknown'

export class AridhiaError extends Error {
  code: AridhiaErrorCode
  httpStatus?: number
  /** true when the failure means "this user cannot use the DAP API yet" */
  isEligibilityFailure: boolean

  constructor(
    code: AridhiaErrorCode,
    message: string,
    options?: { httpStatus?: number; isEligibilityFailure?: boolean },
  ) {
    super(message)
    this.name = 'AridhiaError'
    this.code = code
    this.httpStatus = options?.httpStatus
    this.isEligibilityFailure = options?.isEligibilityFailure ?? false
  }
}

async function toAridhiaError(error: unknown): Promise<AridhiaError> {
  if (error instanceof AridhiaError) {
    return error
  }
  if (error instanceof ResponseError) {
    const httpStatus = error.response.status
    let bodyErrorText: string | undefined
    try {
      const body: unknown = await error.response.clone().json()
      const errorField =
        body && typeof body === 'object' && 'error' in body
          ? body.error
          : undefined
      const messageField =
        body && typeof body === 'object' && 'message' in body
          ? body.message
          : undefined
      if (typeof errorField === 'string') {
        bodyErrorText = errorField
      } else if (typeof messageField === 'string') {
        bodyErrorText = messageField
      }
    } catch {
      // Response body wasn't JSON (or was already consumed) — fall through to 'unknown'.
    }
    if (
      bodyErrorText === 'invalid_token' ||
      bodyErrorText === 'invalid_issuer' ||
      bodyErrorText === 'Invalid parameter'
    ) {
      return new AridhiaError(bodyErrorText, bodyErrorText, {
        httpStatus,
        // A malformed request body is our bug, not the user's account state.
        isEligibilityFailure: bodyErrorText !== 'Invalid parameter',
      })
    }
    // An unrecognized error shape (e.g. a FAIR-side validation error on `/requests/`, which
    // uses a different envelope than the gateway's `/authenticate`) — keep `code: 'unknown'`
    // but surface the server's own text verbatim so the caller can quote it.
    return new AridhiaError(
      'unknown',
      bodyErrorText ?? `Aridhia request failed (${httpStatus})`,
      { httpStatus },
    )
  }
  return new AridhiaError(
    'unknown',
    error instanceof Error ? error.message : 'Unknown Aridhia error',
  )
}

/**
 * Resolves the `AridhiaContext` and the current Synapse access token, exchanges it for a fresh
 * Aridhia token (tokens are single-use — see `aridhiaTokenExchange.ts`), and returns a `run`
 * function that executes a call with the resulting `Configuration`, normalizing any failure into
 * an `AridhiaError`.
 */
function useAridhiaCall(): {
  /** `!!synapseAccessToken && !!aridhiaContext` — every read and write is gated on this. */
  enabled: boolean
  run: <T>(fn: (config: Configuration) => Promise<T>) => Promise<T>
} {
  const aridhiaContext = useAridhiaContextOptional()
  const { accessToken: synapseAccessToken } = useSynapseContext()

  return {
    enabled: !!synapseAccessToken && !!aridhiaContext,
    run: async <T>(fn: (config: Configuration) => Promise<T>): Promise<T> => {
      if (!synapseAccessToken || !aridhiaContext) {
        throw new AridhiaError(
          'not_configured',
          'AridhiaContext is not available, or no Synapse access token is present. Make sure to wrap your component with AridhiaContextProvider.',
        )
      }
      try {
        const configuration = await createAridhiaApiConfiguration(
          synapseAccessToken,
          aridhiaContext.apiBasePath,
          aridhiaContext.authenticationRequest,
        )
        return await fn(configuration)
      } catch (error) {
        throw await toAridhiaError(error)
      }
    },
  }
}

/**
 * Shared query primitive for every Aridhia (C-Path FAIR) read: resolves the `AridhiaContext` and
 * the current Synapse access token, exchanges it for a fresh Aridhia token (tokens are
 * single-use — see `aridhiaTokenExchange.ts`), runs `queryFn` with the resulting `Configuration`,
 * and normalizes any failure into an `AridhiaError`.
 */
export function useAridhiaQuery<T>(
  queryKey: QueryKey,
  queryFn: (config: Configuration) => Promise<T>,
  options?: Partial<UseQueryOptions<T, AridhiaError, T>>,
): UseQueryResult<T, AridhiaError> {
  const { enabled: baseEnabled, run } = useAridhiaCall()
  // Composed, not overridden: a caller's `enabled` (e.g. "workflowKey is known yet") can only
  // narrow when the query runs, never bypass the token/context prerequisite.
  const { enabled: callerEnabled, ...restOptions } = options ?? {}
  const enabled =
    callerEnabled === undefined ? baseEnabled : baseEnabled && !!callerEnabled

  return useQuery<T, AridhiaError, T>({
    ...restOptions,
    enabled,
    queryKey,
    queryFn: () => run(queryFn),
  })
}

/**
 * Shared mutation primitive for every Aridhia (C-Path FAIR) write: resolves the `AridhiaContext`
 * and the current Synapse access token, exchanges it for a fresh Aridhia token (tokens are
 * single-use — see `aridhiaTokenExchange.ts`), runs `mutationFn` with the resulting
 * `Configuration` and the mutation variables, and normalizes any failure into an `AridhiaError`.
 */
export function useAridhiaMutation<TData, TVariables = void>(
  mutationFn: (config: Configuration, variables: TVariables) => Promise<TData>,
  options?: Partial<UseMutationOptions<TData, AridhiaError, TVariables>>,
): UseMutationResult<TData, AridhiaError, TVariables> {
  const { run } = useAridhiaCall()

  return useMutation<TData, AridhiaError, TVariables>({
    ...options,
    mutationFn: variables => run(config => mutationFn(config, variables)),
  })
}
