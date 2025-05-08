import { describe, vi, test } from 'vitest'
import { getPillPropsFromTextMatchesQueryFilter } from './SelectionCriteriaPills'
import { TextMatchesQueryFilter } from '@sage-bionetworks/synapse-types'
import { QueryContextType } from '@/components/QueryContext'

describe('SelectionCriteriaPills', () => {
  describe('getPillPropsFromTextMatchesQueryFilter', () => {
    test('No searchMode specified, (NATURAL_LANGUAGE)', () => {
      const queryFilter: TextMatchesQueryFilter = {
        concreteType:
          'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
        searchExpression: 'foo',
      }
      const mockQueryContext = { removeQueryFilter: vi.fn() }
      const actual = getPillPropsFromTextMatchesQueryFilter(
        queryFilter,
        mockQueryContext as unknown as QueryContextType,
      )
      expect(actual).toEqual({
        key: `queryFilter-org.sagebionetworks.repo.model.table.TextMatchesQueryFilter-foo`,
        innerText: 'foo',
        tooltipText: 'Text matches: "foo"',
        onRemoveFilter: expect.any(Function),
      })

      actual.onRemoveFilter()
      expect(mockQueryContext.removeQueryFilter).toHaveBeenCalledWith(
        queryFilter,
      )
    })
    test('NATURAL_LANGUAGE', () => {
      const queryFilter: TextMatchesQueryFilter = {
        searchMode: 'NATURAL_LANGUAGE',
        concreteType:
          'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
        searchExpression: 'foo',
      }
      const mockQueryContext = { removeQueryFilter: vi.fn() }
      const actual = getPillPropsFromTextMatchesQueryFilter(
        queryFilter,
        mockQueryContext as unknown as QueryContextType,
      )
      expect(actual).toEqual({
        key: `queryFilter-org.sagebionetworks.repo.model.table.TextMatchesQueryFilter-foo`,
        innerText: 'foo',
        tooltipText: 'Text matches: "foo"',
        onRemoveFilter: expect.any(Function),
      })
      actual.onRemoveFilter()
      expect(mockQueryContext.removeQueryFilter).toHaveBeenCalledWith(
        queryFilter,
      )
    })
    test('BOOLEAN with distance', () => {
      const queryFilter: TextMatchesQueryFilter = {
        searchMode: 'BOOLEAN',
        concreteType:
          'org.sagebionetworks.repo.model.table.TextMatchesQueryFilter',
        searchExpression: '"foo bar" @3',
      }
      const mockQueryContext = { removeQueryFilter: vi.fn() }
      const actual = getPillPropsFromTextMatchesQueryFilter(
        queryFilter,
        mockQueryContext as unknown as QueryContextType,
      )
      expect(actual).toEqual({
        key: `queryFilter-org.sagebionetworks.repo.model.table.TextMatchesQueryFilter-"foo bar" @3`,
        innerText: 'foo bar',
        tooltipText: 'Text matches: "foo bar"',
        onRemoveFilter: expect.any(Function),
      })
      actual.onRemoveFilter()
      expect(mockQueryContext.removeQueryFilter).toHaveBeenCalledWith(
        queryFilter,
      )
    })
  })
})
