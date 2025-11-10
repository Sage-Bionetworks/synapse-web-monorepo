import type {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import columnAliases from '../columnAliases'
import { toolsSql } from '../resources'
import { citationBoilerplateText } from './commonProps'
import { sharePageLinkButtonDetailPageProps } from '@sage-bionetworks/synapse-portal-framework/shared-config/SharePageLinkButtonConfig'

const rgbIndex = 6

export const toolsSchema: TableToGenericCardMapping = {
  type: SynapseConstants.TOOL,
  title: 'toolName',
  description: 'description',
  includeShareButton: true,
  includeCitation: true,
  defaultCitationFormat: 'nature',
  citationBoilerplateText: citationBoilerplateText,
  secondaryLabels: [
    'inputData',
    'inputFormat',
    'outputData',
    'outputFormat',
    'language',
    'toolType',
    'operation',
    'topic',
    'downloadLink',
    'consortium',
  ],
}

export const toolsConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: toolsSchema,
  secondaryLabelLimit: 5,
  titleLinkConfig: {
    isMarkdown: false,
    URLColumnName: 'toolName',
    matchColumnName: 'toolName',
    baseURL: 'Explore/Tools/DetailsPage',
  },
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'downloadLink',
    },
  ],
  sharePageLinkButtonProps: sharePageLinkButtonDetailPageProps,
}

export const toolsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: toolsSql,
  cardConfiguration: toolsConfiguration,
  shouldDeepLink: true,
  name: 'Tools',
  columnAliases,
  initialExpandedFacetControls: [
    'consortium',
    'theme',
    'operation',
    'inputData',
  ],
  searchConfiguration: {
    ftsConfig: {
      textMatchesMode: 'BOOLEAN',
      distance: 80,
    },
    searchable: [
      'toolName',
      'description',
      'publicationTitle',
      'inputData',
      'outputData',
    ],
  },
}
