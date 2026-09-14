import { ExternalAnalysisPlatform } from 'synapse-react-client/components/SynapseTable/export/ExternalAnalysisPlatformsConstants'
export const datasetsSql =
  'SELECT name,id,contributor,keywords,collection,source,sameAs,GEOSuperSeries,url,disease,participant_count,assay,studyType,dataType,dataSubtype,species,biospecimenSubtype,biospecimenType,CNSRegion,cellType,libraryLayout,duoCodes,subject,acknowledgementStatement,portalRelease,description,datasetItemCount,dataset_code FROM syn66496326'
export const datasetCollectionsSql =
  'SELECT * FROM syn67801190 ORDER BY ItemOrder'
export const programsSql = 'SELECT * FROM syn64941043'
export const filesSql = `SELECT * FROM syn66271104`

export const sankeyPlotSql = `SELECT source, count(source), sum(datasetItemCount) FROM syn66496326 group by source`

export const sankeyDetailsTableId = 'syn66496326'
// Per-dataset metadata behind each Sankey flow. Fetched once and summarized
// client side, so hovering a flow does not trigger a query.
export const sankeyDetailsSql = `SELECT source, assay, dataType, species, participant_count FROM ${sankeyDetailsTableId}`
export const partnersSql = `SELECT * FROM syn68804819`

export const datasetsSearchIndexId = 'syn75169900'
export const datasetCollectionsSearchIndexId = 'syn75169903'
export const programsSearchIndexId = 'syn75169905'
// export const filesSearchIndexId = 'syn75169907'
export const partnersSearchIndexId = 'syn75169908'

export const enabledAnalysisPlatforms: ExternalAnalysisPlatform[] = [
  'cavatica',
  'terra',
]
