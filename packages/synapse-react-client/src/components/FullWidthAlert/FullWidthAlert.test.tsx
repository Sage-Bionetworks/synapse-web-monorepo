import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseContextType } from '@/stores/SynapseContext/SynapseContext'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FullWidthAlert, { FullWidthAlertProps } from './FullWidthAlert'

const onPrimaryButtonClicked = vi.fn()
window.open = vi.fn()

const defaultProps: FullWidthAlertProps = {
  show: true,
  variant: 'info',
  title: 'Getting Started With Your Projects',
  description:
    'Projects are the main "containers" where information is stored and organized in Synapse. They are online workspaces where you can collaborate and share your work with teammates. Projects can be shared with individuals, small teams, or large consortia. Projects can be private so only you and your team can see what\'s inside, or they can be shared publicly for anyone to browse.',
  primaryButtonConfig: {
    text: 'Create a New Project',
    onClick: onPrimaryButtonClicked,
  },
  secondaryButtonConfig: {
    text: 'Learn More About Projects',
    href: 'https://help.synapse.org/docs/Setting-Up-a-Project.2055471258.html',
  },
  tertiaryButtonConfig: {
    text: 'Learn Even More About Projects',
    href: 'https://help.synapse.org/docs/ExtraProjectHelp.html',
  },
}

function renderComponent(
  props: FullWidthAlertProps,
  wrapperProps?: SynapseContextType,
) {
  render(<FullWidthAlert {...props} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

function setUp(
  props: FullWidthAlertProps = defaultProps,
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
    tertiary:
      defaultProps.tertiaryButtonConfig &&
      defaultProps.tertiaryButtonConfig.text &&
      screen.queryByRole('button', {
        name: defaultProps.tertiaryButtonConfig.text,
      }),

    close: screen.queryByRole('button', { name: /close/i }),
  }
  return { component, user, alert, buttons }
}

describe('FullWidthAlert tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  afterEach(() => {})

  it('does not display the alert when not shown', () => {
    const { alert } = setUp({
      ...defaultProps,
      show: false,
    })
    expect(alert).not.toBeInTheDocument()
  })

  it('does not have link or action buttons when neither are provided', () => {
    const { buttons } = setUp({
      ...defaultProps,
      primaryButtonConfig: undefined,
      secondaryButtonConfig: undefined,
      tertiaryButtonConfig: undefined,
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
      tertiaryButtonConfig: undefined,
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
