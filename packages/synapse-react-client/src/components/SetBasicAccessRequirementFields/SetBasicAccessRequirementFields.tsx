import {
  useGetAccessRequirements,
  useUpdateAccessRequirement,
} from '@/synapse-queries'
import { Alert } from '@mui/material'
import {
  AccessRequirement,
  ManagedACTAccessRequirement,
} from '@sage-bionetworks/synapse-types'
import {
  ForwardedRef,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { AccessorRequirements } from './AccessorRequirements'
import { AccessRequirementTextInstructions } from './AccessRequirementTextInstructions'
import { AccessRequirementWikiInstructions } from './AccessRequirementWikiInstructions'

export type BasicAccessRequirement = Exclude<
  AccessRequirement,
  ManagedACTAccessRequirement
>

export type SetBasicAccessRequirementFieldsHandle = {
  /* Allow the parent component to trigger saving the AR, so this may be embedded in an arbitrary modal. */
  save: () => void
}

export type SetBasicAccessRequirementFieldsProps = {
  accessRequirementId: string
  /* Called when AR has been saved successfully */
  onSave: () => void
  /* Called when error saving AR */
  onError: () => void
  allowDeleteTextInstructions?: boolean
}

export const SetBasicAccessRequirementFields = forwardRef(
  function SetBasicAccessRequirementFields(
    props: SetBasicAccessRequirementFieldsProps,
    ref: ForwardedRef<SetBasicAccessRequirementFieldsHandle>,
  ) {
    const {
      accessRequirementId,
      onSave,
      onError,
      allowDeleteTextInstructions = false,
    } = props
    const [updatedAr, setUpdatedAr] = useState<BasicAccessRequirement | null>(
      null,
    )

    const { data: accessRequirement, error: getArError } =
      useGetAccessRequirements<BasicAccessRequirement>(accessRequirementId, {
        staleTime: Infinity,
      })
    useEffect(() => {
      if (accessRequirement) {
        setUpdatedAr(accessRequirement)
      }
    }, [accessRequirement])

    const { mutateAsync: updateAccessRequirement, error: updateArError } =
      useUpdateAccessRequirement<BasicAccessRequirement>()

    const onUpdateAccessRequirement = useCallback(
      async (
        updatedAr: BasicAccessRequirement,
        isDeletingTextInstructions: boolean,
      ) => {
        try {
          await updateAccessRequirement(updatedAr)
          setUpdatedAr(updatedAr)
          if (!isDeletingTextInstructions) {
            onSave()
          }
        } catch {
          if (!isDeletingTextInstructions) {
            onError()
          }
        }
      },
      [onSave, onError, updateAccessRequirement],
    )

    useImperativeHandle(
      ref,
      () => {
        return {
          save() {
            if (updatedAr) onUpdateAccessRequirement(updatedAr, false)
          },
        }
      },
      [updatedAr, onUpdateAccessRequirement],
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
        <AccessRequirementTextInstructions
          accessRequirement={updatedAr}
          allowDelete={allowDeleteTextInstructions}
          onConfirmDelete={updatedAr => {
            onUpdateAccessRequirement(updatedAr as BasicAccessRequirement, true)
          }}
        />
        <AccessRequirementWikiInstructions accessRequirement={updatedAr} />
        <AccessorRequirements
          accessRequirement={updatedAr}
          onChange={updatedAr =>
            setUpdatedAr(updatedAr as BasicAccessRequirement)
          }
        />
        {updateArError && (
          <Alert severity="error" sx={{ marginTop: 2 }}>
            {updateArError.reason}
          </Alert>
        )}
      </>
    )
  },
)
