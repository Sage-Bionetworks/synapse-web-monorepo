import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { publicationsSql, rgbIndex } from '../resources'

const columnAliases = {
  pubMedId: 'PubMed ID',
  pubMedLink: 'PubMed Link',
  doi: 'DOI',
  publicationYear: 'Year',
  namId: 'NAM ID',
  studyId: 'Study',
  grantId: 'Grant ID',
  datasetAlias: 'Dataset',
  publicationAccessibility: 'Accessibility',
}

export const publicationCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    title: 'publicationTitle',
    type: SynapseConstants.PUBLICATION,
    subTitle: 'authors',
    includeShareButton: true,
    includeCitation: true,
    defaultCitationFormat: 'nature',
    secondaryLabels: [
      'journal',
      'publicationYear',
      'keywords',
      'tissue',
      'assay',
      'doi',
      'pubMedLink',
      'publicationAccessibility',
    ],
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
  ],
  secondaryLabelLimit: 8,
}

const publicationsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: publicationsSql,
  name: 'Publications',
  shouldDeepLink: true,
  cardConfiguration: publicationCardConfiguration,
  columnAliases,
  defaultShowPlots: false,
  searchConfiguration: {
    searchable: [
      'publicationTitle',
      'authors',
      'journal',
      'doi',
      'pubMedId',
      'keywords',
    ],
  },
}

export default publicationsQueryWrapperPlotNavProps
