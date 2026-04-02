import type { DetailPageMetadataConfig } from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import { fundersSql } from '../../config/resources'

export const metadataConfig: DetailPageMetadataConfig = {
  sql: fundersSql,
  titleColumn: 'organizationName',
  descriptionColumn: 'summary',
  paramName: 'abbreviation',
}
