import {
  useGetDataAccessRequestForUpdate,
  useGetDataAccessRequestPreview,
  useGetDataAccessRequestSignatureStatus,
  useGetDataAccessRequestSignedFileHandleId,
  useSubmitDataAccessRequest,
  useUpdateDataAccessRequest,
} from '@/synapse-queries'
import SynapseClient from '@/synapse-client'
import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'
import {
  CheckCircleOutline,
  HourglassEmpty,
  OpenInNew,
  Refresh,
} from '@mui/icons-material'
import {
  Alert,
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Link,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material'
import { EDucSignerStatus } from '@sage-bionetworks/synapse-client'
import {
  ManagedACTAccessRequirement,
  RestrictableObjectType,
} from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import IconSvg from '../../../IconSvg/IconSvg'
import { longFieldLabelSx } from '../styles'

export type SignatureStatusStepProps = {
  managedACTAccessRequirement: ManagedACTAccessRequirement
  subjectId: string
  subjectType: RestrictableObjectType
  onHide: () => void
  onBackClicked: () => void
  onSubmissionCreated: (submissionId: string) => void
  /**
   * Optional href override for the "View DUC" link. When set, the preview file handle fetch
   * is skipped and this URL is used directly. Used by stories and tests where the portal
   * servlet is not available.
   */
  viewDucHrefOverride?: string
}

/**
 * Wizard step shown after the user has routed the eDUC for electronic signature
 * (PORTALS-4380). Polls the DocuSign envelope status, lists the pending signers,
 * and enables submission once every signer has signed.
 */
export default function SignatureStatusStep(props: SignatureStatusStepProps) {
  const {
    managedACTAccessRequirement,
    subjectId,
    subjectType,
    onHide,
    onBackClicked,
    onSubmissionCreated,
    viewDucHrefOverride,
  } = props

  const { data: dataAccessRequest, isLoading: isLoadingDar } =
    useGetDataAccessRequestForUpdate(String(managedACTAccessRequirement.id), {
      staleTime: Infinity,
      throwOnError: true,
    })

  const requestId = dataAccessRequest?.id ?? ''

  const {
    data: signatureStatus,
    isLoading: isLoadingStatus,
    isRefetching: isRefetchingStatus,
    error: statusError,
    refetch: refetchStatus,
  } = useGetDataAccessRequestSignatureStatus(requestId, {
    enabled: Boolean(requestId),
  })

  const signers: EDucSignerStatus[] = signatureStatus?.signerStatus ?? []
  const collectedCount = signers.filter(s => s.status === 'done').length
  const totalCount = signers.length
  const allCollected = totalCount > 0 && collectedCount === totalCount
  const outstandingSigners = signers.filter(s => s.status !== 'done')

  const { data: previewFileHandle } = useGetDataAccessRequestPreview(
    requestId,
    { enabled: Boolean(requestId) && !viewDucHrefOverride },
  )
  const viewDucHref =
    viewDucHrefOverride ??
    (previewFileHandle?.fileHandleId
      ? SynapseClient.getPortalFileHandleServletUrl(
          previewFileHandle.fileHandleId,
        )
      : undefined)

  const { data: signedFileHandle } = useGetDataAccessRequestSignedFileHandleId(
    requestId,
    { enabled: Boolean(requestId) && allCollected },
  )

  const [updateDarError, setUpdateDarError] = useState<string | undefined>()
  const [submitDarError, setSubmitDarError] = useState<string | undefined>()

  const { mutateAsync: updateDarAsync, isPending: isUpdating } =
    useUpdateDataAccessRequest({
      onError: e => setUpdateDarError(e.reason),
    })

  const { mutate: submit, isPending: isSubmitting } =
    useSubmitDataAccessRequest({
      onSuccess: submission => onSubmissionCreated(submission.submissionId),
      onError: e => setSubmitDarError(e.reason),
    })

  const isSubmitDisabled =
    isLoadingDar ||
    isLoadingStatus ||
    isRefetchingStatus ||
    !dataAccessRequest ||
    !allCollected ||
    !signedFileHandle?.fileHandleId ||
    isUpdating ||
    isSubmitting

  const handleSubmit = async () => {
    if (!dataAccessRequest || !signedFileHandle?.fileHandleId) return
    setUpdateDarError(undefined)
    setSubmitDarError(undefined)
    const updated = await updateDarAsync({
      ...dataAccessRequest,
      ducFileHandleId: signedFileHandle.fileHandleId,
    }).catch(() => null)
    if (!updated) return
    submit({
      request: {
        requestId: updated.id,
        requestEtag: updated.etag,
        subjectId,
        subjectType,
      },
      accessRequirementId: String(managedACTAccessRequirement.id),
    })
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
        <Typography variant={'headline3'} sx={{ mb: 2 }}>
          Sign a Data Use Certificate (DUC)
        </Typography>
        <Typography variant={'body1'} sx={{ ...longFieldLabelSx, mb: 2 }}>
          Your DUC has been emailed to your Collaborators. Once all signatures
          (including the Signing Official) have been collected, you can submit
          the Data Access Request.
        </Typography>
        {/* TODO: restore once the backend precheck allows editing collaborators mid-signature (PORTALS-4380 notes).
        <Typography variant={'body1'} sx={{ ...longFieldLabelSx, mb: 3 }}>
          You can update the list of Collaborators by pressing{' '}
          <strong>Back</strong>.
        </Typography>
        */}

        {isLoadingStatus && (
          <Skeleton
            variant={'rectangular'}
            width={'100%'}
            height={120}
            data-testid={'SignatureStatusStep-loading'}
          />
        )}

        {statusError && (
          <Alert severity={'error'}>
            <strong>
              Sorry, we couldn&apos;t load the current signature status.
            </strong>
            <br />
            {statusError.reason}
          </Alert>
        )}

        {!isLoadingStatus && !statusError && signatureStatus && (
          <>
            <Stack
              direction={'row'}
              sx={{ alignItems: 'center', gap: 1, mb: 1 }}
            >
              {allCollected ? (
                <CheckCircleOutline color={'success'} />
              ) : (
                <HourglassEmpty sx={{ color: 'grey.700' }} />
              )}
              <Typography variant={'body1'} sx={{ fontWeight: 700 }}>
                {allCollected
                  ? 'All signatures collected.'
                  : `${collectedCount} out of ${totalCount} signatures collected.`}
              </Typography>
              <Box sx={{ flexGrow: 1 }} />
              {viewDucHref && (
                <Link
                  href={viewDucHref}
                  target={'_blank'}
                  rel={'noopener'}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                  }}
                >
                  View DUC
                  <OpenInNew fontSize={'small'} />
                </Link>
              )}
            </Stack>

            {outstandingSigners.length > 0 && (
              <>
                <Typography variant={'body1'} sx={{ mb: 1 }}>
                  You&apos;re still waiting for signatures from
                </Typography>
                <Box component={'ul'} sx={{ mt: 0, mb: 2, pl: 3 }}>
                  {outstandingSigners.map((signer, index) => (
                    <li key={signer.userId ?? `${signer.name}-${index}`}>
                      <SignerLine signer={signer} />
                    </li>
                  ))}
                </Box>
              </>
            )}

            <Button
              variant={'outlined'}
              startIcon={<Refresh />}
              loading={isRefetchingStatus}
              onClick={() => {
                refetchStatus()
              }}
            >
              Refresh
            </Button>
          </>
        )}

        {updateDarError && (
          <Alert severity={'error'} sx={{ mt: 2 }}>
            <strong>Sorry, we couldn&apos;t save your change.</strong>
            <br />
            {updateDarError}
          </Alert>
        )}
        {submitDarError && (
          <Alert severity={'error'} sx={{ mt: 2 }}>
            <strong>Sorry, we couldn&apos;t submit your request.</strong>
            <br />
            {submitDarError}
          </Alert>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant={'outlined'} onClick={onBackClicked}>
          Back
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Button
          variant={'contained'}
          disabled={isSubmitDisabled}
          loading={isSubmitting}
          onClick={() => {
            handleSubmit()
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </>
  )
}

function SignerLine(props: { signer: EDucSignerStatus }) {
  const { signer } = props
  const displayName = signer.name ?? 'Unnamed signer'
  const nameNode = signer.userId ? (
    <Link
      href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Profile:${signer.userId}`}
      target={'_blank'}
      rel={'noopener'}
    >
      {displayName}
    </Link>
  ) : (
    <>{displayName}</>
  )
  // Only surface non-pending problem states inline; pending is implied by the section header.
  const statusLabel =
    signer.status && signer.status !== 'pending' && signer.status !== 'done'
      ? ` (${signer.status})`
      : ''
  return (
    <Typography variant={'body1'} component={'span'}>
      {nameNode}
      {statusLabel}
    </Typography>
  )
}
