import { mockEditableJsonSchemaAR } from '@/mocks/accessRequirement/mockJsonSchemaAccessRequirements'
import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { ACCESS_REQUIREMENT_BY_ID } from '@/utils/APIConstants'
import { FeatureFlagEnum } from '@/utils/featureflag/FeatureFlags'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import CreateOrUpdateAccessRequirementWizard from './CreateOrUpdateAccessRequirementWizard'

const REPO_ENDPOINT = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

async function editJsonSchemaAccessRequirement(schemaDrivenEnabled: boolean) {
  server.use(
    getFeatureFlagsOverride({
      portalOrigin: getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT),
      overrides: {
        [FeatureFlagEnum.ACT_DASHBOARD_FORM_TEMPLATES]: schemaDrivenEnabled,
      },
    }),
    http.get(`${REPO_ENDPOINT}${ACCESS_REQUIREMENT_BY_ID(':id')}`, () =>
      HttpResponse.json(mockEditableJsonSchemaAR, { status: 200 }),
    ),
  )
  const user = userEvent.setup()
  render(
    <CreateOrUpdateAccessRequirementWizard
      open
      accessRequirementId={mockEditableJsonSchemaAR.id!.toString()}
      onCancel={vi.fn()}
      onComplete={vi.fn()}
    />,
    { wrapper: createWrapper() },
  )
  await screen.findByRole('textbox', { name: 'Name' })
  await user.click(screen.getByRole('button', { name: 'Save & Continue' }))
  return { user }
}

describe('CreateOrUpdateAccessRequirementWizard for a JsonSchemaAccessRequirement', () => {
  test('continues to the managed AR settings and reviewer permissions when the feature is enabled', async () => {
    const { user } = await editJsonSchemaAccessRequirement(true)

    await screen.findByText('Data Access Request Parameters')
    expect(
      screen.getByRole('checkbox', {
        name: 'Accessors must use two-factor authentication (2FA).',
      }),
    ).toBeChecked()

    await user.click(screen.getByRole('button', { name: 'Save & Continue' }))
    expect(
      await screen.findByRole('heading', {
        name: 'Access Requirement Permissions',
      }),
    ).toBeVisible()
  })

  test('continues to the basic AR settings when the feature is disabled', async () => {
    await editJsonSchemaAccessRequirement(false)

    await screen.findByRole('button', { name: 'Save' })
    expect(
      screen.queryByText('Data Access Request Parameters'),
    ).not.toBeInTheDocument()
  })
})
