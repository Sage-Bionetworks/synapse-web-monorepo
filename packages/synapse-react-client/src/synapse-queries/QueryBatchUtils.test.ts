import { batchQueries } from './QueryBatchUtils'
import { noop } from 'lodash-es'

describe('QueryBatchUtils', () => {
  describe('batchQueries', () => {
    test('successfully batches and maps chunks to query options', () => {
      const listToBatch = [1, 2, 3]
      const maxBatchSize = 2
      const mapToQueryOptionsFn = (chunkedList: number[]) => {
        return {
          queryKey: chunkedList,
          queryFn: noop,
        }
      }
      const result = batchQueries(
        listToBatch,
        maxBatchSize,
        mapToQueryOptionsFn,
      )
      expect(result).toHaveLength(2)
      expect(result[0]).toEqual({ queryKey: [1, 2], queryFn: noop })
      expect(result[1]).toEqual({ queryKey: [3], queryFn: noop })
    })
  })
})
