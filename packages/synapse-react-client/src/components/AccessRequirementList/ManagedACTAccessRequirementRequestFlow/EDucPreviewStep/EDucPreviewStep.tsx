import { ConfirmationDialog } from '@/components/ConfirmationDialog'
import {
  useCheckDataAccessRequestSignatureUpdatable,
  useGetDataAccessRequestForUpdate,
  useGetDataAccessRequestPreview,
  useGetDataAccessRequestSignatureQuota,
  useGetDataAccessRequestSignatureStatus,
  useInitiateDataAccessRequestSignature,
  useUpdateDataAccessRequestSignature,
  useVoidDataAccessRequestSignature,
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
  Tooltip,
  Typography,
} from '@mui/material'
import {
  FileHandleAssociateType,
  ManagedACTAccessRequirement,
} from '@sage-bionetworks/synapse-types'
import { ReactNode, useState } from 'react'
import { useFetchBlobUrl } from '@/utils/hooks/useFetchBlobUrl'
import IconSvg from '../../../IconSvg/IconSvg'
import { longFieldLabelSx } from '../styles'

const PDF_PREVIEW_HEIGHT = '500px'

export const SEND_FOR_SIGNATURE_BUTTON_TEXT = 'Send for electronic signature'
export const RECREATE_ENVELOPE_CONFIRM_BUTTON_TEXT =
  'Cancel and start a new signature request'

const PRECHECK_ERROR_TITLE =
  "Sorry, we couldn't check the status of your existing signature request."
const UPDATE_SIGNATURE_ERROR_TITLE =
  "Sorry, we couldn't apply your changes to your existing signature request."
const VOID_SIGNATURE_ERROR_TITLE =
  "Sorry, we couldn't cancel your existing signature request."
const INITIATE_SIGNATURE_ERROR_TITLE =
  "Sorry, we couldn't send your DUC for electronic signature."

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

  const requestId = dataAccessRequest?.id
  const hasSignatureEnvelope = Boolean(
    dataAccessRequest?.eDucSignatureEnvelopeId,
  )

  // Once the user commits to sending, the preview query must not run again: GET
  // /dataAccessRequest/{id}/preview has server-side side effects (it creates a signature envelope
  // and resets the DAR to draft), and every signature mutation invalidates the DAR query key --
  // which would otherwise refetch the preview between the DELETE and the POST below.
  const [isSendSequenceActive, setIsSendSequenceActive] = useState(false)

  const {
    data: previewFileHandle,
    isLoading: isLoadingPreview,
    error: previewError,
  } = useGetDataAccessRequestPreview(requestId ?? '', {
    enabled: Boolean(requestId) && !isSendSequenceActive,
  })

  const previewFileHandleId = previewFileHandle?.fileHandleId
  const { blobUrl, error: blobError } = useFetchBlobUrl(
    previewSrcOverride || !previewFileHandleId || !requestId
      ? undefined
      : SynapseClient.getPortalFileHandleServletUrl(
          previewFileHandleId,
          requestId,
          FileHandleAssociateType.DataAccessRequestAttachment,
        ),
  )

  const {
    mutateAsync: checkSignatureUpdatable,
    isPending: isCheckingSignatureUpdatable,
    error: precheckError,
    reset: resetPrecheck,
  } = useCheckDataAccessRequestSignatureUpdatable()

  const {
    mutate: updateSignature,
    isPending: isUpdatingSignature,
    error: updateSignatureError,
    reset: resetUpdateSignature,
  } = useUpdateDataAccessRequestSignature({
    onSuccess: () => onSendForSignature(),
    onError: () => setIsSendSequenceActive(false),
  })

  const {
    mutateAsync: voidSignature,
    isPending: isVoidingSignature,
    error: voidSignatureError,
    reset: resetVoidSignature,
  } = useVoidDataAccessRequestSignature()

  const {
    mutate: initiateSignature,
    isPending: isInitiatingSignature,
    error: initiateSignatureError,
    reset: resetInitiateSignature,
  } = useInitiateDataAccessRequestSignature({
    onSuccess: () => onSendForSignature(),
    onError: () => setIsSendSequenceActive(false),
  })

  // Drives the "N of M signatures collected" hint, and tells us whether the user's edits have
  // already been pushed to the envelope. Only meaningful once an envelope exists.
  const { data: signatureStatus } = useGetDataAccessRequestSignatureStatus(
    requestId ?? '',
    { enabled: Boolean(requestId) && hasSignatureEnvelope },
  )
  const signers = signatureStatus?.signerStatus ?? []
  const collectedSignatureCount = signers.filter(
    s => s.status === 'done',
  ).length

  // Preflight the quota so we can disable the send-for-signature action when the user is at
  // or over their limit. A fetch error falls back to the current enabled behavior so a quota
  // service outage doesn't spuriously block valid requests.
  const { data: signatureQuota } = useGetDataAccessRequestSignatureQuota(
    requestId ?? '',
    { enabled: Boolean(requestId) },
  )
  const isAtOrOverQuota =
    signatureQuota?.remaining != null && signatureQuota.remaining <= 0

  const [isRecreateConfirmationOpen, setIsRecreateConfirmationOpen] =
    useState(false)

  // The precheck and the mutation it selects are presented as a single action, so the button
  // stays in its sending state for the whole sequence rather than flickering between calls.
  const isSendingForSignature =
    isCheckingSignatureUpdatable ||
    isUpdatingSignature ||
    isVoidingSignature ||
    isInitiatingSignature

  const isLoading =
    isLoadingDar ||
    (Boolean(requestId) && isLoadingPreview) ||
    (!previewSrcOverride && !!previewFileHandleId && !blobUrl && !blobError)
  const actionsDisabled =
    isLoading || (!previewSrcOverride && !blobUrl) || isSendingForSignature

  const sendError =
    (precheckError && {
      title: PRECHECK_ERROR_TITLE,
      reason: precheckError.reason,
    }) ||
    (updateSignatureError && {
      title: UPDATE_SIGNATURE_ERROR_TITLE,
      reason: updateSignatureError.reason,
    }) ||
    (voidSignatureError && {
      title: VOID_SIGNATURE_ERROR_TITLE,
      reason: voidSignatureError.reason,
    }) ||
    (initiateSignatureError && {
      title: INITIATE_SIGNATURE_ERROR_TITLE,
      reason: initiateSignatureError.reason,
    })

  const resetSendErrors = () => {
    resetPrecheck()
    resetUpdateSignature()
    resetVoidSignature()
    resetInitiateSignature()
  }

  const handleSendForSignature = async () => {
    if (!requestId) return
    resetSendErrors()
    setIsSendSequenceActive(true)

    if (!hasSignatureEnvelope) {
      initiateSignature(requestId)
      return
    }

    // `null` means the precheck itself failed; its error is surfaced by the alert below.
    const canUpdateEnvelope = await checkSignatureUpdatable(requestId).catch(
      () => null,
    )
    if (canUpdateEnvelope === null) {
      setIsSendSequenceActive(false)
      return
    }
    if (canUpdateEnvelope) {
      updateSignature(requestId)
    } else {
      setIsRecreateConfirmationOpen(true)
    }
  }

  const handleConfirmRecreateEnvelope = async () => {
    if (!requestId) return
    setIsRecreateConfirmationOpen(false)
    const isVoided = await voidSignature(requestId).then(
      () => true,
      () => false,
    )
    if (!isVoided) {
      setIsSendSequenceActive(false)
      return
    }
    initiateSignature(requestId)
  }

  const handleCancelRecreateEnvelope = () => {
    setIsRecreateConfirmationOpen(false)
    setIsSendSequenceActive(false)
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
              <Tooltip
                title={
                  isAtOrOverQuota
                    ? `You have used all ${signatureQuota?.quota ?? ''} of your electronic signature routings for this request. Please contact ACT to request a quota reset.`
                    : ''
                }
                arrow
                disableHoverListener={!isAtOrOverQuota}
                disableFocusListener={!isAtOrOverQuota}
                disableTouchListener={!isAtOrOverQuota}
              >
                {/* Tooltip wrapper Box is needed because MUI Tooltip does not fire on disabled children directly. */}
                <Box component={'span'}>
                  <Button
                    variant={'contained'}
                    disabled={actionsDisabled || isAtOrOverQuota}
                    onClick={() => {
                      handleSendForSignature()
                    }}
                  >
                    {isSendingForSignature
                      ? 'Sending...'
                      : SEND_FOR_SIGNATURE_BUTTON_TEXT}
                  </Button>
                </Box>
              </Tooltip>
            }
            hint={
              hasSignatureEnvelope && signers.length > 0 ? (
                <>
                  {`${collectedSignatureCount} of ${signers.length} signatures collected.`}
                  {signatureStatus?.includesRequestChanges === false &&
                    ' Your changes will be applied to the existing request, so collaborators who have already signed will not need to sign again.'}
                </>
              ) : undefined
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
        {sendError && (
          <Alert severity={'error'} sx={{ mt: 2 }}>
            <strong>{sendError.title}</strong>
            <br />
            {sendError.reason}
          </Alert>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant={'outlined'} onClick={onBackClicked}>
          Back
        </Button>
      </DialogActions>
      <ConfirmationDialog
        open={isRecreateConfirmationOpen}
        title={'Start a new signature request?'}
        content={
          <Typography variant={'body1'} sx={longFieldLabelSx}>
            Your existing signature request can no longer be updated, so your
            changes cannot be applied to it. To continue, we need to cancel it
            and start a new one. Anyone who already signed will be asked to sign
            again, and this will count against your signature request limit.
          </Typography>
        }
        confirmButtonProps={{
          children: RECREATE_ENVELOPE_CONFIRM_BUTTON_TEXT,
          color: 'error',
        }}
        onConfirm={() => {
          handleConfirmRecreateEnvelope()
        }}
        onCancel={handleCancelRecreateEnvelope}
      />
    </>
  )
}

function ActionRow(props: {
  title: string
  description: string
  action: ReactNode
  /** Supplementary text rendered beneath the action. */
  hint?: ReactNode
}) {
  const { title, description, action, hint } = props
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
      <Box sx={{ flexShrink: 0, maxWidth: { sm: '240px' } }}>
        {action}
        {hint && (
          <Typography variant={'smallText1'} sx={{ mt: 1, color: 'grey.700' }}>
            {hint}
          </Typography>
        )}
      </Box>
    </Stack>
  )
}
