import 'raf/polyfill' // polyfill for requestAnimationFrame
import 'whatwg-fetch'

declare var global: any
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

// Line below is used because plotly has a dependency on mapbox-gl
// which requires a browser env and doesn't provide support for headless
// js testing, so we shim the function below.
// View - https://github.com/mapbox/mapbox-gl-js/issues/3436
window.URL.createObjectURL = function () {
  return ''
}

// JSDOM doesn't implement window.matchMedia
// https://stackoverflow.com/a/53449595
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: any) => ({
    matches: true,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }),
})

Element.prototype.scrollIntoView = jest.fn()

const oldWindowLocation = window.location
/**
 * Mock `window.location` so we can verify interactions in tests
 * See https://www.benmvp.com/blog/mocking-window-location-methods-jest-jsdom/
 */
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

const localStorageMock = (function () {
  let store = {}
  return {
    getItem: function (key: string) {
      return store[key]
    },
    setItem: function (key: string, value: string) {
      store[key] = value.toString()
    },
    clear: function () {
      store = {}
    },
    removeItem: function (key: string) {
      delete store[key]
    },
  }
})()
Object.defineProperty(window, 'localStorage', { value: localStorageMock })
