import { SynapseConfig } from 'types/portal-config'
import { cohortBuilderSql, defaultSearchConfiguration } from '../resources'
import { SynapseUtilityFunctions } from 'synapse-react-client'
import {
  ColumnSingleValueFilterOperator,
  ColumnSingleValueQueryFilter,
} from '@sage-bionetworks/synapse-types'

const rgbIndex = 1

const cohortbuilder: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    name: 'Participants',
    // showExportToCavatica: true,
    visibleColumnCount: 10,
    facetsToPlot: ['diagnosis', 'sex'],
    isRowSelectionVisible: true,
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
            values: event.selectedRows!.map((row) => row.values[idColIndex!]!),
          }
          localStorage.setItem(
            SynapseUtilityFunctions.QUERY_FILTERS_LOCAL_STORAGE_KEY(
              'cohort-builder-files-perspective',
            ),
            // TODO: set additionalFiltersLocalStorageKey to 'cohort-builder-files-perspective' in files perspective of Virtual Table
            JSON.stringify([localStorageFilter]),
          )
          window.location.href = '/Explore/Data%20by%20Files'
        },
        isRowSelectionSupported: true,
      },
    ],
    sql: cohortBuilderSql,
    shouldDeepLink: true,
    searchConfiguration: defaultSearchConfiguration,
  },
}

export default cohortbuilder
