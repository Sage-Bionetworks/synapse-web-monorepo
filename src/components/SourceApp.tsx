import React from 'react'
import SourceAppConfigs, { SourceAppConfig } from './SourceAppConfigs'

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

export const getCurrentSourceApp = (): SourceAppConfig | undefined => {
  const sourceAppId = localStorage.getItem('sourceAppId')
  return SourceAppConfigs.find(config => config.appId === sourceAppId);
}

export const getSourceAppRedirectURL = (): string | undefined => {
  return getCurrentSourceApp()?.redirectURL
}

export default SourceApp