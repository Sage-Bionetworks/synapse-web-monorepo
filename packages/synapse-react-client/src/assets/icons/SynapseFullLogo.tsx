import React from 'react'
import { SVGProps } from 'react'
import { ReactComponent as SynapseLogo } from './synapse-logo.svg'

const SynapseFullLogo = (props: SVGProps<SVGSVGElement>): React.ReactNode => {
  return <SynapseLogo {...props} />
}

export default SynapseFullLogo
