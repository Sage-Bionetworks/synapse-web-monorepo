import { Entity } from './Entity'

// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/ListWrapper.html
export type ListWrapper<T extends Entity> = {
  concreteType: string
  list: T[] // The array of entities returned
}
