import { useSearchParams } from 'react-router'
import { SEARCH_PAGE_QUERY_PARAM } from '@/utils/SynapseConstants'
import { SynapseSearchPageResults } from './SynapseSearchPageResults'

function SearchPageInternal() {
  const [searchParams] = useSearchParams()

  const query = searchParams.get(SEARCH_PAGE_QUERY_PARAM) || ''

  return <SynapseSearchPageResults initialQueryTerm={query} />
}

export function SynapseSearchPage() {
  return <SearchPageInternal />
}
