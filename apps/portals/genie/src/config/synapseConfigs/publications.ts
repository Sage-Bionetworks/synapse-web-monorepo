import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
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
  ...cardConfiguration,
}

const publications: SynapseConfig = {
  name: 'CardContainerLogic',
  props: publicationsProps,
}

export default publications
