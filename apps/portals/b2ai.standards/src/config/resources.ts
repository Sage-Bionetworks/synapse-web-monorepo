const STANDARDS_CHALLENGE_TABLE_ID = 'syn65913973'
export const standardsChallengeTableId = STANDARDS_CHALLENGE_TABLE_ID

let DST_TABLE_ID = 'syn65676531'
// const CURRENT_TABLE_VERSIONS_ID = 'syn66330007'
// const DST_TABLE_VERSION = execute_somehow(`SELECT version_to_use FROM ${CURRENT_TABLE_VERSIONS_ID} WHERE table_id = '${DST_TABLE_ID}'`)
const DST_TABLE_VERSION = '18'
DST_TABLE_ID = `${DST_TABLE_ID}.${DST_TABLE_VERSION}`

// for the Explore page table:
export const dataSql = `
    SELECT
        concat('[', acronym, '](/Explore/Standard/DetailsPage?id=', id, ')') as acronym,
            name, category, collections, relevantOrgNames, isOpen, registration FROM ${DST_TABLE_ID}
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
            relevantOrgNames,
            COALESCE(responsibleOrgName, 'No responsible org listed') as SDO,
            isOpen,
            relatedTo,
            trainingResources,
            registration
    FROM ${DST_TABLE_ID}
`
// relevantOrgNames as organizations,
