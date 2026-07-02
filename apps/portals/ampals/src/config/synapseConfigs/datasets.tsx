import ampAlsAccessColumn from '@/components/AmpAlsAccessColumn'
import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { LabelLinkConfig } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import type { QueryWrapperSynapsePlotProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperSynapsePlot'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import columnAliases from '../columnAliases'
import { datasetsSearchIndexId, datasetsSql } from '../resources'
import { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

const rgbIndex = 0

const datasetParticipantCountPlotConfig: QueryWrapperSynapsePlotProps = {
  title: 'Dataset Participant Count',
  query:
    'SELECT name, participant_count FROM syn66496326 WHERE participant_count > 0 ORDER BY participant_count DESC',
  type: 'bar',
  horizontal: true,
  // xtitle: 'Participant Count',
  ytitle: 'Dataset',
  xaxistype: 'log',
  showlegend: false,
  hideYAxisTickLabels: true,
  fullWidth: false,
  footnote:
    'Participant counts are reported per dataset and may include the same individuals across datasets; counts cannot be summed. Cross-study deduplication is in progress.',
}

const datasetItemCountPlotConfig: QueryWrapperSynapsePlotProps = {
  title: 'Dataset Item Count',
  query:
    'SELECT name, datasetItemCount FROM syn66496326 WHERE datasetItemCount > 0 ORDER BY datasetItemCount DESC',
  type: 'bar',
  horizontal: true,
  // xtitle: 'Item Count',
  ytitle: 'Dataset',
  showlegend: false,
  hideYAxisTickLabels: true,
  hideXAxisTickLabels: false,
  fullWidth: false,
}

const datasetSizePlotConfig: QueryWrapperSynapsePlotProps = {
  title: 'Dataset Size',
  query:
    'SELECT name, datasetSizeInBytes FROM syn66496326 WHERE datasetSizeInBytes > 0 ORDER BY datasetSizeInBytes DESC',
  type: 'bar',
  horizontal: true,
  // xtitle: 'Size (bytes)',
  ytitle: 'Dataset',
  showlegend: false,
  hideYAxisTickLabels: true,
  hideXAxisTickLabels: false,
  fullWidth: false,
}

export const datasetColumnLinks: LabelLinkConfig = [
  {
    isMarkdown: false,
    baseURL: 'Explore/Datasets/DetailsPage',
    URLColumnName: 'id',
    matchColumnName: 'name',
    overrideValueWithRowID: true,
  },
  {
    isMarkdown: false,
    linkColumnName: 'url',
    matchColumnName: 'source',
  },
]

export const datasetQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  shouldDeepLink: true,
  sql: datasetsSql,
  name: 'Datasets',
  columnAliases,
  tableConfiguration: {
    columnLinks: datasetColumnLinks,
    showAccessColumn: false, // use custom access column instead
    customColumns: [ampAlsAccessColumn],
  },
  defaultShowSearchBox: true,
  facetsToPlot: ['program', 'project', 'datasetType', 'assay'],
  searchConfiguration: {
    searchable: ['name', 'program', 'project', 'datasetType', 'assay'],
  },
  isInfinite: true,
  initialLimit: 50,
  customPlots: [datasetItemCountPlotConfig, datasetSizePlotConfig],
}

export const datasetSchema: TableToGenericCardMapping = {
  type: SynapseConstants.DATASET,
  title: 'name',
  subTitle: 'program',
  description: 'description',
  secondaryLabels: ['keywords', 'id', 'source'],
}
export const datasetColumnAliases: Record<string, string> = {
  id: 'On Synapse',
  url: 'External Repository URL',
  source: 'Navigate To Source',
}
export const datasetCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: datasetSchema,

  titleLinkConfig: {
    isMarkdown: false,
    matchColumnName: 'name',
    overrideLinkURLColumnName: 'url',
  },

  labelLinkConfig: datasetColumnLinks,
}

export const datasetsSearch: SearchQueryWrapperPlotNavProps = {
  rgbIndex,
  name: 'Datasets',
  shouldDeepLink: false,
  columnAliases,
  facetsToPlot: ['diseaseSubtype', 'assay'],
  searchIndexId: datasetsSearchIndexId,
  autocompleteFieldName: 'name',
  hideTopLevelControls: false,
  hideQueryCount: false,
  tableConfiguration: {
    columnLinks: datasetColumnLinks,
    showAccessColumn: false, // use custom access column instead
    customColumns: [ampAlsAccessColumn],
  },
  customPlots: [
    datasetItemCountPlotConfig,
    datasetSizePlotConfig,
    datasetParticipantCountPlotConfig,
  ],
  initialPlotTypeByFacetColumnName: { diseaseSubtype: 'BAR' },
}
