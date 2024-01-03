import { SynapseConfig } from 'types/portal-config'
import {
  cavaticaConnectAccountURL,
  cavaticaHelpURL,
  dataSql,
  defaultSearchConfiguration,
} from '../resources'

const rgbIndex = 1

const data: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    name: 'Data',
    showExportToCavatica: true,
    cavaticaHelpURL: cavaticaHelpURL,
    cavaticaConnectAccountURL: cavaticaConnectAccountURL,
    visibleColumnCount: 10,
    isRowSelectionVisible: true,
    additionalFiltersLocalStorageKey: 'cohort-builder-files-perspective',
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
    searchConfiguration: defaultSearchConfiguration,
  },
}

export default data
