// https://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/ListWrapper.html
export type ListWrapper<T> = {
  concreteType: string
  list: T[] // The array of entities returned
}
