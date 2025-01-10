import { useSearchParams } from 'react-router-dom'
import { StandaloneQueryWrapper } from 'synapse-react-client'
import { StandaloneQueryWrapperProps } from 'synapse-react-client'

export function SearchParamAwareStandaloneQueryWrapper(
  props: StandaloneQueryWrapperProps,
) {
  const [searchParams] = useSearchParams()

  return (
    <StandaloneQueryWrapper
      {...props}
      searchParams={Object.fromEntries(searchParams.entries())}
    />
  )
}

export default SearchParamAwareStandaloneQueryWrapper
