import { describe, expect, it } from 'vitest'
import { Configuration } from './generated/runtime.js'
import { AuthenticationApi } from './generated/apis/AuthenticationApi.js'

describe('AridhiaClient', () => {
  it('should create an AuthenticationApi instance with configuration', () => {
    const config = new Configuration({
      basePath: 'https://gateway.westus2.c-path-dev.aridhia.io',
      accessToken: 'test-token',
    })

    const authApi = new AuthenticationApi(config)

    expect(authApi).toBeDefined()
    expect(authApi.configuration).toBe(config)
  })

  it('should create a Configuration with correct basePath', () => {
    const basePath = 'https://gateway.westus2.c-path-dev.aridhia.io'
    const config = new Configuration({ basePath })

    expect(config.basePath).toBe(basePath)
  })

  it('should create a Configuration with accessToken', async () => {
    const accessToken = 'test-token-123'
    const config = new Configuration({ accessToken })

    // accessToken getter returns a function that returns the token
    const tokenFn = config.accessToken
    expect(tokenFn).toBeDefined()
    if (tokenFn) {
      const token = await tokenFn()
      expect(token).toBe(accessToken)
    }
  })
})
