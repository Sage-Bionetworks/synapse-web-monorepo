import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { CardContainerLogicProps } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import { programsSql } from '../resources'

export const programsRgbIndex = 9

export const programSchema: TableToGenericCardMapping = {
  type: 'program',
  title: 'Program',
  // subTitle: 'Short Description',
  description: 'Description',
  imageFileHandleColumnName: 'logo',
}

export const programsCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: programSchema,
  titleLinkConfig: {
    isMarkdown: false,
    overrideLinkURLColumnName: 'url',
    matchColumnName: 'Program',
  },
  labelLinkConfig: [
    {
      matchColumnName: 'Description',
      isMarkdown: true,
    },
  ],
  descriptionConfig: {
    showFullDescriptionByDefault: true,
  },
}

export const programsCardContainerLogicProps: CardContainerLogicProps = {
  sql: programsSql,
  cardConfiguration: programsCardConfiguration,
}
