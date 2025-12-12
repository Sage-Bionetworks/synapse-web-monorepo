import {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { datasetsSql } from '../resources'
import { columnAliases as sharedColumnAliases } from './commonProps'
import { studyColumnIconConfigs } from './studies'

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
    includeCitation: true,
    defaultCitationFormat: 'nature',
    description: 'description',
    customSecondaryLabelConfig: {
      key: CUSTOM_LABEL_KEY,
      value: CUSTOM_LABEL_VALUE,
      isVisible: (schema: Record<string, number>, data: string[]) => {
        return Boolean(data[schema['id']])
      },
    },
    secondaryLabels: [
      'measurementTechnique',
      'studyId',
      'doi',
      'datasetSizeInBytes',
      'diseaseFocus',
      'funder',
      'datasetItemCount',
      'dataType',
      'series',
      'yearProcessed',
      'visualizeDataOn',
    ],
    dataTypeIconNames: 'dataType',
    synapseEntityConfig: {
      id: {
        source: 'rowId',
      },
      version: {
        source: 'rowVersionNumber',
      },
    },
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
  columnIconOptions: studyColumnIconConfigs,
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
      'funder',
    ],
  },
}

export default datasets
