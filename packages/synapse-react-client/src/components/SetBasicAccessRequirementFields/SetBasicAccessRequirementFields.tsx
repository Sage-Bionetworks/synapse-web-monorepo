import { Alert } from '@mui/material'
import {
  AccessRequirement,
  ManagedACTAccessRequirement,
} from '@sage-bionetworks/synapse-types'
import React, { useEffect, useImperativeHandle, useState } from 'react'
import {
  useGetAccessRequirements,
  useUpdateAccessRequirement,
} from '../../synapse-queries'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { AccessRequirementTextInstructions } from './AccessRequirementTextInstructions'
import { AccessRequirementWikiInstructions } from './AccessRequirementWikiInstructions'
import { AccessorRequirements } from './AccessorRequirements'

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
}

export const SetBasicAccessRequirementFields = React.forwardRef(
  function SetBasicAccessRequirementFields(
    props: SetBasicAccessRequirementFieldsProps,
    ref: React.ForwardedRef<SetBasicAccessRequirementFieldsHandle>,
  ) {
    const { accessRequirementId, onSave, onError } = props
    const [updatedAr, setUpdatedAr] = useState<BasicAccessRequirement | null>(
      null,
    )
    const [isDeletingTextInstructions, setIsDeletingTextInstructions] =
      useState<boolean>(false)

    const { data: accessRequirement, error: getArError } =
      useGetAccessRequirements<BasicAccessRequirement>(accessRequirementId, {
        staleTime: Infinity,
      })
    useEffect(() => {
      if (accessRequirement) {
        setUpdatedAr(accessRequirement)
      }
    }, [accessRequirement])

    const { mutate: updateAccessRequirement, error: updateArError } =
      useUpdateAccessRequirement<BasicAccessRequirement>({
        onSuccess: updatedAr => {
          if (isDeletingTextInstructions) {
            setUpdatedAr(updatedAr)
            setIsDeletingTextInstructions(false)
          } else {
            onSave()
          }
        },
        onError: () => {
          setIsDeletingTextInstructions(false)
          onError()
        },
      })

    useImperativeHandle(
      ref,
      () => {
        return {
          save() {
            if (updatedAr) updateAccessRequirement(updatedAr)
          },
        }
      },
      [updatedAr, updateAccessRequirement],
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
        {isDeletingTextInstructions ? (
          <SynapseSpinner />
        ) : (
          <AccessRequirementTextInstructions
            accessRequirement={updatedAr}
            onConfirmDelete={updatedAr => {
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
        {updateArError && (
          <Alert severity="error" sx={{ marginTop: 2 }}>
            {updateArError.reason}
          </Alert>
        )}
      </>
    )
  },
)
