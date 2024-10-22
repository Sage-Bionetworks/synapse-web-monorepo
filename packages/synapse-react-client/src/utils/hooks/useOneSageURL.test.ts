import {
  SYNAPSE_BACKEND_DEV_URL,
  SYNAPSE_BACKEND_PRODUCTION_URL,
  SYNAPSE_BACKEND_STAGING_URL,
} from '../SynapseConstants'
import { getOneSageUrl } from './useOneSageURL'

describe('OneSage URL tests', () => {
  describe('SynapseWebClient domains', () => {
    test('production', () => {
      const appId = 'synapse.org'
      expect(
        getOneSageUrl(
          'synapse.org',
          SYNAPSE_BACKEND_PRODUCTION_URL,
          appId,
        ).toString(),
      ).toEqual('https://accounts.synapse.org/?appId=synapse.org')
      expect(
        getOneSageUrl(
          'www.synapse.org',
          SYNAPSE_BACKEND_PRODUCTION_URL,
          appId,
        ).toString(),
      ).toEqual('https://accounts.synapse.org/?appId=synapse.org')
    })
    test('staging', () => {
      const appId = 'staging.synapse.org'
      const url = getOneSageUrl(
        'staging.synapse.org',
        SYNAPSE_BACKEND_STAGING_URL,
        appId,
      )
      expect(url.toString()).toEqual(
        'https://staging.accounts.synapse.org/?appId=staging.synapse.org',
      )
    })
    test.todo('dev') // IT-3849
    test('local', () => {
      const appId = 'localhost'
      expect(
        getOneSageUrl(
          '127.0.0.1',
          SYNAPSE_BACKEND_PRODUCTION_URL,
          appId,
        ).toString(),
      ).toEqual('http://127.0.0.1:3000/?appId=localhost')
      expect(
        getOneSageUrl(
          '127.0.0.1',
          SYNAPSE_BACKEND_STAGING_URL,
          appId,
        ).toString(),
      ).toEqual('http://127.0.0.1:3000/?appId=localhost')
      expect(
        getOneSageUrl('127.0.0.1', SYNAPSE_BACKEND_DEV_URL, appId).toString(),
      ).toEqual('http://127.0.0.1:3000/?appId=localhost')
      expect(
        getOneSageUrl(
          'localhost',
          SYNAPSE_BACKEND_PRODUCTION_URL,
          appId,
        ).toString(),
      ).toEqual('http://localhost:3000/?appId=localhost')
      expect(
        getOneSageUrl(
          'localhost',
          SYNAPSE_BACKEND_STAGING_URL,
          appId,
        ).toString(),
      ).toEqual('http://localhost:3000/?appId=localhost')
      expect(
        getOneSageUrl('localhost', SYNAPSE_BACKEND_DEV_URL, appId).toString(),
      ).toEqual('http://localhost:3000/?appId=localhost')
    })
  })

  describe('OneSage domains', () => {
    test('production', () => {
      const url = getOneSageUrl(
        'accounts.synapse.org',
        SYNAPSE_BACKEND_PRODUCTION_URL,
      )
      expect(url.toString()).toEqual('https://accounts.synapse.org/')
    })
    test('staging', () => {
      const url = getOneSageUrl(
        'staging.accounts.synapse.org',
        SYNAPSE_BACKEND_STAGING_URL,
      )
      expect(url.toString()).toEqual('https://staging.accounts.synapse.org/')
    })
    test.todo('dev') // no site exists (IT-3849)
    test('local', () => {
      const url = getOneSageUrl('localhost', SYNAPSE_BACKEND_PRODUCTION_URL)
      expect(url.toString()).toEqual('http://localhost:3000/')
    })
  })

  describe('synapse-oauth-signin domains', () => {
    test('production', () => {
      const url = getOneSageUrl(
        'signin.synapse.org',
        SYNAPSE_BACKEND_PRODUCTION_URL,
      )
      expect(url.toString()).toEqual('https://accounts.synapse.org/')
    })
    test('staging', () => {
      const url = getOneSageUrl(
        'staging-signin.synapse.org',
        SYNAPSE_BACKEND_STAGING_URL,
      )
      expect(url.toString()).toEqual('https://staging.accounts.synapse.org/')
    })
    test.todo('dev') // no site exists
    test.todo('local') // these typically run on the same port, so we need to establish a convention to run them on different ports
  })

  describe('portal domain', () => {
    const appId = 'myportal'

    test('production', () => {
      const url = getOneSageUrl(
        'myportal.synapse.org',
        SYNAPSE_BACKEND_PRODUCTION_URL,
        appId,
      )
      expect(url.toString()).toEqual(
        'https://accounts.synapse.org/?appId=myportal',
      )
    })
    test('staging', () => {
      // Staging portals typically use Synapse production as a backend
      const url = getOneSageUrl(
        'staging.myportal.synapse.org',
        SYNAPSE_BACKEND_PRODUCTION_URL,
        appId,
      )
      expect(url.toString()).toEqual(
        'https://accounts.synapse.org/?appId=myportal',
      )
    })
  })
})
