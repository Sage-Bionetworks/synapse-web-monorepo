import { renderHook } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useSmartLink } from './useSmartLink'
import * as ReactRouter from 'react-router'
import { Link as ReactRouterLink } from 'react-router'

vi.mock('react-router', async () => {
  const actual = await vi.importActual('react-router')
  return {
    ...actual,
    useInRouterContext: vi.fn(),
  }
})

describe('useSmartLink', () => {
  const useInRouterContextMock = vi.mocked(ReactRouter.useInRouterContext)

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns internal link props when in router context', () => {
    useInRouterContextMock.mockReturnValue(true)
    const { result } = renderHook(() => useSmartLink('/dashboard'))

    expect(result.current).toEqual({
      component: ReactRouterLink,
      to: '/dashboard',
    })
  })

  it('returns external link props for absolute URLs', () => {
    useInRouterContextMock.mockReturnValue(true)
    const { result } = renderHook(() =>
      useSmartLink('https://sagebionetworks.org'),
    )

    expect(result.current).toMatchObject({
      component: 'a',
      href: 'https://sagebionetworks.org',
      target: '_blank',
      rel: 'noopener noreferrer',
    })
  })
})
