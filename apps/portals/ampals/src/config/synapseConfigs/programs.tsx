import type {
  CardConfiguration,
  CardContainerLogicProps,
} from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import { programsSql } from '../resources'

export const programsRgbIndex = 9

export const programSchema: TableToGenericCardMapping = {
  type: 'program',
  title: 'Program',
  // subTitle: 'Short Description',
  description: 'Description',
  icon: 'Program',
}

export const programsCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: programSchema,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Programs/DetailsPage',
    URLColumnName: 'Program',
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
