import type { DetailPageMetadataConfig } from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import { initiativesSql } from '../config/resources'

export const metadataConfig: DetailPageMetadataConfig = {
  sql: initiativesSql,
  titleColumn: 'initiative',
  descriptionColumn: 'summary',
  paramName: 'initiative',
}
