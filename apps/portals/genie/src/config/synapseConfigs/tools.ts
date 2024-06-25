import type {
  CardContainerLogicProps,
  GenericCardSchema,
} from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import type { CardConfiguration } from 'synapse-react-client'
import { toolsSql } from '../resources'

const schema: GenericCardSchema = {
  type: SynapseConstants.EXTERNAL_RESOURCE,
  title: 'Name',
  description: 'Description',
  link: 'Link',
  secondaryLabels: [],
}

export const cardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: schema,
  labelLinkConfig: [],
}

const toolProps: CardContainerLogicProps = {
  sql: toolsSql,
  ...cardConfiguration,
}
const tools: SynapseConfig = {
  name: 'CardContainerLogic',
  props: toolProps,
}

export default tools
