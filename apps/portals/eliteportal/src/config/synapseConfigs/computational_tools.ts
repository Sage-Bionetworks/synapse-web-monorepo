import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import { TargetEnum } from 'synapse-react-client/utils/html/TargetEnum'
import { computationalSql, defaultSearchConfiguration } from '../resources'

const computationalSchema: TableToGenericCardMapping = {
  type: SynapseConstants.COMPUTATIONAL,
  title: 'name',
  description: 'summary',
  subTitle: 'softwareType',
  secondaryLabels: [
    'downloadLink',
    'toolOperation',
    'toolInputData',
    'toolInputFormat',
    'toolOutputData',
    'toolOutputFormat',
    'toolType',
    'project',
    'institution',
    'contributor',
  ],
}

export const computationalCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: computationalSchema,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Computational Tools/DetailsPage',
    URLColumnName: 'name',
    matchColumnName: 'name',
    target: TargetEnum.CURRENT_WINDOW,
  },
  labelLinkConfig: [
    {
      isMarkdown: false,
      baseURL: 'Explore/Projects',
      URLColumnName: 'grant',
      matchColumnName: 'grants',
    },
  ],
}

const rgbIndex = 7

const computationalToolsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: computationalSql,
  cardConfiguration: computationalCardConfiguration,
  shouldDeepLink: true,
  name: 'Computational Tools',
  facetsToPlot: ['project'],
  searchConfiguration: defaultSearchConfiguration,
}

export default computationalToolsQueryWrapperPlotNavProps
