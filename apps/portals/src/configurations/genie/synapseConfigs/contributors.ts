import { SynapseConfig } from 'types/portal-config'

import { contributorsSql } from '../resources'
import type { CardConfiguration } from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'

const rgbIndex = 8

export const contributorCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.ORGANIZATION,
    title: 'Contributor',
    description: 'summary',
    link: 'website',
    imageFileHandleColumnName: 'image',
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
    name: 'Initiatives',
    searchConfiguration: {
      searchable: ['initiative', 'summary'],
    },
  },
}

export default contributors
