import { RJSFSchema } from '@rjsf/utils'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import {
  FieldDefinitionDrawer,
  FieldDefinitionDrawerProps,
} from './FieldDefinitionDrawer'
import {
  applyFieldType,
  FIELD_TYPE_OPTIONS,
  SimpleFieldType,
} from './schemaFieldUtils'

const textProperty: RJSFSchema = { type: 'string', title: 'Institution' }

function baseProps(
  overrides: Partial<FieldDefinitionDrawerProps> = {},
): FieldDefinitionDrawerProps {
  return {
    open: true,
    propertyKey: 'institution',
    existingKeys: new Set(['institution', 'summaryOfUse']),
    property: textProperty,
    isRequired: false,
    context: 'ALWAYS',
    isUsedInSteps: false,
    onClose: vi.fn(),
    onUpdate: vi.fn(),
    onRenameKey: vi.fn(),
    onReplace: vi.fn(),
    onChangeRequired: vi.fn(),
    onChangeContext: vi.fn(),
    onRemove: vi.fn(),
    ...overrides,
  }
}

describe('FieldDefinitionDrawer', () => {
  it('shows "No field selected" when no property is open', () => {
    render(
      <FieldDefinitionDrawer
        {...baseProps({ property: null, propertyKey: null })}
      />,
    )
    expect(screen.getByText('No field selected.')).toBeInTheDocument()
  })

  it('shows the advanced-mode alert for a shape the simple editor cannot represent, instead of ChoiceOptionsEditor', () => {
    render(
      <FieldDefinitionDrawer {...baseProps({ property: { type: 'array' } })} />,
    )
    expect(
      screen.getByText(/settings not supported by the simple editor/),
    ).toBeInTheDocument()
    expect(screen.queryByText('Choices')).not.toBeInTheDocument()
  })

  it('renders ChoiceOptionsEditor only for a choice-typed property', () => {
    render(
      <FieldDefinitionDrawer
        {...baseProps({
          property: { type: 'string', enum: ['A', 'B'] },
        })}
      />,
    )
    expect(screen.getByText('Choices')).toBeInTheDocument()
  })

  it('labels the delete button based on whether the field is bound to a step', () => {
    const { rerender } = render(
      <FieldDefinitionDrawer {...baseProps({ isUsedInSteps: false })} />,
    )
    expect(
      screen.getByRole('button', { name: 'Delete field' }),
    ).toBeInTheDocument()
    rerender(<FieldDefinitionDrawer {...baseProps({ isUsedInSteps: true })} />)
    expect(
      screen.getByRole('button', { name: 'Delete (will unbind from steps)' }),
    ).toBeInTheDocument()
  })

  it('calls onChangeContext when the submission context select changes', async () => {
    const user = userEvent.setup()
    const onChangeContext = vi.fn()
    render(<FieldDefinitionDrawer {...baseProps({ onChangeContext })} />)
    await user.click(screen.getByLabelText('Submission context'))
    await user.click(screen.getByRole('option', { name: 'Renewal only' }))
    expect(onChangeContext).toHaveBeenCalledWith('RENEWAL_ONLY')
  })

  it.each(FIELD_TYPE_OPTIONS)(
    'replaces the property with the $value shape when the field type changes to it',
    async ({ value, label }) => {
      const user = userEvent.setup()
      const onReplace = vi.fn()
      // Start from a property of a *different* type than the option being selected -- MUI's
      // Select only fires onChange when the value actually changes.
      const startingType = value === 'text' ? 'boolean' : 'text'
      const startingProperty = applyFieldType(textProperty, startingType)
      render(
        <FieldDefinitionDrawer
          {...baseProps({ property: startingProperty, onReplace })}
        />,
      )
      await user.click(screen.getByLabelText('Field type'))
      await user.click(screen.getByRole('option', { name: label }))
      // Literal per-type shape (not a call to applyFieldType) so a regression in that helper's
      // own mapping fails this integration test too, not only schemaFieldUtils.test.ts.
      const expectedShapeByType: Record<SimpleFieldType, RJSFSchema> = {
        text: { title: 'Institution', type: 'string' },
        number: { title: 'Institution', type: 'number' },
        boolean: { title: 'Institution', type: 'boolean' },
        choice: { title: 'Institution', type: 'string', enum: ['Option 1'] },
        multiChoice: {
          title: 'Institution',
          type: 'array',
          items: { type: 'string', enum: ['Option 1'] },
          uniqueItems: true,
        },
        file: {
          title: 'Institution',
          type: 'number',
          format: 'synapse-filehandle-id',
        },
      }
      expect(onReplace).toHaveBeenCalledWith(expectedShapeByType[value])
    },
  )

  describe('property key editing', () => {
    it('shows "Required" when the key is cleared', async () => {
      const user = userEvent.setup()
      render(<FieldDefinitionDrawer {...baseProps()} />)
      const input = screen.getByLabelText('Property key') as HTMLInputElement
      await user.clear(input)
      expect(input).toHaveAttribute('aria-invalid', 'true')
      const describedById = input.getAttribute('aria-describedby')!
      expect(document.getElementById(describedById)).toHaveTextContent(
        'Required',
      )
    })

    it('flags a collision with another existing key, but not with its own unchanged key', async () => {
      const user = userEvent.setup()
      render(<FieldDefinitionDrawer {...baseProps()} />)
      const input = screen.getByLabelText('Property key')
      expect(
        screen.queryByText('Already used by another field'),
      ).not.toBeInTheDocument()
      await user.clear(input)
      await user.type(input, 'summaryOfUse')
      expect(
        screen.getByText('Already used by another field'),
      ).toBeInTheDocument()
    })

    it('commits a valid rename on blur', async () => {
      const user = userEvent.setup()
      const onRenameKey = vi.fn()
      render(<FieldDefinitionDrawer {...baseProps({ onRenameKey })} />)
      const input = screen.getByLabelText('Property key')
      await user.clear(input)
      await user.type(input, 'institutionName')
      await user.tab()
      expect(onRenameKey).toHaveBeenCalledWith('institutionName')
    })

    it('commits a valid rename on Enter', async () => {
      const user = userEvent.setup()
      const onRenameKey = vi.fn()
      render(<FieldDefinitionDrawer {...baseProps({ onRenameKey })} />)
      const input = screen.getByLabelText('Property key')
      await user.clear(input)
      await user.type(input, 'institutionName{Enter}')
      expect(onRenameKey).toHaveBeenCalledWith('institutionName')
    })

    it('reverts the draft to the committed key instead of renaming, when the draft is invalid', async () => {
      const user = userEvent.setup()
      const onRenameKey = vi.fn()
      render(<FieldDefinitionDrawer {...baseProps({ onRenameKey })} />)
      const input = screen.getByLabelText('Property key') as HTMLInputElement
      await user.clear(input)
      await user.tab()
      expect(onRenameKey).not.toHaveBeenCalled()
      expect(input.value).toBe('institution')
    })

    it('sanitizes disallowed characters as the user types', async () => {
      const user = userEvent.setup()
      render(<FieldDefinitionDrawer {...baseProps()} />)
      const input = screen.getByLabelText('Property key') as HTMLInputElement
      await user.clear(input)
      await user.type(input, 'a b!c')
      expect(input.value).not.toMatch(/[ !]/)
    })

    it("starts each field with a fresh draft instead of leaking a prior field's in-progress edit", () => {
      function Harness() {
        const [propertyKey, setPropertyKey] = useState('institution')
        return (
          <>
            <button onClick={() => setPropertyKey('summaryOfUse')}>
              switch field
            </button>
            <FieldDefinitionDrawer
              {...baseProps({ propertyKey, property: { type: 'string' } })}
            />
          </>
        )
      }
      render(<Harness />)
      const input = screen.getByLabelText('Property key') as HTMLInputElement
      fireEvent.change(input, { target: { value: 'inProgressDraft' } })
      expect(input.value).toBe('inProgressDraft')
      fireEvent.click(
        screen.getByRole('button', { name: 'switch field', hidden: true }),
      )
      const inputAfterSwitch = screen.getByLabelText(
        'Property key',
      ) as HTMLInputElement
      expect(inputAfterSwitch.value).toBe('summaryOfUse')
    })
  })
})
