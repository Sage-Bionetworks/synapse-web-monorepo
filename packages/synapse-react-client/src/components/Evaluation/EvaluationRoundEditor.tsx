import {
  EvaluationRound,
  EvaluationRoundLimit,
} from '@sage-bionetworks/synapse-types'
import React, { useEffect, useState } from 'react'
import { Alert, Button } from '@mui/material'
import { Card, Col, Form, FormControl, FormGroup, Row } from 'react-bootstrap'
import dayjs, { Dayjs } from 'dayjs'
import { EvaluationRoundLimitOptionsList } from './round_limits/EvaluationRoundLimitOptionsList'
import { useListState } from '../../utils/hooks/useListState'
import {
  convertEvaluationRoundToInput,
  EvaluationRoundInput,
  EvaluationRoundLimitInput,
} from './input_models/models'
import {
  createEvaluationRound,
  deleteEvaluationRound,
  updateEvaluationRound,
} from '../../synapse-client/SynapseClient'
import { SynapseClientError } from '../../utils/SynapseClientError'
import { EvaluationRoundEditorDropdown } from './EvaluationRoundEditorDropdown'
import { ErrorBanner } from '../error/ErrorBanner'
import { useSynapseContext } from '../../utils/context/SynapseContext'
import IconSvg, { IconSvgProps } from '../IconSvg/IconSvg'
import utc from 'dayjs/plugin/utc'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import DateTimePicker from '../DateTimePicker/DateTimePicker'
import { DateTimeValidationError } from '@mui/x-date-pickers'
import { upperFirst } from 'lodash-es'

dayjs.extend(utc)
dayjs.extend(isSameOrAfter)

export type EvaluationRoundEditorProps = {
  evaluationRoundInput: EvaluationRoundInput
  onDelete: () => void
  onSave: (evaluationRound: EvaluationRoundInput) => void
}

const disallowCalendarDateBefore = (date: Dayjs) => {
  const startOfDay = date.startOf('day')
  return (currentDate: Dayjs) => currentDate.isSameOrAfter(startOfDay)
}

const determineRoundStatus = (
  roundStart: Dayjs | string,
  roundEnd: Dayjs | string,
) => {
  let className: string
  let iconProps: IconSvgProps | undefined
  let status: string
  const now = dayjs()
  // based off of start/end datetime from props so that users making
  // unsaved changes to the start/end dates do not change the status
  if (now.isSameOrAfter(roundStart)) {
    if (now.isBefore(roundEnd)) {
      className = 'status-in-progress'
      iconProps = { icon: 'sync' }
      status = 'IN PROGRESS'
    } else {
      className = 'status-completed'
      iconProps = { icon: 'clipboardCheck' }
      status = 'COMPLETED'
    }
  } else {
    className = 'status-not-yet-started'
    iconProps = undefined
    status = 'NOT YET STARTED'
  }

  return (
    <div className={className}>
      <div className="status">
        {iconProps && <IconSvg {...iconProps} />}
        <span>{status}</span>
      </div>
    </div>
  )
}

const convertInputsToEvaluationRound = (
  evaluationRoundInputProp: EvaluationRoundInput,
  startDate: string | Dayjs | null,
  endDate: string | Dayjs | null,
  totalSubmissionLimit: string,
  advancedLimits: EvaluationRoundLimitInput[],
): EvaluationRound => {
  const limits: EvaluationRoundLimit[] = []
  if (totalSubmissionLimit) {
    const totalSubmissionLimitInt = Number(totalSubmissionLimit)
    if (Number.isNaN(totalSubmissionLimitInt)) {
      throw TypeError('Total Submission is not an integer')
    }
    limits.push({
      limitType: 'TOTAL',
      maximumSubmissions: totalSubmissionLimitInt,
    })
  }
  advancedLimits.forEach(limitInput => {
    if (limitInput.maxSubmissionString) {
      const maxSubmissionInt = Number(limitInput.maxSubmissionString)
      if (Number.isNaN(maxSubmissionInt)) {
        throw TypeError(limitInput.type + ' Limit is not an integer')
      }
      limits.push({
        limitType: limitInput.type,
        maximumSubmissions: maxSubmissionInt,
      })
    }
  })

  return {
    id: evaluationRoundInputProp.id,
    etag: evaluationRoundInputProp.etag,
    evaluationId: evaluationRoundInputProp.evaluationId,
    roundStart: dayjs.utc(startDate).toJSON(),
    roundEnd: dayjs.utc(endDate).toJSON(),
    limits: limits,
  }
}

function getDateErrorMessage(
  dateField: 'start' | 'end',
  error: DateTimeValidationError | null,
): string | null {
  if (error == null) return null
  switch (error) {
    case 'disablePast':
      return `${upperFirst(dateField)} date cannot be in the past`
    case 'invalidDate':
    default:
      return 'Invalid date'
  }
}

export const EvaluationRoundEditor: React.FunctionComponent<
  EvaluationRoundEditorProps
> = ({ evaluationRoundInput, onSave, onDelete }) => {
  const { accessToken } = useSynapseContext()
  const [error, setError] = useState<string | SynapseClientError | undefined>()
  const [showSaveSuccess, setShowSaveSuccess] = useState<boolean>(false)

  useEffect(() => {
    if (error) {
      setShowSaveSuccess(false)
    }
  }, [error])

  const [startDate, setStartDate] = useState<string | Dayjs | null>(
    evaluationRoundInput.roundStart
      ? dayjs(evaluationRoundInput.roundStart)
      : null,
  )
  const [endDate, setEndDate] = useState<string | Dayjs | null>(
    evaluationRoundInput.roundEnd ? dayjs(evaluationRoundInput.roundEnd) : null,
  )

  const [totalSubmissionLimit, setTotalSubmissionLimit] = useState<string>(
    evaluationRoundInput.totalSubmissionLimit,
  )

  const [advancedMode, setAdvancedMode] = useState<boolean>(false)

  const [startDateError, setStartDateError] =
    useState<DateTimeValidationError | null>(null)
  const [endDateError, setEndDateError] =
    useState<DateTimeValidationError | null>(null)

  const {
    list: advancedLimits,
    handleListRemove,
    handleListChange: handleAdvancedLimitsChange,
    appendToList: addAdvancedLimit,
  } = useListState<EvaluationRoundLimitInput>(evaluationRoundInput.otherLimits)

  // if we remove the last advanced limit, hide the advanced limits
  const handleAdvancedLimitsRemove = (index: number) => {
    const generatedRemoveFunc = handleListRemove(index)
    return () => {
      //we are deleting the last advanced limit

      generatedRemoveFunc()
      if (advancedLimits.length === 1) {
        // NOTE: we dont check for length == 0 because we don't modify the original list,
        // instead the generated function will setState() with a NEW empty list
        // so the original list we reference still has 1 element
        setAdvancedMode(false)
      }
    }
  }

  const onSaveButtonClick = () => {
    setShowSaveSuccess(false)
    let evaluationRound
    try {
      evaluationRound = convertInputsToEvaluationRound(
        evaluationRoundInput,
        startDate,
        endDate,
        totalSubmissionLimit,
        advancedLimits,
      )
    } catch (err) {
      // error thrown if number
      setError(err)
    }
    if (evaluationRound) {
      const promise = evaluationRound.id
        ? updateEvaluationRound(evaluationRound, accessToken)
        : createEvaluationRound(evaluationRound, accessToken)

      promise
        .then(createdOrUpdatedRound => {
          const newInput = convertEvaluationRoundToInput(
            createdOrUpdatedRound,
            evaluationRoundInput.reactListKey,
          )
          //clear out previous error if any
          setError(undefined)
          setShowSaveSuccess(true)
          onSave(newInput)
        })
        .catch(error => setError(error))
    }
  }

  const onDeleteButtonClick = () => {
    if (evaluationRoundInput.id) {
      deleteEvaluationRound(
        evaluationRoundInput.evaluationId,
        evaluationRoundInput.id,
        accessToken,
      )
        .then(() => onDelete())
        .catch(error => setError(error))
    } else {
      onDelete()
    }
  }

  const disableStartInput = dayjs().isSameOrAfter(
    evaluationRoundInput.roundStart,
  )

  // https://react-bootstrap.github.io/components/forms/#forms-validation-native
  return (
    <div className="evaluation-round-editor">
      <Card>
        <Card.Body>
          <Form role="form">
            <Row>
              <Col>
                <h5>
                  ROUND STATUS
                  {evaluationRoundInput.id &&
                    ' (' + evaluationRoundInput.id + ')'}
                </h5>
              </Col>
              <Col>
                <EvaluationRoundEditorDropdown
                  onDelete={onDeleteButtonClick}
                  onSave={onSaveButtonClick}
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <div className="round-status">
                  {determineRoundStatus(
                    evaluationRoundInput.roundStart,
                    evaluationRoundInput.roundEnd,
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h5>DURATION</h5>
              </Col>
            </Row>

            <Row>
              <Col>
                <DateTimePicker
                  label="Round Start"
                  value={startDate}
                  onChange={setStartDate}
                  onError={error => setStartDateError(error)}
                  disabled={disableStartInput}
                  // Don't allow the value to be a past date only if the input is not disabled.
                  // i.e. allow a past date if the round has already started
                  disablePast={!disableStartInput}
                  slotProps={{
                    textField: {
                      helperText: getDateErrorMessage('start', startDateError),
                    },
                  }}
                />
              </Col>
              <Col>
                <DateTimePicker
                  label="Round End"
                  value={endDate}
                  onChange={setEndDate}
                  onError={error => setEndDateError(error)}
                  disablePast={
                    !dayjs(endDate).isSame(evaluationRoundInput.roundEnd)
                  }
                  slotProps={{
                    textField: {
                      helperText: getDateErrorMessage('end', endDateError),
                    },
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <h5 style={{ marginTop: '20px' }}>SUBMISSION LIMITS</h5>
              </Col>
            </Row>

            <Row>
              <Col>
                <FormGroup>
                  <label>Total Submissions / Round</label>
                  <FormControl
                    value={totalSubmissionLimit}
                    type="text"
                    pattern="[0-9]*"
                    onChange={event =>
                      setTotalSubmissionLimit(event.target.value)
                    }
                    // Chrome for some reason decides to autofill this input box with email address, so we must disable autofill
                    // this is a hacky, but consistent way to disable autofill because Chrome does not respect the spec :(
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=914451
                    autoComplete="new-password"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Button
                  variant="text"
                  color="primary"
                  sx={{ fontSize: '16px !important' }}
                  className="advanced-limits-link"
                  onClick={() => setAdvancedMode(!advancedMode)}
                >
                  Advanced Limits
                </Button>
              </Col>
            </Row>

            {advancedMode && (
              <EvaluationRoundLimitOptionsList
                limitInputs={advancedLimits}
                handleChange={handleAdvancedLimitsChange}
                handleDeleteLimit={handleAdvancedLimitsRemove}
                onAddNewLimit={addAdvancedLimit}
              />
            )}

            {error && (
              <Row className="my-3">
                <Col>
                  <ErrorBanner error={error} />
                </Col>
              </Row>
            )}

            {showSaveSuccess && (
              <Row className="my-3">
                <Col>
                  <Alert
                    className="save-success-alert"
                    severity="success"
                    onClose={() => setShowSaveSuccess(false)}
                    sx={{ mb: '20px' }}
                  >
                    Successfully saved.
                  </Alert>
                </Col>
              </Row>
            )}

            <Row className="mt-3">
              <Col>
                <Button
                  variant="contained"
                  color="primary"
                  className="save-button float-right border-0"
                  onClick={onSaveButtonClick}
                >
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export const HelpersToTest = {
  disallowCalendarDateBefore,
  determineRoundStatus,
  convertInputsToEvaluationRound,
}
