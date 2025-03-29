import StyledFormControl from '@/components/styled/StyledFormControl'
import { InputLabel, Select, TextField } from '@mui/material'
import { EvaluationRoundLimitType } from '@sage-bionetworks/synapse-types'
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
      <StyledFormControl className="limit-type">
        <InputLabel>Limit Type</InputLabel>
        <Select
          fullWidth
          native
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
        </Select>
      </StyledFormControl>

      <TextField
        fullWidth
        className="limit-input"
        label={'Maximum Submissions'}
        inputProps={{
          pattern: '[0-9]*',
        }}
        value={limitInput.maxSubmissionString}
        onChange={event => {
          onChange({
            type: limitInput.type,
            maxSubmissionString: event.target.value,
          })
        }}
      />
    </>
  )
}
