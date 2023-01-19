
import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Typography, SynapseComponents } from 'synapse-react-client'
import { displayToast } from 'synapse-react-client/dist/containers/ToastMessage'

import {
    VerificationSubmission,
    UploadCallbackResp,
    FileUploadComplete,
} from 'synapse-react-client/dist/utils/synapseTypes'
import fileIcon from '../../assets/file-icon.svg'



export type AttestationProps = {
    verificationSubmission: VerificationSubmission
    onFormChange: (isValid: boolean) => void
}

const Attestation: React.FC<AttestationProps> = (props: AttestationProps) => {
    const { verificationSubmission } = props
    const [attachments, setAttachments] = useState(
        verificationSubmission.attachments,
    )

    useEffect(() => {
        verificationSubmission.attachments = attachments
    }, [attachments, verificationSubmission])
    const uploadCallback = (data: UploadCallbackResp) => {
        if (data.resp && data.success) {
            const uploadResponse: FileUploadComplete = data.resp
            setAttachments([
                {
                    fileName: uploadResponse.fileName,
                    id: uploadResponse.fileHandleId,
                },
            ])
        } else if (!data.success && data.error) {
            displayToast(data.error.reason as string, 'danger')
        }
    }
    const isAttachment = attachments.length > 0
    return (
        <>
            <div className="Terms bootstrap-4-backport ValidationSteps">
                <Box sx={{
                    '& #hack > button': {
                        border: '1px solid #E0E0E0',
                        borderRadius: '3px'
                    }
                }}>
                    {/* agendel TODO: we need a component that takes a child component and wraps it in a button 
                    import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined' for the icon here*/}
                    <div id="hack">
                        {isAttachment && (
                            <Typography style={{ display: 'inline-block' }} variant="body1">
                                <img className="file-icon" src={fileIcon} alt="fileIcon" />
                                {attachments[0].fileName}
                            </Typography>
                        )}
                        <SynapseComponents.FileUpload
                            uploadCallback={uploadCallback}
                            label={isAttachment ? 'Replace' : 'Select ID File to Upload'}
                            variant={/*isAttachment ? */'light-primary-base' /*: 'secondary'*/}
                        />
                    </div>
                </Box>
            </div>
        </>
    )
}

export default Attestation
