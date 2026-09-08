import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import mockFileEntity, {
  MOCK_FILE_ENTITY_ID,
} from '@/mocks/entity/mockFileEntity'
import { getEntityBundleHandler } from '@/mocks/msw/handlers/entityHandlers'
import { server } from '@/mocks/msw/server'
import {
  mockOpenRestrictionInformation,
  mockUnmetControlledDataRestrictionInformationACT,
} from '@/mocks/mock_has_access_data'
import {
  RestrictionInformationResponse,
  UserEntityPermissions,
  RestrictionLevel,
} from '@sage-bionetworks/synapse-types'
import { http, HttpResponse } from 'msw'
import { render, screen } from '@testing-library/react'
import AccessAndPermissions from './AccessAndPermissions'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import userEvent from '@testing-library/user-event'
import * as AppUtilsModule from '@/utils/AppUtils'
import EntityAclEditorModal from '../EntityAclEditor/EntityAclEditorModal'
import useHasAccess from '../HasAccess/useHasAccess'

vi.mock('../HasAccess/useHasAccess', () => ({
  default: vi.fn(),
}))

vi.mock('@/utils/AppUtils', () => ({
  storeRedirectURLForOneSageLoginAndGotoURL: vi.fn(),
}))

vi.mock('@/utils/hooks/useOneSageURL', () => ({
  useOneSageURL: vi
    .fn()
    .mockReturnValue(new URL('https://accounts.synapse.org/login')),
}))

vi.mock('../EntityAclEditor/EntityAclEditorModal', () => ({
  default: vi.fn(() => null),
}))

const mockStoreRedirectURL = vi.mocked(
  AppUtilsModule.storeRedirectURLForOneSageLoginAndGotoURL,
)
const mockEntityAclEditorModal = vi.mocked(EntityAclEditorModal)
const mockOneSageURL = new URL('https://accounts.synapse.org/login')

type UseHasAccessReturn = ReturnType<typeof useHasAccess>

function createUseHasAccessReturn(
  overrides: Partial<UseHasAccessReturn> = {},
): UseHasAccessReturn {
  return {
    restrictionUiType: undefined,
    accessText: '',
    icon: <></>,
    handleGetAccess: vi.fn(),
    isClickable: false,
    accessRequirementDialog: null,
    setDisplayAccessRequirement: vi.fn(),
    ...overrides,
  }
}

const endpoint = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

function useMswEntityBundleWithPermissions(
  permissions: Partial<UserEntityPermissions>,
) {
  server.use(
    getEntityBundleHandler(endpoint, {
      ...mockFileEntity.bundle,
      permissions: {
        ...mockFileEntity.bundle.permissions,
        ...permissions,
      },
    }),
  )
}

function useMswRestrictionInformation(
  overrides: Partial<RestrictionInformationResponse>,
) {
  server.use(
    http.post(`${endpoint}/repo/v1/restrictionInformation`, () => {
      return HttpResponse.json(
        {
          ...mockOpenRestrictionInformation,
          ...overrides,
        } satisfies RestrictionInformationResponse,
        { status: 200 },
      )
    }),
  )
}

function renderComponent(isAuthenticated = true) {
  return render(<AccessAndPermissions entityId={MOCK_FILE_ENTITY_ID} />, {
    wrapper: createWrapper({ isAuthenticated }),
  })
}

describe('AccessAndPermissions', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    vi.clearAllMocks()
    vi.mocked(useHasAccess).mockReturnValue(createUseHasAccessReturn())
  })

  describe('unauthenticated', () => {
    it('shows only the sign-in button and no status rows', async () => {
      renderComponent(false)

      await screen.findByRole('button', { name: 'Sign in to your account' })
      expect(
        screen.queryByText('You can view metadata'),
      ).not.toBeInTheDocument()
      expect(screen.queryByText('You can download')).not.toBeInTheDocument()
    })

    it('calls storeRedirectURLForOneSageLoginAndGotoURL when sign-in is clicked', async () => {
      const user = userEvent.setup()
      renderComponent(false)

      await user.click(
        await screen.findByRole('button', { name: 'Sign in to your account' }),
      )
      expect(mockStoreRedirectURL).toHaveBeenCalledWith(
        mockOneSageURL.toString(),
      )
    })
  })

  describe('view metadata row', () => {
    it('shows correct text when user can view', async () => {
      useMswEntityBundleWithPermissions({ canView: true })
      useMswRestrictionInformation(mockOpenRestrictionInformation)
      renderComponent()

      await screen.findByText('You can view metadata')
    })

    it('shows correct text when user cannot view', async () => {
      useMswEntityBundleWithPermissions({ canView: false })
      renderComponent()

      await screen.findByText("You can't view metadata")
    })
  })

  describe('download row', () => {
    it('shows "You can download" when user has permission and no unmet ARs', async () => {
      useMswEntityBundleWithPermissions({ canDownload: true })
      useMswRestrictionInformation(mockOpenRestrictionInformation)
      renderComponent()

      await screen.findByText('You can download')
    })

    it('shows "You must request access to download" when there are unmet ARs', async () => {
      useMswEntityBundleWithPermissions({ canDownload: true })
      useMswRestrictionInformation(
        mockUnmetControlledDataRestrictionInformationACT,
      )
      renderComponent()

      await screen.findByText('You must request access to download')
    })

    it('shows "You don\'t have permission to download" when user lacks download permission', async () => {
      useMswEntityBundleWithPermissions({ canDownload: false })
      renderComponent()

      await screen.findByText("You don't have permission to download")
    })
  })

  describe('access button', () => {
    it('does not show access button when restriction level is OPEN', async () => {
      useMswRestrictionInformation({
        ...mockOpenRestrictionInformation,
        restrictionLevel: RestrictionLevel.OPEN,
      })
      renderComponent()

      await screen.findByText('You can view metadata')

      expect(
        screen.queryByRole('button', { name: 'Request to download' }),
      ).not.toBeInTheDocument()
      expect(
        screen.queryByRole('button', { name: 'View Terms' }),
      ).not.toBeInTheDocument()
    })

    it('shows "View Terms" when ARs are met but restriction level is not OPEN', async () => {
      useMswRestrictionInformation({
        restrictionLevel: RestrictionLevel.CONTROLLED_BY_ACT,
        hasUnmetAccessRequirement: false,
      })
      renderComponent()

      await screen.findByRole('button', { name: 'View Terms' })
    })

    it('calls handleGetAccess when access button is clicked', async () => {
      const mockHandleGetAccess = vi.fn()
      vi.mocked(useHasAccess).mockReturnValue({
        ...createUseHasAccessReturn(),
        handleGetAccess: mockHandleGetAccess,
      })
      useMswRestrictionInformation({
        restrictionLevel: RestrictionLevel.CONTROLLED_BY_ACT,
        hasUnmetAccessRequirement: true,
      })
      const user = userEvent.setup()
      renderComponent()

      await user.click(
        await screen.findByRole('button', { name: 'Request to download' }),
      )
      expect(mockHandleGetAccess).toHaveBeenCalledOnce()
    })
  })

  describe('sharing settings', () => {
    it('shows sharing settings button when authenticated', async () => {
      renderComponent()

      await screen.findByRole('button', { name: 'Sharing Settings' })
    })

    it('opens the ACL editor modal when sharing settings is clicked', async () => {
      const user = userEvent.setup()
      renderComponent()

      expect(mockEntityAclEditorModal).toHaveBeenLastRenderedWithProps(
        expect.objectContaining({ open: false }),
      )

      await user.click(
        await screen.findByRole('button', { name: 'Sharing Settings' }),
      )

      expect(mockEntityAclEditorModal).toHaveBeenLastRenderedWithProps(
        expect.objectContaining({ open: true }),
      )
    })
  })
})
