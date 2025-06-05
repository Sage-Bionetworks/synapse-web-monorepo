import 'vitest'
import { QueryKey } from '@tanstack/react-query'

interface CustomMatchers<R = unknown> {
  toMatchQueryKey: (queryKey: QueryKey) => R
}

declare module 'vitest' {
  type Matchers<T = any> = CustomMatchers<T>
}
