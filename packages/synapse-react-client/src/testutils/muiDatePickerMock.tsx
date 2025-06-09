// Mock the DatePicker component from MUI
vi.mock('@mui/x-date-pickers', () => ({
  DatePicker: ({ value, onChange, slotProps }: any) => {
    let textFieldProps = slotProps?.textField
    if (typeof slotProps?.textField === 'function') {
      // If textFieldProps is a function, call it to get the props
      textFieldProps = slotProps?.textField({ value, onChange })
    }
    const inputProps = textFieldProps.inputProps || {}
    // when a dayjs object is passed in, the mock input is given a formatted string for its value (aligning with test case expectations)
    const formattedValue =
      value && typeof value === 'object' && value.format
        ? value.format('YYYY-MM-DD')
        : value || ''
    return (
      <input
        type="date"
        value={formattedValue}
        onChange={e => onChange && onChange(e.target.value)}
        data-testid="date-picker-mock"
        {...inputProps}
      />
    )
  },
}))
