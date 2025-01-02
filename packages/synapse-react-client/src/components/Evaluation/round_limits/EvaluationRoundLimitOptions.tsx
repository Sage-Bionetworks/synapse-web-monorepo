import { EvaluationRoundLimitType } from '@sage-bionetworks/synapse-types'
import { FormControl, FormGroup } from 'react-bootstrap'
import { EvaluationRoundLimitInput } from '../input_models/models'

export type EvaluationRoundLimitOptionsProps = {
  limitInput: EvaluationRoundLimitInput
  //all types for which an EvaluationRoundLimitOptions was already created
  allSelectedTypes: Set<EvaluationRoundLimitType>
  onChange: (limitInput: EvaluationRoundLimitInput) => void
}

export const LIMIT_TYPE_DISPLAY_NAME: Partial<
  Record<EvaluationRoundLimitType, string>
> = {
  // EvaluationRoundLimitType.TOTAL is purposely omitted because an <input> in the parent handles it
  DAILY: 'Daily Limit',
  WEEKLY: 'Weekly Limit',
  MONTHLY: 'Monthly Limit',
}

export function EvaluationRoundLimitOptions({
  limitInput,
  allSelectedTypes,
  onChange,
}: EvaluationRoundLimitOptionsProps) {
  return (
    <>
      <FormGroup className="limit-type">
        <label>Limit Type</label>
        <FormControl
          as="select"
          custom
          value={limitInput.type}
          onChange={event => {
            onChange({
              type: event.target.value as EvaluationRoundLimitType,
              maxSubmissionString: limitInput.maxSubmissionString,
            })
          }}
        >
          {Object.entries(LIMIT_TYPE_DISPLAY_NAME).map(
            ([displayLimitType, displayName]) => (
              <option
                key={displayLimitType}
                value={displayLimitType}
                disabled={
                  allSelectedTypes.has(
                    displayLimitType as EvaluationRoundLimitType,
                  ) && displayLimitType !== limitInput.type
                }
              >
                {displayName}
              </option>
            ),
          )}
        </FormControl>
      </FormGroup>

      <FormGroup className="limit-input">
        <label>Maximum Submissions</label>
        <FormControl
          type="text"
          pattern="[0-9]*"
          value={limitInput.maxSubmissionString}
          onChange={event => {
            onChange({
              type: limitInput.type,
              maxSubmissionString: event.target.value,
            })
          }}
        />
      </FormGroup>
    </>
  )
}
