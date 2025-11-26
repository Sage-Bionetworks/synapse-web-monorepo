import { useSearchParams } from 'react-router'
import { SEARCH_PAGE_QUERY_PARAM } from '@/utils/SynapseConstants'
import { SynapseSearchPageResults } from './SynapseSearchPageResults'

function SearchPageInternal() {
  const [searchParams, setSearchParams] = useSearchParams()

  const query = searchParams.get(SEARCH_PAGE_QUERY_PARAM) || ''

  const handleQueryChange = (newQuery: string) => {
    setSearchParams(prev => {
      if (newQuery) {
        prev.set(SEARCH_PAGE_QUERY_PARAM, newQuery)
      } else {
        prev.delete(SEARCH_PAGE_QUERY_PARAM)
      }
      return prev
    })
  }

  return <SynapseSearchPageResults query={query} setQuery={handleQueryChange} />
}

export function SynapseSearchPage() {
  return <SearchPageInternal />
}
