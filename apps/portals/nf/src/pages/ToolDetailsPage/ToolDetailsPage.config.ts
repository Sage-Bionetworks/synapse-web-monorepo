import type { DetailPageMetadataConfig } from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import { toolsSql } from '../../config/resources'

export const metadataConfig: DetailPageMetadataConfig = {
  sql: toolsSql,
  titleColumn: 'resourceName',
  descriptionColumn: 'description',
  paramName: 'resourceId',
}
