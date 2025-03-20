import { QueryWrapperPlotNavProps } from 'synapse-react-client'
import { enabledAnalysisPlatforms, genieDataSql } from '../resources'

const rgbIndex = 0

const genieDataQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: genieDataSql,
  name: 'Files',
  enabledExternalAnalysisPlatforms: enabledAnalysisPlatforms,
  isRowSelectionVisible: true,
  rowSelectionPrimaryKey: ['id'],
  visibleColumnCount: 6,
  fileIdColumnName: 'id',
  fileNameColumnName: 'name',
  fileVersionColumnName: 'currentVersion',
  tableConfiguration: {
    showAccessColumn: true,
  },
  defaultShowPlots: false,
}

export default genieDataQueryWrapperPlotNavProps
