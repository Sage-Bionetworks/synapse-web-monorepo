import { CardConfiguration } from 'synapse-react-client/components/CardContainer/index'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'

export const challengesSchema: TableToGenericCardMapping = {
  type: SynapseConstants.CHALLENGE,
  title: 'name',
  subTitle: 'Status',
  description: 'Abstract',
  secondaryLabels: ['ChallengeType', 'DataType', 'Tags'],
}
export const challengeCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: challengesSchema,
  secondaryLabelLimit: 5,
}
