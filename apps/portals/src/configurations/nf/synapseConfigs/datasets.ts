import { columnAliases } from './commonProps'
import { datasetsSql } from '../resources'
import { SynapseConfig } from 'types/portal-config'
import { CardConfiguration, SynapseConstants } from 'synapse-react-client'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { DetailsPageProps } from 'types/portal-util-types'

export const newDatasetsSql = `${datasetsSql} order by ROW_ID desc limit 3`
const rgbIndex = 8

export const datasetCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.DATASET,
    title: 'title',
    description: 'description',
    secondaryLabels: [
      // 'assay',
      'doi',
      'datasetSizeInBytes',
      'diseaseFocus',
      'fundingAgency',
      'datasetItemCount',
      'dataType',
      'series',
      'yearProcessed',
    ],
  },
  titleLinkConfig: {
    isMarkdown: false,
    matchColumnName: 'id',
    URLColumnName: 'id',
    baseURL: 'Explore/Datasets/DetailsPage',
  },
}
const datasets: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    shouldDeepLink: true,
    sql: datasetsSql,
    cardConfiguration: datasetCardConfiguration,
    name: 'Datasets',
    columnAliases,
    searchConfiguration: {
      searchable: [
        'title',
        'description',
        'studyName',
        'diseaseFocus',
        'manifestation',
        'fundingAgency',
      ],
    },
  },
}

export const datasetDetailsPageConfig: DetailsPageProps = {
  sql: datasetsSql,
  sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
  showMenu: false,
  synapseConfigArray: [
    // {
    //   name: 'Markdown',
    //   columnName: 'datasetDescription',
    //   title: 'Description',
    //   props: {},
    // },
    // {
    //   name: 'Markdown',
    //   columnName: 'acknowledgmentStatement',
    //   title: 'Acknowledgment',
    //   props: {},
    // },
    {
      name: 'QueryWrapperPlotNav',
      // title: 'Files',
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
        defaultShowPlots: false,
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

export default datasets
