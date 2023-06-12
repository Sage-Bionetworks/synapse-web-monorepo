import type { Entity } from './Entity'

export const PROJECT_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.Project'
export type PROJECT_CONCRETE_TYPE = typeof PROJECT_CONCRETE_TYPE_VALUE

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/Project.html
export interface Project extends Entity {
  concreteType: PROJECT_CONCRETE_TYPE
  /* The project alias for use in friendly project urls. */
  alias?: string
}
