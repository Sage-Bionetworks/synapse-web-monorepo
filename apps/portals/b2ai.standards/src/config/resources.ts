import { FTSConfig } from 'synapse-react-client/components/SynapseTable/SearchV2'

export const TABLE_IDS = {
  // CurrentTableVersions: { name: 'CurrentTableVersions', id: 'syn66330007' },
  // DataStandardOrTool: { name: 'DataStandardOrTool', id: 'syn63096833' },
  DST_denormalized: {
    name: 'DST_denormalized',
    // version: 'syn65676531.67', /* DST_denormalized_current */,
    id: 'syn65676531.67',
    // id: 'syn69062839' /* DST_denormalized_current */,
  },
  DataSet: { name: 'DataSet', id: 'syn66330217' },
  DataSet_denormalized: {
    name: 'DataSet_denormalized',
    version: 'syn68258237.3',
    id: 'syn69696299' /* DataSet_denormalized_current */,
  },
  DataSubstrate: { name: 'DataSubstrate', id: 'syn63096834' },
  DataTopic: { name: 'DataTopic', id: 'syn63096835' },
  // Organization: { name: 'Organization', id: 'syn63096836.31' },
  Organization_denormalized: {
    name: 'Organization',
    id: 'syn69693360.20',
    xid: 'syn69696403' /* Organization_denormalized_current */,
  },
  // D4D_content: { name: 'D4D_content', id: 'syn63096836.31' },
  D4D_content: {
    name: 'D4D_content',
    version: 'syn68885644.2',
    id: 'syn69696497' /* D4D_content_current */,
  },
  // UseCase: { name: 'UseCase', id: 'syn63096837' }, // not using this, might in the future?
}

export type ColumnNames = Record<string, string>

export const ORG_TABLE_COLUMN_NAMES: ColumnNames = {
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

export const organizationDetailsPageSQL = `
  SELECT  
    ${Object.values(ORG_TABLE_COLUMN_NAMES).join(', ')},
    concat('/Explore/Organization/OrganizationDetailsPage?id=', ${
      ORG_TABLE_COLUMN_NAMES.ID
    }) AS orgPageLink
  FROM ${TABLE_IDS.Organization_denormalized.id}`

export const tableInfo = {
  Organization_denormalized: {
    tableColNames: ORG_TABLE_COLUMN_NAMES,
    sql: organizationDetailsPageSQL,
  },
}
export const GC_ORG_IDS = [114, 115, 116, 117].map(id => `B2AI_ORG:${id}`)

export const DATASET_DENORMALIZED_COLUMN_NAMES = {
  ID: 'id',
  NAME: 'name',
  DESCRIPTION: 'description',
  CATEGORY: 'category',
  DATASHEET_URL: 'DatasheetURL',
  DOCUMENTATION_URL: 'DocumentationURL',
  IS_PUBLIC: 'isPublic',
  PRODUCED_BY: 'producedBy',
  PRODUCED_BY_ORG_ID: 'producedByOrgId',
  TOPICS: 'topics',
  SUBSTRATES: 'substrates',
  SUBSTRATES_JSON: 'substrates_json',
}

export const dataSetSQL = `SELECT  ${Object.values(
  DATASET_DENORMALIZED_COLUMN_NAMES,
).join(', ')} FROM ${TABLE_IDS.DataSet_denormalized.id}`

export const DST_TABLE_COLUMN_NAMES: ColumnNames = {
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
        , ${DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_LINKS}
        , ${DST_TABLE_COLUMN_NAMES.RESPONSIBLE_ORG_LINKS}
        , isOpen
        , registration
        , "usedInBridge2AI"
        , hasAIApplication
    FROM ${TABLE_IDS.DST_denormalized.id}
`

// removed topic column above to address @jay-hodgson's comment
//  https://github.com/Sage-Bionetworks/synapse-web-monorepo/pull/1612#discussion_r2029425831
//  Topic still shows up as a facet on the explore page but not as a column,
//  which seems fine. It's not limiting the number of rows displayed now.

// for standards details page:  -- TODO: use COLUMN_NAMES
export const standardsDetailsPageSQL = `
    SELECT  id,
            acronym,
            name as standardName,
            description,
            URL as url,
            category,
            collections,
            topic,
            dataTypes,
            ${DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_NAMES},
            ${DST_TABLE_COLUMN_NAMES.RESPONSIBLE_ORG_LINKS} as SDO,
            ${DST_TABLE_COLUMN_NAMES.RESPONSIBLE_ORG_LINKS},
            ${DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_LINKS},
            isOpen,
            relatedTo,
            trainingResources,
            registration
    FROM ${TABLE_IDS.DST_denormalized.id}
`
export const standardsFtsConfig: FTSConfig = {
  textMatchesMode: 'BOOLEAN',
  distance: 50,
}
