import { SynapseConfig } from '@sage-bionetworks/synapse-portal-framework/types/portal-config'

import { contributorsSql } from '../resources'
import type { CardConfiguration } from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'

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

const contributors: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  props: {
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
  },
}

export default contributors
