import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { LabelLinkConfig } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import { datasetsSql } from '../resources'

const rgbIndex = 0
export const datasetColumnLinks: LabelLinkConfig = [
  {
    isMarkdown: false,
    baseURL: 'Explore/Datasets/DetailsPage',
    URLColumnName: 'id',
    matchColumnName: 'name',
    overrideValueWithRowID: true,
  },
]

export const datasetQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  shouldDeepLink: true,
  sql: datasetsSql,
  name: 'Datasets',
  defaultShowPlots: false,
  tableConfiguration: {
    columnLinks: datasetColumnLinks,
  },
}

export const datasetSchema: TableToGenericCardMapping = {
  type: 'Dataset',
  title: 'name',
  subTitle: 'program',
  description: 'description',
  secondaryLabels: [
    'datasetItemCount',
    'programPhase',
    'assay',
    'datasetType',
    'id',
  ],
  icon: 'datasetType',
  synapseEntityConfig: {
    id: {
      source: 'rowId',
    },
    version: {
      source: 'rowVersionNumber',
    },
  },
}

export const datasetColumnAliases: Record<string, string> = {
  id: 'On Synapse',
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
}
