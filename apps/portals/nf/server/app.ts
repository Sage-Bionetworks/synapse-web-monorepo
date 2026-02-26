import 'react-router'
import { createRequestHandler } from '@react-router/express'
import express, { type Express } from 'express'

export const app: Express = express()

app.use(
  createRequestHandler({
    // In production, this import is resolved to the compiled server build.
    // In development, Vite's ssrLoadModule handles it.
    build: () => import('virtual:react-router/server-build'),
  }),
)
