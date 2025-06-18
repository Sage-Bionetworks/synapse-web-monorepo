import EvaluationQueueCurrentRoundInfo from '@/components/ChallengeSubmission/EvaluationQueueCurrentRoundInfo'
import { useGetEntityEvaluations } from '@/synapse-queries'
import Alert from '@mui/material/Alert'
import Box from '@mui/material/Box'
import Radio from '@mui/material/Radio'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { ACCESS_TYPE, Evaluation } from '@sage-bionetworks/synapse-types'

type EvaluationQueueListProps = {
  projectId: string
  submissonName: string
  selectedEvaluation: string | undefined
  onSubmissionNameChange: (value: string) => void
  onEvaluationChange: (value: string) => void
  submissionError?: string
}

function EvaluationQueueList({
  projectId,
  submissonName,
  selectedEvaluation,
  onSubmissionNameChange,
  onEvaluationChange,
  submissionError,
}: EvaluationQueueListProps) {
  const { isLoading, data: evaluations } = useGetEntityEvaluations(projectId, {
    activeOnly: true,
    accessType: ACCESS_TYPE.SUBMIT,
  })

  const columns: GridColDef<Evaluation>[] = [
    {
      field: 'radiobutton',
      width: 25,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: params => {
        return (
          <Radio
            value={params.id as string}
            checked={params.id === selectedEvaluation}
            onChange={event => onEvaluationChange(event.target.value)}
          />
        )
      },
    },
    {
      field: 'name',
      flex: 1,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
    },
    {
      field: 'info',
      width: 25,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: params => (
        <EvaluationQueueCurrentRoundInfo evaluationId={params.id as string} />
      ),
    },
  ]

  return (
    <Box>
      <Box
        sx={{ display: 'flex', backgroundColor: '#FBFBFC', padding: '10px' }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: '18px', lineHeight: '20px', fontWeight: 700 }}
        >
          Evaluation Queues
        </Typography>
      </Box>
      <DataGrid
        columns={columns}
        rows={evaluations || []}
        hideFooter
        density="compact"
        autoHeight
        loading={isLoading}
        slots={{
          toolbar: () => null,
        }}
        sx={{
          fontSize: '14px',
          border: 'none',
          height: '100%',
          '& .MuiDataGrid-columnHeaders': {
            display: 'none',
          },
          '& .MuiDataGrid-virtualScroller': {
            marginTop: '0px !important',
          },
          '& .Mui-odd': {
            backgroundColor: '#FBFBFC',
          },
          '.MuiDataGrid-columnHeaderTitleContainer': {
            justifyContent: 'space-between',
          },
          '.radio': {
            display: 'flex',
            alignItems: 'center',
            height: '100%',
          },
        }}
        getRowClassName={params =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
        }
        showToolbar
      />
      <Box
        sx={{
          mt: 3,
        }}
      >
        <Typography variant="body1">Submission Name (optional)</Typography>
        <TextField
          id="submissionName"
          name="submissionName"
          fullWidth
          onChange={e => onSubmissionNameChange(e.target.value)}
          value={submissonName}
        />
        {submissionError && (
          <Box
            sx={{
              mt: 1,
            }}
          >
            <Alert severity="error">{submissionError}</Alert>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default EvaluationQueueList
