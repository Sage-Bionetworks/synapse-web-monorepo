import { CardConfiguration } from 'synapse-react-client/components/CardContainerLogic/index'
import { GenericCardSchema } from 'synapse-react-client/components/GenericCard/GenericCard'
import { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/index'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import columnAliases from '../columnAliases'
import { programSql } from '../resources'
import tagCloudSvg from '../style/tagCloud.svg?url'

export const programsRgbIndex = 9

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

export const programsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex: programsRgbIndex,
  cardConfiguration: programsCardConfiguration,
  sql: programSql,
  shouldDeepLink: true,
  hideDownload: true,
  name: 'Programs',
  columnAliases,
  facetsToPlot: [],
  defaultShowPlots: false,
}
