import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import RecordBasedFields, { RecordBasedFieldsProps } from './RecordBasedFields'
import { RecordBasedFieldsValue } from './utils/buildCurateTaskPayload'
import {
  RECORD_SET_MODE_CREATE_NEW_LABEL,
  RECORD_SET_MODE_PICK_EXISTING_LABEL,
} from '../utils/constants'

vi.mock('@/components/EntityFinder/EntityIdTextField', () => ({
  default: ({
    label,
    value,
    onChange,
  }: {
    label: string
    value: string
    onChange: (value: string) => void
  }) => (
    <input
      aria-label={label}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  ),
}))

vi.mock('./CreateRecordSetPanel', () => ({
  default: ({
    onCreated,
  }: {
    onCreated: (recordSet: { id: string; name?: string }) => void
  }) => (
    <button onClick={() => onCreated({ id: 'syn999', name: 'New RecordSet' })}>
      Simulate RecordSet Created
    </button>
  ),
}))

describe('RecordBasedFields', () => {
  const emptyValue: RecordBasedFieldsValue = { recordSetId: '' }

  function ControlledRecordBasedFields(
    props: Omit<RecordBasedFieldsProps, 'value' | 'onChange'> & {
      onChange?: RecordBasedFieldsProps['onChange']
    },
  ) {
    const [value, setValue] = useState<RecordBasedFieldsValue>(emptyValue)
    return (
      <RecordBasedFields
        {...props}
        value={value}
        onChange={newValue => {
          setValue(newValue)
          props.onChange?.(newValue)
        }}
      />
    )
  }

  it('shows only the existing-picker field when disabled (edit mode), with no toggle', () => {
    render(
      <RecordBasedFields
        value={{ recordSetId: 'syn123' }}
        onChange={vi.fn()}
        disabled
      />,
    )

    expect(screen.getByLabelText(/record set id/i)).toBeInTheDocument()
    expect(
      screen.queryByText(RECORD_SET_MODE_CREATE_NEW_LABEL),
    ).not.toBeInTheDocument()
  })

  it('defaults to the pick-existing picker in create mode', () => {
    render(<RecordBasedFields value={emptyValue} onChange={vi.fn()} />)

    expect(screen.getByLabelText(/record set id/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: RECORD_SET_MODE_PICK_EXISTING_LABEL }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: RECORD_SET_MODE_CREATE_NEW_LABEL }),
    ).toBeInTheDocument()
  })

  it('lets the existing-picker path set recordSetId via onChange', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<ControlledRecordBasedFields onChange={onChange} />)

    await user.type(screen.getByLabelText(/record set id/i), 'syn123')

    expect(onChange).toHaveBeenLastCalledWith({ recordSetId: 'syn123' })
  })

  it('switches to the create-new panel and fills recordSetId when a RecordSet is created', async () => {
    const user = userEvent.setup()
    const onChange = vi.fn()
    render(<RecordBasedFields value={emptyValue} onChange={onChange} />)

    await user.click(
      screen.getByRole('button', { name: RECORD_SET_MODE_CREATE_NEW_LABEL }),
    )
    expect(screen.queryByLabelText(/record set id/i)).not.toBeInTheDocument()

    await user.click(
      screen.getByRole('button', { name: 'Simulate RecordSet Created' }),
    )

    expect(onChange).toHaveBeenCalledWith({ recordSetId: 'syn999' })
  })
})
