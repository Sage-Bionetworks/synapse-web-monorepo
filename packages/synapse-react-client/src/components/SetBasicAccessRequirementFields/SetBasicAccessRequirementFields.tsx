import { Alert } from '@mui/material'
import {
  AccessRequirement,
  ManagedACTAccessRequirement,
} from '@sage-bionetworks/synapse-types'
import React, { useImperativeHandle, useState } from 'react'
import { useUpdateAccessRequirement } from '../../synapse-queries'
import { AccessRequirementTextInstructions } from './AccessRequirementTextInstructions'
import { AccessorRequirements } from './AccessorRequirements'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
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
  accessRequirement: BasicAccessRequirement
  onSaveComplete: (
    /* null when an error has been returned */
    updatedAr: BasicAccessRequirement | null,
  ) => void
}

export const SetBasicAccessRequirementFields = React.forwardRef(
  function SetBasicAccessRequirementFields(
    props: SetBasicAccessRequirementFieldsProps,
    ref: React.ForwardedRef<SetBasicAccessRequirementFieldsHandle>,
  ) {
    const { accessRequirement, onSaveComplete } = props
    const [updatedAr, setUpdatedAr] =
      useState<BasicAccessRequirement>(accessRequirement)

    const [isDeletingTextInstructions, setIsDeletingTextInstructions] =
      useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const { mutate: updateAccessRequirement } =
      useUpdateAccessRequirement<BasicAccessRequirement>({
        onSuccess: updatedAr => {
          setError(null)
          if (isDeletingTextInstructions) {
            setUpdatedAr(updatedAr)
            setIsDeletingTextInstructions(false)
          } else {
            onSaveComplete(updatedAr)
          }
        },
        onError: error => {
          setError(error.reason)
          setIsDeletingTextInstructions(false)
          onSaveComplete(null)
        },
      })

    useImperativeHandle(
      ref,
      () => {
        return {
          save() {
            updateAccessRequirement(updatedAr)
          },
        }
      },
      [updatedAr, updateAccessRequirement],
    )

    return (
      <>
        {isDeletingTextInstructions ? (
          <SynapseSpinner />
        ) : (
          <AccessRequirementTextInstructions
            accessRequirement={updatedAr}
            onConfirmDelete={updatedAr => {
              setError(null)
              setIsDeletingTextInstructions(true)
              updateAccessRequirement(updatedAr as BasicAccessRequirement)
            }}
          />
        )}
        <AccessRequirementWikiInstructions accessRequirement={updatedAr} />
        <AccessorRequirements
          accessRequirement={updatedAr}
          onChange={updatedAr =>
            setUpdatedAr(updatedAr as BasicAccessRequirement)
          }
        />
        {error && (
          <Alert severity="error" sx={{ marginTop: 2 }}>
            {error}
          </Alert>
        )}
      </>
    )
  },
)
