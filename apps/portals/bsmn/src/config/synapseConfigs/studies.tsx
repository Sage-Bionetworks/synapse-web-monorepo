import type {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
import { studiesSql } from '../resources'

const rgbIndex = 0

export const studyCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.DATASET,
    title: 'studyName',
    subTitle: 'institutions',
    description: 'studyDescription',
    icon: 'studyStatus',
    secondaryLabels: [
      'diagnosis',
      'organs',
      'tissues',
      'tissueFraction',
      'dataTypes',
      'project',
      'ndaLink',
    ],
  },
  labelLinkConfig: [
    {
      matchColumnName: 'ndaLink',
      isMarkdown: true,
    },
    {
      isMarkdown: true,
      matchColumnName: 'project',
    },
  ],
  secondaryLabelLimit: 4,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Data/DetailsPage',
    URLColumnName: 'id',
    matchColumnName: 'id',
  },
}

export const studiesQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  shouldDeepLink: true,
  sql: studiesSql,
  hideDownload: true,
  name: 'Data',
  cardConfiguration: studyCardConfiguration,
  facetsToPlot: [
    'studyStatus',
    'diagnosis',
    'organs',
    'tissues',
    'dataTypes',
    'tissueFraction',
  ],
  searchConfiguration: {
    searchable: [
      'studyName',
      'institutions',
      'studyDescription',
      'diagnosis',
      'organs',
      'tissues',
      'tissueFraction',
      'dataTypes',
      'methods',
    ],
  },
}
