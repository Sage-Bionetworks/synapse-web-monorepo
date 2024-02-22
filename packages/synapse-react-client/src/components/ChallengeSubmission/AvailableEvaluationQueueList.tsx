import { HelpOutlineTwoTone } from '@mui/icons-material'
import {
  Autocomplete,
  Box,
  Button,
  Collapse,
  List,
  ListItem,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'
import { Evaluation } from '@sage-bionetworks/synapse-types'
import { noop } from 'lodash-es'
import React, { useEffect, useState } from 'react'
import { MarkdownSynapse } from '../Markdown'
import LightTooltip from '../styled/LightTooltip'

type TextWithHelpIconProps = {
  text: string
  tooltipMarkdownText?: string
}

function TextWithHelpIcon(props: TextWithHelpIconProps) {
  const { text, tooltipMarkdownText } = props

  return (
    <>
      {text}
      {tooltipMarkdownText && (
        <LightTooltip
          title={
            <Typography variant="body1" mb={0}>
              <MarkdownSynapse markdown={tooltipMarkdownText} />
            </Typography>
          }
        >
          <HelpOutlineTwoTone
            sx={{
              ml: 1,
              color: 'grey.600',
              fontSize: '16px',
            }}
          />
        </LightTooltip>
      )}
    </>
  )
}

type AvailableEvaluationQueueStaticListProps = Pick<
  AvailableEvaluationQueueListProps,
  'evaluations'
>

function AvailableEvaluationQueueStaticList(
  props: AvailableEvaluationQueueStaticListProps,
) {
  const { evaluations } = props
  const [showList, setShowList] = useState<boolean>(false)

  return (
    <Box mt={2}>
      <Button
        variant="contained"
        sx={{ mb: 1 }}
        onClick={() => setShowList(!showList)}
      >
        {`${showList ? 'Hide' : 'Show'} All Available Evaluation Queues`}
      </Button>
      <Collapse in={showList}>
        <Typography variant="body1">Available Evaluation Queues:</Typography>
        <List dense={true}>
          {evaluations.map(evaluation => {
            return (
              <ListItem key={evaluation.id}>
                <TextWithHelpIcon
                  text={evaluation.name!}
                  tooltipMarkdownText={evaluation.submissionInstructionsMessage}
                />
              </ListItem>
            )
          })}
        </List>
      </Collapse>
    </Box>
  )
}

type AvailableEvaluationQueueAutocompleteListProps = Pick<
  AvailableEvaluationQueueListProps,
  'evaluations' | 'onChangeSelectedEvaluation'
>

function AvailableEvaluationQueueAutocompleteList(
  props: AvailableEvaluationQueueAutocompleteListProps,
) {
  const { evaluations, onChangeSelectedEvaluation = noop } = props
  const [value, setValue] = useState<Evaluation | null>(null)

  return (
    <Autocomplete
      // Must be set to false for dropdown list to be correctly positioned
      // when component is in a modal opened from a Markdown Widget in SWC
      disablePortal={false}
      value={value}
      onChange={(event, newValue: Evaluation | null) => {
        setValue(newValue)
        onChangeSelectedEvaluation(newValue)
      }}
      options={evaluations}
      getOptionLabel={option => option.name!}
      renderOption={(props, option, state, ownerState) => {
        return (
          <MenuItem {...props}>
            <TextWithHelpIcon
              text={ownerState.getOptionLabel(option)}
              tooltipMarkdownText={option.submissionInstructionsMessage}
            />
          </MenuItem>
        )
      }}
      renderInput={params => (
        <TextField {...params} label="Selected Evaluation Queue" />
      )}
    />
  )
}

export type AvailableEvaluationQueueListProps = {
  /* evaluation queues available to the current user */
  evaluations: Evaluation[]
  /* should the user be able to select an evaluation queue */
  isSelectable?: boolean
  /* will be called when the currently selected evaluation queue is changed */
  onChangeSelectedEvaluation?: (evaluation: Evaluation | null) => void
}

function AvailableEvaluationQueueList(
  props: AvailableEvaluationQueueListProps,
) {
  const {
    isSelectable = true,
    onChangeSelectedEvaluation = noop,
    evaluations,
  } = props
  const nEvaluations = evaluations.length

  useEffect(() => {
    if (nEvaluations === 1 && isSelectable)
      onChangeSelectedEvaluation(evaluations[0])
  }, [evaluations, isSelectable, nEvaluations, onChangeSelectedEvaluation])

  if (nEvaluations === 0)
    return <Typography variant="body1">No evaluations found</Typography>

  if (nEvaluations === 1) {
    const evaluation = evaluations[0]
    return (
      <Box display="flex" alignItems="center">
        <TextWithHelpIcon
          text={evaluation.name!}
          tooltipMarkdownText={evaluation.submissionInstructionsMessage}
        />
      </Box>
    )
  }

  return (
    <Box
      // Class name used in SWC to prevent markdown formatting from applying additional margin/padding
      className="AvailableEvaluationQueueList"
    >
      {isSelectable && <AvailableEvaluationQueueAutocompleteList {...props} />}
      <AvailableEvaluationQueueStaticList {...props} />
    </Box>
  )
}

export default AvailableEvaluationQueueList
