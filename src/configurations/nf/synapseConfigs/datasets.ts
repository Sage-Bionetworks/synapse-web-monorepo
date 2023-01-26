import { columnAliases } from './commonProps'
import { datasetsSql } from '../resources'
import { SynapseConfig } from 'types/portal-config'

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
