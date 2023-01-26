import {
  DATASET_CONCRETE_TYPE_VALUE,
  DATASET_COLLECTION_CONCRETE_TYPE_VALUE,
  ENTITY_VIEW_CONCRETE_TYPE_VALUE,
  SUBMISSION_VIEW_CONCRETE_TYPE_VALUE,
} from '.'
import { Table } from './Table'

export const VIEW_CONCRETE_TYPE_VALUES = [
  ENTITY_VIEW_CONCRETE_TYPE_VALUE,
  SUBMISSION_VIEW_CONCRETE_TYPE_VALUE,
  DATASET_CONCRETE_TYPE_VALUE,
  DATASET_COLLECTION_CONCRETE_TYPE_VALUE,
] as const

export type VIEW_CONCRETE_TYPE = typeof VIEW_CONCRETE_TYPE_VALUES[number]

// https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/View.html

// The View interface only exists in
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface View extends Table {
  concreteType: VIEW_CONCRETE_TYPE
}
