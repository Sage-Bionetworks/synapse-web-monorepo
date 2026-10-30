import {
  FacetColumnResult,
  FacetColumnResultValues,
} from '@sage-bionetworks/synapse-types'
import { getEnumerationFacet, getEnumerationFacets } from './enumerationFacet'

const valuesFacet: FacetColumnResultValues = {
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnResultValues',
  columnName: 'study',
  facetType: 'enumeration',
  facetValues: [{ value: 'LLFS', count: 1200, isSelected: false }],
}
const binnedFacet: FacetColumnResult = {
  concreteType:
    'org.sagebionetworks.repo.model.table.FacetColumnResultBinnedValues',
  columnName: 'sex',
  facetType: 'enumeration',
  jsonPath: '$.sex',
  binSize: 5,
  binnedValues: [
    { value: 'Female', binMin: 1565, isSelected: true },
    { value: 'Unknown', binMin: 0, isSelected: false },
  ],
}
const rangeFacet: FacetColumnResult = {
  concreteType: 'org.sagebionetworks.repo.model.table.FacetColumnResultRange',
  columnName: 'age',
  facetType: 'range',
  columnMin: '20',
  columnMax: '105',
}

describe('getEnumerationFacet', () => {
  it('lists exact counts unchanged, without a bin size', () => {
    expect(getEnumerationFacet(valuesFacet)).toMatchObject({
      columnName: 'study',
      facetValues: [{ value: 'LLFS', count: 1200, isSelected: false }],
    })
    expect(getEnumerationFacet(valuesFacet)?.binSize).toBeUndefined()
  })

  it('lists every binned value at its bin midpoint, including the bin that starts at 0, and keeps the bin size', () => {
    expect(getEnumerationFacet(binnedFacet)).toEqual({
      columnName: 'sex',
      jsonPath: '$.sex',
      binSize: 5,
      facetValues: [
        // 1565–1569
        { value: 'Female', count: 1567, isSelected: true },
        // 0–4
        { value: 'Unknown', count: 2, isSelected: false },
      ],
    })
  })

  it('returns undefined for a range facet', () => {
    expect(getEnumerationFacet(rangeFacet)).toBeUndefined()
  })
})

describe('getEnumerationFacets', () => {
  it('keeps the enumeration facets in order and drops range facets', () => {
    expect(
      getEnumerationFacets([binnedFacet, rangeFacet, valuesFacet]).map(
        facet => facet.columnName,
      ),
    ).toEqual(['sex', 'study'])
  })
})
