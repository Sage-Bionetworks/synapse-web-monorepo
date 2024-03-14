import { SynapseConstants } from 'synapse-react-client'
import { publicationsSql } from '../resources'
import { SynapseConfig } from 'types/portal-config'
import type {
  CardContainerLogicProps,
  CardConfiguration,
} from 'synapse-react-client'

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

const publicationsProps: CardContainerLogicProps = {
  sql: publicationsSql,
  ...cardConfiguration,
}

const publications: SynapseConfig = {
  name: 'CardContainerLogic',
  props: publicationsProps,
}

export default publications
