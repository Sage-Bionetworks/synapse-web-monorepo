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
import { registerTableQueryResult } from '../../../../mocks/msw/handlers/tableQueryService'

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
    registerTableQueryResult(nextQueryRequest.query, {
      ...mockQueryResponseData,
      columnModels: [columnModel],
    })
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

      // Only the "Chevy" facet selection should be checked
      expect(checkboxes[1].checked).toBe(true)
      expect(checkboxes[2].checked).toBe(false)
      expect(checkboxes[3].checked).toBe(false)
    })

    describe('label initialization', () => {
      it('should set labels correctly for STRING type', async () => {
        const { container } = await init()

        const checkboxes = await screen.findAllByRole<HTMLInputElement>(
          'checkbox',
        )
        const counts = container.querySelectorAll<HTMLDivElement>(
          '.EnumFacetFilter__count',
        )

        expect(checkboxes).toHaveLength(4)
        expect(counts).toHaveLength(3)

        expect(checkboxes[0]).toHaveAccessibleName('All')

        // Note: Facet values are resorted to alphabetical order! [1] will appear before [0]
        expect(checkboxes[1]).toHaveAccessibleName(
          `${stringFacetValues[1].value}`,
        )
        expect(counts[0]).toHaveTextContent(`${stringFacetValues[1].count}`)

        expect(checkboxes[2]).toHaveAccessibleName(
          `${stringFacetValues[0].value}`,
        )
        expect(counts[1]).toHaveTextContent(`${stringFacetValues[0].count}`)

        expect(checkboxes[3]).toHaveAccessibleName(`Not Assigned`)
        expect(counts[2]).toHaveTextContent(`${stringFacetValues[2].count}`)
      })

      it('should set labels correctly for ENTITYID type', async () => {
        const entityColumnModel: ColumnModel = {
          ...columnModel,
          columnType: ColumnTypeEnum.ENTITYID,
          name: 'File',
        }

        registerTableQueryResult(nextQueryRequest.query, {
          ...mockQueryResponseData,
          columnModels: [entityColumnModel],
        })

        const updatedProps: EnumFacetFilterProps = {
          facet: {
            ...facet,
            columnName: 'File',
            facetValues: entityFacetValues,
          },
        }

        const { container } = await init(updatedProps)

        const checkboxes = await screen.findAllByRole<HTMLInputElement>(
          'checkbox',
        )
        const counts = container.querySelectorAll<HTMLDivElement>(
          '.EnumFacetFilter__count',
        )

        // Wait for the entity info to populate and replace the ID
        await waitFor(() =>
          expect(checkboxes[1]).toHaveAccessibleName(mockFileEntityData.name),
        )
        expect(counts.item(0)).toHaveTextContent(
          `${entityFacetValues[1].count}`,
        )

        await waitFor(() =>
          expect(checkboxes[2]).toHaveAccessibleName(mockTableEntity.name),
        )
        expect(counts.item(1)).toHaveTextContent(
          `${entityFacetValues[2].count}`,
        )

        await waitFor(() =>
          expect(checkboxes[3]).toHaveAccessibleName(`Not Assigned`),
        )
        expect(counts.item(2)).toHaveTextContent(
          `${entityFacetValues[0].count}`,
        )
      })

      it('should set labels correctly for USERID type', async () => {
        const userColumnModel: ColumnModel = {
          ...columnModel,
          columnType: ColumnTypeEnum.USERID,
          name: 'Users',
        }

        registerTableQueryResult(nextQueryRequest.query, {
          ...mockQueryResponseData,
          columnModels: [userColumnModel],
        })

        const updatedProps: EnumFacetFilterProps = {
          facet: {
            ...facet,
            columnName: 'Users',
            facetValues: userFacetValues,
          },
        }
        const { container } = await init(updatedProps)

        const checkboxes = await screen.findAllByRole<HTMLInputElement>(
          'checkbox',
        )
        const counts = container.querySelectorAll<HTMLDivElement>(
          '.EnumFacetFilter__count',
        )
        expect(checkboxes).toHaveLength(4)
        expect(counts).toHaveLength(3)

        // First item (0) is select all
        expect(checkboxes[0]).toHaveAccessibleName('All')
        // Wait for the user info to populate and replace the ID
        await waitFor(() =>
          expect(checkboxes[1]).toHaveAccessibleName(
            mockUserProfileData2.userName,
          ),
        )
        expect(counts.item(0)).toHaveTextContent(
          userFacetValues[2].count.toLocaleString(),
        )

        await waitFor(() =>
          expect(checkboxes[2]).toHaveAccessibleName(
            mockUserProfileData.userName,
          ),
        )
        expect(counts.item(1)).toHaveTextContent(
          userFacetValues[1].count.toLocaleString(),
        )

        await waitFor(() =>
          expect(checkboxes[3]).toHaveAccessibleName(`Not Assigned`),
        )
        expect(counts.item(2)).toHaveTextContent(
          userFacetValues[0].count.toLocaleString(),
        )
      })
    })
  })

  describe('interactions', () => {
    it('should call addValueToSelectedFacet with debounce option', async () => {
      registerTableQueryResult(
        {
          ...nextQueryRequest.query,
          selectedFacets: [
            {
              concreteType:
                'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
              columnName: 'Make',
              facetValues: ['Honda'],
            },
          ],
        },
        {
          ...mockQueryResponseData,
          columnModels: [columnModel],
        },
      )

      await init()
      await waitFor(() => {
        expect(screen.queryAllByRole('checkbox').length).toBeGreaterThan(0)
      })
      const individualFacetCheckboxes = screen.getAllByRole('checkbox').slice(1)

      // Ensure the checkboxes are in the correct state before interacting with them
      expect(individualFacetCheckboxes[1]).not.toBeChecked()
      expect(individualFacetCheckboxes[0]).toBeChecked()

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
      registerTableQueryResult(
        {
          sql: nextQueryRequest.query.sql,
        },
        {
          ...mockQueryResponseData,
          columnModels: [columnModel],
        },
      )
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
