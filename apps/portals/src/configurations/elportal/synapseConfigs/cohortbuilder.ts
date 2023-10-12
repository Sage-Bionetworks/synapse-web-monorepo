import { SynapseConfig } from 'types/portal-config'
import {
  cohortBuilderFilesSql,
  cohortBuilderSql,
  defaultSearchConfiguration,
} from '../resources'
import {
  handleParticipantsToFiles,
  handleSelectedParticipantsToFiles,
} from './handleParticipantsToFiles'
import {
  handleFilesToParticipants,
  handleSelectedFilesToParticipants,
} from './handleFilesToParticipants'
import {
  QueryWrapperSynapsePlotProps,
  QueryWrapperSynapsePlotRowClickEvent,
} from 'synapse-react-client/src/components/QueryWrapperPlotNav/QueryWrapperSynapsePlot'
import { SynapseUtilityFunctions } from 'synapse-react-client'

const rgbIndex = 1

const handlePlotClick = (event: QueryWrapperSynapsePlotRowClickEvent) => {
  window.alert(`Handling click on this row: ${JSON.stringify(event.row)}`)
  const { getCurrentQueryRequest, executeQueryRequest } = event.queryContext
  let newMin: number | undefined = undefined,
    newMax: number | undefined = undefined
  const value = event.row.values[0] as string
  const values = value.match(/\d+/g)
  if (values && values.length > 0) {
    newMin = parseInt(values[0])
    if (values.length > 1) {
      newMax = parseInt(values[1])
    }
  }
  const requestCopy = getCurrentQueryRequest()
  requestCopy.query.selectedFacets = [
    ...(requestCopy.query.selectedFacets || []),
    {
      columnName: 'maxAge',
      concreteType:
        'org.sagebionetworks.repo.model.table.FacetColumnRangeRequest',
      min: newMin,
      max: newMax,
    },
  ]
  executeQueryRequest(requestCopy)
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
            GROUP BY 1
            ORDER BY bucket`,
    type: 'bar',
    // xaxistype: ''
    xtitle: 'Age (years)',
    ytitle: '',
    // barmode: ''
    showlegend: 'false',
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
          matchColumnName: 'study',
          isMarkdown: false,
          baseURL: 'Explore/Studies/DetailsPage',
          URLColumnName: 'studyKey',
          wrapValueWithParens: false,
        },
      ],
    },
    additionalFiltersLocalStorageKey: 'cohort-builder-individuals-perspective',
    customControls: [
      {
        buttonText: 'View files in selection',
        onClick: (event) => {
          handleSelectedParticipantsToFiles(event)
        },
        isRowSelectionSupported: true,
      },
      {
        buttonText: 'View associated files',
        onClick: (event) => {
          handleParticipantsToFiles(event)
        },
        isRowSelectionSupported: false,
      },
    ],
    sql: cohortBuilderSql,
    shouldDeepLink: true,
    searchConfiguration: defaultSearchConfiguration,
  },
}

const filesTableId = SynapseUtilityFunctions.parseEntityIdFromSqlStatement(
  cohortBuilderFilesSql,
)
export const filesView: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    name: 'Data',
    showExportToCavatica: true,
    fileIdColumnName: 'fileId',
    fileNameColumnName: 'fileId',
    fileVersionColumnName: 'currentVersion',
    cavaticaHelpURL: '/Limited%20Data%20Commons',
    visibleColumnCount: 10,
    isRowSelectionVisible: true,
    rowSelectionPrimaryKey: ['fileId'],
    additionalFiltersLocalStorageKey: 'cohort-builder-files-perspective',
    combineRangeFacetConfig: {
      label: 'Age',
      minFacetColumn: 'minAge',
      maxFacetColumn: 'maxAge',
    },
    customPlots: [getPlotConfig(filesTableId)],
    tableConfiguration: {
      showAccessColumn: true,
      showDownloadColumn: true,
      columnLinks: [
        {
          matchColumnName: 'study',
          isMarkdown: false,
          baseURL: 'Explore/Studies/DetailsPage',
          URLColumnName: 'studyKey',
        },
      ],
    },
    sql: cohortBuilderFilesSql,

    customControls: [
      {
        buttonText: 'View participants in selection',
        onClick: (event) => {
          handleSelectedFilesToParticipants(event)
        },
        isRowSelectionSupported: true,
      },
      {
        buttonText: 'View associated participants',
        onClick: (event) => {
          handleFilesToParticipants(event)
        },
        isRowSelectionSupported: false,
      },
    ],
    shouldDeepLink: true,
    searchConfiguration: defaultSearchConfiguration,
  },
}
