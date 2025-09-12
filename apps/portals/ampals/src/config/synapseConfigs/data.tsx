import { QueryWrapperPlotNavProps } from 'synapse-react-client'
import columnAliases from '../columnAliases'
import { enabledAnalysisPlatforms, filesSql } from '../resources'

const rgbIndex = 0
// export const dataColumnLinks: LabelLinkConfig = [
//   {
//     matchColumnName: 'name',
//     isMarkdown: false,
//     linkColumnName: 'dataFileKey',
//   },
// ]

export const filesQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  shouldDeepLink: true,
  sql: filesSql,
  name: 'Files',
  columnAliases,
  defaultShowSearchBox: true,
  isRowSelectionVisible: true,
  tableConfiguration: {
    // columnLinks: dataColumnLinks,
    showAccessColumn: true,
  },
  visibleColumnCount: 7,
  enabledExternalAnalysisPlatforms: enabledAnalysisPlatforms,
}
