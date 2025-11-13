import { describe, it, expect } from 'vitest'
import { Configuration } from './generated/index.js'

describe('Aridhia Client', () => {
  it('should create a configuration', () => {
    const config = new Configuration({
      basePath: 'https://fair.c-path-dev.aridhia.io/api',
      accessToken: 'test-token',
    })

    expect(config).toBeDefined()
  })
})
