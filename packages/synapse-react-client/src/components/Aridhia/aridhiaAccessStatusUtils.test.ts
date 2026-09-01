import { describe, test, expect } from 'vitest'
import { RestrictionUiType } from '../HasAccess/AccessIcon'
import {
  getRestrictionUiTypeFromAridhiaRequest,
  findRequestForDataset,
} from './aridhiaAccessStatusUtils'
import { RequestListItem } from '@sage-bionetworks/aridhia-client/generated/models'

describe('aridhiaAccessStatusUtils', () => {
  describe('getRestrictionUiTypeFromAridhiaRequest', () => {
    test('should return AccessBlockedByRestriction when request is undefined', () => {
      const result = getRestrictionUiTypeFromAridhiaRequest(undefined)
      expect(result).toBe(RestrictionUiType.AccessBlockedByRestriction)
    })

    test('should return Accessible when request status is approved', () => {
      const request: RequestListItem = {
        status: 'approved',
        code: 'REQ001',
      }
      const result = getRestrictionUiTypeFromAridhiaRequest(request)
      expect(result).toBe(RestrictionUiType.Accessible)
    })

    test('should return AccessBlockedByRestrictionWithPendingRDCADAPRequest when request status is pending', () => {
      const request: RequestListItem = {
        status: 'pending',
        code: 'REQ002',
      }
      const result = getRestrictionUiTypeFromAridhiaRequest(request)
      expect(result).toBe(
        RestrictionUiType.AccessBlockedByRestrictionWithPendingRDCADAPRequest,
      )
    })

    test('should return AccessBlockedByRestrictionWithRejectedRDCADAPRequest when request status is denied', () => {
      const request: RequestListItem = {
        status: 'denied',
        code: 'REQ003',
      }
      const result = getRestrictionUiTypeFromAridhiaRequest(request)
      expect(result).toBe(
        RestrictionUiType.AccessBlockedByRestrictionWithRejectedRDCADAPRequest,
      )
    })

    test('should return AccessBlockedByACL when request status is error', () => {
      const request: RequestListItem = {
        status: 'error',
        code: 'REQ004',
      }
      const result = getRestrictionUiTypeFromAridhiaRequest(request)
      expect(result).toBe(RestrictionUiType.AccessBlockedByACL)
    })

    test('should return AccessBlockedByRestriction for unknown status', () => {
      const request: RequestListItem = {
        // @ts-expect-error Testing invalid status
        status: 'unknown',
        code: 'REQ005',
      }
      const result = getRestrictionUiTypeFromAridhiaRequest(request)
      expect(result).toBe(RestrictionUiType.AccessBlockedByRestriction)
    })

    test('should return AccessBlockedByRestriction when status is undefined', () => {
      const request: RequestListItem = {
        code: 'REQ006',
      }
      const result = getRestrictionUiTypeFromAridhiaRequest(request)
      expect(result).toBe(RestrictionUiType.AccessBlockedByRestriction)
    })
  })

  describe('findRequestForDataset', () => {
    test('should return request when dataset code matches', () => {
      const requests: RequestListItem[] = [
        {
          code: 'REQ001',
          status: 'approved',
          datasets: { code: 'DATASET_A' },
        },
        {
          code: 'REQ002',
          status: 'pending',
          datasets: { code: 'DATASET_C' },
        },
      ]

      const result = findRequestForDataset(requests, 'DATASET_A')
      expect(result).toBeDefined()
      expect(result?.code).toBe('REQ001')
    })

    test('should return undefined when no dataset matches', () => {
      const requests: RequestListItem[] = [
        {
          code: 'REQ001',
          status: 'approved',
          datasets: { code: 'DATASET_A' },
        },
      ]

      const result = findRequestForDataset(requests, 'DATASET_Z')
      expect(result).toBeUndefined()
    })

    test('should return undefined when requests array is empty', () => {
      const result = findRequestForDataset([], 'DATASET_A')
      expect(result).toBeUndefined()
    })

    test('should return undefined when request has no datasets', () => {
      const requests: RequestListItem[] = [
        {
          code: 'REQ001',
          status: 'approved',
        },
      ]

      const result = findRequestForDataset(requests, 'DATASET_A')
      expect(result).toBeUndefined()
    })

    test('should return most recently updated request when multiple requests contain the dataset', () => {
      const requests: RequestListItem[] = [
        {
          code: 'REQ001',
          status: 'approved',
          datasets: { code: 'DATASET_A' },
          updated_at: '2024-01-01T10:00:00Z',
        },
        {
          code: 'REQ002',
          status: 'pending',
          datasets: { code: 'DATASET_A' },
          updated_at: '2024-01-02T10:00:00Z',
        },
      ]

      const result = findRequestForDataset(requests, 'DATASET_A')
      expect(result).toBeDefined()
      expect(result?.code).toBe('REQ002')
    })

    test('should return most recently updated request even when not in order', () => {
      const requests: RequestListItem[] = [
        {
          code: 'REQ001',
          status: 'approved',
          datasets: { code: 'DATASET_A' },
          updated_at: '2024-01-03T10:00:00Z', // Most recent
        },
        {
          code: 'REQ002',
          status: 'pending',
          datasets: { code: 'DATASET_A' },
          updated_at: '2024-01-01T10:00:00Z', // Oldest
        },
        {
          code: 'REQ003',
          status: 'denied',
          datasets: { code: 'DATASET_A' },
          updated_at: '2024-01-02T10:00:00Z', // Middle
        },
      ]

      const result = findRequestForDataset(requests, 'DATASET_A')
      expect(result).toBeDefined()
      expect(result?.code).toBe('REQ001')
    })

    test('should handle requests with undefined updated_at', () => {
      const requests: RequestListItem[] = [
        {
          code: 'REQ001',
          status: 'approved',
          datasets: { code: 'DATASET_A' },
          // No updated_at
        },
        {
          code: 'REQ002',
          status: 'pending',
          datasets: { code: 'DATASET_A' },
          updated_at: '2024-01-01T10:00:00Z',
        },
      ]

      const result = findRequestForDataset(requests, 'DATASET_A')
      expect(result).toBeDefined()
      // Should return the one with updated_at when the other doesn't have it
      expect(result?.code).toBe('REQ002')
    })

    test('should return any matching request when all have undefined updated_at', () => {
      const requests: RequestListItem[] = [
        {
          code: 'REQ001',
          status: 'approved',
          datasets: { code: 'DATASET_A' },
        },
        {
          code: 'REQ002',
          status: 'pending',
          datasets: { code: 'DATASET_A' },
        },
      ]

      const result = findRequestForDataset(requests, 'DATASET_A')
      expect(result).toBeDefined()
      // Should return one of them (the reduce logic will handle this)
      expect(['REQ001', 'REQ002']).toContain(result?.code)
    })

    test('should match dataset code case-sensitively', () => {
      const requests: RequestListItem[] = [
        {
          code: 'REQ001',
          status: 'approved',
          datasets: { code: 'dataset_a' },
        },
      ]

      const result = findRequestForDataset(requests, 'DATASET_A')
      expect(result).toBeUndefined()
    })
  })
})
