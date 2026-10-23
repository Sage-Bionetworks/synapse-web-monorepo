import { describe, test, expect } from 'vitest'
import { RestrictionUiType } from '../HasAccess/AccessIcon'
import {
  getRestrictionUiTypeFromAridhiaRequests,
  findRequestsForDataset,
} from './aridhiaAccessStatusUtils'
import { RequestListItem } from '@sage-bionetworks/aridhia-client/generated/models'

type Status = NonNullable<RequestListItem['status']>

const EXPECTED_BY_STATUS: Record<Status, RestrictionUiType> = {
  approved: RestrictionUiType.AccessibleOnRDCADAP,
  pending:
    RestrictionUiType.AccessBlockedByRestrictionWithPendingRDCADAPRequest,
  denied:
    RestrictionUiType.AccessBlockedByRestrictionWithRejectedRDCADAPRequest,
  error: RestrictionUiType.AccessBlockedByACL,
}

// Most favorable first: see `getRestrictionUiTypeFromAridhiaRequests`.
const PRECEDENCE: Status[] = ['approved', 'pending', 'denied', 'error']

function request(status: Status | undefined, updated_at?: string) {
  return { status, updated_at } as RequestListItem
}

describe('aridhiaAccessStatusUtils', () => {
  describe('getRestrictionUiTypeFromAridhiaRequests', () => {
    test('returns AccessBlockedByRestriction when there are no requests', () => {
      expect(getRestrictionUiTypeFromAridhiaRequests([])).toBe(
        RestrictionUiType.AccessBlockedByRestriction,
      )
    })

    test.each(PRECEDENCE)('maps a lone %s request', status => {
      expect(getRestrictionUiTypeFromAridhiaRequests([request(status)])).toBe(
        EXPECTED_BY_STATUS[status],
      )
    })

    test.each(
      PRECEDENCE.flatMap((winner, i) =>
        PRECEDENCE.slice(i + 1).map(loser => [winner, loser] as const),
      ),
    )(
      '%s takes precedence over %s regardless of which is more recent',
      (winner, loser) => {
        const older = request(winner, '2024-01-01T00:00:00Z')
        const newer = request(loser, '2025-01-01T00:00:00Z')
        expect(getRestrictionUiTypeFromAridhiaRequests([older, newer])).toBe(
          EXPECTED_BY_STATUS[winner],
        )
        expect(getRestrictionUiTypeFromAridhiaRequests([newer, older])).toBe(
          EXPECTED_BY_STATUS[winner],
        )
      },
    )

    test('ignores requests with an unrecognized or missing status', () => {
      expect(
        getRestrictionUiTypeFromAridhiaRequests([
          request(undefined),
          { status: 'unknown' } as unknown as RequestListItem,
        ]),
      ).toBe(RestrictionUiType.AccessBlockedByRestriction)
      expect(
        getRestrictionUiTypeFromAridhiaRequests([
          request(undefined),
          request('denied'),
        ]),
      ).toBe(EXPECTED_BY_STATUS.denied)
    })
  })

  describe('findRequestsForDataset', () => {
    const datasetCode = 'dataset-123'

    function requestFor(
      code: string,
      datasetCodes: string[] | undefined,
      updated_at?: string,
    ) {
      return {
        code,
        datasets: datasetCodes?.map(c => ({ code: c })),
        updated_at,
      } as RequestListItem
    }

    test('returns every request that includes the dataset, most recently updated first', () => {
      const requests = [
        requestFor('mid', [datasetCode], '2024-06-01T00:00:00Z'),
        requestFor('other-dataset', ['other'], '2025-01-01T00:00:00Z'),
        requestFor('newest', ['other', datasetCode], '2024-12-01T00:00:00Z'),
        requestFor('oldest', [datasetCode], '2024-01-01T00:00:00Z'),
      ]

      expect(
        findRequestsForDataset(requests, datasetCode).map(r => r.code),
      ).toEqual(['newest', 'mid', 'oldest'])
    })

    test('sorts requests without updated_at last', () => {
      const requests = [
        requestFor('undated', [datasetCode]),
        requestFor('dated', [datasetCode], '2024-01-01T00:00:00Z'),
      ]

      expect(
        findRequestsForDataset(requests, datasetCode).map(r => r.code),
      ).toEqual(['dated', 'undated'])
    })

    test('does not reorder the input array', () => {
      const requests = [
        requestFor('older', [datasetCode], '2024-01-01T00:00:00Z'),
        requestFor('newer', [datasetCode], '2025-01-01T00:00:00Z'),
      ]
      findRequestsForDataset(requests, datasetCode)
      expect(requests.map(r => r.code)).toEqual(['older', 'newer'])
    })

    test('returns an empty array when no request includes the dataset', () => {
      expect(
        findRequestsForDataset(
          [requestFor('a', ['other']), requestFor('b', undefined)],
          datasetCode,
        ),
      ).toEqual([])
      expect(findRequestsForDataset([], datasetCode)).toEqual([])
    })

    test('matches the dataset code case-sensitively', () => {
      expect(
        findRequestsForDataset(
          [requestFor('a', [datasetCode.toUpperCase()])],
          datasetCode,
        ),
      ).toEqual([])
    })
  })
})
