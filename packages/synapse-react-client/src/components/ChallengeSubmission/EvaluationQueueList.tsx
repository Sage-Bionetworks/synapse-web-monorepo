import { Alert, Box, TextField, Typography } from '@mui/material'
import React from 'react'
import { useGetEntityEvaluations } from '../../synapse-queries'
import { ACCESS_TYPE } from '@sage-bionetworks/synapse-types'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { RadioOption } from '../widgets/RadioGroup'

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

  const columns: GridColDef[] = [
    {
      field: 'radiobutton',
      width: 25,
      sortable: false,
      filterable: false,
      hideable: false,
      disableColumnMenu: true,
      renderCell: params => {
        return (
          <RadioOption
            value={params.id as string}
            checked={params.id === selectedEvaluation}
            onChange={onEvaluationChange}
            label=""
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
  ]

  const getRows = () => {
    return (evaluations ?? [])?.map(evaluation => {
      return {
        id: evaluation.id,
        name: evaluation.name,
      }
    })
  }

  return (
    <Box>
      <Box
        sx={{ display: 'flex', backgroundColor: '#FBFBFC', padding: '10px' }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: '18px', lineHeight: '20px', fontWeight: 700 }}
        >
          Your Submission Directory
        </Typography>
      </Box>
      <DataGrid
        columns={columns}
        rows={getRows()}
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
      />
      <Box mt={3}>
        <Typography variant="body1">Submission Name (optional)</Typography>
        <TextField
          id="submissionName"
          name="submissionName"
          fullWidth
          onChange={e => onSubmissionNameChange(e.target.value)}
          value={submissonName}
        />
        {submissionError && (
          <Box mt={1}>
            <Alert severity="error">{submissionError}</Alert>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default EvaluationQueueList
