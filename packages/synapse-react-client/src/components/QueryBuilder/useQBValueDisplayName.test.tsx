import mockFileEntityData, {
  MOCK_FILE_NAME,
} from '@/mocks/entity/mockFileEntity'
import { server } from '@/mocks/msw/server'
import { MOCK_USER_ID, MOCK_USER_NAME } from '@/mocks/user/mock_user_profile'
import { createWrapper } from '@/testutils/TestingLibraryUtils'
import { FRIENDLY_VALUE_NOT_SET, VALUE_NOT_SET } from '@/utils/SynapseConstants'
import {
  ColumnModel,
  ColumnTypeEnum,
  FacetColumnResult,
} from '@sage-bionetworks/synapse-types'
import { renderHook, waitFor } from '@testing-library/react'
import { useQBValueDisplayName } from './useQBValueDisplayName'

const MOCK_FILE_ID = mockFileEntityData.id.replace('syn', '')
/** An entity ID the backend returns no header for (e.g. deleted, or no read access). */
const UNRESOLVABLE_FILE_ID = '999999999'

const columnModels: ColumnModel[] = [
  {
    id: '1',
    name: 'File',
    columnType: ColumnTypeEnum.ENTITYID,
    facetType: 'enumeration',
  },
  {
    id: '2',
    name: 'Contributor',
    columnType: ColumnTypeEnum.USERID,
    facetType: 'enumeration',
  },
  {
    id: '3',
    name: 'Sex',
    columnType: ColumnTypeEnum.STRING,
    facetType: 'enumeration',
  },
]

const facetResults: FacetColumnResult[] = [
  {
    concreteType:
      'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
    columnName: 'File',
    facetType: 'enumeration',
    facetValues: [
      { value: MOCK_FILE_ID, count: 1, isSelected: false },
      { value: UNRESOLVABLE_FILE_ID, count: 1, isSelected: false },
      { value: VALUE_NOT_SET, count: 2, isSelected: false },
    ],
  },
  {
    concreteType:
      'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
    columnName: 'Contributor',
    facetType: 'enumeration',
    facetValues: [{ value: String(MOCK_USER_ID), count: 1, isSelected: false }],
  },
  {
    concreteType:
      'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
    columnName: 'Sex',
    facetType: 'enumeration',
    facetValues: [{ value: 'Female', count: 1, isSelected: false }],
  },
]

function renderUseQBValueDisplayName() {
  return renderHook(() => useQBValueDisplayName(columnModels, facetResults), {
    wrapper: createWrapper(),
  })
}

describe('useQBValueDisplayName', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('resolves an ENTITYID value to the entity name', async () => {
    const { result } = renderUseQBValueDisplayName()
    await waitFor(() =>
      expect(result.current('File', MOCK_FILE_ID)).toBe(MOCK_FILE_NAME),
    )
  })

  it('resolves a USERID value to the user name', async () => {
    const { result } = renderUseQBValueDisplayName()
    await waitFor(() =>
      expect(result.current('Contributor', String(MOCK_USER_ID))).toBe(
        MOCK_USER_NAME,
      ),
    )
  })

  it('leaves values of columns that do not hold Synapse IDs as-is', () => {
    const { result } = renderUseQBValueDisplayName()
    expect(result.current('Sex', 'Female')).toBe('Female')
  })

  it('labels the not-set sentinel for every column type', async () => {
    const { result } = renderUseQBValueDisplayName()
    await waitFor(() =>
      expect(result.current('File', MOCK_FILE_ID)).toBe(MOCK_FILE_NAME),
    )
    for (const columnName of ['File', 'Contributor', 'Sex', null]) {
      expect(result.current(columnName, VALUE_NOT_SET)).toBe(
        FRIENDLY_VALUE_NOT_SET,
      )
    }
  })

  it('falls back to the raw value for an ID the backend returns no header for', async () => {
    const { result } = renderUseQBValueDisplayName()
    // Both IDs are looked up in the same batch, so once the resolvable one has
    // a name the unresolvable one has settled too.
    await waitFor(() =>
      expect(result.current('File', MOCK_FILE_ID)).toBe(MOCK_FILE_NAME),
    )
    expect(result.current('File', UNRESOLVABLE_FILE_ID)).toBe(
      UNRESOLVABLE_FILE_ID,
    )
  })

  it('falls back to the raw value for a value that was never looked up', () => {
    const { result } = renderUseQBValueDisplayName()
    // Only faceted values are looked up; anything else labels as-is.
    expect(result.current('File', '123456')).toBe('123456')
  })
})
