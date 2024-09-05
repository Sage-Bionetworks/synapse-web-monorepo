import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import type { CardConfiguration } from 'synapse-react-client'
import { peopleSql } from '../resources'

const rgbIndex = 3

export const peopleCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: 'People',
    title: 'name',
    secondaryLabels: ['project'],
  },
  secondaryLabelLimit: 4,
  labelLinkConfig: [
    {
      isMarkdown: false,
      baseURL: 'Explore/Projects/DetailsPage',
      matchColumnName: 'project',
      URLColumnName: 'id',
    },
  ],
}

const individuals: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    shouldDeepLink: true,
    hideDownload: true,
    name: 'People',
    sql: peopleSql,
    cardConfiguration: {
      type: SynapseConstants.MEDIUM_USER_CARD,
    },
  },
}

export default individuals
