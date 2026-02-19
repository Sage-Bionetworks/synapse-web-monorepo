import SynapseClient from '@/synapse-client'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  OAuthTokenIntrospectionResponse,
  RealmPrincipal,
  SynapseClient as SynapseOpenApiClient,
} from '@sage-bionetworks/synapse-client'

const REFRESH_INTERVAL_MS = 60_000

export type SessionState = {
  token: string | undefined
  realmId: string | undefined
  userId: string | undefined
  isAuthenticated: boolean
  hasInitializedSession: boolean
}

export type SynapseSessionManagerOptions = {
  /** The realm that an unauthenticated user should be signed in to. Defaults to "0", the public Synapse realm */
  defaultRealm?: string
  /** If defined, specifies the allowable elapsed time in seconds since the last time the End-User was actively authenticated.
   * If the elapsed time is greater than this value, the session will be cleared and the user will have to re-authenticate. */
  maxAge?: number
  /** Called if the user is not authenticated when the session is initialized. */
  onMissingExpectedAuthentication?: () => void
  /** Called when a stored token fails validation (e.g. expired). Called after the session manager signs out.
   * If not provided, the session manager will call `window.location.reload()` after signing out. */
  onSessionInvalid?: () => void
}

const INITIAL_STATE: SessionState = {
  token: undefined,
  realmId: undefined,
  userId: undefined,
  isAuthenticated: false,
  hasInitializedSession: false,
}

/**
 * Framework-agnostic session manager for Synapse applications.
 *
 * Handles the full session lifecycle: token retrieval from browser cookies,
 * token validation via OAuth2 introspection, periodic refresh, and sign-out.
 *
 * Can be used directly from any JavaScript context (GWT/JsInterop, vanilla JS, etc.)
 * or wrapped by a framework-specific adapter (e.g. a React hook via `useSyncExternalStore`).
 *
 * Implements the external store contract: use {@link subscribe} and {@link getSnapshot}
 * to integrate with React's `useSyncExternalStore`, or any other subscription-based framework.
 */
export class SynapseSessionManager {
  private state: SessionState = INITIAL_STATE
  private listeners = new Set<() => void>()
  private intervalId: ReturnType<typeof setInterval> | null = null
  private options: Required<
    Pick<SynapseSessionManagerOptions, 'defaultRealm'>
  > &
    SynapseSessionManagerOptions

  constructor(options: SynapseSessionManagerOptions = {}) {
    this.options = {
      ...options,
      defaultRealm: options.defaultRealm ?? '0',
    }
    // Bind methods so they can be passed directly to useSyncExternalStore
    this.subscribe = this.subscribe.bind(this)
    this.getSnapshot = this.getSnapshot.bind(this)
  }

  /**
   * Subscribe to state changes. The listener is called whenever session state is updated.
   * @returns an unsubscribe function.
   *
   * Compatible with React's `useSyncExternalStore(manager.subscribe, manager.getSnapshot)`.
   */
  subscribe(listener: () => void): () => void {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }

  /**
   * Get the current session state snapshot. Returns a stable reference that only
   * changes when the state is updated.
   *
   * Compatible with React's `useSyncExternalStore(manager.subscribe, manager.getSnapshot)`.
   */
  getSnapshot(): SessionState {
    return this.state
  }

  /**
   * Update mutable options. Values are read at `refreshSession`/`clearSession` call time,
   * so changes take effect on the next refresh cycle.
   */
  setOptions(
    options: Pick<SynapseSessionManagerOptions, 'defaultRealm' | 'maxAge'>,
  ): void {
    if (options.defaultRealm !== undefined) {
      this.options.defaultRealm = options.defaultRealm
    }
    if (options.maxAge !== undefined) {
      this.options.maxAge = options.maxAge
    }
  }

  /**
   * Start the session manager: performs an initial refresh and sets up the periodic refresh interval.
   */
  start(): void {
    this.refreshSession()
    this.intervalId = setInterval(() => {
      this.refreshSession()
    }, REFRESH_INTERVAL_MS)
  }

  /**
   * Stop the periodic refresh and clean up resources.
   */
  dispose(): void {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId)
      this.intervalId = null
    }
  }

  /**
   * Refresh the session by reading the stored token, validating it, and updating state.
   * If no token is stored, initializes an anonymous session.
   * If the token is invalid, signs out and triggers onSessionInvalid (or reloads the page).
   */
  async refreshSession(): Promise<void> {
    let token = await SynapseSessionManager.getStoredToken()

    if (!token) {
      token = await this.initAnonymousUserState()
    }

    const introspectionResponse = await SynapseSessionManager.validateToken(
      token,
      this.options.maxAge,
    )
    if (introspectionResponse === null) {
      // Token was invalid (e.g. expired). Clear from browser storage and get a fresh anonymous token.
      await SynapseClient.signOut(this.options.defaultRealm)
      if (this.options.onSessionInvalid) {
        this.options.onSessionInvalid()
      } else {
        window.location.reload()
      }
      return
    }

    const currentUserId = introspectionResponse.sub
    const realmPrincipals =
      await SynapseSessionManager.getCurrentRealmPrincipals(token)
    const isAuthenticated = currentUserId !== realmPrincipals.anonymousUser

    /*
      NOTE: It's possible for a user to possess an anonymous token from a different realm (e.g. if they started on an app with a default realm, 
      then navigated to a different app with a different default realm). Currently, we will do nothing, so the user will stay in the realm in which they started.
      We may consider different approaches in the future as new requirements arise, such as
      - Replacing the anonymous token with a new one from the default realm (could cause issues if two apps with different realms are used in different tabs)
      - Storing anonymous tokens per-realm
      - Adding UI to choose a realm or account to use
     */

    this.updateState({
      token,
      hasInitializedSession: true,
      realmId: realmPrincipals.realmId,
      userId: currentUserId,
      isAuthenticated,
    })
  }

  /**
   * Clear the current session by signing out and initializing an anonymous session.
   * Does NOT handle navigation/reload — the caller is responsible for that.
   */
  async clearSession(): Promise<void> {
    await this.initAnonymousUserState()
    await this.refreshSession()
  }

  /**
   * Attempt to get the stored access token from the browser cookie.
   * Returns the token string, or undefined if not found or on error.
   */
  static async getStoredToken(): Promise<string | undefined> {
    try {
      return await SynapseClient.getAccessTokenFromCookie()
    } catch (e) {
      console.error('Unable to get the access token: ', e)
      return undefined
    }
  }

  /**
   * Validate the token by calling the token introspection service.
   * @return the introspection response if valid, or null if the token is invalid
   */
  static async validateToken(
    accessToken: string,
    maxAge?: number,
  ): Promise<OAuthTokenIntrospectionResponse | null> {
    const synapseClient = new SynapseOpenApiClient({
      accessToken,
      basePath: getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
    })
    try {
      const response =
        await synapseClient.openIDConnectServicesClient.postAuthV1Oauth2Introspect(
          {
            oAuthTokenIntrospectionRequest: {
              token: accessToken,
              max_age: maxAge,
            },
          },
        )
      if (!response.active) {
        throw new Error('Token is not active.')
      }
      return response
    } catch (e) {
      console.error(
        'Error validating the access token. Clearing session. Error: ',
        (e as Error).message,
      )
    }

    return null
  }

  /**
   * Get the realm principals for the current token.
   */
  static async getCurrentRealmPrincipals(
    accessToken: string,
  ): Promise<RealmPrincipal> {
    const synapseClient = new SynapseOpenApiClient({
      accessToken,
      basePath: getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
    })
    return synapseClient.realmServicesClient.getRepoV1RealmPrincipals()
  }

  /**
   * Initialize the session for an anonymous user.
   * @return the new anonymous token.
   */
  private async initAnonymousUserState(): Promise<string> {
    if (this.options.onMissingExpectedAuthentication) {
      this.options.onMissingExpectedAuthentication()
    }
    return SynapseClient.signOut(this.options.defaultRealm)
  }

  private updateState(newState: SessionState): void {
    this.state = newState
    this.emitChange()
  }

  private emitChange(): void {
    for (const listener of this.listeners) {
      listener()
    }
  }
}
