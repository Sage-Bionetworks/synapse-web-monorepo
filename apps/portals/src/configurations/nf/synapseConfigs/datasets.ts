import { columnAliases } from './commonProps'
import { datasetsSql } from '../resources'
import { SynapseConfig } from 'types/portal-config'
import { SynapseConstants } from 'synapse-react-client'

export const newDatasetsSql = `${datasetsSql} order by ROW_ID desc limit 3`
const type = 'dataset'
const rgbIndex = 8

const datasets: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    shouldDeepLink: true,
    sql: datasetsSql,
    cardConfiguration: {
      type,
      genericCardSchema: {
        type: SynapseConstants.DATASET,
        title: 'datasetName',
        secondaryLabels: ['series', 'yearProcessed', 'dataType'],
      },
      secondaryLabelLimit: 6,
    },
    name: 'Datasets',
    columnAliases,
    searchConfiguration: {
      searchable: [
        'datasetName',
        'summary',
        'studyName',
        'diseaseFocus',
        'manifestation',
        'fundingAgency',
      ],
    },
  },
}

export default datasets
