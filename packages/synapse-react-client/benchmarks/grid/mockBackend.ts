import type { Page, Route, WebSocketRoute } from '@playwright/test'
import {
  LOCAL_REPLICA_ID,
  MOCK_GRID_WS_ORIGIN,
  MOCK_REPO_ORIGIN,
  SESSION_ID,
  SOURCE_REPLICA_ID,
  USER_ID,
} from './config'

const SERVICE_USER_ID = '2000'
const ASYNC_JOB_TOKEN = 'benchmark-job'

export type ReceivedPatch = {
  /** `Date.now()` when the frame reached the mock server. */
  receivedAt: number
  requestId: number
  frame: string
}

export type MockGridServer = {
  patches: ReceivedPatch[]
  /** `Date.now()` of each `synchronize-clock` request, in order. */
  clockSyncsAt: number[]
  /** Requests that no mock answered: REST calls without a handler, and aborted off-origin requests. */
  unhandledRequests: string[]
}

const replica = {
  gridSessionId: SESSION_ID,
  replicaId: LOCAL_REPLICA_ID,
  createdBy: USER_ID,
  createdOn: '2026-01-01T00:00:00.000Z',
  isAgentReplica: false,
}

const gridSession = {
  sessionId: SESSION_ID,
  startedBy: USER_ID,
  startedOn: '2026-01-01T00:00:00.000Z',
  modifiedOn: '2026-01-01T00:00:00.000Z',
  etag: 'benchmark',
  ownerPrincipalId: USER_ID,
  lastReplicaIdService: SOURCE_REPLICA_ID,
  lastReplicaIdClient: LOCAL_REPLICA_ID,
}

function userProfile(ownerId: string) {
  return {
    ownerId,
    userName: `benchmark-user-${ownerId}`,
    firstName: 'Benchmark',
    lastName: ownerId,
    etag: 'benchmark',
  }
}

/** Minimal valid responses for every call `SynapseGrid` makes, keyed by `METHOD path-regex`. */
const REST_HANDLERS: [
  method: string,
  path: RegExp,
  body: (match: RegExpMatchArray) => unknown,
][] = [
  [
    'GET',
    /^\/repo\/v1\/user\/bundle$/,
    () => ({
      userId: USER_ID,
      userProfile: userProfile(USER_ID),
      isCertified: true,
      isVerified: true,
      isACTMember: false,
    }),
  ],
  ['GET', /^\/repo\/v1\/userProfile\/(\d+)$/, match => userProfile(match[1])],
  ['GET', /^\/repo\/v1\/userProfile$/, () => userProfile(USER_ID)],
  [
    'POST',
    /^\/repo\/v1\/grid\/session\/async\/start$/,
    () => ({ token: ASYNC_JOB_TOKEN }),
  ],
  [
    'GET',
    new RegExp(`^/repo/v1/asynchronous/job/${ASYNC_JOB_TOKEN}$`),
    () => ({
      jobId: ASYNC_JOB_TOKEN,
      jobState: 'COMPLETE',
      startedByUserId: Number(USER_ID),
      responseBody: {
        concreteType: 'org.sagebionetworks.repo.model.grid.CreateGridResponse',
        gridSession,
      },
    }),
  ],
  [
    'POST',
    new RegExp(`^/repo/v1/grid/session/${SESSION_ID}/replica$`),
    () => ({ replica }),
  ],
  [
    'POST',
    new RegExp(`^/repo/v1/grid/session/${SESSION_ID}/replica/list$`),
    () => ({
      page: [
        {
          replicaId: SOURCE_REPLICA_ID,
          createdBy: SERVICE_USER_ID,
          isConnected: true,
          replicaType: 'SERVICE',
        },
        {
          replicaId: LOCAL_REPLICA_ID,
          createdBy: USER_ID,
          isConnected: true,
          replicaType: 'USER',
        },
      ],
    }),
  ],
  [
    'POST',
    new RegExp(`^/repo/v1/grid/session/${SESSION_ID}/presigned/url$`),
    () => ({
      presignedUrl: `${MOCK_GRID_WS_ORIGIN}/${SESSION_ID}?replicaId=${LOCAL_REPLICA_ID}`,
    }),
  ],
]

function corsHeaders(route: Route): Record<string, string> {
  const headers = route.request().headers()
  return {
    'Access-Control-Allow-Origin': headers['origin'] ?? '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers':
      headers['access-control-request-headers'] ?? '*',
  }
}

async function handleRest(route: Route, unhandled: string[]) {
  const request = route.request()
  const headers = corsHeaders(route)
  if (request.method() === 'OPTIONS') {
    await route.fulfill({ status: 204, headers })
    return
  }
  const { pathname } = new URL(request.url())
  for (const [method, pattern, body] of REST_HANDLERS) {
    const match = request.method() === method && pathname.match(pattern)
    if (match) {
      return route.fulfill({ status: 200, headers, json: body(match) })
    }
  }
  unhandled.push(`${request.method()} ${request.url()}`)
  await route.fulfill({
    status: 404,
    headers,
    json: { reason: 'Not mocked by the grid benchmark' },
  })
}

/**
 * The grid service side of the JSON-Rx protocol, for a replica that has no model yet: the first
 * clock sync is answered with the snapshot URL, every later one completes the sync, and every patch
 * is acknowledged at once.
 */
function handleGridSocket(
  ws: WebSocketRoute,
  snapshotUrl: string,
  server: MockGridServer,
) {
  let snapshotSent = false
  ws.onMessage(message => {
    const receivedAt = Date.now()
    const frame = typeof message === 'string' ? message : message.toString()
    const [type, requestId, method] = JSON.parse(frame) as [
      number,
      number,
      string,
    ]
    if (type !== 1) return
    if (method === 'patch') {
      server.patches.push({ receivedAt, requestId, frame })
      ws.send(JSON.stringify([5, requestId]))
    } else if (method === 'synchronize-clock') {
      server.clockSyncsAt.push(receivedAt)
      if (snapshotSent) {
        ws.send(JSON.stringify([5, requestId]))
      } else {
        snapshotSent = true
        ws.send(
          JSON.stringify([
            4,
            requestId,
            { type: 'snapshot', body: snapshotUrl },
          ]),
        )
      }
    }
  })
  ws.send(JSON.stringify([8, 'connected']))
}

/**
 * Routes every network call the benchmark story makes. REST calls to the mock stack and the grid
 * websocket are answered here; the static server answers same-origin requests; anything else is
 * aborted so the run never reaches a real backend.
 */
export async function installMockBackend(
  page: Page,
  { localOrigin, snapshotUrl }: { localOrigin: string; snapshotUrl: string },
): Promise<MockGridServer> {
  const server: MockGridServer = {
    patches: [],
    clockSyncsAt: [],
    unhandledRequests: [],
  }
  // Playwright tries the most recently registered route first, so the catch-all goes first.
  await page.route(
    url => !url.href.startsWith(localOrigin),
    async route => {
      server.unhandledRequests.push(`aborted ${route.request().url()}`)
      await route.abort()
    },
  )
  await page.route(`${MOCK_REPO_ORIGIN}/**`, route =>
    handleRest(route, server.unhandledRequests),
  )
  await page.routeWebSocket(`${MOCK_GRID_WS_ORIGIN}/**`, ws =>
    handleGridSocket(ws, snapshotUrl, server),
  )
  return server
}
