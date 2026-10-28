import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  FeatureFlagEnum,
  getFeatureFlagDisplayName,
} from '@/utils/featureflag/FeatureFlags'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ExperimentalFeaturesDialog from './ExperimentalFeaturesDialog'

const FLAG = FeatureFlagEnum.TEST_ONLY
const OTHER_FLAG = FeatureFlagEnum.TEST_ONLY_2
const FLAG_NAME = getFeatureFlagDisplayName(FLAG)
const OTHER_FLAG_NAME = getFeatureFlagDisplayName(OTHER_FLAG)

function renderDialog(initialEnableAll: boolean) {
  const onSave = vi.fn()
  render(
    <ExperimentalFeaturesDialog
      open
      isLoading={false}
      features={[FLAG, OTHER_FLAG]}
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

    expect(screen.getByRole('switch', { name: FLAG_NAME })).toBeChecked()
    expect(screen.getByRole('switch', { name: OTHER_FLAG_NAME })).toBeChecked()

    await userEvent.click(screen.getByRole('button', { name: 'Done' }))
    expect(onSave).toHaveBeenCalledWith(true, [])
  })

  it('turns off Enable all and keeps the other features on when one feature is turned off', async () => {
    const { onSave } = renderDialog(true)

    await userEvent.click(screen.getByRole('switch', { name: FLAG_NAME }))

    expect(
      screen.getByRole('switch', { name: 'Enable all Experimental Features' }),
    ).not.toBeChecked()
    expect(screen.getByRole('switch', { name: FLAG_NAME })).not.toBeChecked()

    await userEvent.click(screen.getByRole('button', { name: 'Done' }))
    expect(onSave).toHaveBeenCalledWith(false, [OTHER_FLAG])
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
