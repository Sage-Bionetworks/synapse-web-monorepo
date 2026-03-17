import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { CardContainerLogicProps } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import { toolsSql } from '../resources'

const schema: TableToGenericCardMapping = {
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
  cardConfiguration: cardConfiguration,
}
