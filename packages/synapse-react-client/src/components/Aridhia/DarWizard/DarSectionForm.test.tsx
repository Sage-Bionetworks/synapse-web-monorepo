import { useState } from 'react'
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

  it('flags a schema default that breaks its rule as soon as it opens, unless the user has answered', async () => {
    const schema = {
      type: 'object' as const,
      properties: {
        note: { type: 'string' as const, minLength: 5, default: 'ab' },
        title: { type: 'string' as const, minLength: 2, default: 'ok' },
      },
    }
    // The wizard keeps the answers, including the defaults RJSF reports on mount.
    function ControlledForm(props: { initial: Record<string, unknown> }) {
      const [formData, setFormData] = useState(props.initial)
      return (
        <DarSectionForm
          schema={schema}
          uiSchema={{}}
          formData={formData}
          onChange={setFormData}
        />
      )
    }
    const { unmount } = render(<ControlledForm initial={{}} />)
    expect(
      await screen.findByText('Must be at least 5 characters'),
    ).toBeInTheDocument()
    expect(
      screen.queryByText('Must be at least 2 characters'),
    ).not.toBeInTheDocument()
    unmount()

    render(<ControlledForm initial={{ note: 'long enough' }} />)
    expect(screen.getByDisplayValue('long enough')).toBeInTheDocument()
    expect(screen.queryByText(/^Must be at least/)).not.toBeInTheDocument()
  })
})
