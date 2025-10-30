import {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { defaultSearchConfiguration, studiesSql } from '../resources'
import { TargetEnum } from 'synapse-react-client/utils/html/TargetEnum'

export const studiesRgbIndex = 0

export const studyCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 4,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Studies/DetailsPage',
    URLColumnName: 'studyKey',
    matchColumnName: 'studyKey',
    target: TargetEnum.CURRENT_WINDOW,
  },
  labelLinkConfig: [
    {
      isMarkdown: false,
      baseURL: 'Explore/Projects',
      URLColumnName: 'grant',
      matchColumnName: 'grants',
    },
    // {
    //   isMarkdown: false,
    //   matchColumnName: 'projectFullName',
    //   overrideLinkURLColumnName: 'project',
    //   overrideLinkURLColumnTransform: shortName =>
    //     `/Explore/Projects/DetailsPage?shortName=${shortName}`,
    // },
  ],
  genericCardSchema: {
    type: SynapseConstants.STUDY,
    title: 'studyName',
    subTitle: 'studyFocus',
    // icon: 'Access_Type',
    description: 'studyDescription',
    secondaryLabels: [
      'projectFullName',
      'grantNumber',
      'isFeatured',
      'isReleased',
    ],
  },
}

export const studyColumnAliases = {
  projectFullName: 'Project',
}

const studiesQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex: studiesRgbIndex,
  columnAliases: studyColumnAliases,
  sql: studiesSql,
  name: 'Studies',
  shouldDeepLink: true,
  cardConfiguration: studyCardConfiguration,
  searchConfiguration: defaultSearchConfiguration,
}

export default studiesQueryWrapperPlotNavProps
