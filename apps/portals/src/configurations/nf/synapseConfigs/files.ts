import { SynapseConfig } from 'types/portal-config'
import { columnAliases } from './commonProps'
import { filesSql } from '../resources'

const rgbIndex = 1
export const visibleColumnCount = 7

const files: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    name: 'Files',
    sql: filesSql,
    visibleColumnCount,
    tableConfiguration: {
      showAccessColumn: true,
      showDownloadColumn: true,
      // TODO: When changing from a File View to a Materialized View, set the entity ID column and version column to use (instead of the Row ID and Version)
      // rowEntityIDColumnName: 'id',
      // rowEntityVersionColumnName: 'fileVersion',
    },
    shouldDeepLink: true,
    columnAliases,
  },
}

export default files
