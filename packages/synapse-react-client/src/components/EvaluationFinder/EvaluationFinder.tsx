import React, { useState } from 'react'
import { useGetEvaluationsInfinite } from '../../synapse-queries/evaluation/useEvaluation'
import { HelpPopover } from '../HelpPopover/HelpPopover'
import {
  Box,
  Button,
  FormControl,
  FormGroup,
  LinearProgress,
  Typography,
} from '@mui/material'
import { GetEvaluationParameters } from '@sage-bionetworks/synapse-types'
import { Checkbox } from '../widgets/Checkbox'

export type EvaluationFinderProps = Pick<
  GetEvaluationParameters,
  'accessType' | 'activeOnly'
> & {
  selectedIds: string[]
  onChange: (newSelectedIds: string[]) => void
}

export default function EvaluationFinder(props: EvaluationFinderProps) {
  const { accessType, activeOnly, selectedIds = [], onChange } = props
  const [currentPage, setCurrentPage] = useState(0)
  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetEvaluationsInfinite(
      {
        accessType,
        activeOnly,
      },
      { keepPreviousData: true },
    )

  if (isLoading) {
    return <LinearProgress />
  }
  if (!data?.pages) {
    return <></>
  }

  const canGoToNextPage =
    (data.pages.length - 1 > currentPage || hasNextPage) && !isFetchingNextPage

  return (
    <>
      <FormControl>
        <FormGroup sx={{ gap: 1 }}>
          {data.pages[currentPage]?.results.map(evaluation => (
            <Checkbox
              key={evaluation.id}
              label={
                <Typography variant={'smallText1'} component={'span'}>
                  {evaluation.name}{' '}
                  {evaluation.submissionInstructionsMessage &&
                    evaluation.submissionInstructionsMessage.length > 0 && (
                      <HelpPopover
                        markdownText={evaluation.submissionInstructionsMessage}
                        placement={'right'}
                      />
                    )}
                </Typography>
              }
              aria-label={evaluation.name!}
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
        </FormGroup>
      </FormControl>
      <Box display={'flex'} my={2} gap={1}>
        {currentPage > 0 && (
          <Button
            variant={'outlined'}
            onClick={() => setCurrentPage(page => page - 1)}
          >
            Previous
          </Button>
        )}
        <Button
          variant={'outlined'}
          disabled={!canGoToNextPage}
          onClick={() => {
            if (data.pages[currentPage + 1]) {
              setCurrentPage(page => page + 1)
            } else {
              fetchNextPage().then(() => setCurrentPage(page => page + 1))
            }
          }}
        >
          Next
        </Button>
      </Box>
    </>
  )
}
