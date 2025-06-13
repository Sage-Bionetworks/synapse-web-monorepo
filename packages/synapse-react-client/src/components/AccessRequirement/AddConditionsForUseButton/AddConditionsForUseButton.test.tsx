import mockFileEntity from '@/mocks/entity/mockFileEntity'
import { mockUnmetControlledDataRestrictionInformationACT } from '@/mocks/mock_has_access_data'
import { getEntityBundleHandler } from '@/mocks/msw/handlers/entityHandlers'
import { server } from '@/mocks/msw/server'
import { mockUserBundle } from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { USER_BUNDLE } from '@/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { EntityBundle, UserBundle } from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import AddConditionsForUseButton, {
  AddConditionsForUseButtonProps,
} from './AddConditionsForUseButton'

function renderComponent(props: AddConditionsForUseButtonProps) {
  return render(<AddConditionsForUseButton {...props} />, {
    wrapper: createWrapper(),
  })
}

const mockCallback = vi.fn()

// Adding this mock service worker handler will make the component recognize the caller as an ACT member
function setIsCurrentUserMemberOfACT(isActMember: boolean) {
  server.use(
    http.get(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_BUNDLE}`,
      () => {
        const result: UserBundle = {
          ...mockUserBundle,
          isACTMember: isActMember,
        }
        return HttpResponse.json(result, { status: 200 })
      },
    ),
  )
}

describe('AddConditionsForUseButton', () => {
  beforeAll(() => {
    server.listen()
    setIsCurrentUserMemberOfACT(false)
  })

  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Shows dialog on click', async () => {
    renderComponent({
      entityId: mockFileEntity.id,
      onACTMemberClick: mockCallback,
    })

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    const button = await screen.findByRole('button', {
      name: 'Add Conditions for Use',
    })
    await userEvent.click(button)

    await screen.findByRole('dialog')
    expect(mockCallback).not.toHaveBeenCalled()
  })

  it('Invoked callback on click if the user is an ACT member', async () => {
    setIsCurrentUserMemberOfACT(true)

    renderComponent({
      entityId: mockFileEntity.id,
      onACTMemberClick: mockCallback,
    })

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    const button = await screen.findByRole('button', {
      name: 'Add Conditions for Use',
    })

    await userEvent.click(button)
    await waitFor(() => expect(mockCallback).toHaveBeenCalled())

    // No dialog should appear for ACT users
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('Button is not shown if there are restrictions', () => {
    const bundle: EntityBundle = {
      ...mockFileEntity.bundle,
      restrictionInformation: mockUnmetControlledDataRestrictionInformationACT,
    }
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        bundle,
      ),
    )

    renderComponent({
      entityId: mockFileEntity.id,
      onACTMemberClick: mockCallback,
    })

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it("Button is not shown if the user doesn't have permission to impose restrictions", () => {
    const bundle: EntityBundle = {
      ...mockFileEntity.bundle,
      permissions: {
        ...mockFileEntity.bundle.permissions,
        canChangePermissions: false,
      },
    }
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        bundle,
      ),
    )

    renderComponent({
      entityId: mockFileEntity.id,
      onACTMemberClick: mockCallback,
    })

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
