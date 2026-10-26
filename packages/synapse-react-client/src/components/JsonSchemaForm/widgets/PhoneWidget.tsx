import { Widget, WidgetProps } from '@rjsf/utils'
import { MuiTelInput } from 'mui-tel-input'

export const PHONE_DEFAULT_COUNTRY = 'US'
export const PHONE_PREFERRED_COUNTRIES = ['GB', 'US'] as ['GB', 'US']

/**
 * International phone number widget: a country dropdown (flag, name, calling code) with a
 * numeric-only, country-formatted number input. The calling code is always part of the value.
 */
export const PhoneWidget: Widget = ({
  id,
  disabled,
  readonly,
  required,
  value,
  onChange,
  onBlur,
  onFocus,
}: WidgetProps) => {
  return (
    <MuiTelInput
      fullWidth
      id={id}
      required={required}
      disabled={disabled}
      slotProps={{ htmlInput: { readOnly: readonly } }}
      value={typeof value === 'string' ? value : ''}
      defaultCountry={PHONE_DEFAULT_COUNTRY}
      preferredCountries={PHONE_PREFERRED_COUNTRIES}
      forceCallingCode
      // A bare calling code is not an answer; report it as empty so `required` still applies.
      onChange={(newValue, info) =>
        onChange(info.nationalNumber ? newValue : undefined)
      }
      onBlur={() => onBlur(id, value)}
      onFocus={() => onFocus(id, value)}
    />
  )
}
