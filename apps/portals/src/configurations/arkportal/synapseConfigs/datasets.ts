import { SynapseConfig } from 'types/portal-config'
import columnAliases from '../columnAliases'
import { CardConfiguration, LabelLinkConfig } from 'synapse-react-client/dist/containers/CardContainerLogic'
import { datasetsSql } from '../resources'
import { SynapseConstants } from 'synapse-react-client'
import { GenericCardSchema } from 'synapse-react-client/dist/containers/GenericCard'
import { DetailsPageProps } from 'types/portal-util-types'
import publicationDataSvg from '../style/publicationData.svg'
import experimentalDataSvg from '../style/experimentalData.svg'


const rgbIndex = 0
export const datasetColumnLinks: LabelLinkConfig = [
  {
    isMarkdown: false,
    baseURL: 'Explore/Datasets/DetailsPage',
    URLColumnName: 'id',
    matchColumnName: 'name',
    overrideValueWithRowID: true
  },
]

const dataset: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    shouldDeepLink: true,
    sql: datasetsSql,
    name: 'Datasets',
    columnAliases,
    tableConfiguration: {
      columnLinks: datasetColumnLinks,
    },
    facetsToPlot: [
      'program',
      'project',
      'datasetType',
      'assay',
    ],
    searchConfiguration: {
      searchable: [
        'name',
        'program',
        'project',
        'datasetType',
        'assay',
      ],
    },
    defaultShowFacetVisualization: false
  },
}

export const datasetSchema: GenericCardSchema = {
  type: 'Dataset',
  title: 'name',
  subTitle: 'program',
  description: 'description',
  secondaryLabels: [
    'project',
    'assay',
    'datasetType',
  ],
  icon: 'datasetType',
}

export const datasetCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: datasetSchema,
  titleLinkConfig: {
    isMarkdown: false,
    matchColumnName: 'id',
    URLColumnName: 'id',
    baseURL: 'Explore/Datasets/DetailsPage',
  },
  iconOptions: {
    Publication: publicationDataSvg,
    "Experimental Data": experimentalDataSvg,
  },
}

export const datasetDetailsPageConfig: DetailsPageProps = {
  sql: datasetsSql,
  sqlOperator: '=',
  showMenu: true,

  synapseConfigArray: [
    {
      name: 'Markdown',
      columnName: 'datasetDescription',
      title: 'Description',
      props: {},
    },
    {
      name: 'Markdown',
      columnName: 'acknowledgmentStatement',
      title: 'Acknowledgment',
      props: {},
    },
    {
      name: 'QueryWrapperPlotNav',
      title: 'Files',
      props: {
        rgbIndex,
        sql: '',
        visibleColumnCount: 7,
        tableConfiguration: {
          showAccessColumn: true,
          showDownloadColumn: true,
        },
        shouldDeepLink: false,
        columnAliases,
        defaultShowFacetVisualization: false
      },
      // tableSqlKeys: ['id'],  // Do not modify the sql where condition based on search params
      overrideSqlSourceTable: true, // Instead, modify the sql (SELECT * FROM <search_param_value>).<rowVersionNumber>
      columnName: 'id',
    },
  ],
}

export const datasetsDetailsPage: SynapseConfig[] = [
  {
    name: 'CardContainerLogic',
    isOutsideContainer: true,
    props: {
      ...datasetCardConfiguration,
      sql: datasetsSql,
      isHeader: true,
    },
  },
  {
    name: 'DetailsPage',
    isOutsideContainer: false,
    props: datasetDetailsPageConfig,
    containerClassName: 'DatasetDetailPage container-full-width',
  },
]

export default dataset
