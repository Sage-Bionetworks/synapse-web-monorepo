import { CardConfiguration } from 'synapse-react-client/components/CardContainerLogic/index'
import { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/index'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { projectsSql } from '../resources'

const rgbIndex = 7

export const projectCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: 'Project',
    title: 'title',
    subTitle: 'primaryInvestigators',
    description: 'abstract',
    secondaryLabels: [
      'grantNumber',
      'institution',
      'contributors',
      'ndaCollection',
    ],
  },
  secondaryLabelLimit: 4,
  labelLinkConfig: [
    {
      isMarkdown: true,
      matchColumnName: 'ndaCollection',
    },
  ],
  titleLinkConfig: {
    isMarkdown: false,
    URLColumnName: 'id',
    matchColumnName: 'id',
    baseURL: 'Explore/Projects/DetailsPage',
  },
}

export const projectsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: projectsSql,
  name: 'Projects',
  cardConfiguration: projectCardConfiguration,
  shouldDeepLink: true,
  hideDownload: true,
  facetsToPlot: ['primaryInvestigators', 'grantNumber', 'institutions'],
  columnAliases: {
    ndaCollection: 'NDA Collection',
  },
  searchConfiguration: {
    searchable: [
      'title',
      'primaryInvestigators',
      'abstract',
      'grantNumber',
      'institution',
      'contributors',
      'ndaCollection',
    ],
  },
}
