import IsMatureIconMap from '@/components/IsMatureIconMap'
import { LabelLinkConfig, QueryWrapperPlotNavProps } from 'synapse-react-client'
import columnAliases from '@/config/columnAliases'
import {
  standardsFtsConfig,
  // dataSetExploreSql,
  standardsSql,
  DST_TABLE_COLUMN_CONSTS,
} from '@/config/resources'

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
  facetsToPlot: ['topic', DST_TABLE_COLUMN_CONSTS.RELEVANT_ORG_NAMES],
  initialPlotType: 'BAR',
  searchConfiguration: {
    ftsConfig: standardsFtsConfig,
  },
}
