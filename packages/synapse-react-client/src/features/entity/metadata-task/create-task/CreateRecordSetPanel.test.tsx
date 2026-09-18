import { server } from '@/mocks/msw/server'
import { putEntitySchemaBindingHandler } from '@/mocks/msw/handlers/entityHandlers'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CreateRecordSetPanel from './CreateRecordSetPanel'
import {
  CREATE_RECORD_SET_NAME_LABEL,
  CREATE_RECORD_SET_PARENT_LABEL,
  CREATE_RECORD_SET_SCHEMA_ID_LABEL,
  CREATE_RECORD_SET_SUBMIT_BUTTON_LABEL,
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

describe('CreateRecordSetPanel', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('renders the parent, schema id, and name fields with the submit button disabled', () => {
    render(<CreateRecordSetPanel onCreated={vi.fn()} />, {
      wrapper: createWrapper(),
    })

    expect(
      screen.getByLabelText(
        new RegExp(`^${escapeRegex(CREATE_RECORD_SET_PARENT_LABEL)}`),
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText(
        new RegExp(`^${escapeRegex(CREATE_RECORD_SET_SCHEMA_ID_LABEL)}`),
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByLabelText(
        new RegExp(`^${escapeRegex(CREATE_RECORD_SET_NAME_LABEL)}`),
      ),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: CREATE_RECORD_SET_SUBMIT_BUTTON_LABEL,
      }),
    ).toBeDisabled()
  })

  it('derives ordered columns from the JSON Schema bound to the entered $id, once an upsert key is chosen', async () => {
    const user = userEvent.setup()
    render(<CreateRecordSetPanel onCreated={vi.fn()} />, {
      wrapper: createWrapper(),
    })

    await user.type(
      screen.getByLabelText(
        new RegExp(`^${escapeRegex(CREATE_RECORD_SET_SCHEMA_ID_LABEL)}`),
      ),
      'org.sagebionetworks-MockSchema',
    )

    const upsertKeyCombobox = await screen.findByRole('combobox', {
      name: /upsert key/i,
    })
    await user.click(upsertKeyCombobox)
    await user.click(await screen.findByRole('option', { name: 'country' }))
    await user.keyboard('{Escape}')

    const columnNames = screen
      .getAllByRole('listitem')
      .map(item => item.textContent)
    expect(columnNames).toEqual([
      'country',
      'showStringArray',
      'state',
      'province',
      'stringArray',
    ])
  })

  it('hides the column order UI until an upsert key is selected', async () => {
    const user = userEvent.setup()
    render(<CreateRecordSetPanel onCreated={vi.fn()} />, {
      wrapper: createWrapper(),
    })

    await user.type(
      screen.getByLabelText(
        new RegExp(`^${escapeRegex(CREATE_RECORD_SET_SCHEMA_ID_LABEL)}`),
      ),
      'org.sagebionetworks-MockSchema',
    )

    const upsertKeyCombobox = await screen.findByRole('combobox', {
      name: /upsert key/i,
    })
    expect(screen.queryAllByRole('listitem')).toHaveLength(0)
    expect(
      screen.queryByRole('button', { name: 'Move Up' }),
    ).not.toBeInTheDocument()

    await user.click(upsertKeyCombobox)
    await user.click(await screen.findByRole('option', { name: 'country' }))
    await user.keyboard('{Escape}')

    expect(screen.getAllByRole('listitem').length).toBeGreaterThan(0)
    expect(screen.getByRole('button', { name: 'Move Up' })).toBeInTheDocument()
  })

  it('keeps the submit button disabled until an upsert key is selected', async () => {
    const user = userEvent.setup()
    render(<CreateRecordSetPanel onCreated={vi.fn()} />, {
      wrapper: createWrapper(),
    })

    await user.type(
      screen.getByLabelText(CREATE_RECORD_SET_PARENT_LABEL),
      'syn111',
    )
    await user.type(
      screen.getByLabelText(
        new RegExp(`^${escapeRegex(CREATE_RECORD_SET_SCHEMA_ID_LABEL)}`),
      ),
      'org.sagebionetworks-MockSchema',
    )
    const upsertKeyCombobox = await screen.findByRole('combobox', {
      name: /upsert key/i,
    })
    await user.type(
      screen.getByLabelText(new RegExp(`^${CREATE_RECORD_SET_NAME_LABEL}`)),
      'My Record Set',
    )

    const submitButton = screen.getByRole('button', {
      name: CREATE_RECORD_SET_SUBMIT_BUTTON_LABEL,
    })
    expect(submitButton).toBeDisabled()

    await user.click(upsertKeyCombobox)
    await user.click(await screen.findByRole('option', { name: 'country' }))
    await user.keyboard('{Escape}')

    await waitFor(() => expect(submitButton).toBeEnabled())
  })

  it('reorders columns when a selected row is moved up', async () => {
    const user = userEvent.setup()
    render(<CreateRecordSetPanel onCreated={vi.fn()} />, {
      wrapper: createWrapper(),
    })

    await user.type(
      screen.getByLabelText(
        new RegExp(`^${escapeRegex(CREATE_RECORD_SET_SCHEMA_ID_LABEL)}`),
      ),
      'org.sagebionetworks-MockSchema',
    )
    const upsertKeyCombobox = await screen.findByRole('combobox', {
      name: /upsert key/i,
    })
    // Select "country", which is already first, so the list order below is unaffected.
    await user.click(upsertKeyCombobox)
    await user.click(await screen.findByRole('option', { name: 'country' }))
    await user.keyboard('{Escape}')

    await user.click(screen.getByRole('checkbox', { name: 'state' }))
    await user.click(screen.getByRole('button', { name: 'Move Up' }))

    const columnNames = screen
      .getAllByRole('listitem')
      .map(item => item.textContent)
    expect(columnNames).toEqual([
      'country',
      'state',
      'showStringArray',
      'province',
      'stringArray',
    ])
  })

  it('moves selected upsert key columns to the front, preserving the order the keys were selected in', async () => {
    const user = userEvent.setup()
    render(<CreateRecordSetPanel onCreated={vi.fn()} />, {
      wrapper: createWrapper(),
    })

    await user.type(
      screen.getByLabelText(
        new RegExp(`^${escapeRegex(CREATE_RECORD_SET_SCHEMA_ID_LABEL)}`),
      ),
      'org.sagebionetworks-MockSchema',
    )

    await user.click(
      await screen.findByRole('combobox', { name: /upsert key/i }),
    )
    await user.click(await screen.findByRole('option', { name: 'province' }))
    await user.click(screen.getByRole('option', { name: 'country' }))
    // Close the dropdown so the columns list underneath is queryable again.
    await user.keyboard('{Escape}')

    const columnNames = screen
      .getAllByRole('listitem')
      .map(item => item.textContent)
    expect(columnNames).toEqual([
      'province',
      'country',
      'showStringArray',
      'state',
      'stringArray',
    ])
  })

  it('creates the RecordSet, binds the schema, shows the success state, and notifies onCreated', async () => {
    const user = userEvent.setup()
    const onCreated = vi.fn()
    render(<CreateRecordSetPanel onCreated={onCreated} />, {
      wrapper: createWrapper(),
    })

    await user.type(
      screen.getByLabelText(CREATE_RECORD_SET_PARENT_LABEL),
      'syn111',
    )
    await user.type(
      screen.getByLabelText(
        new RegExp(`^${escapeRegex(CREATE_RECORD_SET_SCHEMA_ID_LABEL)}`),
      ),
      'org.sagebionetworks-MockSchema',
    )
    const upsertKeyCombobox = await screen.findByRole('combobox', {
      name: /upsert key/i,
    })
    await user.click(upsertKeyCombobox)
    await user.click(await screen.findByRole('option', { name: 'country' }))
    await user.keyboard('{Escape}')
    await user.type(
      screen.getByLabelText(new RegExp(`^${CREATE_RECORD_SET_NAME_LABEL}`)),
      'My Record Set',
    )

    const submitButton = screen.getByRole('button', {
      name: CREATE_RECORD_SET_SUBMIT_BUTTON_LABEL,
    })
    await waitFor(() => expect(submitButton).toBeEnabled())
    await user.click(submitButton)

    await waitFor(() =>
      expect(screen.getByText('RecordSet Created')).toBeInTheDocument(),
    )
    expect(screen.getByText(/My Record Set/)).toBeInTheDocument()
    expect(onCreated).toHaveBeenCalledTimes(1)
    expect(onCreated).toHaveBeenCalledWith(
      expect.objectContaining({ name: 'My Record Set', parentId: 'syn111' }),
    )
  })

  it('lets the user retry after a bind failure without re-creating the RecordSet', async () => {
    server.use(
      putEntitySchemaBindingHandler({ status: 500, reason: 'Bind failed' }),
    )

    const user = userEvent.setup()
    const onCreated = vi.fn()
    render(<CreateRecordSetPanel onCreated={onCreated} />, {
      wrapper: createWrapper(),
    })

    await user.type(
      screen.getByLabelText(CREATE_RECORD_SET_PARENT_LABEL),
      'syn111',
    )
    await user.type(
      screen.getByLabelText(
        new RegExp(`^${escapeRegex(CREATE_RECORD_SET_SCHEMA_ID_LABEL)}`),
      ),
      'org.sagebionetworks-MockSchema',
    )
    const upsertKeyCombobox = await screen.findByRole('combobox', {
      name: /upsert key/i,
    })
    await user.click(upsertKeyCombobox)
    await user.click(await screen.findByRole('option', { name: 'country' }))
    await user.keyboard('{Escape}')
    await user.type(
      screen.getByLabelText(new RegExp(`^${CREATE_RECORD_SET_NAME_LABEL}`)),
      'My Record Set',
    )

    const submitButton = screen.getByRole('button', {
      name: CREATE_RECORD_SET_SUBMIT_BUTTON_LABEL,
    })
    await waitFor(() => expect(submitButton).toBeEnabled())
    await user.click(submitButton)

    await waitFor(() =>
      expect(screen.getByText(/Bind failed/)).toBeInTheDocument(),
    )
    expect(onCreated).not.toHaveBeenCalled()

    // The bind now succeeds; retrying should reuse the already-created RecordSet.
    server.use(putEntitySchemaBindingHandler())
    await user.click(
      screen.getByRole('button', {
        name: CREATE_RECORD_SET_SUBMIT_BUTTON_LABEL,
      }),
    )

    await waitFor(() =>
      expect(screen.getByText('RecordSet Created')).toBeInTheDocument(),
    )
    expect(onCreated).toHaveBeenCalledTimes(1)
  })
})

function escapeRegex(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}
