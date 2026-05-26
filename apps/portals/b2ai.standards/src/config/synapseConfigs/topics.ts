import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { TOPIC_TABLE_COLUMN_CONSTS as T } from '@/config/resources'

export const topicsRgbIndex = 3

export const topicsCardSchema: TableToGenericCardMapping = {
  type: SynapseConstants.DATASET,
  title: T.NAME,
  description: T.DESCRIPTION,
  secondaryLabels: [T.CATEGORY, T.EDAM_ID, T.MESH_ID, T.NCIT_ID],
}

// For showing other topics as cards (e.g., a Related Topics section that links
// each card to its own topic details page).
export const linkedTopicCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: '',
    title: T.NAME,
    description: T.DESCRIPTION,
  },
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/DataTopic/DetailsPage',
    URLColumnName: T.ID,
    matchColumnName: T.ID,
  },
}
