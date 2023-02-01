import { SynapseConfig } from 'types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import { CardConfiguration } from 'synapse-react-client/dist/containers/CardContainerLogic'
import { MEDIUM_USER_CARD } from 'synapse-react-client/dist/utils/SynapseConstants'
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
      type: MEDIUM_USER_CARD,
    },
  },
}

export default individuals
