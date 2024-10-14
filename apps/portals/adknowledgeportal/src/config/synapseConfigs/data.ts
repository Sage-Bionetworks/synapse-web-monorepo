import { QueryWrapperPlotNavProps } from 'synapse-react-client'
import { cavaticaConnectAccountURL, dataSql } from '../resources'

const rgbIndex = 1

export const dataQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  name: 'Data',
  visibleColumnCount: 10,
  showExportToCavatica: true,
  cavaticaConnectAccountURL: cavaticaConnectAccountURL,
  isRowSelectionVisible: true,
  tableConfiguration: {
    showAccessColumn: true,
    showDownloadColumn: true,
    columnLinks: [
      {
        matchColumnName: 'study',
        isMarkdown: false,
        baseURL: 'Explore/Studies/DetailsPage',
        URLColumnName: 'Study_Name',
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
