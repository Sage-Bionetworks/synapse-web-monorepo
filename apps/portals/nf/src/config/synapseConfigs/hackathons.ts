import type { CardConfiguration } from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { columnAliases } from './commonProps'
import hackathonActiveSvg from '../style/hackathon-active.svg?url'
import hackathonCompleteSvg from '../style/hackathon-complete.svg?url'
import { DetailsPageProps } from '@sage-bionetworks/synapse-portal-framework/types/portal-util-types'
import { hackathonsSql } from '../resources'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'

const type = SynapseConstants.GENERIC_CARD
const rgbIndex = 5

export const hackathonCardConfiguration: CardConfiguration = {
  type,
  genericCardSchema: {
    title: 'name',
    type: 'Hackathon',
    description: 'summary',
    // subTitle: 'subTitle',
    icon: 'studyStatus',
    secondaryLabels: [
      'studyLeads',
      'institutions',
      'studyStatus',
      'diseaseFocus',
      'manifestation',
      'fundingAgency',
      'doi',
      'onSynapse',
    ],
    dataTypeIconNames: 'dataType',
  },
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'doi',
    },
  ],
  iconOptions: {
    Active: hackathonActiveSvg,
    Completed: hackathonCompleteSvg,
  },
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Hackathon/DetailsPage',
    URLColumnName: 'id',
    matchColumnName: 'id',
  },
  columnIconOptions: {
    columns: {
      dataType: {
        genomicVariants: {
          icon: 'geneVariants',
          label: 'Genomic Variants Data Available',
        },
        geneExpression: {
          icon: 'geneExpression',
          label: 'Gene Expression Data Available',
        },
        image: { icon: 'imaging', label: 'Image Data Available' },
        drugScreen: {
          icon: 'lineGraph',
          label: 'Drug Screen (Cell) Data Available',
        },
        'behavior process': {
          icon: 'rat',
          label: 'Behavior Process Data Available',
        },
        chromatinActivity: {
          icon: 'chromatin',
          label: 'Chromatin Activity Data Available',
        },
        proteomics: { icon: 'proteomics', label: 'Proteomics Data Available' },
        kinomics: { icon: 'kinomics', label: 'Kinomics Data Available' },
        clinical: { icon: 'clinical', label: 'Clinical Data Available' },
        other: { icon: 'other', label: 'Other Data Available' },
      },
    },
  },
}

const hackathons: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: hackathonsSql,
    name: 'Hackathon Projects',
    shouldDeepLink: true,
    cardConfiguration: hackathonCardConfiguration,
    columnAliases: { ...columnAliases, studyStatus: 'Status' },
    searchConfiguration: {
      searchable: [
        'name',
        'summary',
        'studyStatus',
        'institutions',
        'diseaseFocus',
        'fundingAgency',
        'manifestation',
      ],
    },
  },
}

export const hackathonsDetailPage: DetailsPageProps = {
  sql: hackathonsSql,
  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
  tabLayout: [
    {
      title: 'Background & Results',
      uriValue: 'Background%24Results',
      iconName: 'chart',
      synapseConfigArray: [
        {
          name: 'Markdown',
          columnName: 'tab1wikipointer',
          title: '',
          injectMarkdown: false,
          props: {},
        },
        {
          name: 'Markdown',
          columnName: 'acknowledgementStatements',
          title: 'Acknowledgements',
          injectMarkdown: true,
          props: {},
        },
      ],
    },
    {
      title: 'Methodology',
      uriValue: 'Methodology',
      iconName: 'database',
      cssClass: 'tab-database',
      synapseConfigArray: [
        {
          name: 'Markdown',
          columnName: 'tab2wikipointer',
          title: '',
          injectMarkdown: false,
          props: {},
        },
      ],
    },
  ],
}

export default hackathons
