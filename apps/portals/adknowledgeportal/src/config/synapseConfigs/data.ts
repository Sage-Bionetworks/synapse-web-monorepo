import type { QueryWrapperPlotNavProps } from 'synapse-react-client'
import {
  cavaticaConnectAccountURL,
  dataSql,
  enabledAnalysisPlatforms,
} from '../resources'
import { STUDY_TABLE_COLUMN_NAMES } from './studies'

const rgbIndex = 1

export const DATA_TABLE_COLUMN_NAMES = {
  STUDY: 'study',
}

export const dataQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  name: 'Data',
  visibleColumnCount: 10,
  enabledExternalAnalysisPlatforms: enabledAnalysisPlatforms,
  cavaticaConnectAccountURL: cavaticaConnectAccountURL,
  isRowSelectionVisible: true,
  tableConfiguration: {
    showAccessColumn: true,
    showDownloadColumn: true,
    columnLinks: [
      {
        matchColumnName: DATA_TABLE_COLUMN_NAMES.STUDY,
        isMarkdown: false,
        baseURL: 'Explore/Studies/DetailsPage',
        URLColumnName: STUDY_TABLE_COLUMN_NAMES.STUDY_NAME,
        wrapValueWithParens: true,
      },
    ],
  },
  sql: dataSql,
  searchConfiguration: {
    searchable: [
      'id',
      'study',
      'dataType',
      'assay',
      'organ',
      'tissue',
      'species',
      'diagnosis',
      'sex',
      'consortium',
      'grant',
      'modelSystemName',
      'treatmentType',
      'specimenID',
      'individualID',
      'individualIdSource',
      'specimenIdSource',
      'resourceType',
      'dataSubtype',
      'metadataType',
      'assayTarget',
      'analysisType',
      'cellType',
      'nucleicAcidSource',
      'fileFormat',
      'group',
      'name',
      'isModelSystem',
      'isConsortiumAnalysis',
      'isMultiSpecimen',
      'metaboliteType',
      'chromosome',
    ],
  },
  shouldDeepLink: true,
}
