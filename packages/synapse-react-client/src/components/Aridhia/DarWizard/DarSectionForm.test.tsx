import { render, screen } from '@testing-library/react'
import { DarSectionForm, SCHEMA_ERROR_MESSAGE } from './DarSectionForm'

describe('DarSectionForm', () => {
  it('says the form could not be checked, and logs why, when its schema cannot be compiled', () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    const consoleError = vi.spyOn(console, 'error').mockImplementation(() => {})

    render(
      <DarSectionForm
        schema={{
          type: 'object',
          properties: { name: { type: 'string', minLength: -1 } },
        }}
        uiSchema={{}}
        formData={{ name: 'Jane' }}
        onChange={vi.fn()}
      />,
    )

    expect(screen.getByRole('alert')).toHaveTextContent(SCHEMA_ERROR_MESSAGE)
    expect(consoleError).toHaveBeenCalledWith(
      expect.stringContaining('failed to compile'),
    )
  })
})
