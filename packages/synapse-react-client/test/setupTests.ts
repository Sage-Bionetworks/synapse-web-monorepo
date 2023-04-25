import 'whatwg-fetch'
import 'raf/polyfill' // polyfill for requestAnimationFrame
import '@testing-library/jest-dom/extend-expect'
import crypto from 'crypto'
import { ResizeObserver } from '@juggle/resize-observer'
import { setupIntersectionMocking } from 'react-intersection-observer/test-utils'

// MarkdownSynapse dependencies below --
// When using the component in production it relies on these imports being globals,
// however, the testing environment doesn't have a browser loading CDNs, so we
// import it below. This also means that these dependencies are required in package.json
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
global.ResizeObserver = ResizeObserver

setupIntersectionMocking(jest.fn)

const oldWindowLocation = window.location
const oldWindowOpen = window.open

/**
 * Mock `window.location` so we can verify interactions in tests
 * See https://www.benmvp.com/blog/mocking-window-location-methods-jest-jsdom/
 */
beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - TS doesn't allow us to delete location. Not an issue because we're immediately replacing it with the mock
  delete window.location
  window.location = Object.defineProperties(
    {},
    {
      ...Object.getOwnPropertyDescriptors(oldWindowLocation),
      // Each method must be manually mocked
      assign: {
        configurable: true,
        value: jest.fn(),
      },
      replace: {
        configurable: true,
        value: jest.fn(),
      },
    },
  ) as Location

  delete window.open
  window.open = jest.fn()
})
afterAll(() => {
  // restore `window.location` to the original `jsdom`
  // `Location` object
  window.location = oldWindowLocation
  window.open = oldWindowOpen
})
// Synapse API calls may take longer than 5s (typically if a dependent call is taking much longer than normal)
jest.setTimeout(30000)

// JSDOM doesn't support createObjectURL and revokeObjectURL, so we shim them
// https://github.com/jsdom/jsdom/issues/1721
window.URL.createObjectURL = jest
  .fn()
  .mockReturnValue('blob:mockBlobUrlConfiguredInTestSetup')
window.URL.revokeObjectURL = jest.fn()
window.scrollTo = jest.fn()

Element.prototype.scrollTo = jest.fn()

// crypto.getRandomValues polyfill for JSDOM
Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: arr => crypto.randomBytes(arr.length),
  },
})
