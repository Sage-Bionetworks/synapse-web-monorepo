import {
  MOCK_MULTI_VERSION_SCHEMA_NAME,
  MOCK_ORGANIZATION_SAGEBIONETWORKS_NAME,
} from '@/mocks/jsonschema/mockJsonSchemaListing'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { JsonSchemaPickerModal } from './JsonSchemaPickerModal'

// @tanstack/react-virtual requires layout metrics that JSDOM does not compute, and JSDOM's
// ResizeObserver polyfill eventually "corrects" measured sizes to 0. See
// JsonSchemaPicker.test.tsx for a fuller explanation of both workarounds.
Object.defineProperty(HTMLElement.prototype, 'offsetHeight', { value: 800 })
Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { value: 800 })
const originalResizeObserver = window.ResizeObserver

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
  const row = (await within(table).findByText(schemaName)).closest('tr')!
  await userEvent.click(within(row).getByRole('checkbox'))
  return row
}

describe('JsonSchemaPickerModal', () => {
  beforeAll(() => {
    server.listen()
    // @ts-expect-error -- intentionally disabling for this suite
    window.ResizeObserver = undefined
  })
  afterEach(() => server.resetHandlers())
  afterAll(() => {
    server.close()
    window.ResizeObserver = originalResizeObserver
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
