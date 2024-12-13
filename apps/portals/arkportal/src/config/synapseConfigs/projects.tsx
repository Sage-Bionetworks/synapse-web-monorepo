import { CardConfiguration } from 'synapse-react-client/components/CardContainerLogic/index'
import { GenericCardSchema } from 'synapse-react-client/components/GenericCard/GenericCard'
import { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/index'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import columnAliases from '../columnAliases'
import { projectsSql } from '../resources'

export const projectsRgbIndex = 9

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

export const projectsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex: projectsRgbIndex,
  cardConfiguration: projectsCardConfiguration,
  sql: projectsSql,
  shouldDeepLink: true,
  hideDownload: true,
  name: 'Projects',
  columnAliases,
  facetsToPlot: [],
  defaultShowPlots: false,
}
