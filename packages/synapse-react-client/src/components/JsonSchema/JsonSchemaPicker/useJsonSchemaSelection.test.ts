import { MOCK_CONTEXT_VALUE } from '@/mocks/MockSynapseContext'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import {
  JsonSchemaInfo,
  JsonSchemaVersionInfo,
  ListJsonSchemaVersionInfoResponse,
} from '@sage-bionetworks/synapse-client'
import { RowSelectionState } from '@tanstack/react-table'
import { act, renderHook, waitFor } from '@testing-library/react'
import { VersionSelectionType } from './VersionSelectionType'
import {
  JsonSchemaSelection,
  useJsonSchemaSelection,
} from './useJsonSchemaSelection'

const postRepoV1SchemaVersionListSpy = vi.spyOn(
  MOCK_CONTEXT_VALUE.synapseClient.jsonSchemaServicesClient,
  'postRepoV1SchemaVersionList',
)

const SCHEMA_A: JsonSchemaInfo = {
  organizationId: '1',
  organizationName: 'org.sagebionetworks',
  schemaId: 'schema-a',
  schemaName: 'SchemaA',
}
const SCHEMA_B: JsonSchemaInfo = {
  organizationId: '1',
  organizationName: 'org.sagebionetworks',
  schemaId: 'schema-b',
  schemaName: 'SchemaB',
}
const SCHEMAS = [SCHEMA_A, SCHEMA_B]

const VERSION_1: JsonSchemaVersionInfo = {
  organizationId: '1',
  organizationName: 'org.sagebionetworks',
  schemaId: 'schema-a',
  schemaName: 'SchemaA',
  versionId: '1',
  $id: 'org.sagebionetworks-SchemaA-1.0.0',
  semanticVersion: '1.0.0',
}
const VERSION_2: JsonSchemaVersionInfo = {
  organizationId: '1',
  organizationName: 'org.sagebionetworks',
  schemaId: 'schema-a',
  schemaName: 'SchemaA',
  versionId: '2',
  $id: 'org.sagebionetworks-SchemaA-2.0.0',
  semanticVersion: '2.0.0',
}

function renderSelectionHook(
  props: Partial<{
    schemas: JsonSchemaInfo[]
    versionSelectionType: VersionSelectionType
    initialSelected: JsonSchemaSelection
  }> = {},
) {
  const onSelectionChange = vi.fn()
  const result = renderHook(
    ({ schemas, versionSelectionType, initialSelected }) =>
      useJsonSchemaSelection({
        schemas,
        versionSelectionType,
        onSelectionChange,
        initialSelected,
      }),
    {
      initialProps: {
        schemas: SCHEMAS,
        versionSelectionType: VersionSelectionType.REQUIRED,
        ...props,
      },
      wrapper: createWrapper(),
    },
  )
  return { ...result, onSelectionChange }
}

function selectSchema(
  result: {
    current: { handleRowSelectionChange: (v: RowSelectionState) => void }
  },
  schema: JsonSchemaInfo,
) {
  act(() => {
    result.current.handleRowSelectionChange({ [schema.schemaId!]: true })
  })
}

/**
 * Queues a controllable response for the next `postRepoV1SchemaVersionList` call (i.e. the
 * next schema selected under REQUIRED), returning a function to resolve it on demand -- so
 * tests can precisely control when the "auto-select latest version" fetch settles relative to
 * other actions (a manual pick, or selecting a different schema).
 */
function mockVersionsFetchPending() {
  let resolve!: (response: ListJsonSchemaVersionInfoResponse) => void
  postRepoV1SchemaVersionListSpy.mockReturnValueOnce(
    new Promise(res => {
      resolve = res
    }),
  )
  return (versions: JsonSchemaVersionInfo[]) => resolve({ page: versions })
}

async function flushMicrotasks() {
  await new Promise(resolve => setTimeout(resolve, 10))
}

describe('useJsonSchemaSelection', () => {
  beforeEach(() => vi.clearAllMocks())

  it('reports undefined when nothing is selected', () => {
    const { result, onSelectionChange } = renderSelectionHook()
    expect(result.current.selectedSchema).toBeUndefined()
    expect(onSelectionChange).not.toHaveBeenCalled()
  })

  it('REQUIRED: reports undefined while a schema is selected but no version has resolved', () => {
    mockVersionsFetchPending()
    const { result, onSelectionChange } = renderSelectionHook({
      versionSelectionType: VersionSelectionType.REQUIRED,
    })

    selectSchema(result, SCHEMA_A)

    expect(result.current.selectedSchema).toEqual(SCHEMA_A)
    expect(result.current.selectedVersionInfo).toBeUndefined()
    expect(onSelectionChange).toHaveBeenLastCalledWith(undefined)
  })

  it('REQUIRED: reports the selection once a version is manually chosen', () => {
    mockVersionsFetchPending()
    const { result, onSelectionChange } = renderSelectionHook({
      versionSelectionType: VersionSelectionType.REQUIRED,
    })

    selectSchema(result, SCHEMA_A)
    act(() => {
      result.current.handleVersionChange(VERSION_2)
    })

    expect(result.current.selectedVersionInfo).toEqual(VERSION_2)
    expect(onSelectionChange).toHaveBeenLastCalledWith({
      $id: VERSION_2.$id,
      versionInfo: VERSION_2,
    })
  })

  it('REQUIRED: auto-selects and reports the latest version once the version fetch resolves', async () => {
    const resolveFetch = mockVersionsFetchPending()
    const { result, onSelectionChange } = renderSelectionHook({
      versionSelectionType: VersionSelectionType.REQUIRED,
    })

    selectSchema(result, SCHEMA_A)
    // The API returns versions lowest-to-highest; the latest is the last element.
    resolveFetch([VERSION_1, VERSION_2])

    await waitFor(() =>
      expect(result.current.selectedVersionInfo).toEqual(VERSION_2),
    )
    expect(onSelectionChange).toHaveBeenLastCalledWith({
      $id: VERSION_2.$id,
      versionInfo: VERSION_2,
    })
  })

  it('REQUIRED: a manual pick made before the auto-fetch resolves wins, and the stale fetch result is discarded', async () => {
    const resolveFetch = mockVersionsFetchPending()
    const { result, onSelectionChange } = renderSelectionHook({
      versionSelectionType: VersionSelectionType.REQUIRED,
    })

    selectSchema(result, SCHEMA_A)
    act(() => {
      result.current.handleVersionChange(VERSION_1)
    })

    resolveFetch([VERSION_1, VERSION_2])
    await flushMicrotasks()

    expect(result.current.selectedVersionInfo).toEqual(VERSION_1)
    expect(onSelectionChange).toHaveBeenLastCalledWith({
      $id: VERSION_1.$id,
      versionInfo: VERSION_1,
    })
  })

  it('REQUIRED: selecting a different schema before the auto-fetch resolves discards the stale result', async () => {
    const resolveFetchForA = mockVersionsFetchPending()
    const { result, onSelectionChange } = renderSelectionHook({
      versionSelectionType: VersionSelectionType.REQUIRED,
    })

    selectSchema(result, SCHEMA_A)
    const resolveFetchForB = mockVersionsFetchPending()
    selectSchema(result, SCHEMA_B)

    resolveFetchForA([VERSION_1, VERSION_2])
    await flushMicrotasks()

    expect(result.current.selectedSchema).toEqual(SCHEMA_B)
    expect(result.current.selectedVersionInfo).toBeUndefined()

    resolveFetchForB([VERSION_1])
    await waitFor(() =>
      expect(result.current.selectedVersionInfo).toEqual(VERSION_1),
    )
    expect(onSelectionChange).toHaveBeenLastCalledWith({
      $id: VERSION_1.$id,
      versionInfo: VERSION_1,
    })
  })

  it('LATEST_ALLOWED: reports an unversioned $id when the version is cleared to "Latest", without fetching versions', () => {
    const { result, onSelectionChange } = renderSelectionHook({
      versionSelectionType: VersionSelectionType.LATEST_ALLOWED,
    })

    selectSchema(result, SCHEMA_A)
    act(() => {
      result.current.handleVersionChange(undefined)
    })

    expect(onSelectionChange).toHaveBeenLastCalledWith({
      $id: `${SCHEMA_A.organizationName}-${SCHEMA_A.schemaName}`,
      versionInfo: undefined,
    })
    // Selecting a row under LATEST_ALLOWED doesn't need to know the latest version up front.
    expect(postRepoV1SchemaVersionListSpy).not.toHaveBeenCalled()
  })

  it('resets the resolved version when a different schema is selected', () => {
    mockVersionsFetchPending()
    const { result, onSelectionChange } = renderSelectionHook({
      versionSelectionType: VersionSelectionType.REQUIRED,
    })

    selectSchema(result, SCHEMA_A)
    act(() => {
      result.current.handleVersionChange(VERSION_1)
    })
    expect(result.current.selectedVersionInfo).toEqual(VERSION_1)

    mockVersionsFetchPending()
    selectSchema(result, SCHEMA_B)

    expect(result.current.selectedSchema).toEqual(SCHEMA_B)
    expect(result.current.selectedVersionInfo).toBeUndefined()
    // Waiting on a version to resolve for the newly-selected schema under REQUIRED.
    expect(onSelectionChange).toHaveBeenLastCalledWith(undefined)
  })

  it('reports undefined when the schema is deselected', () => {
    const { result, onSelectionChange } = renderSelectionHook({
      versionSelectionType: VersionSelectionType.LATEST_ALLOWED,
    })

    selectSchema(result, SCHEMA_A)
    act(() => {
      result.current.handleRowSelectionChange({})
    })

    expect(result.current.selectedSchema).toBeUndefined()
    expect(onSelectionChange).toHaveBeenLastCalledWith(undefined)
  })

  it('supports functional updaters, matching TanStack Table onRowSelectionChange', () => {
    const { result, onSelectionChange } = renderSelectionHook({
      versionSelectionType: VersionSelectionType.LATEST_ALLOWED,
    })

    act(() => {
      result.current.handleRowSelectionChange(old => ({
        ...old,
        [SCHEMA_A.schemaId!]: true,
      }))
    })

    expect(result.current.selectedSchema).toEqual(SCHEMA_A)
    expect(onSelectionChange).toHaveBeenLastCalledWith({
      $id: `${SCHEMA_A.organizationName}-${SCHEMA_A.schemaName}`,
      versionInfo: undefined,
    })
  })

  it('seeds rowSelection and selectedVersionInfo from initialSelected, without fetching versions', () => {
    const initialSelected: JsonSchemaSelection = {
      $id: VERSION_1.$id,
      versionInfo: VERSION_1,
    }
    const { result } = renderSelectionHook({
      schemas: SCHEMAS,
      versionSelectionType: VersionSelectionType.REQUIRED,
      initialSelected,
    })

    expect(result.current.selectedSchema).toEqual(SCHEMA_A)
    expect(result.current.selectedVersionInfo).toEqual(VERSION_1)
    expect(result.current.rowSelection).toEqual({ [SCHEMA_A.schemaId!]: true })
    expect(postRepoV1SchemaVersionListSpy).not.toHaveBeenCalled()
  })
})
