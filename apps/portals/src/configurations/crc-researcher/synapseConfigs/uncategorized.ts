import { SynapseConfig } from 'types/portal-config'
import columnAliases from '../columnAliases'
import handleParticipantWorkflowChange from '../handleParticipantWorkflowChange'

const rgbIndex = 0

export const baseDataSqlColumns = `symptom, 
    firstDayOfSymptoms, 
    lastDayOfSymptoms,
    worstDayOfSymptoms,
    dontFeelBetter,
    recoveryDateOfSymptoms,
    stillHaveSymptoms,
    testType,
    feverHighest, 
    otherSpecify, 
    howWasItTreated,     
    gender, 
    age, 
    ethnicity, 
    zipcode, 
    nasalSwabDate, 
    nasalSwabResult, 
    serumTestDate, 
    serumTestResult, 
    uploadDate,
    healthCode,
    recordId,
    testLocation,
    dataGroups,
    how_heard,
    allSurveysComplete`

export const baseDataSqlFrom = ` FROM syn22154087 `
export const baseDataSqlWhere = ` WHERE testLocation IN ('lab', 'home', 'noTest') AND dataGroups NOT HAS ('test_user') AND allSurveysComplete = 'TRUE' AND WorkflowState = `

export const baseDataSql = `SELECT ${baseDataSqlColumns} ${baseDataSqlFrom} ${baseDataSqlWhere}  `

export const allFacetsToPlot = [
  'gender',
  'ethnicity',
  'testType',
  'zipcode',
  'symptom',
  'testLocation',
  'nasalSwabResult',
  'serumTestResult',
]
export const dataSql = `${baseDataSql} 'Uncategorized'`
const sql = dataSql

export const uncategorized: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    shouldDeepLink: true,
    sql,
    name: 'Uncategorized Participants',
    columnAliases,
    tableConfiguration: {},
    isRowSelectionVisible: true,
    facetsToPlot: allFacetsToPlot,
    customControls: [
      {
        buttonText: 'Select as potential',
        classNames: 'exampleClassNameToAddToButton',
        onClick: (event) => {
          handleParticipantWorkflowChange(event, 'Potential')
        },
      },
      {
        buttonText: 'Hide from view',
        classNames: 'exampleClassNameToAddToButton',
        onClick: (event) => {
          handleParticipantWorkflowChange(event, 'Hidden')
        },
      },
    ],
  },
}

export default uncategorized
