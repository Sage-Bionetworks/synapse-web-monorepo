import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import type { CardConfiguration } from 'synapse-react-client'
import { publicationsSql } from '../resources'

const rgbIndex = 5

export const publicationsCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: 'Publication',
    title: 'title',
    subTitle: 'authors',
    secondaryLabels: ['year', 'journal', 'doi', 'grantNumber'],
  },
  secondaryLabelLimit: 4,
}

const publications: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    shouldDeepLink: true,
    hideDownload: true,
    name: 'Publications',
    cardConfiguration: publicationsCardConfiguration,
    sql: publicationsSql,
    facetsToPlot: ['grantNumber', 'year', 'journal', 'projectTitle'],
    searchConfiguration: {
      searchable: ['title', 'authors', 'year', 'journal', 'grantNumber'],
    },
  },
}

export default publications
