import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import columnAliases from '../columnAliases'
import {
  baseDataSqlColumns,
  baseDataSqlFrom,
  baseDataSqlWhere,
  allFacetsToPlot,
} from './uncategorized'

const rgbIndex = 0
export const dataSql = `SELECT ${baseDataSqlColumns} ${baseDataSqlFrom} ${baseDataSqlWhere} 'Results Ready'`
const sql = dataSql

export const tested: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    shouldDeepLink: true,
    sql,
    name: 'Tested Participants',
    columnAliases,
    tableConfiguration: {},
    facetsToPlot: allFacetsToPlot,
  },
}

export default tested
