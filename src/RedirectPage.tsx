import * as React from 'react'

export type OwnProps = {
    redirectURL:string
}

export const RedirectPage:React.FunctionComponent<OwnProps> = ({
    redirectURL
  }: OwnProps) => {
    React.useEffect(() => {
        window.location.replace(redirectURL)
    }, [])
    return <></>
}