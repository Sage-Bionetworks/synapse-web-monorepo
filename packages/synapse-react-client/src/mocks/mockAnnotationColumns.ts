import {
  ColumnTypeEnum,
  ViewColumnModelResponse,
} from '@sage-bionetworks/synapse-types'

export const MOCK_ANNOTATION_COLUMNS: ViewColumnModelResponse = {
  concreteType: 'org.sagebionetworks.repo.model.table.ViewColumnModelResponse',
  results: [
    {
      id: '1235325',
      columnType: ColumnTypeEnum.STRING,
      name: 'columnFromAnnotations',
      maximumSize: 10,
    },
  ],
  nextPageToken: null,
}
