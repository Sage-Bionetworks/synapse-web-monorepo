import mockFileEntityData from '@/mocks/entity/mockFileEntity'
import {
  mockSchemaBinding,
  mockSchemaValidationResults,
} from '@/mocks/mockSchema'
import {
  getEntityBundleHandler,
  getEntityJsonHandler,
} from '@/mocks/msw/handlers/entityHandlers'
import { getFeatureFlagsOverride } from '@/mocks/msw/handlers/featureFlagHandlers'
import { server } from '@/mocks/msw/server'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  ENTITY_ID,
  ENTITY_SCHEMA_BINDING,
  ENTITY_SCHEMA_VALIDATION,
} from '@/utils/APIConstants'
import { SynapseContextType } from '@/utils/context/SynapseContext'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '@/utils/functions/getEndpoint'
import {
  MOCK_ANONYMOUS_PRINCIPAL_ID as ANONYMOUS_PRINCIPAL_ID,
  MOCK_AUTHENTICATED_PRINCIPAL_ID as AUTHENTICATED_PRINCIPAL_ID,
} from '@/mocks/realm/mockRealmPrincipal'
import { EntityType } from '@sage-bionetworks/synapse-client'
import {
  ACCESS_TYPE,
  Annotations,
  EntityBundle,
  EntityJson,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { http, HttpResponse } from 'msw'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { EntityBadgeIcons, EntityBadgeIconsProps } from './EntityBadgeIcons'

const MOCK_FILE_ENTITY_ID = mockFileEntityData.id
const mockFileEntityBundle = mockFileEntityData.bundle

const defaultProps: EntityBadgeIconsProps = {
  entityId: MOCK_FILE_ENTITY_ID,
  onUnlink: vi.fn(),
  onUnlinkError: vi.fn(),
  canOpenModal: true,
}

const convertAnnotationsToEntityJson = (
  annotations: Annotations['annotations'],
): Partial<EntityJson> => {
  const entityJson: Partial<EntityJson> = {}
  for (const key in annotations) {
    if (Object.hasOwn(annotations, key)) {
      entityJson[key] = annotations[key].value
    }
  }
  return entityJson
}

function renderComponent(wrapperProps?: Partial<SynapseContextType>) {
  render(<EntityBadgeIcons {...defaultProps} />, {
    wrapper: createWrapper(wrapperProps),
  })

  mockAllIsIntersecting(true)
}

describe('EntityBadgeIcons tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(getFeatureFlagsOverride())
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Renders annotations in a table', async () => {
    const bundleAnnotations = mockFileEntityBundle.annotations.annotations
    const annotations: Partial<EntityJson> =
      convertAnnotationsToEntityJson(bundleAnnotations)
    server.use(
      getEntityJsonHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        annotations,
      ),
    )
    renderComponent()
    const icon = await screen.findByTestId('annotations-icon')
    await userEvent.hover(icon)
    for (const annotation of Object.entries(
      mockFileEntityBundle.annotations.annotations,
    )) {
      await screen.findByText(annotation[0])
      await screen.findByText(annotation[1].value.join(', '))
    }
  })
  it('Shows the public icon when anonymous is in the ACL', async () => {
    const bundle: EntityBundle = {
      ...mockFileEntityBundle,
      benefactorAcl: {
        ...mockFileEntityBundle.benefactorAcl,
        resourceAccess: [
          {
            principalId: AUTHENTICATED_PRINCIPAL_ID, // !
            accessType: [ACCESS_TYPE.READ],
          },
          {
            principalId: ANONYMOUS_PRINCIPAL_ID, // !
            accessType: [ACCESS_TYPE.READ],
          },
        ],
      },
    }
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        bundle,
      ),
    )

    renderComponent()
    await screen.findByTestId('is-public-icon')
  })
  it('Shows the private icon when anonymous is not in the ACL', async () => {
    const bundle: EntityBundle = {
      ...mockFileEntityBundle,
      benefactorAcl: {
        ...mockFileEntityBundle.benefactorAcl,
        resourceAccess: [],
      },
    }
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        bundle,
      ),
    )

    renderComponent()
    await screen.findByTestId('is-private-icon')
  })

  it('Shows the local sharing settings icon when the ACL is attached to itself', async () => {
    const bundle: EntityBundle = {
      ...mockFileEntityBundle,
      benefactorAcl: {
        ...mockFileEntityBundle.benefactorAcl,
        id: MOCK_FILE_ENTITY_ID, // !
      },
    }
    server.use(
      getEntityBundleHandler(
        getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
        bundle,
      ),
    )

    renderComponent()
    await screen.findByTestId('sharing-settings-icon')
  })

  it('Shows the wiki icon', async () => {
    renderComponent()
    await screen.findByTestId('wiki-icon')
  })

  it('Shows the discussion thread icon', async () => {
    renderComponent()
    await screen.findByTestId('discussion-icon')
  })

  describe('Unlink', () => {
    it('Does not show the icon on non-links', () => {
      const bundle: EntityBundle = {
        ...mockFileEntityBundle,
        entityType: EntityType.file,
        permissions: {
          ...mockFileEntityBundle.permissions,
          canDelete: true,
        },
      }

      server.use(
        getEntityBundleHandler(
          getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
          bundle,
        ),
      )
      renderComponent()
      expect(screen.queryByTestId('unlink-icon')).toBeNull()
    })

    it('Does not show the icon if no permission to delete', () => {
      const bundle: EntityBundle = {
        ...mockFileEntityBundle,
        entityType: EntityType.link,
        permissions: {
          ...mockFileEntityBundle.permissions,
          canDelete: false,
        },
      }
      server.use(
        getEntityBundleHandler(
          getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
          bundle,
        ),
      )
      renderComponent()
      expect(screen.queryByTestId('unlink-icon')).toBeNull()
    })

    it('Shows the unlink icon', async () => {
      const bundle: EntityBundle = {
        ...mockFileEntityBundle,
        entityType: EntityType.link,
        permissions: {
          ...mockFileEntityBundle.permissions,
          canDelete: true,
        },
      }
      server.use(
        getEntityBundleHandler(
          getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
          bundle,
        ),
      )
      renderComponent()
      await screen.findByTestId('unlink-icon')
    })
    it('Calls the success callback on success', async () => {
      const bundle: EntityBundle = {
        ...mockFileEntityBundle,
        entityType: EntityType.link,
        permissions: {
          ...mockFileEntityBundle.permissions,
          canDelete: true,
        },
      }
      server.use(
        getEntityBundleHandler(
          getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
          bundle,
        ),
        http.delete(
          `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_ID(
            ':entityId',
          )}`,

          () => {
            return new Response('', { status: 200 })
          },
        ),
      )
      renderComponent()
      const unlinkButton = await screen.findByTestId('unlink-icon')

      await userEvent.click(unlinkButton)

      // Confirmation modal appears
      await screen.findByText('Confirm Unlink')
      await userEvent.click(
        await screen.findByRole('button', { name: 'Unlink' }),
      )

      await waitFor(() =>
        expect(defaultProps.onUnlink).toBeCalledWith(MOCK_FILE_ENTITY_ID),
      )
    })
    it('Calls the error callback on fail', async () => {
      const bundle: EntityBundle = {
        ...mockFileEntityBundle,
        entityType: EntityType.link,
        permissions: {
          ...mockFileEntityBundle.permissions,
          canDelete: true,
        },
      }
      server.use(
        getEntityBundleHandler(
          getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
          bundle,
        ),
        http.delete(
          `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_ID(
            ':entityId',
          )}`,

          () => {
            return new Response('', { status: 403 })
          },
        ),
      )

      renderComponent()
      const unlinkButton = await screen.findByTestId('unlink-icon')

      await userEvent.click(unlinkButton)

      // Confirmation modal appears
      await screen.findByText('Confirm Unlink')
      await userEvent.click(
        await screen.findByRole('button', { name: 'Unlink' }),
      )

      await waitFor(() => expect(defaultProps.onUnlinkError).toBeCalled())
    })
  })

  describe('displays schema validity', () => {
    it('Displays that the annotations are valid w.r.t the schema', async () => {
      server.use(
        http.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_SCHEMA_BINDING(':entityId')}`,

          () => {
            return HttpResponse.json(mockSchemaBinding, { status: 200 })
          },
        ),
        http.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_SCHEMA_VALIDATION(':entityId')}`,

          () => {
            return HttpResponse.json(mockSchemaValidationResults, {
              status: 200,
            })
          },
        ),
      )

      renderComponent({ isInExperimentalMode: true, utcTime: true })
      let icon: HTMLElement
      await waitFor(() => {
        icon = screen.getByTestId('annotations-icon')
        expect(icon.classList.contains('Valid')).toBe(true)
      })

      await userEvent.hover(icon!)
      await screen.findByText('Valid Annotations')
    })

    it('Displays that the annotations are invalid w.r.t the schema', async () => {
      server.use(
        http.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_SCHEMA_BINDING(':entityId')}`,

          () => {
            return HttpResponse.json(mockSchemaBinding, { status: 200 })
          },
        ),

        http.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_SCHEMA_VALIDATION(':entityId')}`,

          () => {
            return HttpResponse.json(
              {
                ...mockSchemaValidationResults,
                isValid: false, // !
              },
              { status: 200 },
            )
          },
        ),
      )

      renderComponent({ isInExperimentalMode: true, utcTime: true })
      let icon: HTMLElement
      await waitFor(() => {
        icon = screen.getByTestId('annotations-icon')
        expect(icon.classList.contains('Invalid')).toBe(true)
      })

      await userEvent.hover(icon!)
      await screen.findByText('Invalid Annotations')
    })

    it('Missing annotations with schema', async () => {
      // The entity must have no annotations
      server.use(
        getEntityJsonHandler(
          getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
          {},
        ),
      )
      const bundle: EntityBundle = {
        ...mockFileEntityBundle,
        annotations: {
          id: MOCK_FILE_ENTITY_ID,
          etag: 'etag',
          annotations: {}, // !
        },
      }
      server.use(
        http.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_SCHEMA_BINDING(':entityId')}`,

          () => {
            return HttpResponse.json(mockSchemaBinding, { status: 200 })
          },
        ),

        getEntityBundleHandler(
          getEndpoint(BackendDestinationEnum.REPO_ENDPOINT),
          bundle,
        ),
        // The entity's annotations are invalid
        http.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_SCHEMA_VALIDATION(':entityId')}`,

          () => {
            return HttpResponse.json(
              { ...mockSchemaValidationResults, isValid: false },
              { status: 200 },
            )
          },
        ),
      )

      renderComponent({ isInExperimentalMode: true, utcTime: true })
      let icon: HTMLElement
      await waitFor(() => {
        icon = screen.getByTestId('annotations-icon')
        expect(icon.classList.contains('Missing')).toBe(true)
      })

      await userEvent.hover(icon!)
      await screen.findByText('Missing Annotations')
    })

    it('Does not fetch validation results if there is no bound schema', () => {
      const onSchemaValidationFetched = vi.fn()

      server.use(
        http.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_SCHEMA_BINDING(':entityId')}`,

          () => {
            return HttpResponse.json(
              { reason: 'No JSON Schema found' },
              { status: 404 },
            )
          },
        ),

        // This service should never be called.
        // To verify, see if we invoke a mock function that is called in the mocked service
        http.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_SCHEMA_VALIDATION(':entityId')}`,

          () => {
            onSchemaValidationFetched()
            return HttpResponse.json(
              { ...mockSchemaValidationResults, isValid: false },
              { status: 200 },
            )
          },
        ),
      )

      renderComponent({ isInExperimentalMode: true, utcTime: true })
      expect(onSchemaValidationFetched).not.toHaveBeenCalled()
    })
  })
})
