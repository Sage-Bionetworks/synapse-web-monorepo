import { Meta, StoryObj } from '@storybook/react'

import {
  EXPERIMENTAL_TOOL,
  GENERIC_CARD,
  MEDIUM_USER_CARD,
} from '../src/lib/utils/SynapseConstants'
import { Query } from '../src/lib/utils/synapseTypes'
import QueryWrapperPlotNav from '../src/lib/containers/query_wrapper_plot_nav/QueryWrapperPlotNav'
import {
  ColumnMultiValueFunction,
  ColumnSingleValueFilterOperator,
} from '../src/lib/utils/synapseTypes/Table/QueryFilter'

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
    name: 'Cavatica Integration Demo',
    hideSqlEditorControl: false,
    shouldDeepLink: false,
    showExportToCavatica: true,
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
