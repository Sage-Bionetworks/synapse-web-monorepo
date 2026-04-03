import type { DetailPageMetadataConfig } from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import { hackathonsSql } from '../../config/resources'

export const metadataConfig: DetailPageMetadataConfig = {
  sql: hackathonsSql,
  titleColumn: 'name',
  descriptionColumn: 'summary',
  paramName: 'id',
}
