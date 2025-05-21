import {
  CardConfiguration,
  QueryWrapperPlotNavProps,
} from 'synapse-react-client'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { initiativesSql } from '../resources'
import { columnAliases } from './commonProps'

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

const initiatives: QueryWrapperPlotNavProps = {
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
}

export default initiatives
