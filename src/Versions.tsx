import React from "react"
import packageJson from '../package.json'
import './Versions.scss'

const Versions: React.FunctionComponent = () => {
  return (
    <a className='Versions footer-item' target='_blank' rel='noopener noreferrer' href='https://github.com/Sage-Bionetworks/Synapse-React-Client'>VERSION {packageJson.dependencies["synapse-react-client"]}</a>
  )
}

export default Versions