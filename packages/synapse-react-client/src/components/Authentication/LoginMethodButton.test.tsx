import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseContextType } from '@/stores/SynapseContext/SynapseContext'
import {
  CURRENT_SOURCEAPP_NAME_LOCALSTORAGE_KEY,
  LAST_LOGIN_DATE_LOCALSTORAGE_KEY,
  LAST_LOGIN_METHOD_LOCALSTORAGE_KEY,
  LAST_LOGIN_SOURCEAPP_NAME_LOCALSTORAGE_KEY,
  LAST_LOGIN_SOURCEAPP_URL_LOCALSTORAGE_KEY,
  LOGIN_METHOD_EMAIL,
  LOGIN_METHOD_OAUTH2_GOOGLE,
} from '@/utils/SynapseConstants'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { clearLastLoginInfo } from './LastLoginInfo'
import LoginMethodButton, { LoginMethodButtonProps } from './LoginMethodButton'

const onClick = vi.fn()

const defaultProps: LoginMethodButtonProps = {
  loginMethod: LOGIN_METHOD_OAUTH2_GOOGLE,
  iconName: 'google24',
  onClick: onClick,
}
const defaultButtonText = 'Sign in with Google'
const defaultCurrentAppSourceName = 'AD Knowledge Portal'
const defaultLastLoginInfo = {
  lastLoginMethod: LOGIN_METHOD_EMAIL,
  lastLoginDate: '2023-05-10T16:54:53.333Z',
  lastLoginSourceAppName: 'ARK Portal',
  lastLoginSourceAppURL: 'https://arkportal.synapse.org',
}

function renderComponent(
  props: LoginMethodButtonProps,
  wrapperProps?: SynapseContextType,
) {
  return render(<LoginMethodButton {...props} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

function setUp(
  lastLoginInfo = defaultLastLoginInfo,
  currentSourceApp = defaultCurrentAppSourceName,
  props: LoginMethodButtonProps = defaultProps,
  wrapperProps?: SynapseContextType,
) {
  localStorage.setItem(
    LAST_LOGIN_METHOD_LOCALSTORAGE_KEY,
    JSON.stringify(lastLoginInfo.lastLoginMethod),
  )
  localStorage.setItem(
    LAST_LOGIN_DATE_LOCALSTORAGE_KEY,
    JSON.stringify(lastLoginInfo.lastLoginDate),
  )
  localStorage.setItem(
    LAST_LOGIN_SOURCEAPP_NAME_LOCALSTORAGE_KEY,
    JSON.stringify(lastLoginInfo.lastLoginSourceAppName),
  )
  localStorage.setItem(
    LAST_LOGIN_SOURCEAPP_URL_LOCALSTORAGE_KEY,
    JSON.stringify(lastLoginInfo.lastLoginSourceAppURL),
  )
  localStorage.setItem(
    CURRENT_SOURCEAPP_NAME_LOCALSTORAGE_KEY,
    JSON.stringify(currentSourceApp),
  )

  const user = userEvent.setup()
  const component = renderComponent(props, wrapperProps)
  const button = screen.getByRole('button')
  const subText = within(button).queryByText(
    /you may be able to use an existing account/i,
  )
  return { component, user, button, subText }
}

describe('LoginMethodButton tests', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  afterEach(() => {
    clearLastLoginInfo()
  })

  it('displays friendly button text and specified logo', () => {
    const { button } = setUp()
    expect(button).toHaveTextContent(defaultButtonText)
    expect(document.getElementById('icon-google24')).toBeInTheDocument()
  })

  it('calls the callback function on click', async () => {
    const { button, user } = setUp()
    user.click(button)

    await waitFor(() => {
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  it('does not display help text when previous and current login method are different', () => {
    const { subText } = setUp()
    expect(subText).not.toBeInTheDocument()
    expect(screen.queryByTestId('button-with-last-login-info')).toBeFalsy()
    expect(
      screen.queryByTestId('button-without-last-login-info'),
    ).toBeInTheDocument()
  })

  it('does not display help text when apps are the same, even if previous and current login methods are the same', () => {
    const { subText } = setUp(
      { ...defaultLastLoginInfo, lastLoginMethod: LOGIN_METHOD_OAUTH2_GOOGLE },
      'ARK Portal',
    )
    expect(subText).not.toBeInTheDocument()
    expect(screen.queryByTestId('button-with-last-login-info')).toBeFalsy()
    expect(
      screen.queryByTestId('button-without-last-login-info'),
    ).toBeInTheDocument()
  })

  it('displays help text and tooltip when previous and current login method are the same, but apps are different', async () => {
    const { button, subText, user } = setUp({
      ...defaultLastLoginInfo,
      lastLoginMethod: LOGIN_METHOD_OAUTH2_GOOGLE,
    })
    expect(button).toHaveTextContent(defaultButtonText)
    expect(subText).toBeInTheDocument()
    expect(
      screen.queryByTestId('button-with-last-login-info'),
    ).toBeInTheDocument()

    const tooltipIcon = screen.getByTestId('InfoTwoToneIcon')
    await user.hover(tooltipIcon)
    await waitFor(() => {
      expect(screen.getByRole('tooltip')).toBeInTheDocument()
    })
  })
})
