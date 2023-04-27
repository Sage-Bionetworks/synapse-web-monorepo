import { render, screen } from '@testing-library/react'
import * as React from 'react'
import {
  HasAccessV2,
  HasAccessProps,
} from '../../../src/lib/containers/access_requirements/HasAccessV2'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { ENTITY_BUNDLE_V2 } from '../../../src/lib/utils/APIConstants'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../src/lib/utils/functions/getEndpoint'
import { SRC_SIGN_IN_CLASS } from '../../../src/lib/utils/SynapseConstants'
import { SynapseContextType } from '../../../src/lib/utils/SynapseContext'
import {
  EntityBundle,
  RestrictableObjectType,
  RestrictionInformationRequest,
  RestrictionInformationResponse,
} from '../../../src/lib/utils/synapseTypes'
import { mockFolderEntity } from '../../../mocks/entity/mockEntity'
import mockFileEntityData from '../../../mocks/entity/mockFileEntity'
import { MOCK_CONTEXT_VALUE } from '../../../mocks/MockSynapseContext'
import {
  mockOpenRestrictionInformation,
  mockUnmetControlledDataRestrictionInformationACT,
} from '../../../mocks/mock_has_access_data'
import { rest, server } from '../../../mocks/msw/server'

const entityId = mockFileEntityData.id
const mockFileEntityBundle = mockFileEntityData.bundle
const isInDownloadList: boolean = true

const renderComponent = (
  props: HasAccessProps,
  wrapperProps?: SynapseContextType,
) => {
  return render(<HasAccessV2 {...props} />, {
    wrapper: createWrapper(wrapperProps),
  })
}
const props: HasAccessProps = {
  entityId,
  isInDownloadList,
}

const onGetRestrictionInformation = jest.fn()

function useMswEntityBundle(entityBundle: EntityBundle) {
  server.use(
    rest.post(
      `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
        ':entityId',
      )}`,
      async (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(entityBundle))
      },
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
      entity: mockFileEntityBundle.entity,
      permissions: {
        ...mockFileEntityBundle.permissions,
        canDownload: true,
      },
    }
    useMswEntityBundle(entityBundle)
    useMswRestrictionInformation(mockOpenRestrictionInformation)

    renderComponent(props)

    expect((await screen.findByRole('img')).getAttribute('data-svg')).toEqual(
      'accessOpen',
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

  it('The entity is a Folder entity', async () => {
    const entityBundle: EntityBundle = {
      entity: mockFolderEntity,
      permissions: {
        canDownload: true,
      },
    }
    useMswEntityBundle(entityBundle)
    useMswRestrictionInformation(mockOpenRestrictionInformation)

    renderComponent(props)

    expect((await screen.findByRole('img')).getAttribute('data-svg')).toEqual(
      'accessOpen',
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

  describe('Authorization blocked by ACL', () => {
    it('Handles a file entity where download access is blocked because of missing DOWNLOAD permission, and the user is signed in', async () => {
      const entityBundle: EntityBundle = {
        entity: mockFileEntityBundle.entity,
        permissions: {
          ...mockFileEntityBundle.permissions,
          canDownload: false,
        },
      }
      useMswEntityBundle(entityBundle)
      useMswRestrictionInformation(mockOpenRestrictionInformation)

      renderComponent(props)

      const icon = await screen.findByRole('img', {
        name: 'You do not have download access for this item.',
      })
      expect(icon.getAttribute('data-svg')).toEqual('accessClosed')
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
      const wrapperProps: SynapseContextType = {
        ...MOCK_CONTEXT_VALUE,
        accessToken: undefined,
      }
      const entityBundle: EntityBundle = {
        entity: mockFileEntityBundle.entity,
        permissions: {
          ...mockFileEntityBundle.permissions,
          canDownload: false,
        },
      }
      useMswEntityBundle(entityBundle)
      useMswRestrictionInformation(mockOpenRestrictionInformation)

      renderComponent(props, wrapperProps)

      const icon = await screen.findByRole('img', {
        name: 'You must sign in to access this file.',
      })
      expect(icon.getAttribute('data-svg')).toEqual('accessClosed')
      // Sign in button is present
      const signInButton = screen.getByRole('button')
      expect(signInButton.classList.contains(SRC_SIGN_IN_CLASS)).toBe(true)

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
    it('User has ACL permissions but not AR permissions', async () => {
      const entityBundle: EntityBundle = {
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

      const icon = await screen.findByRole('img', {
        name: 'You must request access to this restricted file.',
      })
      expect(icon.getAttribute('data-svg')).toEqual('accessClosed')
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

    it('User has ACL permissions but not AR permissions, and is not signed in', async () => {
      const wrapperProps: SynapseContextType = {
        ...MOCK_CONTEXT_VALUE,
        accessToken: undefined,
      }
      const entityBundle: EntityBundle = {
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

      const icon = await screen.findByRole('img', {
        name: 'You must request access to this restricted file.',
      })
      expect(icon.getAttribute('data-svg')).toEqual('accessClosed')
      // User will be prompted to sign in in the AR modal
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

    it('User does not have ACL permissions and does not have AR permissions', async () => {
      const entityBundle: EntityBundle = {
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

      const icon = await screen.findByRole('img', {
        name: 'You must request access to this restricted file.',
      })
      expect(icon.getAttribute('data-svg')).toEqual('accessClosed')
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
  })

  describe('Opens the Access Requirements panel', () => {
    it.todo('Displays unmet access requirements')
    it.todo('Displays access requirements when all have been met')
    it.todo('Handles unsupported access requirement types')
  })
})
