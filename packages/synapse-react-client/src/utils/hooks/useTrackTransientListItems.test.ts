import { act, renderHook } from '@testing-library/react'
import useTrackTransientListItems from './useTrackTransientListItems'
import { ActionRequiredCount } from '@sage-bionetworks/synapse-types'

describe('useTrackTransientListItems', () => {
  it('Tracks items after they are no longer included in the passed list', () => {
    const intitialItems: ActionRequiredCount[] = [
      {
        action: {
          concreteType:
            'org.sagebionetworks.repo.model.download.MeetAccessRequirement',
          accessRequirementId: 123,
        },
        count: 4,
      },
      {
        action: {
          concreteType: 'org.sagebionetworks.repo.model.download.EnableTwoFa',
          accessRequirementId: 456,
        },
        count: 2,
      },
    ]
    const hook = renderHook(
      (initialProps: ActionRequiredCount[] = intitialItems) =>
        useTrackTransientListItems(initialProps),
    )

    expect(hook.result.current).toEqual(expect.arrayContaining(intitialItems))

    const itemsAfterOneIsRemoved = [intitialItems[0]]
    act(() => {
      hook.rerender(itemsAfterOneIsRemoved)
    })

    expect(hook.result.current).toEqual(expect.arrayContaining(intitialItems))

    // Now add a new action and verify that all 3 remain present
    const newAction: ActionRequiredCount = {
      action: {
        concreteType: 'org.sagebionetworks.repo.model.download.RequestDownload',
        benefactorId: 123,
      },
      count: 1,
    }
    const itemsAfterOneIsAdded: ActionRequiredCount[] = [
      intitialItems[0],
      newAction,
    ]
    act(() => {
      hook.rerender(itemsAfterOneIsAdded)
    })

    expect(hook.result.current).toEqual(
      expect.arrayContaining([...intitialItems, newAction]),
    )
  })
})
