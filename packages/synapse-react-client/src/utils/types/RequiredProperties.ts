/**
 * Makes fields for a type required.
 * For example:
 *
 * type FooBarBaz = {
 *   foo: string
 *   bar?: string
 *   baz?: string
 * }
 *
 * To require the 'baz' property
 * type RequireBar = RequiredProperties<FooBarBaz, 'baz'>
 * Would result in :
 * RequireBar === {
 *   foo: string
 *   bar?: string
 *   baz: string // this is now required
 * }
 *
 * To require multiple properties, use a String Literal union:
 * type RequireBarBaz = RequiredProperties<FooBarBaz, 'bar' | 'baz'>
 */
export type RequiredProperties<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>
