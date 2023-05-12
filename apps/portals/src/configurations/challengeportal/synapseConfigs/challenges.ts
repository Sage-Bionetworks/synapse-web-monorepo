import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from 'types/portal-config'
import { GenericCardSchema } from 'synapse-react-client/dist/containers/GenericCard'
import {
  CardConfiguration,
} from 'synapse-react-client/dist/containers/CardContainerLogic'
import { challengeProjectsSql } from '../resources'

const rgbIndex = 3

export const challengesSchema: GenericCardSchema = {
  type: SynapseConstants.GENERIC_CARD,
  title: 'softwareName',
  subTitle: 'softwareType',
  description: 'summary',
  secondaryLabels: [
    'digitalAssessmentCategory',
    'inputDataType',
    'outputDataType',
    'softwareLanguage',
    'softwareAuthor',
  ],
  link: 'url',
}

export const challengeCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: challengesSchema,
}

export const tools: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    cardConfiguration: challengeCardConfiguration,
    sql: challengeProjectsSql,
    hideDownload: true,
    shouldDeepLink: true,
    defaultColumn: 'softwareType',
    name: 'Tools',
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
