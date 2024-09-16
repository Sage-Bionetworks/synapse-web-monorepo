import { ViewColumnModelResponse } from '@sage-bionetworks/synapse-types'
import { isEqual, pick } from 'lodash-es'
import { mockQueryResultBundle } from './mockFileViewQuery'
import defaultFileViewColumnModels from './query/defaultFileViewColumnModels'

export const MOCK_ANNOTATION_COLUMN_RESPONSE: ViewColumnModelResponse = {
  concreteType: 'org.sagebionetworks.repo.model.table.ViewColumnModelResponse',
  results: [
    ...mockQueryResultBundle.columnModels.filter(
      cm =>
        !defaultFileViewColumnModels.find(defaultCm =>
          isEqual(
            pick(defaultCm, ['name', 'columnType']),
            pick(cm, ['name', 'columnType']),
          ),
        ),
    ),
  ],
  nextPageToken: null,
}
