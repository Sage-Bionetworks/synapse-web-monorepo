import { useGetEvaluation } from '@/synapse-queries/evaluation/useEvaluation'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import EvaluationFinder from '../EvaluationFinder/EvaluationFinder'
import IconSvg from '../IconSvg'

type SubmissionViewScopeItemProps = {
  evaluationId: string
  onRemove: () => void
}

function SubmissionViewScopeItem(props: SubmissionViewScopeItemProps) {
  const { evaluationId, onRemove } = props
  const {
    data: evaluation,
    isLoading,
    isError,
    error,
  } = useGetEvaluation(evaluationId)
  if (isLoading) {
    return <Skeleton width={'100%'} />
  }
  if (isError) {
    return (
      <Alert severity="error">
        <Typography>{error.reason}</Typography>
        <Link
          onClick={e => {
            onRemove()
          }}
        >
          Remove from scope
        </Link>
      </Alert>
    )
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
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
      <Typography
        variant={'smallText1'}
        sx={{
          mb: 1,
          fontWeight: 700,
        }}
      >
        Evaluations
      </Typography>
      <EvaluationFinder
        activeOnly={false}
        accessType={ACCESS_TYPE.READ_PRIVATE_SUBMISSION}
        selectedIds={evaluationIds}
        onChange={onChange}
      />
      <Box
        sx={{
          p: 2.5,
          mb: 2.5,
          border: '1px solid',
          borderColor: 'grey.300',
        }}
      >
        <Typography
          variant={'smallText1'}
          sx={{
            mb: 1,
            fontWeight: 700,
          }}
        >
          Selected
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
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
