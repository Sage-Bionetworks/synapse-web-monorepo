import { ConfirmationDialog } from '@/components/ConfirmationDialog'
import { CANCEL_BUTTON_TEXT } from '@/components/ConfirmationDialog/ConfirmationDialog'
import { DialogBase } from '@/components/DialogBase'
import {
  useCheckDataAccessRequestSignatureUpdatable,
  useGetDataAccessRequestForUpdate,
  useGetDataAccessRequestPreview,
  useGetDataAccessRequestSignatureQuota,
  useInitiateDataAccessRequestSignature,
  useUpdateDataAccessRequestSignature,
  useVoidDataAccessRequestSignature,
} from '@/synapse-queries'
import SynapseClient from '@/synapse-client'
import {
  Alert,
  Box,
  Button,
  ButtonProps,
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
import {
  SIGNATURE_QUOTA_EXHAUSTED_TITLE,
  SignatureQuotaExhaustedMessage,
} from '../eDucSignatureUtils'
import { longFieldLabelSx } from '../styles'

const PDF_PREVIEW_HEIGHT = '500px'

export const SEND_FOR_SIGNATURE_BUTTON_TEXT = 'Send for electronic signature'

export const KEEP_OR_REPLACE_DIALOG_TITLE =
  'Keep your existing DUC or send a new one?'
export const KEEP_EXISTING_DUC_BUTTON_TEXT = 'Keep Existing DUC'
export const SEND_NEW_DUC_BUTTON_TEXT = 'Send new DUC'

export const RESTART_SIGNING_DIALOG_TITLE = 'Restart DUC signing?'
export const RESTART_SIGNING_CONFIRM_BUTTON_TEXT = 'I understand, send new DUC'

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
  //
  // This latches for the lifetime of the step rather than clearing when a send fails. Re-enabling
  // the query would refetch it (the preview is stale the moment it lands), firing those side
  // effects behind an error message -- worst of all after a successful void, where it would mint a
  // replacement envelope the user never asked for. The already-fetched preview stays on screen, and
  // leaving and re-entering the step regenerates it.
  const [hasStartedSendSequence, setHasStartedSendSequence] = useState(false)

  const {
    data: previewFileHandle,
    isLoading: isLoadingPreview,
    error: previewError,
  } = useGetDataAccessRequestPreview(requestId ?? '', {
    enabled: Boolean(requestId) && !hasStartedSendSequence,
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
  })

  // Preflight the quota so we can disable the send-for-signature action when the user is at
  // or over their limit. A fetch error falls back to the current enabled behavior so a quota
  // service outage doesn't spuriously block valid requests.
  const { data: signatureQuota } = useGetDataAccessRequestSignatureQuota(
    requestId ?? '',
    { enabled: Boolean(requestId) },
  )
  const isAtOrOverQuota =
    signatureQuota?.remaining != null && signatureQuota.remaining <= 0
  // Only routing a new envelope spends a quota unit. Without an envelope in flight that is the
  // only thing Send can do, so the quota blocks it outright. With one in flight, whether the send
  // is free depends on the precheck, which only the server can answer -- so let the user press
  // Send and let the confirmation it opens govern the paid option.
  const isSendBlockedByQuota = isAtOrOverQuota && !hasSignatureEnvelope

  // Which send-confirmation the precheck selected, or `null` for none. Sending is never silent
  // once an envelope exists: either the user chooses between keeping and replacing it, or they
  // acknowledge that replacing it is the only option.
  const [openConfirmation, setOpenConfirmation] = useState<
    'keepOrReplace' | 'restartSigning' | null
  >(null)
  // Set when the server rejects an update that the client expected to succeed, leaving a recreate
  // -- which the user has no quota for -- as the only way forward.
  const [isRecreateBlockedByQuota, setIsRecreateBlockedByQuota] =
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
    }) ||
    (isRecreateBlockedByQuota && {
      title: SIGNATURE_QUOTA_EXHAUSTED_TITLE,
      reason: <SignatureQuotaExhaustedMessage quota={signatureQuota?.quota} />,
    })

  const resetSendErrors = () => {
    resetPrecheck()
    resetUpdateSignature()
    resetVoidSignature()
    resetInitiateSignature()
    setIsRecreateBlockedByQuota(false)
  }

  const handleSendForSignature = async () => {
    if (!requestId) return
    resetSendErrors()
    setHasStartedSendSequence(true)

    if (!hasSignatureEnvelope) {
      initiateSignature(requestId)
      return
    }

    // `null` means the precheck itself failed; its error is surfaced by the alert below.
    const canUpdateEnvelope = await checkSignatureUpdatable(requestId).catch(
      () => null,
    )
    if (canUpdateEnvelope === null) {
      return
    }
    if (canUpdateEnvelope) {
      // Only the user knows whether their edits are material enough to warrant re-signing, so
      // the choice between correcting and replacing the envelope is theirs.
      setOpenConfirmation('keepOrReplace')
    } else if (isAtOrOverQuota) {
      // Replacing spends a routing the user doesn't have, so there is nothing to confirm.
      setIsRecreateBlockedByQuota(true)
    } else {
      setOpenConfirmation('restartSigning')
    }
  }

  const handleKeepExistingDuc = () => {
    if (!requestId) return
    setOpenConfirmation(null)
    updateSignature(requestId)
  }

  const handleSendNewDuc = async () => {
    if (!requestId) return
    setOpenConfirmation(null)
    const isVoided = await voidSignature(requestId).then(
      () => true,
      () => false,
    )
    if (!isVoided) {
      return
    }
    initiateSignature(requestId)
  }

  // Dismissing leaves the request untouched, so the user is still free to fall back to the
  // manual print-and-upload path.
  const handleCancelConfirmation = () => {
    setOpenConfirmation(null)
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
                  isSendBlockedByQuota ? (
                    <SignatureQuotaExhaustedMessage
                      quota={signatureQuota?.quota}
                    />
                  ) : (
                    ''
                  )
                }
                arrow
                disableHoverListener={!isSendBlockedByQuota}
                disableFocusListener={!isSendBlockedByQuota}
                disableTouchListener={!isSendBlockedByQuota}
              >
                {/* Tooltip wrapper Box is needed because MUI Tooltip does not fire on disabled children directly. */}
                <Box component={'span'}>
                  <Button
                    variant={'contained'}
                    disabled={actionsDisabled || isSendBlockedByQuota}
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
      <DialogBase
        open={openConfirmation === 'keepOrReplace'}
        title={KEEP_OR_REPLACE_DIALOG_TITLE}
        content={
          <>
            <Typography variant={'body1'} sx={longFieldLabelSx}>
              Your DUC was already signed and submitted. If your changes
              don&apos;t affect what&apos;s on it, you can keep it and resubmit.
              If they do, you&apos;ll need a new DUC, and your PI or Project
              Lead, Signing Official, and any named Collaborators will need to
              sign again.
            </Typography>
            <RemainingEDucAllowance remaining={signatureQuota?.remaining} />
          </>
        }
        onCancel={handleCancelConfirmation}
        actions={
          <>
            <Button variant={'outlined'} onClick={handleCancelConfirmation}>
              {CANCEL_BUTTON_TEXT}
            </Button>
            <SendNewDucButton
              quota={signatureQuota?.quota}
              isAtOrOverQuota={isAtOrOverQuota}
              variant={'outlined'}
              onClick={() => {
                handleSendNewDuc()
              }}
            >
              {SEND_NEW_DUC_BUTTON_TEXT}
            </SendNewDucButton>
            <Button variant={'contained'} onClick={handleKeepExistingDuc}>
              {KEEP_EXISTING_DUC_BUTTON_TEXT}
            </Button>
          </>
        }
      />
      <ConfirmationDialog
        open={openConfirmation === 'restartSigning'}
        title={RESTART_SIGNING_DIALOG_TITLE}
        content={
          <>
            <Typography variant={'body1'} sx={longFieldLabelSx}>
              Your DUC was already submitted for review, so it can&apos;t be
              edited. To submit your changes, we&apos;ll close the current DUC
              and send a new one for signature. Your PI or Project Lead, Signing
              Official, and any named Collaborators will need to sign again.
            </Typography>
            <RemainingEDucAllowance remaining={signatureQuota?.remaining} />
          </>
        }
        confirmButtonProps={{ children: RESTART_SIGNING_CONFIRM_BUTTON_TEXT }}
        onConfirm={() => {
          handleSendNewDuc()
        }}
        onCancel={handleCancelConfirmation}
      />
    </>
  )
}

/**
 * The month's remaining electronic DUC allowance. Omitted rather than guessed at when the quota
 * request has not resolved.
 */
function RemainingEDucAllowance(props: { remaining: number | undefined }) {
  const { remaining } = props
  if (remaining == null) {
    return null
  }
  return (
    <Typography variant={'body1'} sx={{ ...longFieldLabelSx, mt: 2 }}>
      You can create <strong>{remaining}</strong> more electronic{' '}
      {remaining === 1 ? 'DUC' : 'DUCs'} this month.
    </Typography>
  )
}

/**
 * The "send a new DUC" action, disabled with an explanation when the user has no routings left.
 * Replacing an envelope always spends one, so this is the only action in the keep-or-replace
 * dialog that the quota can block.
 */
function SendNewDucButton(
  props: ButtonProps & { quota: number | undefined; isAtOrOverQuota: boolean },
) {
  const { quota, isAtOrOverQuota, ...buttonProps } = props
  return (
    <Tooltip
      title={
        isAtOrOverQuota ? <SignatureQuotaExhaustedMessage quota={quota} /> : ''
      }
      arrow
      disableHoverListener={!isAtOrOverQuota}
      disableFocusListener={!isAtOrOverQuota}
      disableTouchListener={!isAtOrOverQuota}
    >
      {/* Tooltip wrapper Box is needed because MUI Tooltip does not fire on disabled children directly. */}
      <Box component={'span'}>
        <Button {...buttonProps} disabled={isAtOrOverQuota} />
      </Box>
    </Tooltip>
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
