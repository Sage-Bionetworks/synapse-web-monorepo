import type { CardLink } from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'

export const organizationDetailsPageLinkConfig: CardLink = {
  matchColumnName: 'abbreviation',
  isMarkdown: false,
  baseURL: 'Organizations/DetailsPage',
  URLColumnName: 'abbreviation',
}

export const organizationCardSchema: TableToGenericCardMapping = {
  title: 'organizationName',
  type: SynapseConstants.ORGANIZATION,
  description: 'summary',
  icon: 'abbreviation',
  link: 'website',
  thumbnailRequiresPadding: true,
}
