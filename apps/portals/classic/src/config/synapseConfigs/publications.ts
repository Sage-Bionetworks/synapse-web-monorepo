import { Direction } from '@sage-bionetworks/synapse-types'
import {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { defaultSearchConfiguration, publicationsSql } from '../resources'

const rgbIndex = 5

export const publicationCardProps: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.PUBLICATION,
    title: 'dataFileName',
    subTitle: 'Authors',
    link: 'dataFileKey',
    secondaryLabels: ['Year', 'Journal', 'Program', 'Grant', 'DOI', 'PubmedId'],
  },
}

const publicationsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: publicationsSql,
  name: 'Publications',
  shouldDeepLink: true,
  facetsToPlot: ['Program', 'Year', 'Grant', 'Journal'],
  facetValueSortConfigs: [{ columnName: 'Year', direction: Direction.DESC }],
  cardConfiguration: publicationCardProps,
  searchConfiguration: defaultSearchConfiguration,
}

export default publicationsQueryWrapperPlotNavProps
