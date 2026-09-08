import { ResizeObserver } from '@juggle/resize-observer'
import '@testing-library/jest-dom'

// ResizeObserver polyfill for JSDOM
globalThis.ResizeObserver = ResizeObserver

export {}
