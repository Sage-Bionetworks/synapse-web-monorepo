import { Direction } from '@sage-bionetworks/synapse-types'
import type {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
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

export const publicationsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  shouldDeepLink: true,
  hideDownload: true,
  name: 'Publications',
  cardConfiguration: publicationsCardConfiguration,
  sql: publicationsSql,
  facetValueSortConfigs: [{ columnName: 'year', direction: Direction.DESC }],
  facetsToPlot: ['grantNumber', 'year', 'journal', 'projectTitle'],
  searchConfiguration: {
    searchable: ['title', 'authors', 'year', 'journal', 'grantNumber'],
  },
}
