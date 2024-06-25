import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'

import { dataSql } from '../resources'

const columnAliases = {
  id: 'File',
}

const rgbIndex = 8

export const data: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: dataSql,
    tableConfiguration: {
      showAccessColumn: true,
      showDownloadColumn: true,
      columnLinks: [
        {
          matchColumnName: 'study',
          URLColumnName: 'studyName',
          baseURL: 'Explore/Studies/DetailsPage',
          isMarkdown: false,
        },
      ],
    },
    searchConfiguration: {
      searchable: [
        'study',
        'dataType',
        'resourceType',
        'species',
        'assay',
        'nucleicAcidSource',
        'tissue',
        'cellType',
        'referenceSet',
        'fileFormat',
        'metadataType',
        'individualID',
        'diagnosis',
        'specimenID',
        'organ',
        'contributor',
        'PI',
        'grant',
        'brodmannArea',
        'platform',
        'libraryPrep',
        'libraryPreparationMethod',
        'readLength',
        'isStranded',
        'runType',
        'alignmentMethod',
      ],
    },
    visibleColumnCount: 10,
    shouldDeepLink: true,
    name: 'Data',
    columnAliases,
    facetsToPlot: [
      'study',
      'dataType',
      'species',
      'tissue',
      'referenceSet',
      'fileFormat',
    ],
  },
}
