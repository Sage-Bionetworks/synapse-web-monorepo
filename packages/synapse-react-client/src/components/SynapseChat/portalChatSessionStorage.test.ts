import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import {
  consumePortalChatReopenIntent,
  persistPortalChatReopenIntent,
} from './portalChatSessionStorage'

describe('portalChatSessionStorage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('round-trips a persisted intent', () => {
    persistPortalChatReopenIntent({
      variant: 'curie',
      initialMessage: 'hello',
    })

    expect(consumePortalChatReopenIntent()).toEqual({
      variant: 'curie',
      initialMessage: 'hello',
    })
  })

  it('clears the intent once consumed', () => {
    persistPortalChatReopenIntent({ variant: 'default' })

    expect(consumePortalChatReopenIntent()).toEqual({ variant: 'default' })
    expect(consumePortalChatReopenIntent()).toBeUndefined()
  })

  it('returns undefined when no intent is stored', () => {
    expect(consumePortalChatReopenIntent()).toBeUndefined()
  })

  it('discards an intent that is older than the max age', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-09-14T00:00:00Z'))
    persistPortalChatReopenIntent({ variant: 'curie' })

    // Advance beyond the 1 hour TTL.
    vi.setSystemTime(new Date('2026-09-14T01:00:01Z'))

    expect(consumePortalChatReopenIntent()).toBeUndefined()
  })
})
