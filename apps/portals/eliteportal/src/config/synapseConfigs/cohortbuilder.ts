import type { CohortBuilderProps } from 'synapse-react-client/components/CohortBuilder/CohortBuilder'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import type {
  QueryWrapperSynapsePlotProps,
  QueryWrapperSynapsePlotRowClickEvent,
} from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperSynapsePlot'
import * as SynapseUtilityFunctions from 'synapse-react-client/utils/functions/index'
import {
  cavaticaConnectAccountURL,
  cohortBuilderFilesSql,
  cohortBuilderSql,
  cohortBuilderV2FilesTableId,
  cohortBuilderV2ParticipantsSourceTableId,
  cohortBuilderV2ParticipantsTableId,
  defaultSearchConfiguration,
  enabledAnalysisPlatforms,
} from '../resources'
import {
  viewAssociatedParticipantsCustomControl,
  viewAssociatedFilesCustomControl,
} from '@sage-bionetworks/synapse-portal-framework/shared-config/cohortBuilderHandlers'

const rgbIndex = 1

const handlePlotClick = (event: QueryWrapperSynapsePlotRowClickEvent) => {
  // window.alert(`Handling click on this row: ${JSON.stringify(event.row)}`)
  if (!event.queryContext) return
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

export const individualsViewQueryWrapperPlotNavProps: QueryWrapperPlotNavProps =
  {
    rgbIndex,
    name: 'Cohort Discovery',
    visibleColumnCount: 10,
    facetsToPlot: ['Sex', 'dataTypes', 'Assays', 'Diagnosis', 'fileFormat'],
    isRowSelectionVisible: true,
    hideCopyToClipboard: true, //PORTALS-3212
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
    customControls: [viewAssociatedFilesCustomControl],
    sql: cohortBuilderSql,
    shouldDeepLink: false,
    searchConfiguration: defaultSearchConfiguration,
  }

export const filesViewQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  name: 'Participant Data',
  enabledExternalAnalysisPlatforms: enabledAnalysisPlatforms,
  fileIdColumnName: 'id',
  fileNameColumnName: 'fileName',
  fileVersionColumnName: 'fileVersion',
  cavaticaConnectAccountURL: cavaticaConnectAccountURL,
  visibleColumnCount: 10,
  isRowSelectionVisible: true,
  hideCopyToClipboard: true, //PORTALS-3212
  rowSelectionPrimaryKey: ['id'],
  additionalFiltersSessionStorageKey: 'cohort-builder-files-perspective',
  tableConfiguration: {
    showAccessColumn: true,
    showAccessColumnHeader: true,
    showDownloadColumn: true,
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

  customControls: [viewAssociatedParticipantsCustomControl],
  shouldDeepLink: false,
  searchConfiguration: defaultSearchConfiguration,
}

export const cohortBuilderV2Props: CohortBuilderProps = {
  participantsTableId: cohortBuilderV2ParticipantsTableId,
  filesTableId: cohortBuilderV2FilesTableId,
  participantsSourceTableId: cohortBuilderV2ParticipantsSourceTableId,
  shouldDeepLink: true,
  sampleQueries: {
    'Longevity Cohort, age 60+': {
      combinator: 'AND',
      children: [
        {
          columnName: 'binnedAge',
          op: 'is_any_of',
          values: [
            '100-104',
            '105-109',
            '110+',
            '60-64',
            '65-69',
            '70-74',
            '75-79',
            '80-84',
            '85-89',
            '90-94',
            '95-99',
          ],
        },
        {
          columnName: 'cohort',
          op: 'is_any_of',
          values: ['LLFS Denmark Family', 'LLFS US Family'],
        },
        { columnName: 'isPostMortem', op: 'is_any_of', values: ['false'] },
      ],
    },
    'Male Longevity Cohort, multiple assays': {
      combinator: 'AND',
      children: [
        { columnName: 'Sex', op: 'is_any_of', values: ['Male'] },
        { columnName: 'cohort', op: 'is_any_of', values: ['LLFS US Family'] },
        {
          columnName: 'Assays',
          op: 'is_all_of',
          values: ['bisulfiteSeq', 'wholeGenomeSeq'],
        },
      ],
    },
    'Metabolomics data, age 80-99': {
      combinator: 'AND',
      children: [
        {
          columnName: 'binnedAge',
          op: 'is_any_of',
          values: ['80-84', '85-89', '90-94', '95-99'],
        },
        { columnName: 'dataSubtypes', op: 'is_any_of', values: ['raw'] },
        { columnName: 'dataTypes', op: 'is_any_of', values: ['metabolomics'] },
      ],
    },
  },
}
