const DST_TABLE_ID = 'syn65676531'
// can replace with specific version if wanted

export const standardsChallengeTableId = 'syn65484830'

// for the Explore page table:
export const dataSql = `
    SELECT
        concat('[', acronym, '](/Explore/Standard/DetailsPage?id=', id, ')') as acronym,
            name, category, collections, relevantOrgAcronym as organizations, isOpen, registration FROM ${DST_TABLE_ID}
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
            relevantOrgAcronym as organizations,
            COALESCE(responsibleOrgName, 'No responsible org listed') as SDO,
            isOpen,
            relatedTo,
            trainingResources,
            registration
    FROM ${DST_TABLE_ID}
`
