import React, { useState, useEffect } from 'react'
import {
  Button,
} from 'react-bootstrap'
import { Typography, SynapseConstants } from 'synapse-react-client'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'
import { getMyUserBundle } from 'synapse-react-client/dist/utils/SynapseClient'
import { useSynapseContext } from 'synapse-react-client/dist/utils/SynapseContext'
import { UserBundle, VerificationState, VerificationSubmission } from 'synapse-react-client/dist/utils/synapseTypes'
import { ORCiDButton } from './ORCiDButton'
import SourceApp from './SourceApp'

export type VerificationSubmissionEditorProps = {
  verificationSubmission:VerificationSubmission
}

export const VerificationSubmissionEditor = (props: VerificationSubmissionEditorProps) => {
  // render the VerificationSubmission
  const { verificationSubmission } = props
  
  return (
    <>
      <div className="VerificationSubmissionRenderer bootstrap-4-backport">
        
      </div>
    </>
    
  )
}
