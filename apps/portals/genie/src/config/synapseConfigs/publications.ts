import {
  CardConfiguration,
  CardContainerLogicProps,
} from 'synapse-react-client/components/CardContainerLogic/index'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
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
  ...cardConfiguration,
}
