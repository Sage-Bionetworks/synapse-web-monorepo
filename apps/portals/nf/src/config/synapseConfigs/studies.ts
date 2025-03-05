import type {
  CardConfiguration,
  ColumnIconConfigs,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
import { studiesSql } from '../resources'
import studyActiveHeaderSvg from '../style/study-active-header.svg?url'
import studyActiveSvg from '../style/study-active.svg?url'
import studyCompleteSvg from '../style/study-complete.svg?url'
import studyCompleteHeaderSvg from '../style/study-completed-header.svg?url'
import { columnAliases } from './commonProps'

export const newStudiesSql = `${studiesSql} order by ROW_ID desc limit 3`
const type = SynapseConstants.GENERIC_CARD

const rgbIndex = 5

export const studyHeaderIconOptions = {
  Active: studyActiveHeaderSvg,
  Completed: studyCompleteHeaderSvg,
}

const applyFacetFilter = (columnName: string, value: string) => {
  console.log(`Filtering by ${columnName}: ${value}`)
}

export const studyColumnIconConfigs: ColumnIconConfigs = {
  columns: {
    dataStatus: {
      Available: { icon: 'data', sx: { color: '#28A745' } },
      'Partially Available': { icon: 'data', sx: { color: '#DE9A1F' } },
      'Under Embargo': { icon: 'dataLocked', sx: { color: '#D46D1E' } },
      None: { icon: 'data', sx: { color: '#BBBBBC' } },
    },
    studyStatus: {
      Active: { icon: 'reload', sx: { color: '#28A745' } },
      Completed: { icon: 'check', sx: { color: '#B2242A' } },
    },
    dataType: {
      genomicVariants: {
        icon: 'geneVariants',
        label: 'Genomic Variants Data Available',
        onClick: () => applyFacetFilter('dataType', 'genomicVariants'),
        // onClick: () => applyFacetFilter('dataType', 'genomicVariants'),
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
}
export const studyCardConfiguration: CardConfiguration = {
  type,
  genericCardSchema: {
    title: 'studyName',
    type: SynapseConstants.STUDY,
    description: 'summary',
    subTitle: 'studyLeads',
    icon: 'studyStatus',
    secondaryLabels: [
      'studyStatus',
      'dataStatus',
      'diseaseFocus',
      'manifestation',
      'fundingAgency',
      'institutions',
      'studyId',
      'grantDOI',
    ],
    dataTypeIconNames: 'dataType',
  },
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'grantDOI',
    },
  ],
  iconOptions: {
    Active: studyActiveSvg,
    Completed: studyCompleteSvg,
  },
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Studies/DetailsPage',
    URLColumnName: 'studyId',
    matchColumnName: 'studyId',
  },
  columnIconOptions: studyColumnIconConfigs,
}

const studies: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: studiesSql,
  name: 'Studies',
  shouldDeepLink: true,
  cardConfiguration: studyCardConfiguration,
  columnAliases,
  searchConfiguration: {
    searchable: [
      'studyName',
      'summary',
      'studyLeads',
      'studyStatus',
      'dataStatus',
      'institutions',
      'diseaseFocus',
      'manifestation',
      'fundingAgency',
      'grantDOI',
    ],
  },
}

export default studies
