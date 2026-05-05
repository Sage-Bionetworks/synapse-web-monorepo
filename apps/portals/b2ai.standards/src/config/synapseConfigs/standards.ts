import IsMatureIconMap from '@/components/IsMatureIconMap'
import type { LabelLinkConfig } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import columnAliases from '@/config/columnAliases'
import {
  standardsFtsConfig,
  // dataSetExploreSql,
  standardsSql,
  DST_TABLE_COLUMN_CONSTS,
} from '@/config/resources'
import { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

export const standardsRgbIndex = 0
export const standardsColumnLinks: LabelLinkConfig = [
  {
    isMarkdown: true,
    matchColumnName: DST_TABLE_COLUMN_CONSTS.ACRONYM, // the column whose value will be used for the markdown
    // tooltipText?: string // If set, also show a tooltip
  },
  {
    isMarkdown: true,
    matchColumnName: DST_TABLE_COLUMN_CONSTS.RELEVANT_ORG_LINKS, // the column whose value will be used for the markdown
    // tooltipText?: string // If set, also show a tooltip
  },
  {
    isMarkdown: true,
    matchColumnName: DST_TABLE_COLUMN_CONSTS.RESPONSIBLE_ORG_LINKS,
  },
  {
    isMarkdown: true,
    matchColumnName: 'SDO',
  },
  {
    isMarkdown: true,
    matchColumnName: 'aiAppMarkdown',
  },
  {
    matchColumnName: 'mature',
    isMapValueToReactNodeConfig: true,
    Component: IsMatureIconMap,
  },
]

export const standardsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex: standardsRgbIndex,
  shouldDeepLink: true,
  hideDownload: false,
  sql: standardsSql,
  name: 'Standards',
  columnAliases,
  tableConfiguration: {
    showDownloadColumn: false,
    columnLinks: standardsColumnLinks,
  },
  facetsToPlot: [
    'topic',
    // DST_TABLE_COLUMN_CONSTS.RELEVANT_ORG_NAMES, // Vast majority of values are currently 'Not Assigned', making the facet not useful. Re-add in the future if more values are annotated.
  ],
  initialPlotTypeByFacetColumnName: { topic: 'BAR' },
  searchConfiguration: {
    ftsConfig: standardsFtsConfig,
  },
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const standardsSearchQueryWrapperPlotNavProps: SearchQueryWrapperPlotNavProps =
  {
    searchIndexId: 'syn74803513',
    ...standardsQueryWrapperPlotNavProps,
    hideTopLevelControls: true,
    hideQueryCount: true,
  }
