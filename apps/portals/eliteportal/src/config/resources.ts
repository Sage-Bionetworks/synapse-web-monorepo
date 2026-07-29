import { ExternalAnalysisPlatform } from 'synapse-react-client/components/SynapseTable/export/ExternalAnalysisPlatformsConstants'
import { SearchV2Props } from 'synapse-react-client/components/SynapseTable/SearchV2'

export const SYNAPSE_PORTAL_ID = '1003'

// TODO: dataSql and dataOnStudiesPageSql should point to main file view table once available (instead of Cohort Builder data files Virtual Table)
export const dataSql = 'SELECT * FROM syn73452292'
export const datasetsSql = 'SELECT * FROM syn74529385'
export const dataOnStudiesPageSql =
  "SELECT * FROM syn73452292 WHERE `resourceType` = 'metadata'"
export const peopleSql = 'SELECT * FROM syn51209684'
export const projectsSql = 'SELECT * FROM syn51209786'
export const programsSql = 'SELECT * FROM syn73580515'
export const publicationsSql = 'SELECT * FROM syn51407023 ORDER BY "Year" DESC'
export const topPublicationsSql =
  'SELECT * FROM syn51407023 WHERE preprint = \'no\' ORDER BY "publicationDate" DESC LIMIT 6'
export const studiesSql =
  'SELECT * FROM syn51523775 ORDER BY isFeatured DESC, dataStatus ASC, studyName ASC'
export const speciesSql = 'SELECT * FROM syn53406593 ORDER BY ItemOrder'
export const computationalSql = 'SELECT * FROM syn51469335'
export const modelsSql = 'SELECT * FROM syn75107951'
export const upsetPlotSql = 'SELECT individualID, dataType from syn51581771'
export const cohortBuilderSql = 'SELECT * FROM syn52234652'
export const cohortBuilderFilesSql = 'SELECT * FROM syn52234677'
export const partnersSql =
  'SELECT * FROM syn62661043 order by organizationName desc'
export const partnersSql2 =
  'SELECT * FROM syn62661043 WHERE order IS NOT NULL ORDER BY order ASC'
export const whatWeDoSql = 'SELECT * FROM syn64130706'
export const featuredResearchSql =
  'SELECT * FROM syn64542019 ORDER BY order ASC'

export const defaultSearchConfiguration: Omit<
  SearchV2Props,
  'queryContext' | 'queryVisualizationContext'
> = {
  ftsConfig: {
    textMatchesMode: 'NATURAL_LANGUAGE',
    searchHelpURL: 'https://help.eliteportal.org/help/search-tips',
  },
}
export const cavaticaConnectAccountURL =
  'https://help.eliteportal.org/help/analysis-environments#IntegrationwithAnalysis&ComputeEnvironments-GainingAccess'
export const goalsV2Table = 'syn64618674'

export const enabledAnalysisPlatforms: ExternalAnalysisPlatform[] = [
  'cavatica',
  'terra',
  'adworkbench',
]

export const peopleSearchIndexId = 'syn75418928'
export const projectsSearchIndexId = 'syn75418929'
export const programsSearchIndexId = 'syn75418930'
export const publicationsSearchIndexId = 'syn75418933'
export const topPublicationsSearchIndexId = 'syn75418934'
export const studiesSearchIndexId = 'syn75418935'
export const speciesSearchIndexId = 'syn75418937'
export const computationalSearchIndexId = 'syn75418938'
export const upsetPlotSearchIndexId = 'syn75418939'
export const partnersSearchIndexId = 'syn75418942'
export const partnersOrderedSearchIndexId = 'syn75418943'
export const whatWeDoSearchIndexId = 'syn75418944'
export const featuredResearchSearchIndexId = 'syn75418945'
