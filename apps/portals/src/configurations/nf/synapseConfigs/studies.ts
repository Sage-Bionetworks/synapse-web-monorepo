import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from 'types/portal-config'
import { columnAliases, searchConfiguration } from './commonProps'

import studyActiveSvg from '../style/study-active.svg'
import studyCompleteSvg from '../style/study-complete.svg'
import studyCompleteHeaderSvg from '../style/study-completed-header.svg'
import studyActiveHeaderSvg from '../style/study-active-header.svg'
import type { CardConfiguration } from 'synapse-react-client'
import { DetailsPageProps } from 'types/portal-util-types'
import { toolsCardConfiguration } from './tools'
import { publicationsCardConfiguration } from './publications'
import { datasetCardConfiguration } from './datasets'
import {
  studiesSql,
  datasetsSql,
  publicationsSql,
  filesSql,
  metadataFilesSql,
  toolStudySql,
} from '../resources'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { NoContentPlaceholderType } from 'synapse-react-client'

export const newStudiesSql = `${studiesSql} order by ROW_ID desc limit 3`
const type = SynapseConstants.GENERIC_CARD

const rgbIndex = 5

export const studyHeaderIconOptions = {
  Active: studyActiveHeaderSvg,
  Completed: studyCompleteHeaderSvg,
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
  columnIconOptions: {
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

const studies: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
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
  },
}

export const studiesDetailPage: DetailsPageProps = {
  showMenu: true,
  sql: studiesSql,
  tabLayout: [
    {
      title: 'Study Details',
      uriValue: 'Details',
      iconName: 'study',
      toolTip: 'Description, methods, acknowledgements and related studies',
      synapseConfigArray: [
        {
          name: 'Markdown',
          columnName: 'accessRequirements',
          title: 'Access Requirements',
          injectMarkdown: true,
          props: {},
        },
        {
          name: 'Markdown',
          columnName: 'acknowledgementStatements',
          title: 'Acknowledgement Statements',
          injectMarkdown: true,
          props: {},
        },
        {
          name: 'CardContainerLogic',
          title: 'Tools Used',
          columnName: 'studyId',
          tableSqlKeys: ['studyId'],
          props: {
            sql: toolStudySql,
            initialLimit: 3,
            ...toolsCardConfiguration,
          },
        },
        {
          name: 'CardContainerLogic',
          title: 'Publications',
          columnName: 'studyId',
          tableSqlKeys: ['studyId'],
          props: {
            sql: publicationsSql,
            ...publicationsCardConfiguration,
          },
        },
        {
          name: 'CardContainerLogic',
          title: 'Related Studies',
          columnName: 'relatedStudies',
          tableSqlKeys: ['studyId'],
          props: {
            sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
            sql: studiesSql,
            columnAliases,
            noContentPlaceholderType: NoContentPlaceholderType.HIDDEN,
            ...studyCardConfiguration,
          },
        },
      ],
    },
    {
      title: 'Study Datasets',
      uriValue: 'Datasets',
      iconName: 'dataset',
      toolTip: 'All of the Datasets generated within this study',
      cssClass: 'tab-dataset',
      synapseConfigArray: [
        {
          name: 'CardContainerLogic',
          columnName: 'studyId',
          title: 'Study Datasets',
          tableSqlKeys: ['studyId'],
          props: {
            ...datasetCardConfiguration,
            sql: datasetsSql,
            sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
          },
        },
      ],
    },
    {
      title: 'Study Files',
      uriValue: 'Files',
      iconName: 'database',
      toolTip: 'All of the file data generated within this study',
      cssClass: 'tab-database',
      synapseConfigArray: [
        {
          name: 'QueryWrapperPlotNav',
          title: 'Study Files',
          props: {
            rgbIndex: 8,
            shouldDeepLink: false,
            sql: filesSql,
            visibleColumnCount: 7,
            sqlOperator: ColumnSingleValueFilterOperator.LIKE,
            tableConfiguration: {
              showAccessColumn: true,
              showDownloadColumn: true,
            },
            // name: 'Study Files',
            columnAliases,
            searchConfiguration,
          },
          tableSqlKeys: ['studyId'],
          columnName: 'studyId',
        },
        {
          name: 'StandaloneQueryWrapper',
          title: 'Metadata Files',
          columnName: 'studyId',
          tableSqlKeys: ['studyId'],
          props: {
            visibleColumnCount: 7,
            sql: metadataFilesSql,
            rgbIndex,
          },
          className: 'metadata-table',
        },
      ],
    },
  ],
}

export default studies
