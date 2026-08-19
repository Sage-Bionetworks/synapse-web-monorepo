import {
  useGetDataAccessRequestForUpdate,
  useGetDataAccessRequestPreview,
  useSubmitDataAccessRequest,
  useUpdateDataAccessRequest,
} from '@/synapse-queries'
import SynapseClient from '@/synapse-client'
import { ExpandMore } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Skeleton,
  Stack,
  Typography,
} from '@mui/material'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
  ManagedACTAccessRequirement,
  RestrictableObjectType,
  UploadCallbackResp,
} from '@sage-bionetworks/synapse-types'
import { useState } from 'react'
import IconSvg from '../../../IconSvg/IconSvg'
import { UserBadge } from '../../../UserCard/UserBadge'
import ManagedACTAccessRequirementFormWikiWrapper from '../ManagedACTAccessRequirementFormWikiWrapper'
import { UploadDocumentField } from '../UploadDocumentField'
import { longFieldLabelSx } from '../styles'

export type ManualUploadDucStepProps = {
  managedACTAccessRequirement: ManagedACTAccessRequirement
  subjectId: string
  subjectType: RestrictableObjectType
  onHide: () => void
  onBackClicked: () => void
  onSubmissionCreated: (submissionId: string) => void
  /**
   * Optional href override for the "Download DUC for Signatures" anchor. When set, the preview
   * file handle fetch is skipped and this URL is used directly. Used by stories and tests where
   * the portal servlet is not available.
   */
  downloadHrefOverride?: string
}

/**
 * Wizard step shown after the eDUC preview (PORTALS-4377) when the user chooses to manually
 * print, sign, and upload a PDF instead of using electronic signatures. Lets the user download
 * the partially-populated DUC, upload a signed copy, and submit the request.
 */
export default function ManualUploadDucStep(props: ManualUploadDucStepProps) {
  const {
    managedACTAccessRequirement,
    subjectId,
    subjectType,
    onHide,
    onBackClicked,
    onSubmissionCreated,
    downloadHrefOverride,
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
    enabled: Boolean(dataAccessRequest?.id) && !downloadHrefOverride,
  })

  const previewFileHandleId = previewFileHandle?.fileHandleId
  const downloadHref =
    downloadHrefOverride ??
    (previewFileHandleId
      ? SynapseClient.getPortalFileHandleServletUrl(previewFileHandleId)
      : undefined)

  const [updateError, setUpdateError] = useState<string | undefined>()
  const [submitError, setSubmitError] = useState<string | undefined>()

  const {
    mutate: updateRequest,
    mutateAsync: updateRequestAsync,
    isPending: isUpdating,
  } = useUpdateDataAccessRequest({
    onError: e => setUpdateError(e.reason),
  })

  const { mutate: submit, isPending: isSubmitting } =
    useSubmitDataAccessRequest({
      onSuccess: submission => onSubmissionCreated(submission.submissionId),
      onError: e => setSubmitError(e.reason),
    })

  const accessorChanges = dataAccessRequest?.accessorChanges ?? []
  const signedDucFileHandleId = dataAccessRequest?.ducFileHandleId
  const signedDucFileHandleAssociations: FileHandleAssociation[] =
    signedDucFileHandleId && dataAccessRequest?.id
      ? [
          {
            fileHandleId: signedDucFileHandleId,
            associateObjectType:
              FileHandleAssociateType.DataAccessRequestAttachment,
            associateObjectId: dataAccessRequest.id,
          },
        ]
      : []

  const isDownloadDisabled = isLoadingDar || isLoadingPreview || !downloadHref
  const isSubmitDisabled =
    isLoadingDar ||
    !dataAccessRequest ||
    !signedDucFileHandleId ||
    isUpdating ||
    isSubmitting

  const handleUpload = (resp: UploadCallbackResp) => {
    if (!resp.success || !resp.resp || !dataAccessRequest) {
      if (resp.error) {
        setUpdateError(resp.error.reason)
      }
      return
    }
    setUpdateError(undefined)
    updateRequest({
      ...dataAccessRequest,
      ducFileHandleId: resp.resp.fileHandleId,
    })
  }

  const handleSubmit = async () => {
    if (!dataAccessRequest) return
    setSubmitError(undefined)
    // Persist the DAR once more so the submission uses the latest etag.
    const latest = await updateRequestAsync(dataAccessRequest).catch(() => null)
    if (!latest) return
    submit({
      request: {
        requestId: latest.id,
        requestEtag: latest.etag,
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
          <IconButton onClick={onHide}>
            <IconSvg icon={'close'} wrap={false} sx={{ color: 'grey.700' }} />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <ManagedACTAccessRequirementFormWikiWrapper
          managedACTAccessRequirementId={String(managedACTAccessRequirement.id)}
        >
          <Box>
            <Typography variant={'headline3'} sx={{ mb: 2 }}>
              Submit a signed PDF instead of e-signatures
            </Typography>
            <Typography variant={'body1'} sx={{ ...longFieldLabelSx, mb: 2 }}>
              Instead of signing the Data Use Certificate (DUC) using DocuSign,
              you can download the DUC as a PDF and then upload it after it has
              been signed by your collaborators, your project lead, and your
              Signing Official.
            </Typography>
            <Typography variant={'body1'} sx={{ ...longFieldLabelSx, mb: 3 }}>
              However, we recommend using e-signatures, as it is usually faster,
              and prevents common errors which can result in your request being
              rejected.
            </Typography>

            <Accordion
              defaultExpanded={false}
              disableGutters
              sx={{
                boxShadow: 'none',
                borderTop: '1px solid',
                borderBottom: '1px solid',
                borderColor: 'grey.300',
                '&:before': { display: 'none' },
                mb: 3,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="review-collaborators-content"
                id="review-collaborators-header"
              >
                <Typography variant={'headline3'}>
                  Review your list of collaborators
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack sx={{ gap: 1 }}>
                  {accessorChanges.length === 0 && !isLoadingDar && (
                    <Typography variant={'body1'} sx={longFieldLabelSx}>
                      No collaborators added.
                    </Typography>
                  )}
                  {accessorChanges.map(ac => (
                    <UserBadge
                      key={ac.userId}
                      userId={ac.userId}
                      showAccountLevelIcon={true}
                      disableLink={true}
                      showFullName={true}
                    />
                  ))}
                </Stack>
              </AccordionDetails>
            </Accordion>

            <Typography variant={'headline3'} sx={{ mb: 2 }}>
              Instructions
            </Typography>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              sx={{ gap: 4, alignItems: 'flex-start' }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography variant={'body1'} sx={{ fontWeight: 700, mb: 1 }}>
                  Step 1. Download your Data Use Certificate
                </Typography>
                <Typography
                  variant={'body1'}
                  sx={{ ...longFieldLabelSx, mb: 2 }}
                >
                  As a first step, you will need to download a PDF of the Data
                  Use Certificate with the names of your Collaborators and
                  Signing Official. Make sure the names are correct and complete
                  before downloading.
                </Typography>
                <Typography
                  variant={'body1'}
                  sx={{ ...longFieldLabelSx, mb: 2 }}
                >
                  If needed, you can modify the printed list of collaborators by
                  adding or removing names on the paper copy before uploading.
                </Typography>
                {previewError ? (
                  <Alert severity={'error'}>
                    <strong>
                      Sorry, we couldn&apos;t prepare your DUC for download.
                    </strong>
                    <br />
                    {previewError.reason}
                  </Alert>
                ) : (
                  <Button
                    component="a"
                    href={downloadHref ?? undefined}
                    target="_blank"
                    rel="noopener"
                    variant={'outlined'}
                    disabled={isDownloadDisabled}
                    endIcon={<IconSvg icon={'download'} wrap={false} />}
                  >
                    Download DUC for Signatures
                  </Button>
                )}
              </Box>
              <Box sx={{ flex: 1 }}>
                <Typography variant={'body1'} sx={{ fontWeight: 700, mb: 1 }}>
                  Step 2. Fill out and upload a Data Use Certificate
                </Typography>
                <Typography
                  variant={'body1'}
                  sx={{ ...longFieldLabelSx, mb: 2 }}
                >
                  You must download and fill out a Data Use Certificate (DUC).
                  Be sure to upload the completed DUC below.
                </Typography>
                <Typography
                  variant={'body1'}
                  component={'ol'}
                  sx={{ ...longFieldLabelSx, mb: 2, pl: 3 }}
                >
                  <li>Download the DUC document.</li>
                  <li>
                    Fill out the DUC, following the instructions in the PDF.
                  </li>
                  <li>
                    Upload the completed certificate using the button below:
                  </li>
                </Typography>
                {isLoadingDar ? (
                  <Skeleton variant={'rectangular'} width={200} height={36} />
                ) : (
                  <UploadDocumentField
                    id={'signed-duc'}
                    documentName={'Signed DUC'}
                    isLoading={isUpdating}
                    uploadCallback={handleUpload}
                    fileHandleAssociations={signedDucFileHandleAssociations}
                  />
                )}
              </Box>
            </Stack>

            {updateError && (
              <Alert severity={'error'} sx={{ mt: 2 }}>
                <strong>Sorry, we couldn&apos;t save your uploaded DUC.</strong>
                <br />
                {updateError}
              </Alert>
            )}
            {submitError && (
              <Alert severity={'error'} sx={{ mt: 2 }}>
                <strong>Sorry, we couldn&apos;t submit your request.</strong>
                <br />
                {submitError}
              </Alert>
            )}
          </Box>
        </ManagedACTAccessRequirementFormWikiWrapper>
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
          Submit Request
        </Button>
      </DialogActions>
    </>
  )
}
