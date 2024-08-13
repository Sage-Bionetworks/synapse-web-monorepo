import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
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
        'analysisType',
        'assay',
        'assayTarget',
        'cellType',
        'chromosome',
        'consortium',
        'dataSubtype',
        'dataType',
        'diagnosis',
        'fileFormat',
        'grant',
        'group',
        'id',
        'individualID',
        'individualIdSource',
        'isConsortiumAnalysis',
        'isModelSystem',
        'isMultiSpecimen',
        'metaboliteType',
        'metadataType',
        'modelSystemName',
        'name',
        'nucleicAcidSource',
        'organ',
        'resourceType',
        'sex',
        'species',
        'specimenID',
        'specimenIdSource',
        'study',
        'tissue',
        'treatmentType',
      ],
    },
    shouldDeepLink: true,
  },
}

export default data
