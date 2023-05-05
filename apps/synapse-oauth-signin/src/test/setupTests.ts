import fetch from 'isomorphic-fetch' // polyfill for fetch
import { server } from '../mocks/server'
import { cleanup } from '@testing-library/react'
import { afterAll, afterEach, beforeAll, vi } from 'vitest'

declare const global: any
global.markdownit = require('markdown-it')
global.markdownitSynapse = require('markdown-it-synapse')
global.markdownitSub = require('markdown-it-sub-alt')
global.markdownitSup = require('markdown-it-sup-alt')
global.markdownitCentertext = require('markdown-it-center-text')
global.markdownitSynapseHeading = require('markdown-it-synapse-heading')
global.markdownitSynapseTable = require('markdown-it-synapse-table')
global.markdownitStrikethroughAlt = require('markdown-it-strikethrough-alt')
global.markdownitContainer = require('markdown-it-container')
global.markdownitEmphasisAlt = require('markdown-it-emphasis-alt')
global.markdownitInlineComments = require('markdown-it-inline-comments')
global.markdownitBr = require('markdown-it-br')
global.markdownitMath = require('markdown-it-synapse-math')

// Need to add this line
global.fetch = fetch

// Line below is used because plotly has a dependency on mapbox-gl
// which requires a browser env and doesn't provide support for headless
// js testing, so we shim the function below.
// View - https://github.com/mapbox/mapbox-gl-js/issues/3436
window.URL.createObjectURL = function () {
  return ''
}

// Establish API mocking before all tests.
beforeAll(() => server.listen())
// Reset any request handlers that we may add during the tests, so they don't affect other tests.
afterEach(() => server.resetHandlers())
// Clean up after the tests are finished.
afterAll(() => server.close())

// Clean up after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})

// Mock window.location
// https://www.benmvp.com/blog/mocking-window-location-methods-jest-jsdom/
const oldWindowLocation = window.location
beforeAll(() => {
  delete window.location

  window.location = Object.defineProperties(
    {},
    {
      ...Object.getOwnPropertyDescriptors(oldWindowLocation),
      assign: {
        configurable: true,
        value: vi.fn(),
      },
      replace: {
        configurable: true,
        value: vi.fn(),
      },
    },
  )
})
afterAll(() => {
  // restore `window.location` to the original `jsdom`
  // `Location` object
  window.location = oldWindowLocation
})
