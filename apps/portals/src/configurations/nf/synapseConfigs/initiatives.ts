import { SynapseConfig } from 'types/portal-config'

import { columnAliases } from './commonProps'
import { initiativesSql, studiesSql } from '../resources'
import type { CardConfiguration } from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
import { DetailsPageProps } from 'types/portal-util-types'
import { studyCardConfiguration } from './studies'

export const newSql = `${initiativesSql} order by ROW_ID desc limit 3`
const rgbIndex = 8

export const initiativeCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: 'Initiative',
    title: 'initiative',
    description: 'summary',
    link: 'website',
    imageFileHandleColumnName: 'image',
  },
}

const initiatives: SynapseConfig = {
  name: 'QueryWrapperPlotNav',
  className: 'InitiativeCardList',
  props: {
    rgbIndex,
    defaultShowPlots: false,
    shouldDeepLink: true,
    sql: initiativesSql,
    cardConfiguration: {
      ...initiativeCardConfiguration,
      titleLinkConfig: {
        matchColumnName: 'initiative',
        isMarkdown: false,
        baseURL: 'Explore/Initiatives/DetailsPage',
        URLColumnName: 'initiative',
      },
      ctaLinkConfig: {
        text: 'Visit Website',
        link: 'website',
      },
    },
    name: 'Initiatives',
    columnAliases,
    searchConfiguration: {
      searchable: ['initiative', 'summary'],
    },
  },
}

export const initiativeDetailsPageConfiguration: DetailsPageProps = {
  showMenu: false,
  sql: initiativesSql,
  synapseConfigArray: [
    {
      name: 'CardContainerLogic',
      columnName: 'initiative',
      title: 'Studies',
      showTitleSeperator: false,
      tableSqlKeys: ['initiative'],
      props: {
        sql: studiesSql,
        ...studyCardConfiguration,
      },
    },
  ],
}

export default initiatives
