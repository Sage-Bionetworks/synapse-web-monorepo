import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { TargetEnum } from 'synapse-react-client/utils/html/TargetEnum'

const variablesPlotNavProps: Omit<QueryWrapperPlotNavProps, 'sql'> = {
  //   name: 'Variables',
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
        overrideLinkURLColumnTransform: (study: string) =>
          `/Explore/Studies/DetailsPage?study=${encodeURIComponent(study)}`,
        target: TargetEnum.CURRENT_WINDOW,
      },
    ],
  },
}

export default variablesPlotNavProps
