import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import { SearchQueryWrapperPlotNavProps } from 'synapse-react-client/components/SearchQueryWrapperPlotNav/SearchQueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import {
  defaultSearchConfiguration,
  studiesSearchIndexId,
  studiesSql,
} from '../resources'
import { TargetEnum } from 'synapse-react-client/utils/html/TargetEnum'

export const studiesRgbIndex = 0

export const studyCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  secondaryLabelLimit: 4,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Studies/DetailsPage',
    URLColumnName: 'study',
    matchColumnName: 'study',
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
    title: 'studyName',
    subTitle: 'studyFocus',
    // icon: 'Access_Type',
    description: 'studyDescription',
    secondaryLabels: [
      'metadataStatus',
      'measuredConstruct',
      'measureType',
      'constructDomain',
      'instrumentName',
      'diseaseFocus',
      'primaryHealthFocus',
      'grantNumber',
    ],
    includeShareButton: true,
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

export const studiesSearch: SearchQueryWrapperPlotNavProps = {
  rgbIndex: studiesRgbIndex,
  columnAliases: studyColumnAliases,
  name: 'Studies',
  shouldDeepLink: false,
  searchIndexId: studiesSearchIndexId,
  autocompleteFieldName: 'studyName',
  cardConfiguration: studyCardConfiguration,
  hideTopLevelControls: false,
  hideQueryCount: false,
}

export default studiesQueryWrapperPlotNavProps
