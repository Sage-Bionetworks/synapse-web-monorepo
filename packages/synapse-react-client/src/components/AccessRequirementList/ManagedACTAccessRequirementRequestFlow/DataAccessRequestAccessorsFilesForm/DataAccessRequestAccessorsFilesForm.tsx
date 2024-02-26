import React, { useEffect, useState } from 'react'
import {
  AccessorChange,
  AccessType,
  FileHandleAssociateType,
  FileHandleAssociation,
  FileUploadComplete,
  ManagedACTAccessRequirement,
  Renewal,
  Request,
  RestrictableObjectType,
  UploadCallbackResp,
} from '@sage-bionetworks/synapse-types'
import IconSvg from '../../../IconSvg/IconSvg'
import {
  Alert,
  AlertProps as MuiAlertProps,
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import {
  useGetCurrentUserProfile,
  useGetDataAccessRequestForUpdate,
  useSubmitDataAccessRequest,
  useUpdateDataAccessRequest,
} from '../../../../synapse-queries'
import { SynapseClientError } from '../../../../utils/SynapseClientError'
import TextField from '../../../TextField/TextField'
import DataAccessRequestAccessorsEditor, {
  DataAccessRequestAccessorsEditorProps,
} from '../DataAccessRequestAccessorsEditor'
import { UploadDocumentField } from '../UploadDocumentField'
import DocumentTemplate from '../DocumentTemplate'
import ManagedACTAccessRequirementFormWikiWrapper from '../ManagedACTAccessRequirementFormWikiWrapper'
import { SynapseErrorBoundary } from '../../../error/ErrorBanner'
import { deepEquals } from '@rjsf/utils'
import { useSynapseContext } from '../../../../utils'

function AccessorRequirementHelpText(props: {
  managedACTAccessRequirement: ManagedACTAccessRequirement
}) {
  const { managedACTAccessRequirement } = props
  let link: string = ''
  let msg: string = ''

  if (
    managedACTAccessRequirement.isCertifiedUserRequired &&
    managedACTAccessRequirement.isValidatedProfileRequired
  ) {
    link = 'https://help.synapse.org/docs/User-Types.2007072795.html'
    msg =
      'All data requesters must be certified users and have a validated user profile.'
  } else if (managedACTAccessRequirement.isCertifiedUserRequired) {
    link =
      'https://help.synapse.org/docs/User-Types.2007072795.html#UserAccountTiers-CertifiedUsers'
    msg = 'All data requesters must be a certified user.'
  } else if (managedACTAccessRequirement.isValidatedProfileRequired) {
    link =
      'https://help.synapse.org/docs/User-Types.2007072795.html#UserAccountTiers-ValidatedUsers'
    msg = 'All data requesters must have a validated user profile.'
  }
  return link && msg ? (
    <>
      {managedACTAccessRequirement.isDUCRequired ? (
        <>
          This list should match those listed on your DUC.
          <br />
        </>
      ) : (
        ''
      )}
      {msg}{' '}
      <Link href={link} target={'_blank'} rel={'noreferrer'}>
        Learn more
      </Link>
    </>
  ) : (
    <></>
  )
}

export type DataAccessRequestAccessorsFilesFormProps = {
  /**
   * The ID of the object of interest. This corresponds to the subjectId of the {@link CreateSubmissionRequest}
   */
  subjectId: string
  /* The type of the subject */
  subjectType: RestrictableObjectType
  /* The access requirement to which the user is requesting access */
  managedACTAccessRequirement: ManagedACTAccessRequirement
  onSubmissionCreated: () => void
  researchProjectId: string
  onHide: () => void
  /* Callback invoked when the user clicks cancel. The unsaved, modified dataAccessRequest is returned so the calling component may prompt the user to save this data */
  onCancel: (modifiedDataAccessRequest: Request | Renewal) => void
}

export type AlertProps = {
  key: MuiAlertProps['severity']
  message: string | JSX.Element
}

/**
 * Step 2 of the Data Access Request/Renewal flow prompts the user to
 * - Manage the list of accessors, i.e. Synapse users who will gain, renew, or lose access
 * - Download and upload documents required by the Access Requirement
 * - If a renewal, provide publications and a summary of use statement.
 *
 * The component expects a researchProjectId, which should reference complete researchProject created in Step 1.
 * The user may click a "Submit" button, which will save the request and issue a data access submission that references
 * the requestId created/updated in this component.
 */
export default function DataAccessRequestAccessorsFilesForm(
  props: DataAccessRequestAccessorsFilesFormProps,
) {
  const {
    onSubmissionCreated,
    managedACTAccessRequirement,
    subjectId,
    subjectType,
    researchProjectId,
    onCancel,
  } = props
  const { accessToken } = useSynapseContext()
  const isLoggedIn = Boolean(accessToken)
  const { data: user } = useGetCurrentUserProfile({ enabled: isLoggedIn })
  const [alert, setAlert] = useState<AlertProps | undefined>()
  const [accessorChanges, setAccessorChanges] = useState<
    AccessorChange[] | undefined
  >()
  const [summaryOfUse, setSummaryOfUse] = useState<string | undefined>()
  const [publication, setPublication] = useState<string | undefined>()

  const { data: dataAccessRequest, isLoading: isLoadingGetDataAccessRequest } =
    useGetDataAccessRequestForUpdate(String(managedACTAccessRequirement.id), {
      enabled: isLoggedIn,
      // Infinite staleTime ensures this won't get re-fetched unless explicitly invalidated by the mutation
      staleTime: Infinity,
      // This call should never fail, so if we run into an error, throwing to an error boundary is acceptable
      throwOnError: true,
    })

  const isRenewal =
    dataAccessRequest?.concreteType ===
    'org.sagebionetworks.repo.model.dataaccess.Renewal'

  function onError(e: SynapseClientError) {
    console.log('RequestDataAccessStep2: Error updating form', e)
    setAlert({
      key: 'error',
      message: getErrorMessage(e.reason),
    })
  }

  const { mutate: submit, isPending: submitDataAccessRequestIsPending } =
    useSubmitDataAccessRequest({
      onSuccess: () => {
        onSubmissionCreated()
      },
      onError: onError,
    })

  const {
    mutateAsync: updateRequestAsync,
    isPending: updateDataAccessRequestIsPending,
  } = useUpdateDataAccessRequest({
    onError: onError,
  })

  const isLoading =
    isLoadingGetDataAccessRequest ||
    updateDataAccessRequestIsPending ||
    submitDataAccessRequestIsPending

  /**
   * This effect comprises a collection of updates we should immediately apply to a data access request.
   */
  useEffect(() => {
    if (dataAccessRequest && user) {
      let shouldUpdate = false

      // Attach the researchProjectId to the request
      if (!dataAccessRequest.researchProjectId) {
        dataAccessRequest.researchProjectId = researchProjectId
        shouldUpdate = true
      }

      // Add the current user with GAIN_ACCESS to the list of accessors
      const currentUserWithGainAccess: AccessorChange = {
        userId: user.ownerId,
        type: isRenewal ? AccessType.RENEW_ACCESS : AccessType.GAIN_ACCESS,
      }
      if (
        !dataAccessRequest.accessorChanges ||
        !dataAccessRequest.accessorChanges.find(item =>
          deepEquals(item, currentUserWithGainAccess),
        )
      ) {
        dataAccessRequest.accessorChanges = [
          currentUserWithGainAccess,
          ...(dataAccessRequest.accessorChanges || []),
        ]
        shouldUpdate = true
      }

      // SWC-5765: Filter out duplicate accessors
      const seen = new Set()
      const uniqueAccessorChanges = dataAccessRequest.accessorChanges.filter(
        accessorChange => {
          return seen.has(accessorChange.userId)
            ? false
            : seen.add(accessorChange.userId)
        },
      )
      if (
        uniqueAccessorChanges.length !==
        dataAccessRequest.accessorChanges.length
      ) {
        dataAccessRequest.accessorChanges = uniqueAccessorChanges
        shouldUpdate = true
      }

      if (shouldUpdate) {
        updateRequestAsync(dataAccessRequest)
      }
    }
  }, [
    dataAccessRequest,
    isRenewal,
    researchProjectId,
    updateRequestAsync,
    user,
  ])

  /**
   * Fields other than uploaded files are NOT immediately synced with the server. Set local state if these values exist in the
   * fetched object, and no value exists in local state.
   */
  useEffect(() => {
    if (dataAccessRequest) {
      if (dataAccessRequest.accessorChanges && accessorChanges == undefined) {
        setAccessorChanges(dataAccessRequest.accessorChanges)
      }
      if (
        isRenewal &&
        dataAccessRequest.publication &&
        publication == undefined
      ) {
        setPublication(dataAccessRequest.publication)
      }
      if (
        isRenewal &&
        dataAccessRequest.summaryOfUse &&
        summaryOfUse == undefined
      ) {
        setSummaryOfUse(dataAccessRequest.summaryOfUse)
      }
    }
    // Intentionally only re-synchronize state when server state changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataAccessRequest])

  function getDataAccessRequestWithLocalState(): Request | Renewal {
    return {
      ...dataAccessRequest,
      // append local state to the request
      accessorChanges: accessorChanges,
      publication,
      summaryOfUse,
    } as Request | Renewal
  }

  async function handleSubmit() {
    if (dataAccessRequest) {
      // Save the request
      const requestObject = await updateRequestAsync(
        getDataAccessRequestWithLocalState(),
      )
      // Create a submission and attach the request
      submit({
        request: {
          requestId: requestObject.id,
          requestEtag: requestObject.etag,
          subjectId: subjectId,
          subjectType: subjectType,
        },
        accessRequirementId: String(managedACTAccessRequirement.id),
      })
    }
  }

  const getErrorMessage = (reason: string = '') => {
    return (
      <>
        <strong>Sorry, there is an error in submitting your request.</strong>
        <br />
        {reason}
      </>
    )
  }

  const onAccessorChange: DataAccessRequestAccessorsEditorProps['onChange'] =
    updater => {
      // Copy the array so the caller doesn't have to worry about immutability
      setAccessorChanges([...updater(accessorChanges || [])])
    }

  const onClearAttachment = (fid: string) => {
    updateRequestAsync({
      ...dataAccessRequest!,
      attachments: dataAccessRequest!.attachments?.filter(item => item !== fid),
    })
  }

  const uploadCallback = (
    data: UploadCallbackResp,
    context: keyof Pick<
      Request,
      'attachments' | 'irbFileHandleId' | 'ducFileHandleId'
    >,
  ) => {
    if (data.resp && data.success) {
      // Files are uploaded and synced with the server immediately
      const uploadResponse: FileUploadComplete = data.resp
      if (context === 'attachments') {
        updateRequestAsync({
          ...dataAccessRequest!,
          attachments: [
            ...(dataAccessRequest!.attachments || []),
            uploadResponse.fileHandleId,
          ],
        })
      } else {
        updateRequestAsync({
          ...dataAccessRequest!,
          [context]: uploadResponse.fileHandleId,
        })
      }
    } else if (!data.success && data.error) {
      // show the error
      console.log(
        'RequestDataAccessStep2: Error uploading the file',
        data.error,
      )
      setAlert({
        key: 'error',
        message: getErrorMessage(data.error.reason),
      })
    }
  }

  const ducFileHandleAssociation: FileHandleAssociation[] =
    dataAccessRequest?.ducFileHandleId
      ? [
          {
            fileHandleId: dataAccessRequest?.ducFileHandleId,
            associateObjectType:
              FileHandleAssociateType.DataAccessRequestAttachment,
            associateObjectId: String(dataAccessRequest.id),
          },
        ]
      : []
  const irbFileHandleAssociation: FileHandleAssociation[] =
    dataAccessRequest?.irbFileHandleId
      ? [
          {
            fileHandleId: dataAccessRequest.irbFileHandleId,
            associateObjectType:
              FileHandleAssociateType.DataAccessRequestAttachment,
            associateObjectId: String(dataAccessRequest.id),
          },
        ]
      : []

  const attachmentFileHandleAssociations: FileHandleAssociation[] =
    (dataAccessRequest?.attachments || []).map(attachmentFileHandleId => ({
      fileHandleId: attachmentFileHandleId,
      associateObjectType: FileHandleAssociateType.DataAccessRequestAttachment,
      associateObjectId: String(dataAccessRequest!.id),
    })) ?? []

  return (
    <>
      <DialogTitle>
        <Stack direction="row" alignItems={'center'} gap={'5px'}>
          Request Access
          <Box sx={{ flexGrow: 1 }} />
          <IconButton onClick={props.onHide}>
            <IconSvg icon={'close'} wrap={false} sx={{ color: 'grey.700' }} />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <ManagedACTAccessRequirementFormWikiWrapper
          managedACTAccessRequirementId={String(managedACTAccessRequirement.id)}
        >
          <Box
            component={'form'}
            sx={{
              // Must set a minHeight to ensure the user picker in the DataAccessRequestAccessorsEditor doesn't get cut off
              minHeight: '475px',
            }}
            onSubmit={e => e.preventDefault()}
          >
            <Typography variant={'body1'} sx={{ mb: 2 }}>
              Please provide the information below to submit the request for
              access.
            </Typography>

            {dataAccessRequest && user && (
              <DataAccessRequestAccessorsEditor
                accessorChanges={accessorChanges || []}
                onChange={onAccessorChange}
                isRenewal={isRenewal}
                helpText={
                  <AccessorRequirementHelpText
                    managedACTAccessRequirement={managedACTAccessRequirement}
                  />
                }
              />
            )}

            {(managedACTAccessRequirement?.isDUCRequired ||
              managedACTAccessRequirement?.isIRBApprovalRequired ||
              managedACTAccessRequirement?.areOtherAttachmentsRequired ||
              isRenewal) && <Divider sx={{ my: 4 }} />}
            {/* DUC */}
            {managedACTAccessRequirement?.isDUCRequired && (
              <>
                {managedACTAccessRequirement?.ducTemplateFileHandleId && (
                  <DocumentTemplate
                    title={'Download DUC Template'}
                    description={
                      'As a first step, you will need to download the most current version of the Data Use Certificate.'
                    }
                    fileHandleAssociation={{
                      fileHandleId:
                        managedACTAccessRequirement.ducTemplateFileHandleId,
                      associateObjectType:
                        FileHandleAssociateType.AccessRequirementAttachment,
                      associateObjectId: String(managedACTAccessRequirement.id),
                    }}
                    downloadButtonText={'Download DUC Template'}
                  />
                )}
                <Typography variant={'headline3'} sx={{ mt: 4, mb: 2 }}>
                  Fill out and upload a Data Use Certificate
                </Typography>
                <Typography variant={'body1'} sx={{ my: 2 }}>
                  You must download and fill out a Data Use Certificate (DUC).
                  Be sure to upload the completed DUC below once you&apos;ve
                  completed it.
                </Typography>
                <Typography variant={'body1'} component={'ol'}>
                  <li>Download the DUC template file.</li>
                  <li>
                    Fill out the DUC template, following the instructions in the
                    file.
                  </li>
                  <li>
                    Upload the completed certificate using the button below:
                  </li>
                </Typography>
                <SynapseErrorBoundary>
                  <UploadDocumentField
                    id={'duc'}
                    isLoading={isLoading}
                    uploadCallback={resp =>
                      uploadCallback(resp, 'ducFileHandleId')
                    }
                    documentName={'Data Use Certificate'}
                    fileHandleAssociations={ducFileHandleAssociation}
                  />
                </SynapseErrorBoundary>
                {(managedACTAccessRequirement?.isIRBApprovalRequired ||
                  managedACTAccessRequirement?.areOtherAttachmentsRequired ||
                  isRenewal) && <Divider sx={{ my: 4 }} />}
              </>
            )}

            {/* IRB */}
            {managedACTAccessRequirement?.isIRBApprovalRequired && (
              <>
                <Typography variant={'headline3'} sx={{ my: 2 }}>
                  IRB Approval
                </Typography>
                <Typography variant={'body1'} sx={{ my: 2 }}>
                  Upload a signed IRB letter on institutional letterhead. The
                  letter must include the names of all the datasets requested,
                  as well as the names of the data requesters above. Use the
                  button below to upload the document.
                </Typography>
                <SynapseErrorBoundary>
                  <UploadDocumentField
                    id={'irb'}
                    isLoading={isLoading}
                    documentName={'IRB Approval Letter'}
                    uploadCallback={resp =>
                      uploadCallback(resp, 'irbFileHandleId')
                    }
                    fileHandleAssociations={irbFileHandleAssociation}
                  />
                </SynapseErrorBoundary>
                {(managedACTAccessRequirement?.areOtherAttachmentsRequired ||
                  isRenewal) && <Divider sx={{ my: 4 }} />}
              </>
            )}

            {
              /* Attachments */
              managedACTAccessRequirement?.areOtherAttachmentsRequired && (
                <>
                  <Typography variant={'headline3'} sx={{ my: 2 }}>
                    Upload other required documents
                  </Typography>
                  <Typography variant={'body1'} sx={{ my: 2 }}>
                    You must upload other required documents. Please review the
                    instructions to gain data access to determine which
                    documents must also be uploaded.
                  </Typography>
                  <SynapseErrorBoundary>
                    <UploadDocumentField
                      id={'file-attachment'}
                      isLoading={isLoading}
                      documentName={'Attachment'}
                      uploadCallback={res => uploadCallback(res, 'attachments')}
                      isMultiFileUpload={true}
                      fileHandleAssociations={attachmentFileHandleAssociations}
                      onClearAttachment={onClearAttachment}
                    />
                  </SynapseErrorBoundary>

                  {isRenewal && <Divider sx={{ my: 4 }} />}
                </>
              )
            }

            {
              // Publications & Summary of Use
              isRenewal && (
                <>
                  <TextField
                    id={'publications'}
                    label={'Publication(s)'}
                    disabled={submitDataAccessRequestIsPending}
                    multiline
                    rows={3}
                    value={publication}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setPublication(e.target.value)
                    }
                  />
                  <TextField
                    id={'summaryOfUse'}
                    label={'Summary of use'}
                    value={summaryOfUse}
                    disabled={submitDataAccessRequestIsPending}
                    multiline
                    rows={3}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      setSummaryOfUse(e.target.value)
                    }
                  />
                </>
              )
            }
          </Box>
        </ManagedACTAccessRequirementFormWikiWrapper>
        {alert && <Alert severity={alert.key}>{alert.message}</Alert>}
      </DialogContent>
      <DialogActions>
        {
          <>
            <Button
              variant="outlined"
              disabled={submitDataAccessRequestIsPending}
              onClick={() => {
                if (dataAccessRequest) {
                  // include the local state in the onCancel callback so the user may save their changes
                  onCancel(getDataAccessRequestWithLocalState())
                }
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              disabled={submitDataAccessRequestIsPending}
              onClick={() => {
                handleSubmit()
              }}
            >
              Submit
            </Button>
          </>
        }
      </DialogActions>
    </>
  )
}
