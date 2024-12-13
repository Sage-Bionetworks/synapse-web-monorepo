import * as SynapseConstants from '../../../../utils/SynapseConstants'
import { getAllIsSelected, valueToLabel } from './EnumFacetFilterUtils'
import {
  EntityHeader,
  Evaluation,
  UserGroupHeader,
} from '@sage-bionetworks/synapse-types'
import { mockUserGroupHeader } from '../../../../mocks/user/mock_user_profile'
import mockFileEntity from '../../../../mocks/entity/mockFileEntity'

describe('EnumFacetFilterUtils', () => {
  const id = '123'
  const profiles: UserGroupHeader[] = [
    {
      ...mockUserGroupHeader,
      ownerId: id,
    },
  ]
  const entityHeaders: EntityHeader[] = [
    {
      ...mockFileEntity.entityHeader,
      id: id,
    },
  ]
  const evaluations: Evaluation[] = [
    {
      id: id,
      name: 'test evaluation',
    },
  ]
  describe('valueToLabel', () => {
    it('handles VALUE_NOT_SET', () => {
      expect(
        valueToLabel(
          {
            value: SynapseConstants.VALUE_NOT_SET,
            count: 10,
            isSelected: false,
          },
          profiles,
          entityHeaders,
          evaluations,
        ),
      ).toBe(SynapseConstants.FRIENDLY_VALUE_NOT_SET)
    })
    it('handles user profile', () => {
      expect(
        valueToLabel(
          { value: id, count: 10, isSelected: false },
          profiles,
          [],
          [],
        ),
      ).toBe(mockUserGroupHeader.userName)
    })
    it('handles unknown user profile', () => {
      expect(
        valueToLabel(
          { value: '234', count: 10, isSelected: false },
          profiles,
          [],
          [],
        ),
      ).toBe('unknown (234)')
    })
    it('handles entity', () => {
      expect(
        valueToLabel(
          { value: id, count: 10, isSelected: false },
          [],
          entityHeaders,
          [],
        ),
      ).toBe(mockFileEntity.entityHeader.name)
    })
    it('handles unknown entity', () => {
      expect(
        valueToLabel(
          { value: '234', count: 10, isSelected: false },
          [],
          entityHeaders,
          [],
        ),
      ).toBe('unknown (234)')
    })
    it('handles evaluation', () => {
      expect(
        valueToLabel(
          { value: id, count: 10, isSelected: false },
          [],
          [],
          evaluations,
        ),
      ).toBe('test evaluation')
    })
    it('handles unknown evaluation', () => {
      expect(
        valueToLabel(
          { value: '234', count: 10, isSelected: false },
          [],
          [],
          evaluations,
        ),
      ).toBe('234')
    })
  })

  describe('getAllIsSelected', () => {
    it('returns true when selectedFacets is undefined', () => {
      expect(
        getAllIsSelected(
          {
            query: {
              sql: 'SELECT * FROM syn1234',
              selectedFacets: undefined,
            },
            concreteType:
              'org.sagebionetworks.repo.model.table.QueryBundleRequest',
            entityId: 'syn1234',
            partMask: 511,
          },
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
            columnName: 'foo',
            facetType: 'enumeration',
            facetValues: [
              { value: 'a', count: 10, isSelected: false },
              { value: 'b', count: 9, isSelected: false },
              { value: 'c', count: 8, isSelected: false },
            ],
          },
        ),
      ).toBe(true)
    })
    it('returns true if no matching filter exists in selectedFacets', () => {
      expect(
        getAllIsSelected(
          {
            query: {
              sql: 'SELECT * FROM syn1234',
              selectedFacets: [
                {
                  concreteType:
                    'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
                  columnName: 'bar',
                  facetValues: ['z', 'y', 'x'],
                },
              ],
            },
            concreteType:
              'org.sagebionetworks.repo.model.table.QueryBundleRequest',
            entityId: 'syn1234',
            partMask: 511,
          },
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
            columnName: 'foo',
            facetType: 'enumeration',
            facetValues: [
              { value: 'a', count: 10, isSelected: false },
              { value: 'b', count: 9, isSelected: false },
              { value: 'c', count: 8, isSelected: false },
            ],
          },
        ),
      ).toBe(true)
    })

    it('returns true if no value is in the existing facet selection', () => {
      expect(
        getAllIsSelected(
          {
            query: {
              sql: 'SELECT * FROM syn1234',
              selectedFacets: [
                {
                  concreteType:
                    'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
                  columnName: 'foo',
                  facetValues: [],
                },
              ],
            },
            concreteType:
              'org.sagebionetworks.repo.model.table.QueryBundleRequest',
            entityId: 'syn1234',
            partMask: 511,
          },
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
            columnName: 'foo',
            facetType: 'enumeration',
            facetValues: [
              { value: 'a', count: 10, isSelected: false },
              { value: 'b', count: 9, isSelected: false },
              { value: 'c', count: 8, isSelected: false },
            ],
          },
        ),
      ).toBe(true)
    })
    it('returns false if a filter is applied', () => {
      expect(
        getAllIsSelected(
          {
            query: {
              sql: 'SELECT * FROM syn1234',
              selectedFacets: [
                {
                  concreteType:
                    'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
                  columnName: 'foo',
                  facetValues: ['a'],
                },
              ],
            },
            concreteType:
              'org.sagebionetworks.repo.model.table.QueryBundleRequest',
            entityId: 'syn1234',
            partMask: 511,
          },
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
            columnName: 'foo',
            facetType: 'enumeration',
            facetValues: [
              { value: 'a', count: 10, isSelected: false },
              { value: 'b', count: 9, isSelected: false },
              { value: 'c', count: 8, isSelected: false },
            ],
          },
        ),
      ).toBe(false)
    })
    it('returns false if a filter is applied, even if the selection is not an enumerated value (PORTALS-2680)', () => {
      expect(
        getAllIsSelected(
          {
            query: {
              sql: 'SELECT * FROM syn1234',
              selectedFacets: [
                {
                  concreteType:
                    'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
                  columnName: 'foo',
                  facetValues: ['z'],
                },
              ],
            },
            concreteType:
              'org.sagebionetworks.repo.model.table.QueryBundleRequest',
            entityId: 'syn1234',
            partMask: 511,
          },
          {
            concreteType:
              'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
            columnName: 'foo',
            facetType: 'enumeration',
            facetValues: [
              { value: 'a', count: 10, isSelected: false },
              { value: 'b', count: 9, isSelected: false },
              { value: 'c', count: 8, isSelected: false },
            ],
          },
        ),
      ).toBe(false)
    })
  })
})
