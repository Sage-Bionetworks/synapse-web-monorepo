import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  clearLastLoginInfo,
  setLastLoginInfo,
} from '../../src/components/Authentication/LastLoginInfo'
import { LoginMethod } from '../../src/components/Authentication/LoginMethod'
import LoginMethodButton, {
  LoginMethodButtonProps,
} from '../../src/components/Authentication/LoginMethodButton'
import {
  CURRENT_SOURCEAPP_NAME_LOCALSTORAGE_KEY,
  LOGIN_METHOD_EMAIL,
  LOGIN_METHOD_OAUTH2_GOOGLE,
} from '../../src/utils/SynapseConstants'
import { SynapseContextType } from '../../src/utils/context/SynapseContext'
import { createWrapper } from '../testutils/TestingLibraryUtils'

const onClick = jest.fn()

const defaultProps: LoginMethodButtonProps = {
  loginMethod: LOGIN_METHOD_OAUTH2_GOOGLE,
  iconName: 'google24',
  onClick: onClick,
}
const defaultButtonText = 'Sign in with Google'
const defaultCurrentAppSourceName = 'AD Knowledge Portal'
const defaultLastLoginInfo = {
  lastLoginMethod: LOGIN_METHOD_EMAIL,
  lastLoginDate: new Date('2023-05-10T16:54:53.333Z'),
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
  setLastLoginInfo(
    lastLoginInfo.lastLoginMethod as LoginMethod,
    lastLoginInfo.lastLoginDate,
    lastLoginInfo.lastLoginSourceAppName,
    lastLoginInfo.lastLoginSourceAppURL,
  )
  localStorage.setItem(
    CURRENT_SOURCEAPP_NAME_LOCALSTORAGE_KEY,
    currentSourceApp,
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
    jest.clearAllMocks()
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
    const { button, subText } = setUp(
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
