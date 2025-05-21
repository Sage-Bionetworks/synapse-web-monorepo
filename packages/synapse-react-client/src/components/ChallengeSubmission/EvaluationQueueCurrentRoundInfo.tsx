import {
  useGetEvaluation,
  useGetEvaluationRoundsInfinite,
} from '@/synapse-queries/evaluation/useEvaluation'
import { getCurrentOrNextOrLatestRound } from '@/utils/challenge/evaluation/EvaluationUtils'
import { formatDate } from '@/utils/functions/DateFormatter'
import { InfoTwoTone } from '@mui/icons-material'
import Tooltip from '@mui/material/Tooltip'
import dayjs from 'dayjs'
import { useEffect, useMemo } from 'react'

type EvaluationQueueInfoProps = {
  evaluationId: string
}

/**
 * Displays an information tooltip about the current round of an Evaluation Queue.
 * If there is no current round, then
 * @param props
 * @constructor
 */
function EvaluationQueueCurrentRoundInfo(props: EvaluationQueueInfoProps) {
  const { evaluationId } = props

  const { data: evaluation } = useGetEvaluation(evaluationId)

  const {
    data: infiniteData,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useGetEvaluationRoundsInfinite(evaluationId)

  useEffect(() => {
    // Fetch all pages
    if (hasNextPage && !isFetchingNextPage) {
      void fetchNextPage()
    }
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  const rounds = useMemo(
    () => infiniteData?.pages.flatMap(page => page.page!) ?? [],
    [infiniteData?.pages],
  )

  const currentRound = getCurrentOrNextOrLatestRound(rounds)

  const title = (
    <>
      {evaluation?.description && <p>{evaluation?.description}</p>}
      {currentRound?.roundStart && (
        <p>
          <strong>Start:</strong> {formatDate(dayjs(currentRound?.roundStart))}
        </p>
      )}
      {currentRound?.roundEnd && (
        <p>
          <strong>End:</strong> {formatDate(dayjs(currentRound?.roundEnd))}
        </p>
      )}
      <p>
        <strong>Submission Limits:</strong>{' '}
        {currentRound?.limits
          ? `${currentRound?.limits
              .map(
                limit =>
                  `${
                    limit.maximumSubmissions
                  } ${limit.limitType.toLowerCase()} submissions`,
              )
              .join(', ')}`
          : 'No limit'}
      </p>
    </>
  )

  return (
    <Tooltip title={title}>
      <InfoTwoTone sx={{ color: 'grey.700' }} />
    </Tooltip>
  )
}

export default EvaluationQueueCurrentRoundInfo
