const DST_TABLE_ID = 'syn66330015' // DST_denormalized_current
const STANDARDS_CHALLENGE_TABLE_ID = 'syn65913973'
const DATASET_TABLE_ID = 'syn66330217'
const ORGANIZATION_TABLE_ID = 'syn63096836'

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
// can replace with specific version if wanted

export const challengesTableId = STANDARDS_CHALLENGE_TABLE_ID
export const dataSetTableId = DATASET_TABLE_ID
export const organizationTableId = ORGANIZATION_TABLE_ID

// for the Explore page table:
export const dataSql = `
    SELECT
        concat('[', acronym, '](/Explore/Standard/DetailsPage?id=', id, ')') as acronym,
            name, category, collections, ${DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_NAMES}, isOpen, registration FROM ${DST_TABLE_ID}
`
// name, category, collections, relevantOrgNames as organizations, isOpen, registration FROM ${DST_TABLE_ID}

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
            COALESCE(responsibleOrgName, 'No responsible org listed') as SDO,
            isOpen,
            relatedTo,
            trainingResources,
            registration
    FROM ${DST_TABLE_ID}
`
// relevantOrgNames as organizations,
