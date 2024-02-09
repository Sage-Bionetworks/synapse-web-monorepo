import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from 'types/portal-config'
import type { GenericCardSchema } from 'synapse-react-client'
import type { CardConfiguration } from 'synapse-react-client'
import columnAliases from '../columnAliases'
import { DetailsPageProps } from 'types/portal-util-types'
import { datasetsSql, projectsSql } from '../resources'
import { datasetCardConfiguration } from './datasets'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'

const rgbIndex = 9

export const projectSchema: GenericCardSchema = {
  type: SynapseConstants.PROJECT,
  title: 'Full Project Name',
  subTitle: 'Program',
  description: 'Description',
  secondaryLabels: ['Program'],
}

export const projectsCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: projectSchema,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Projects/DetailsPage',
    URLColumnName: 'Project',
    matchColumnName: 'Project',
  },
  labelLinkConfig: [
    {
      matchColumnName: 'Description',
      isMarkdown: true,
    },
  ],
}

export const projects: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    cardConfiguration: projectsCardConfiguration,
    sql: projectsSql,
    shouldDeepLink: true,
    hideDownload: true,
    name: 'Projects',
    columnAliases,
    facetsToPlot: [],
    defaultShowPlots: false,
  },
}

export const details: DetailsPageProps = {
  sql: projectsSql,
  synapseConfigArray: [
    {
      name: 'CardContainerLogic',
      columnName: 'Project',
      title: 'Datasets',
      tableSqlKeys: ['project'],
      props: {
        ...datasetCardConfiguration,
        sql: datasetsSql,
      },
    },
  ],
}

export const projectDetailPage: SynapseConfig[] = [
  {
    name: 'CardContainerLogic',
    isOutsideContainer: true,
    props: {
      isHeader: true,
      isAlignToLeftNav: true,
      ...projectsCardConfiguration,
      rgbIndex,
      columnAliases,
      genericCardSchema: {
        ...projectSchema,
        link: '',
      },
      sql: projectsSql,
      sqlOperator: ColumnSingleValueFilterOperator.EQUAL,
    },
  },
  {
    name: 'DetailsPage',
    props: details,
  },
]
