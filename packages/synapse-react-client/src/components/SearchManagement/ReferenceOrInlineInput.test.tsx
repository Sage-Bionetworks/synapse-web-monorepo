import '@/mocks/msw/server'
import { MOCK_SEARCH_MANAGEMENT_ORGANIZATION } from '@/mocks/searchmanagement/mockSearchManagementData'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  ReferenceOrInlineInput,
  ReferenceOrInlineInputProps,
} from './ReferenceOrInlineInput'

const SCIENTIFIC_REFERENCE = `${MOCK_SEARCH_MANAGEMENT_ORGANIZATION}-SCIENTIFIC`
const INLINE_EXAMPLE = { analyzer: { default: { type: 'standard' } } }

function renderInput(props: Partial<ReferenceOrInlineInputProps> = {}) {
  const user = userEvent.setup()
  const onChange = vi.fn()
  const onValidityChange = vi.fn()
  render(
    <ReferenceOrInlineInput
      label="Default Analyzer"
      referenceType="TEXT_ANALYZER"
      optional
      value={undefined}
      onChange={onChange}
      onValidityChange={onValidityChange}
      inlineExample={INLINE_EXAMPLE}
      {...props}
    />,
    { wrapper: createWrapper() },
  )
  return { user, onChange, onValidityChange }
}

describe('ReferenceOrInlineInput', () => {
  it('produces a $ref when a saved resource is picked', async () => {
    const { user, onChange, onValidityChange } = renderInput()
    expect(screen.getByRole('button', { name: 'None' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )

    await user.click(
      screen.getByRole('button', { name: 'Saved Text Analyzer' }),
    )
    expect(onChange).toHaveBeenLastCalledWith(undefined)
    expect(onValidityChange).toHaveBeenLastCalledWith(false)

    await user.click(
      screen.getByRole('combobox', { name: 'Saved Text Analyzer' }),
    )
    await user.click(
      await screen.findByRole('option', {
        name: new RegExp(`^${SCIENTIFIC_REFERENCE}`),
      }),
    )

    expect(onChange).toHaveBeenLastCalledWith({ $ref: SCIENTIFIC_REFERENCE })
    expect(onValidityChange).toHaveBeenLastCalledWith(true)
  })

  it('produces the parsed JSON in inline mode', async () => {
    const { user, onChange, onValidityChange } = renderInput()

    await user.click(screen.getByRole('button', { name: 'Inline JSON' }))
    expect(onChange).toHaveBeenLastCalledWith(INLINE_EXAMPLE)

    const inlineField = screen.getByRole('textbox', {
      name: 'Inline Text Analyzer JSON',
    })
    await user.clear(inlineField)
    await user.click(inlineField)
    await user.paste('{"analyzer": {"default": {"type": "keyword"}}}')
    expect(onChange).toHaveBeenLastCalledWith({
      analyzer: { default: { type: 'keyword' } },
    })
    expect(onValidityChange).toHaveBeenLastCalledWith(true)

    await user.type(inlineField, ',')
    expect(onValidityChange).toHaveBeenLastCalledWith(false)
  })

  it('reports undefined when switched back to None', async () => {
    const { user, onChange, onValidityChange } = renderInput({
      value: { $ref: SCIENTIFIC_REFERENCE },
    })

    await user.click(screen.getByRole('button', { name: 'None' }))

    expect(onChange).toHaveBeenLastCalledWith(undefined)
    expect(onValidityChange).toHaveBeenLastCalledWith(true)
  })

  it('starts in the mode that matches its value and omits None when required', async () => {
    renderInput({ value: { $ref: SCIENTIFIC_REFERENCE }, optional: false })

    expect(
      screen.queryByRole('button', { name: 'None' }),
    ).not.toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Saved Text Analyzer' }),
    ).toHaveAttribute('aria-pressed', 'true')
    expect(
      await screen.findByRole('combobox', { name: 'Saved Text Analyzer' }),
    ).toHaveValue(SCIENTIFIC_REFERENCE)
  })
})
