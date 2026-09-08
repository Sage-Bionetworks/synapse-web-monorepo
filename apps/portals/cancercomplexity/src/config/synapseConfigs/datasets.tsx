import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import columnAliases from '../columnAliases'
import { datasetsSearchIndexId, datasetsSql } from '../resources'
import { citationBoilerplateText } from './commonProps'
import { columnIconConfigs } from './commonProps'
import { sharePageLinkButtonDetailPageProps } from '@sage-bionetworks/synapse-portal-framework/shared-config/SharePageLinkButtonConfig'

import { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

const rgbIndex = 0

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
    'overallDesign',
    'tumorType',
    'tissue',
    'assay',
    'species',
    'fileFormats',
    'consortium',
    'sourceRepository',
    'externalLink',
  ],
  dataTypeIconNames: 'dataType',
  // override Download List to use downloadSynId
  downloadCartSynId: 'downloadSynId',
  // Hosting-aware download/access (shared with NF). CCKP classifies datasets via
  // `downloadType`, mapped here to the hosting vocabulary:
  //  - Synapse Hosted      → synapse (in Synapse storage)
  //  - Synapse Indexed     → external-download (externally sourced, but indexed in
  //                          Synapse and downloadable through the clients)
  //  - Externally Hosted   → external-access (link-only; go to the source repo,
  //                          incl. controlled-access dbGaP/EGA)
  //  - Not Available...    → unavailable (record only, nothing to download/link)
  // repository ← sourceRepository; externalUrl ← externalLink (a markdown link;
  // the card extracts the href).
  hostingConfig: {
    hostingColumn: 'downloadType',
    hostingValueMap: {
      'Synapse Hosted': 'synapse',
      'Synapse Indexed': 'external-download',
      'Externally Hosted': 'external-access',
      'Not Available for Download': 'unavailable',
    },
    repositoryColumn: 'sourceRepository',
    externalUrlColumn: 'externalLink',
  },
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
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'externalLink',
    },
    {
      isMarkdown: false,
      URLColumnName: 'publicationTitle',
      matchColumnName: 'publicationTitle',
      baseURL: 'Explore/Publications',
      urlParamStyle: 'path-segment',
    },
    {
      isMarkdown: false,
      matchColumnName: 'grantName',
      URLColumnName: 'grantName',
      baseURL: 'Explore/Grants',
      urlParamStyle: 'path-segment',
    },
  ],
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Datasets',
    URLColumnName: 'datasetId',
    matchColumnName: 'datasetId',
    urlParamStyle: 'path-segment',
  },
  columnIconOptions: columnIconConfigs,
}

export const datasetsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  cardConfiguration: datasetCardConfiguration,
  shouldDeepLink: true,
  name: 'Datasets',
  sql: datasetsSql,
  columnAliases: { ...columnAliases, externalLink: 'Source Repository Link' },
  hideDownload: true,
  initialExpandedFacetControls: ['assay', 'species', 'tissue', 'theme'],
  searchConfiguration: {
    ftsConfig: {
      textMatchesMode: 'BOOLEAN',
      distance: 3,
    },
  },
}

export const datasetsSearch: SearchQueryWrapperPlotNavProps = {
  rgbIndex,
  name: 'Datasets',
  shouldDeepLink: false,
  cardConfiguration: datasetCardConfiguration,
  columnAliases: { ...columnAliases, externalLink: 'Source Repository Link' },
  searchIndexId: datasetsSearchIndexId,
  autocompleteFieldName: 'datasetName',
  hideTopLevelControls: false,
  hideQueryCount: false,
}
