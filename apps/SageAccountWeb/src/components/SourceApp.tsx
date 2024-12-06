import { Box, BoxProps, Typography } from '@mui/material'
import { SkeletonTable } from 'synapse-react-client'
import Skeleton from '@mui/material/Skeleton'
import { useSourceApp } from './useSourceApp'

export type SourceAppProps = {
  isAccountCreationTextVisible?: boolean
}

/**
 * This is where the app specific UI will be shown
 * @param props
 * @returns
 */
export const SourceApp = (props: SourceAppProps) => {
  const { isAccountCreationTextVisible = false } = props
  const sourceApp = useSourceApp()
  return (
    <>
      <div className="SourceAppLogo">{sourceApp?.logo}</div>
      {isAccountCreationTextVisible && (
        <div>
          <p>
            A Synapse account is required to log into {sourceApp?.friendlyName}.
          </p>
          <p>Create an account to get started.</p>
        </div>
      )}
    </>
  )
}

export function SourceAppLogo(props: Omit<BoxProps, 'children' | 'className'>) {
  const sourceAppConfig = useSourceApp()
  return (
    <Box className="SourceAppLogo" {...props}>
      {sourceAppConfig ? (
        sourceAppConfig.logo
      ) : (
        <Skeleton variant="rectangular" width={250} height={65} />
      )}
    </Box>
  )
}

export const SourceAppDescription = () => {
  const sourceAppConfig = useSourceApp()
  return sourceAppConfig ? (
    <Typography
      className="description"
      variant="subtitle1"
      sx={{ maxHeight: '180px', overflow: 'auto' }}
    >
      {sourceAppConfig?.description}
    </Typography>
  ) : (
    <SkeletonTable numRows={7} numCols={1} />
  )
}

export default SourceApp
