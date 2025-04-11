import type {
  CardConfiguration,
  CardContainerLogicProps,
} from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
import { publicationsSql } from '../resources'

export const cardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.PUBLICATION,
    title: 'Publication',
    // subTitle: 'authors',
    link: 'DOI',
    secondaryLabels: ['Journal', 'Date', 'DOI'],
  },
}

export const publicationsProps: CardContainerLogicProps = {
  sql: publicationsSql,
  cardConfiguration: cardConfiguration,
}
