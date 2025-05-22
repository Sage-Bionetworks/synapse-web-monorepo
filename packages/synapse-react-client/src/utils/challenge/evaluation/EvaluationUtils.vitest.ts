import { EvaluationRound } from '@sage-bionetworks/synapse-client'
import { describe, it } from 'vitest'
import { getCurrentOrNextOrLatestRound } from './EvaluationUtils'

describe('EvaluationUtils', () => {
  describe('getCurrentOrNextOrLatestRound', () => {
    const twoYearsAgo = new Date()
    twoYearsAgo.setFullYear(new Date().getFullYear() - 2)
    const oneYearAgo = new Date()
    oneYearAgo.setFullYear(new Date().getFullYear() - 1)
    const oneMonthAgo = new Date()
    oneMonthAgo.setMonth(new Date().getMonth() - 1)
    const oneMonthInFuture = new Date()
    oneMonthInFuture.setMonth(new Date().getMonth() + 1)
    const oneYearInFuture = new Date()
    oneYearInFuture.setMonth(new Date().getMonth() + 1)
    const twoYearsInFuture = new Date()
    twoYearsInFuture.setMonth(new Date().getMonth() + 2)

    const distantPastRound: EvaluationRound = {
      evaluationId: '1',
      roundStart: twoYearsAgo.toISOString(),
      roundEnd: oneYearAgo.toISOString(),
    }

    const recentPastRound: EvaluationRound = {
      evaluationId: '1',
      roundStart: oneYearAgo.toISOString(),
      roundEnd: oneMonthAgo.toISOString(),
    }

    const currentRound: EvaluationRound = {
      evaluationId: '1',
      roundStart: oneMonthAgo.toISOString(),
      roundEnd: oneMonthInFuture.toISOString(),
    }

    const nearFutureRound: EvaluationRound = {
      evaluationId: '1',
      roundStart: oneMonthInFuture.toISOString(),
      roundEnd: oneYearInFuture.toISOString(),
    }

    const distantFutureRound: EvaluationRound = {
      evaluationId: '1',
      roundStart: oneYearInFuture.toISOString(),
      roundEnd: twoYearsInFuture.toISOString(),
    }

    it('returns the current round ', () => {
      const rounds = [
        distantPastRound,
        recentPastRound,
        currentRound,
        nearFutureRound,
        distantFutureRound,
      ]
      expect(getCurrentOrNextOrLatestRound(rounds)).toBe(currentRound)
    })

    it('returns the nearest future round when no current round ', () => {
      const rounds = [
        distantPastRound,
        recentPastRound,
        nearFutureRound,
        distantFutureRound,
      ]
      expect(getCurrentOrNextOrLatestRound(rounds)).toBe(nearFutureRound)
    })

    it('returns the most recent past round when no current round or future rounds', () => {
      const rounds = [distantPastRound, recentPastRound]
      expect(getCurrentOrNextOrLatestRound(rounds)).toBe(recentPastRound)
    })
  })
})
