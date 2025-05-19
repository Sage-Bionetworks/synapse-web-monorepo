import { FTSConfig } from 'synapse-react-client/components/SynapseTable/SearchV2'

export const TABLE_IDS = {
  Challenges: { name: 'Challenges', id: 'syn65913973' },
  CurrentTableVersions: { name: 'CurrentTableVersions', id: 'syn66330007' },
  DST_denormalized: { name: 'DST_denormalized', id: 'syn65676531' },
  DataSet: { name: 'DataSet', id: 'syn66330217' },
  DataStandardOrTool: { name: 'DataStandardOrTool', id: 'syn63096833' },
  DataSubstrate: { name: 'DataSubstrate', id: 'syn63096834' },
  DataTopic: { name: 'DataTopic', id: 'syn63096835' },
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

// for the Explore page table:
export const dataSql = `
    SELECT
        concat('[', acronym, '](/Explore/Standard/DetailsPage?id=', id, ')') as acronym,
            name, category, collections, ${DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_NAMES}, isOpen, registration FROM ${TABLE_IDS.DST_denormalized.id}
`
// removed topic column above to address @jay-hodgson's comment
//  https://github.com/Sage-Bionetworks/synapse-web-monorepo/pull/1612#discussion_r2029425831
//  Topic still shows up as a facet on the explore page but not as a column,
//  which seems fine. It's not limiting the number of rows displayed now.

// concat('/Explore/Standard/DetailsPage?id=', id) as link, acronym,

// for details page:
export const standardsDetailsPageSQL = `
    SELECT  id,
            acronym,
            name as standardName,
            description,
            URL as url,
            category,
            collections,
            topic as topics,
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
