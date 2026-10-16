import { mockEditableJsonSchemaAR } from '@/mocks/accessRequirement/mockJsonSchemaAccessRequirements'
import { MOCK_ACCESS_TOKEN } from '@/mocks/MockSynapseContext'
import { server } from '@/mocks/msw/server'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ACCESS_REQUIREMENT_BY_ID } from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { DAY_IN_MS } from '@/utils/SynapseConstants'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { createRef } from 'react'
import {
  SetManagedAccessRequirementFields,
  SetManagedAccessRequirementFieldsHandle,
} from './SetManagedAccessRequirementFields'

const onSave = vi.fn()
const onError = vi.fn()
const updateAccessRequirementSpy = vi.spyOn(
  SynapseClient,
  'updateAccessRequirement',
)

async function renderForJsonSchemaAccessRequirement() {
  server.use(
    http.get(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ACCESS_REQUIREMENT_BY_ID(':id')}`,
      () => HttpResponse.json(mockEditableJsonSchemaAR, { status: 200 }),
    ),
  )
  const ref = createRef<SetManagedAccessRequirementFieldsHandle>()
  render(
    <SetManagedAccessRequirementFields
      ref={ref}
      accessRequirementId={mockEditableJsonSchemaAR.id!.toString()}
      onSave={onSave}
      onError={onError}
    />,
    { wrapper: createWrapper() },
  )
  await screen.findByRole('textbox', { name: 'Expiration period (days)' })
  return { ref }
}

describe('SetManagedAccessRequirementFields for a JsonSchemaAccessRequirement', () => {
  beforeEach(() => vi.clearAllMocks())
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  test('shows the settings shared with a ManagedACTAccessRequirement', async () => {
    await renderForJsonSchemaAccessRequirement()

    expect(
      screen.getByRole('checkbox', { name: 'Accessors must be certified.' }),
    ).toBeChecked()
    expect(
      screen.getByRole('checkbox', {
        name: 'Accessors must have a validated profile.',
      }),
    ).toBeChecked()
    expect(
      screen.getByRole('checkbox', {
        name: 'Accessors must use two-factor authentication (2FA).',
      }),
    ).toBeChecked()
    expect(
      screen.getByRole('checkbox', { name: 'DUC is required.' }),
    ).toBeChecked()
    expect(
      screen.getByRole('textbox', { name: 'Expiration period (days)' }),
    ).toHaveValue(
      (mockEditableJsonSchemaAR.expirationPeriod! / DAY_IN_MS).toString(),
    )
  })

  test('omits the settings that only a ManagedACTAccessRequirement has', async () => {
    await renderForJsonSchemaAccessRequirement()

    expect(
      screen.queryByRole('checkbox', { name: 'IRB approval is required.' }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('checkbox', {
        name: 'Other documents are required.',
      }),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByRole('checkbox', {
        name: 'Intended Data Use statement is required.',
      }),
    ).not.toBeInTheDocument()
  })

  test('saves changes while keeping the pinned form template version', async () => {
    const user = userEvent.setup()
    const { ref } = await renderForJsonSchemaAccessRequirement()

    await user.click(
      screen.getByRole('checkbox', {
        name: 'Accessors must use two-factor authentication (2FA).',
      }),
    )
    ref.current?.save()

    await waitFor(() => {
      expect(updateAccessRequirementSpy).toHaveBeenCalledWith(
        MOCK_ACCESS_TOKEN,
        { ...mockEditableJsonSchemaAR, isTwoFaRequired: false },
      )
      expect(onSave).toHaveBeenCalledTimes(1)
    })
  })
})
