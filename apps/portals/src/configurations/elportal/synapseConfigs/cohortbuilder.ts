import { SynapseConfig } from 'types/portal-config'
import {
  cavaticaConnectAccountURL,
  cohortBuilderFilesSql,
  cohortBuilderSql,
  defaultSearchConfiguration,
} from '../resources'
import { handleSelectedParticipantsToFiles } from './handleParticipantsToFiles'
import { handleSelectedFilesToParticipants } from './handleFilesToParticipants'
import {
  QueryWrapperSynapsePlotProps,
  QueryWrapperSynapsePlotRowClickEvent,
} from 'synapse-react-client/src/components/QueryWrapperPlotNav/QueryWrapperSynapsePlot'
import { SynapseUtilityFunctions } from 'synapse-react-client'

const rgbIndex = 1

const handlePlotClick = (event: QueryWrapperSynapsePlotRowClickEvent) => {
  // window.alert(`Handling click on this row: ${JSON.stringify(event.row)}`)
  const { setRangeFacetValue } = event.queryContext
  let newMin: string | undefined = undefined,
    newMax: string | undefined = undefined
  const value = event.row.values[0] as string
  const values = value.match(/\d+/g)
  if (values && values.length > 0) {
    newMin = values[0]
    if (values.length > 1) {
      newMax = values[1]
    }
  }
  // need to set both for the combined range filter
  setRangeFacetValue({ columnName: 'minAge' }, newMin, newMax)
  setRangeFacetValue({ columnName: 'maxAge' }, newMin, newMax)
}
const getPlotConfig = (tableId: string) => {
  const plotConfig: QueryWrapperSynapsePlotProps = {
    title: 'Age Distribution',
    query: `SELECT cast((case when maxAge >= 0 and maxAge < 10  then ' 0 - 9 ' 
    when maxAge >= 10 and maxAge < 20  then ' 10 - 19 '
    when maxAge >= 20 and maxAge < 30  then ' 20 - 29 ' 
    when maxAge >= 30 and maxAge < 40  then ' 30 - 39 ' 
    when maxAge >= 40 and maxAge < 50  then ' 40 - 49 ' 
    when maxAge >= 50 and maxAge < 60  then ' 50 - 59 '
    when maxAge >= 60 and maxAge < 70  then ' 60 - 69 ' 
    when maxAge >= 70 and maxAge < 80  then ' 70 - 79 '
    when maxAge >= 80 and maxAge < 90  then ' 80 - 89 '
    when maxAge >= 90 and maxAge < 100  then ' 90 - 99 '
    else '100+' END) AS STRING) AS bucket,
          count(*) AS totalWithinRange
            FROM ${tableId}
            WHERE maxAge IS NOT NULL
            GROUP BY bucket
            ORDER BY bucket`,
    type: 'bar',
    // xaxistype: ''
    xtitle: 'Age (years)',
    ytitle: 'Count',
    // barmode: ''
    showlegend: false,
    onCustomPlotClick: handlePlotClick,
  }
  return plotConfig
}
const participantsTableId =
  SynapseUtilityFunctions.parseEntityIdFromSqlStatement(cohortBuilderSql)
export const individualsView: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    name: 'Participants',
    visibleColumnCount: 10,
    facetsToPlot: ['Sex', 'dataTypes', 'Assays', 'Diagnosis', 'fileFormat'],
    isRowSelectionVisible: true,
    rowSelectionPrimaryKey: ['individualID'],
    helpConfiguration: [
      {
        columnName: 'individualID',
        helpText:
          'A unique identifier that represents a study participant in this system. Individual IDs in our system do not match study-specific participant IDs.',
      },
    ],
    combineRangeFacetConfig: {
      label: 'Age',
      minFacetColumn: 'minAge',
      maxFacetColumn: 'maxAge',
    },
    customPlots: [getPlotConfig(participantsTableId)],
    tableConfiguration: {
      showAccessColumn: false,
      showDownloadColumn: false,
      columnLinks: [
        {
          matchColumnName: 'Study',
          isMarkdown: false,
          baseURL: 'Explore/Studies/DetailsPage',
          URLColumnName: 'studyKey',
        },
      ],
    },
    additionalFiltersSessionStorageKey:
      'cohort-builder-individuals-perspective',
    customControls: [
      {
        buttonText: 'View associated files',
        onClick: (event) => {
          handleSelectedParticipantsToFiles(event)
        },
        buttonID: 'ViewAllFilesButton',
      },
    ],
    sql: cohortBuilderSql,
    shouldDeepLink: false,
    searchConfiguration: defaultSearchConfiguration,
  },
}

export const filesView: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    name: 'Data',
    showExportToCavatica: true,
    fileIdColumnName: 'id',
    fileNameColumnName: 'name',
    fileVersionColumnName: 'fileVersion',
    cavaticaConnectAccountURL: cavaticaConnectAccountURL,
    visibleColumnCount: 10,
    isRowSelectionVisible: true,
    rowSelectionPrimaryKey: ['id'],
    additionalFiltersSessionStorageKey: 'cohort-builder-files-perspective',
    combineRangeFacetConfig: {
      label: 'Age',
      minFacetColumn: 'minAge',
      maxFacetColumn: 'maxAge',
    },
    tableConfiguration: {
      showAccessColumn: true,
      showDownloadColumn: true,
      rowEntityIDColumnName: 'id',
      rowEntityVersionColumnName: 'fileVersion',
      columnLinks: [
        {
          matchColumnName: 'Study',
          isMarkdown: false,
          baseURL: 'Explore/Studies/DetailsPage',
          URLColumnName: 'studyKey',
        },
      ],
    },
    sql: cohortBuilderFilesSql,

    customControls: [
      {
        buttonText: 'View associated participants',
        onClick: (event) => {
          handleSelectedFilesToParticipants(event)
        },
      },
    ],
    shouldDeepLink: false,
    searchConfiguration: defaultSearchConfiguration,
  },
}
