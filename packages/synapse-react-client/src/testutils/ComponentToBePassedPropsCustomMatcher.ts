import { Mock } from 'vitest'
import { screen } from '@testing-library/react'
import { Map as ImmutableMap, Set as ImmutableSet } from 'immutable'

/**
 * Custom matchers for testing whether mock/spy React components have been rendered with specific props.
 */

/**
 * Filters out React 19 internal props that contain circular references or are not relevant for testing.
 * React 19 adds internal properties like _store, _owner, ref callbacks, etc. that can cause circular structure errors.
 */
function filterReactInternalProps(obj: any): any {
  if (obj === null || obj === undefined) {
    return obj
  }

  // Don't filter Day.js objects - they need to be preserved for comparison
  if (
    obj &&
    typeof obj === 'object' &&
    typeof obj.format === 'function' &&
    typeof obj.isValid === 'function'
  ) {
    return obj
  }

  // Handle Date objects - keep as-is
  if (obj instanceof Date) {
    return obj
  }

  // Handle immutable Map objects - recursively filter their values but keep as immutable Map
  if (ImmutableMap.isMap(obj)) {
    return obj.map((value: any) => filterReactInternalProps(value))
  }

  // Handle immutable Set objects - recursively filter their values but keep as immutable Set
  if (ImmutableSet.isSet(obj)) {
    return obj.map((value: any) => filterReactInternalProps(value))
  }

  // Handle native Map objects - recursively filter their values but keep as Map
  if (obj instanceof Map) {
    const filteredMap = new Map()
    obj.forEach((value, key) => {
      filteredMap.set(key, filterReactInternalProps(value))
    })
    return filteredMap
  }

  // Handle native Set objects - recursively filter their values but keep as Set
  if (obj instanceof Set) {
    const filteredSet = new Set()
    obj.forEach(value => {
      filteredSet.add(filterReactInternalProps(value))
    })
    return filteredSet
  }

  if (typeof obj !== 'object') {
    return obj
  }

  if (Array.isArray(obj)) {
    return obj.map(filterReactInternalProps)
  }

  const filtered: any = {}
  for (const key in obj) {
    // Skip React internals and properties with circular references
    if (
      key === '$$typeof' ||
      key === '_owner' ||
      key === '_store' ||
      key === '_self' ||
      key === '_source' ||
      (key === 'ref' && typeof obj[key] === 'function')
    ) {
      continue
    }

    try {
      // Try to access and filter the property
      const value = obj[key]
      if (typeof value === 'function') {
        // Keep functions but don't recurse into them
        filtered[key] = value
      } else if (typeof value === 'object' && value !== null) {
        // Recursively filter nested objects
        filtered[key] = filterReactInternalProps(value)
      } else {
        filtered[key] = value
      }
    } catch (e) {
      // Skip properties that throw errors when accessed
      continue
    }
  }

  return filtered
}

/**
 * Custom equality check that works with vitest matchers like expect.objectContaining()
 * Converts immutable structures in actual values to plain JS since vitest's expect().toEqual()
 * doesn't handle them natively. Expected values are left untouched to preserve asymmetric matchers.
 */
function matchesExpectation(actual: any, expected: any): boolean {
  try {
    // Only convert the actual value - leave expected untouched to preserve asymmetric matchers
    // When expected contains expect.objectContaining() or other matchers, vitest needs to see
    // them as-is. However, those matchers will have immutable Maps inside their 'sample' property,
    // so we need to convert those too.
    const actualForComparison = convertImmutableToJS(actual)
    const expectedForComparison = convertImmutableInAsymmetricMatchers(expected)

    // Use expect().toEqual() to leverage vitest's built-in matcher support
    expect(actualForComparison).toEqual(expectedForComparison)
    return true
  } catch {
    return false
  }
}

/**
 * Recursively convert immutable Maps and Sets to plain JS objects and arrays.
 * This is needed because vitest's expect().toEqual() doesn't handle immutable structures natively.
 */
function convertImmutableToJS(obj: any): any {
  if (obj === null || obj === undefined) {
    return obj
  }

  // Handle immutable Map
  if (ImmutableMap.isMap(obj)) {
    const plain: any = {}
    obj.forEach((value: any, key: any) => {
      plain[key] = convertImmutableToJS(value)
    })
    return plain
  }

  // Handle immutable Set
  if (ImmutableSet.isSet(obj)) {
    return obj.toArray().map((v: any) => convertImmutableToJS(v))
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    return obj.map(convertImmutableToJS)
  }

  // Handle plain objects
  if (typeof obj === 'object' && obj.constructor === Object) {
    const converted: any = {}
    for (const key in obj) {
      converted[key] = convertImmutableToJS(obj[key])
    }
    return converted
  }

  // Return as-is for primitives and other types
  return obj
}

/**
 * Convert immutable structures inside asymmetric matchers (like expect.objectContaining).
 * Asymmetric matchers have a 'sample' property containing the expected values.
 * We need to convert immutable structures in the sample, but preserve the matcher structure.
 * This must handle nested matchers and nested immutable structures.
 */
function convertImmutableInAsymmetricMatchers(obj: any): any {
  if (obj === null || obj === undefined) {
    return obj
  }

  // Check if this is an asymmetric matcher (has 'sample' and 'inverse' properties)
  if (typeof obj === 'object' && 'sample' in obj && 'inverse' in obj) {
    // We need to preserve ALL properties including Symbols like $$typeof
    // Using spread operator would lose Symbols, so we need to copy them explicitly
    const converted: any = {}

    // Copy all own properties (including non-enumerable ones and Symbols)
    for (const key of Object.getOwnPropertyNames(obj)) {
      if (key === 'sample') {
        converted[key] = convertImmutableInAsymmetricMatchers(obj[key])
      } else {
        converted[key] = obj[key]
      }
    }

    // Copy all Symbol properties
    for (const sym of Object.getOwnPropertySymbols(obj)) {
      converted[sym] = obj[sym]
    }

    // Preserve the prototype chain
    Object.setPrototypeOf(converted, Object.getPrototypeOf(obj))

    return converted
  }

  // Convert immutable Maps to plain objects
  if (ImmutableMap.isMap(obj)) {
    const plain: any = {}
    obj.forEach((value: any, key: any) => {
      plain[key] = convertImmutableInAsymmetricMatchers(value)
    })
    return plain
  }

  // Convert immutable Sets to arrays
  if (ImmutableSet.isSet(obj)) {
    return obj
      .toArray()
      .map((v: any) => convertImmutableInAsymmetricMatchers(v))
  }

  // For arrays, recursively check elements
  if (Array.isArray(obj)) {
    return obj.map(convertImmutableInAsymmetricMatchers)
  }

  // For plain objects, recursively check properties
  if (typeof obj === 'object' && obj.constructor === Object) {
    const converted: any = {}
    for (const key in obj) {
      converted[key] = convertImmutableInAsymmetricMatchers(obj[key])
    }
    return converted
  }

  // Return as-is for everything else (primitives, functions, etc.)
  return obj
}

/**
 * Convert value to string for error messages, handling special types like Map, Set, Day.js
 * This needs to recursively handle nested structures before JSON.stringify to avoid
 * immutable Map/Set's toJSON() methods converting them to plain objects.
 */
function valueToString(value: any, indent: number = 2): string {
  try {
    // Handle immutable Map
    if (ImmutableMap.isMap(value)) {
      const entries = value
        .entrySeq()
        .toArray()
        .map(
          ([k, v]: [any, any]) =>
            `  ${JSON.stringify(k)}: ${valueToString(v, 0)}`,
        )
        .join(',\n')
      return `Map {\n${entries}\n}`
    }

    // Handle immutable Set
    if (ImmutableSet.isSet(value)) {
      const values = value
        .toArray()
        .map((v: any) => valueToString(v, 0))
        .join(', ')
      return `Set { ${values} }`
    }

    // Handle native Map
    if (value instanceof Map) {
      const entries = Array.from(value.entries())
        .map(([k, v]) => `  ${JSON.stringify(k)}: ${valueToString(v, 0)}`)
        .join(',\n')
      return `Map {\n${entries}\n}`
    }

    // Handle native Set
    if (value instanceof Set) {
      const values = Array.from(value)
        .map(v => valueToString(v, 0))
        .join(', ')
      return `Set { ${values} }`
    }

    // Handle Day.js
    if (
      value &&
      typeof value === 'object' &&
      typeof value.format === 'function' &&
      typeof value.isValid === 'function'
    ) {
      return value.format ? value.format() : String(value)
    }

    // Handle functions
    if (typeof value === 'function') {
      return '[Function]'
    }

    // Handle arrays - recursively process elements
    if (Array.isArray(value)) {
      const elements = value.map(v => valueToString(v, 0))
      return `[${elements.join(', ')}]`
    }

    // Handle plain objects - recursively process properties
    // Need to do this before JSON.stringify to avoid Map/Set toJSON() calls
    if (value && typeof value === 'object') {
      const props = Object.keys(value)
        .map(key => {
          const val = value[key]
          return `  "${key}": ${valueToString(val, 0)}`
        })
        .join(',\n')
      return `{\n${props}\n}`
    }

    // Handle primitives
    return JSON.stringify(value, null, indent)
  } catch (e) {
    return String(value)
  }
}

expect.extend({
  toHaveBeenRendered(mockComponent: Mock) {
    try {
      if (mockComponent.mock.calls.length === 0) {
        throw new Error('Component not rendered')
      }
    } catch (error) {
      return {
        pass: false,
        message: () => `Component was not rendered:\n  ${error.message}`,
      }
    }
    return {
      pass: true,
      message: () => 'Component was rendered',
    }
  },
  toHaveBeenRenderedWithProps(
    mockComponent: Mock,
    expectedProps: unknown,
    options?: { testId?: string },
  ) {
    try {
      const wasCalledWithProps = mockComponent.mock.calls.some(call => {
        const actualProps = filterReactInternalProps(call[0])

        // Use matchesExpectation which leverages expect().toEqual()
        // to properly handle asymmetric matchers like expect.objectContaining()
        return matchesExpectation(actualProps, expectedProps)
      })

      if (!wasCalledWithProps) {
        // Provide more detail about why the match failed
        const actualCallsInfo = mockComponent.mock.calls
          .map((call, index) => {
            const actualProps = filterReactInternalProps(call[0])
            return `Call ${index + 1}: ${valueToString(actualProps)}`
          })
          .join('\n')

        throw new Error(
          `Not called with expected props\n\nExpected props:\n${valueToString(
            expectedProps,
          )}\n\nActual calls:\n${actualCallsInfo}`,
        )
      }
    } catch (error) {
      return {
        pass: false,
        message: () =>
          `Component was not rendered with expected props:\n  ${error.message}`,
      }
    }

    // If testId is provided, also verify the element exists in the DOM
    if (options?.testId) {
      try {
        screen.getByTestId(options.testId)
      } catch (error) {
        return {
          pass: false,
          message: () =>
            `Component was rendered with expected props but element with testId "${options.testId}" was not found in the DOM:\n  ${error.message}`,
        }
      }
    }

    return {
      pass: true,
      message: () =>
        'Component was rendered with expected props' +
        (options?.testId ? ' and found in DOM' : ''),
    }
  },
  toHaveBeenLastRenderedWithProps(mockComponent: Mock, expectedProps: unknown) {
    try {
      const lastCall =
        mockComponent.mock.calls[mockComponent.mock.calls.length - 1]
      if (!lastCall) {
        throw new Error('Component was never called')
      }

      const actualProps = filterReactInternalProps(lastCall[0])

      // Use matchesExpectation which leverages expect().toEqual()
      // to properly handle asymmetric matchers like expect.objectContaining()
      if (!matchesExpectation(actualProps, expectedProps)) {
        // Only show actual props since expected might contain asymmetric matchers
        // that don't serialize well (e.g., expect.objectContaining). The vitest error
        // will show the full comparison.
        throw new Error(
          `Not last called with expected props\n\nActual props (last call):\n${valueToString(
            actualProps,
          )}`,
        )
      }
    } catch (error) {
      return {
        pass: false,
        message: () =>
          `Component was not last rendered with expected props:\n  ${error.message}`,
      }
    }

    return {
      pass: true,
      message: () => 'Component was last rendered with expected props',
    }
  },
})
