/**
 * Documents the possible EntityFinder version selection configurations
 */
export enum VersionSelectionType {
  /** Versions cannot be selected. In dual-pane mode, the version column will not be shown. */
  DISALLOWED = 'DISALLOWED',
  /** A numbered version must be selected. The current version of tables will not be shown. */
  REQUIRED = 'REQUIRED',
  /**
   * Versions can be selected, including "Always Latest" version for any versionable entity type.
   * This should be selected if updates to the entity will not be "tracked" by the use case,
   * i.e. the widget will update when the entity is updated.
   */
  TRACKED = 'TRACKED',
  /**
   * Versions can be selected. Tables and views will allow selection of the "Current"/"Draft" version.
   * This should be selected if updates to the entity will not be "tracked" by the use case.
   */
  UNTRACKED = 'UNTRACKED',
}
