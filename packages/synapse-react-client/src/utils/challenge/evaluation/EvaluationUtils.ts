import { EvaluationRound } from '@sage-bionetworks/synapse-client'
import dayjs from 'dayjs'

/**
 * Given a list of evaluation rounds:
 *  - If there is a current round, return it
 *  - Else if there is one or more upcoming rounds, return the soonest
 *  - Else return the most recent round in the past
 * @param rounds
 */
export function getCurrentOrNextOrLatestRound(
  rounds: EvaluationRound[],
): EvaluationRound | undefined {
  // See if there is a current round. If so, return it!
  const currentRound = rounds.find(
    round =>
      dayjs().isAfter(dayjs(round.roundStart)) &&
      dayjs().isBefore(dayjs(round.roundEnd)),
  )
  if (currentRound) {
    return currentRound
  }

  // If there are rounds in the future, return the soonest one.
  const nextRound = rounds.reduce((prev: EvaluationRound | undefined, curr) => {
    const isFutureRound = dayjs().isBefore(curr.roundStart)
    if (!isFutureRound) return prev
    if (prev == undefined) {
      return curr
    } else if (dayjs(curr.roundStart).isBefore(prev.roundStart)) return curr
    return prev
  }, undefined)

  if (nextRound) {
    return nextRound
  }

  // There are no current or future rounds, so return the most recent round in the past
  const latestRound = rounds.reduce((prev, curr) => {
    const isLater = dayjs(curr.roundEnd).isAfter(dayjs(prev.roundEnd))
    if (isLater) {
      return curr
    }
    return prev
  }, rounds[0])
  return latestRound
}
