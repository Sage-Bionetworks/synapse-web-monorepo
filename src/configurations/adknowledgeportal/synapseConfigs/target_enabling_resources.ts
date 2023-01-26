import { GenericCardSchema } from 'synapse-react-client/dist/containers/GenericCard'
import { SynapseConstants } from 'synapse-react-client'
import { SynapseConfig } from 'types/portal-config'
import { CardConfiguration } from 'synapse-react-client/dist/containers/CardContainerLogic'
import { targetEnablingResourcesExploreSql } from '../resources'
import { QueryWrapperPlotNavProps } from 'synapse-react-client/dist/containers/query_wrapper_plot_nav/QueryWrapperPlotNav'

// https://sagebionetworks.jira.com/wiki/spaces/PS/pages/2501607563/AMP-AD+Target+Enabling+Resources+Schema

const targetSchema: GenericCardSchema = {
  type: SynapseConstants.EXPERIMENTAL,
  title: 'title',
  description: 'summary',
  subTitle: 'contributing_center',
  link: 'link',
  secondaryLabels: ['target', 'related_target', 'program', 'grant'],
}

export const targetEnablingResourcesCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: targetSchema,
  labelLinkConfig: [
    {
      isMarkdown: false,
      matchColumnName: 'program',
      URLColumnName: 'Program',
      baseURL: 'Explore/Programs/DetailsPage',
    },
    {
      isMarkdown: false,
      matchColumnName: 'grant',
      URLColumnName: 'Grant Number',
      baseURL: 'Explore/Projects/DetailsPage',
    },
  ],
}

export const targetEnablingResourcesTableConfiguration: QueryWrapperPlotNavProps['tableConfiguration'] =
  {
    title: 'Target Enabling Resources',
    showAccessColumn: false,
    showDownloadColumn: false,
    columnLinks: [
      {
        matchColumnName: 'title',
        linkColumnName: 'link',
        isMarkdown: false,
      },
      {
        isMarkdown: false,
        matchColumnName: 'program',
        URLColumnName: 'Program',
        baseURL: 'Explore/Programs/DetailsPage',
      },
      {
        isMarkdown: false,
        matchColumnName: 'grant',
        URLColumnName: 'Grant Number',
        baseURL: 'Explore/Projects/DetailsPage',
      },
    ],
    hideDownload: true,
    isRowSelectionVisible: false,
  }

const rgbIndex = 6

const targetEnablingResources: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
    rgbIndex,
    sql: targetEnablingResourcesExploreSql,
    visibleColumnCount: 7,
    name: 'Target Enabling Resources',
    shouldDeepLink: true,
    hideDownload: true,
    tableConfiguration: targetEnablingResourcesTableConfiguration,
    columnAliases: {
      TEP_type: 'TEP Type',
      related_target: 'Related Target',
      contributing_center: 'Contributing Center',
    },
    facetsToPlot: [
      'category',
      'target',
      'related_target',
      'program',
      'grant',
      'contributing_center',
    ],
    searchConfiguration: {
      searchable: [
        'title',
        'category',
        'target',
        'related_target',
        'program',
        'grant',
        'contributing_center',
        'page',
        'summary',
      ],
    },
  },
}

export default targetEnablingResources
