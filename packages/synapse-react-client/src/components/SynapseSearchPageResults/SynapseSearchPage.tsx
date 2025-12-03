import { useSearchParams } from 'react-router'
import { SEARCH_PAGE_QUERY_PARAM } from '@/utils/SynapseConstants'
import { SynapseSearchPageResults } from './SynapseSearchPageResults'
import SynapseSearchPageRouter, {
  SynapseSearchPageRouterProps,
} from './SynapseSearchPageRouter'
import { SearchQuery } from '@sage-bionetworks/synapse-types'

function SearchPageInternal() {
  const [searchParams, setSearchParams] = useSearchParams()

  // Convert URL parameter to SearchQuery object
  const queryTerm = searchParams.get(SEARCH_PAGE_QUERY_PARAM) || ''
  const query: SearchQuery = {
    queryTerm: queryTerm ? [queryTerm] : [],
  }

  const handleQueryChange = (newQuery: SearchQuery) => {
    setSearchParams(prev => {
      // Extract the first query term to store in URL
      const queryTerm = newQuery.queryTerm?.[0]
      if (queryTerm) {
        prev.set(SEARCH_PAGE_QUERY_PARAM, queryTerm)
      } else {
        prev.delete(SEARCH_PAGE_QUERY_PARAM)
      }
      return prev
    })
  }

  return <SynapseSearchPageResults query={query} setQuery={handleQueryChange} />
}

export type SynapseSearchPageProps = Omit<
  SynapseSearchPageRouterProps,
  'children'
>

export default function SynapseSearchPage(props: SynapseSearchPageProps) {
  return (
    <SynapseSearchPageRouter {...props}>
      <SearchPageInternal />
    </SynapseSearchPageRouter>
  )
}
