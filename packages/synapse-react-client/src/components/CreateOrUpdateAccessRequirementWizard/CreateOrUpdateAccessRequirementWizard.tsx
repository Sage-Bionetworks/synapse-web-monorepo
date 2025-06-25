import { MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE } from '@sage-bionetworks/synapse-types'
import { MouseEventHandler, useMemo, useRef, useState } from 'react'
import {
  AccessRequirementAclEditor,
  AccessRequirementAclEditorHandle,
} from '../AccessRequirementAclEditor/AccessRequirementAclEditor'
import ConfirmationDialog from '../ConfirmationDialog'
import {
  SetAccessRequirementCommonFields,
  SetAccessRequirementCommonFieldsHandle,
  SetAccessRequirementCommonFieldsProps,
} from '../SetAccessRequirementCommonFields'
import SetBasicAccessRequirementFields, {
  SetBasicAccessRequirementFieldsHandle,
} from '../SetBasicAccessRequirementFields'
import SetManagedAccessRequirementFields, {
  SetManagedAccessRequirementFieldsHandle,
} from '../SetManagedAccessRequirementFields'
import {
  CreateOrUpdateAccessRequirementWizardStep,
  getDialogTitle,
  isLastStep,
} from './CreateOrUpdateAccessRequirementWizardUtils'

export type CreateOrUpdateAccessRequirementWizardProps = {
  open: boolean
  onCancel: () => void
  onComplete: (accessRequirementID?: string) => void // return the (possibly new) Access Requirement ID
} & Pick<
  SetAccessRequirementCommonFieldsProps,
  'subject' | 'accessRequirementId'
>

export function CreateOrUpdateAccessRequirementWizard(
  props: CreateOrUpdateAccessRequirementWizardProps,
) {
  const { open, onCancel, onComplete } = props

  const [step, setStep] = useState<CreateOrUpdateAccessRequirementWizardStep>(
    'SET_AR_COMMON_FIELDS',
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [accessRequirementId, setAccessRequirementId] = useState<
    string | undefined
  >(props.accessRequirementId)

  const setArCommonFieldsRef =
    useRef<SetAccessRequirementCommonFieldsHandle>(null)
  const setManagedArFieldsRef =
    useRef<SetManagedAccessRequirementFieldsHandle>(null)
  const editArAclRef = useRef<AccessRequirementAclEditorHandle>(null)
  const setBasicArFieldsRef =
    useRef<SetBasicAccessRequirementFieldsHandle>(null)

  const isEditing = Boolean(props['accessRequirementId'])

  const stepContent = useMemo(() => {
    switch (step) {
      case 'SET_AR_COMMON_FIELDS':
        return (
          <SetAccessRequirementCommonFields
            ref={setArCommonFieldsRef}
            onSave={(accessRequirementId, accessRequirementConcreteType) => {
              setAccessRequirementId(accessRequirementId)
              const nextStep: CreateOrUpdateAccessRequirementWizardStep =
                accessRequirementConcreteType ===
                MANAGED_ACT_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE
                  ? 'SET_MANAGED_AR_FIELDS'
                  : 'SET_BASIC_AR_FIELDS'
              setStep(nextStep)
              setIsLoading(false)
            }}
            onError={() => setIsLoading(false)}
            subject={props.subject}
            accessRequirementId={props.accessRequirementId}
          />
        )
      case 'SET_MANAGED_AR_FIELDS':
        return (
          <SetManagedAccessRequirementFields
            ref={setManagedArFieldsRef}
            accessRequirementId={accessRequirementId!}
            onSave={() => {
              setStep('SET_MANAGED_AR_ACL_PERMISSIONS')
              setIsLoading(false)
            }}
            onError={() => {
              setIsLoading(false)
            }}
          />
        )
      case 'SET_MANAGED_AR_ACL_PERMISSIONS':
        return (
          <AccessRequirementAclEditor
            ref={editArAclRef}
            accessRequirementId={accessRequirementId!}
            onSaveComplete={saveSuccessful => {
              if (saveSuccessful) {
                onComplete(accessRequirementId)
              }
              setIsLoading(false)
            }}
          />
        )
      case 'SET_BASIC_AR_FIELDS':
        return (
          <SetBasicAccessRequirementFields
            ref={setBasicArFieldsRef}
            accessRequirementId={accessRequirementId!}
            onSave={() => {
              onComplete(accessRequirementId)
              setIsLoading(false)
            }}
            onError={() => setIsLoading(false)}
          />
        )
    }
  }, [
    step,
    props.subject,
    props.accessRequirementId,
    accessRequirementId,
    onComplete,
  ])

  const onClickPrimary: MouseEventHandler<HTMLButtonElement> = e => {
    // SWC-7055 - The default action may trigger `beforeunload` and erroneously warn the user about leaving the page.
    e.preventDefault()
    setIsLoading(true)
    switch (step) {
      case 'SET_AR_COMMON_FIELDS':
        setArCommonFieldsRef?.current?.save()
        return
      case 'SET_MANAGED_AR_FIELDS':
        setManagedArFieldsRef?.current?.save()
        return
      case 'SET_MANAGED_AR_ACL_PERMISSIONS':
        editArAclRef?.current?.save()
        return
      case 'SET_BASIC_AR_FIELDS':
        setBasicArFieldsRef?.current?.save()
    }
  }

  return (
    <ConfirmationDialog
      open={open}
      onCancel={onCancel}
      onConfirm={onClickPrimary}
      confirmButtonProps={{
        children: isLastStep(step) ? 'Save' : 'Save & Continue',
        disabled: isLoading,
      }}
      maxWidth={'md'}
      title={getDialogTitle(step, isEditing)}
      content={stepContent}
    />
  )
}

export default CreateOrUpdateAccessRequirementWizard
