import * as React from 'react'
import { useState } from 'react'
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
} from '../../../utils/synapseTypes'
import IconSvg from '../../IconSvg'
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
} from '../../../utils/hooks/SynapseAPI'
import { SynapseClientError } from '../../../utils/SynapseClientError'
import TextField from '../../TextField'
import DataAccessRequestAccessorsEditor, {
  DataAccessRequestAccessorsEditorProps,
} from './DataAccessRequestAccessorsEditor'
import { UploadDocumentField } from './UploadDocumentField'
import DocumentTemplate from './DocumentTemplate'

export type DataAccessRequestAccessorsFilesFormProps = {
  /**
   * The ID of the entity of interest. This corresponds to the subjectId of the {@link CreateSubmissionRequest}
   */
  entityId: string
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
    entityId,
    researchProjectId,
    onCancel,
  } = props
  const { data: user } = useGetCurrentUserProfile()
  const [alert, setAlert] = useState<AlertProps | undefined>()
  const [dataAccessRequest, setDataAccessRequest] = useState<
    Request | Renewal | undefined
  >()

  useGetDataAccessRequestForUpdate(String(managedACTAccessRequirement.id), {
    // We append the current user onto the accessorChanges, so we wait for that data to populate
    enabled: !!user,
    // Infinite staleTime ensures this won't get re-fetched unless explicitly invalidated by the mutation
    staleTime: Infinity,
    select: data => {
      const isRenewal =
        data.concreteType ===
        'org.sagebionetworks.repo.model.dataaccess.Renewal'
      // Add the current user with GAIN_ACCESS to the list of accessors
      const currentUserWithGainAccess: AccessorChange = {
        userId: user!.ownerId,
        type: isRenewal ? AccessType.RENEW_ACCESS : AccessType.GAIN_ACCESS,
      }
      if (!data.accessorChanges) {
        data.accessorChanges = [currentUserWithGainAccess]
      } else {
        data.accessorChanges = [
          currentUserWithGainAccess,
          ...data.accessorChanges,
        ]
      }

      // SWC-5765: Filter out duplicate accessors
      const seen = new Set()
      data.accessorChanges = data.accessorChanges.filter(accessorChange => {
        return seen.has(accessorChange.userId)
          ? false
          : seen.add(accessorChange.userId)
      })

      // Attach the researchProjectId to the request
      data.researchProjectId = researchProjectId
      return data
    },
    onSuccess: data => {
      setAlert(undefined)
      setDataAccessRequest(data)
    },
    onError: err => {
      setAlert({
        key: 'error',
        message: err.reason,
      })
    },
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

  const { mutate: submit } = useSubmitDataAccessRequest({
    onSuccess: () => {
      onSubmissionCreated()
    },
    onError: onError,
  })

  const { mutateAsync: updateRequestAsync } = useUpdateDataAccessRequest({
    onError: onError,
  })

  async function handleSubmit() {
    if (dataAccessRequest) {
      // Save the request
      const requestObject = await updateRequestAsync(dataAccessRequest)
      // Create a submission and attach the request
      submit({
        request: {
          requestId: requestObject.id,
          requestEtag: requestObject.etag,
          subjectId: entityId,
          subjectType: RestrictableObjectType.ENTITY,
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
      setDataAccessRequest(req => ({
        ...req!,
        // Copy the array so the caller doesn't have to worry about immutability
        accessorChanges: [...updater(req!.accessorChanges || [])],
      }))
    }

  const onClearAttachment = (fid: string) => {
    setDataAccessRequest(req => {
      if (req) {
        return {
          ...req,
          attachments: req.attachments?.filter(item => item !== fid),
        }
      }
      return req
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
      const uploadResponse: FileUploadComplete = data.resp
      if (context === 'attachments') {
        setDataAccessRequest(req => {
          return {
            ...req!,
            attachments: [
              ...(req!.attachments || []),
              uploadResponse.fileHandleId,
            ],
          }
        })
      } else {
        setDataAccessRequest(req => ({
          ...req!,
          [context]: uploadResponse.fileHandleId,
        }))
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

  const handleTextAreaInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    key: keyof Pick<Renewal, 'publication' | 'summaryOfUse'>,
  ) => {
    const value = e.target.value
    setDataAccessRequest(req => ({
      ...(req as Renewal),
      [key]: value,
    }))
  }

  const AccessorRequirementHelpText = () => {
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

  const ducFileHandleAssociation: FileHandleAssociation[] =
    dataAccessRequest?.ducFileHandleId
      ? [
          {
            fileHandleId: dataAccessRequest?.ducFileHandleId,
            associateObjectType:
              FileHandleAssociateType.AccessRequirementAttachment,
            associateObjectId: String(managedACTAccessRequirement.id),
          },
        ]
      : []
  const irbFileHandleAssociation: FileHandleAssociation[] =
    dataAccessRequest?.irbFileHandleId
      ? [
          {
            fileHandleId: dataAccessRequest.irbFileHandleId,
            associateObjectType:
              FileHandleAssociateType.AccessRequirementAttachment,
            associateObjectId: String(managedACTAccessRequirement.id),
          },
        ]
      : []

  const attachmentFileHandleAssociations: FileHandleAssociation[] =
    (dataAccessRequest?.attachments || []).map(attachmentFileHandleId => ({
      fileHandleId: attachmentFileHandleId,
      associateObjectType: FileHandleAssociateType.AccessRequirementAttachment,
      associateObjectId: String(managedACTAccessRequirement.id),
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

          {dataAccessRequest && (
            <DataAccessRequestAccessorsEditor
              accessorChanges={dataAccessRequest.accessorChanges || []}
              onChange={onAccessorChange}
              isRenewal={isRenewal}
              helpText={<AccessorRequirementHelpText />}
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
                You must download and fill out a Data Use Certificate (DUC). Be
                sure to upload the completed DUC below once you&apos;ve
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
              <UploadDocumentField
                id={'duc'}
                uploadCallback={resp => uploadCallback(resp, 'ducFileHandleId')}
                documentName={'Data Use Certificate'}
                fileHandleAssociations={ducFileHandleAssociation}
              />
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
                letter must include the names of all the datasets requested, as
                well as the names of the data requesters above. Use the button
                below to upload the document.
              </Typography>
              <UploadDocumentField
                id={'irb'}
                documentName={'IRB Approval Letter'}
                uploadCallback={resp => uploadCallback(resp, 'irbFileHandleId')}
                fileHandleAssociations={irbFileHandleAssociation}
              />

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
                  instructions to gain data access to determine which documents
                  must also be uploaded.
                </Typography>
                <UploadDocumentField
                  id={'file-attachment'}
                  documentName={'Attachment'}
                  uploadCallback={res => uploadCallback(res, 'attachments')}
                  isMultiFileUpload={true}
                  fileHandleAssociations={attachmentFileHandleAssociations}
                  onClearAttachment={onClearAttachment}
                />

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
                  multiline
                  rows={3}
                  value={dataAccessRequest?.publication}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    handleTextAreaInputChange(e, 'publication')
                  }
                />
                <TextField
                  id={'summaryOfUse'}
                  label={'Summary of use'}
                  value={dataAccessRequest?.summaryOfUse}
                  multiline
                  rows={3}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    handleTextAreaInputChange(e, 'summaryOfUse')
                  }
                />
              </>
            )
          }

          {
            /* Alert message */
            alert && <Alert severity={alert.key}>{alert.message}</Alert>
          }
        </Box>
      </DialogContent>
      <DialogActions>
        {
          <>
            <Button
              variant="outlined"
              onClick={() => {
                if (dataAccessRequest) {
                  onCancel(dataAccessRequest)
                }
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
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
