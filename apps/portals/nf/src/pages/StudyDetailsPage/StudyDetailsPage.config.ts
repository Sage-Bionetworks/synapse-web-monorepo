import type { DetailPageMetadataConfig } from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import { studiesSql } from '../../config/resources'

export const metadataConfig: DetailPageMetadataConfig = {
  sql: studiesSql,
  titleColumn: 'studyName',
  descriptionColumn: 'summary',
  paramName: 'studyId',
}
