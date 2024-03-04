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
      expect.arrayContaining([
        {
          actionRequiredCount: initialActionsRequired[0],
          isComplete: false,
        },
        {
          actionRequiredCount: initialActionsRequired[1],
          isComplete: false,
        },
      ]),
    )

    const actionsReturnedByServerAfterOneActionComplete = [
      initialActionsRequired[0],
    ]
    act(() => {
      hook.rerender(actionsReturnedByServerAfterOneActionComplete)
    })

    expect(hook.result.current).toEqual(
      expect.arrayContaining([
        {
          actionRequiredCount: initialActionsRequired[0],
          isComplete: false,
        },
        {
          actionRequiredCount: initialActionsRequired[1],
          // This action is now 'complete' because the server no longer says it is required
          isComplete: true,
        },
      ]),
    )

    // Ensure it handles case where an action is completed and then re-appears
    act(() => {
      hook.rerender(initialActionsRequired)
    })

    expect(hook.result.current).toEqual(
      expect.arrayContaining([
        {
          actionRequiredCount: initialActionsRequired[0],
          isComplete: false,
        },
        {
          actionRequiredCount: initialActionsRequired[1],
          // This action returns to 'incomplete'
          isComplete: false,
        },
      ]),
    )
  })
})
