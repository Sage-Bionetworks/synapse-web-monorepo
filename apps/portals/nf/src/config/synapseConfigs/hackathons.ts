import hackathonActiveSvg from '@/config/style/hackathon-active.svg?url'
import hackathonCompleteSvg from '@/config/style/hackathon-complete.svg?url'
import type { CardConfiguration, QueryWrapperPlotNavProps } from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
import { hackathonsSql } from '../resources'
import { columnAliases } from './commonProps'

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

const hackathons: QueryWrapperPlotNavProps = {
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
}

export default hackathons
