import { SynapseConfig } from 'types/portal-config'
import { dataSql } from '../resources'

const rgbIndex = 1

const cohortbuilder: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    name: 'Data',
    // showExportToCavatica: true,
    visibleColumnCount: 10,
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

export default cohortbuilder
