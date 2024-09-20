import type { FunctionReturningPaginatedResults } from './SynapseClient'
import * as SynapseClient from './SynapseClient'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import { NETWORK_UNAVAILABLE_MESSAGE } from '@sage-bionetworks/synapse-client/util/Constants'
import { ACCESS_TOKEN_COOKIE_KEY } from '../utils/SynapseConstants'
import { PaginatedResults } from '@sage-bionetworks/synapse-types'
import UniversalCookies from 'universal-cookie'
import * as SynapseClientUtils from './SynapseClientUtils'
import * as HttpClient from './HttpClient'

const isOutsideSynapseOrgSpy = jest.spyOn(
  SynapseClientUtils,
  'isOutsideSynapseOrg',
)

const doGetSpy = jest.spyOn(HttpClient, 'doGet')

describe('SynapseClient tests', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })
  describe('getAccessTokenFromCookie', () => {
    it('No cookie outside of *.synapse.org', async () => {
      isOutsideSynapseOrgSpy.mockReturnValue(true)
      new UniversalCookies().remove(ACCESS_TOKEN_COOKIE_KEY, { path: '/' })
      window.location.assign('http://localhost:3000/')
      expect(await SynapseClient.getAccessTokenFromCookie()).toBeUndefined()
    })
    it('Has cookie outside of *.synapse.org', async () => {
      isOutsideSynapseOrgSpy.mockReturnValue(true)
      const token = 'fake-token'
      new UniversalCookies().set(ACCESS_TOKEN_COOKIE_KEY, token, {
        path: '/',
      })
      window.location.assign('http://localhost:3000/')
      expect(await SynapseClient.getAccessTokenFromCookie()).toBe(token)
    })
    it('Calls portal servlet to get token', async () => {
      isOutsideSynapseOrgSpy.mockReturnValue(false)
      const token = 'fake-token'
      window.location.assign('http://somesubdomain.synapse.org/')
      doGetSpy.mockResolvedValue(token)
      expect(await SynapseClient.getAccessTokenFromCookie()).toBe(token)

      expect(doGetSpy).toHaveBeenCalled()
    })
    it('Calls portal servlet and is unauthenticated', async () => {
      isOutsideSynapseOrgSpy.mockReturnValue(false)
      window.location.assign('http://somesubdomain.synapse.org/')
      // Calling the sessioncookie service without a cookie set will result in a 401
      doGetSpy.mockRejectedValue(
        new SynapseClientError(
          401,
          'token unavailable',
          expect.getState().currentTestName!,
        ),
      )
      await expect(() =>
        SynapseClient.getAccessTokenFromCookie(),
      ).rejects.toThrow()

      expect(doGetSpy).toHaveBeenCalled()
    })
  })

  describe('fetch tests', () => {
    it('fetch error results in a nice network unavailable message', async () => {
      doGetSpy.mockRestore()
      const expected = new SynapseClientError(
        0,
        NETWORK_UNAVAILABLE_MESSAGE,
        expect.getState().currentTestName!,
      )
      jest.spyOn(global, 'fetch').mockRejectedValue(new Error())
      await expect(() => SynapseClient.getVersion()).rejects.toEqual(expected)
    })
  })
  describe('getAllOfPaginatedService', () => {
    it('works with < 50 results', async () => {
      const results = ['a']
      const mockPaginatedObject: PaginatedResults<string> = {
        results,
      }
      const mockFn: FunctionReturningPaginatedResults<string> = jest
        .fn()
        .mockResolvedValueOnce(mockPaginatedObject)
      const data = await SynapseClient.getAllOfPaginatedService(mockFn)
      expect(data).toEqual(results)
      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenNthCalledWith(1, 50, 0)
    })

    it('works with exacty 50 results', async () => {
      const totalResults = Array(50).fill('a')
      const mockFirstReturn: PaginatedResults<string> = {
        results: totalResults,
      }
      const mockSecondReturn: PaginatedResults<string> = {
        results: [],
      }
      const mockFn: FunctionReturningPaginatedResults<string> = jest
        .fn()
        .mockResolvedValueOnce(mockFirstReturn)
        .mockResolvedValueOnce(mockSecondReturn)
      const data = await SynapseClient.getAllOfPaginatedService(mockFn)
      expect(data).toEqual(totalResults)
      expect(mockFn).toHaveBeenCalledTimes(2)
      expect(mockFn).toHaveBeenNthCalledWith(1, 50, 0)
      expect(mockFn).toHaveBeenNthCalledWith(2, 50, 50)
    })

    it('works with > 50 results', async () => {
      const totalResults = Array(75).fill('a')
      const firstResult = totalResults.slice(0, 50)
      const secondResult = totalResults.slice(50)
      const mockFirstReturn: PaginatedResults<string> = {
        results: firstResult,
      }
      const mockSecondReturn: PaginatedResults<string> = {
        results: secondResult,
      }
      const mockFn: FunctionReturningPaginatedResults<string> = jest
        .fn()
        .mockResolvedValueOnce(mockFirstReturn)
        .mockResolvedValueOnce(mockSecondReturn)
      const data = await SynapseClient.getAllOfPaginatedService(mockFn)
      expect(data).toEqual(totalResults)
      expect(mockFn).toHaveBeenCalledTimes(2)
      expect(mockFn).toHaveBeenNthCalledWith(1, 50, 0)
      expect(mockFn).toHaveBeenNthCalledWith(2, 50, 50)
    })
  })

  describe('getAllOfNextPageTokenPaginatedService', () => {
    it('works with one page', async () => {
      const results = ['a']
      const response = {
        results: ['a'],
      }

      const mockFn = jest.fn().mockResolvedValueOnce(response)
      const data = await SynapseClient.getAllOfNextPageTokenPaginatedService(
        mockFn,
      )
      expect(data).toEqual(results)
      expect(mockFn).toHaveBeenCalledTimes(1)
      expect(mockFn).toHaveBeenNthCalledWith(1, undefined)
    })

    it('works with two pages', async () => {
      const resultsPage1 = ['a', 'b']
      const resultsPage2 = ['c']
      const responsePage1 = {
        results: resultsPage1,
        nextPageToken: 'nextPageToken',
      }
      const responsePage2 = {
        results: resultsPage2,
      }

      const mockFn = jest
        .fn()
        .mockResolvedValueOnce(responsePage1)
        .mockResolvedValueOnce(responsePage2)
      const data = await SynapseClient.getAllOfNextPageTokenPaginatedService(
        mockFn,
      )
      expect(data).toEqual([...resultsPage1, ...resultsPage2]) // ['a', 'b', 'c']
      expect(mockFn).toHaveBeenCalledTimes(2)
      expect(mockFn).toHaveBeenNthCalledWith(1, undefined)
      expect(mockFn).toHaveBeenNthCalledWith(2, 'nextPageToken')
    })
  })
})
