import type {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import columnAliases from '../columnAliases'
import { toolkitId, toolsSql } from '../resources'
import { citationBoilerplateText } from './commonProps'
import { MetricsConfig } from 'synapse-react-client/components/SustainabilityScorecard/SustainabilityScorecard'

const rgbIndex = 6

export const metricsConfig: MetricsConfig[] = [
  {
    key: 'CloneRepository',
    label: 'Repository',
    text: 'Indicates presence of automated tests',
  },
  {
    key: 'CheckReadme',
    label: 'README',
    text: 'Indicates presence of automated tests',
  },
  {
    key: 'CheckDependencies',
    label: 'Dependencies',
    text: 'Presence of documentation for setup/use',
  },
  {
    key: 'CheckTests',
    label: 'Tests',
    text: 'Presence of documentation for setup/use',
  },
]

export const toolsSchema: TableToGenericCardMapping = {
  type: SynapseConstants.TOOL,
  title: 'toolName',
  description: 'description',
  includeCitation: true,
  sustainabilityScorecard: {
    entityId: toolkitId,
    searchParamKey: 'toolName',
    filterColumn: 'toolName',
    metricsConfig: metricsConfig,
    scoreDescriptorColumnName: 'AlmanackScoreDescriptor',
  },
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
