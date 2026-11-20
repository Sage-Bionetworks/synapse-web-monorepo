import { describe, test, expect } from 'vitest'
import { RestrictionUiType } from '../HasAccess/AccessIcon'
import {
  getRestrictionUiTypeFromAridhiaRequests,
  findRequestsForDataset,
  getRequestDataAccess,
  needsWorkspace,
  RequestDataAccess,
  RequestStatus,
  RequestWorkspaceQueryState,
} from './aridhiaAccessStatusUtils'
import { RequestListItem } from '@sage-bionetworks/aridhia-client/generated/models'
import { AridhiaError } from '@/aridhia-queries'

const EXPECTED_BY_STATUS: Record<RequestStatus, RestrictionUiType> = {
  approved: RestrictionUiType.AccessibleOnRDCADAP,
  pending:
    RestrictionUiType.AccessBlockedByRestrictionWithPendingRDCADAPRequest,
  denied:
    RestrictionUiType.AccessBlockedByRestrictionWithRejectedRDCADAPRequest,
  error: RestrictionUiType.AccessBlockedByACL,
}

// Most favorable first: see `getRestrictionUiTypeFromAridhiaRequests`.
const PRECEDENCE: RequestStatus[] = ['approved', 'pending', 'denied', 'error']

function request(status: RequestStatus | undefined, updated_at?: string) {
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

    test('sorts requests with an unparseable updated_at after dated ones', () => {
      const requests = [
        requestFor('garbled', [datasetCode], 'n/a'),
        requestFor('dated', [datasetCode], '2024-01-01T00:00:00Z'),
      ]

      expect(
        findRequestsForDataset(requests, datasetCode).map(r => r.code),
      ).toEqual(['dated', 'garbled'])
    })

    test('orders by instant, not by string, when timestamps carry different offsets', () => {
      const requests = [
        // 2024-06-01T10:00Z: sorts first as a string, but is the earlier instant.
        requestFor('earlier', [datasetCode], '2024-06-01T12:00:00+02:00'),
        requestFor('later', [datasetCode], '2024-06-01T11:00:00Z'),
      ]

      expect(
        findRequestsForDataset(requests, datasetCode).map(r => r.code),
      ).toEqual(['later', 'earlier'])
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

  describe('getRequestDataAccess', () => {
    const INBOX_URL = 'https://team.test/#/workspaces/team/folders/inbox'
    const WORKSPACE_QUERIES: Record<
      string,
      {
        query: RequestWorkspaceQueryState
        /** The result once the request is approved and transferred. */
        expected: RequestDataAccess
      }
    > = {
      loading: {
        query: { isPending: true, error: null },
        expected: { kind: 'checkingWorkspace' },
      },
      '404': {
        query: {
          isPending: false,
          error: new AridhiaError('unknown', 'Request not found', {
            httpStatus: 404,
          }),
        },
        expected: { kind: 'workspacePreparing' },
      },
      'other error': {
        query: {
          isPending: false,
          error: new AridhiaError('unknown', 'Internal server error', {
            httpStatus: 500,
          }),
        },
        expected: { kind: 'workspaceError' },
      },
      'null inbox': {
        query: {
          isPending: false,
          error: null,
          data: { workspace_name: 'team', workspace_status: 'requested' },
        },
        expected: { kind: 'workspacePreparing' },
      },
      'inbox and name': {
        query: {
          isPending: false,
          error: null,
          data: { workspace_name: 'team', workspace_inbox_url: INBOX_URL },
        },
        expected: {
          kind: 'workspaceAvailable',
          inboxUrl: INBOX_URL,
          workspaceName: 'team',
        },
      },
      'inbox without name': {
        query: {
          isPending: false,
          error: null,
          data: { workspace_inbox_url: INBOX_URL },
        },
        expected: { kind: 'workspaceAvailable', inboxUrl: INBOX_URL },
      },
      'workspace_url set but inbox null': {
        query: {
          isPending: false,
          error: null,
          data: {
            workspace_name: 'team',
            workspace_url: 'https://team.test/#/workspaces/team',
          },
        },
        expected: { kind: 'workspacePreparing' },
      },
      'inbox cached, refetch failed': {
        query: {
          isPending: false,
          error: new AridhiaError('unknown', 'Internal server error', {
            httpStatus: 500,
          }),
          data: { workspace_name: 'team', workspace_inbox_url: INBOX_URL },
        },
        expected: {
          kind: 'workspaceAvailable',
          inboxUrl: INBOX_URL,
          workspaceName: 'team',
        },
      },
    }

    /** Only an approved, transferred request's result depends on its workspace query. */
    function expectedAccess(
      status: RequestStatus,
      transferred: boolean,
      whenTransferred: RequestDataAccess,
    ): RequestDataAccess {
      if (status !== 'approved') {
        return { kind: 'none' }
      }
      return transferred ? whenTransferred : { kind: 'transferPending' }
    }

    const cases = PRECEDENCE.flatMap(status =>
      [true, false].flatMap(transferred =>
        Object.entries(WORKSPACE_QUERIES).map(
          ([workspace, { query, expected }]) => ({
            status,
            transferred,
            workspace,
            query,
            expected: expectedAccess(status, transferred, expected),
          }),
        ),
      ),
    )

    test.each(cases)(
      '$status, transferred: $transferred, workspace: $workspace',
      ({ status, transferred, query, expected }) => {
        const item: RequestListItem = {
          code: 'request-1',
          status,
          transfer: transferred
            ? { transferred_at: '2024-01-01T00:00:00Z' }
            : undefined,
        }
        expect(needsWorkspace(item)).toBe(status === 'approved' && transferred)
        expect(getRequestDataAccess(item, query)).toEqual(expected)
      },
    )

    test('reports a workspace error for a transferred request without a code, which has no workspace to fetch', () => {
      const item: RequestListItem = {
        status: 'approved',
        transfer: { transferred_at: '2024-01-01T00:00:00Z' },
      }
      expect(needsWorkspace(item)).toBe(false)
      expect(
        getRequestDataAccess(item, { isPending: true, error: null }),
      ).toEqual({ kind: 'workspaceError' })
    })
  })
})
