import { http, HttpResponse } from 'msw'

const TWO_FACTOR_ENROLLMENT_PATH = '/auth/v1/2fa'

/**
 * Rejects the submitted verification code the way the service does when it doesn't match the bound
 * secret. The reason text is what the UI matches on to present the failure on the code field.
 */
export function getInvalidCodeTwoFactorEnrollmentHandler(
  backendOrigin: string,
) {
  return http.post(backendOrigin + TWO_FACTOR_ENROLLMENT_PATH, () => {
    return HttpResponse.json(
      {
        concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
        reason: 'Invalid TOTP code',
      },
      { status: 400 },
    )
  })
}

/** Fails enrollment for a reason that no change to the submitted code could resolve */
export function getUnexpectedErrorTwoFactorEnrollmentHandler(
  backendOrigin: string,
  message: string,
) {
  return http.post(backendOrigin + TWO_FACTOR_ENROLLMENT_PATH, () => {
    return HttpResponse.json(
      {
        concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
        reason: message,
      },
      { status: 500 },
    )
  })
}
