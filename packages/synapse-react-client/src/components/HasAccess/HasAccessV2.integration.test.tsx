import { render, screen } from '@testing-library/react'
import React from 'react'
import { HasAccessV2, HasAccessProps } from './HasAccessV2'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../utils/functions/getEndpoint'
import { SRC_SIGN_IN_CLASS } from '../../utils/SynapseConstants'
import { SynapseContextType } from '../../utils/context/SynapseContext'
import {
  EntityBundle,
  RestrictableObjectType,
  RestrictionInformationRequest,
  RestrictionInformationResponse,
} from '@sage-bionetworks/synapse-types'
import { mockFolderEntity } from '../../mocks/entity/mockEntity'
import mockFileEntityData from '../../mocks/entity/mockFileEntity'
import { MOCK_CONTEXT_VALUE } from '../../mocks/MockSynapseContext'
import {
  mockOpenRestrictionInformation,
  mockUnmetControlledDataRestrictionInformationACT,
  mockUnmetControlledDataRestrictionInformationRestricted,
} from '../../mocks/mock_has_access_data'
import { rest, server } from '../../mocks/msw/server'
import { getEntityBundleHandler } from '../../mocks/msw/handlers/entityHandlers'

const entityId = mockFileEntityData.id
const mockFileEntityBundle = mockFileEntityData.bundle

const renderComponent = (
  props: HasAccessProps,
  wrapperProps?: Partial<SynapseContextType>,
) => {
  return render(<HasAccessV2 {...props} />, {
    wrapper: createWrapper(wrapperProps),
  })
}
const props: HasAccessProps = {
  entityId,
}

const expectIcon = async (iconName: string, tooltipText: string) => {
  const icon = await screen.findByRole('img')
  expect(icon).toHaveAccessibleName(tooltipText)
  expect(icon.getAttribute('data-svg')).toEqual(iconName)
}
const expectSignInButton = async () => {
  const button = await screen.findByRole('button')
  expect(button).toHaveTextContent('')
  expect(button).toHaveClass(SRC_SIGN_IN_CLASS)
}
const expectArButton = async (linkText: string) => {
  const button = await screen.findByRole('button')
  expect(button).toHaveTextContent(linkText)
  expect(button).not.toHaveClass(SRC_SIGN_IN_CLASS)
}

const onGetRestrictionInformation = jest.fn()

function useMswEntityBundle(entityBundle: EntityBundle) {
  server.use(
    getEntityBundleHandler(
      getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
      entityBundle,
    ),
  )
}

function useMswRestrictionInformation(
  restrictionInformation: RestrictionInformationResponse,
) {
  server.use(
    rest.post(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}/repo/v1/restrictionInformation`,
      async (req, res, ctx) => {
        onGetRestrictionInformation(req.body)
        return res(ctx.status(200), ctx.json(restrictionInformation))
      },
    ),
  )
}

describe('HasAccess tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('User has all permissions on a standard FileEntity and any Access Requirements have been met', async () => {
    const entityBundle: EntityBundle = {
      ...mockFileEntityBundle,
      permissions: {
        ...mockFileEntityBundle.permissions,
        canDownload: true,
      },
    }
    useMswEntityBundle(entityBundle)
    useMswRestrictionInformation(mockOpenRestrictionInformation)

    renderComponent(props)

    await expectIcon('accessOpen', '')
    expect(screen.queryByRole('button')).not.toBeInTheDocument()

    const expectedRestrictionInformationRequest: RestrictionInformationRequest =
      {
        restrictableObjectType: RestrictableObjectType.ENTITY,
        objectId: entityId,
      }

    expect(onGetRestrictionInformation).toHaveBeenLastCalledWith(
      expectedRestrictionInformationRequest,
    )
  })

  it('The entity is a Folder entity', async () => {
    const entityBundle: EntityBundle = {
      ...mockFileEntityBundle,
      entity: mockFolderEntity,
      permissions: {
        ...mockFileEntityBundle.permissions,
        canDownload: true,
      },
    }
    useMswEntityBundle(entityBundle)
    useMswRestrictionInformation(mockOpenRestrictionInformation)

    renderComponent(props)

    await expectIcon('accessOpen', '')
    expect(screen.queryByRole('button')).not.toBeInTheDocument()

    const expectedRestrictionInformationRequest: RestrictionInformationRequest =
      {
        restrictableObjectType: RestrictableObjectType.ENTITY,
        objectId: entityId,
      }

    expect(onGetRestrictionInformation).toHaveBeenLastCalledWith(
      expectedRestrictionInformationRequest,
    )
  })

  describe('Authorization blocked by ACL', () => {
    it('Handles a file entity where download access is blocked because of missing DOWNLOAD permission, and the user is signed in', async () => {
      const entityBundle: EntityBundle = {
        ...mockFileEntityBundle,
        entity: mockFileEntityBundle.entity,
        permissions: {
          ...mockFileEntityBundle.permissions,
          canDownload: false,
        },
      }
      useMswEntityBundle(entityBundle)
      useMswRestrictionInformation(mockOpenRestrictionInformation)

      renderComponent(props)

      await expectIcon(
        'accessClosed',
        'You do not have download access for this item.',
      )
      expect(screen.queryByRole('button')).not.toBeInTheDocument()

      const expectedRestrictionInformationRequest: RestrictionInformationRequest =
        {
          restrictableObjectType: RestrictableObjectType.ENTITY,
          objectId: entityId,
        }

      expect(onGetRestrictionInformation).toHaveBeenLastCalledWith(
        expectedRestrictionInformationRequest,
      )
    })
    it('Handles a file entity where download access is blocked because of missing DOWNLOAD permission, and the user is not signed in', async () => {
      const wrapperProps: Partial<SynapseContextType> = {
        accessToken: undefined,
      }
      const entityBundle: EntityBundle = {
        ...mockFileEntityBundle,
        entity: mockFileEntityBundle.entity,
        permissions: {
          ...mockFileEntityBundle.permissions,
          canDownload: false,
        },
      }
      useMswEntityBundle(entityBundle)
      useMswRestrictionInformation(mockOpenRestrictionInformation)

      renderComponent(props, wrapperProps)

      await expectIcon('accessClosed', 'You must sign in to access this file.')
      await expectSignInButton()

      const expectedRestrictionInformationRequest: RestrictionInformationRequest =
        {
          restrictableObjectType: RestrictableObjectType.ENTITY,
          objectId: entityId,
        }

      expect(onGetRestrictionInformation).toHaveBeenLastCalledWith(
        expectedRestrictionInformationRequest,
      )
    })
  })

  describe('File is controlled by Access Requirements', () => {
    it('User has ACL permissions, has restriction by terms of use, but does not have unmet ARs', async () => {
      const entityBundle: EntityBundle = {
        ...mockFileEntityBundle,
        permissions: {
          ...mockFileEntityBundle.permissions,
          canDownload: true,
        },
      }
      useMswEntityBundle(entityBundle)
      useMswRestrictionInformation({
        ...mockUnmetControlledDataRestrictionInformationRestricted,
        hasUnmetAccessRequirement: false,
      })

      renderComponent(props)

      await expectIcon('accessOpen', 'View Terms')
      await expectArButton('View Terms')

      const expectedRestrictionInformationRequest: RestrictionInformationRequest =
        {
          restrictableObjectType: RestrictableObjectType.ENTITY,
          objectId: entityId,
        }

      expect(onGetRestrictionInformation).toHaveBeenLastCalledWith(
        expectedRestrictionInformationRequest,
      )
    })
    it('User has ACL permissions but not AR permissions', async () => {
      const entityBundle: EntityBundle = {
        ...mockFileEntityBundle,
        entity: mockFileEntityBundle.entity,
        permissions: {
          ...mockFileEntityBundle.permissions,
          canDownload: true,
        },
      }
      useMswEntityBundle(entityBundle)
      useMswRestrictionInformation(
        mockUnmetControlledDataRestrictionInformationACT,
      )

      renderComponent(props)

      await expectIcon(
        'accessClosed',
        'You must request access to this restricted file.',
      )
      await expectArButton('Request Access')

      const expectedRestrictionInformationRequest: RestrictionInformationRequest =
        {
          restrictableObjectType: RestrictableObjectType.ENTITY,
          objectId: entityId,
        }

      expect(onGetRestrictionInformation).toHaveBeenLastCalledWith(
        expectedRestrictionInformationRequest,
      )
    })

    it('User has ACL permissions but not AR permissions, and is not signed in', async () => {
      const wrapperProps: SynapseContextType = {
        ...MOCK_CONTEXT_VALUE,
        accessToken: undefined,
      }
      const entityBundle: EntityBundle = {
        ...mockFileEntityBundle,
        entity: mockFileEntityBundle.entity,
        permissions: {
          ...mockFileEntityBundle.permissions,
          canDownload: true,
        },
      }
      useMswEntityBundle(entityBundle)
      useMswRestrictionInformation(
        mockUnmetControlledDataRestrictionInformationACT,
      )

      renderComponent(props, wrapperProps)

      await expectIcon(
        'accessClosed',
        'You must request access to this restricted file.',
      )
      // User will be prompted to sign in in the AR modal
      await expectArButton('Request Access')

      const expectedRestrictionInformationRequest: RestrictionInformationRequest =
        {
          restrictableObjectType: RestrictableObjectType.ENTITY,
          objectId: entityId,
        }

      expect(onGetRestrictionInformation).toHaveBeenLastCalledWith(
        expectedRestrictionInformationRequest,
      )
    })

    it('User does not have ACL permissions and does not have AR permissions', async () => {
      const entityBundle: EntityBundle = {
        ...mockFileEntityBundle,
        entity: mockFileEntityBundle.entity,
        permissions: {
          ...mockFileEntityBundle.permissions,
          canDownload: false,
        },
      }
      useMswEntityBundle(entityBundle)
      useMswRestrictionInformation(
        mockUnmetControlledDataRestrictionInformationACT,
      )

      renderComponent(props)

      await expectIcon(
        'accessClosed',
        'You must request access to this restricted file.',
      )
      await expectArButton('Request Access')

      const expectedRestrictionInformationRequest: RestrictionInformationRequest =
        {
          restrictableObjectType: RestrictableObjectType.ENTITY,
          objectId: entityId,
        }

      expect(onGetRestrictionInformation).toHaveBeenLastCalledWith(
        expectedRestrictionInformationRequest,
      )
    })
    it('Can hide button text', async () => {
      const entityBundle: EntityBundle = {
        ...mockFileEntityBundle,
        entity: mockFileEntityBundle.entity,
        permissions: {
          ...mockFileEntityBundle.permissions,
          canDownload: false,
        },
      }
      useMswEntityBundle(entityBundle)
      useMswRestrictionInformation(
        mockUnmetControlledDataRestrictionInformationACT,
      )

      renderComponent({ ...props, showButtonText: false })

      await expectIcon(
        'accessClosed',
        'You must request access to this restricted file.',
      )
      await expectArButton('')
    })
  })

  describe('Opens the Access Requirements panel', () => {
    it.todo('Displays unmet access requirements')
    it.todo('Displays access requirements when all have been met')
    it.todo('Handles unsupported access requirement types')
  })
})
