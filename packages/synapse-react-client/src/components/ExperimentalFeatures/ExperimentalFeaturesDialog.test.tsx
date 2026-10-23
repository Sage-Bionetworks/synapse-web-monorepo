import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { FeatureFlagEnum } from '@/utils/featureflag/FeatureFlags'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ExperimentalFeaturesDialog from './ExperimentalFeaturesDialog'

const NEW_TASK = FeatureFlagEnum.CURATION_TASK_PAGE_SHOW_NEW_TASK_BUTTON
const ACT = FeatureFlagEnum.ACT_DASHBOARD_FORM_TEMPLATES

function renderDialog(initialEnableAll: boolean) {
  const onSave = vi.fn()
  render(
    <ExperimentalFeaturesDialog
      open
      isLoading={false}
      features={[NEW_TASK, ACT]}
      initialEnableAll={initialEnableAll}
      initialEnabledFlags={[]}
      onCancel={vi.fn()}
      onSave={onSave}
    />,
    { wrapper: createWrapper() },
  )
  return { onSave }
}

describe('ExperimentalFeaturesDialog', () => {
  it('turns on every feature when Enable all is turned on', async () => {
    const { onSave } = renderDialog(false)

    await userEvent.click(
      screen.getByRole('switch', { name: 'Enable all Experimental Features' }),
    )

    expect(
      screen.getByRole('switch', { name: 'New Tasks Button' }),
    ).toBeChecked()
    expect(
      screen.getByRole('switch', { name: 'ACT Dashboard Form Templates' }),
    ).toBeChecked()

    await userEvent.click(screen.getByRole('button', { name: 'Done' }))
    expect(onSave).toHaveBeenCalledWith(true, [])
  })

  it('turns off Enable all and keeps the other features on when one feature is turned off', async () => {
    const { onSave } = renderDialog(true)

    await userEvent.click(
      screen.getByRole('switch', { name: 'New Tasks Button' }),
    )

    expect(
      screen.getByRole('switch', { name: 'Enable all Experimental Features' }),
    ).not.toBeChecked()
    expect(
      screen.getByRole('switch', { name: 'New Tasks Button' }),
    ).not.toBeChecked()

    await userEvent.click(screen.getByRole('button', { name: 'Done' }))
    expect(onSave).toHaveBeenCalledWith(false, [ACT])
  })

  it('turns off every feature when Enable all is turned off', async () => {
    const { onSave } = renderDialog(true)

    await userEvent.click(
      screen.getByRole('switch', { name: 'Enable all Experimental Features' }),
    )
    await userEvent.click(screen.getByRole('button', { name: 'Done' }))

    expect(onSave).toHaveBeenCalledWith(false, [])
  })
})
