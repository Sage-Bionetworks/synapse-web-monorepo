import { FacetTypeNames, type Facet } from '@sage-bionetworks/synapse-types'
import {
  shouldShowFacetValue,
  isUserFacet,
  shouldRenderFacet,
  getFacetDisplayName,
  getSelectedTimeRangeId,
  formatTimeRangeDisplayValue,
} from './SearchFacetPanelUtils'

// A fixed point in time used for all time-sensitive tests
const FIXED_NOW_UNIX = 1_700_000_000

describe('shouldShowFacetValue', () => {
  it('returns false for an empty string', () => {
    expect(shouldShowFacetValue('node_type', '')).toBe(false)
  })

  it('returns false for a whitespace-only string', () => {
    expect(shouldShowFacetValue('node_type', '   ')).toBe(false)
  })

  it('returns false for "link" when facetName is node_type', () => {
    expect(shouldShowFacetValue('node_type', 'link')).toBe(false)
  })

  it('returns false for colon-prefixed values', () => {
    expect(shouldShowFacetValue('consortium', 'syn123:data')).toBe(false)
  })

  it('returns true for a normal value', () => {
    expect(shouldShowFacetValue('node_type', 'dataset')).toBe(true)
  })

  it('returns true for "link" on a non-node_type facet', () => {
    expect(shouldShowFacetValue('consortium', 'link')).toBe(true)
  })
})

describe('isUserFacet', () => {
  it('returns true for snake_case user facet names', () => {
    expect(isUserFacet('modified_by')).toBe(true)
    expect(isUserFacet('created_by')).toBe(true)
  })

  it('returns true for PascalCase user facet names', () => {
    expect(isUserFacet('ModifiedBy')).toBe(true)
    expect(isUserFacet('CreatedBy')).toBe(true)
  })

  it('returns false for non-user facets', () => {
    expect(isUserFacet('node_type')).toBe(false)
    expect(isUserFacet('consortium')).toBe(false)
  })
})

describe('shouldRenderFacet', () => {
  it('returns false when constraints is empty', () => {
    const facet: Facet = {
      name: 'node_type',
      type: FacetTypeNames.LITERAL,
      min: 0,
      max: 0,
      constraints: [],
    }
    expect(shouldRenderFacet(facet)).toBe(false)
  })

  it('returns true when constraints has items', () => {
    const facet: Facet = {
      name: 'node_type',
      type: FacetTypeNames.LITERAL,
      min: 0,
      max: 0,
      constraints: [{ value: 'dataset', count: 5 }],
    }
    expect(shouldRenderFacet(facet)).toBe(true)
  })
})

describe('getFacetDisplayName', () => {
  it('returns the mapped name for facets', () => {
    expect(getFacetDisplayName('node_type')).toBe('Entity Type')
    expect(getFacetDisplayName('modified_by')).toBe('Last Modified By')
  })
})

describe('getSelectedTimeRangeId', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(FIXED_NOW_UNIX * 1000)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns ANY_TIME for zero, empty, or non-numeric input', () => {
    expect(getSelectedTimeRangeId('0')).toBe('ANY_TIME')
    expect(getSelectedTimeRangeId('')).toBe('ANY_TIME')
    expect(getSelectedTimeRangeId('abc')).toBe('ANY_TIME')
  })

  it('returns ANY_TIME for a future timestamp', () => {
    const future = String(FIXED_NOW_UNIX + 3600)
    expect(getSelectedTimeRangeId(future)).toBe('ANY_TIME')
  })

  it('matches PAST_HOUR for a timestamp 1 hour ago', () => {
    const oneHourAgo = String(FIXED_NOW_UNIX - 3600)
    expect(getSelectedTimeRangeId(oneHourAgo)).toBe('PAST_HOUR')
  })

  it('matches PAST_DAY for a timestamp 1 day ago', () => {
    const oneDayAgo = String(FIXED_NOW_UNIX - 86400)
    expect(getSelectedTimeRangeId(oneDayAgo)).toBe('PAST_DAY')
  })

  it('matches PAST_WEEK for a timestamp 1 week ago', () => {
    const oneWeekAgo = String(FIXED_NOW_UNIX - 7 * 86400)
    expect(getSelectedTimeRangeId(oneWeekAgo)).toBe('PAST_WEEK')
  })

  it('still matches PAST_HOUR when the URL is 65 minutes old (drift handling)', () => {
    // diff = 65 min = 3900s; closest to PAST_HOUR (3600s), not PAST_DAY (86400s)
    const driftedTimestamp = String(FIXED_NOW_UNIX - 65 * 60)
    expect(getSelectedTimeRangeId(driftedTimestamp)).toBe('PAST_HOUR')
  })
})

describe('formatTimeRangeDisplayValue', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(FIXED_NOW_UNIX * 1000)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('returns "any time" for "0"', () => {
    expect(formatTimeRangeDisplayValue('0')).toBe('any time')
  })

  it('returns the preset label for a matching timestamp', () => {
    const oneHourAgo = String(FIXED_NOW_UNIX - 3600)
    expect(formatTimeRangeDisplayValue(oneHourAgo)).toBe('Past Hour')
  })

  it('returns a locale date string when there is no matching preset', () => {
    const futureTimestamp = FIXED_NOW_UNIX + 3600
    const result = formatTimeRangeDisplayValue(String(futureTimestamp))
    expect(result).toBe(new Date(futureTimestamp * 1000).toLocaleDateString())
  })

  it('returns the raw string for non-numeric input', () => {
    expect(formatTimeRangeDisplayValue('not-a-number')).toBe('not-a-number')
  })
})
