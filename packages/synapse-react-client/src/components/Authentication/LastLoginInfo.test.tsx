import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseContextType } from '@/stores/SynapseContext/SynapseContext'
import { LOGIN_METHOD_OAUTH2_GOOGLE } from '@/utils/SynapseConstants'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LastLoginInfo, { LastLoginInfoProps } from './LastLoginInfo'

const defaultProps = {
  currentSourceAppName: 'AD Knowledge Portal',
  lastLoginMethod: LOGIN_METHOD_OAUTH2_GOOGLE,
  lastLoginSourceAppName: 'ARK Portal',
  lastLoginSourceAppURL: 'https://arkportal.synapse.org',
  lastLoginDate: '2023-05-10T16:54:53.333Z',
  display: 'sentence',
} satisfies LastLoginInfoProps

const defaultDateFormatted = 'May 10, 2023'

function renderComponent(
  props: LastLoginInfoProps,
  wrapperProps?: SynapseContextType,
) {
  return render(<LastLoginInfo {...props} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

function setUp(
  props: LastLoginInfoProps = defaultProps,
  wrapperProps?: SynapseContextType,
) {
  const user = userEvent.setup()
  const component = renderComponent(props, wrapperProps)
  const paragraphs = document.getElementsByTagName('p')
  const tooltipIcon = screen.queryByTestId('InfoTwoToneIcon')
  return { component, user, paragraphs, tooltipIcon }
}

describe('LastLoginInfo tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('displays sentence and tooltip', async () => {
    const { paragraphs, tooltipIcon, user } = setUp()

    expect(paragraphs.length).toEqual(1)
    expect(paragraphs[0].textContent).toEqual(
      'You may be able to use an existing account',
    )

    await user.hover(tooltipIcon!)
    const tooltip = await screen.findByRole('tooltip')

    expect(tooltip.textContent).toMatch(defaultProps.currentSourceAppName)
    expect(tooltip.textContent).toMatch(defaultDateFormatted)
    expect(tooltip.textContent).toMatch(defaultProps.lastLoginSourceAppName)
  })

  it('displays box', () => {
    const { paragraphs, tooltipIcon } = setUp({
      ...defaultProps,
      display: 'box',
    })

    expect(tooltipIcon).not.toBeInTheDocument()

    expect(paragraphs.length).toEqual(3)
    expect(paragraphs[0].textContent).toMatch(defaultProps.currentSourceAppName)
    expect(paragraphs[2].textContent).toMatch(defaultDateFormatted)

    const link = within(paragraphs[1]).getByRole('link')
    expect(link).toHaveAttribute('href', defaultProps.lastLoginSourceAppURL)
    expect(link).toHaveTextContent(defaultProps.lastLoginSourceAppName)
  })

  it('displays a definite article when source apps end in "portal"', async () => {
    const { tooltipIcon, user } = setUp()

    expect(tooltipIcon).toBeInTheDocument()

    await user.hover(tooltipIcon!)
    const tooltip = await screen.findByRole('tooltip')

    expect(tooltip.textContent).toMatch(
      `the ${defaultProps.currentSourceAppName}`,
    )
    expect(tooltip.textContent).toMatch(
      `the ${defaultProps.lastLoginSourceAppName}`,
    )
  })

  it('does not display a definite article when source apps do not end in "portal"', async () => {
    const currentSourceAppName = 'Sage Bionetworks'
    const lastLoginSourceAppName = 'Mobile Toolbox'
    const { tooltipIcon, user } = setUp({
      ...defaultProps,
      currentSourceAppName: currentSourceAppName,
      lastLoginSourceAppName: lastLoginSourceAppName,
    })

    expect(tooltipIcon).toBeInTheDocument()

    await user.hover(tooltipIcon!)
    const tooltip = await screen.findByRole('tooltip')

    expect(tooltip.textContent).not.toMatch(`the ${currentSourceAppName}`)
    expect(tooltip.textContent).not.toMatch(`the ${lastLoginSourceAppName}`)
  })

  it('displays "a" as the indefinite article when current source app does not start with a vowel', () => {
    const currentSourceAppName = 'Sage Bionetworks'
    const { paragraphs } = setUp({
      ...defaultProps,
      currentSourceAppName: currentSourceAppName,
      display: 'box',
    })
    expect(paragraphs.length).toEqual(3)

    expect(paragraphs[0].textContent).toMatch(`a ${currentSourceAppName}`)
  })

  it('displays "an" as the indefinite article when current source app starts with a vowel', () => {
    const { paragraphs } = setUp({
      ...defaultProps,
      display: 'box',
    })
    expect(paragraphs.length).toEqual(3)

    expect(paragraphs[0].textContent).toMatch(
      `an ${defaultProps.currentSourceAppName}`,
    )
  })

  it('does not display if current source app is null', () => {
    const { container } = renderComponent({
      ...defaultProps,
      currentSourceAppName: undefined,
    })
    expect(container).toBeEmptyDOMElement()
  })

  it('does not display if last source app is null', () => {
    const { container } = renderComponent({
      ...defaultProps,
      lastLoginSourceAppName: undefined,
    })
    expect(container).toBeEmptyDOMElement()
  })

  it('does not display if current source app is the same as last source app', () => {
    const { container } = renderComponent({
      ...defaultProps,
      currentSourceAppName: defaultProps.lastLoginSourceAppName,
    })
    expect(container).toBeEmptyDOMElement()
  })
})
