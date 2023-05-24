import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import OrientationBanner, {
  getOrientationBannerKey,
  OrientationBannerName,
  OrientationBannerProps,
} from '../../src/components/OrientationBanner/OrientationBanner'
import { createWrapper } from '../testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../src/utils/context/SynapseContext'
import Illustrations from '../../src/assets/illustrations'

const onPrimaryButtonClicked = jest.fn()
window.open = jest.fn()

const defaultProps: OrientationBannerProps = {
  name: 'Projects',
  illustration: <Illustrations.Projects />,
  title: 'Getting Started With Your Projects',
  text: 'Projects are the main "containers" where information is stored and organized in Synapse. They are online workspaces where you can collaborate and share your work with teammates. Projects can be shared with individuals, small teams, or large consortia. Projects can be private so only you and your team can see what\'s inside, or they can be shared publicly for anyone to browse.',
  primaryButtonConfig: {
    text: 'Create a New Project',
    onClick: onPrimaryButtonClicked,
  },
  secondaryButtonConfig: {
    text: 'Learn More About Projects',
    href: 'https://help.synapse.org/docs/Setting-Up-a-Project.2055471258.html',
  },
}

const defaultStorageId = getOrientationBannerKey(defaultProps.name)

function renderComponent(
  props: OrientationBannerProps,
  wrapperProps?: SynapseContextType,
) {
  render(<OrientationBanner {...props} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

function setUp(
  props: OrientationBannerProps = defaultProps,
  wrapperProps?: SynapseContextType,
) {
  const user = userEvent.setup()
  const component = renderComponent(props, wrapperProps)
  const alert = screen.queryByRole('alert')
  const buttons = {
    primary:
      defaultProps.primaryButtonConfig &&
      defaultProps.primaryButtonConfig.text &&
      screen.queryByRole('button', {
        name: defaultProps.primaryButtonConfig.text,
      }),
    secondary:
      defaultProps.secondaryButtonConfig &&
      defaultProps.secondaryButtonConfig.text &&
      screen.queryByRole('button', {
        name: defaultProps.secondaryButtonConfig.text,
      }),
    close: screen.queryByRole('button', { name: /close/i }),
  }
  return { component, user, alert, buttons }
}

describe('OrientationBanner tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  afterEach(() => {
    localStorage.getItem(defaultStorageId) &&
      localStorage.removeItem(defaultStorageId)
  })

  it('displays the alert when the notification has not been dismissed', () => {
    const { alert, buttons } = setUp()
    expect(alert).toBeInTheDocument()
    expect(alert).toHaveTextContent(defaultProps.title)
    expect(alert).toHaveTextContent(defaultProps.text)
    expect(buttons.close).toBeInTheDocument()
    expect(buttons.primary).toBeInTheDocument()
    expect(buttons.secondary).toBeInTheDocument()
  })

  it('does not display the alert when the notification has been dismissed', () => {
    localStorage.setItem(defaultStorageId, 'true')
    const { alert } = setUp(defaultProps)
    expect(alert).not.toBeInTheDocument()
  })

  it('displays the alert even if a different notification was previously dismissed', () => {
    const otherBannerName = 'Challenges' as OrientationBannerName
    localStorage.setItem(getOrientationBannerKey(otherBannerName), 'true')
    renderComponent(defaultProps)
    expect(screen.queryByRole('alert')).toBeInTheDocument()
    localStorage.removeItem(getOrientationBannerKey(otherBannerName))
  })

  it('hides the alert when the close button is clicked', async () => {
    const { alert, user, buttons } = setUp()
    expect(alert).toBeInTheDocument()
    expect(buttons.close).toBeInTheDocument()
    user.click(buttons.close!)
    await waitForElementToBeRemoved(alert)
    expect(alert).not.toBeInTheDocument()
  })

  it('does not have link or action buttons when neither are provided', () => {
    const { buttons } = setUp({
      ...defaultProps,
      primaryButtonConfig: undefined,
      secondaryButtonConfig: undefined,
    })
    expect(buttons.primary).not.toBeInTheDocument()
    expect(buttons.secondary).not.toBeInTheDocument()
  })

  it('has a link button when only a link is provided and has the correct href attribute', async () => {
    const { user, buttons } = setUp({
      ...defaultProps,
      primaryButtonConfig: undefined,
    })
    expect(buttons.primary).not.toBeInTheDocument()
    expect(buttons.secondary).toBeInTheDocument()

    await user.click(buttons.secondary as HTMLElement)
    expect(window.open).toHaveBeenCalledTimes(1)
    expect(window.open).toHaveBeenCalledWith(
      // @ts-ignore - typescript doesn't recognize href within the conditional AlertButtonConfig type
      defaultProps.secondaryButtonConfig!.href,
      '_blank',
      'noopener',
    )
  })

  it('has an action button when only an acton is provided', () => {
    const { buttons } = setUp({
      ...defaultProps,
      secondaryButtonConfig: undefined,
    })
    expect(buttons.primary).toBeInTheDocument()
    expect(buttons.secondary).not.toBeInTheDocument()
  })

  it('calls the correct callback when the primary button is clicked', async () => {
    const { user, buttons } = setUp()
    expect(onPrimaryButtonClicked).toHaveBeenCalledTimes(0)
    expect(buttons.primary).toBeInTheDocument()
    await user.click(buttons.primary as HTMLElement)
    expect(onPrimaryButtonClicked).toHaveBeenCalledTimes(1)
  })
})
