import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import { publicationsSql } from '../resources'
import { Direction } from '@sage-bionetworks/synapse-types'

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

const columnAliases = {
  pubmed_id: 'Pubmed ID',
}

const publications: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: publicationsSql,
    name: 'Publications',
    shouldDeepLink: true,
    facetValueSortConfigs: [{ columnName: 'year', direction: Direction.DESC }],
    facetsToPlot: ['Program', 'year', 'grant', 'journal'],
    cardConfiguration: publicationCardProps,
    columnAliases,
  },
}

export default publications
