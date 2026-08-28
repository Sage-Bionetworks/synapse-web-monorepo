import {
  useGetDataAccessRequestForUpdate,
  useGetDataAccessRequestPreview,
  useInitiateDataAccessRequestSignature,
} from '@/synapse-queries'
import SynapseClient from '@/synapse-client'
import {
  Alert,
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material'
import {
  FileHandleAssociateType,
  ManagedACTAccessRequirement,
} from '@sage-bionetworks/synapse-types'
import { ReactNode } from 'react'
import { useFetchBlobUrl } from '@/utils/hooks/useFetchBlobUrl'
import IconSvg from '../../../IconSvg/IconSvg'
import { longFieldLabelSx } from '../styles'

const PDF_PREVIEW_HEIGHT = '500px'

export type EDucPreviewStepProps = {
  managedACTAccessRequirement: ManagedACTAccessRequirement
  onHide: () => void
  onBackClicked: () => void
  onSendForSignature: () => void
  onManualUpload: () => void
  /**
   * Optional iframe `src` override for demos and stories. When set, the blob fetch is skipped
   * and this URL is used directly as the iframe src. Production callers should not set this.
   */
  previewSrcOverride?: string
}

/**
 * Wizard step shown after the "Review / Create a DUC" step (PORTALS-4414).
 * Displays the generated eDUC document in an iframe so the user can review it
 * before sending it for electronic signature (PORTALS-4378) or manually printing and
 * uploading a signed PDF (PORTALS-4379).
 */
export default function EDucPreviewStep(props: EDucPreviewStepProps) {
  const {
    managedACTAccessRequirement,
    onHide,
    onBackClicked,
    onSendForSignature,
    onManualUpload,
    previewSrcOverride,
  } = props

  const { data: dataAccessRequest, isLoading: isLoadingDar } =
    useGetDataAccessRequestForUpdate(String(managedACTAccessRequirement.id), {
      staleTime: Infinity,
      throwOnError: true,
    })

  const {
    data: previewFileHandle,
    isLoading: isLoadingPreview,
    error: previewError,
  } = useGetDataAccessRequestPreview(dataAccessRequest?.id ?? '', {
    enabled: Boolean(dataAccessRequest?.id),
  })

  const previewFileHandleId = previewFileHandle?.fileHandleId
  const { blobUrl, error: blobError } = useFetchBlobUrl(
    previewSrcOverride || !previewFileHandleId || !dataAccessRequest?.id
      ? undefined
      : SynapseClient.getPortalFileHandleServletUrl(
          previewFileHandleId,
          dataAccessRequest.id,
          FileHandleAssociateType.DataAccessRequestAttachment,
        ),
  )

  const {
    mutate: initiateSignature,
    isPending: isSendingForSignature,
    error: sendForSignatureError,
    reset: resetSendForSignature,
  } = useInitiateDataAccessRequestSignature({
    onSuccess: () => onSendForSignature(),
  })

  const isLoading =
    isLoadingDar ||
    (Boolean(dataAccessRequest?.id) && isLoadingPreview) ||
    (!previewSrcOverride && !!previewFileHandleId && !blobUrl && !blobError)
  const actionsDisabled =
    isLoading || (!previewSrcOverride && !blobUrl) || isSendingForSignature

  const handleSendForSignature = () => {
    if (!dataAccessRequest?.id) return
    resetSendForSignature()
    initiateSignature(dataAccessRequest.id)
  }

  return (
    <>
      <DialogTitle>
        <Stack direction="row" sx={{ alignItems: 'center', gap: '5px' }}>
          Request Access
          <Box sx={{ flexGrow: 1 }} />
          <IconButton aria-label={'Close'} onClick={onHide}>
            <IconSvg icon={'close'} wrap={false} sx={{ color: 'grey.700' }} />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Typography variant={'body1'} sx={{ fontWeight: 700, mb: 1 }}>
          Take a minute to preview your DUC
        </Typography>
        <Typography variant={'body1'} sx={{ ...longFieldLabelSx, mb: 2 }}>
          Please ensure that all information is correct, as incorrect
          information will result in the rejection of your access request. Use
          the Back button to return to previous steps and modify any details.
        </Typography>

        {isLoading && (
          <Skeleton
            variant={'rectangular'}
            width={'100%'}
            height={PDF_PREVIEW_HEIGHT}
            data-testid={'EDucPreviewStep-loading'}
          />
        )}
        {!isLoading && (previewError || blobError) && (
          <Alert severity={'error'}>
            <strong>Sorry, we couldn&apos;t load your DUC preview.</strong>
            <br />
            {previewError?.reason ?? blobError?.message}
          </Alert>
        )}
        {!isLoading &&
          !previewError &&
          !blobError &&
          (previewSrcOverride || blobUrl) && (
            <iframe
              title={'eDUC preview'}
              src={previewSrcOverride ?? blobUrl}
              style={{ border: 0, width: '100%', height: PDF_PREVIEW_HEIGHT }}
            />
          )}

        <Box
          sx={{
            mt: 3,
            border: '1px solid',
            borderColor: 'grey.300',
            borderRadius: 1,
          }}
        >
          <ActionRow
            title={'Email DUC to Collaborators'}
            description={
              'Complete and sign the DUC online by emailing a secure DocuSign link to your listed collaborators. Notifications will be sent directly to the email address associated with their Synapse accounts. This is fastest way to get access.'
            }
            action={
              <Button
                variant={'contained'}
                disabled={actionsDisabled}
                onClick={handleSendForSignature}
              >
                {isSendingForSignature
                  ? 'Sending...'
                  : 'Send for electronic signature'}
              </Button>
            }
          />
          <Divider />
          <ActionRow
            title={'Print and upload a PDF instead'}
            description={
              'Download the DUC, sign it by hand, and upload the completed document.'
            }
            action={
              <Button
                variant={'outlined'}
                disabled={actionsDisabled}
                onClick={onManualUpload}
              >
                Manually print and upload PDF
              </Button>
            }
          />
        </Box>
        {sendForSignatureError && (
          <Alert severity={'error'} sx={{ mt: 2 }}>
            <strong>
              Sorry, we couldn&apos;t send your DUC for electronic signature.
            </strong>
            <br />
            {sendForSignatureError.reason}
          </Alert>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant={'outlined'} onClick={onBackClicked}>
          Back
        </Button>
      </DialogActions>
    </>
  )
}

function ActionRow(props: {
  title: string
  description: string
  action: ReactNode
}) {
  const { title, description, action } = props
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      sx={{ alignItems: { sm: 'center' }, gap: 2, p: 2 }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant={'body1'} sx={{ fontWeight: 700, mb: 0.5 }}>
          {title}
        </Typography>
        <Typography variant={'body1'} sx={longFieldLabelSx}>
          {description}
        </Typography>
      </Box>
      <Box sx={{ flexShrink: 0 }}>{action}</Box>
    </Stack>
  )
}
