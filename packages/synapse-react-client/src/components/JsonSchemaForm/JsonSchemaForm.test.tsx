import { RJSFSchema } from '@rjsf/utils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { JsonSchemaForm } from './JsonSchemaForm'

const schema: RJSFSchema = {
  type: 'object',
  properties: {
    name: { type: 'string', title: 'Name', minLength: 3 },
    teamSize: { type: 'number', title: 'Team size', minimum: 1, maximum: 10 },
  },
  required: ['name'],
}

describe('JsonSchemaForm', () => {
  it('puts a number field’s step, min and max on its input', () => {
    render(<JsonSchemaForm schema={schema} />)

    const teamSize = screen.getByRole('spinbutton')
    expect(teamSize).toHaveAttribute('step', 'any')
    expect(teamSize).toHaveAttribute('min', '1')
    expect(teamSize).toHaveAttribute('max', '10')
  })

  it('shows the shared validator’s messages by default', async () => {
    const user = userEvent.setup()
    render(
      <JsonSchemaForm
        schema={schema}
        formData={{ teamSize: 11 }}
        showErrorList={false}
        noHtml5Validate
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(
      await screen.findByText('This field is required'),
    ).toBeInTheDocument()
    expect(screen.getByText('Must be 10 or less')).toBeInTheDocument()
  })

  it('runs a form’s own transformErrors on top of the shared messages', async () => {
    const user = userEvent.setup()
    render(
      <JsonSchemaForm
        schema={schema}
        formData={{ name: 'ab', teamSize: 11 }}
        transformErrors={errors =>
          errors.map(error =>
            error.name === 'minLength'
              ? { ...error, message: 'Too short!' }
              : error,
          )
        }
        showErrorList={false}
        noHtml5Validate
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(await screen.findByText('Too short!')).toBeInTheDocument()
    expect(screen.getByText('Must be 10 or less')).toBeInTheDocument()
  })

  it('names the field of each required-field error in its error list', async () => {
    const user = userEvent.setup()
    render(
      <JsonSchemaForm
        schema={{ ...schema, required: ['name', 'teamSize'] }}
        noHtml5Validate
      />,
    )

    await user.click(screen.getByRole('button', { name: 'Submit' }))

    const items = (await screen.findAllByRole('listitem'))
      .map(item => item.textContent)
      .filter(text => text?.includes(':'))
    expect(items).toEqual([
      'name:  This field is required',
      'teamSize:  This field is required',
    ])
  })
})
