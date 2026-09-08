import type { CardLink } from 'synapse-react-client/components/CardContainer/CardLink'
import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import { columnAliases } from './commonProps'
import { fundersSearchIndexId } from '../resources'

export const organizationDetailsPageLinkConfig: CardLink = {
  matchColumnName: 'abbreviation',
  isMarkdown: false,
  baseURL: 'Organizations',
  URLColumnName: 'abbreviation',
  urlParamStyle: 'path-segment',
}

export const organizationCardSchema: TableToGenericCardMapping = {
  title: 'organizationName',
  type: SynapseConstants.ORGANIZATION,
  description: 'summary',
  icon: 'abbreviation',
  link: 'website',
  thumbnailRequiresPadding: true,
}

export const organizationCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: organizationCardSchema,
  titleLinkConfig: organizationDetailsPageLinkConfig,
}

export const organizationsSearch: SearchQueryWrapperPlotNavProps = {
  rgbIndex: 3,
  name: 'Organizations',
  shouldDeepLink: false,
  cardConfiguration: organizationCardConfiguration,
  columnAliases,
  searchIndexId: fundersSearchIndexId,
  autocompleteFieldName: 'organizationName',
  hideTopLevelControls: false,
  hideQueryCount: false,
}
