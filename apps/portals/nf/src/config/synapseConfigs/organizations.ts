import type { CardLink, GenericCardSchema } from 'synapse-react-client'
import { SynapseConstants } from 'synapse-react-client'

export const organizationDetailsPageLinkConfig: CardLink = {
  matchColumnName: 'abbreviation',
  isMarkdown: false,
  baseURL: 'Organizations/DetailsPage',
  URLColumnName: 'abbreviation',
}

export const organizationCardSchema: GenericCardSchema = {
  title: 'organizationName',
  type: SynapseConstants.ORGANIZATION,
  description: 'summary',
  icon: 'abbreviation',
  link: 'website',
  thumbnailRequiresPadding: true,
}
