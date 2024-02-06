import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from 'types/portal-config'
import type { GenericCardSchema } from 'synapse-react-client'
import type { CardConfiguration } from 'synapse-react-client'
import columnAliases from '../columnAliases'
import { DetailsPageProps } from 'types/portal-util-types'
import { datasetsSql, programSql, projectsSql } from '../resources'
import { projectsCardConfiguration } from './projects'
import { datasetCardConfiguration } from './datasets'
import tagCloudSvg from '../style/tagCloud.svg'

const rgbIndex = 9

export const programSchema: GenericCardSchema = {
  type: 'program',
  title: 'Program',
  // subTitle: 'Short Description',
  description: 'Description',
  icon: 'Program',
}

export const programsCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: programSchema,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Programs/DetailsPage',
    URLColumnName: 'Program',
    matchColumnName: 'Program',
  },
  labelLinkConfig: [
    {
      matchColumnName: 'Description',
      isMarkdown: true,
    },
  ],
  descriptionConfig: {
    showFullDescriptionByDefault: true,
  },
  iconOptions: {
    'AMP-RA/SLE': tagCloudSvg,
  },
}

export const programs: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    cardConfiguration: programsCardConfiguration,
    sql: programSql,
    shouldDeepLink: true,
    hideDownload: true,
    name: 'Programs',
    columnAliases,
    facetsToPlot: [],
    defaultShowPlots: false,
  },
}

export const details: DetailsPageProps = {
  sql: programSql,
  synapseConfigArray: [
    {
      name: 'CardContainerLogic',
      columnName: 'Program',
      title: 'Projects',
      tableSqlKeys: ['Program'],
      props: {
        ...projectsCardConfiguration,
        sql: projectsSql,
      },
    },
    {
      name: 'CardContainerLogic',
      columnName: 'Program',
      title: 'Datasets',
      tableSqlKeys: ['program'],
      props: {
        ...datasetCardConfiguration,
        sql: datasetsSql,
      },
    },
  ],
}

export const programDetailPage: SynapseConfig[] = [
  {
    name: 'CardContainerLogic',
    isOutsideContainer: true,
    props: {
      isHeader: true,
      isAlignToLeftNav: true,
      ...programsCardConfiguration,
      rgbIndex,
      columnAliases,
      genericCardSchema: {
        ...programSchema,
        title: 'Program',
        link: 'Program',
      },
      sql: programSql,
    },
  },
  {
    name: 'DetailsPage',
    props: details,
  },
]
