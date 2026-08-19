import type { DetailPageMetadataConfig } from '@sage-bionetworks/synapse-portal-framework/utils/fetchDetailPageMetadata'
import { projectsSql } from '../config/resources'

export const metadataConfig: DetailPageMetadataConfig = {
  sql: projectsSql,
  titleColumn: 'Full Project Name',
  descriptionColumn: 'Description',
  paramName: 'Project',
}
