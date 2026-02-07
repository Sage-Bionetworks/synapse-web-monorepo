import { ExternalAnalysisPlatform } from 'synapse-react-client/components/SynapseTable/export/ExternalAnalysisPlatformsConstants'
export const datasetsSql =
  'SELECT name,id,contributor,keywords,collection,source,sameAs,GEOSuperSeries,url,disease,individualCount,assay,studyType,dataType,dataSubtype,species,biospecimenSubtype,biospecimenType,CNSRegion,cellType,libraryLayout,duoCodes,subject,acknowledgementStatement,portalRelease,description,acknowledgmentStatement,datasetItemCount,dataset_code FROM syn66496326'
export const datasetCollectionsSql =
  'SELECT * FROM syn67801190 ORDER BY ItemOrder'
export const programsSql = 'SELECT * FROM syn64941043'
export const goalsTableEntityId = 'syn66051704'
export const filesSql = `SELECT * FROM syn66271104`

export const partnersSql = `SELECT * FROM syn68804819`

export const enabledAnalysisPlatforms: ExternalAnalysisPlatform[] = [
  'cavatica',
  'terra',
]
