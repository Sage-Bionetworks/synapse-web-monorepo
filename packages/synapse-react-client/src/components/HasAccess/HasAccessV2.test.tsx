import mockFileEntityData from '@/mocks/entity/mockFileEntity'
import {
  mockOpenRestrictionInformation,
  mockUnmetControlledDataRestrictionInformationACT,
  mockUnmetControlledDataRestrictionInformationRestricted,
} from '@/mocks/mock_has_access_data'
import {
  MOCK_ACCESS_TOKEN,
  MOCK_CONTEXT_VALUE,
} from '@/mocks/MockSynapseContext'
import { server } from '@/mocks/msw/server'
import SynapseClient from '@/synapse-client'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { SynapseContextType } from '@/utils/context/SynapseContext'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import { SRC_SIGN_IN_CLASS } from '@/utils/SynapseConstants'
import {
  RestrictableObjectType,
  RestrictionInformationRequest,
  RestrictionInformationResponse,
} from '@sage-bionetworks/synapse-types'
import { render, screen } from '@testing-library/react'
import { http, HttpResponse } from 'msw'
import { HasAccessProps, HasAccessV2 } from './HasAccessV2'

const entityId = mockFileEntityData.id

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

const getRestrictionInformationSpy = vi.spyOn(
  SynapseClient,
  'getRestrictionInformation',
)

function useMswRestrictionInformation(
  restrictionInformation: RestrictionInformationResponse,
) {
  server.use(
    http.post(
      `${getEndpoint(
        BackendDestinationEnum.REPO_ENDPOINT,
      )}/repo/v1/restrictionInformation`,
      () => {
        return HttpResponse.json(restrictionInformation, { status: 200 })
      },
    ),
  )
}

describe('HasAccess tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('User has all permissions on a standard FileEntity and any Access Requirements have been met', async () => {
    useMswRestrictionInformation({
      ...mockOpenRestrictionInformation,
      userEntityPermissions: {
        ...mockOpenRestrictionInformation.userEntityPermissions,
        canDownload: true,
      },
    })

    renderComponent(props)

    await expectIcon('accessOpen', '')
    expect(screen.queryByRole('button')).not.toBeInTheDocument()

    const expectedRestrictionInformationRequest: RestrictionInformationRequest =
      {
        restrictableObjectType: RestrictableObjectType.ENTITY,
        objectId: entityId,
      }

    expect(getRestrictionInformationSpy).toHaveBeenLastCalledWith(
      expectedRestrictionInformationRequest,
      MOCK_ACCESS_TOKEN,
    )
  })

  describe('Authorization blocked by ACL', () => {
    it('Handles a file entity where download access is blocked because of missing DOWNLOAD permission, and the user is signed in', async () => {
      useMswRestrictionInformation({
        ...mockOpenRestrictionInformation,
        userEntityPermissions: {
          ...mockOpenRestrictionInformation.userEntityPermissions,
          canDownload: false,
        },
      })

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

      expect(getRestrictionInformationSpy).toHaveBeenLastCalledWith(
        expectedRestrictionInformationRequest,
        MOCK_ACCESS_TOKEN,
      )
    })
    it('Handles a file entity where download access is blocked because of missing DOWNLOAD permission, and the user is not signed in', async () => {
      const wrapperProps: Partial<SynapseContextType> = {
        accessToken: undefined,
      }

      useMswRestrictionInformation({
        ...mockOpenRestrictionInformation,
        userEntityPermissions: {
          ...mockOpenRestrictionInformation.userEntityPermissions,
          canDownload: false,
        },
      })

      renderComponent(props, wrapperProps)

      await expectIcon('accessClosed', 'You must sign in to access this item.')
      await expectSignInButton()

      const expectedRestrictionInformationRequest: RestrictionInformationRequest =
        {
          restrictableObjectType: RestrictableObjectType.ENTITY,
          objectId: entityId,
        }

      expect(getRestrictionInformationSpy).toHaveBeenLastCalledWith(
        expectedRestrictionInformationRequest,
        undefined,
      )
    })
  })

  describe('File is controlled by Access Requirements', () => {
    it('User has ACL permissions, has restriction by terms of use, but does not have unmet ARs', async () => {
      useMswRestrictionInformation({
        ...mockUnmetControlledDataRestrictionInformationRestricted,
        hasUnmetAccessRequirement: false,
        userEntityPermissions: {
          ...mockUnmetControlledDataRestrictionInformationRestricted.userEntityPermissions,
          canDownload: true,
        },
      })

      renderComponent(props)

      await expectIcon('accessOpen', 'View Terms')
      await expectArButton('View Terms')

      const expectedRestrictionInformationRequest: RestrictionInformationRequest =
        {
          restrictableObjectType: RestrictableObjectType.ENTITY,
          objectId: entityId,
        }

      expect(getRestrictionInformationSpy).toHaveBeenLastCalledWith(
        expectedRestrictionInformationRequest,
        MOCK_ACCESS_TOKEN,
      )
    })
    it('User has ACL permissions but not AR permissions', async () => {
      useMswRestrictionInformation({
        ...mockUnmetControlledDataRestrictionInformationACT,
        userEntityPermissions: {
          ...mockUnmetControlledDataRestrictionInformationACT.userEntityPermissions,
          canDownload: true,
        },
      })
      renderComponent(props)

      await expectIcon(
        'accessClosed',
        'You must request access to this restricted item.',
      )
      await expectArButton('Request Access')

      const expectedRestrictionInformationRequest: RestrictionInformationRequest =
        {
          restrictableObjectType: RestrictableObjectType.ENTITY,
          objectId: entityId,
        }

      expect(getRestrictionInformationSpy).toHaveBeenLastCalledWith(
        expectedRestrictionInformationRequest,
        MOCK_ACCESS_TOKEN,
      )
    })

    it('User has ACL permissions but not AR permissions, and is not signed in', async () => {
      const wrapperProps: SynapseContextType = {
        ...MOCK_CONTEXT_VALUE,
        accessToken: undefined,
      }

      useMswRestrictionInformation({
        ...mockUnmetControlledDataRestrictionInformationACT,
        userEntityPermissions: {
          ...mockUnmetControlledDataRestrictionInformationACT.userEntityPermissions,
          canDownload: true,
        },
      })

      renderComponent(props, wrapperProps)

      await expectIcon(
        'accessClosed',
        'You must request access to this restricted item.',
      )
      // User will be prompted to sign in in the AR modal
      await expectArButton('Request Access')

      const expectedRestrictionInformationRequest: RestrictionInformationRequest =
        {
          restrictableObjectType: RestrictableObjectType.ENTITY,
          objectId: entityId,
        }

      expect(getRestrictionInformationSpy).toHaveBeenLastCalledWith(
        expectedRestrictionInformationRequest,
        undefined,
      )
    })

    it('User does not have ACL permissions and does not have AR permissions', async () => {
      useMswRestrictionInformation({
        ...mockUnmetControlledDataRestrictionInformationACT,
        userEntityPermissions: {
          ...mockUnmetControlledDataRestrictionInformationACT.userEntityPermissions,
          canDownload: false,
        },
      })

      renderComponent(props)

      await expectIcon(
        'accessClosed',
        'You must request access to this restricted item.',
      )
      await expectArButton('Request Access')

      const expectedRestrictionInformationRequest: RestrictionInformationRequest =
        {
          restrictableObjectType: RestrictableObjectType.ENTITY,
          objectId: entityId,
        }

      expect(getRestrictionInformationSpy).toHaveBeenLastCalledWith(
        expectedRestrictionInformationRequest,
        MOCK_ACCESS_TOKEN,
      )
    })
    it('Can hide button text', async () => {
      useMswRestrictionInformation({
        ...mockUnmetControlledDataRestrictionInformationACT,
        userEntityPermissions: {
          ...mockUnmetControlledDataRestrictionInformationACT.userEntityPermissions,
          canDownload: false,
        },
      })

      renderComponent({ ...props, showButtonText: false })

      await expectIcon(
        'accessClosed',
        'You must request access to this restricted item.',
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
