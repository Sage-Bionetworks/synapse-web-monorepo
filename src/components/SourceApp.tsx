import { ThemeOptions } from '@mui/material'
import React from 'react'
import SourceAppConfigs, { SourceAppConfig } from './SourceAppConfigs'
import { Typography } from 'synapse-react-client'

export type SourceAppProps = {
  isAccountCreationTextVisible?:boolean
}

/**
 * This is where the app specific UI will be shown
 * @param props 
 * @returns 
 */
export const SourceApp = (props: SourceAppProps) => {
  const { isAccountCreationTextVisible=false } = props
  return <>
    <div className='SourceAppLogo'>{getCurrentSourceApp()?.logo}</div>
    {isAccountCreationTextVisible && <div>
      <p>A Sage account is required to log into {getCurrentSourceApp()?.friendlyName}.</p>
      <p>Create an account to get started.</p>
    </div>}
  </>
}

export const SourceAppLogo = () => {
  return <div className='SourceAppLogo'>{getCurrentSourceApp()?.logo}</div>
}

export const SourceAppDescription = () => {
  return <Typography className='description' variant='body1'>
    {getCurrentSourceApp()?.description}
  </Typography>
}

export const getCurrentSourceApp = (): SourceAppConfig | undefined => {
  const sourceAppId = localStorage.getItem('sourceAppId')
  return SourceAppConfigs.find(config => config.appId === sourceAppId);
}

export const getSourceAppRedirectURL = (): string => {
  return getCurrentSourceApp()?.redirectURL ?? '/authenticated/myaccount'
}

export const getSourceAppTheme = (): ThemeOptions | undefined => {
  return getCurrentSourceApp()?.theme
}


export default SourceApp