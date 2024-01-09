import React from 'react'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import EvaluationFinder from '../EvaluationFinder/EvaluationFinder'
import { useGetEvaluation } from '../../synapse-queries/evaluation/useEvaluation'
import { Box, IconButton, Skeleton, Typography } from '@mui/material'
import IconSvg from '../IconSvg'

type SubmissionViewScopeItemProps = {
  evaluationId: string
  onRemove: () => void
}

function SubmissionViewScopeItem(props: SubmissionViewScopeItemProps) {
  const { evaluationId, onRemove } = props
  const { data: evaluation, isLoading } = useGetEvaluation(evaluationId)
  if (isLoading) {
    return <Skeleton width={'100%'} />
  }
  return (
    <Box
      display={'flex'}
      flexDirection={'row'}
      gap={1}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Typography key={evaluation!.id} variant={'smallText1'}>
        {evaluation!.name}
      </Typography>
      <IconButton
        size={'small'}
        aria-label={`Remove ${evaluation!.name!} from scope`}
        onClick={() => {
          onRemove()
        }}
        sx={{
          '&:hover': {
            color: 'error.main',
          },
        }}
      >
        <IconSvg icon={'delete'} fontSize={'inherit'} wrap={false} />
      </IconButton>
    </Box>
  )
}

export type SubmissionViewScopeEditorProps = {
  evaluationIds: string[]
  onChange: (evaluationIds: string[]) => void
}

/**
 * Component used to select evaluations to define a SubmissionView scope
 * @param props
 * @constructor
 */
export default function SubmissionViewScopeEditor(
  props: SubmissionViewScopeEditorProps,
) {
  const { evaluationIds = [], onChange } = props

  return (
    <>
      <Typography variant={'smallText1'} sx={{ fontWeight: 700 }} mb={1}>
        Evaluations
      </Typography>
      <EvaluationFinder
        activeOnly={false}
        accessType={ACCESS_TYPE.READ_PRIVATE_SUBMISSION}
        selectedIds={evaluationIds}
        onChange={onChange}
      />
      <Box
        sx={{ border: '1px solid', borderColor: 'grey.300' }}
        p={2.5}
        mb={2.5}
      >
        <Typography variant={'smallText1'} sx={{ fontWeight: 700 }} mb={1}>
          Selected
        </Typography>
        <Box display={'flex'} flexDirection={'column'} gap={1}>
          {evaluationIds.map(evaluationId => (
            <SubmissionViewScopeItem
              key={evaluationId}
              evaluationId={evaluationId}
              onRemove={() => {
                onChange(evaluationIds.filter(id => id !== evaluationId))
              }}
            />
          ))}
        </Box>
      </Box>
    </>
  )
}
