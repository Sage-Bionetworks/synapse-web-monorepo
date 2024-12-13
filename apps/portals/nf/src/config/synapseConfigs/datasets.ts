import { CardConfiguration } from 'synapse-react-client/components/CardContainerLogic/index'
import { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/index'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { datasetsSql } from '../resources'
import { columnAliases as sharedColumnAliases } from './commonProps'

export const newDatasetsSql = `${datasetsSql} order by ROW_ID desc limit 3`
export const datasetsRgbIndex = 8

const columnAliases = {
  ...sharedColumnAliases,
  studyId: 'Study Name',
}

export const datasetCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.DATASET,
    title: 'title',
    description: 'description',
    secondaryLabels: [
      // 'assay',
      'studyId',
      'doi',
      'datasetSizeInBytes',
      'diseaseFocus',
      'fundingAgency',
      'datasetItemCount',
      'dataType',
      'series',
      'yearProcessed',
      'visualizeDataOn',
    ],
  },
  labelLinkConfig: [
    {
      isMarkdown: false,
      matchColumnName: 'studyId',
      URLColumnName: 'studyId',
      baseURL: 'Explore/Studies/DetailsPage',
      resolveEntityName: true,
    },
  ],
  titleLinkConfig: {
    isMarkdown: false,
    matchColumnName: 'id',
    URLColumnName: 'id',
    baseURL: 'Explore/Datasets/DetailsPage',
  },
}
const datasets: QueryWrapperPlotNavProps = {
  rgbIndex: datasetsRgbIndex,
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
}

export default datasets
