import { EnumOptionsType } from '@rjsf/utils'
import {
  fromMultipleAutocompleteValue,
  toMultipleAutocompleteValue,
} from './SelectWidget'

const options: EnumOptionsType[] = [
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
]

describe('toMultipleAutocompleteValue', () => {
  it('maps each selected value to its enum option, and unknown values to a self-labeled option', () => {
    expect(toMultipleAutocompleteValue(['green', 'custom'], options)).toEqual([
      { value: 'green', label: 'Green' },
      { value: 'custom', label: 'custom' },
    ])
  })

  it.each([undefined, null, 'red'])(
    'selects nothing for a non-array value (%s)',
    value => {
      expect(toMultipleAutocompleteValue(value, options)).toEqual([])
    },
  )
})

describe('fromMultipleAutocompleteValue', () => {
  it('maps selected options and free-solo strings back to enum values', () => {
    expect(
      fromMultipleAutocompleteValue([
        { value: 'red', label: 'Red' },
        { value: 'typed', label: 'Set to custom value "typed"' },
        'entered',
      ]),
    ).toEqual(['red', 'typed', 'entered'])
  })

  it('clears to an empty array for a non-array selection', () => {
    expect(fromMultipleAutocompleteValue(null)).toEqual([])
  })
})
