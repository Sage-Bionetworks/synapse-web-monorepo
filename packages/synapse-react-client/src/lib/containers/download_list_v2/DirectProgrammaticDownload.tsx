import React, { useState } from 'react'
import { Tooltip } from '@mui/material'
import IconSvg from '../IconSvg'
import { ProgrammaticInstructionsModal } from '../ProgrammaticInstructionsModal'
import { TOOLTIP_DELAY_SHOW } from '../table/SynapseTableConstants'

type DirectProgrammaticDownloadProps = {
  entityId: string
  version?: number
}

function DirectProgrammaticDownload({
  entityId,
  version,
}: DirectProgrammaticDownloadProps) {
  const [isShowingModal, setIsShowingModal] = useState<boolean>(false)

  const rCode = `library(synapser)
synLogin('username','password')

# Obtain a pointer and download the data
${entityId} <- synGet(entity='${entityId}'${
    version ? `, version=${version}` : ''
  } ) `

  const pythonCode = `import synapseclient

syn = synapseclient.Synapse()
syn.login('synapse_username','password')

# Obtain a pointer and download the data
${entityId} = syn.get(entity='${entityId}'${
    version ? `, version=${version}` : ''
  } )

# Get the path to the local copy of the data file
filepath = ${entityId}.path`

  const cliCode = `synapse get ${entityId} ${
    version ? `--version ${version}` : ''
  }`

  return (
    <>
      <Tooltip
        title="Programmatic download options"
        enterNextDelay={TOOLTIP_DELAY_SHOW}
        placement="left"
      >
        <span>
          <button
            className={'btn-download-icon'}
            onClick={() => setIsShowingModal(true)}
          >
            <IconSvg icon="code" />
          </button>
        </span>
      </Tooltip>
      {isShowingModal && (
        <ProgrammaticInstructionsModal
          show={true}
          onClose={() => setIsShowingModal(false)}
          title="Download Programmatically"
          cliCode={cliCode}
          rCode={rCode}
          pythonCode={pythonCode}
        />
      )}
    </>
  )
}

export default DirectProgrammaticDownload
