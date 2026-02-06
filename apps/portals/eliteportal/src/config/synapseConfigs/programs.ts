import {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { defaultSearchConfiguration, programsSql } from '../resources'
import { TargetEnum } from 'synapse-react-client/utils/html/TargetEnum'

const rgbIndex = 4
export const programCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  descriptionConfig: {
    showFullDescriptionByDefault: false,
  },
  genericCardSchema: {
    type: 'Program',
    title: 'fullName',
    subTitle: 'shortDescription',
    description: 'longDescription',
    // secondaryLabels: ['website'],
    imageFileHandleColumnName: 'homepageImage',
    thumbnailRequiresPadding: true,
  },
  secondaryLabelLimit: 4,
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Programs/DetailsPage',
    URLColumnName: 'program',
    matchColumnName: 'program',
    target: TargetEnum.CURRENT_WINDOW,
  },
}

const programsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  sql: programsSql,
  shouldDeepLink: true,
  name: 'Programs',
  cardConfiguration: programCardConfiguration,
  searchConfiguration: defaultSearchConfiguration,
}

export default programsQueryWrapperPlotNavProps
