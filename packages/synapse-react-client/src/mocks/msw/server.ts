import { http } from 'msw'
import { setupServer } from 'msw/node'
import { afterAll, afterEach, beforeAll } from 'vitest'
import { handlers } from './handlers'

const server = setupServer(...handlers)

// Importing this module from a test file starts the server for that file. Test files that never import it
// pay nothing, because the server (and every handler fixture) is only loaded when it is needed.
//
// Requests with no matching handler fail the test instead of silently reaching the network.
// `resetHandlers` (not `restoreHandlers`) drops `server.use` overrides, so they cannot leak between tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

export { server, http }
