import mockFileEntity from '@/mocks/entity/mockFileEntity'
import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import { server } from '@/mocks/msw/server'
import { MOCK_USER_ID_2 } from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseContextType } from '@/utils'
import { ENTITY_BUNDLE_V2 } from '@/utils/APIConstants'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { AUTHENTICATED_PRINCIPAL_ID } from '@/utils/SynapseConstants'
import {
  ACCESS_TYPE,
  EntityBundle,
  ErrorResponse,
  FeatureFlagEnum,
} from '@sage-bionetworks/synapse-types'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import EntityAclEditorModal from '../EntityAclEditor/EntityAclEditorModal'
import {
  REQUEST_DOWNLOAD_TITLE,
  RequestDownloadCard,
  RequestDownloadCardProps,
} from './RequestDownloadCard'

vi.mock('../EntityAclEditor/EntityAclEditorModal', () => ({
  default: vi.fn(() => null),
}))

const mockEntityAclEditorModal = vi.mocked(EntityAclEditorModal)

const ENTITY_ID = 'syn29218'
const onViewSharingSettingsClicked = vi.fn()
const defaultProps: RequestDownloadCardProps = {
  entityId: ENTITY_ID,
  count: 10,
  onViewSharingSettingsClicked,
}

const setupEntityBundleResponse = (canDownload: boolean) => {
  const mockEntityBundleResult: Partial<EntityBundle> = {
    entity: {
      ...mockFileEntity.entity,
      id: ENTITY_ID,
    },
    benefactorAcl: {
      id: ENTITY_ID,
      resourceAccess: [
        {
          principalId: MOCK_USER_ID_2,
          accessType: [ACCESS_TYPE.CHANGE_PERMISSIONS],
        },
        {
          principalId: AUTHENTICATED_PRINCIPAL_ID,
          accessType: [ACCESS_TYPE.READ],
        },
      ],
    },
    permissions: {
      canDownload: canDownload,
      canView: false,
      canEdit: false,
      canMove: false,
      canAddChild: false,
      canCertifiedUserEdit: false,
      canCertifiedUserAddChild: false,
      isCertifiedUser: false,
      canChangePermissions: false,
      canChangeSettings: false,
      canDelete: false,
      canUpload: false,
      canEnableInheritance: false,
      ownerPrincipalId: 0,
      canPublicRead: false,
      canModerate: false,
      isCertificationRequired: false,
      isEntityOpenData: false,
      isUserDataContributor: false,
    },
  }
  server.use(
    http.post(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
        ENTITY_ID,
      )}`,
      () => {
        return HttpResponse.json(mockEntityBundleResult, { status: 200 })
      },
    ),
  )
}
function renderComponent(wrapperProps?: SynapseContextType) {
  render(<RequestDownloadCard {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('RequestDownloadCard tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Show a Request Download Card', async () => {
    setupEntityBundleResponse(false)
    renderComponent()
    await screen.findByText(REQUEST_DOWNLOAD_TITLE)

    const viewSharingSettingsButton = await screen.findByRole('button', {
      name: 'View Sharing Settings',
    })
    await userEvent.click(viewSharingSettingsButton)
    expect(onViewSharingSettingsClicked).toHaveBeenLastCalledWith(ENTITY_ID)
  })

  it('Shows the sharing settings dialog when the feature is enabled', async () => {
    server.use(
      getFeatureFlagsOverride({
        portalOrigin: getEndpoint(BackendDestinationEnum.PORTAL_ENDPOINT),
        overrides: { [FeatureFlagEnum.REACT_ENTITY_ACL_EDITOR]: true },
      }),
    )
    setupEntityBundleResponse(false)
    renderComponent()
    await screen.findByText(REQUEST_DOWNLOAD_TITLE)

    expect(mockEntityAclEditorModal).toHaveBeenLastRenderedWithProps(
      expect.objectContaining({
        open: false,
      }),
    )

    const viewSharingSettingsButton = await screen.findByRole('button', {
      name: 'View Sharing Settings',
    })
    await userEvent.click(viewSharingSettingsButton)

    expect(mockEntityAclEditorModal).toHaveBeenLastRenderedWithProps(
      expect.objectContaining({
        open: true,
      }),
    )

    const onCloseDialog = mockEntityAclEditorModal.mock.lastCall![0].onClose
    expect(onCloseDialog).toBeDefined()
    act(() => {
      onCloseDialog()
    })

    expect(mockEntityAclEditorModal).toHaveBeenLastRenderedWithProps(
      expect.objectContaining({
        open: false,
      }),
    )
  })

  it('Indicates the action is complete if the user can download the entity', async () => {
    setupEntityBundleResponse(true)
    renderComponent()

    const viewSharingSettingsButton = await screen.findByRole('button', {
      name: 'Complete',
    })
    expect(viewSharingSettingsButton).toBeDisabled()
  })

  it('Show an alert on error', async () => {
    const reason = `Entity ${ENTITY_ID} is in trash can.`
    const errorResponse: ErrorResponse = {
      concreteType: 'org.sagebionetworks.repo.model.ErrorResponse',
      reason: reason,
    }
    server.use(
      http.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
          ENTITY_ID,
        )}`,
        () => {
          return HttpResponse.json(errorResponse, { status: 404 })
        },
      ),
    )

    renderComponent()

    await screen.findByText(reason)
  })
})
