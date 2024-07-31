import React from 'react'
import { EnumFacetFilter, EnumFacetFilterProps } from './EnumFacetFilter'
import {
  ColumnModel,
  ColumnTypeEnum,
  FacetColumnResultValueCount,
  FacetColumnResultValues,
  QueryBundleRequest,
} from '@sage-bionetworks/synapse-types'
import { render, screen, waitFor } from '@testing-library/react'
import { SynapseConstants } from '../../../../utils'
import { QueryVisualizationWrapper } from '../../../QueryVisualizationWrapper'
import { QueryContextType, useQueryContext } from '../../../../index'
import userEvent from '@testing-library/user-event'
import { server } from '../../../../mocks/msw/server'
import { getHandlersForTableQuery } from '../../../../mocks/msw/handlers/tableQueryHandlers'
import mockQueryResponseData from '../../../../mocks/mockQueryResponseData'
import { createWrapper } from '../../../../testutils/TestingLibraryUtils'
import QueryWrapper from '../../../QueryWrapper'
import { mockTableEntity } from '../../../../mocks/entity/mockTableEntity'
import { DEBOUNCE_DELAY_MS } from '../../../../utils/hooks/useImmutableTableQuery/useImmutableTableQuery'
import mockFileEntityData from '../../../../mocks/entity/mockFileEntity'
import {
  MOCK_USER_ID,
  MOCK_USER_ID_2,
  mockUserProfileData,
  mockUserProfileData2,
} from '../../../../mocks/user/mock_user_profile'

const stringFacetValues: FacetColumnResultValueCount[] = [
  { value: 'Honda', count: 2, isSelected: false },
  { value: 'Chevy', count: 1, isSelected: true },
  {
    value: SynapseConstants.VALUE_NOT_SET,
    count: 1,
    isSelected: false,
  },
]

const userFacetValues: FacetColumnResultValueCount[] = [
  {
    value: SynapseConstants.VALUE_NOT_SET,
    count: 2,
    isSelected: false,
  },
  {
    value: String(MOCK_USER_ID),
    count: 1,
    isSelected: false,
  },
  { value: String(MOCK_USER_ID_2), count: 1, isSelected: false },
]

const entityFacetValues: FacetColumnResultValueCount[] = [
  {
    value: SynapseConstants.VALUE_NOT_SET,
    count: 2,
    isSelected: false,
  },
  {
    value: mockFileEntityData.id.replace('syn', ''),
    count: 1,
    isSelected: false,
  },
  { value: mockTableEntity.id.replace('syn', ''), count: 1, isSelected: false },
]

const columnModel: ColumnModel = {
  columnType: ColumnTypeEnum.STRING,
  facetType: 'enumeration',
  id: '86423',
  name: 'Make',
}

const facet: FacetColumnResultValues = {
  columnName: 'Make',
  facetType: 'enumeration',
  facetValues: stringFacetValues,
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
}

function createTestProps(
  overrides?: Partial<EnumFacetFilterProps>,
): EnumFacetFilterProps {
  return {
    facet: facet,
    containerAs: 'Collapsible',
    ...overrides,
  }
}

const nextQueryRequest: QueryBundleRequest = {
  entityId: mockTableEntity.id,
  query: {
    sql: `select * from ${mockTableEntity.id}`,
    selectedFacets: [
      {
        columnName: 'Make',
        facetValues: ['Chevy'],
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
      },
    ],
  },
  partMask: 0xffff,
  concreteType: 'org.sagebionetworks.repo.model.table.QueryBundleRequest',
}

let currentQueryContext: QueryContextType | undefined = undefined

function ContextReceiver() {
  currentQueryContext = useQueryContext()
  return <></>
}

async function init(overrides?: Partial<EnumFacetFilterProps>) {
  const props = createTestProps(overrides)
  const renderResult = render(
    <QueryWrapper initQueryRequest={nextQueryRequest}>
      <QueryVisualizationWrapper>
        <ContextReceiver />
        <EnumFacetFilter {...props} />
      </QueryVisualizationWrapper>
    </QueryWrapper>,
    { wrapper: createWrapper() },
  )

  await waitFor(() => {
    expect(currentQueryContext).toBeDefined()
  })

  return renderResult
}

describe('EnumFacetFilter', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    currentQueryContext = undefined
    jest.clearAllMocks()
    server.use(
      ...getHandlersForTableQuery({
        ...mockQueryResponseData,
        columnModels: [columnModel],
      }),
    )
  })
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  describe('initialization', () => {
    it('should initiate selected items correctly', async () => {
      await init()
      const checkboxes = await screen.findAllByRole<HTMLInputElement>(
        'checkbox',
      )
      expect(checkboxes).toHaveLength(4)

      // "All" is not checked
      expect(checkboxes[0].checked).toBe(false)

      // Only the 2nd facet selection should be checked
      expect(checkboxes[1].checked).toBe(false)
      expect(checkboxes[2].checked).toBe(true)
      expect(checkboxes[3].checked).toBe(false)
    })

    describe('label initialization', () => {
      it('should set labels correctly for STRING type', async () => {
        const { container } = await init()
        await waitFor(() => {
          expect(screen.queryAllByRole('checkbox').length).toBeGreaterThan(0)
        })
        const labels = container.querySelectorAll<HTMLSpanElement>(
          'input[type="checkbox"] ~ label',
        )
        const counts = container.querySelectorAll<HTMLDivElement>(
          '.EnumFacetFilter__count',
        )
        expect(labels).toHaveLength(4)
        expect(counts).toHaveLength(3)

        expect(labels[0].textContent).toBe('All')

        await waitFor(() => {
          expect(labels[1].textContent).toBe(`${stringFacetValues[0].value}`)
          expect(counts[0].textContent).toBe(`${stringFacetValues[0].count}`)

          expect(labels[2].textContent).toBe(`${stringFacetValues[1].value}`)
          expect(counts[1].textContent).toBe(`${stringFacetValues[1].count}`)

          expect(labels[3].textContent).toBe(`Not Assigned`)
          expect(counts[2].textContent).toBe(`${stringFacetValues[2].count}`)
        })
      })

      it('should set labels correctly for ENTITYID type', async () => {
        const entityColumnModel: ColumnModel = {
          ...columnModel,
          columnType: ColumnTypeEnum.ENTITYID,
          name: 'File',
        }

        server.use(
          ...getHandlersForTableQuery({
            ...mockQueryResponseData,
            columnModels: [entityColumnModel],
          }),
        )

        const updatedProps: EnumFacetFilterProps = {
          facet: {
            ...facet,
            columnName: 'File',
            facetValues: entityFacetValues,
          },
        }

        const { container } = await init(updatedProps)
        await waitFor(() => {
          expect(screen.queryAllByRole('checkbox').length).toBeGreaterThan(0)
        })
        const labels = container.querySelectorAll<HTMLInputElement>(
          'input[type="checkbox"] ~ label',
        )
        const counts = container.querySelectorAll<HTMLDivElement>(
          '.EnumFacetFilter__count',
        )
        expect(labels.item(1).textContent).toBe(`Not Assigned`)
        expect(counts.item(0).textContent).toBe(`${entityFacetValues[0].count}`)

        // Wait for the entity info to populate and replace the ID
        await waitFor(() =>
          expect(labels.item(2).textContent).toBe(mockFileEntityData.name),
        )
        expect(counts.item(1).textContent).toBe(`${entityFacetValues[1].count}`)

        await waitFor(() =>
          expect(labels.item(3).textContent).toBe(mockTableEntity.name),
        )
        expect(counts.item(2).textContent).toBe(`${entityFacetValues[2].count}`)
      })

      it('should set labels correctly for USERID type', async () => {
        const userColumnModel: ColumnModel = {
          ...columnModel,
          columnType: ColumnTypeEnum.USERID,
          name: 'Users',
        }

        server.use(
          ...getHandlersForTableQuery({
            ...mockQueryResponseData,
            columnModels: [userColumnModel],
          }),
        )

        const updatedProps: EnumFacetFilterProps = {
          facet: {
            ...facet,
            columnName: 'Users',
            facetValues: userFacetValues,
          },
        }
        const { container } = await init(updatedProps)

        await waitFor(() => {
          expect(screen.queryAllByRole('checkbox').length).toBeGreaterThan(0)
        })
        const labels = container.querySelectorAll<HTMLSpanElement>(
          'input[type="checkbox"] ~ label',
        )
        const counts = container.querySelectorAll<HTMLDivElement>(
          '.EnumFacetFilter__count',
        )
        expect(labels).toHaveLength(4)
        // First item (0) is select all

        expect(labels.item(1).textContent).toBe(`Not Assigned`)
        expect(counts.item(0).textContent).toBe(`${userFacetValues[0].count}`)

        // Wait for the user info to populate and replace the ID
        await waitFor(() =>
          expect(labels.item(2).textContent).toBe(mockUserProfileData.userName),
        )
        expect(counts.item(1).textContent).toBe(`${userFacetValues[1].count}`)

        await waitFor(() =>
          expect(labels.item(3).textContent).toBe(
            mockUserProfileData2.userName,
          ),
        )
        expect(counts.item(2).textContent).toBe(`${userFacetValues[2].count}`)
      })
    })
  })

  describe('interactions', () => {
    it('should call addValueToSelectedFacet with debounce option', async () => {
      await init()
      await waitFor(() => {
        expect(screen.queryAllByRole('checkbox').length).toBeGreaterThan(0)
      })
      const individualFacetCheckboxes = screen.getAllByRole('checkbox').slice(1)

      // Ensure the checkboxes are in the correct state before interacting with them
      expect(individualFacetCheckboxes[0]).not.toBeChecked()
      expect(individualFacetCheckboxes[1]).toBeChecked()

      await userEvent.click(individualFacetCheckboxes[0])
      await userEvent.click(individualFacetCheckboxes[1])
      await waitFor(() => {
        expect(currentQueryContext?.nextQueryRequest.query).toMatchObject({
          selectedFacets: [{ columnName: 'Make', facetValues: ['Honda'] }],
        })
      })
      await waitFor(
        () => {
          expect(currentQueryContext?.currentQueryRequest.query).toMatchObject({
            selectedFacets: [{ columnName: 'Make', facetValues: ['Honda'] }],
          })
        },
        // Wait for multiple changes to be debounced before they are applied
        { timeout: DEBOUNCE_DELAY_MS * 2 },
      )
    })
    it('should trigger callback on clear', async () => {
      await init()
      const selectAllCheckbox = await screen.findByLabelText('All')
      await userEvent.click(selectAllCheckbox)

      await waitFor(() => {
        expect(
          currentQueryContext?.nextQueryRequest.query.selectedFacets,
        ).not.toBeDefined()
      })
    })
  })
})
