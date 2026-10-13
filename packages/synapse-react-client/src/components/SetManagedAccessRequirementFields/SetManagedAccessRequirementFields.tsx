import {
  useGetAccessRequirements,
  useUpdateAccessRequirement,
} from '@/synapse-queries'
import { DAY_IN_MS } from '@/utils/SynapseConstants'
import {
  Alert,
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material'
import { ManagedACTAccessRequirement } from '@sage-bionetworks/synapse-types'
import {
  ForwardedRef,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import {
  AccessorRequirements,
  AccessRequirementWikiInstructions,
} from '../SetBasicAccessRequirementFields'
import { DataUseCertificateFields } from './DataUseCertificateFields'
import {
  ExpirationPeriodField,
  getValidExpirationPeriodOrErrorMessage,
} from './ExpirationPeriodField'

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

    const [expirationPeriodError, setExpirationPeriodError] = useState<
      string | null
    >(null)

    const [updatedAr, setUpdatedAr] =
      useState<ManagedACTAccessRequirement | null>(null)
    const [expirationPeriodDays, setExpirationPeriodDays] = useState<string>('')

    const {
      mutate: updateAccessRequirement,
      isPending: isUpdatingAccessRequirement,
      error: updateArError,
    } = useUpdateAccessRequirement<ManagedACTAccessRequirement>({
      onSuccess: () => onSave(),
      onError: () => onError(),
    })

    useImperativeHandle(ref, () => {
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
    }, [expirationPeriodDays, updatedAr, updateAccessRequirement, onError])

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
            sx={{
              bgcolor: '#f5f5f5',
              borderBottom: '1px solid #ddd',
              color: '#333',
              px: 2,
              py: 1,
            }}
          >
            Data Access Request Parameters
          </Typography>
          <Box
            sx={{
              mt: 2,
              mb: 4,
            }}
          >
            <AccessorRequirements
              accessRequirement={updatedAr}
              onChange={updatedAr =>
                setUpdatedAr(updatedAr as ManagedACTAccessRequirement)
              }
            />
            <Box
              sx={{
                mb: 2,
              }}
            >
              <DataUseCertificateFields
                accessRequirement={updatedAr}
                isLoading={isUpdatingAccessRequirement}
                onChange={changes => setUpdatedAr({ ...updatedAr, ...changes })}
              />
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
              <ExpirationPeriodField
                days={expirationPeriodDays}
                error={expirationPeriodError}
                onChange={days => {
                  setExpirationPeriodError(null)
                  setExpirationPeriodDays(days)
                }}
                onBlur={() => {
                  const expirationPeriodOrErrorMessage =
                    getValidExpirationPeriodOrErrorMessage(expirationPeriodDays)
                  if (typeof expirationPeriodOrErrorMessage === 'string') {
                    setExpirationPeriodError(expirationPeriodOrErrorMessage)
                  }
                }}
              />
              <Box
                sx={{
                  mt: 1,
                }}
              >
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
