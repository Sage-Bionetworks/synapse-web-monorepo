import { describe, it, expect } from 'vitest'
import { getChangeTooltipText } from './getChangeTooltipText'
import type { ReplicaUserInfo } from '../hooks/useGridReplicaUsers'

function makeInfo(
  category: ReplicaUserInfo['category'],
  profile?: Partial<{ firstName: string; lastName: string; userName: string }>,
): ReplicaUserInfo {
  return {
    replicaInfo: { replicaId: 1, replicaType: 'USER', createdBy: 'user-1' },
    category,
    profile: profile ? ({ ...profile } as any) : undefined,
  } as ReplicaUserInfo
}

describe('getChangeTooltipText', () => {
  it('returns "You changed this" for self', () => {
    expect(getChangeTooltipText(makeInfo('self'))).toBe('You changed this')
  })

  it('returns "Changed by your agent" for own-agent', () => {
    expect(getChangeTooltipText(makeInfo('own-agent'))).toBe(
      'Changed by your agent',
    )
  })

  it('returns "Changed by an agent" for other-agent', () => {
    expect(getChangeTooltipText(makeInfo('other-agent'))).toBe(
      'Changed by an agent',
    )
  })

  it('returns "Changed by another user" for other-user when profile is absent', () => {
    expect(getChangeTooltipText(makeInfo('other-user'))).toBe(
      'Changed by another user',
    )
  })

  it('uses first + last name for other-user when profile has both', () => {
    expect(
      getChangeTooltipText(
        makeInfo('other-user', {
          firstName: 'Jane',
          lastName: 'Doe',
          userName: 'jdoe',
        }),
      ),
    ).toBe('Changed by Jane Doe')
  })

  it('falls back to userName when names are absent', () => {
    expect(
      getChangeTooltipText(makeInfo('other-user', { userName: 'jdoe' })),
    ).toBe('Changed by jdoe')
  })

  it('uses only firstName when lastName is absent', () => {
    expect(
      getChangeTooltipText(
        makeInfo('other-user', { firstName: 'Jane', userName: 'jdoe' }),
      ),
    ).toBe('Changed by Jane')
  })
})
