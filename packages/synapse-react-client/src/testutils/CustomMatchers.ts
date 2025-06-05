import { doesQueryKeyMatch } from '@/synapse-queries/QueryMatchingTestUtils'
import { QueryKey } from '@tanstack/react-query'

expect.extend({
  toMatchQueryKey(received: QueryKey, matcher: QueryKey) {
    return {
      pass: doesQueryKeyMatch(received, matcher),
      message: () =>
        `Expected query key to match: ${JSON.stringify(
          matcher,
        )}, but received: ${JSON.stringify(received)}`,
      actual: received,
      expected: matcher,
    }
  },
})
