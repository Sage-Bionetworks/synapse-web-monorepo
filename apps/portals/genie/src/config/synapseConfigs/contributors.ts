import type {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'

import { contributorsSql } from '../resources'

const rgbIndex = 8

export const contributorCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.CONTRIBUTOR,
    title: 'Contributor',
    // description: 'summary',
    secondaryLabels: [
      'Contribution',
      'Center Abbreviation',
      'Location',
      'Lead(s)',
    ],
  },
}

const contributorsQueryWrapperPlotNavProps: QueryWrapperPlotNavProps = {
  rgbIndex,
  defaultShowPlots: false,
  shouldDeepLink: false,
  sql: contributorsSql,
  cardConfiguration: {
    ...contributorCardConfiguration,
    // titleLinkConfig: {
    //   matchColumnName: 'initiative',
    //   isMarkdown: false,
    //   baseURL: 'Explore/Initiatives/DetailsPage',
    //   URLColumnName: 'initiative',
    // },
    // ctaLinkConfig: {
    //   text: 'Visit Website',
    //   link: 'website',
    // },
  },
  name: 'Contributors',
  // searchConfiguration: {
  //   searchable: ['initiative', 'summary'],
  // },
}

export default contributorsQueryWrapperPlotNavProps
