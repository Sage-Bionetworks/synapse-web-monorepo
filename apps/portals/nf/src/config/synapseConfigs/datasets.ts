import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { datasetsSearchIndexId, datasetsSql } from '../resources'
import { columnAliases as sharedColumnAliases } from './commonProps'
import { studyColumnIconConfigs } from './studies'
import { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import { createElement } from 'react'
import DuoTermTags from 'synapse-react-client/components/GenericCard/DuoTermTags/DuoTermTags'

// Render the "Data Use Modifiers" facet values as DUO tags (PORTALS-4282).
// In the facet sidebar the chips truncate; in the active-filter pills the chip
// is the removable pill itself (full value, with a delete icon).
const renderDuoFacetValue = (
  columnName: string,
  value: string,
  options?: { onRemove?: () => void },
) =>
  columnName === 'dataUseModifiers'
    ? createElement(DuoTermTags, {
        terms: [value],
        truncate: !options?.onRemove,
        onDelete: options?.onRemove,
      })
    : undefined

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
  renderFacetValue: renderDuoFacetValue,
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
  renderFacetValue: renderDuoFacetValue,
  searchIndexId: datasetsSearchIndexId,
  autocompleteFieldName: 'title',
  hideTopLevelControls: false,
  hideQueryCount: false,
}

export default datasets
