// Mock the DatePicker component from MUI
jest.mock('@mui/x-date-pickers', () => ({
  DatePicker: ({ value, onChange, slotProps }: any) => {
    const textFieldProps = slotProps?.textField ? slotProps.textField({}) : {}
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
