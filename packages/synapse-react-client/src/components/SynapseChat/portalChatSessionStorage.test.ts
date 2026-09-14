import { beforeEach, describe, expect, it } from 'vitest'
import {
  consumePortalChatReopenIntent,
  persistPortalChatReopenIntent,
} from './portalChatSessionStorage'

describe('portalChatSessionStorage', () => {
  beforeEach(() => {
    sessionStorage.clear()
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
})
