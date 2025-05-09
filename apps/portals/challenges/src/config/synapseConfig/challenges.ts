import { CardConfiguration } from 'synapse-react-client/components/CardContainer'
import { CardLink } from 'synapse-react-client/components/CardContainer/CardLink'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'

export const challengesSchema: TableToGenericCardMapping = {
  type: 'challenge',
  title: 'name',
  subTitle: 'Status',
  description: 'Abstract',
  secondaryLabels: ['ChallengeType', 'DataType', 'Tags'],
}
export const challengeTitleLinkConfig: CardLink = {
  isMarkdown: false,
  baseURL: 'Challenges/DetailsPage',
  URLColumnName: 'id',
  matchColumnName: 'id',
}

export const challengeCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: challengesSchema,
  secondaryLabelLimit: 5,
}
