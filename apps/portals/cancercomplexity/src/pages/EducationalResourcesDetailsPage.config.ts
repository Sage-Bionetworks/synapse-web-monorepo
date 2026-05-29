import type { DetailPageMetadataConfig } from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import { educationSql } from '../config/resources'

export const metadataConfig: DetailPageMetadataConfig = {
  sql: educationSql,
  titleColumn: 'title',
  descriptionColumn: 'description',
  paramName: 'title',
}
