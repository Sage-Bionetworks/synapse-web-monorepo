import {
  getCandidateDoiId,
  useShowDoiCardLabel,
} from '@/components/GenericCard/PortalDOI/PortalDOIUtils'
import { server } from '@/mocks/msw/server'
import { createWrapperAndQueryClient } from '@/testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { DoiAssociation, DoiObjectType } from '@sage-bionetworks/synapse-client'
import { renderHook, waitFor } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { afterAll, afterEach, beforeAll, describe, it, vi } from 'vitest'

const repoOrigin = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

function mockBackend(
  doiAssociation: Partial<DoiAssociation> | null,
  canMintDoi: boolean,
) {
  server.use(
    http.get(`${repoOrigin}/repo/v1/doi/association`, () =>
      doiAssociation
        ? HttpResponse.json(doiAssociation)
        : HttpResponse.json({ reason: 'Not found' }, { status: 404 }),
    ),
    http.get(`${repoOrigin}/repo/v1/portal/:portalId/permissions`, () =>
      HttpResponse.json({ canMintDoi }),
    ),
  )
}

describe('PortalDOIUtils', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  describe('useShowDoiCardLabel', () => {
    const mockPortalId = 'mockedPortalId'
    const mockResourceId = 'mockedResourceId'
    const mockDoi: Partial<DoiAssociation> = {
      objectId: mockResourceId,
      portalId: mockPortalId,
      objectType: DoiObjectType.PORTAL_RESOURCE,
    }

    function renderUseShowDoiCardLabel() {
      const { wrapperFn, queryClient } = createWrapperAndQueryClient()
      const hook = renderHook(
        () =>
          useShowDoiCardLabel({
            portalId: mockPortalId,
            resourceId: mockResourceId,
          }),
        { wrapper: wrapperFn },
      )
      /** Resolves once all in-flight queries have settled */
      const waitForQueriesToSettle = async () => {
        await waitFor(() => expect(queryClient.isFetching()).toBe(0))
        await waitFor(() =>
          expect(queryClient.getQueryCache().getAll()).toHaveLength(2),
        )
      }
      return { hook, waitForQueriesToSettle }
    }

    it('returns true if DOI exists, no permission to mint', async () => {
      mockBackend(mockDoi, false)
      const { hook } = renderUseShowDoiCardLabel()

      await waitFor(() => expect(hook.result.current).toBe(true))
    })
    it('returns true if DOI exists, with permission to mint', async () => {
      mockBackend(mockDoi, true)
      const { hook } = renderUseShowDoiCardLabel()

      await waitFor(() => expect(hook.result.current).toBe(true))
    })
    it('returns true if DOI does not exist, with permission to mint', async () => {
      mockBackend(null, true)
      const { hook } = renderUseShowDoiCardLabel()

      await waitFor(() => expect(hook.result.current).toBe(true))
    })
    it('returns false if DOI does not exist, no permission to mint', async () => {
      mockBackend(null, false)
      const { hook, waitForQueriesToSettle } = renderUseShowDoiCardLabel()

      await waitForQueriesToSettle()
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
