import { mockSchemaBinding } from '@/mocks/mockSchema'
import { useGetEntity } from '@/synapse-queries'
import { useGetSchemaBinding } from '@/synapse-queries/jsonschema/useEntityBoundSchema'
import {
  getUseQueryLoadingMock,
  getUseQuerySuccessMock,
} from '@/testutils/ReactQueryMockUtils'
import {
  Entity,
  EntityType,
  GridSession,
} from '@sage-bionetworks/synapse-client'
import { renderHook } from '@testing-library/react'
import useGridSourceSyncStatus, {
  shouldPullBeforePush,
} from './useGridSourceSyncStatus'

vi.mock('@/synapse-queries')
vi.mock('@/synapse-queries/jsonschema/useEntityBoundSchema')

const mockUseGetEntity = vi.mocked(useGetEntity)
const mockUseGetSchemaBinding = vi.mocked(useGetSchemaBinding)

const mockRecordSetEntity = {
  id: 'syn111',
  name: 'my record set',
  concreteType: 'org.sagebionetworks.repo.model.RecordSet',
  versionNumber: 2,
} as const satisfies Entity

const mockEntityViewEntity = {
  id: 'syn333',
  name: 'my entity view',
  concreteType: 'org.sagebionetworks.repo.model.table.EntityView',
} as const satisfies Entity

const upToDateSession: GridSession = {
  sessionId: 'session-1',
  sourceEntityId: 'syn111',
  sourceEntityVersionNumber: mockRecordSetEntity.versionNumber,
  gridJsonSchema$Id: mockSchemaBinding.jsonSchemaVersionInfo.$id,
}

describe('useGridSourceSyncStatus', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockUseGetEntity.mockReturnValue(
      getUseQuerySuccessMock(mockRecordSetEntity),
    )
    mockUseGetSchemaBinding.mockReturnValue(
      getUseQuerySuccessMock(mockSchemaBinding),
    )
  })

  it('reports the source as outdated when the RecordSet has a newer version', () => {
    const { result } = renderHook(() =>
      useGridSourceSyncStatus({
        ...upToDateSession,
        sourceEntityVersionNumber: 1,
      }),
    )

    expect(result.current.isSourceOutdated).toBe(true)
    expect(result.current.isLoading).toBe(false)
  })

  it('reports the source as up to date when nothing has changed', () => {
    const { result } = renderHook(() =>
      useGridSourceSyncStatus(upToDateSession),
    )

    expect(result.current.isSourceOutdated).toBe(false)
  })

  it('returns the source entity name and type', () => {
    const { result } = renderHook(() =>
      useGridSourceSyncStatus(upToDateSession),
    )

    expect(result.current.sourceEntityName).toBe(mockRecordSetEntity.name)
    expect(result.current.sourceEntityType).toBe(EntityType.recordset)
  })

  it('reports the source as up to date while the entity is loading', () => {
    mockUseGetEntity.mockReturnValue(getUseQueryLoadingMock())

    const { result } = renderHook(() =>
      useGridSourceSyncStatus({
        ...upToDateSession,
        sourceEntityVersionNumber: 1,
      }),
    )

    expect(result.current.isSourceOutdated).toBe(false)
    expect(result.current.isLoading).toBe(true)
  })

  it('reports the source as up to date while the schema binding is loading', () => {
    mockUseGetSchemaBinding.mockReturnValue(getUseQueryLoadingMock())

    const { result } = renderHook(() =>
      useGridSourceSyncStatus({
        ...upToDateSession,
        sourceEntityVersionNumber: 1,
      }),
    )

    expect(result.current.isSourceOutdated).toBe(false)
    expect(result.current.isLoading).toBe(true)
  })

  it('reports the source as up to date for a source type that does not support importing', () => {
    mockUseGetEntity.mockReturnValue(
      getUseQuerySuccessMock(mockEntityViewEntity),
    )

    const { result } = renderHook(() =>
      useGridSourceSyncStatus({
        ...upToDateSession,
        sourceEntityVersionNumber: 1,
      }),
    )

    expect(result.current.isSourceOutdated).toBe(false)
    expect(result.current.sourceEntityType).toBe(EntityType.entityview)
  })

  it('reports the source as up to date when there is no session', () => {
    const { result } = renderHook(() => useGridSourceSyncStatus(null))

    expect(result.current.isSourceOutdated).toBe(false)
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
