import {
  Alert,
  Box,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material'
import { SynapseClientError } from '@sage-bionetworks/synapse-client/util/SynapseClientError'
import {
  FileHandleAssociateType,
  FileHandleAssociation,
  FileUploadComplete,
  ManagedACTAccessRequirement,
  UploadCallbackResp,
} from '@sage-bionetworks/synapse-types'
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react'
import {
  useGetAccessRequirements,
  useUpdateAccessRequirement,
} from '../../synapse-queries/dataaccess/useAccessRequirements'
import { DAY_IN_MS } from '../../utils/SynapseConstants'
import { UploadDocumentField } from '../AccessRequirementList/ManagedACTAccessRequirementRequestFlow/UploadDocumentField'
import { SynapseErrorBoundary } from '../error/ErrorBanner'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { AccessorRequirements } from '../SetBasicAccessRequirementFields/AccessorRequirements'
import { AccessRequirementWikiInstructions } from '../SetBasicAccessRequirementFields/AccessRequirementWikiInstructions'

export const DUC_TEMPLATE_UPLOAD_ERROR =
  'There was an error uploading the DUC template. '

export const getValidExpirationPeriodOrErrorMessage = (
  expirationPeriodDays: string,
) => {
  if (expirationPeriodDays === '') return 0

  const msgPrefix = 'Please enter a valid expiration period (in days): '
  if (/^[-]?\d+$/.test(expirationPeriodDays)) {
    const num = Number(expirationPeriodDays)
    if (num < 0) {
      return `${msgPrefix}If expiration period is set, then it must be greater than 0.`
    }
    return num * DAY_IN_MS
  }
  return `${msgPrefix}For input string: "${expirationPeriodDays}"`
}

export type SetManagedAccessRequirementFieldsHandle = {
  /* Allow the parent component to trigger saving the AR, so this may be embedded in an arbitrary modal. */
  save: () => void
}

export type SetManagedAccessRequirementFieldsProps = {
  accessRequirementId: string
  /* Called when AR has been saved successfully */
  onSave: () => void
  /* Called when error saving AR */
  onError: () => void
}

export const SetManagedAccessRequirementFields = forwardRef(
  function SetManagedAccessRequirementFields(
    props: SetManagedAccessRequirementFieldsProps,
    ref: ForwardedRef<SetManagedAccessRequirementFieldsHandle>,
  ) {
    const { accessRequirementId, onSave, onError } = props

    const { data: accessRequirement, error: getArError } =
      useGetAccessRequirements<ManagedACTAccessRequirement>(
        accessRequirementId,
        { staleTime: Infinity },
      )
    useEffect(() => {
      if (accessRequirement) {
        setUpdatedAr(accessRequirement)
        setExpirationPeriodDays(
          (accessRequirement.expirationPeriod / DAY_IN_MS).toString(),
        )
      }
    }, [accessRequirement])

    const [uploadDucTemplateError, setUploadDucTemplateError] = useState<
      string | null
    >(null)
    const [expirationPeriodError, setExpirationPeriodError] = useState<
      string | null
    >(null)

    const [updatedAr, setUpdatedAr] =
      useState<ManagedACTAccessRequirement | null>(null)
    const [expirationPeriodDays, setExpirationPeriodDays] = useState<string>('')

    const ducTemplateFileHandleAssociation = useMemo(() => {
      if (updatedAr?.ducTemplateFileHandleId) {
        const ducTemplateFileHandleAssociation: FileHandleAssociation = {
          fileHandleId: updatedAr.ducTemplateFileHandleId,
          associateObjectType:
            FileHandleAssociateType.AccessRequirementAttachment,
          associateObjectId: updatedAr.id.toString(),
        }
        return ducTemplateFileHandleAssociation
      }
      return undefined
    }, [updatedAr?.ducTemplateFileHandleId, updatedAr?.id])

    const uploadDucTemplateCallback = (data: UploadCallbackResp) => {
      if (data.resp && data.success && updatedAr) {
        setUploadDucTemplateError(null)
        // Files are uploaded and synced with the server immediately
        const uploadResponse: FileUploadComplete = data.resp
        setUpdatedAr({
          ...updatedAr,
          ducTemplateFileHandleId: uploadResponse.fileHandleId,
        })
      } else if (!data.success && data.error) {
        setUploadDucTemplateError(
          `${DUC_TEMPLATE_UPLOAD_ERROR} ${
            (data.error as SynapseClientError).reason
          }`,
        )
      }
    }

    const {
      mutate: updateAccessRequirement,
      isPending: isUpdatingAccessRequirement,
      error: updateArError,
    } = useUpdateAccessRequirement<ManagedACTAccessRequirement>({
      onSuccess: () => onSave(),
      onError: () => onError(),
    })

    useImperativeHandle(
      ref,
      () => {
        return {
          save() {
            if (updatedAr) {
              const expirationPeriodOrErrorMessage =
                getValidExpirationPeriodOrErrorMessage(expirationPeriodDays)
              if (typeof expirationPeriodOrErrorMessage === 'string') {
                setExpirationPeriodError(expirationPeriodOrErrorMessage)
                onError()
              } else {
                updateAccessRequirement({
                  ...updatedAr,
                  expirationPeriod: expirationPeriodOrErrorMessage,
                })
              }
            }
          },
        }
      },
      [expirationPeriodDays, updatedAr, updateAccessRequirement, onError],
    )

    if (!updatedAr) {
      if (getArError) {
        return <Alert severity="error">{getArError.reason}</Alert>
      } else {
        return <SynapseSpinner />
      }
    }

    return (
      <>
        <AccessRequirementWikiInstructions accessRequirement={updatedAr} />
        <Box>
          <Typography
            bgcolor="#f5f5f5"
            borderBottom="1px solid #ddd"
            color="#333"
            px={2}
            py={1}
          >
            Data Access Request Parameters
          </Typography>
          <Box mt={2} mb={4}>
            <AccessorRequirements
              accessRequirement={updatedAr}
              onChange={updatedAr =>
                setUpdatedAr(updatedAr as ManagedACTAccessRequirement)
              }
            />
            <Box mb={2}>
              <Typography variant="body1" fontWeight={700}>
                DUC
              </Typography>
              <FormControlLabel
                control={<Checkbox />}
                label="DUC is required."
                checked={updatedAr.isDUCRequired}
                onChange={(_event, checked: boolean) =>
                  setUpdatedAr({
                    ...updatedAr,
                    isDUCRequired: checked,
                  })
                }
              />
              <SynapseErrorBoundary>
                <UploadDocumentField
                  id="duc"
                  isLoading={isUpdatingAccessRequirement}
                  uploadCallback={resp => uploadDucTemplateCallback(resp)}
                  documentName="Template DUC"
                  fileHandleAssociations={
                    ducTemplateFileHandleAssociation
                      ? [ducTemplateFileHandleAssociation]
                      : undefined
                  }
                  isMultiFileUpload={false}
                  uploadBtnVariant="contained"
                />
                {uploadDucTemplateError && (
                  <Alert severity="error" sx={{ marginTop: 2 }}>
                    {uploadDucTemplateError}
                  </Alert>
                )}
              </SynapseErrorBoundary>
              <FormControlLabel
                label="IRB approval is required."
                checked={updatedAr.isIRBApprovalRequired}
                control={<Checkbox />}
                onChange={(_event, checked: boolean) =>
                  setUpdatedAr({
                    ...updatedAr,
                    isIRBApprovalRequired: checked,
                  })
                }
                sx={{ ml: 0 }}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Other documents are required."
                checked={updatedAr.areOtherAttachmentsRequired}
                onChange={(_event, checked: boolean) =>
                  setUpdatedAr({
                    ...updatedAr,
                    areOtherAttachmentsRequired: checked,
                  })
                }
              />
              <TextField
                id="expirationPeriod"
                name="expirationPeriod"
                label="Expiration period (days)"
                value={expirationPeriodDays}
                error={Boolean(expirationPeriodError)}
                helperText={expirationPeriodError}
                sx={{ mt: 1 }}
                fullWidth
                onChange={event => {
                  setExpirationPeriodError(null)
                  setExpirationPeriodDays(event.target.value)
                }}
                onBlur={() => {
                  const expirationPeriodOrErrorMessage =
                    getValidExpirationPeriodOrErrorMessage(expirationPeriodDays)
                  if (typeof expirationPeriodOrErrorMessage === 'string') {
                    setExpirationPeriodError(expirationPeriodOrErrorMessage)
                  }
                }}
              />
              <Box mt={1}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Intended Data Use statement is required."
                  checked={updatedAr.isIDURequired}
                  onChange={(_event, checked: boolean) => {
                    if (checked) {
                      setUpdatedAr({
                        ...updatedAr,
                        isIDURequired: true,
                      })
                    } else {
                      setUpdatedAr({
                        ...updatedAr,
                        isIDURequired: false,
                        isIDUPublic: false,
                      })
                    }
                  }}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Intended Data Use statements will be publicly available."
                  checked={updatedAr.isIDUPublic}
                  disabled={!updatedAr.isIDURequired}
                  onChange={(_event, checked: boolean) =>
                    setUpdatedAr({
                      ...updatedAr,
                      isIDUPublic: checked,
                    })
                  }
                />
              </Box>
            </Box>
          </Box>
        </Box>
        {updateArError && (
          <Alert severity="error" sx={{ marginTop: 2 }}>
            {updateArError.reason}
          </Alert>
        )}
      </>
    )
  },
)
