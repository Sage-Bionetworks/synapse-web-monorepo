import 'vitest-browser-react'
import '@testing-library/jest-dom/vitest'
import { afterAll, afterEach, beforeAll } from 'vitest'
import { worker } from '../mocks/browser'

beforeAll(async () => {
  await worker.start({ quiet: true, onUnhandledRequest: 'error' })
})

afterEach(() => {
  worker.resetHandlers()
})

afterAll(() => {
  worker.stop()
})
