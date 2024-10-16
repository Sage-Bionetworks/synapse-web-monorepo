import type {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
import { toolsSql } from '../resources'

const rgbIndex = 8

export const toolCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.COMPUTATIONAL,
    title: 'title',
    description: 'toolDescription',
    secondaryLabels: ['toolLink', 'contributor', 'institutions', 'project'],
  },
  secondaryLabelLimit: 4,
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'toolLink',
    },
    {
      isMarkdown: true,
      matchColumnName: 'project',
    },
  ],
}

export const toolsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: toolsSql,
  shouldDeepLink: true,
  hideDownload: true,
  facetsToPlot: ['contributor', 'institutions', 'projectTitle'],
  name: 'Tools',
  cardConfiguration: toolCardConfiguration,
  searchConfiguration: {
    searchable: ['title', 'toolDescription', 'contributor', 'institutions'],
  },
}
