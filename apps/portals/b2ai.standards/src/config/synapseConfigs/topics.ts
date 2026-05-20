import type { CardConfiguration } from 'synapse-react-client/components/CardContainer/CardConfiguration'
import type { LabelLinkConfig } from 'synapse-react-client/components/CardContainerLogic/CardContainerLogic'
import type { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import { TOPIC_TABLE_COLUMN_CONSTS as T } from '@/config/resources'

export const topicsRgbIndex = 3

export const topicsColumnLinks: LabelLinkConfig = [
  {
    isMarkdown: true,
    matchColumnName: T.NAME,
  },
  // EDAM ontology IDs: render the cell value as a link to bioregistry.io,
  // which forwards to the EDAM concept page. Synapse's built-in renderer
  // already handles mesh: and ncit: prefixes; edam.X: is not in its list.
  {
    isMarkdown: false,
    matchColumnName: T.EDAM_ID,
    overrideLinkURLColumnName: T.EDAM_ID,
    overrideLinkURLColumnTransform: (v: string) =>
      `https://bioregistry.io/${v}`,
  },
]

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
