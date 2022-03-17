import React from 'react'

export type SourceAppProps = {
}

/**
 * This is where the app specific UI will be shown
 * @param props 
 * @returns 
 */
export const SourceApp = (props: SourceAppProps) => {
  const sourceAppId = localStorage.getItem('sourceAppId')
  let ui = <></>
  switch(sourceAppId) {
    case 'MTB':
    case 'MTB-staging': ui = <>
        <p>This is UI that is specific to MTB</p>
      </>
      break
    case 'Synapse': ui = <>
        <p>This is UI that is specific to Synapse.org</p>
      </>
      break
  }
  return ui
}

export const getSourceAppRedirectURL = (): string | undefined => {
  const sourceAppId = localStorage.getItem('sourceAppId')
  let redirectURL = undefined
  if (!sourceAppId) {
    redirectURL = undefined
  } else {
    switch(sourceAppId) {
      case 'MTB': redirectURL = 'https://www.mobiletoolbox.org/'
        break
      case 'MTB-staging': redirectURL = 'https://staging.mobiletoolbox.org/'
        break
    }
  }
  return redirectURL
}

export default SourceApp