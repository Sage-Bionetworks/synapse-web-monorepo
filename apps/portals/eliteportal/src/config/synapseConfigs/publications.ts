import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import {
  defaultSearchConfiguration,
  publicationsSearchIndexId,
  publicationsSql,
} from '../resources'
import { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

const rgbIndex = 5

export const publicationCardProps: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.PUBLICATION,
    title: 'Title',
    subTitle: 'Authors',
    link: 'DOI',
    secondaryLabels: ['Year', 'Journal', 'Program', 'Grant', 'DOI', 'PubmedId'],
  },
}

const publicationsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: publicationsSql,
  name: 'Publications',
  shouldDeepLink: true,
  facetsToPlot: ['Program', 'Year', 'Grant', 'Journal'],
  cardConfiguration: publicationCardProps,
  searchConfiguration: defaultSearchConfiguration,
}

export const publicationsSearch: SearchQueryWrapperPlotNavProps = {
  rgbIndex,
  name: 'Publications',
  shouldDeepLink: false,
  cardConfiguration: publicationCardProps,
  facetsToPlot: ['Program', 'Year', 'Grant', 'Journal'],
  searchIndexId: publicationsSearchIndexId,
  autocompleteFieldName: 'Title',
  hideTopLevelControls: false,
  hideQueryCount: false,
}

export default publicationsQueryWrapperPlotNavProps
