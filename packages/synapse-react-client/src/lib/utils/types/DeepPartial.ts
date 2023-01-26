/**
 * Type that recursively makes all properties in an object optional. Use sparingly, as this is computationally expensive.
 * Implementation: https://stackoverflow.com/questions/61132262/typescript-deep-partial
 * Performance issues: https://github.com/microsoft/TypeScript/issues/35729
 */
export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>
    }
  : T

export default DeepPartial
