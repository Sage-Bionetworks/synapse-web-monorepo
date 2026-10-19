import { displayToast } from '@/components/ToastMessage/ToastMessage'
import { mockSchemaBinding } from '@/mocks/mockSchema'
import {
  dispatchEntry,
  generateAsyncJobHandlers,
} from '@/mocks/msw/handlers/asyncJobHandlers'
import { server } from '@/mocks/msw/server'
import { ENTITY_ID, ENTITY_SCHEMA_BINDING } from '@/utils/APIConstants'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  Entity,
  EntityType,
  GridSession,
  JsonSchemaObjectBinding,
  SynchronizeGridResponse,
} from '@sage-bionetworks/synapse-client'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { delay, http, HttpResponse } from 'msw'
import SyncGridWithSourceButton, {
  buildMergeGridVariables,
  getSyncButtonLabels,
  onSynchronizeSuccess,
  shouldPullBeforePush,
} from './SyncGridWithSourceButton'

vi.mock('@/components/ToastMessage/ToastMessage', () => ({
  displayToast: vi.fn(),
}))

const mockDisplayToast = vi.mocked(displayToast)

const mockRecordSetEntity = {
  id: 'syn111',
  name: 'my record set',
  concreteType: 'org.sagebionetworks.repo.model.RecordSet',
  versionNumber: 2,
} as const satisfies Entity

const mockTableEntity = {
  id: 'syn222',
  name: 'my table',
  concreteType: 'org.sagebionetworks.repo.model.table.TableEntity',
} as const satisfies Entity

const mockEntityViewEntity = {
  id: 'syn333',
  name: 'my entity view',
  concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
} as const satisfies Entity

const repoEndpoint = getEndpoint(BackendDestinationEnum.REPO_ENDPOINT)

function renderComponent(gridSession: GridSession) {
  return render(<SyncGridWithSourceButton gridSession={gridSession} />, {
    wrapper: createWrapper(),
  })
}

function mockSynchronizeGridResponse(
  overrides: Partial<SynchronizeGridResponse> = {},
): SynchronizeGridResponse {
  return {
    concreteType: 'org.sagebionetworks.repo.model.grid.SynchronizeGridResponse',
    errorMessages: [],
    ...overrides,
  }
}

/** Mocks the endpoint that retrieves the source entity. */
function useEntityHandler(entity: Entity, onRequest?: () => void) {
  server.use(
    http.get(`${repoEndpoint}${ENTITY_ID(entity.id!)}`, () => {
      onRequest?.()
      return HttpResponse.json(entity)
    }),
  )
}

/** Mocks the endpoint that retrieves the entity's bound schema. `null` simulates no binding (404). */
function useSchemaBindingHandler(
  entityId: string,
  binding: JsonSchemaObjectBinding | null | 'loading',
) {
  server.use(
    http.get(`${repoEndpoint}${ENTITY_SCHEMA_BINDING(entityId)}`, async () => {
      if (binding === 'loading') {
        await delay('infinite')
      }
      if (binding === null) {
        return HttpResponse.json({ reason: 'Not bound' }, { status: 404 })
      }
      return HttpResponse.json(binding)
    }),
  )
}

/** Mocks the Synchronize async job, invoking `onRequest` with the request body that was sent. */
function useSynchronizeHandlers(onRequest: (requestBody: unknown) => void) {
  server.use(
    ...generateAsyncJobHandlers(
      dispatchEntry(
        'org.sagebionetworks.repo.model.grid.SynchronizeGridRequest',
        requestBody => {
          onRequest(requestBody)
          return mockSynchronizeGridResponse()
        },
      ),
      {
        asyncTypeServicePaths: {
          requestPath: '/repo/v1/grid/synchronize/async/start',
          responsePath: token => `/repo/v1/grid/synchronize/async/get/${token}`,
        },
      },
    ),
  )
}

describe('SyncGridWithSourceButton', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    vi.clearAllMocks()
  })
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())

  it('shows a loading skeleton instead of a button while the entity is loading', async () => {
    const onEntityRequest = vi.fn()
    server.use(
      http.get(`${repoEndpoint}${ENTITY_ID('syn222')}`, async () => {
        onEntityRequest()
        await delay('infinite')
      }),
    )
    useSchemaBindingHandler('syn222', null)

    renderComponent({ sessionId: 'session-1', sourceEntityId: 'syn222' })

    await waitFor(() => expect(onEntityRequest).toHaveBeenCalled())
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('shows a loading skeleton instead of a button while the schema binding is loading', async () => {
    const onEntityRequest = vi.fn()
    useEntityHandler(mockTableEntity, onEntityRequest)
    useSchemaBindingHandler('syn222', 'loading')

    renderComponent({ sessionId: 'session-1', sourceEntityId: 'syn222' })

    await waitFor(() => expect(onEntityRequest).toHaveBeenCalled())
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('shows a loading indicator while the mutation is pending', async () => {
    useEntityHandler(mockTableEntity)
    useSchemaBindingHandler('syn222', null)
    // The table merge path starts by exporting the grid; never resolve it so the mutation stays pending
    server.use(
      http.post(
        `${repoEndpoint}/repo/v1/grid/download/csv/async/start`,
        async () => {
          await delay('infinite')
        },
      ),
    )

    renderComponent({ sessionId: 'session-1', sourceEntityId: 'syn222' })

    await userEvent.click(
      await screen.findByRole('button', { name: 'Apply changes' }),
    )

    await waitFor(() =>
      expect(
        screen.getByRole('button', { name: 'Apply changes' }),
      ).toBeDisabled(),
    )
  })

  it('renders "Sync changes" for an entity view source and triggers a PULL_PUSH on click', async () => {
    useEntityHandler({ ...mockEntityViewEntity, id: 'syn222' })
    useSchemaBindingHandler('syn222', null)
    const onSynchronizeRequest = vi.fn()
    useSynchronizeHandlers(onSynchronizeRequest)

    renderComponent({ sessionId: 'session-1', sourceEntityId: 'syn222' })

    const button = await screen.findByRole('button', { name: 'Sync changes' })
    await userEvent.click(button)

    await waitFor(() =>
      expect(onSynchronizeRequest).toHaveBeenCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.grid.SynchronizeGridRequest',
        gridSessionId: 'session-1',
        syncType: 'PULL_PUSH',
      }),
    )
  })

  it('renders "Import latest changes" and triggers a PULL when the RecordSet source has been updated', async () => {
    useEntityHandler(mockRecordSetEntity)
    useSchemaBindingHandler('syn111', mockSchemaBinding)
    const onSynchronizeRequest = vi.fn()
    useSynchronizeHandlers(onSynchronizeRequest)

    renderComponent({
      sessionId: 'session-1',
      sourceEntityId: 'syn111',
      sourceEntityVersionNumber: 1, // older than mockRecordSetEntity.versionNumber (2)
      gridJsonSchema$Id: mockSchemaBinding.jsonSchemaVersionInfo.$id,
    })

    const button = await screen.findByRole('button', {
      name: 'Import latest changes',
    })
    await userEvent.click(button)

    await waitFor(() =>
      expect(onSynchronizeRequest).toHaveBeenCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.grid.SynchronizeGridRequest',
        gridSessionId: 'session-1',
        syncType: 'PULL',
      }),
    )
  })

  it('renders "Sync changes" for an up-to-date RecordSet source', async () => {
    useEntityHandler({ ...mockRecordSetEntity, versionNumber: 1 })
    useSchemaBindingHandler('syn111', mockSchemaBinding)
    const onSynchronizeRequest = vi.fn()
    useSynchronizeHandlers(onSynchronizeRequest)

    renderComponent({
      sessionId: 'session-1',
      sourceEntityId: 'syn111',
      sourceEntityVersionNumber: 1,
      gridJsonSchema$Id: mockSchemaBinding.jsonSchemaVersionInfo.$id,
    })

    const button = await screen.findByRole('button', { name: 'Sync changes' })
    await userEvent.click(button)

    await waitFor(() =>
      expect(onSynchronizeRequest).toHaveBeenCalledWith({
        concreteType:
          'org.sagebionetworks.repo.model.grid.SynchronizeGridRequest',
        gridSessionId: 'session-1',
        syncType: 'PULL_PUSH',
      }),
    )
  })

  it('wires a successful "synchronize" mutation result to a success toast', async () => {
    useEntityHandler({ ...mockEntityViewEntity, id: 'syn222' })
    useSchemaBindingHandler('syn222', null)
    useSynchronizeHandlers(vi.fn())

    renderComponent({ sessionId: 'session-1', sourceEntityId: 'syn222' })

    await userEvent.click(
      await screen.findByRole('button', { name: 'Sync changes' }),
    )

    await waitFor(() =>
      expect(mockDisplayToast).toHaveBeenCalledWith(
        'Successfully synchronized changes.',
        'success',
      ),
    )
  })
})

describe('shouldPullBeforePush', () => {
  const gridSession: GridSession = {
    sessionId: 'session-1',
    sourceEntityId: 'syn111',
    sourceEntityVersionNumber: 1,
    gridJsonSchema$Id: mockSchemaBinding.jsonSchemaVersionInfo.$id,
  }

  it('returns false when the source entity does not support PULL (e.g. an entityview)', () => {
    expect(shouldPullBeforePush(gridSession, mockEntityViewEntity, null)).toBe(
      false,
    )
  })

  it('returns false for a RecordSet that has not changed', () => {
    const unchangedRecordSet = { ...mockRecordSetEntity, versionNumber: 1 }
    expect(
      shouldPullBeforePush(gridSession, unchangedRecordSet, mockSchemaBinding),
    ).toBe(false)
  })

  it('returns true when the RecordSet has a newer version than the grid session', () => {
    expect(shouldPullBeforePush(gridSession, mockRecordSetEntity, null)).toBe(
      true,
    )
  })

  it('returns true when the JSON Schema binding has changed', () => {
    const unchangedRecordSet = { ...mockRecordSetEntity, versionNumber: 1 }
    const updatedSchemaBinding = {
      ...mockSchemaBinding,
      jsonSchemaVersionInfo: {
        ...mockSchemaBinding.jsonSchemaVersionInfo,
        $id: 'org.sagebionetworks-NewSchema-1.0.0',
      },
    }
    expect(
      shouldPullBeforePush(
        gridSession,
        unchangedRecordSet,
        updatedSchemaBinding,
      ),
    ).toBe(true)
  })

  it('returns false when the source entity is null', () => {
    expect(shouldPullBeforePush(gridSession, null, mockSchemaBinding)).toBe(
      false,
    )
  })
})

describe('getSyncButtonLabels', () => {
  it('prioritizes the PULL copy when shouldPull is true', () => {
    expect(getSyncButtonLabels(true, EntityType.recordset).buttonText).toBe(
      'Import latest changes',
    )
  })

  it('returns table-specific copy for a table source when shouldPull is false', () => {
    expect(getSyncButtonLabels(false, EntityType.table).buttonText).toBe(
      'Apply changes',
    )
  })

  it('returns "Sync changes" for a RecordSet source', () => {
    expect(getSyncButtonLabels(false, EntityType.recordset).buttonText).toBe(
      'Sync changes',
    )
  })

  it('returns the default sync copy for a source with no known type when shouldPull is false', () => {
    expect(getSyncButtonLabels(false, undefined).buttonText).toBe(
      'Sync changes',
    )
  })

  // This test will fail if a new EntityType is added and not handled by getSyncButtonLabels
  test.each(Object.values(EntityType))(
    'does not throw for EntityType: %s',
    entityType => {
      expect(() => getSyncButtonLabels(false, entityType)).not.toThrow()
      expect(() => getSyncButtonLabels(true, entityType)).not.toThrow()
    },
  )
})

describe('buildMergeGridVariables', () => {
  const gridSession: GridSession = {
    sessionId: 'session-1',
    sourceEntityId: 'syn222',
  }

  it('requests a PULL when shouldPull is true', () => {
    expect(
      buildMergeGridVariables(gridSession, EntityType.recordset, true),
    ).toEqual({
      gridSessionId: 'session-1',
      sourceEntityId: 'syn222',
      sourceEntityType: EntityType.recordset,
      syncType: 'PULL',
    })
  })

  it('requests a PULL_PUSH when shouldPull is false', () => {
    expect(
      buildMergeGridVariables(gridSession, EntityType.table, false),
    ).toEqual({
      gridSessionId: 'session-1',
      sourceEntityId: 'syn222',
      sourceEntityType: EntityType.table,
      syncType: 'PULL_PUSH',
    })
  })
})

describe('onSynchronizeSuccess', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('shows a PULL-specific success toast when there are no errors', () => {
    onSynchronizeSuccess(mockSynchronizeGridResponse(), 'PULL')
    expect(mockDisplayToast).toHaveBeenCalledWith(
      'Successfully imported latest changes.',
      'success',
    )
  })

  it('shows a generic success toast for PULL_PUSH when there are no errors', () => {
    onSynchronizeSuccess(mockSynchronizeGridResponse(), 'PULL_PUSH')
    expect(mockDisplayToast).toHaveBeenCalledWith(
      'Successfully synchronized changes.',
      'success',
    )
  })

  it('shows a warning toast listing the error messages when present', () => {
    const result = mockSynchronizeGridResponse({
      errorMessages: ['row 1 failed', 'row 2 failed'],
    })
    onSynchronizeSuccess(result, 'PULL_PUSH')

    expect(mockDisplayToast).toHaveBeenCalledTimes(1)
    const [content, severity, options] = mockDisplayToast.mock.calls[0]
    expect(severity).toBe('warning')
    expect(options).toEqual({ title: 'Some changes could not be applied' })
    render(<>{content}</>)
    expect(screen.getByText('row 1 failed')).toBeInTheDocument()
    expect(screen.getByText('row 2 failed')).toBeInTheDocument()
  })
})
