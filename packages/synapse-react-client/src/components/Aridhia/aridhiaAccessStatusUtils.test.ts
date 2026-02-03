import { describe, test, expect } from 'vitest'
import { RestrictionUiType } from '../HasAccess/AccessIcon'
import {
  getRestrictionUiTypeFromAridhiaRequest,
  findRequestForDataset,
} from './aridhiaAccessStatusUtils'
import { Request } from '@sage-bionetworks/aridhia-client/generated/models'

describe('aridhiaAccessStatusUtils', () => {
  describe('getRestrictionUiTypeFromAridhiaRequest', () => {
    test('should return AccessBlockedByRestriction when request is undefined', () => {
      const result = getRestrictionUiTypeFromAridhiaRequest(undefined)
      expect(result).toBe(RestrictionUiType.AccessBlockedByRestriction)
    })

    test('should return Accessible when request status is approved', () => {
      const request: Request = {
        status: 'approved',
        id: 1,
        code: 'REQ001',
      }
      const result = getRestrictionUiTypeFromAridhiaRequest(request)
      expect(result).toBe(RestrictionUiType.Accessible)
    })

    test('should return AccessBlockedByRestrictionWithPendingRDCADAPRequest when request status is pending', () => {
      const request: Request = {
        status: 'pending',
        id: 2,
        code: 'REQ002',
      }
      const result = getRestrictionUiTypeFromAridhiaRequest(request)
      expect(result).toBe(
        RestrictionUiType.AccessBlockedByRestrictionWithPendingRDCADAPRequest,
      )
    })

    test('should return AccessBlockedByACL when request status is denied', () => {
      const request: Request = {
        status: 'denied',
        id: 3,
        code: 'REQ003',
      }
      const result = getRestrictionUiTypeFromAridhiaRequest(request)
      expect(result).toBe(RestrictionUiType.AccessBlockedByACL)
    })

    test('should return AccessBlockedByACL when request status is error', () => {
      const request: Request = {
        status: 'error',
        id: 4,
        code: 'REQ004',
      }
      const result = getRestrictionUiTypeFromAridhiaRequest(request)
      expect(result).toBe(RestrictionUiType.AccessBlockedByACL)
    })

    test('should return AccessBlockedByRestriction for unknown status', () => {
      const request: Request = {
        // @ts-expect-error Testing invalid status
        status: 'unknown',
        id: 5,
        code: 'REQ005',
      }
      const result = getRestrictionUiTypeFromAridhiaRequest(request)
      expect(result).toBe(RestrictionUiType.AccessBlockedByRestriction)
    })

    test('should return AccessBlockedByRestriction when status is undefined', () => {
      const request: Request = {
        id: 6,
        code: 'REQ006',
      }
      const result = getRestrictionUiTypeFromAridhiaRequest(request)
      expect(result).toBe(RestrictionUiType.AccessBlockedByRestriction)
    })
  })

  describe('findRequestForDataset', () => {
    test('should return request when dataset code matches', () => {
      const requests: Request[] = [
        {
          id: 1,
          code: 'REQ001',
          status: 'approved',
          datasets: [
            { code: 'DATASET_A', name: 'Dataset A' },
            { code: 'DATASET_B', name: 'Dataset B' },
          ],
        },
        {
          id: 2,
          code: 'REQ002',
          status: 'pending',
          datasets: [{ code: 'DATASET_C', name: 'Dataset C' }],
        },
      ]

      const result = findRequestForDataset(requests, 'DATASET_B')
      expect(result).toBeDefined()
      expect(result?.id).toBe(1)
      expect(result?.code).toBe('REQ001')
    })

    test('should return undefined when no dataset matches', () => {
      const requests: Request[] = [
        {
          id: 1,
          code: 'REQ001',
          status: 'approved',
          datasets: [{ code: 'DATASET_A', name: 'Dataset A' }],
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
      const requests: Request[] = [
        {
          id: 1,
          code: 'REQ001',
          status: 'approved',
        },
      ]

      const result = findRequestForDataset(requests, 'DATASET_A')
      expect(result).toBeUndefined()
    })

    test('should return undefined when request has empty datasets array', () => {
      const requests: Request[] = [
        {
          id: 1,
          code: 'REQ001',
          status: 'approved',
          datasets: [],
        },
      ]

      const result = findRequestForDataset(requests, 'DATASET_A')
      expect(result).toBeUndefined()
    })

    test('should return first matching request when multiple requests contain the dataset', () => {
      const requests: Request[] = [
        {
          id: 1,
          code: 'REQ001',
          status: 'approved',
          datasets: [{ code: 'DATASET_A', name: 'Dataset A' }],
        },
        {
          id: 2,
          code: 'REQ002',
          status: 'pending',
          datasets: [{ code: 'DATASET_A', name: 'Dataset A' }],
        },
      ]

      const result = findRequestForDataset(requests, 'DATASET_A')
      expect(result).toBeDefined()
      expect(result?.id).toBe(1)
      expect(result?.code).toBe('REQ001')
    })

    test('should match dataset code case-sensitively', () => {
      const requests: Request[] = [
        {
          id: 1,
          code: 'REQ001',
          status: 'approved',
          datasets: [{ code: 'dataset_a', name: 'Dataset A' }],
        },
      ]

      const result = findRequestForDataset(requests, 'DATASET_A')
      expect(result).toBeUndefined()
    })
  })
})
