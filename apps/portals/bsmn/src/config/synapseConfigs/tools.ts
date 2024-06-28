import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import type { CardConfiguration } from 'synapse-react-client'
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

const tools: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
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
  },
}

export default tools
