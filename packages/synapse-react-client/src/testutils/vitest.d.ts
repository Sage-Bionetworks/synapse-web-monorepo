/* eslint-disable @typescript-eslint/no-empty-object-type */
import 'vitest'
import { QueryKey } from '@tanstack/react-query'

interface CustomMatchers<R = unknown> {
  toMatchQueryKey: (queryKey: QueryKey) => R
}

declare module 'vitest' {
  type Assertion<T = any> = CustomMatchers<T>
  interface AsymmetricMatchersContaining extends CustomMatchers {}
  type Matchers<T = any> = CustomMatchers<T>
}
