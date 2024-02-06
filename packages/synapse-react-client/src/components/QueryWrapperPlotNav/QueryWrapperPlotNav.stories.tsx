import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import {
  EXPERIMENTAL_TOOL,
  GENERIC_CARD,
  MEDIUM_USER_CARD,
} from '../../utils/SynapseConstants'
import {
  ColumnSingleValueQueryFilter,
  Query,
} from '@sage-bionetworks/synapse-types'
import QueryWrapperPlotNav from './QueryWrapperPlotNav'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'
import { displayToast } from '../ToastMessage'
import { CustomControlCallbackData } from '../SynapseTable/TopLevelControls/TopLevelControls'
import { QUERY_FILTERS_SESSION_STORAGE_KEY } from '../../utils/functions/SqlFunctions'
import { SynapseClient } from '../../index'
import { QueryWrapperSynapsePlotRowClickEvent } from './QueryWrapperSynapsePlot'

const meta = {
  title: 'Explore/QueryWrapperPlotNav',
  component: QueryWrapperPlotNav,
  decorators: [
    Story => {
      // Add bottom padding so row selection doesn't obscure other UI
      return (
        <div style={{ paddingBottom: '50px' }}>
          <Story />
        </div>
      )
    },
  ],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>
const handlePlotClick = (event: QueryWrapperSynapsePlotRowClickEvent) => {
  // window.alert(`Handling click on this row: ${JSON.stringify(event.row)}`)
  const { getCurrentQueryRequest, executeQueryRequest } = event.queryContext
  const requestCopy = getCurrentQueryRequest()
  requestCopy.query.additionalFilters = [
    ...(requestCopy.query.additionalFilters || []),
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
      columnName: 'resourceType',
      operator: ColumnSingleValueFilterOperator.EQUAL,
      values: [event.row.values[0] as string],
    },
  ]
  executeQueryRequest(requestCopy)
}
export const Cards: Story = {
  args: {
    name: 'Tools',
    sql: 'SELECT * FROM syn51730943',
    customPlots: [
      {
        query:
          'SELECT resourceType, count(resourceType) FROM syn51730943 GROUP BY resourceType ',
        type: 'bar',
        title: 'Resource Type',
        onCustomPlotClick: handlePlotClick,
      },
    ],
    limit: 5,
    defaultShowPlots: false,
    defaultShowSearchBox: true,
    shouldDeepLink: true,
    cardConfiguration: {
      type: GENERIC_CARD,
      titleLinkConfig: {
        isMarkdown: false,
        baseURL: 'Explore/Tools/DetailsPage',
        URLColumnName: 'resourceId',
        matchColumnName: 'resourceId',
        overrideLinkURLColumnName: 'biobankURL',
      },
      secondaryLabelLimit: 4,
      labelLinkConfig: [
        {
          isMarkdown: true,
          matchColumnName: 'investigatorWebsite',
        },
      ],
      genericCardSchema: {
        type: EXPERIMENTAL_TOOL,
        title: 'resourceName',
        subTitle: 'resourceType',
        description: 'description',
        secondaryLabels: [
          'investigatorName',
          'institution',
          'investigatorWebsite',
          'rrid',
          'synonyms',
          'cellLineCategory',
          'cellLineDisease',
          'modelofManifestation',
          'backgroundStrain',
          'backgroundSubstrain',
          'animalModelDisease',
          'animalModelOfManifestation',
          'targetAntigen',
          'reactiveSpecies',
          'hostOrganism',
          'specimenTissueType',
          'specimenPreparationMethod',
          'diseaseType',
          'tumorType',
          'specimenFormat',
          'specimenType',
          'dateModified',
        ],
      },
    },
  },
}
export const FileView: Story = {
  args: {
    tableConfiguration: {
      showAccessColumn: true,
      showDirectDownloadColumn: true,
      columnLinks: [
        {
          matchColumnName: 'study',
          isMarkdown: false,
          baseURL: 'Explore/Studies/DetailsPage',
          URLColumnName: 'Study_Name',
          wrapValueWithParens: true,
        },
        {
          matchColumnName: 'name',
          isMarkdown: false,
          baseURL: 'Explore/Files/DetailsPage',
          URLColumnName: 'FileId',
          overrideValueWithRowID: true,
          wrapValueWithParens: false,
        },
      ],
    },
    searchConfiguration: {
      searchable: [
        'study',
        'dataType',
        'assay',
        'organ',
        'tissue',
        'species',
        'diagnosis',
        'sex',
        'consortium',
        'grant',
        'modelSystemName',
        'treatmentType',
        'specimenID',
        'individualID',
        'individualIdSource',
        'specimenIdSource',
        'resourceType',
        'dataSubtype',
        'metadataType',
        'assayTarget',
        'analysisType',
        'cellType',
        'nucleicAcidSource',
        'fileFormat',
        'group',
        'name',
        'isModelSystem',
        'isConsortiumAnalysis',
        'isMultiSpecimen',
        'metaboliteType',
        'chromosome',
      ],
    },
    shouldDeepLink: true,
    visibleColumnCount: 10,
    rgbIndex: 1,
    name: 'Data',
    sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
    sql: 'SELECT * FROM syn11346063.28',
    hideSqlEditorControl: false,
  },
}

const queryWithAdditionalFilter: Query = {
  sql: 'SELECT * FROM syn11346063.28',
  additionalFilters: [
    {
      concreteType:
        'org.sagebionetworks.repo.model.table.ColumnMultiValueFunctionQueryFilter',
      columnName: 'study',
      function: ColumnMultiValueFunction.HAS_LIKE,
      values: ['ADMC_ADNI_BakerLipidomics'],
    },
  ],
}

/**
 * This demo contains a filter on a locked column. This type of configuration should hide that the filter on the locked
 * column is applied, making it seem as if the total contents of the table are just the filtered results. Common in
 * DetailsPages in portals.
 */
export const FileViewWithLockedColumn: Story = {
  args: {
    ...FileView.args,
    shouldDeepLink: false,
    initQueryJson: JSON.stringify(queryWithAdditionalFilter),
    lockedColumn: {
      columnName: 'study',
      value: '',
    },
  },
}

export const SendToCavatica: Story = {
  args: {
    sql: 'SELECT * FROM syn51186974',
    isRowSelectionVisible: true,
    tableConfiguration: {
      showAccessColumn: true,
      showDirectDownloadColumn: true,
    },
    unitDescription: 'file',
    name: 'CAVATICA Integration Demo',
    hideSqlEditorControl: false,
    shouldDeepLink: false,
    showExportToCavatica: true,
  },
}

const getAllIDs = async (event: CustomControlCallbackData) => {
  // get all ids
  const ids: string[] = []
  event.request!.query.sql = 'select id from syn51186974'
  const results = await SynapseClient.getFullQueryTableResults(event.request!)
  results.queryResult?.queryResults.rows.map(row => {
    if (row.values && row.values[0]) ids.push(row.values[0])
  })
  return ids
}

const handleRowSelectionCustomCommandClick = async (
  event: CustomControlCallbackData,
) => {
  const isSelection = event.selectedRows && event.selectedRows.length > 0
  displayToast(
    `Custom action applied to ${
      isSelection ? event.selectedRows!.length : 'all'
    } rows (see js console for more information)`,
  )
  console.log('Rows selected:')
  console.log(event.selectedRows)
  const idColIndex = event.data?.columnModels?.findIndex(cm => cm.name === 'id')

  const ids = isSelection
    ? event.selectedRows!.map(row => row.values[idColIndex!]!)
    : await getAllIDs(event)
  const localStorageFilter: ColumnSingleValueQueryFilter = {
    concreteType:
      'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
    columnName: 'id',
    operator: ColumnSingleValueFilterOperator.IN,
    values: ids,
  }
  localStorage.setItem(
    QUERY_FILTERS_SESSION_STORAGE_KEY('syn51186974-selectedfiles'),
    JSON.stringify([localStorageFilter]),
  )
  console.log(
    'Local Storage value set, refresh table to see additionalFilter QueryFilter being utilized',
  )
  // TODO: PORTALS-2682: event.refresh() should refresh the data but it currently doesn't
  event.refresh()
}

// See handleParticipantWorkflowChange in crc-researcher for a more complex example
export const TableRowSelectionWithCustomCommand: Story = {
  args: {
    sql: 'SELECT * FROM syn51186974',
    isRowSelectionVisible: true,
    tableConfiguration: {},
    name: 'Row Selection Demo',
    hideSqlEditorControl: true,
    shouldDeepLink: false,
    // demo custom additional filter local storage key.
    // In the cohort builder, the file view of the Virtual Table should have one value,
    // while the participant view of the same Virtual Table should have another.
    // The custom commands should add filters that target the other perspective
    // (file command adds filter for participant perspective, participant command adds filter for the file perspective)
    additionalFiltersSessionStorageKey: 'syn51186974-selectedfiles',
    customControls: [
      {
        buttonText: 'Row Custom Command',
        onClick: event => {
          handleRowSelectionCustomCommandClick(event)
        },
        buttonID: 'RowSelectionCustomCommandButtonID',
      },
    ],
  },
}
export const TableHasAccessRequirement: Story = {
  args: {
    sql: 'SELECT * FROM syn51425243',
    tableConfiguration: {
      showAccessColumn: true,
      showDirectDownloadColumn: true,
    },
    name: 'Table Has Access Requirement',
    hideSqlEditorControl: false,
    shouldDeepLink: false,
  },
}
export const TableWithNoDownloadAccess: Story = {
  args: {
    sql: 'SELECT * FROM syn51489955',
    tableConfiguration: {
      showAccessColumn: false,
      showDirectDownloadColumn: false,
    },
    name: 'No Table Download Access',
    hideSqlEditorControl: false,
    shouldDeepLink: false,
    // onViewSharingSettingsClicked: undefined
    onViewSharingSettingsClicked: benefactorEntityId => {
      displayToast(
        `Open the ${benefactorEntityId} Sharing Settings dialog.  If undefined, send to the entity page.`,
        'info',
        {
          primaryButtonConfig: {
            text: 'Open Entity Page',
            href: `https://www.synapse.org/#!Synapse:${benefactorEntityId}`,
          },
        },
      )
    },
  },
}

export const Dataset: Story = {
  args: {
    sql: 'SELECT * FROM syn26302617',
    tableConfiguration: {
      showAccessColumn: true,
      showDirectDownloadColumn: true,
    },
    name: 'Dataset Demo',
    sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
    hideSqlEditorControl: false,
    shouldDeepLink: false,
    showExportToCavatica: true,
    helpConfiguration: [
      {
        columnName: 'id',
        helpText: 'This represents the unique ID in Synapse',
      },
    ],
  },
}

export const DatasetCollection: Story = {
  args: {
    sql: 'SELECT * FROM syn33199585',
    tableConfiguration: {
      showAccessColumn: true,
      showDirectDownloadColumn: true,
    },
    name: 'Dataset Collection Demo',
    sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
    hideSqlEditorControl: false,
    shouldDeepLink: false,
  },
}

export const People: Story = {
  args: {
    sql: 'SELECT * FROM syn13897207',

    name: 'People Demo',
    sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
    hideSqlEditorControl: false,
    shouldDeepLink: false,
    cardConfiguration: {
      type: MEDIUM_USER_CARD,
    },
  },
}

export const TableWithJSONColumns: Story = {
  args: {
    sql: 'SELECT * FROM syn52115635',
    tableConfiguration: {},
    name: 'JSON Column Demo',
    hideSqlEditorControl: false,
    shouldDeepLink: false,
  },
}

export const MaterializedViewOfFiles: Story = {
  args: {
    sql: 'SELECT * FROM syn52737576',
    tableConfiguration: {
      showAccessColumn: true,
      showDirectDownloadColumn: true,
      rowEntityIDColumnName: 'id',
      rowEntityVersionColumnName: 'currentVersion',
    },
    name: 'MV with File Commands Demo',
    sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
    hideSqlEditorControl: false,
    shouldDeepLink: false,
    showExportToCavatica: true,
  },
}
