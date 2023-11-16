import React from 'react'

export type SynapsePoweredPortalProps = {
  name: string
  description: string
  url: string
  logoUrl: string
}

export const SynapsePoweredPortal: React.FunctionComponent<
  SynapsePoweredPortalProps
> = ({ name, description, url, logoUrl }) => {
  return (
    <div className="PoweredBySynapseItem">
      <div className="PoweredBySynapseItemGrid">
        <img className="logo" src={logoUrl} />
        <div className="body">
          <h3 className="title">{name}</h3>
          <p className="description">{description}</p>
          <p>
            <a
              className="link"
              target="_blank"
              rel="noopener noreferrer"
              href={url}
            >
              View Portal
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
