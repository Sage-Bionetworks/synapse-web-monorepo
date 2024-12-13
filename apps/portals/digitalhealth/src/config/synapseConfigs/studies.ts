import {
  CardConfiguration,
  TargetEnum,
} from 'synapse-react-client/components/CardContainerLogic/index'
import { GenericCardSchema } from 'synapse-react-client/components/GenericCard/GenericCard'
import { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/index'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import columnAliases from '../columnAliases'
import { studySql } from '../resources'
import { iconOptions } from './iconOptions'

export const studiesRgbIndex = 9

export const studySchema: GenericCardSchema = {
  type: '',
  title: 'study',
  subTitle: 'investigator',
  icon: 'collectionType',
  description: 'studyDescription',
  secondaryLabels: [
    'collectionType',
    'diagnosis',
    'intervention',
    'numberParticipants',
    'reportedOutcome',
    'deviceType',
    'sensorType',
    'dataCollectionMethod',
    'devicePlatform',
    'deviceLocation',
    'digitalAssessmentCategory',
    'digitalAssessmentDetails',
    'sensorDataType',
    'dataUsed',
    'keywords',
  ],
}

export const studiesCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: studySchema,
  iconOptions,
  titleLinkConfig: {
    isMarkdown: false,
    target: TargetEnum.CURRENT_WINDOW,
    baseURL: 'Explore/Collections/DetailsPage',
    URLColumnName: 'study',
    matchColumnName: 'study',
  },
  labelLinkConfig: [
    {
      matchColumnName: 'dataUsed',
      isMarkdown: true,
    },
  ],
}

export const studiesQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex: studiesRgbIndex,
  cardConfiguration: studiesCardConfiguration,
  sql: studySql,
  shouldDeepLink: true,
  hideDownload: true,
  name: 'Collections',
  columnAliases,
  facetsToPlot: [
    'collectionType',
    'deviceLocation',
    'devicePlatform',
    'deviceType',
    'diagnosis',
    'digitalAssessmentCategory',
    'intervention',
    'reportedOutcome',
    'sensorType',
  ],
  searchConfiguration: {
    searchable: [
      'diagnosis',
      'digitalAssessmentCategory',
      'digitalAssessmentDetails',
      'intervention',
      'investigator',
      'keywords',
      'reportedOutcome',
      'study',
    ],
  },
}
