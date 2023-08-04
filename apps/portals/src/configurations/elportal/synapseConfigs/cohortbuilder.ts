import { SynapseConfig } from 'types/portal-config'
import {
  cohortBuilderFilesSql,
  cohortBuilderSql,
  defaultSearchConfiguration,
} from '../resources'
import { SynapseUtilityFunctions } from 'synapse-react-client'
import {
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
  ColumnTypeEnum,
} from '@sage-bionetworks/synapse-types'

const rgbIndex = 1

export const individualsView: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    name: 'Participants',
    visibleColumnCount: 10,
    facetsToPlot: ['Diagnosis'],
    isRowSelectionVisible: true,
    combineRangeFacetConfig: {
      label: 'Age',
      minFacetColumn: 'minAge',
      maxFacetColumn: 'maxAge',
      overrideColumnType: ColumnTypeEnum.INTEGER,
    },
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
          // add filter for files perspective, to show files associated to the selected participants only.
          const idColIndex = event.data?.columnModels?.findIndex(
            (cm) => cm.name === 'Individual ID',
          )
          const localStorageFilter: ColumnSingleValueQueryFilter = {
            concreteType:
              'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
            columnName: 'Individual ID',
            operator: ColumnSingleValueFilterOperator.IN,
            isDefiningCondition: true,
            values: event.selectedRows!.map((row) => row.values[idColIndex!]!),
          }
          localStorage.setItem(
            SynapseUtilityFunctions.QUERY_FILTERS_LOCAL_STORAGE_KEY(
              'cohort-builder-files-perspective',
            ),
            // TODO: set additionalFiltersLocalStorageKey to 'cohort-builder-files-perspective' in files perspective of Virtual Table
            JSON.stringify([localStorageFilter]),
          )
          window.location.href = '/Explore/Data by Files v2'
        },
        isRowSelectionSupported: true,
      },
    ],
    sql: cohortBuilderSql,
    shouldDeepLink: true,
    searchConfiguration: defaultSearchConfiguration,
  },
}

export const filesView: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    name: 'Data',
    showExportToCavatica: true,
    cavaticaHelpURL: '/Limited%20Data%20Commons',
    visibleColumnCount: 10,
    isRowSelectionVisible: true,
    additionalFiltersLocalStorageKey: 'cohort-builder-files-perspective',
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
          // add filter for files perspective, to show participants associated to the selected files only.
          const idColIndex = event.data?.columnModels?.findIndex(
            (cm) => cm.name === 'fileId',
          )
          const localStorageFilter: ColumnSingleValueQueryFilter = {
            concreteType:
              'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
            columnName: 'fileIds',
            operator: ColumnSingleValueFilterOperator.IN,
            isDefiningCondition: true,
            values: event.selectedRows!.map((row) => row.values[idColIndex!]!),
          }
          localStorage.setItem(
            SynapseUtilityFunctions.QUERY_FILTERS_LOCAL_STORAGE_KEY(
              'cohort-builder-individuals-perspective',
            ),
            // TODO: set additionalFiltersLocalStorageKey to 'cohort-builder-files-perspective' in files perspective of Virtual Table
            JSON.stringify([localStorageFilter]),
          )
          window.location.href = '/Explore/Data by Participants'
        },
        isRowSelectionSupported: true,
      },
    ],
    shouldDeepLink: true,
    searchConfiguration: defaultSearchConfiguration,
  },
}
