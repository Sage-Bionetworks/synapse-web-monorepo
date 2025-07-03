import { FTSConfig } from 'synapse-react-client/components/SynapseTable/SearchV2'

export const TABLE_IDS = {
  Challenges: { name: 'Challenges', id: 'syn65913973.1' },
  CurrentTableVersions: { name: 'CurrentTableVersions', id: 'syn66330007' },
  DST_denormalized: { name: 'DST_denormalized', id: 'syn65676531.63' },
  DataSet: { name: 'DataSet', id: 'syn66330217' },
  DataStandardOrTool: { name: 'DataStandardOrTool', id: 'syn63096833' },
  DataSubstrate: { name: 'DataSubstrate', id: 'syn63096834' },
  DataTopic: { name: 'DataTopic', id: 'syn63096835' },
  GCDataSet: { name: 'GCDataSet', id: 'syn66527597' },
  Organization: { name: 'Organization', id: 'syn63096836.31' },
  UseCase: { name: 'UseCase', id: 'syn63096837' },
}

export const DST_TABLE_COLUMN_NAMES = {
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
}
export const ORG_TABLE_COLUMN_NAMES = {
  ID: 'id',
  NAME: 'name',
  DESCRIPTION: 'description',
}

export const CHALLENGES_TABLE_COLUMN_NAMES = {
  ORG_ID: 'organizationId',
  IMG_HANDLE_ID: 'headerImage',
}

// for the Explore page table:
export const dataSql = `
    SELECT
        mature,
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
            responsibleOrgName as SDO,
            isOpen,
            relatedTo,
            trainingResources,
            registration
    FROM ${TABLE_IDS.DST_denormalized.id}
`
// COALESCE(responsibleOrgName, 'No responsible org listed') as SDO,

export const dataFtsConfig: FTSConfig = {
  textMatchesMode: 'BOOLEAN',
  distance: 50,
}

// for DataSetExplore
export const dataSetExploreSql = `SELECT * FROM ${TABLE_IDS.GCDataSet.id}`
