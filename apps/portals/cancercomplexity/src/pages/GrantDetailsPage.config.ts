import type { DetailPageMetadataConfig } from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import { grantsSql } from '../config/resources'

export const metadataConfig: DetailPageMetadataConfig = {
  sql: grantsSql,
  titleColumn: 'grantName',
  descriptionColumn: 'abstract',
  paramName: 'grantId',
}
