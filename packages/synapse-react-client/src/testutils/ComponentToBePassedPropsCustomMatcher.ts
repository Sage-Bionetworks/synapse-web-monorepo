import { Mock } from 'vitest'
import { screen } from '@testing-library/react'

/**
 * Custom matchers for testing whether mock/spy React components have been rendered with specific props.
 */

expect.extend({
  toHaveBeenRendered(mockComponent: Mock) {
    const pass = mockComponent.mock.calls.length > 0
    return {
      pass,
      message: () =>
        pass
          ? 'Component was rendered'
          : `Component was not rendered (expected at least one call)`,
    }
  },
  toHaveBeenRenderedWithProps(
    mockComponent: Mock,
    expectedProps: unknown,
    options?: { testId?: string },
  ) {
    const calls = mockComponent.mock.calls
    const pass = calls.some(
      call => JSON.stringify(call[0]) === JSON.stringify(expectedProps),
    )

    if (!pass) {
      return {
        pass: false,
        message: () =>
          `Component was not rendered with expected props.\nExpected: ${JSON.stringify(
            expectedProps,
          )}\nReceived calls: ${JSON.stringify(calls.map(c => c[0]))}`,
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
    const calls = mockComponent.mock.calls
    const lastCall = calls[calls.length - 1]
    const pass =
      lastCall && JSON.stringify(lastCall[0]) === JSON.stringify(expectedProps)

    return {
      pass,
      message: () =>
        pass
          ? 'Component was last rendered with expected props'
          : `Component was not last rendered with expected props.\nExpected: ${JSON.stringify(
              expectedProps,
            )}\nReceived: ${JSON.stringify(lastCall?.[0])}`,
    }
  },
})
