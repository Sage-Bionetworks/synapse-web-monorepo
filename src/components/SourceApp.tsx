import { Box, DeprecatedThemeOptions, SxProps } from '@mui/material'
import React from 'react'
import { Typography } from 'synapse-react-client'
import SourceAppConfigs, { SourceAppConfig } from './SourceAppConfigs'

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
  return (
    <>
      <div className="SourceAppLogo">{useSourceApp()?.logo}</div>
      {isAccountCreationTextVisible && (
        <div>
          <p>
            A Sage account is required to log into{' '}
            {useSourceApp()?.friendlyName}.
          </p>
          <p>Create an account to get started.</p>
        </div>
      )}
    </>
  )
}

export const SourceAppLogo: React.FC<{ sx?: SxProps }> = ({ sx }) => {
  return <Box className="SourceAppLogo" sx={sx}>{useSourceApp()?.logo}</Box>
}

export const SourceAppDescription = () => {
  return (
    <Typography className="description" variant="body1">
      {useSourceApp()?.description}
    </Typography>
  )
}

export const useSourceApp = (): SourceAppConfig | undefined => {
  const sourceAppId = localStorage.getItem('sourceAppId')
  return SourceAppConfigs.find(config => config.appId === sourceAppId)
}

export const getSourceAppURL = (): string => {
  return useSourceApp()?.appURL ?? 'https://sagebionetworks.org/'
}

export const getSourceAppTheme = (): DeprecatedThemeOptions | undefined => {
  return useSourceApp()?.theme
}

export default SourceApp
