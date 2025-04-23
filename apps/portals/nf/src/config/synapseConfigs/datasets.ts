import {
  CardConfiguration,
  QueryWrapperPlotNavProps,
  SynapseConstants,
} from 'synapse-react-client'
import { datasetsSql } from '../resources'
import { columnAliases as sharedColumnAliases } from './commonProps'

export const newDatasetsSql = `${datasetsSql} order by ROW_ID desc limit 3`
export const datasetsRgbIndex = 8

const columnAliases = {
  ...sharedColumnAliases,
  studyId: 'Study Name',
}

const CUSTOM_LABEL_KEY = 'HOW TO DOWNLOAD'
const CUSTOM_LABEL_VALUE =
  'This file is hosted externally, follow the External Link, below'

export const datasetCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.DATASET,
    title: 'title',
    description: 'description',
    customSecondaryLabelConfig: {
      key: CUSTOM_LABEL_KEY,
      value: CUSTOM_LABEL_VALUE,
      isVisible: (schema: Record<string, number>, data: string[]) => {
        return Boolean(data[schema['id']])
      },
    },
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
    downloadCartSynId: 'id',
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
