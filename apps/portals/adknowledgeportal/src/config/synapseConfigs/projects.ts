import type {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { projectsSql } from '../resources'

const rgbIndex = 4

export const PROJECT_TABLE_COLUMN_NAMES = {
  PROGRAM: 'Program',
  GRANT_NUMBER: 'Grant Number',
}

export const projectCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: 'Project',
    title: 'Name',
    subTitle: 'Principal Investigators',
    description: 'Abstract',
    secondaryLabels: [
      'Institutions',
      'Program',
      'Grant Number',
      'More Information',
    ],
  },
  secondaryLabelLimit: 4,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Projects/DetailsPage',
    URLColumnName: 'Grant Number',
    matchColumnName: 'Grant Number',
  },
  labelLinkConfig: [
    {
      isMarkdown: false,
      matchColumnName: 'More Information',
      linkColumnName: 'More Information URL',
    },
  ],
}

export const projectsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: projectsSql,
  shouldDeepLink: true,
  name: 'Projects',
  cardConfiguration: projectCardConfiguration,
  // unitDescription: 'Projects',
  searchConfiguration: {
    searchable: [
      'Name',
      'Grant Number',
      'Program',
      'Principal Investigators',
      'Institutions',
      'Abstract',
    ],
  },
}
