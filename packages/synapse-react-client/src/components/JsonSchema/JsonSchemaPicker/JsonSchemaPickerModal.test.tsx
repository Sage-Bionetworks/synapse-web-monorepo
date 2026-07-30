import {
  MOCK_MULTI_VERSION_SCHEMA_NAME,
  MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
} from '@/mocks/jsonschema/mockJsonSchemaListing'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { mockVirtualizedTableLayout } from '@/testutils/VirtualizedTableTestUtils'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { JsonSchemaPickerModal } from './JsonSchemaPickerModal'

function renderModal(
  props: Partial<
    Omit<Parameters<typeof JsonSchemaPickerModal>[0], 'onConfirm' | 'onCancel'>
  > = {},
) {
  const onConfirm = vi.fn()
  const onCancel = vi.fn()
  const result = render(
    <JsonSchemaPickerModal
      open
      onConfirm={onConfirm}
      onCancel={onCancel}
      {...props}
    />,
    { wrapper: createWrapper() },
  )
  return { ...result, onConfirm, onCancel }
}

async function selectSchema(schemaName: string) {
  const combobox = screen.getByRole('combobox', { name: 'Organization' })
  await userEvent.click(combobox)
  const option = await screen.findByRole('option', {
    name: MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
  })
  await userEvent.click(option)

  const table = await screen.findByRole('table')
  await within(table).findByText(schemaName)
  const row = within(table)
    .getAllByRole('row')
    .find(row => within(row).queryByText(schemaName))!
  await userEvent.click(
    within(row).getByRole('checkbox', { name: `Select ${schemaName}` }),
  )
  return row
}

describe('JsonSchemaPickerModal', () => {
  let restoreVirtualizedTableLayout: () => void
  beforeAll(() => {
    server.listen()
    restoreVirtualizedTableLayout = mockVirtualizedTableLayout()
  })
  afterEach(() => server.resetHandlers())
  afterAll(() => {
    server.close()
    restoreVirtualizedTableLayout()
  })

  it('renders the default title and confirm button copy', () => {
    renderModal()
    expect(screen.getByText('Select a Schema')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Add Selected Schema' }),
    ).toBeInTheDocument()
  })

  it('disables the confirm button until a selection is made, then enables it', async () => {
    renderModal()

    const confirmButton = screen.getByRole('button', {
      name: 'Add Selected Schema',
    })
    expect(confirmButton).toBeDisabled()

    await selectSchema(MOCK_MULTI_VERSION_SCHEMA_NAME)

    await waitFor(() => expect(confirmButton).toBeEnabled(), { timeout: 3000 })
  })

  it('calls onConfirm with the selected schema $id and versionInfo', async () => {
    const { onConfirm } = renderModal()

    await selectSchema(MOCK_MULTI_VERSION_SCHEMA_NAME)

    const confirmButton = screen.getByRole('button', {
      name: 'Add Selected Schema',
    })
    await waitFor(() => expect(confirmButton).toBeEnabled(), { timeout: 3000 })
    await userEvent.click(confirmButton)

    expect(onConfirm).toHaveBeenCalledWith({
      $id: expect.stringContaining(MOCK_MULTI_VERSION_SCHEMA_NAME),
      versionInfo: expect.objectContaining({
        schemaName: MOCK_MULTI_VERSION_SCHEMA_NAME,
      }),
    })
  })

  it('calls onCancel when Cancel is clicked, without calling onConfirm', async () => {
    const { onCancel, onConfirm } = renderModal()

    await userEvent.click(screen.getByRole('button', { name: 'Cancel' }))

    expect(onCancel).toHaveBeenCalledTimes(1)
    expect(onConfirm).not.toHaveBeenCalled()
  })

  it('does not carry a selection across a cancel and reopen', async () => {
    const { rerender, onConfirm, onCancel } = renderModal()

    await selectSchema(MOCK_MULTI_VERSION_SCHEMA_NAME)
    const confirmButton = screen.getByRole('button', {
      name: 'Add Selected Schema',
    })
    await waitFor(() => expect(confirmButton).toBeEnabled(), { timeout: 3000 })

    rerender(
      <JsonSchemaPickerModal
        open={false}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />,
    )
    rerender(
      <JsonSchemaPickerModal open onConfirm={onConfirm} onCancel={onCancel} />,
    )

    expect(
      screen.getByRole('button', { name: 'Add Selected Schema' }),
    ).toBeDisabled()
  })

  it('enables the confirm button immediately when opened with an initialSelected', () => {
    renderModal({
      initialSelected: {
        $id: `${MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME}-${MOCK_MULTI_VERSION_SCHEMA_NAME}-1.1.0`,
        versionInfo: {
          organizationName: MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
          schemaId: '103',
          schemaName: MOCK_MULTI_VERSION_SCHEMA_NAME,
          versionId: '2',
          $id: `${MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME}-${MOCK_MULTI_VERSION_SCHEMA_NAME}-1.1.0`,
          semanticVersion: '1.1.0',
        },
      },
    })

    expect(
      screen.getByRole('button', { name: 'Add Selected Schema' }),
    ).toBeEnabled()
  })

  it('supports custom title and confirm button copy', () => {
    renderModal({
      title: 'Choose a Template',
      confirmButtonCopy: 'Use Template',
    })

    expect(screen.getByText('Choose a Template')).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: 'Use Template' }),
    ).toBeInTheDocument()
  })
})
