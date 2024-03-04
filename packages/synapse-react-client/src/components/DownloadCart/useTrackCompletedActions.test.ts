import { act, renderHook } from '@testing-library/react'
import useTrackCompletedActions from './useTrackCompletedActions'
import { ActionRequiredCount } from '@sage-bionetworks/synapse-types'

describe('useTrackCompletedActions', () => {
  it('Tracks actions and marks them as completed when they are no longer listed as required', () => {
    const initialActionsRequired: ActionRequiredCount[] = [
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
      (initialProps: ActionRequiredCount[] = initialActionsRequired) =>
        useTrackCompletedActions(initialProps),
    )

    expect(hook.result.current).toEqual(
      expect.arrayContaining(initialActionsRequired),
    )

    const actionsReturnedByServerAfterOneActionComplete = [
      initialActionsRequired[0],
    ]
    act(() => {
      hook.rerender(actionsReturnedByServerAfterOneActionComplete)
    })

    expect(hook.result.current).toEqual(
      expect.arrayContaining(initialActionsRequired),
    )

    // Now add a new action and verify that all 3 remain present
    const newAction: ActionRequiredCount = {
      action: {
        concreteType: 'org.sagebionetworks.repo.model.download.RequestDownload',
        benefactorId: 123,
      },
      count: 1,
    }
    const actionsReturnedByServerWithNewActionRequired: ActionRequiredCount[] =
      [initialActionsRequired[0], newAction]
    act(() => {
      hook.rerender(actionsReturnedByServerWithNewActionRequired)
    })

    expect(hook.result.current).toEqual(
      expect.arrayContaining([...initialActionsRequired, newAction]),
    )
  })
})
