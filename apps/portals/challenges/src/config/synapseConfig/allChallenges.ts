import { ColumnIconConfigs } from 'synapse-react-client'
import { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import { CardLink } from 'synapse-react-client/components/CardContainer/CardLink'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import { QueryWrapperPlotNavProps } from 'synapse-react-client/components/QueryWrapperPlotNav/QueryWrapperPlotNav'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { allChallengesSql } from '../resources'

const allChallengesSchema: TableToGenericCardMapping = {
  type: SynapseConstants.CHALLENGE,
  title: 'title',
  subTitle: 'organizingCommunity',
  description: 'description',
  secondaryLabels: [
    'platform',
    'keywords',
    'metadataCompletenessTier',
    'incentive',
    'submissionType',
    'inputDataType',
  ],
  titleAreaDetails: ['status', 'startDate', 'endDate'],
}
const allChallengesTitleLinkConfig: CardLink = {
  isMarkdown: false,
  overrideLinkURLColumnName: 'learnMoreLink',
  matchColumnName: 'title',
}
const containerSx = {
  bgcolor: '#DFE2E6',
  borderRadius: '50%',
  width: '24px',
  height: '24px',
}
const iconSx = { padding: '4px' }
const allChallengesIconConfig: ColumnIconConfigs = {
  columns: {
    metadataCompletenessTier: {
      Baseline: { icon: 'baseline', containerSx, sx: iconSx },
      Comprehensive: { icon: 'rosetteRibbon', containerSx, sx: iconSx },
      'Gold Standard': { icon: 'starTrophy', containerSx, sx: iconSx },
      Standard: { icon: 'awardScroll', containerSx, sx: iconSx },
    },
    incentive: {
      Recognition: { icon: 'clappingHands', containerSx, sx: iconSx },
      'Speaking opportunity': { icon: 'podium', containerSx, sx: iconSx },
      'Publication opportunity': { icon: 'openBook', containerSx, sx: iconSx },
      'Monetary prize': { icon: 'handWithMoney', containerSx, sx: iconSx },
      Other: { icon: 'threeStars', containerSx, sx: iconSx },
    },
  },
}
const allChallengesCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: allChallengesSchema,
  secondaryLabelLimit: 4,
  titleLinkConfig: allChallengesTitleLinkConfig,
  columnIconOptions: allChallengesIconConfig,
}
export const allChallenges: QueryWrapperPlotNavProps = {
  shouldDeepLink: true,
  sql: allChallengesSql,
  cardConfiguration: allChallengesCardConfiguration,
  name: 'Challenges',
  hideTopLevelControls: true,
  defaultShowPlots: false,
}
