import { FTSConfig } from 'synapse-react-client/components/SynapseTable/SearchV2'

export const TABLE_IDS = {
  DST_denormalized: { name: 'DST_denormalized', id: 'syn65676531.55' },
  Org_denormalized: { name: 'Org_denormalized', id: 'syn68259166' },
  DataSet_denormalized: { name: 'DataSet_denormalized', id: 'syn68258237' },

  CurrentTableVersions: { name: 'CurrentTableVersions', id: 'syn66330007' },
  DataSet: { name: 'DataSet', id: 'syn66330217' },
  DataStandardOrTool: { name: 'DataStandardOrTool', id: 'syn63096833' },
  DataSubstrate: { name: 'DataSubstrate', id: 'syn63096834' },
  DataTopic: { name: 'DataTopic', id: 'syn63096835' },
  // Challenges: { name: 'Challenges', id: 'syn65913973' }, // the only reason for this table is to get the GC images
  Organization: { name: 'Organization', id: 'syn63096836' },
  UseCase: { name: 'UseCase', id: 'syn63096837' },
}

export const DST_TABLE_COLUMN_NAMES = { RELEVANT_ORG_NAMES: 'relevantOrgNames' }
export const ORG_TABLE_COLUMN_NAMES = {
  ID: 'id',
  NAME: 'name',
  DESCRIPTION: 'description',
}
export const CHALLENGES_TABLE_COLUMN_NAMES = {
  ORG_ID: 'organizationId',
  IMG_HANDLE_ID: 'headerImage',
}

export const DATASET_DENORMALIZED_COLUMN_NAMES = {
  ID: 'id',
  NAME: 'name',
  DESCRIPTION: 'description',
  CATEGORY: 'category',
  DATASHEET_URL: 'DatasheetURL',
  DOCUMENTATION_URL: 'DocumentationURL',
  IS_PUBLIC: 'isPublic',
  PRODUCED_BY: 'producedBy',
  ORG_JSON: 'org_json',
  TOPICS: 'topics',
  SUBSTRATES: 'substrates',
  SUBSTRATES_JSON: 'substrates_json',
}
export const DATASET_DENORMALIZED_JSON_COLUMNS = [
  'org_json',
  'producedBy',
  'substrates',
  'substrates_json',
  'topics',
]

// export const GC_PARENT_ORG_ID = 'B2AI_ORG:106' // not just GCs
export const GC_ORG_IDS = [114, 115, 116, 117].map(id => `'B2AI_ORG:${id}'`)

export const ORG_DENORMALIZED_COLUMN_NAMES = {
  ID: 'id',
  NAME: 'name',
  DESCRIPTION: 'description',
  ROR_ID: 'rorId',
  WIKIDATA_ID: 'wikidataId',
  URL: 'URL',
  SUBCLASS_OF: 'subclassOf',
  DATASET_JSON: 'dataset_json',
}
export const ORG_DENORMALIZED_JSON_COLUMNS = [
  ORG_DENORMALIZED_COLUMN_NAMES.DATASET_JSON,
]
// for organization details page:
export const organizationDetailsPageSQL = `SELECT  ${Object.values(
  ORG_DENORMALIZED_COLUMN_NAMES,
).join(', ')} FROM ${TABLE_IDS.Org_denormalized.id}`

// for the Explore page table:
export const standardsSql = `
    SELECT
        isMature,
        concat('[', acronym, '](/Explore/Standard/DetailsPage?id=', id, ')') as acronym,
            name, category, collections, topic, dataTypes,
            ${DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_NAMES}, isOpen, registration, "usedInBridge2AI"
            , hasAIApplication
            FROM ${TABLE_IDS.DST_denormalized.id}
`
// removed topic column above to address @jay-hodgson's comment
//  https://github.com/Sage-Bionetworks/synapse-web-monorepo/pull/1612#discussion_r2029425831
//  Topic still shows up as a facet on the explore page but not as a column,
//  which seems fine. It's not limiting the number of rows displayed now.

// concat('/Explore/Standard/DetailsPage?id=', id) as link, acronym,

// for standards details page:
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
            responsibleOrgName as SDO,
            isOpen,
            relatedTo,
            trainingResources,
            registration
    FROM ${TABLE_IDS.DST_denormalized.id}
`
// COALESCE(responsibleOrgName, 'No responsible org listed') as SDO,

export const standardsFtsConfig: FTSConfig = {
  textMatchesMode: 'BOOLEAN',
  distance: 50,
}
