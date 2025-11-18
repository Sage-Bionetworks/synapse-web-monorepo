import { NoContentPlaceholderType } from './NoContentPlaceholderType'
import SearchResultsNotFound from '../SynapseTable/SearchResultsNotFound'
import ThisTableIsEmpty from '../SynapseTable/TableIsEmpty'
import NoContentAvailable from '../SynapseTable/NoContentAvailable'

type NoContentPlaceholderProps = {
  type: NoContentPlaceholderType
  hasResettableFilters: boolean
}

export default function NoContentPlaceholder(props: NoContentPlaceholderProps) {
  const { type, hasResettableFilters } = props
  switch (type) {
    case NoContentPlaceholderType.INTERACTIVE:
      if (hasResettableFilters) {
        return <SearchResultsNotFound />
      } else {
        return <ThisTableIsEmpty />
      }
    case NoContentPlaceholderType.HIDDEN:
      return <></>
    case NoContentPlaceholderType.STATIC:
    default:
      return <NoContentAvailable />
  }
}
