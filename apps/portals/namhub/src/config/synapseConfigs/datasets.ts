import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { datasetsSql, rgbIndex } from '../resources'

export const datasetColumnAliases: Record<string, string> = {
  projectId: 'Project',
}

export const datasetCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    title: 'name',
    type: SynapseConstants.DATASET,
    secondaryLabels: ['createdOn', 'projectId'],
    includeCitation: true,
    defaultCitationFormat: 'nature',
    synapseEntityConfig: {
      id: {
        source: 'column',
        columnName: 'id',
      },
    },
  },
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Datasets/DetailsPage',
    URLColumnName: 'id',
    matchColumnName: 'id',
  },
}

const datasetsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: datasetsSql,
  name: 'Datasets',
  shouldDeepLink: true,
  cardConfiguration: datasetCardConfiguration,
  columnAliases: datasetColumnAliases,
  defaultShowPlots: false,
}

export default datasetsQueryWrapperPlotNavProps
