import { useHistory } from 'react-router-dom'

export const POST_SSO_REDIRECT_URL_LOCALSTORAGE_KEY = 'after-sso-login-url'

export function preparePostSSORedirect() {
  // save current route (so that we can go back here after SSO)
  localStorage.setItem(
    POST_SSO_REDIRECT_URL_LOCALSTORAGE_KEY,
    window.location.href,
  )
}

export function redirectAfterSSO(
  history?: ReturnType<typeof useHistory>,
  fallbackRedirectUrl?: string,
) {
  // go back to original route after successful SSO login
  const originalUrl = localStorage.getItem(
    POST_SSO_REDIRECT_URL_LOCALSTORAGE_KEY,
  )
  localStorage.removeItem(POST_SSO_REDIRECT_URL_LOCALSTORAGE_KEY)
  const redirectUrl = originalUrl ?? fallbackRedirectUrl
  if (redirectUrl) {
    if (history) {
      if (redirectUrl.startsWith(window.location.origin)) {
        history.replace(redirectUrl.substring(window.location.origin.length))
      } else {
        history.replace(redirectUrl)
      }
    } else {
      window.location.replace(redirectUrl)
    }
  }
}
