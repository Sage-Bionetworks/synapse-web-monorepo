import {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import { computationalSql, defaultSearchConfiguration } from '../resources'

const computationalSchema: TableToGenericCardMapping = {
  type: SynapseConstants.COMPUTATIONAL,
  title: 'name',
  description: 'summary',
  subTitle: 'softwareType',
  secondaryLabels: ['contributor', 'project', 'toolType', 'documentation'],
  link: 'url',
}

export const computationalCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: computationalSchema,
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
