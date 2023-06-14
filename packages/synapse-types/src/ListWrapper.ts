import { Entity } from './Entity'
import { Team } from './Team'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/ListWrapper.html
export type ListWrapper<T = Team | Entity> = {
  concreteType?: string
  list: T[] // The array of teams or entities returned
}
