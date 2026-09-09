import { screen } from '@testing-library/react'
import type { UserEvent } from '@testing-library/user-event'

/**
 * Finds an RJSF-rendered text input or textarea by its field label.
 *
 * Matches on the start of the label because RJSF appends a `*` marker to required fields'
 * labels, which would otherwise defeat an exact-text match.
 */
export function getRjsfTextField(label: string): HTMLElement {
  return screen.getByLabelText(new RegExp(`^${label}`, 'i'), {
    selector: 'input, textarea',
  })
}

export function fillRjsfTextField(
  user: UserEvent,
  label: string,
  value: string,
): Promise<void> {
  return user.type(getRjsfTextField(label), value)
}
