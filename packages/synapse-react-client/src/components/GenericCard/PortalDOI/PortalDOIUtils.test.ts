import {
  getCandidateDoiId,
  useShowDoiCardLabel,
} from '@/components/GenericCard/PortalDOI/PortalDOIUtils'
import { useGetDOIAssociation } from '@/synapse-queries/doi/useDOI'
import { useGetUserPortalPermissions } from '@/synapse-queries/portal/usePortal'
import {
  getUseQueryIdleMock,
  getUseQuerySuccessMock,
} from '@/testutils/ReactQueryMockUtils'
import { renderHook } from '@testing-library/react'
import { beforeEach, describe, it, vi } from 'vitest'

vi.mock('@/synapse-queries/doi/useDOI')
vi.mock('@/synapse-queries/portal/usePortal')

const mockUseGetDOIAssociation = vi.mocked(useGetDOIAssociation)
const mockUseGetPortalPermissions = vi.mocked(useGetUserPortalPermissions)

describe('PortalDOIUtils', () => {
  describe('useShowDoiCardLabel', () => {
    const mockPortalId = 'mockedPortalId'
    const mockResourceId = 'mockedResourceId'
    beforeEach(() => {
      mockUseGetDOIAssociation.mockReturnValue(getUseQueryIdleMock())
      mockUseGetPortalPermissions.mockReturnValue(getUseQueryIdleMock())
    })
    it('returns true if DOI exists, no permission to mint', () => {
      mockUseGetDOIAssociation.mockReturnValue(
        getUseQuerySuccessMock({
          id: mockResourceId,
          portalId: mockPortalId,
          type: 'PORTAL_RESOURCE',
        }),
      )
      mockUseGetPortalPermissions.mockReturnValue(getUseQuerySuccessMock(false))
      const hook = renderHook(() =>
        useShowDoiCardLabel({
          portalId: mockPortalId,
          resourceId: mockResourceId,
        }),
      )

      expect(hook.result.current).toBe(true)
    })
    it('returns true if DOI exists, with permission to mint', () => {
      mockUseGetDOIAssociation.mockReturnValue(
        getUseQuerySuccessMock({
          id: mockResourceId,
          portalId: mockPortalId,
          type: 'PORTAL_RESOURCE',
        }),
      )
      mockUseGetPortalPermissions.mockReturnValue(getUseQuerySuccessMock(true))
      const hook = renderHook(() =>
        useShowDoiCardLabel({
          portalId: mockPortalId,
          resourceId: mockResourceId,
        }),
      )

      expect(hook.result.current).toBe(true)
    })
    it('returns true if DOI does not exist, with permission to mint', () => {
      mockUseGetDOIAssociation.mockReturnValue(getUseQuerySuccessMock(null))
      mockUseGetPortalPermissions.mockReturnValue(getUseQuerySuccessMock(true))
      const hook = renderHook(() =>
        useShowDoiCardLabel({
          portalId: mockPortalId,
          resourceId: mockResourceId,
        }),
      )

      expect(hook.result.current).toBe(true)
    })
    it('returns false if DOI does not exist, no permission to mint', () => {
      mockUseGetDOIAssociation.mockReturnValue(getUseQuerySuccessMock(null))
      mockUseGetPortalPermissions.mockReturnValue(getUseQuerySuccessMock(false))
      const hook = renderHook(() =>
        useShowDoiCardLabel({
          portalId: mockPortalId,
          resourceId: mockResourceId,
        }),
      )

      expect(hook.result.current).toBe(false)
    })
  })

  describe('getCandidateDoiId', () => {
    it('calls the serialize function with the correct data', () => {
      const mockPortalId = 'mockedPortalId'
      const mockIdReturnedFromSerialize = 'mockId'
      const data = {
        fooCol: 'foo',
        barCol: 'bar',
      }
      const mockSerialize = vi.fn().mockReturnValue(mockIdReturnedFromSerialize)

      const portalDoiConfiguration = {
        portalId: mockPortalId,
        resourceType: 'mockedResourceType',
        resourceIdKeyColumns: ['fooCol', 'barCol'],
        serializeDoiString: mockSerialize,
      }

      const result = getCandidateDoiId({ portalDoiConfiguration, data })

      expect(result).toBe(mockIdReturnedFromSerialize)
      expect(mockSerialize).toHaveBeenCalledWith('mockedResourceType', {
        fooCol: 'foo',
        barCol: 'bar',
      })
    })

    it('returns undefined if portalDoiConfiguration is not provided', () => {
      const data = {
        fooCol: 'foo',
        barCol: 'bar',
      }

      const result = getCandidateDoiId({
        portalDoiConfiguration: undefined,
        data,
      })

      expect(result).toBe(undefined)
    })
  })
})
