import { Meta, StoryObj } from '@storybook/react'

import {
  EXPERIMENTAL_TOOL,
  GENERIC_CARD,
  MEDIUM_USER_CARD,
} from '../src/utils/SynapseConstants'
import {
  ColumnSingleValueQueryFilter,
  Query,
} from '@sage-bionetworks/synapse-types'
import QueryWrapperPlotNav from '../src/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from '@sage-bionetworks/synapse-types'
import { displayToast } from '../src/components/ToastMessage'
import { CustomControlCallbackData } from '../src/components/SynapseTable/TopLevelControls'
import { QUERY_FILTERS_LOCAL_STORAGE_KEY } from '../src/utils/functions/SqlFunctions'

const meta = {
  title: 'Explore/QueryWrapperPlotNav',
  component: QueryWrapperPlotNav,
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
      showDownloadColumn: true,
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
    tableConfiguration: {
      showAccessColumn: true,
      showDownloadColumn: true,
    },
    name: 'CAVATICA Integration Demo',
    hideSqlEditorControl: false,
    shouldDeepLink: false,
    showExportToCavatica: true,
    cavaticaHelpURL:
      'https://staging.eliteportal.synapse.org/Limited%20Data%20Commons',
  },
}

const handleCustomCommandClick = async (event: CustomControlCallbackData) => {
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
    QUERY_FILTERS_LOCAL_STORAGE_KEY('syn51186974'),
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
    tableConfiguration: {
      isRowSelectionVisible: true,
    },
    name: 'Row Selection Demo',
    hideSqlEditorControl: true,
    shouldDeepLink: false,
    customControls: [
      {
        buttonText: 'Custom Command',
        onClick: event => {
          handleCustomCommandClick(event)
        },
      },
    ],
  },
}
export const TableHasAccessRequirement: Story = {
  args: {
    sql: 'SELECT * FROM syn51425243',
    tableConfiguration: {
      showAccessColumn: true,
      showDownloadColumn: true,
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
      showDownloadColumn: false,
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
      showDownloadColumn: true,
    },
    name: 'Dataset Demo',
    sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
    hideSqlEditorControl: false,
    shouldDeepLink: false,
  },
}

export const DatasetCollection: Story = {
  args: {
    sql: 'SELECT * FROM syn33199585',
    tableConfiguration: {
      showAccessColumn: true,
      showDownloadColumn: true,
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
