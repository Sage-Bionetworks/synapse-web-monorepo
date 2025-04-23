import {
  Direction,
  SubmissionSearchSort,
  SubmissionSortField,
} from '@sage-bionetworks/synapse-client'
import { SortingState } from '@tanstack/react-table'

export function getSortApiRequestFromTableSortState(
  sortingState: SortingState,
): SubmissionSearchSort[] | undefined {
  if (sortingState.length === 0) {
    return undefined
  }
  const sort = sortingState[0]
  let field: SubmissionSortField = SubmissionSortField.CREATED_ON
  if (sort.id === 'createdOn') {
    field = SubmissionSortField.CREATED_ON
  } else if (sort.id === 'modifiedOn') {
    field = SubmissionSortField.MODIFIED_ON
  }
  return [
    {
      field,
      direction: sort.desc ? Direction.DESC : Direction.ASC,
    },
  ]
}
