import { Box, Button, Link, Typography } from '@mui/material'
import { DialogBase } from '../DialogBase'
import { AcknowledgementItem } from './AcknowledgementsPage'
import { useMemo } from 'react'
import { copyStringToClipboard } from '@/utils/functions/StringUtils'
import { displayToast } from '../ToastMessage'

export type AcknowledgementsDialogProps = {
  open: boolean
  onClose: () => void
  createDoiHelpUrl: string
  portalAcknowledgement?: string
  dataAvailabilityStatement?: string
  studyAcknowledgements?: AcknowledgementItem[]
}

export function AcknowledgementsDialog(props: AcknowledgementsDialogProps) {
  const {
    createDoiHelpUrl,
    open,
    onClose,
    portalAcknowledgement,
    dataAvailabilityStatement,
    studyAcknowledgements,
  } = props

  const textContent = useMemo(() => {
    let content = ''
    if (portalAcknowledgement) {
      content += `PORTAL ACKNOWLEDGEMENT STATEMENT\n\n${portalAcknowledgement}\n\n`
    }
    if (studyAcknowledgements && studyAcknowledgements.length > 0) {
      content += 'STUDY-SPECIFIC ACKNOWLEDGEMENT STATEMENTS:\n\n'
      studyAcknowledgements.forEach(item => {
        content += `* ${item.title}\n\n${item.statement}\n\n`
      })
    }
    if (dataAvailabilityStatement) {
      content += `DATA AVAILABILITY STATEMENT\n\n${dataAvailabilityStatement}\n\n`
    }
    return content.trim()
  }, [portalAcknowledgement, dataAvailabilityStatement, studyAcknowledgements])
  return (
    <DialogBase
      title="Acknowledgement Text"
      open={open}
      onCancel={onClose}
      maxWidth="lg"
      content={
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <Box sx={{ p: '12px', backgroundColor: '#FBF4E0' }}>
            <Typography variant="body1">
              <strong>Note:</strong> You must customize the text in the Data
              Availability Statement to match the contents used in your
              publication.
              <br />
              <Link
                href={createDoiHelpUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                How do I generate a DOI for my dataset?
              </Link>
            </Typography>
          </Box>
          <Box
            sx={{
              p: '10px',
              backgroundColor: 'grey.200',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              maxHeight: '300px',
              overflowY: 'auto',
            }}
          >
            <Typography variant="body1">{textContent}</Typography>
          </Box>
        </Box>
      }
      actions={
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            copyStringToClipboard(textContent).then(() => {
              displayToast('Successfully copied to clipboard', 'success')
            })
          }}
        >
          Copy to Clipboard
        </Button>
      }
    ></DialogBase>
  )
}

export default AcknowledgementsDialog
