import { SynapseConfig } from 'types/portal-config'
import { cavaticaConnectAccountURL, dataSql } from '../resources'

const rgbIndex = 1

const data: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
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
  },
}

export default data
