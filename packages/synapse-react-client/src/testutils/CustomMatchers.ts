import { doesQueryKeyMatch } from '@/synapse-queries/QueryMatchingTestUtils'
import { QueryKey } from '@tanstack/react-query'

expect.extend({
  toMatchQueryKey(received: QueryKey, matcher: QueryKey) {
    const { isNot } = this
    return {
      pass: doesQueryKeyMatch(received, matcher),
      message: () =>
        `Expected query key to${isNot ? ' not' : ''} match: ${JSON.stringify(
          matcher,
        )}, but received: ${JSON.stringify(received)}`,
      actual: received,
      expected: matcher,
    }
  },
})
