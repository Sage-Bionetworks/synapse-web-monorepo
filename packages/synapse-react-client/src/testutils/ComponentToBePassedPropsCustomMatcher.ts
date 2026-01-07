import { Mock } from 'vitest'
import { screen } from '@testing-library/react'

/**
 * Custom matchers for testing whether mock/spy React components have been rendered with specific props.
 */

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
      const wasCalledWithProps = mockComponent.mock.calls.some(
        c => JSON.stringify(c[0]) === JSON.stringify(expectedProps),
      )
      if (!wasCalledWithProps) {
        throw new Error('Not called with expected props')
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
      if (
        !lastCall ||
        JSON.stringify(lastCall[0]) !== JSON.stringify(expectedProps)
      ) {
        throw new Error('Not last called with expected props')
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
