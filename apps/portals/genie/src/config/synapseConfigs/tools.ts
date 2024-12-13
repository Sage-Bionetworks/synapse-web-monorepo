import {
  CardConfiguration,
  CardContainerLogicProps,
} from 'synapse-react-client/components/CardContainerLogic/index'
import { GenericCardSchema } from 'synapse-react-client/components/GenericCard/GenericCard'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
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

export const toolProps: CardContainerLogicProps = {
  sql: toolsSql,
  ...cardConfiguration,
}
