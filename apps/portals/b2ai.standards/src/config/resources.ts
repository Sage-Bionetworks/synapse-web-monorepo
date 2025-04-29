const DST_TABLE_ID = 'syn66330015' // points to DST_denormalized_current.
// To change DST_denormalized version, change it in that materialized view definition.

const STANDARDS_CHALLENGE_TABLE_ID = 'syn65913973'

export const DST_TABLE_COLUMN_NAMES = { RELEVANT_ORG_NAMES: 'relevantOrgNames' }

export const standardsChallengeTableId = STANDARDS_CHALLENGE_TABLE_ID

// for the Explore page table:
export const dataSql = `
    SELECT
        concat('[', acronym, '](/Explore/Standard/DetailsPage?id=', id, ')') as acronym,
            name, category, collections, ${DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_NAMES}, isOpen, registration FROM ${DST_TABLE_ID}
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
    FROM ${DST_TABLE_ID}
`
// COALESCE(responsibleOrgName, 'No responsible org listed') as SDO,
