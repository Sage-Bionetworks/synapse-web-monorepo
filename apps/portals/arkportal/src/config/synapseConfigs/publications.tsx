import { Chip } from '@mui/material'
import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import columnAliases from '../columnAliases'
import { publicationsSql } from '../resources'

export const publicationsCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  CardTypeAdornment: ({ schema, data }) => {
    const publicationType = data[schema['publicationType']]
    if (!publicationType) return null
    return <Chip label={publicationType} size="small" />
  },
  labelLinkConfig: [
    {
      isMarkdown: false,
      baseURL: 'Explore/Programs/DetailsPage',
      URLColumnName: 'Program',
      matchColumnName: 'program',
    },
    {
      isMarkdown: true,
      matchColumnName: 'DOI',
    },
  ],
  genericCardSchema: {
    title: 'title',
    type: SynapseConstants.PUBLICATION,
    subTitle: 'authors',
    link: 'URL',
    secondaryLabels: [
      'journal',
      'year',
      'associatedDataset',
      'program',
      'PMID',
    ],
  },
}

const publications: QueryWrapperPlotNavProps = {
  rgbIndex: 0,
  sql: publicationsSql,
  shouldDeepLink: true,
  name: 'Publications',
  cardConfiguration: publicationsCardConfiguration,
  columnAliases,
  searchConfiguration: {
    searchable: [
      'title',
      'authors',
      'journal',
      'PMID',
      'year',
      'program',
      'publicationType',
    ],
  },
}

export default publications
