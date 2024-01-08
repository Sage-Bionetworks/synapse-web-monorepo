import { PaginatedResults } from '@sage-bionetworks/synapse-types'
import { getNextPageParamForPaginatedResults } from './InfiniteQueryUtils'

describe('InfiniteQueryUtils', () => {
  describe('getNextPageParamForPaginatedResults', () => {
    test('totalNumberOfResults is 1 more than fetched, not last page', () => {
      const pages: PaginatedResults<unknown>[] = [
        {
          totalNumberOfResults: 3,
          results: [1, 2],
        },
        {
          totalNumberOfResults: 5,
          results: [3, 4],
        },
      ]

      const nextPageParam = getNextPageParamForPaginatedResults(
        pages[pages.length - 1],
        pages,
      )
      expect(nextPageParam).toBe(4)
    })
    test('totalNumberOfResults is 1 more than fetched, on last page', () => {
      const pages: PaginatedResults<unknown>[] = [
        {
          totalNumberOfResults: 3,
          results: [1, 2],
        },
        {
          // Note that totalNumberOfResults is 4 and we fetched 4 results
          totalNumberOfResults: 4,
          results: [3, 4],
        },
      ]

      const nextPageParam = getNextPageParamForPaginatedResults(
        pages[pages.length - 1],
        pages,
      )
      expect(nextPageParam).toBe(undefined)
    })
    test('totalNumberOfResults is always correct more than fetched, not last page', () => {
      const pages: PaginatedResults<unknown>[] = [
        {
          totalNumberOfResults: 4,
          results: [1, 2],
        },
      ]

      const nextPageParam = getNextPageParamForPaginatedResults(
        pages[pages.length - 1],
        pages,
      )
      expect(nextPageParam).toBe(2)
    })
    test('totalNumberOfResults is always correct more than fetched, on last page', () => {
      const pages: PaginatedResults<unknown>[] = [
        {
          totalNumberOfResults: 4,
          results: [1, 2],
        },
        {
          totalNumberOfResults: 4,
          results: [3, 4],
        },
      ]

      const nextPageParam = getNextPageParamForPaginatedResults(
        pages[pages.length - 1],
        pages,
      )
      expect(nextPageParam).toBe(undefined)
    })
    test('totalNumberOfResults is undefined, not last page', () => {
      const pages: PaginatedResults<unknown>[] = [
        {
          results: [1, 2],
        },
      ]

      const nextPageParam = getNextPageParamForPaginatedResults(
        pages[pages.length - 1],
        pages,
      )
      expect(nextPageParam).toBe(2)
    })

    test('totalNumberOfResults is undefined, on last page', () => {
      const pages: PaginatedResults<unknown>[] = [
        {
          results: [1, 2],
        },
        {
          results: [],
        },
      ]

      const nextPageParam = getNextPageParamForPaginatedResults(
        pages[pages.length - 1],
        pages,
      )
      expect(nextPageParam).toBe(undefined)
    })
  })
})
