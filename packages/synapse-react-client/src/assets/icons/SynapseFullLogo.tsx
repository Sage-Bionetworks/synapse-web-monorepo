import { SVGProps } from 'react'
import { ReactComponent as SynapseLogo } from './synapse-logo.svg'

const SynapseFullLogo = (props: SVGProps<SVGSVGElement>) => {
  return <SynapseLogo {...props} />
}

export default SynapseFullLogo
