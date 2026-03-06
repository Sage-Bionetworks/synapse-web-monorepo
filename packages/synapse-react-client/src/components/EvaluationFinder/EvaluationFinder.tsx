import { useGetEvaluationsInfinite } from '@/synapse-queries/evaluation/useEvaluation'
import {
  Alert,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  LinearProgress,
  TextField,
} from '@mui/material'
import { GetEvaluationParameters } from '@sage-bionetworks/synapse-types'
import { useEffect, useMemo, useState } from 'react'
import { HelpPopover } from '../HelpPopover'
import { IconSvg } from '../IconSvg'
import { IconSvgButton } from '../IconSvgButton'

export type EvaluationFinderProps = Pick<
  GetEvaluationParameters,
  'accessType' | 'activeOnly'
> & {
  selectedIds: string[]
  onChange: (newSelectedIds: string[]) => void
}

export default function EvaluationFinder(props: EvaluationFinderProps) {
  const { accessType, activeOnly, selectedIds = [], onChange } = props
  const [searchTerm, setSearchTerm] = useState('')
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetEvaluationsInfinite(
      {
        accessType,
        activeOnly,
      },
      { placeholderData: previousData => previousData, throwOnError: true },
    )

  // Automatically fetch all pages
  useEffect(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage])

  // Flatten all evaluations from all pages
  const allEvaluations = useMemo(() => {
    return data?.pages?.flatMap(page => page.results) ?? []
  }, [data])

  // Filter evaluations based on search term
  const filteredEvaluations = useMemo(() => {
    if (!searchTerm.trim()) {
      return allEvaluations
    }
    return allEvaluations.filter(evaluation =>
      evaluation.name?.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [allEvaluations, searchTerm])

  if (isLoading) {
    return <LinearProgress />
  }
  if (!data?.pages) {
    // This should never happen since errors are propagated to the error boundary
    return (
      <Alert severity="error">
        An unexpected error occurred and evaluations could not be loaded
      </Alert>
    )
  }

  return (
    <>
      <TextField
        fullWidth
        variant="outlined"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        sx={{ mb: 2 }}
        placeholder="Search Evaluations"
        slotProps={{
          input: {
            startAdornment: (
              <IconSvg
                icon="search"
                wrap={false}
                sx={{
                  mr: 1,
                  color: 'grey.600',
                }}
              />
            ),
            endAdornment: (
              <>
                {searchTerm.length > 0 && (
                  <IconSvgButton
                    icon="close"
                    size="small"
                    onClick={() => {
                      setSearchTerm('')
                    }}
                  />
                )}
              </>
            ),
          },
        }}
      />
      <Box
        sx={{
          maxHeight: '400px',
          overflowY: 'auto',
          border: '1px solid',
          borderColor: 'grey.300',
          borderRadius: 1,
          p: 2,
        }}
      >
        <FormControl fullWidth>
          <FormGroup sx={{ gap: 1 }}>
            {filteredEvaluations.map(evaluation => (
              <FormControlLabel
                control={
                  <Checkbox inputProps={{ 'aria-label': evaluation.name! }} />
                }
                key={evaluation.id}
                label={
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    {evaluation.name}
                    {evaluation.submissionInstructionsMessage &&
                      evaluation.submissionInstructionsMessage.length > 0 && (
                        <Box
                          sx={{
                            fontSize: '10px',
                          }}
                        >
                          <HelpPopover
                            markdownText={
                              evaluation.submissionInstructionsMessage
                            }
                            placement={'right'}
                          />
                        </Box>
                      )}
                  </Box>
                }
                checked={selectedIds.includes(evaluation.id!)}
                onChange={() => {
                  if (selectedIds.includes(evaluation.id!)) {
                    onChange(selectedIds.filter(id => id !== evaluation.id))
                  } else {
                    onChange([...selectedIds, evaluation.id!])
                  }
                }}
              />
            ))}
            {filteredEvaluations.length === 0 && (
              <Box sx={{ textAlign: 'center', py: 2, color: 'text.secondary' }}>
                No evaluations found
              </Box>
            )}
          </FormGroup>
        </FormControl>
      </Box>
      {isFetchingNextPage && (
        <Box sx={{ mt: 1 }}>
          <LinearProgress />
        </Box>
      )}
    </>
  )
}
