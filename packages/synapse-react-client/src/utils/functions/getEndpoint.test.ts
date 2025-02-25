import {
  getEndpoint,
  BackendDestinationEnum,
  PRODUCTION_ENDPOINT_CONFIG,
  getSynapsePortalEndpoint,
} from './getEndpoint'

describe('getting endpoints works', () => {
  it('returns PORTAL endpoint', () => {
    expect(getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT)).toEqual(
      PRODUCTION_ENDPOINT_CONFIG.PORTAL,
    )
  })
  it('returns REPO endpoint', () => {
    expect(getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)).toEqual(
      PRODUCTION_ENDPOINT_CONFIG.REPO,
    )
  })

  it('returns synapse.org portal endpoint', () => {
    expect(getSynapsePortalEndpoint('nf.synapse.org')).toEqual(
      'https://www.synapse.org/',
    )
    expect(getSynapsePortalEndpoint('localhost')).toEqual(
      'https://www.synapse.org/',
    )
  })
  it('returns relative portal endpoint', () => {
    expect(getSynapsePortalEndpoint('www.synapse.org')).toEqual('/')
    expect(getSynapsePortalEndpoint('staging.synapse.org')).toEqual('/')
  })
  it('uses custom object set in the window', () => {
    const OVERRIDE_ENDPOINT_CONFIG = {
      REPO: 'REPO_CUSTOM_ENDPOINT',
      PORTAL: 'PORTAL_CUSTOM_ENDPOINT',
    }
    // @ts-expect-error
    window.SRC_OVERRIDE_ENDPOINT_CONFIG = OVERRIDE_ENDPOINT_CONFIG
    expect(getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)).toEqual(
      OVERRIDE_ENDPOINT_CONFIG.REPO,
    )
    expect(getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT)).toEqual(
      OVERRIDE_ENDPOINT_CONFIG.PORTAL,
    )
  })
  it('throws an error when the custom object does not have the right keys', () => {
    // @ts-expect-error
    window.SRC_OVERRIDE_ENDPOINT_CONFIG = {
      PORTALZ: 'PORTAL_ENDPOINT',
    }
    // https://jestjs.io/docs/en/expect.html#tothrowerror
    expect(() => getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)).toThrow()
  })
})
