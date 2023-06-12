/**
 * Makes the properties of a type writable i.e. removes the `readonly` type property.
 *
 * Sourced from https://stackoverflow.com/a/43001581
 */
export type Writable<T> = { -readonly [P in keyof T]: T[P] }
