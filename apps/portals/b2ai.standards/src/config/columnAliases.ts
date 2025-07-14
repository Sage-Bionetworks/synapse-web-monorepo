import {
  DST_TABLE_COLUMN_NAMES,
  ORG_TABLE_COLUMN_NAMES,
} from '@/config/resources'

export default {
  [DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_NAMES]: 'Relevant Organizations',
  [DST_TABLE_COLUMN_NAMES.MATURE]: 'Maturity',
  standardName: 'Name of Standard',
  isOpen: 'Is Open?',
  registration: 'Requires Registration?',
  topic: 'Topics',

  [ORG_TABLE_COLUMN_NAMES.NAME]: 'Name',
  [ORG_TABLE_COLUMN_NAMES.ROR_ID]: 'ROR ID',
  [ORG_TABLE_COLUMN_NAMES.WIKIDATA_ID]: 'Wikidata ID',
  [ORG_TABLE_COLUMN_NAMES.SUBCLASS_OF]: 'Subclass Of',
}
