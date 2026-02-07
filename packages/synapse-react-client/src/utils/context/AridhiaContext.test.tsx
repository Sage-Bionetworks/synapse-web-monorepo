import { renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  AridhiaContextProvider,
  useAridhiaContext,
  useAridhiaContextOptional,
} from './AridhiaContext'
import { PropsWithChildren } from 'react'

describe('AridhiaContext', () => {
  it('should provide API configuration', () => {
    const authenticationRequest = {
      subject_token_type: 'urn:ietf:params:oauth:token-type:access_token',
      subject_token_issuer: 'synapse',
    }

    const wrapper = ({ children }: PropsWithChildren) => (
      <AridhiaContextProvider authenticationRequest={authenticationRequest}>
        {children}
      </AridhiaContextProvider>
    )

    const { result } = renderHook(() => useAridhiaContext(), { wrapper })

    expect(result.current.apiBasePath).toBe(
      'https://gateway.westus2.c-path-dev.aridhia.io',
    )
    expect(result.current.authenticationRequest).toEqual(authenticationRequest)
  })

  it('should allow custom apiBasePath', () => {
    const customBasePath = 'https://custom.aridhia.io'
    const authenticationRequest = {
      subject_token_type: 'urn:ietf:params:oauth:token-type:access_token',
      subject_token_issuer: 'synapse',
    }

    const wrapper = ({ children }: PropsWithChildren) => (
      <AridhiaContextProvider
        apiBasePath={customBasePath}
        authenticationRequest={authenticationRequest}
      >
        {children}
      </AridhiaContextProvider>
    )

    const { result } = renderHook(() => useAridhiaContext(), { wrapper })

    expect(result.current.apiBasePath).toBe(customBasePath)
    expect(result.current.authenticationRequest).toEqual(authenticationRequest)
  })

  it('should throw error when used outside of provider', () => {
    expect(() => {
      renderHook(() => useAridhiaContext())
    }).toThrow(
      'useAridhiaContext must be used within an AridhiaContextProvider',
    )
  })

  it('should return undefined when using optional hook outside provider', () => {
    const { result } = renderHook(() => useAridhiaContextOptional())
    expect(result.current).toBeUndefined()
  })
})
