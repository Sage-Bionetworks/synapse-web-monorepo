import { SynapseConfig } from 'types/portal-config'
import columnAliases from '../columnAliases'
import handleParticipantWorkflowChange from '../handleParticipantWorkflowChange'
import { baseDataSql, allFacetsToPlot } from './uncategorized'

const rgbIndex = 0
export const dataSql = `${baseDataSql} 'Hidden'`
const sql = dataSql

export const hidden: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    shouldDeepLink: true,
    sql,
    name: 'Hidden Participants',
    columnAliases,
    facetsToPlot: allFacetsToPlot,
    tableConfiguration: {},
    isRowSelectionVisible: true,
    visibleColumnCount: 10,
    customControls: [
      {
        buttonText: 'Unhide',
        classNames: 'exampleClassNameToAddToButton',
        onClick: (event) => {
          handleParticipantWorkflowChange(event, 'Uncategorized')
        },
      },
    ],
  },
}

export default hidden
