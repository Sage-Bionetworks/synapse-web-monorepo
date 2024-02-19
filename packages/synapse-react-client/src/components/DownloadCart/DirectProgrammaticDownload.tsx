import React, { useState } from 'react'
import { Tooltip } from '@mui/material'
import IconSvg from '../IconSvg/IconSvg'
import { ProgrammaticInstructionsModal } from '../ProgrammaticInstructionsModal/ProgrammaticInstructionsModal'
import { TOOLTIP_DELAY_SHOW } from '../SynapseTable/SynapseTableConstants'

type DirectProgrammaticDownloadProps = {
  entityId: string
  version?: number
}
export const PYTHON_CLIENT_IMPORT_AND_LOGIN = `import synapseclient
syn = synapseclient.Synapse()
syn.login(authToken="")
`

export const R_CLIENT_IMPORT_AND_LOGIN = `library(synapser)
synLogin(authToken="")
`

function DirectProgrammaticDownload({
  entityId,
  version,
}: DirectProgrammaticDownloadProps) {
  const [isShowingModal, setIsShowingModal] = useState<boolean>(false)

  const rCode = `${R_CLIENT_IMPORT_AND_LOGIN}
# Obtain a pointer and download the data
${entityId} <- synGet(entity='${entityId}'${
    version ? `, version=${version}` : ''
  } ) `

  const pythonCode = `${PYTHON_CLIENT_IMPORT_AND_LOGIN}
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
