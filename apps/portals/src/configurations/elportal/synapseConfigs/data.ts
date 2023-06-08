import { SynapseConfig } from 'types/portal-config'
import { dataSql } from '../resources'

const rgbIndex = 1

const data: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    name: 'Data',
    showExportToCavatica: true,
    visibleColumnCount: 10,
    tableConfiguration: {
      showAccessColumn: true,
      showDownloadColumn: true,
      columnLinks: [
        {
          matchColumnName: 'study',
          isMarkdown: false,
          baseURL: 'Explore/Studies/DetailsPage',
          URLColumnName: 'studyKey',
        },
      ],
    },
    sql: dataSql,
    shouldDeepLink: true,
  },
}

export default data
