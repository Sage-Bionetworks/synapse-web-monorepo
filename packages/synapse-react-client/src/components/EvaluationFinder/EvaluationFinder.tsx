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
import styles from './EvaluationFinder.module.scss'

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
        className={styles.searchField}
        placeholder="Search Evaluations"
        slotProps={{
          input: {
            startAdornment: (
              <IconSvg
                icon="search"
                wrap={false}
                className={styles.searchIcon}
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
      <Box className={styles.scrollContainer}>
        <FormControl fullWidth>
          <FormGroup className={styles.formGroup}>
            {filteredEvaluations.map(evaluation => (
              <FormControlLabel
                control={
                  <Checkbox inputProps={{ 'aria-label': evaluation.name! }} />
                }
                key={evaluation.id}
                label={
                  <Box className={styles.labelContainer}>
                    {evaluation.name}
                    {evaluation.submissionInstructionsMessage &&
                      evaluation.submissionInstructionsMessage.length > 0 && (
                        <Box className={styles.helpPopoverWrapper}>
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
              <Box className={styles.emptyState}>No evaluations found</Box>
            )}
          </FormGroup>
        </FormControl>
      </Box>
      {isFetchingNextPage && (
        <Box className={styles.loadingContainer}>
          <LinearProgress />
        </Box>
      )}
    </>
  )
}
