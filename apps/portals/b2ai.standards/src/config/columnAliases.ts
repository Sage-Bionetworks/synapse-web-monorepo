import {
  DST_TABLE_COLUMN_CONSTS,
  ORG_TABLE_COLUMN_CONSTS,
} from '@/config/resources'

export default {
  [DST_TABLE_COLUMN_CONSTS.RELEVANT_ORG_NAMES]: 'Relevant Organizations',
  [DST_TABLE_COLUMN_CONSTS.MATURE]: 'Maturity',
  [DST_TABLE_COLUMN_CONSTS.RESPONSIBLE_ORG_LINKS]: 'Responsible Organizations',
  [DST_TABLE_COLUMN_CONSTS.RELEVANT_ORG_LINKS]: 'Relevant Organizations',
  [DST_TABLE_COLUMN_CONSTS.APPLICATION_COUNT]: 'AI Applications Count',
  [DST_TABLE_COLUMN_CONSTS.AI_APP_MARKDOWN]: 'AI Applications',
  standardName: 'Name of Standard',
  isOpen: 'Is Open?',
  registration: 'Requires Registration?',
  topic: 'Topics',

  [ORG_TABLE_COLUMN_CONSTS.NAME]: 'Name',
  [ORG_TABLE_COLUMN_CONSTS.ROR_ID]: 'ROR ID',
  [ORG_TABLE_COLUMN_CONSTS.WIKIDATA_ID]: 'Wikidata ID',
  [ORG_TABLE_COLUMN_CONSTS.SUBCLASS_OF]: 'Subclass Of',
}
