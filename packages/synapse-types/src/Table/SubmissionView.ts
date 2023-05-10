import { View } from './View'

export const SUBMISSION_VIEW_CONCRETE_TYPE_VALUE =
  'org.sagebionetworks.repo.model.table.SubmissionView'
export type SUBMISSION_VIEW_CONCRETE_TYPE =
  typeof SUBMISSION_VIEW_CONCRETE_TYPE_VALUE

/**
 * A view of evaluation submissions whose scope is defined by the evaluation ids the submissions are part of. The user must have READ_PRIVATE_SUBMISSION access on each of the evaluations in the scope.
 *
 * https://docs.synapse.org/rest/org/sagebionetworks/repo/model/table/SubmissionView.html
 */
export interface SubmissionView extends View {
  concreteType: SUBMISSION_VIEW_CONCRETE_TYPE
  /** The list of container ids that define the scope of this view. */
  scopeIds: string[]
}
