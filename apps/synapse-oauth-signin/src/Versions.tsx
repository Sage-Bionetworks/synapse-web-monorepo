import React from 'react'
import './Versions.scss'
import synapseReactClientPackageJson from 'synapse-react-client/package.json'

const Versions: React.FunctionComponent = () => {
  return (
    <a
      className="Versions footer-item"
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/Sage-Bionetworks/synapse-web-monorepo"
    >
      VERSION {synapseReactClientPackageJson.version}
    </a>
  )
}

export default Versions
