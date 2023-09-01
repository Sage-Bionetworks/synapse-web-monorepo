import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from '../../../types/portal-config'
import { defaultSearchConfiguration, publicationsSql } from '../resources'

const rgbIndex = 5

export const publicationCardProps = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.PUBLICATION,
    title: 'title',
    subTitle: 'authors',
    link: 'DOI',
    secondaryLabels: [
      'year',
      'journal',
      'Program',
      'grant',
      'DOI',
      'pubmed_id',
    ],
  },
}

const publications: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: publicationsSql,
    name: 'Publications',
    shouldDeepLink: true,
    facetsToPlot: ['Program', 'year', 'grant', 'journal'],
    cardConfiguration: publicationCardProps,
    searchConfiguration: defaultSearchConfiguration,
  },
}

export default publications
