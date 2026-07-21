/**
 * Documents the possible JsonSchemaPicker version selection configurations.
 */
export enum VersionSelectionType {
  /**
   * A specific, numbered semantic version must be selected. This is the default. Use this when
   * the consumer needs a version reference that will not silently change as new versions of the
   * schema are published.
   */
  REQUIRED = 'REQUIRED',
  /**
   * A specific numbered version may be selected, or the user may choose "Latest" to always
   * reference whichever version of the schema is newest at the time of use.
   */
  LATEST_ALLOWED = 'LATEST_ALLOWED',
}
