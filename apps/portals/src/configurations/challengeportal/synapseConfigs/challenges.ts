import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from 'types/portal-config'
import { GenericCardSchema } from 'synapse-react-client/dist/containers/GenericCard'
import {
  CardConfiguration, CardLink,
} from 'synapse-react-client/dist/containers/CardContainerLogic'
import { challengeProjectsSql } from '../resources'

const rgbIndex = 3

export const challengesSchema: GenericCardSchema = {
  type: 'challenge',
  title: 'name',
  subTitle: 'Status',
  description: 'Abstract',
  secondaryLabels: [
    'Difficulty',
    'ChallengeType',
    'Tags',
  ]
}
export const challengeTitleLinkConfig:CardLink = {
  isMarkdown: false,
  baseURL: 'Challenges/DetailsPage',
  URLColumnName: 'id',
  matchColumnName: 'id',
}

export const challengeCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: challengesSchema,
}

export const challenges: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    cardConfiguration: challengeCardConfiguration,
    sql: challengeProjectsSql,
    hideDownload: true,
    shouldDeepLink: true,
    defaultColumn: 'name',
    name: 'Challenges',
  },
}

export const challengeDetailsLandingPage: SynapseConfig[] = [
  {
    name: 'ChallengeDetailsPage',
    props: {
      sql: challengeProjectsSql,
      synapseConfigArray: [],
    },
  },
]
