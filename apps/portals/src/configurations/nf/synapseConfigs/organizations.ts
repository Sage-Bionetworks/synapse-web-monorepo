import { SynapseConstants } from 'synapse-react-client'
import { DetailsPageProps } from 'types/portal-util-types'
import { SynapseConfig } from 'types/portal-config'
import { columnAliases, searchConfiguration } from './commonProps'
import { publicationsCardConfiguration } from './publications'
import { studyCardConfiguration } from './studies'
import { datasetCardConfiguration } from './datasets'
import {
  filesSql,
  fundersSql,
  studiesSql,
  datasetsSql,
  publicationsSql,
} from '../resources'
import type { CardLink } from 'synapse-react-client'
import type { GenericCardSchema } from 'synapse-react-client'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'

export const organizationDetailsPageConfig: DetailsPageProps = {
  sql: fundersSql,
  tabLayout: [
    {
      title: 'Organization Details',
      uriValue: 'Details',
      iconName: 'study',
      synapseConfigArray: [
        {
          name: 'QueryWrapperPlotNav',
          props: {
            rgbIndex: 8,
            shouldDeepLink: false,
            defaultShowPlots: false,
            sql: studiesSql,
            visibleColumnCount: 7,
            sqlOperator: ColumnSingleValueFilterOperator.LIKE,
            cardConfiguration: { ...studyCardConfiguration, initialLimit: 2 },
            name: 'Funded Studies',
            columnAliases,
            searchConfiguration,
          },
          tableSqlKeys: ['fundingAgency'],
          columnName: 'fundingAgency',
        },
        {
          name: 'CardContainerLogic',
          props: {
            sql: publicationsSql,
            initialLimit: 3,
            ...publicationsCardConfiguration,
            sqlOperator: ColumnSingleValueFilterOperator.LIKE,
          },
          title: 'Publications',
          columnName: 'fundingAgency',
          tableSqlKeys: ['fundingAgency'],
        },
        {
          name: 'Markdown',
          props: {
            ownerId: 'syn22272075',
            wikiId: '604853',
          },
          title: 'Funding Impact',
          standalone: true,
        },
      ],
    },
    {
      title: 'Organization Data',
      uriValue: 'Data',
      iconName: 'database',
      toolTip: 'All of the Data generated from this Organization’s studies',
      cssClass: 'tab-database',
      synapseConfigArray: [
        {
          name: 'QueryWrapperPlotNav',
          props: {
            rgbIndex: 8,
            shouldDeepLink: false,
            sql: filesSql,
            visibleColumnCount: 7,
            sqlOperator: ColumnSingleValueFilterOperator.LIKE,
            tableConfiguration: {
              showAccessColumn: true,
              showDownloadColumn: true,
            },
            name: 'Data Files',
            columnAliases,
            searchConfiguration,
          },
          tableSqlKeys: ['fundingAgency'],
          columnName: 'fundingAgency',
        },
        {
          name: 'CardContainerLogic',
          props: {
            ...datasetCardConfiguration,
            sql: datasetsSql,
            initialLimit: 3,
          },
          columnName: 'fundingAgency',
          title: 'Datasets',
          tableSqlKeys: ['fundingAgency'],
        },
      ],
    },
  ],
}

export const organizationDetailsPageLinkConfig: CardLink = {
  matchColumnName: 'abbreviation',
  isMarkdown: false,
  baseURL: 'Organizations/DetailsPage',
  URLColumnName: 'abbreviation',
}

export const organizationCardSchema: GenericCardSchema = {
  title: 'organizationName',
  type: SynapseConstants.ORGANIZATION,
  description: 'summary',
  icon: 'abbreviation',
  link: 'website',
  thumbnailRequiresPadding: true,
}

export const organizationDetailsPage: SynapseConfig[] = [
  {
    name: 'CardContainerLogic',
    isOutsideContainer: true,
    props: {
      sql: fundersSql,
      type: SynapseConstants.GENERIC_CARD,
      genericCardSchema: {
        ...organizationCardSchema,
        imageFileHandleColumnName: 'headerLogo',
      },
      isHeader: true,
    },
  },
  {
    name: 'DetailsPage',
    props: organizationDetailsPageConfig,
    containerClassName: 'container-full-width',
  },
]
