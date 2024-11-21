import {
  CardConfiguration,
  GenericCardSchema,
  QueryWrapperPlotNavProps,
  SynapseConstants,
} from 'synapse-react-client'
import { computationalSql, defaultSearchConfiguration } from '../resources'

const computationalSchema: GenericCardSchema = {
  type: SynapseConstants.COMPUTATIONAL,
  title: 'name',
  description: 'summary',
  subTitle: 'softwareType',
  secondaryLabels: ['contributor', 'program', 'grants', 'documentation'],
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
