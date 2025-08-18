import { Mock } from 'vitest'

/**
 * Custom matchers for testing whether mock/spy React components have been rendered with specific props.
 */

expect.extend({
  toHaveBeenRendered(mockComponent: Mock) {
    try {
      expect(mockComponent).toHaveBeenCalled()
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
  toHaveBeenRenderedWithProps(mockComponent: Mock, expectedProps: unknown) {
    try {
      expect(mockComponent).toHaveBeenCalledWith(expectedProps, undefined)
    } catch (error) {
      return {
        pass: false,
        message: () =>
          `Component was not rendered with expected props:\n  ${error.message}`,
      }
    }

    return {
      pass: true,
      message: () => 'Component was rendered with expected props',
    }
  },
  toHaveBeenLastRenderedWithProps(mockComponent: Mock, expectedProps: unknown) {
    try {
      expect(mockComponent).toHaveBeenLastCalledWith(expectedProps, undefined)
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
