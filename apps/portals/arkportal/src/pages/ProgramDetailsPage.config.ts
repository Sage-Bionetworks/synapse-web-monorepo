import type { DetailPageMetadataConfig } from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import { programSql } from '../config/resources'

export const metadataConfig: DetailPageMetadataConfig = {
  sql: programSql,
  titleColumn: 'Program',
  descriptionColumn: 'Description',
  paramName: 'Program',
}
