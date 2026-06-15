import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { TargetEnum } from 'synapse-react-client/utils/html/TargetEnum'
import { metadataSql } from '../resources'

const metadataPlotNavProps: QueryWrapperPlotNavProps = {
  sql: metadataSql,
  name: 'Metadata',
  shouldDeepLink: true,
  columnAliases: { study: 'On Synapse' },
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

export default metadataPlotNavProps
