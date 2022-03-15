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

  return ( <>
      {sourceAppId && <p>Source app currently set to {sourceAppId}</p>}
    </>
  )
}

export const getSourceAppRedirectURL = (): string | undefined => {
  const sourceAppId = localStorage.getItem('sourceAppId')
  if (!sourceAppId) {
    return undefined
  }
  switch(sourceAppId) {
    case 'MTB': return 'https://staging.mobiletoolbox.org/'
    default: return undefined
  }
}

export default SourceApp