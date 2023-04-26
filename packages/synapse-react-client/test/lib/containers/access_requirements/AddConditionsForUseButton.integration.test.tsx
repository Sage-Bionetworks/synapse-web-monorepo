import React from 'react'
import {
  EntityBundle,
  UserBundle,
} from '../../../../src/lib/utils/synapseTypes'
import AddConditionsForUseButton, {
  AddConditionsForUseButtonProps,
} from '../../../../src/lib/containers/access_requirements/AddConditionsForUseButton'
import { render, screen, waitFor } from '@testing-library/react'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { rest, server } from '../../../../mocks/msw/server'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../../src/lib/utils/functions/getEndpoint'
import {
  ENTITY_BUNDLE_V2,
  USER_BUNDLE,
} from '../../../../src/lib/utils/APIConstants'
import mockFileEntity from '../../../../mocks/entity/mockFileEntity'
import userEvent from '@testing-library/user-event'
import { mockUnmetControlledDataRestrictionInformationACT } from '../../../../mocks/mock_has_access_data'
import { mockUserBundle } from '../../../../mocks/user/mock_user_profile'

function renderComponent(props: AddConditionsForUseButtonProps) {
  return render(<AddConditionsForUseButton {...props} />, {
    wrapper: createWrapper(),
  })
}

const mockCallback = jest.fn()

// Adding this mock service worker handler will make the component recognize the caller as an ACT member
function setIsCurrentUserMemberOfACT(isActMember: boolean) {
  server.use(
    rest.get(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${USER_BUNDLE}`,
      async (req, res, ctx) => {
        const result: UserBundle = {
          ...mockUserBundle,
          isACTMember: isActMember,
        }
        return res(ctx.status(200), ctx.json(result))
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
    server.use(
      rest.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
          ':entity',
        )}`,
        async (req, res, ctx) => {
          const result: EntityBundle = {
            ...mockFileEntity.bundle,
            restrictionInformation:
              mockUnmetControlledDataRestrictionInformationACT,
          }
          return res(ctx.status(200), ctx.json(result))
        },
      ),
    )

    renderComponent({
      entityId: mockFileEntity.id,
      onACTMemberClick: mockCallback,
    })

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it("Button is not shown if the user doesn't have permission to impose restrictions", () => {
    server.use(
      rest.get(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
          ':entity',
        )}`,
        async (req, res, ctx) => {
          const result: EntityBundle = {
            ...mockFileEntity.bundle,
            permissions: {
              ...mockFileEntity.bundle?.permissions,
              canChangePermissions: false,
            },
          }
          return res(ctx.status(200), ctx.json(result))
        },
      ),
    )

    renderComponent({
      entityId: mockFileEntity.id,
      onACTMemberClick: mockCallback,
    })

    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })
})
