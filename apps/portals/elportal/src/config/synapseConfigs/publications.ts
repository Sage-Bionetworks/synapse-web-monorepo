import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'
import { SynapseConstants } from 'synapse-react-client'
import { defaultSearchConfiguration, publicationsSql } from '../resources'
import { Direction } from '@sage-bionetworks/synapse-types'

const rgbIndex = 5

export const publicationCardProps = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.PUBLICATION,
    title: 'Name',
    subTitle: 'Authors',
    link: 'DOI',
    secondaryLabels: ['Year', 'Journal', 'Program', 'Grant', 'DOI', 'PubmedId'],
  },
}

const publications: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: publicationsSql,
    name: 'Publications',
    shouldDeepLink: true,
    facetsToPlot: ['Program', 'Year', 'Grant', 'Journal'],
    facetValueSortConfigs: [{ columnName: 'Year', direction: Direction.DESC }],
    cardConfiguration: publicationCardProps,
    searchConfiguration: defaultSearchConfiguration,
  },
}

export default publications
