import type {
  CardConfiguration,
  CardContainerLogicProps,
  GenericCardSchema,
} from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
import { programsSql } from '../resources'

export const programsRgbIndex = 9

export const programSchema: GenericCardSchema = {
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
  ...programsCardConfiguration,
  genericCardSchema: {
    ...programsCardConfiguration.genericCardSchema!,
  },
}
