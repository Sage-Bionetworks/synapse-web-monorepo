import { FTSConfig } from 'synapse-react-client/components/SynapseTable/SearchV2'

type TableInfo = {
  name: string
  id: string
  version?: string
  columnConsts: ColumnConsts
  queries?: Record<string, string>
}
type TableInfoMap = Record<string, Partial<TableInfo>>

const tableInfo: TableInfoMap = {
  DST_denormalized: {
    name: 'DST_denormalized',
    id: 'syn65676531.68', // current version of DST_denormalized
  },
  DataSet: { name: 'DataSet', id: 'syn66330217' },
  DataSet_denormalized: {
    name: 'DataSet_denormalized',
    id: 'syn68258237.4', // current version of DataSet_denormalized
  },
  DataSubstrate: { name: 'DataSubstrate', id: 'syn63096834' },
  DataTopic: { name: 'DataTopic', id: 'syn63096835' },
  // Organization: { name: 'Organization', id: 'syn63096836.31' },
  Organization_denormalized: {
    name: 'Organization',
    id: 'syn69693360.20', // current version of Organization_denormalized
  },
  D4D_content: {
    name: 'D4D_content',
    id: 'syn68885644.5', // current version of D4D_content
  },
  // UseCase: { name: 'UseCase', id: 'syn63096837' }, // not using this, might in the future?
}

// function assembleQuery({tableName, selectExpressions, additionalFilters})
export type ColumnConsts = { ID: string } & Record<string, string>

export const ORG_TABLE_COLUMN_CONSTS: ColumnConsts = {
  ID: 'id',
  NAME: 'name',
  DESCRIPTION: 'description',
  ROR_ID: 'ror_id',
  WIKIDATA_ID: 'wikidata_id',
  URL: 'url',
  SUBCLASS_OF: 'subclass_of',
  // new (and likely to change):
  MAIN_ORGANIZATION_JSON: 'main_organization_json',
  ASSOCIATED_ORGANIZATION_JSON: 'associated_organization_json',
  RELEVANT_STANDARDS: 'relevant_standards',
  RELEVANT_STANDARDS_JSON: 'relevant_standards_json',
  GOVERNED_STANDARDS: 'governed_standards',
  GOVERNED_STANDARDS_JSON: 'governed_standards_json',
  DATASETS: 'datasets',
  DATASET_NAMES: 'dataset_names',
  DATASET_JSON: 'dataset_json',
  D4D: 'd4d',
} as const
tableInfo.Organization_denormalized.columnConsts = ORG_TABLE_COLUMN_CONSTS

export const organizationDetailsPageSQL = `
  SELECT  
    ${Object.values(ORG_TABLE_COLUMN_CONSTS).join(', ')},
    concat('/Explore/Organization/OrganizationDetailsPage?id=', ${
      ORG_TABLE_COLUMN_CONSTS.ID
    }) AS orgPageLink
  FROM ${tableInfo.Organization_denormalized.id}`
tableInfo.Organization_denormalized.queries ??= {}
tableInfo.Organization_denormalized.queries.detailsSQL =
  organizationDetailsPageSQL

export const D4D_CONTENT_COLUMN_CONSTS: ColumnConsts = {
  CONTENT_TYPE: 'content_type', // html or css
  // CONTENT_ID: 'content_id',
  ID: 'content_id',
  CONTENT_TEXT: 'content_text',
}
tableInfo.D4D_content.columnConsts = D4D_CONTENT_COLUMN_CONSTS
tableInfo.D4D_content.queries ??= {}

export const GC_ORG_IDS = [114, 115, 116, 117].map(id => `B2AI_ORG:${id}`)

export const DATASET_DENORMALIZED_COLUMN_CONSTS: ColumnConsts = {
  ID: 'id',
  NAME: 'name',
  DESCRIPTION: 'description',
  CATEGORY: 'category',
  DATA_URL: 'DataURL',
  DATASHEET_URL: 'DatasheetURL',
  DOCUMENTATION_URL: 'DocumentationURL',
  IS_PUBLIC: 'isPublic',
  PRODUCED_BY: 'producedBy',
  PRODUCED_BY_ORG_ID: 'producedByOrgId',
  TOPICS: 'topics',
  SUBSTRATES: 'substrates',
  SUBSTRATES_JSON: 'substrates_json',
}
tableInfo.DataSet_denormalized.columnConsts = DATASET_DENORMALIZED_COLUMN_CONSTS
tableInfo.DataSet_denormalized.queries ??= {}
export const dataSetSQL = (tableInfo.DataSet_denormalized.queries.main =
  getQueryString('DataSet_denormalized'))

export const DST_TABLE_COLUMN_CONSTS: ColumnConsts = {
  ID: 'id',
  ACRONYM: 'acronym',
  NAME: 'name',
  CATEGORY: 'category',
  DESCRIPTION: 'description',
  COLLECTIONS: 'collections',
  HAS_AI_APPLICATION: 'hasAIApplication',
  MATURE: 'mature',
  CONCERNS_DATA_TOPIC: 'concerns_data_topic',
  HAS_RELEVANT_DATA_SUBSTRATE: 'has_relevant_data_substrate',
  HAS_RELEVANT_ORGANIZATION: 'has_relevant_organization',
  RELEVANT_ORG_LINKS: 'relevantOrgLinks',
  RESPONSIBLE_ORG_LINKS: 'responsibleOrgLinks',
  RELEVANT_ORG_NAMES: 'relevantOrgNames',
  RESPONSIBLE_ORGANIZATION: 'responsible_organization',
  IS_OPEN: 'isOpen',
  REGISTRATION: 'registration',
  URL: 'URL',
  FORMAL_SPEC: 'formalSpec',
  PUBLICATION: 'publication',
  TRAINING_RESOURCES: 'trainingResources',
  SUBCLASS_OF: 'subclassOf',
  CONTRIBUTION_dATE: 'contributionDate',
  RELATED_TO: 'relatedTo',
  USED_IN_BRIDGE2AI: 'usedInBridge2AI',
} as const

// for the Explore page table:
//  had to generate RELEVANT_ORG_LINKS during DST_denormalized creation
//    could do the same for acronym
export const standardsSql = `
    SELECT
          mature
        , concat('[', acronym, '](/Explore/Standard/DetailsPage?id=', id, ')') as acronym
        , name
        , category
        , collections
        , topic
        , dataTypes
        , ${DST_TABLE_COLUMN_CONSTS.RELEVANT_ORG_LINKS}
        , ${DST_TABLE_COLUMN_CONSTS.RESPONSIBLE_ORG_LINKS}
        , isOpen
        , registration
        , "usedInBridge2AI"
        , hasAIApplication
    FROM ${tableInfo.DST_denormalized.id}
`

// removed topic column above to address @jay-hodgson's comment
//  https://github.com/Sage-Bionetworks/synapse-web-monorepo/pull/1612#discussion_r2029425831
//  Topic still shows up as a facet on the explore page but not as a column,
//  which seems fine. It's not limiting the number of rows displayed now.

// for standards details page:  -- TODO: use COLUMN_NAMES
export const standardsDetailsPageSQL = `
    SELECT  id,
            acronym,
            name                                             as standardName,
            description,
            URL                                              as url,
            category,
            collections,
            topic,
            dataTypes,
            ${DST_TABLE_COLUMN_CONSTS.RELEVANT_ORG_NAMES},
            ${DST_TABLE_COLUMN_CONSTS.RESPONSIBLE_ORG_LINKS} as SDO,
            ${DST_TABLE_COLUMN_CONSTS.RESPONSIBLE_ORG_LINKS},
            ${DST_TABLE_COLUMN_CONSTS.RELEVANT_ORG_LINKS},
            isOpen,
            relatedTo,
            trainingResources,
            registration
    FROM ${tableInfo.DST_denormalized.id}
`
export const standardsFtsConfig: FTSConfig = {
  textMatchesMode: 'BOOLEAN',
  distance: 50,
}

export function getTableInfo(tableName: string): TableInfo {
  const tinfo = tableInfo[tableName]
  if (!tinfo) {
    throw new Error(`tableInfo not defined for table ${tableName}`)
  }
  return tinfo as TableInfo
}
export function getColumnConsts(tableName: string): ColumnConsts {
  const tinfo = getTableInfo(tableName)
  if (!tinfo.columnConsts) {
    throw new Error(`columnConsts not yet defined for table ${tableName}`)
  }
  return tinfo.columnConsts
}
export function getSynapseTableId(tableName: string): string {
  return getTableInfo(tableName).id
}
type getColumnExpressionsProps = AtLeastOne<{
  columnNames?: string[] // if undefined, use all cols of tableName
  expressions?: string[] // column expressions. how will this work?
  tableName?: string // use all if columnNames and expressions are undefined
}>
export function getColumnExpressions({
  tableName,
  columnNames,
  expressions = [],
}: getColumnExpressionsProps): string[] {
  if (!columnNames) {
    if (!tableName) {
      // console.error(`Either columnNames or tableName required in getColumnExpressions`)
      throw new Error('Either columnNames or tableName required')
    }
    columnNames = Object.values(tableInfo[tableName].columnConsts ?? {})
  }
  expressions = expressions.concat(columnNames)
  return expressions
}
export function getQueryString(tableName: string, expressions?: string[]) {
  // allow where clause? or use additionalFilters separately
  if (!expressions) {
    const qs = getTableInfo(tableName)?.queries?.main
    if (qs) return qs
    expressions = getColumnExpressions({ tableName })
  }
  return `SELECT ${expressions.join(', ')} FROM ${tableInfo[tableName].id}`
}
export function getIdCol(tableName: string) {
  const columnConsts = getColumnConsts(tableName)
  return columnConsts.ID
}
