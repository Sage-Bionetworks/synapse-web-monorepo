import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { TargetEnum } from 'synapse-react-client/utils/html/TargetEnum'

const instrumentsPlotNavProps: Omit<QueryWrapperPlotNavProps, 'sql'> = {
  //   name: 'Instruments',
  fileIdColumnName: 'id',
  columnAliases: { study: 'On Synapse' },
  defaultShowPlots: false,
  tableConfiguration: {
    showAccessColumn: true,
    showDownloadColumn: false,
    hideAddToDownloadListColumn: true,
    columnLinks: [
      {
        matchColumnName: 'studyName',
        isMarkdown: false,
        overrideLinkURLColumnName: 'study',
        overrideLinkURLColumnTransform: study =>
          `/Explore/Studies/DetailsPage?study=${encodeURIComponent(study)}`,
        target: TargetEnum.CURRENT_WINDOW,
      },
    ],
  },
}

export default instrumentsPlotNavProps
