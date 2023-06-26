import { SynapseConfig } from 'types/portal-config'
import columnAliases from '../columnAliases'
import handleParticipantWorkflowChange from '../handleParticipantWorkflowChange'
import { baseDataSql, allFacetsToPlot } from './uncategorized'

const rgbIndex = 0
export const dataSql = `${baseDataSql} 'Potential'`
const sql = dataSql

export const potential: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    shouldDeepLink: true,
    sql,
    name: 'Potential Participants',
    columnAliases,
    facetsToPlot: allFacetsToPlot,
    tableConfiguration: {},
    isRowSelectionVisible: true,
    visibleColumnCount: 10,
    customControls: [
      {
        buttonText: 'Send lab invitation',
        classNames: 'exampleClassNameToAddToButton',
        onClick: (event) => {
          handleParticipantWorkflowChange(event, 'Invited')
        },
      },
      {
        buttonText: 'Move to uncategorized',
        classNames: 'exampleClassNameToAddToButton',
        onClick: (event) => {
          handleParticipantWorkflowChange(event, 'Uncategorized')
        },
      },
    ],
  },
}

export default potential
