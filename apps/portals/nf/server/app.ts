import 'react-router'
import { createRequestHandler } from '@react-router/express'
import express, { type Express } from 'express'
import type { ServerBuild } from 'react-router'

export const app: Express = express()

app.use(
  createRequestHandler({
    // In production, this import is resolved to the compiled server build.
    // In development, Vite's ssrLoadModule handles it.
    build: () => import('virtual:react-router/server-build'),
    getLoadContext: () => ({
      serverBuild: () =>
        import('virtual:react-router/server-build') as Promise<ServerBuild>,
    }),
  }),
)

declare module 'react-router' {
  interface AppLoadContext {
    serverBuild: () => Promise<ServerBuild>
  }
}
