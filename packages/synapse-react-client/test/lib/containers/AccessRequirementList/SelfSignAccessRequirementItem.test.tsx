import React from 'react'
import { FullContextProviderProps } from '../../../../src/lib/utils/FullContextProvider'
import { act, render, screen, waitFor } from '@testing-library/react'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { SynapseClient } from '../../../../src/lib'
import {
  AccessApproval,
  AccessRequirementStatus,
  ApprovalState,
} from '@sage-bionetworks/synapse-types'
import {
  mockAccessRequirementWikiPageKeys,
  mockSelfSignAccessRequirement,
  mockSelfSignAccessRequirementWikiPageKey,
  mockToUAccessRequirement,
} from '../../../../mocks/mockAccessRequirements'
import { MOCK_FILE_ENTITY_ID } from '../../../../mocks/entity/mockFileEntity'
import userEvent from '@testing-library/user-event'
import * as MarkdownSynapseModule from '../../../../src/lib/containers/markdown/MarkdownSynapse'
import { MarkdownSynapseProps } from '../../../../src/lib/containers/markdown/MarkdownSynapse'
import SelfSignAccessRequirementItem, {
  SelfSignAccessRequirementItemProps,
} from '../../../../src/lib/containers/AccessRequirementList/RequirementItem/SelfSignAccessRequirementItem'
import {
  MOCK_USER_ID,
  mockUserBundle,
  mockUserProfileData,
} from '../../../../mocks/user/mock_user_profile'

async function renderComponent(
  props: SelfSignAccessRequirementItemProps,
  wrapperProps?: FullContextProviderProps,
) {
  let renderReturn
  await act(async () => {
    renderReturn = render(<SelfSignAccessRequirementItem {...props} />, {
      wrapper: createWrapper(wrapperProps),
    })
  })
  return renderReturn
}

const mockOnHide = jest.fn()

function getDefaultProps(
  accessRequirement: SelfSignAccessRequirementItemProps['accessRequirement'],
): SelfSignAccessRequirementItemProps {
  return {
    accessRequirement,
    entityId: MOCK_FILE_ENTITY_ID,
    onHide: mockOnHide,
  }
}

const mockGetWikiPageKey = jest
  .spyOn(SynapseClient, 'getWikiPageKeyForAccessRequirement')
  .mockImplementation((_token, arId) => {
    return Promise.resolve(
      mockAccessRequirementWikiPageKeys.find(
        wpk => wpk.ownerObjectId === String(arId),
      ),
    )
  })

const mockCreateAccessApproval = jest.spyOn(
  SynapseClient,
  'createAccessApproval',
)

const mockGetAccessRequirementStatus = jest.spyOn(
  SynapseClient,
  'getAccessRequirementStatus',
)

jest
  .spyOn(SynapseClient, 'getUserProfile')
  .mockResolvedValue(mockUserProfileData)

const mockGetUserBundle = jest
  .spyOn(SynapseClient, 'getMyUserBundle')
  .mockResolvedValue(mockUserBundle)

function getAccessApproval(accessRequirementId: number): AccessApproval {
  return {
    id: 98765,
    etag: 'deadbeef',
    createdOn: '2023-04-24T15:29:04+00:00',
    modifiedOn: '2023-04-24T15:29:04+00:00',
    createdBy: String(MOCK_USER_ID),
    modifiedBy: String(MOCK_USER_ID),
    requirementId: accessRequirementId,
    submitterId: String(MOCK_USER_ID),
    accessorId: String(MOCK_USER_ID),
    state: ApprovalState.APPROVED,
  }
}

function getAccessRequirementStatus(
  accessRequirementId: string,
  isApproved: boolean,
): AccessRequirementStatus {
  return {
    accessRequirementId: String(accessRequirementId),
    concreteType:
      'org.sagebionetworks.repo.model.dataaccess.BasicAccessRequirementStatus',
    isApproved: isApproved,
  }
}

const mockRenderedMarkdown =
  'These are the AR instructions presented to the user.'
const mockMarkdownSynapse = jest
  .spyOn(MarkdownSynapseModule, 'default')
  .mockReturnValue(mockRenderedMarkdown)

async function testWikiToggle(expectedProps: MarkdownSynapseProps) {
  expect(screen.queryByText(mockRenderedMarkdown)).not.toBeInTheDocument()

  let toggle = await screen.findByRole('button', { name: 'View Terms' })
  await userEvent.click(toggle)

  await screen.findByText(mockRenderedMarkdown)
  expect(mockMarkdownSynapse).toHaveBeenCalledWith(
    expect.objectContaining(expectedProps),
    expect.anything(),
  )

  toggle = await screen.findByRole('button', { name: 'Hide Terms' })
  await userEvent.click(toggle)

  await waitFor(() =>
    expect(screen.queryByText(mockRenderedMarkdown)).not.toBeInTheDocument(),
  )
}

async function testWikiShownWithoutToggle(expectedProps: MarkdownSynapseProps) {
  await screen.findByText(mockRenderedMarkdown)
  expect(mockMarkdownSynapse).toHaveBeenCalledWith(
    expect.objectContaining(expectedProps),
    expect.anything(),
  )

  expect(
    screen.queryByRole('button', { name: /[View|Hide] Terms/ }),
  ).not.toBeInTheDocument()
}

const ACCEPT_BUTTON_TEXT = 'I Accept Terms of Use'
const REJECT_TERMS_BUTTON_TEXT = 'I do not accept'
describe('SelfSignAccessRequirementItem tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  describe('SelfSignAccessRequirement', () => {
    it('Creates an access approval on accept', async () => {
      mockGetAccessRequirementStatus.mockResolvedValue(
        getAccessRequirementStatus(
          String(mockSelfSignAccessRequirement.id),
          false,
        ),
      )

      mockCreateAccessApproval.mockResolvedValue(
        getAccessApproval(mockSelfSignAccessRequirement.id),
      )

      await renderComponent(getDefaultProps(mockSelfSignAccessRequirement))

      await testWikiShownWithoutToggle({
        wikiId: mockSelfSignAccessRequirementWikiPageKey.wikiPageId,
        ownerId: mockSelfSignAccessRequirementWikiPageKey.ownerObjectId,
        objectType: mockSelfSignAccessRequirementWikiPageKey.ownerObjectType,
      })

      const acceptTermsButton = await screen.findByRole('button', {
        name: ACCEPT_BUTTON_TEXT,
      })

      await userEvent.click(acceptTermsButton)

      expect(mockCreateAccessApproval).toHaveBeenCalled()
    })

    it('Calls onHide if not accept', async () => {
      mockGetAccessRequirementStatus.mockResolvedValue(
        getAccessRequirementStatus(
          String(mockSelfSignAccessRequirement.id),
          false,
        ),
      )

      await renderComponent(getDefaultProps(mockSelfSignAccessRequirement))

      const notAcceptButton = await screen.findByRole('button', {
        name: REJECT_TERMS_BUTTON_TEXT,
      })

      await userEvent.click(notAcceptButton)

      expect(mockOnHide).toHaveBeenCalled()
      expect(mockCreateAccessApproval).not.toHaveBeenCalled()
    })
    it('Handles APPROVED status', async () => {
      mockGetAccessRequirementStatus.mockResolvedValue(
        getAccessRequirementStatus(
          String(mockSelfSignAccessRequirement.id),
          true,
        ),
      )

      await renderComponent(getDefaultProps(mockSelfSignAccessRequirement))

      expect(
        screen.queryByRole('button', {
          name: ACCEPT_BUTTON_TEXT,
        }),
      ).not.toBeInTheDocument()

      await testWikiToggle({
        wikiId: mockSelfSignAccessRequirementWikiPageKey.wikiPageId,
        ownerId: mockSelfSignAccessRequirementWikiPageKey.ownerObjectId,
        objectType: mockSelfSignAccessRequirementWikiPageKey.ownerObjectType,
      })
    })
    it('Blocks if not certified when certification is required', async () => {
      const certificationRequired = true
      const verificationRequired = false
      mockGetUserBundle.mockResolvedValue({
        ...mockUserBundle,
        isCertified: false,
        isVerified: false,
      })
      mockGetAccessRequirementStatus.mockResolvedValue(
        getAccessRequirementStatus(
          String(mockSelfSignAccessRequirement.id),
          false,
        ),
      )

      await renderComponent(
        getDefaultProps({
          ...mockSelfSignAccessRequirement,
          isCertifiedUserRequired: certificationRequired,
          isValidatedProfileRequired: verificationRequired,
        }),
      )

      const acceptTermsButton = await screen.findByRole('button', {
        name: 'You must be certified to accept',
      })
      expect(acceptTermsButton).toBeDisabled()
    })
    it('Blocks if not verified when verification is required', async () => {
      const certificationRequired = false
      const verificationRequired = true
      mockGetUserBundle.mockResolvedValue({
        ...mockUserBundle,
        isCertified: false,
        isVerified: false,
      })
      mockGetAccessRequirementStatus.mockResolvedValue(
        getAccessRequirementStatus(
          String(mockSelfSignAccessRequirement.id),
          false,
        ),
      )

      await renderComponent(
        getDefaultProps({
          ...mockSelfSignAccessRequirement,
          isCertifiedUserRequired: certificationRequired,
          isValidatedProfileRequired: verificationRequired,
        }),
      )

      const acceptTermsButton = await screen.findByRole('button', {
        name: 'You must have a validated user profile to accept',
      })
      expect(acceptTermsButton).toBeDisabled()
    })
    it('Blocks if not certified and verified when both are required', async () => {
      const certificationRequired = true
      const verificationRequired = true
      mockGetUserBundle.mockResolvedValue({
        ...mockUserBundle,
        isCertified: false,
        isVerified: false,
      })
      mockGetAccessRequirementStatus.mockResolvedValue(
        getAccessRequirementStatus(
          String(mockSelfSignAccessRequirement.id),
          false,
        ),
      )

      await renderComponent(
        getDefaultProps({
          ...mockSelfSignAccessRequirement,
          isCertifiedUserRequired: certificationRequired,
          isValidatedProfileRequired: verificationRequired,
        }),
      )

      const acceptTermsButton = await screen.findByRole('button', {
        name: 'You must be certified and have a validated user profile to accept',
      })
      expect(acceptTermsButton).toBeDisabled()
    })
  })

  describe('TermsOfUseAccessRequirement', () => {
    it('Creates an access approval on accept', async () => {
      mockGetAccessRequirementStatus.mockResolvedValue(
        getAccessRequirementStatus(String(mockToUAccessRequirement.id), false),
      )

      mockCreateAccessApproval.mockResolvedValue(
        getAccessApproval(mockToUAccessRequirement.id),
      )

      await renderComponent(getDefaultProps(mockToUAccessRequirement))

      await testWikiShownWithoutToggle({
        markdown: mockToUAccessRequirement.termsOfUse,
      })

      const acceptTermsButton = await screen.findByRole('button', {
        name: ACCEPT_BUTTON_TEXT,
      })

      await userEvent.click(acceptTermsButton)

      expect(mockCreateAccessApproval).toHaveBeenCalled()
    })
    it('Calls onHide if terms not accepted', async () => {
      mockGetAccessRequirementStatus.mockResolvedValue(
        getAccessRequirementStatus(String(mockToUAccessRequirement.id), false),
      )

      await renderComponent(getDefaultProps(mockToUAccessRequirement))

      const notAcceptButton = await screen.findByRole('button', {
        name: REJECT_TERMS_BUTTON_TEXT,
      })

      await userEvent.click(notAcceptButton)

      expect(mockOnHide).toHaveBeenCalled()
      expect(mockCreateAccessApproval).not.toHaveBeenCalled()
    })

    it('Terms of use is not shown and toggleable if approved', async () => {
      mockGetAccessRequirementStatus.mockResolvedValue(
        getAccessRequirementStatus(String(mockToUAccessRequirement.id), true),
      )

      await renderComponent(getDefaultProps(mockToUAccessRequirement))

      expect(
        screen.queryByRole('button', {
          name: ACCEPT_BUTTON_TEXT,
        }),
      ).not.toBeInTheDocument()
      expect(
        screen.queryByRole('button', {
          name: REJECT_TERMS_BUTTON_TEXT,
        }),
      ).not.toBeInTheDocument()

      await testWikiToggle({
        markdown: mockToUAccessRequirement.termsOfUse,
      })
    })
  })
})
