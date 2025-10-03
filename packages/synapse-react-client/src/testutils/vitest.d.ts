/* eslint-disable @typescript-eslint/no-empty-object-type,@typescript-eslint/no-empty-interface */
import 'vitest'

interface CustomMatchers<R = unknown> {
  toHaveBeenRendered: () => R
  toHaveBeenRenderedWithProps: (
    props: unknown,
    options?: { testId?: string },
  ) => R
  toHaveBeenLastRenderedWithProps: (props: unknown) => R
}

declare module 'vitest' {
  interface Matchers<T = any> extends CustomMatchers<T> {}
}
