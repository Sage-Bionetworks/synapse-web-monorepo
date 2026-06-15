import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import {
  defaultSearchConfiguration,
  publicationsSearchIndexId,
  publicationsSql,
} from '../resources'

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
  cardConfiguration: publicationCardProps,
  searchConfiguration: defaultSearchConfiguration,
}

export const publicationsSearch: SearchQueryWrapperPlotNavProps = {
  rgbIndex,
  name: 'Publications',
  shouldDeepLink: false,
  searchIndexId: publicationsSearchIndexId,
  autocompleteFieldName: 'dataFileName',
  cardConfiguration: publicationCardProps,
  facetsToPlot: ['Program', 'Year', 'Grant', 'Journal'],
  hideTopLevelControls: false,
  hideQueryCount: false,
}

export default publicationsQueryWrapperPlotNavProps
