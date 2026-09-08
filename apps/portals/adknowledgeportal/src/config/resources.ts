import { ExternalAnalysisPlatform } from 'synapse-react-client/components/SynapseTable/export/ExternalAnalysisPlatformsConstants'

export const SYNAPSE_PORTAL_ID = '1001'

export const computationalSql = 'Select * from syn20337467'
export const dataSql = 'SELECT * FROM syn11346063.87'
export const dataOnStudiesPageSql =
  "SELECT id, name, metadataType, dataType, assay FROM syn11346063.87 WHERE `resourceType` = 'metadata'"
export const peopleSql = 'SELECT * FROM syn13897207'
export const projectsSql = 'SELECT * FROM syn17024229 ORDER BY isFeatured DESC'
export const publicationsSql = 'SELECT * FROM syn20448807'
export const studiesSql = 'SELECT * FROM syn17083367 ORDER BY isFeatured DESC'
export const programsSql = 'SELECT * FROM syn17024173'
export const dataTypeSql = 'SELECT * FROM syn75201966'
export const exploreQuerySql =
  'SELECT * FROM syn17083367 ORDER BY isFeatured DESC'
export const consortiaAndRepositoriesSql = 'SELECT * FROM syn75213437'

export const experimentalModelsSql =
  'select * from syn22219805 ORDER BY isFeatured DESC'

export const cohortBuilderSql = 'SELECT * FROM syn72123781'
export const cohortBuilderFilesSql = 'SELECT * FROM syn72123859'

// PORTALS-2028: /MODEL-ADstrains redirects to "/Explore/Experimental Models" with this facet preselected
export const modelADStrainsSelectedFacet = {
  columnName: 'program',
  facetValue: 'MODEL-AD',
}

// Convert the `title` column to markdown, linking to the `link` column
export const targetEnablingResourcesExploreSql =
  'select * from syn26146692 WHERE `isPublic` = true'
export const targetEnablingResourcesDetailsPageSql =
  'select * from syn26146692 WHERE `isPublic` = true'
export const cavaticaConnectAccountURL =
  'https://help.adknowledgeportal.org/apd/CAVATICA.4271145000.html'

export const computationalSearchIndexId = 'syn75418908'
export const peopleSearchIndexId = 'syn75418911'
export const projectsSearchIndexId = 'syn75418912'
export const publicationsSearchIndexId = 'syn75418913'
export const studiesSearchIndexId = 'syn75418915'
export const programsSearchIndexId = 'syn75418917'
export const experimentalModelsSearchIndexId = 'syn75418918'
export const targetEnablingResourcesSearchIndexId = 'syn75418925'

export const enabledAnalysisPlatforms: ExternalAnalysisPlatform[] = [
  'cavatica',
  'terra',
  'adworkbench',
]
