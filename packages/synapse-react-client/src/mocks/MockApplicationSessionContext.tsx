import React from 'react'
import {
  ApplicationSessionContextProvider,
  ApplicationSessionContextType,
} from '../utils/AppUtils/session/ApplicationSessionContext'
export const MOCK_CLEAR_SESSION = jest.fn()

export const MOCK_REFRESH_SESSION = jest.fn()

export const MOCK_CONTEXT_VALUE: ApplicationSessionContextType = {
  clearSession: MOCK_CLEAR_SESSION,
  refreshSession: MOCK_REFRESH_SESSION,
  hasInitializedSession: false,
  isLoadingSSO: false,
}

export const MOCK_CONTEXT = React.createContext(MOCK_CONTEXT_VALUE)

/**
 * Full context object with default values for testing.
 *
 * If using @testing-library/react, see {@link TestingLibraryUtils#createWrapper}
 */
export const ApplicationSessionTestContext = jest
  .fn()
  .mockImplementation(({ children }) => {
    return (
      <ApplicationSessionContextProvider context={MOCK_CONTEXT_VALUE}>
        {children}
      </ApplicationSessionContextProvider>
    )
  })
