import { ExternalAnalysisPlatform } from 'synapse-react-client/components/SynapseTable/export/ExternalAnalysisPlatformsConstants'

export const dataSql = 'SELECT * FROM syn38806899'
export const programSql = 'SELECT * FROM syn36649342'
export const projectsSql = 'SELECT * FROM syn36649647'
export const datasetsSql =
  "SELECT * FROM syn68554562 WHERE datasetStatus = 'released'"
export const datasetCollectionsSql =
  'SELECT * FROM syn38814510 ORDER BY ItemOrder'
export const publicationsSql = 'SELECT * FROM syn71306282'

export const programSearchIndexId = 'syn75465122'
export const projectsSearchIndexId = 'syn75465124'
export const datasetsSearchIndexId = 'syn75465125'
export const datasetCollectionsSearchIndexId = 'syn75465126'
export const publicationsSearchIndexId = 'syn75465127'

export const enabledAnalysisPlatforms: ExternalAnalysisPlatform[] = [
  'cavatica',
  'terra',
]
