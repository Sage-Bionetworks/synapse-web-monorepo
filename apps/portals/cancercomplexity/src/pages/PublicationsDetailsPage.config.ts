import type { DetailPageMetadataConfig } from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import { publicationSql } from '../config/resources'

export const metadataConfig: DetailPageMetadataConfig = {
  sql: publicationSql,
  titleColumn: 'publicationTitle',
  paramName: 'pubMedId',
}
