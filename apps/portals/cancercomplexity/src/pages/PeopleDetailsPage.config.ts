import type { DetailPageMetadataConfig } from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import { peopleSql } from '../config/resources'

export const metadataConfig: DetailPageMetadataConfig = {
  sql: peopleSql,
  titleColumn: 'name',
  paramName: 'name',
}
