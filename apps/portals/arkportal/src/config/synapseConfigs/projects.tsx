import type {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import columnAliases from '../columnAliases'
import { projectsSql } from '../resources'

export const projectsRgbIndex = 9

export const projectSchema: TableToGenericCardMapping = {
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
