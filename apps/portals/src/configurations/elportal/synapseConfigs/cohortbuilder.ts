import { SynapseConfig } from 'types/portal-config'
import { cohortBuilderSql, defaultSearchConfiguration } from '../resources'
import { displayToast } from 'synapse-react-client'

const rgbIndex = 1

const cohortbuilder: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    name: 'Participants',
    // showExportToCavatica: true,
    visibleColumnCount: 10,
    facetsToPlot: ['diagnosis', 'sex'],
    isRowSelectionVisible: true,
    tableConfiguration: {
      showAccessColumn: false,
      showDownloadColumn: false,
      columnLinks: [
        {
          matchColumnName: 'study',
          isMarkdown: false,
          baseURL: 'Explore/Studies/DetailsPage',
          URLColumnName: 'studyKey',
          wrapValueWithParens: false,
        },
      ],
    },
    customControls: [
      {
        buttonText: 'View files in selection',
        onClick: (event) => {
          displayToast(
            `TODO: pass the ${event.selectedRows?.length} selected participant ID(s) to another configuration of the same VirtualTable, where participant data is shown in aggregate`,
          )
          console.log(event)
        },
        isRowSelectionSupported: true,
      },
    ],
    sql: cohortBuilderSql,
    shouldDeepLink: true,
    searchConfiguration: defaultSearchConfiguration,
  },
}

export default cohortbuilder
