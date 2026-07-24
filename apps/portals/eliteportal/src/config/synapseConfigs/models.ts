import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { defaultSearchConfiguration, modelsSql } from '../resources'

const rgbIndex = 5

export const modelSchema: TableToGenericCardMapping = {
  type: SynapseConstants.MODEL,
  title: 'model_summary',
  subTitle: 'developers',
  description: 'model_description',
  secondaryLabels: [
    'model_type',
    'language',
    'license',
    'model_use_conditions',
    'funded_by',
  ],
}

export const modelCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: modelSchema,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Models/DetailsPage',
    URLColumnName: 'id',
    matchColumnName: 'id',
  },
}

const modelsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: modelsSql,
  cardConfiguration: modelCardConfiguration,
  shouldDeepLink: true,
  name: 'Models',
  facetsToPlot: ['model_type', 'license', 'funded_by'],
  searchConfiguration: defaultSearchConfiguration,
}

export default modelsQueryWrapperPlotNavProps
