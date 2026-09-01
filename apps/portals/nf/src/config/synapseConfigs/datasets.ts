import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { datasetsSearchIndexId, datasetsSql } from '../resources'
import { columnAliases as sharedColumnAliases } from './commonProps'
import { studyColumnIconConfigs } from './studies'
import { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'

export const newDatasetsSql = `${datasetsSql} order by ROW_ID desc limit 3`
export const datasetsRgbIndex = 8

const columnAliases = {
  ...sharedColumnAliases,
  studyId: 'Study Name',
}

const CUSTOM_LABEL_KEY = 'HOW TO DOWNLOAD'
const CUSTOM_LABEL_VALUE =
  'This file is hosted externally, follow the External Link, below'

export const datasetCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  actionButtonStyle: 'chip',
  genericCardSchema: {
    type: SynapseConstants.DATASET,
    title: 'title',
    includeCitation: true,
    defaultCitationFormat: 'nature',
    description: 'description',
    customSecondaryLabelConfig: {
      key: CUSTOM_LABEL_KEY,
      value: CUSTOM_LABEL_VALUE,
      isVisible: (schema: Record<string, number>, data: string[]) => {
        return Boolean(data[schema['id']])
      },
    },
    secondaryLabels: [
      'measurementTechnique',
      'studyId',
      'doi',
      'datasetSizeInBytes',
      'diseaseFocus',
      'funder',
      'datasetItemCount',
      'dataType',
      'series',
      'yearProcessed',
      'visualizeDataOn',
    ],
    dataTypeIconNames: 'dataType',
    // PORTALS-4282: surface Data Use Ontology terms in the metadata section.
    dataUseModifiersColumnName: 'dataUseModifiers',
    synapseEntityConfig: {
      id: {
        source: 'rowId',
      },
      version: {
        source: 'rowVersionNumber',
      },
    },
    // Hosting-aware download/access. Driven by dataset annotation columns:
    //  - `hosting`: controlled vocabulary — synapse | external-cloud |
    //    external-download | external-access | mixed | unavailable. Blank/unknown
    //    → synapse (standard Download), so this is inert until datasets are
    //    annotated (annotation/schema work lives in nf-metadata-dictionary).
    //  - `repository`: free-text external repo name shown in the label/tooltip.
    //  - `externalUrl`: link target for non-downloadable (external-access) datasets.
    hostingConfig: {
      hostingColumn: 'hosting',
      repositoryColumn: 'repository',
      externalUrlColumn: 'externalUrl',
    },
  },
  labelLinkConfig: [
    {
      isMarkdown: false,
      matchColumnName: 'studyId',
      URLColumnName: 'studyId',
      baseURL: 'Explore/Studies',
      urlParamStyle: 'path-segment',
      resolveEntityName: true,
    },
  ],
  titleLinkConfig: {
    isMarkdown: false,
    matchColumnName: 'id',
    URLColumnName: 'id',
    baseURL: 'Explore/Datasets',
    urlParamStyle: 'path-segment',
  },
  columnIconOptions: studyColumnIconConfigs,
}
const datasets: QueryWrapperPlotNavProps = {
  rgbIndex: datasetsRgbIndex,
  shouldDeepLink: true,
  sql: datasetsSql,
  cardConfiguration: datasetCardConfiguration,
  name: 'Datasets',
  columnAliases,
  searchConfiguration: {
    searchable: [
      'title',
      'description',
      'studyName',
      'diseaseFocus',
      'manifestation',
      'funder',
    ],
  },
}

export const datasetsSearch: SearchQueryWrapperPlotNavProps = {
  rgbIndex: datasetsRgbIndex,
  name: 'Datasets',
  shouldDeepLink: false,
  cardConfiguration: datasetCardConfiguration,
  columnAliases,
  searchIndexId: datasetsSearchIndexId,
  autocompleteFieldName: 'title',
  hideTopLevelControls: false,
  hideQueryCount: false,
}

export default datasets
