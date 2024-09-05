import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import columnAliases from '../columnAliases'
import {
  baseDataSqlColumns,
  baseDataSqlFrom,
  baseDataSqlWhere,
  allFacetsToPlot,
} from './uncategorized'

const rgbIndex = 0
export const dataSql = `SELECT inviteSentOn, ${baseDataSqlColumns} ${baseDataSqlFrom} ${baseDataSqlWhere} 'Invited'`
const sql = dataSql

export const invited: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    shouldDeepLink: true,
    sql,
    name: 'Invited Participants',
    columnAliases,
    tableConfiguration: {},
    facetsToPlot: allFacetsToPlot,
  },
}

export default invited
