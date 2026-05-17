import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import columnAliases from '../columnAliases'
import { publicationSql } from '../resources'
import { citationBoilerplateText } from './commonProps'
import { columnIconConfigs } from './commonProps'
import { sharePageLinkButtonDetailPageProps } from '@sage-bionetworks/synapse-portal-framework/shared-config/SharePageLinkButtonConfig'

const rgbIndex = 1

export const publicationSchema: TableToGenericCardMapping = {
  type: SynapseConstants.PUBLICATION,
  title: 'publicationTitle',
  subTitle: 'authors',
  includeShareButton: true,
  includeCitation: true,
  defaultCitationFormat: 'nature',
  citationBoilerplateText: citationBoilerplateText,
  secondaryLabels: [
    'pubMedLink',
    'journal',
    'publicationYear',
    'theme',
    'tumorType',
    'tissue',
    'assay',
    'keywords',
    'doi',
    'consortium',
  ],
  dataTypeIconNames: 'dataType',
}

export const publicationsCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: publicationSchema,
  secondaryLabelLimit: 5,
  titleLinkConfig: {
    isMarkdown: false,
    URLColumnName: 'pubMedId',
    matchColumnName: 'pubMedId',
    baseURL: 'Explore/Publications',
    urlParamStyle: 'path-segment',
  },
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'pubMedLink',
    },
    {
      isMarkdown: true,
      matchColumnName: 'doi',
    },
    {
      isMarkdown: false,
      baseURL: 'Explore/Grants',
      matchColumnName: 'grantName',
      URLColumnName: 'grantName',
      urlParamStyle: 'path-segment',
    },
    {
      isMarkdown: false,
      baseURL: 'Explore/Datasets',
      URLColumnName: 'datasetAlias',
      matchColumnName: 'dataset',
      urlParamStyle: 'path-segment',
    },
  ],
  columnIconOptions: columnIconConfigs,
  sharePageLinkButtonProps: sharePageLinkButtonDetailPageProps,
}

export const publicationsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  cardConfiguration: publicationsCardConfiguration,
  sql: publicationSql,
  shouldDeepLink: true,
  name: 'Publications',
  columnAliases,
  searchConfiguration: {
    ftsConfig: {
      textMatchesMode: 'BOOLEAN',
      distance: 12,
    },
    searchable: [
      'publicationTitle',
      'authors',
      'journal',
      'doi',
      'pubMedId',
      'keywords',
      'tummorType',
      'tissue',
      'assay',
      'grantName',
      'grantNumber',
      'dataset',
    ],
  },
}
