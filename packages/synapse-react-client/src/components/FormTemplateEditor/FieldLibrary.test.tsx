import { RJSFSchema } from '@rjsf/utils'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FieldLibrary } from './FieldLibrary'

const jsonSchema: RJSFSchema = {
  type: 'object',
  properties: {
    institution: { type: 'string', title: 'Institution Name' },
    pi: { type: 'string', title: 'Principal Investigator' },
    projectLead: { type: 'string' },
  },
}

function renderLibrary(
  overrides: Partial<Parameters<typeof FieldLibrary>[0]> = {},
) {
  const user = userEvent.setup()
  const onSelectField = vi.fn()
  const onCreateField = vi.fn()
  render(
    <FieldLibrary
      jsonSchema={jsonSchema}
      usedPaths={new Set(['/pi'])}
      selectedPropertyKey={null}
      onSelectField={onSelectField}
      onCreateField={onCreateField}
      {...overrides}
    />,
  )
  return { user, onSelectField, onCreateField }
}

function listedFields() {
  return screen
    .getAllByRole('button', { name: /^Edit / })
    .map(row => row.getAttribute('aria-label'))
}

describe('FieldLibrary', () => {
  it('lists every property, marking the ones bound to a step', () => {
    renderLibrary()

    expect(listedFields()).toEqual([
      'Edit Institution Name',
      'Edit Principal Investigator',
      'Edit projectLead',
    ])
    expect(screen.getAllByText('In form')).toHaveLength(1)
    expect(screen.getAllByText('Not in form')).toHaveLength(2)
  })

  it.each([
    ['a title', 'investigator', ['Edit Principal Investigator']],
    ['a key', 'PROJECTL', ['Edit projectLead']],
    [
      'a term shared by several fields',
      'E',
      [
        'Edit Institution Name',
        'Edit Principal Investigator',
        'Edit projectLead',
      ],
    ],
  ])('filters by %s, ignoring case', async (_label, term, expected) => {
    const { user } = renderLibrary()

    await user.type(
      screen.getByRole('textbox', { name: 'Search fields' }),
      term,
    )

    expect(listedFields()).toEqual(expected)
  })

  it('says when nothing matches the search', async () => {
    const { user } = renderLibrary()

    await user.type(
      screen.getByRole('textbox', { name: 'Search fields' }),
      'zzz',
    )

    expect(screen.getByText('No fields match "zzz".')).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /^Edit / })).toBeNull()
  })

  it('prompts to create the first field when the schema has none', async () => {
    const { user, onCreateField } = renderLibrary({
      jsonSchema: { type: 'object', properties: {} },
    })

    expect(screen.getByText(/No fields yet/)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'New' }))
    expect(onCreateField).toHaveBeenCalledTimes(1)
  })

  it('opens a field for editing when its row is clicked', async () => {
    const { user, onSelectField } = renderLibrary()

    await user.click(screen.getByRole('button', { name: 'Edit projectLead' }))

    expect(onSelectField).toHaveBeenCalledWith('projectLead')
  })
})
