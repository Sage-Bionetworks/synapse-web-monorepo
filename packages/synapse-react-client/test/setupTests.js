'use strict'
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
exports.__esModule = true
require('whatwg-fetch')
require('raf/polyfill') // polyfill for requestAnimationFrame
require('@testing-library/jest-dom/extend-expect')
var crypto_1 = require('crypto')
var resize_observer_1 = require('@juggle/resize-observer')
var test_utils_1 = require('react-intersection-observer/test-utils')
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
global.ResizeObserver = resize_observer_1.ResizeObserver
;(0, test_utils_1.setupIntersectionMocking)(jest.fn)
var oldWindowLocation = window.location
/**
 * Mock `window.location` so we can verify interactions in tests
 * See https://www.benmvp.com/blog/mocking-window-location-methods-jest-jsdom/
 */
beforeAll(function () {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - TS doesn't allow us to delete location. Not an issue because we're immediately replacing it with the mock
  delete window.location
  window.location = Object.defineProperties(
    {},
    __assign(
      __assign({}, Object.getOwnPropertyDescriptors(oldWindowLocation)),
      {
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
    ),
  )
})
afterAll(function () {
  // restore `window.location` to the original `jsdom`
  // `Location` object
  window.location = oldWindowLocation
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
    getRandomValues: function (arr) {
      return crypto_1['default'].randomBytes(arr.length)
    },
  },
})
