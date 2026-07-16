import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { initiativesSearchIndexId, initiativesSql } from '../resources'
import { columnAliases } from './commonProps'
import { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

export const newSql = `${initiativesSql} order by ROW_ID desc limit 3`
const rgbIndex = 8

export const initiativeCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: 'Initiative',
    title: 'initiative',
    description: 'summary',
    link: 'website',
    imageFileHandleColumnName: 'image',
  },
  titleLinkConfig: {
    matchColumnName: 'initiative',
    isMarkdown: false,
    baseURL: 'Explore/Initiatives',
    URLColumnName: 'initiative',
    urlParamStyle: 'path-segment',
  },
  ctaLinkConfig: {
    text: 'Visit Website',
    link: 'website',
  },
}

const initiatives: QueryWrapperPlotNavProps = {
  rgbIndex,
  defaultShowPlots: false,
  shouldDeepLink: true,
  sql: initiativesSql,
  cardConfiguration: initiativeCardConfiguration,
  name: 'Initiatives',
  columnAliases,
  searchConfiguration: {
    searchable: ['initiative', 'summary'],
  },
}

export const initiativesSearch: SearchQueryWrapperPlotNavProps = {
  rgbIndex,
  name: 'Initiatives',
  shouldDeepLink: false,
  defaultShowPlots: false,
  cardConfiguration: initiativeCardConfiguration,
  columnAliases,
  searchIndexId: initiativesSearchIndexId,
  autocompleteFieldName: 'initiative',
  hideTopLevelControls: false,
  hideQueryCount: false,
}

export default initiatives
