import React from 'react'
import { act, render, screen, waitFor } from '@testing-library/react'
import {
  EntityBadgeIcons,
  EntityBadgeIconsProps,
} from '../../../src/lib/containers/EntityBadgeIcons'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../../src/lib/utils/SynapseContext'
import mockFileEntityData from '../../../mocks/entity/mockFileEntity'
import { rest, server } from '../../../mocks/msw/server'
import userEvent from '@testing-library/user-event'
import {
  BackendDestinationEnum,
  getEndpoint,
} from '../../../src/lib/utils/functions/getEndpoint'
import {
  ENTITY_BUNDLE_V2,
  ENTITY_ID,
  ENTITY_SCHEMA_BINDING,
  ENTITY_SCHEMA_VALIDATION,
} from '../../../src/lib/utils/APIConstants'
import {
  ANONYMOUS_PRINCIPAL_ID,
  AUTHENTICATED_PRINCIPAL_ID,
} from '../../../src/lib/utils/SynapseConstants'
import { EntityType } from '../../../src/lib/utils/synapseTypes'
import {
  mockSchemaBinding,
  mockSchemaValidationResults,
} from '../../../mocks/mockSchema'
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'

const MOCK_FILE_ENTITY_ID = mockFileEntityData.id
const mockFileEntityBundle = mockFileEntityData.bundle

const defaultProps: EntityBadgeIconsProps = {
  entityId: MOCK_FILE_ENTITY_ID,
  onUnlink: jest.fn(),
  onUnlinkError: jest.fn(),
  canOpenModal: true,
  renderTooltipComponent: true,
}

async function renderComponent(wrapperProps?: SynapseContextType) {
  await act(() => {
    render(<EntityBadgeIcons {...defaultProps} />, {
      wrapper: createWrapper(wrapperProps),
    })
  })
  mockAllIsIntersecting(true)
}

describe('EntityBadgeIcons tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Renders annotations in a table', async () => {
    await renderComponent()
    const icon = await screen.findByTestId('annotations-icon')
    await userEvent.hover(icon)
    for (const annotation of Object.entries(
      mockFileEntityBundle.annotations!.annotations,
    )) {
      await screen.findByText(annotation[0])
      await screen.findByText(annotation[1].value.join(', '))
    }
  })
  it('Shows the public icon when anonymous is in the ACL', async () => {
    server.use(
      rest.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
          ':entityId',
        )}`,

        async (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              ...mockFileEntityBundle,
              benefactorAcl: {
                ...mockFileEntityBundle.benefactorAcl,
                resourceAccess: [
                  {
                    principalId: AUTHENTICATED_PRINCIPAL_ID, // !
                    accessType: ['READ'],
                  },
                  {
                    principalId: ANONYMOUS_PRINCIPAL_ID, // !
                    accessType: ['READ'],
                  },
                ],
              },
            }),
          )
        },
      ),
    )

    await renderComponent()
    await screen.findByTestId('is-public-icon')
  })
  it('Shows the private icon when anonymous is not in the ACL', async () => {
    server.use(
      rest.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
          ':entityId',
        )}`,

        async (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              ...mockFileEntityBundle,
              benefactorAcl: {
                ...mockFileEntityBundle.benefactorAcl,
                resourceAccess: [],
              },
            }),
          )
        },
      ),
    )

    await renderComponent()
    await screen.findByTestId('is-private-icon')
  })

  it('Shows the local sharing settings icon when the ACL is attached to itself', async () => {
    server.use(
      rest.post(
        `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_BUNDLE_V2(
          ':entityId',
        )}`,

        async (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              ...mockFileEntityBundle,
              benefactorAcl: {
                ...mockFileEntityBundle.benefactorAcl,
                id: MOCK_FILE_ENTITY_ID, // !
              },
            }),
          )
        },
      ),
    )

    await renderComponent()
    await screen.findByTestId('sharing-settings-icon')
  })

  it('Shows the wiki icon', async () => {
    await renderComponent()
    await screen.findByTestId('wiki-icon')
  })

  it('Shows the discussion thread icon', async () => {
    await renderComponent()
    await screen.findByTestId('discussion-icon')
  })

  describe('Unlink', () => {
    it('Does not show the icon on non-links', async () => {
      server.use(
        rest.post(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_BUNDLE_V2(':entityId')}`,

          async (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({
                ...mockFileEntityBundle,
                entityType: EntityType.FILE,
                permissions: {
                  canDelete: true,
                },
              }),
            )
          },
        ),
      )
      await renderComponent()
      expect(screen.queryByTestId('unlink-icon')).toBeNull()
    })

    it('Does not show the icon if no permission to delete', async () => {
      server.use(
        rest.post(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_BUNDLE_V2(':entityId')}`,

          async (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({
                ...mockFileEntityBundle,
                entityType: EntityType.LINK,
                permissions: {
                  canDelete: false,
                },
              }),
            )
          },
        ),
      )
      await renderComponent()
      expect(screen.queryByTestId('unlink-icon')).toBeNull()
    })

    it('Shows the unlink icon', async () => {
      server.use(
        rest.post(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_BUNDLE_V2(':entityId')}`,

          async (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({
                ...mockFileEntityBundle,
                entityType: EntityType.LINK,
                permissions: {
                  canDelete: true,
                },
              }),
            )
          },
        ),
      )
      await renderComponent()
      await screen.findByTestId('unlink-icon')
    })
    it('Calls the success callback on success', async () => {
      server.use(
        rest.post(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_BUNDLE_V2(':entityId')}`,

          async (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({
                ...mockFileEntityBundle,
                entityType: EntityType.LINK,
                permissions: {
                  canDelete: true,
                },
              }),
            )
          },
        ),
      )

      server.use(
        rest.delete(
          `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_ID(
            ':entityId',
          )}`,

          async (req, res, ctx) => {
            return res(ctx.status(200))
          },
        ),
      )
      await renderComponent()
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
      server.use(
        rest.post(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_BUNDLE_V2(':entityId')}`,

          async (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({
                ...mockFileEntityBundle,
                entityType: EntityType.LINK,
                permissions: {
                  canDelete: true,
                },
              }),
            )
          },
        ),
      )

      server.use(
        rest.delete(
          `${getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)}${ENTITY_ID(
            ':entityId',
          )}`,

          async (req, res, ctx) => {
            return res(ctx.status(403))
          },
        ),
      )

      await renderComponent()
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
        rest.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_SCHEMA_BINDING(':entityId')}`,

          async (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(mockSchemaBinding))
          },
        ),
        rest.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_SCHEMA_VALIDATION(':entityId')}`,

          async (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(mockSchemaValidationResults))
          },
        ),
      )

      await renderComponent({ isInExperimentalMode: true, utcTime: true })
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
        rest.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_SCHEMA_BINDING(':entityId')}`,

          async (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(mockSchemaBinding))
          },
        ),

        rest.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_SCHEMA_VALIDATION(':entityId')}`,

          async (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({
                ...mockSchemaValidationResults,
                isValid: false, // !
              }),
            )
          },
        ),
      )

      await renderComponent({ isInExperimentalMode: true, utcTime: true })
      let icon: HTMLElement
      await waitFor(() => {
        icon = screen.getByTestId('annotations-icon')
        expect(icon.classList.contains('Invalid')).toBe(true)
      })

      await userEvent.hover(icon!)
      await screen.findByText('Invalid Annotations')
    })

    it('Missing annotations with schema', async () => {
      server.use(
        rest.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_SCHEMA_BINDING(':entityId')}`,

          async (req, res, ctx) => {
            return res(ctx.status(200), ctx.json(mockSchemaBinding))
          },
        ),

        // The entity must have no annotations
        rest.post(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_BUNDLE_V2(':entityId')}`,

          async (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({
                ...mockFileEntityBundle,
                annotations: {
                  annotations: {}, // !
                },
              }),
            )
          },
        ),
        // The entity's annotations are invalid
        rest.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_SCHEMA_VALIDATION(':entityId')}`,

          async (req, res, ctx) => {
            return res(
              ctx.status(200),
              ctx.json({
                ...mockSchemaValidationResults,
                isValid: false,
              }),
            )
          },
        ),
      )

      await renderComponent({ isInExperimentalMode: true, utcTime: true })
      let icon: HTMLElement
      await waitFor(() => {
        icon = screen.getByTestId('annotations-icon')
        expect(icon.classList.contains('Missing')).toBe(true)
      })

      await userEvent.hover(icon!)
      await screen.findByText('Missing Annotations')
    })

    it('Does not fetch validation results if there is no bound schema', async () => {
      const onSchemaValidationFetched = jest.fn()

      server.use(
        rest.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_SCHEMA_BINDING(':entityId')}`,

          async (req, res, ctx) => {
            return res(
              ctx.status(404),
              ctx.json({ reason: 'No JSON Schema found' }),
            )
          },
        ),

        // This service should never be called.
        // To verify, see if we invoke a mock function that is called in the mocked service
        rest.get(
          `${getEndpoint(
            BackendDestinationEnum.REPO_ENDPOINT,
          )}${ENTITY_SCHEMA_VALIDATION(':entityId')}`,

          async (req, res, ctx) => {
            onSchemaValidationFetched()
            return res(
              ctx.status(200),
              ctx.json({
                ...mockSchemaValidationResults,
                isValid: false,
              }),
            )
          },
        ),
      )

      await renderComponent({ isInExperimentalMode: true, utcTime: true })
      expect(onSchemaValidationFetched).not.toHaveBeenCalled()
    })
  })
})
