import { useSearchParams } from 'react-router'
import { SEARCH_PAGE_QUERY_PARAM } from '@/utils/SynapseConstants'
import { SynapseSearchPageResults } from './SynapseSearchPageResults'
import SynapseSearchPageRouter, {
  SynapseSearchPageRouterProps,
} from './SynapseSearchPageRouter'
import { SearchQuery } from '@sage-bionetworks/synapse-types'
import { DEFAULT_SEARCH_QUERY } from '@/utils/searchDefaults'

function SearchPageInternal() {
  const [searchParams, setSearchParams] = useSearchParams()

  // Parse SearchQuery object from URL parameter
  const queryParam = searchParams.get(SEARCH_PAGE_QUERY_PARAM) || ''
  let parsedURLQuery = {}
  try {
    parsedURLQuery = queryParam ? JSON.parse(queryParam) : {}
  } catch (error) {
    console.error('Error parsing search query from URL:', error)
  }

  const query: SearchQuery = {
    ...DEFAULT_SEARCH_QUERY,
    ...parsedURLQuery,
  }

  // Store the whole SearchQuery object as JSON in URL
  const handleQueryChange = (newQuery: SearchQuery) => {
    setSearchParams(prev => {
      if (newQuery && newQuery.queryTerm && newQuery.queryTerm.length > 0) {
        prev.set(SEARCH_PAGE_QUERY_PARAM, JSON.stringify(newQuery))
      } else {
        prev.delete(SEARCH_PAGE_QUERY_PARAM)
      }
      return prev
    })
  }

  // Render search results with new query
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
