import { AddBox, CloseTwoTone } from '@mui/icons-material'
import IconButton from '@mui/material/IconButton'
import { EvaluationRoundLimitType } from '@sage-bionetworks/synapse-types'
import { Fragment, useCallback, useEffect } from 'react'
import { EvaluationRoundLimitInput } from '../input_models/models'
import {
  EvaluationRoundLimitOptions,
  LIMIT_TYPE_DISPLAY_NAME,
} from './EvaluationRoundLimitOptions'

const AVAILABLE_LIMIT_TYPES = Object.keys(LIMIT_TYPE_DISPLAY_NAME)

export type EvaluationRoundLimitOptionsListProps = {
  limitInputs: EvaluationRoundLimitInput[]
  handleChange: (
    index: number,
  ) => (limitInput: EvaluationRoundLimitInput) => void

  handleDeleteLimit: (index: number) => () => void

  onAddNewLimit: (limit: EvaluationRoundLimitInput) => void
}

const selectUnusedType = (
  selectedTypes: Set<EvaluationRoundLimitType>,
): EvaluationRoundLimitType => {
  return AVAILABLE_LIMIT_TYPES.find(
    key => !selectedTypes.has(key as EvaluationRoundLimitType),
  ) as EvaluationRoundLimitType
}

export function EvaluationRoundLimitOptionsList({
  limitInputs,
  handleChange,
  handleDeleteLimit,
  onAddNewLimit,
}: EvaluationRoundLimitOptionsListProps) {
  // all types that are currently being used
  const selectedTypes: Set<EvaluationRoundLimitType> = new Set(
    limitInputs.map(limit => limit.type),
  )

  const addNewLimit = useCallback(() => {
    onAddNewLimit({
      type: selectUnusedType(selectedTypes),
      maxSubmissionString: '',
    })
  }, [onAddNewLimit, selectedTypes])

  //display some input even if no limits currently exist
  useEffect(() => {
    if (limitInputs.length === 0) {
      addNewLimit()
    }
  }, [limitInputs, addNewLimit])

  return (
    <div
      data-testid="EvaluationRoundLimitOptionsList"
      className="advanced-limits-grid"
    >
      {limitInputs.map((limit, index) => {
        return (
          <Fragment key={limit.type}>
            <EvaluationRoundLimitOptions
              limitInput={limit}
              allSelectedTypes={selectedTypes}
              onChange={handleChange(index)}
            />

            {/*remove button for the EvaluationRoundLimitOptions*/}
            <IconButton
              size={'small'}
              color="primary"
              aria-label="Remove"
              className="remove-button"
              onClick={handleDeleteLimit(index)}
              sx={{ height: '40px', width: '40px' }}
            >
              <CloseTwoTone />
            </IconButton>

            {/*conditionally create a "add" button*/}
            {
              // if last element
              index === limitInputs.length - 1 &&
                // if the are unused limit types
                limitInputs.length < AVAILABLE_LIMIT_TYPES.length && (
                  <IconButton
                    size={'small'}
                    color="primary"
                    aria-label="Add"
                    onClick={addNewLimit}
                    className="add-button"
                    sx={{ height: '40px', width: '40px' }}
                  >
                    <AddBox />
                  </IconButton>
                )
            }
          </Fragment>
        )
      })}
    </div>
  )
}
