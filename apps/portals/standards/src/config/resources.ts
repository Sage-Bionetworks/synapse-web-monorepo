const DST_TABLE_ID = 'syn65676531'
// can replace with specific version if wanted

// for the Explore page table:
export const dataSql = `
    SELECT
        concat('[', acronym, '](/Explore/Standard/DetailsPage?id=', id, ')') as acronym,
            name, category, collections, topic as topics, relevantOrgAcronym as organizations, isOpen, registration FROM ${DST_TABLE_ID}
`
// concat('/Explore/Standard/DetailsPage?id=', id) as link, acronym,

// for details page:
export const standardsDetailsPageSQL = `
    SELECT  id,
            acronym,
            name as standardName,
            description,
            category,
            collections,
            topic as topics,
            relevantOrgAcronym as organizations,
            responsibleOrgName as SDO,
            isOpen,
            relatedTo,
            trainingResources,
            registration
    FROM ${DST_TABLE_ID}
`
