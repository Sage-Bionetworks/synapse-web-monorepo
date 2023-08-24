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
import { QUERY_FILTERS_LOCAL_STORAGE_KEY } from '../../utils/functions/SqlFunctions'
import { SynapseClient } from '../../index'

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

export const Cards: Story = {
  args: {
    name: 'Tools',
    sql: 'SELECT * FROM syn26438037',
    limit: 5,
    defaultShowFacetVisualization: false,
    defaultShowSearchBox: true,
    shouldDeepLink: true,
    searchConfiguration: {
      fullTextSearchHelpURL:
        'https://help.nf.synapse.org/NFdocs/Tips-for-Search.2640478225.html',
    },
    cardConfiguration: {
      type: GENERIC_CARD,
      titleLinkConfig: {
        isMarkdown: false,
        baseURL: 'Explore/Tools/DetailsPage',
        URLColumnName: 'resourceId',
        matchColumnName: 'resourceId',
        overrideLinkURLColumnName: 'biobankURL',
        // target: TargetEnum.NEW_WINDOW
      },
      secondaryLabelLimit: 4,
      genericCardSchema: {
        type: EXPERIMENTAL_TOOL,
        title: 'resourceName',
        subTitle: 'resourceType',
        description: 'description',
        secondaryLabels: [
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
        ],
      },
      labelLinkConfig: [
        {
          isMarkdown: true,
          matchColumnName: 'rrid',
          tooltipText:
            'This is to demo a custom tooltip that describes column data',
        },
      ],
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
    cavaticaHelpURL:
      'https://staging.eliteportal.synapse.org/Limited%20Data%20Commons',
  },
}

export const CombinedRangeFacetsDemo: Story = {
  args: {
    sql: 'SELECT * FROM syn52211295',
    combineRangeFacetConfig: {
      label: 'Age',
      minFacetColumn: 'minAge',
      maxFacetColumn: 'maxAge',
    },
    tableConfiguration: {},
  },
}

const handleRowSelectionCustomCommandClick = (
  event: CustomControlCallbackData,
) => {
  displayToast(
    `Custom action applied to ${
      event.selectedRows!.length
    } rows (see js console for more information)`,
  )
  console.log('Rows selected:')
  console.log(event.selectedRows)
  const idColIndex = event.data?.columnModels?.findIndex(cm => cm.name === 'id')
  const localStorageFilter: ColumnSingleValueQueryFilter = {
    concreteType:
      'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
    columnName: 'id',
    operator: ColumnSingleValueFilterOperator.IN,
    values: event.selectedRows!.map(row => row.values[idColIndex!]!),
  }
  localStorage.setItem(
    QUERY_FILTERS_LOCAL_STORAGE_KEY('syn51186974-selectedfiles'),
    JSON.stringify([localStorageFilter]),
  )
  console.log(
    'Local Storage value set, refresh table to see additionalFilter QueryFilter being utilized',
  )
  // TODO: PORTALS-2682: event.refresh() should refresh the data but it currently doesn't
  event.refresh()
}

const handleAllDataCustomCommandClick = async (
  event: CustomControlCallbackData,
) => {
  displayToast(
    `Custom action applied to all results (see js console for more information)`,
  )

  const ids: string[] = []
  if (event.request) {
    console.log('Query request is available')
    console.log(event.request)
    // get all ids
    event.request.query.sql = 'select id from syn51186974'
    const results = await SynapseClient.getFullQueryTableResults(event.request)
    results.queryResult?.queryResults.rows.map(row => {
      if (row.values && row.values[0]) ids.push(row.values[0])
    })
  }

  const localStorageFilter: ColumnSingleValueQueryFilter = {
    concreteType:
      'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
    columnName: 'id',
    operator: ColumnSingleValueFilterOperator.IN,
    values: ids,
  }
  localStorage.setItem(
    QUERY_FILTERS_LOCAL_STORAGE_KEY('syn51186974-selectedfiles'),
    JSON.stringify([localStorageFilter]),
  )
  console.log(
    'Local Storage value set, refresh table to see additionalFilter QueryFilter being utilized',
  )
  // refresh causes the component to remount, which picks up the new filter from localstorage
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
    additionalFiltersLocalStorageKey: 'syn51186974-selectedfiles',
    customControls: [
      {
        buttonText: 'Row Selection Custom Command',
        onClick: event => {
          handleRowSelectionCustomCommandClick(event)
        },
        isRowSelectionSupported: true,
      },
      {
        buttonText: 'All Results Custom Command',
        onClick: event => {
          handleAllDataCustomCommandClick(event)
        },
        isRowSelectionSupported: false,
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
