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
    URLColumnName: 'id',
    matchColumnName: 'id',
    target: TargetEnum.CURRENT_WINDOW,
  },
  labelLinkConfig: [
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
    title: 'projectFullName',
    subTitle: 'studyFocus',
    // icon: 'Access_Type',
    description: 'studyDescription',
    secondaryLabels: ['studyName', 'grantNumber', 'isFeatured', 'isReleased'],
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
