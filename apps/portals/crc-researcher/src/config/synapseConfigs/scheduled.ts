import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import columnAliases from '../columnAliases'
import {
  baseDataSqlColumns,
  baseDataSqlFrom,
  baseDataSqlWhere,
  allFacetsToPlot,
} from './uncategorized'

const rgbIndex = 0
export const dataSql = `SELECT scheduledLabDrawOn, ${baseDataSqlColumns}, noShow ${baseDataSqlFrom} ${baseDataSqlWhere} 'Scheduled'`
const sql = dataSql

export const scheduled: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    shouldDeepLink: true,
    sql,
    name: 'Scheduled Participants',
    columnAliases,
    tableConfiguration: {},
    facetsToPlot: allFacetsToPlot,
  },
}

export default scheduled
