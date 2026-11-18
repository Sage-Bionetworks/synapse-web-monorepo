import { mockManagedACTAccessRequirement } from '@/mocks/accessRequirement/mockAccessRequirements'
import '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { getIdentityProviderDisplayName } from '@/utils/functions/IdentityProviderNameUtils'
import { IdentityProviderName } from '@sage-bionetworks/synapse-client'
import { AuthenticateWithIdentityProvider } from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import { ActionRequiredListItem } from './ActionRequiredListItem'
import { getAuthenticateWithIdentityProviderCardTitle } from './AuthenticateWithIdentityProviderCard'

function renderAction(action: AuthenticateWithIdentityProvider) {
  render(<ActionRequiredListItem action={action} count={10} />, {
    wrapper: createWrapper(),
  })
}

const baseAction: AuthenticateWithIdentityProvider = {
  concreteType:
    'org.sagebionetworks.repo.model.download.AuthenticateWithIdentityProvider',
  accessRequirementId: mockManagedACTAccessRequirement.id,
}

describe('AuthenticateWithIdentityProviderCard', () => {
  it('names every accepted identity provider in the title', () => {
    expect(
      getAuthenticateWithIdentityProviderCardTitle([
        IdentityProviderName.NIH_RESEARCHER_AUTH_SERVICE,
        IdentityProviderName.ORCID,
      ]),
    ).toBe(
      `Requires Sign-in with ${getIdentityProviderDisplayName(
        IdentityProviderName.NIH_RESEARCHER_AUTH_SERVICE,
      )} or ${getIdentityProviderDisplayName(IdentityProviderName.ORCID)}`,
    )
  })

  it('renders the backend action with its accepted identity providers', async () => {
    const identityProviders = [IdentityProviderName.NIH_RESEARCHER_AUTH_SERVICE]
    renderAction({ ...baseAction, identityProviders })

    await screen.findByText(
      getAuthenticateWithIdentityProviderCardTitle(identityProviders),
    )
    await screen.findByText(mockManagedACTAccessRequirement.name)
    expect(screen.getByRole('button', { name: 'Start' })).toBeEnabled()
  })

  it('renders the backend action when it omits the identity providers', async () => {
    renderAction(baseAction)

    expect(
      await screen.findByText(getAuthenticateWithIdentityProviderCardTitle([])),
    ).toBeVisible()
    await screen.findByText(mockManagedACTAccessRequirement.name)
  })
})
