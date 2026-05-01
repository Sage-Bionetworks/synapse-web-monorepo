import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import columnAliases from '../columnAliases'
import { datasetsSql } from '../resources'
import { citationBoilerplateText } from './commonProps'
import { columnIconConfigs } from './commonProps'
import { sharePageLinkButtonDetailPageProps } from '@sage-bionetworks/synapse-portal-framework/shared-config/SharePageLinkButtonConfig'
import { Chip } from '@mui/material'

const rgbIndex = 0

function DatasetCardTypeAdornment({
  schema,
  data,
}: {
  schema: Record<string, number>
  data: string[]
}) {
  const downloadType = data[schema['downloadType']]
  if (!downloadType) return null
  return <Chip label={downloadType} size="small" />
}

export function DatasetHeaderCardTypeAdornment({
  schema,
  data,
}: {
  schema: Record<string, number>
  data: string[]
}) {
  const downloadType = data[schema['downloadType']]
  if (!downloadType) return null
  return (
    <Chip
      label={downloadType}
      size="small"
      variant="outlined"
      sx={{ color: 'white', borderColor: 'white' }}
    />
  )
}

const CUSTOM_LABEL_KEY = 'HOW TO DOWNLOAD'
const CUSTOM_LABEL_VALUE =
  'This file is hosted externally, follow the External Link, below'

export const datasetSchema: TableToGenericCardMapping = {
  type: SynapseConstants.DATASET,
  title: 'datasetName',
  description: 'description',
  includeShareButton: true,
  includeCitation: true,
  defaultCitationFormat: 'nature',
  citationBoilerplateText: citationBoilerplateText,
  customSecondaryLabelConfig: {
    key: CUSTOM_LABEL_KEY,
    value: CUSTOM_LABEL_VALUE,
    isVisible: (schema: Record<string, number>, data: string[]) => {
      return Boolean(
        data[schema['externalLink']] || data[schema['downloadSynId']],
      )
    },
  },
  secondaryLabels: [
    'externalLink',
    'overallDesign',
    'tumorType',
    'tissue',
    'assay',
    'species',
    'fileFormats',
    'consortium',
  ],
  dataTypeIconNames: 'dataType',
  // override Download List to use downloadSynId
  downloadCartSynId: 'downloadSynId',
  synapseEntityConfig: {
    id: {
      source: 'column',
      columnName: 'datasetId',
    },
    version: {
      source: 'column',
      columnName: 'version',
    },
  },
}

export const datasetCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: datasetSchema,
  secondaryLabelLimit: 4,
  sharePageLinkButtonProps: sharePageLinkButtonDetailPageProps,
  CardTypeAdornment: DatasetCardTypeAdornment,
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'externalLink',
    },
    {
      isMarkdown: false,
      URLColumnName: 'publicationTitle',
      matchColumnName: 'publicationTitle',
      baseURL: 'Explore/Publications/DetailsPage',
    },
    {
      isMarkdown: false,
      matchColumnName: 'grantName',
      URLColumnName: 'grantName',
      baseURL: 'Explore/Grants/DetailsPage',
    },
  ],
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Datasets/DetailsPage',
    URLColumnName: 'datasetId',
    matchColumnName: 'datasetId',
  },
  columnIconOptions: columnIconConfigs,
}

export const datasetsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  cardConfiguration: datasetCardConfiguration,
  shouldDeepLink: true,
  name: 'Datasets',
  sql: datasetsSql,
  columnAliases,
  hideDownload: true,
  initialExpandedFacetControls: ['assay', 'species', 'tissue', 'theme'],
  searchConfiguration: {
    ftsConfig: {
      textMatchesMode: 'BOOLEAN',
      distance: 3,
    },
  },
}
