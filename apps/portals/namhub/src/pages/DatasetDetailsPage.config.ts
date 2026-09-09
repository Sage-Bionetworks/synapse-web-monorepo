import type { DetailPageMetadataConfig } from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import { datasetsSql } from '../config/resources'

export const metadataConfig: DetailPageMetadataConfig = {
  sql: datasetsSql,
  titleColumn: 'name',
  descriptionColumn: 'description',
  paramName: 'id',
}
