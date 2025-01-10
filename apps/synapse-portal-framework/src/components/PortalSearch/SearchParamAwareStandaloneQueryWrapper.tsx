import { SxProps, Box } from '@mui/material'
import { useSearchParams } from 'react-router-dom'
import { StandaloneQueryWrapper } from 'synapse-react-client'
import { StandaloneQueryWrapperProps } from 'synapse-react-client'

export type SearchParamAwareStandaloneQueryWrapperProps = {
  sx: SxProps
  standaloneQueryWrapperProps: StandaloneQueryWrapperProps
}
export function SearchParamAwareStandaloneQueryWrapper(
  props: SearchParamAwareStandaloneQueryWrapperProps,
) {
  const { sx, standaloneQueryWrapperProps } = props
  const [searchParams] = useSearchParams()

  return (
    <Box sx={sx}>
      <StandaloneQueryWrapper
        {...standaloneQueryWrapperProps}
        searchParams={Object.fromEntries(searchParams.entries())}
      />
    </Box>
  )
}

export default SearchParamAwareStandaloneQueryWrapper
