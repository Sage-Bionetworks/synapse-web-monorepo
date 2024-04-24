export type CreateOrUpdateAccessRequirementWizardStep =
  | 'SET_AR_COMMON_FIELDS'
  | 'SET_MANAGED_AR_FIELDS'
  | 'SET_MANAGED_AR_ACL_PERMISSIONS'
  | 'SET_BASIC_AR_FIELDS'

export function getDialogTitle(
  step: CreateOrUpdateAccessRequirementWizardStep,
  isEditing: boolean,
): string {
  switch (step) {
    case 'SET_AR_COMMON_FIELDS':
    case 'SET_MANAGED_AR_FIELDS':
    case 'SET_BASIC_AR_FIELDS':
      return `${isEditing ? 'Edit' : 'Create'} Access Requirement`
    case 'SET_MANAGED_AR_ACL_PERMISSIONS':
      return 'Access Requirement Permissions'
  }
}

export function isLastStep(
  step: CreateOrUpdateAccessRequirementWizardStep,
): boolean {
  switch (step) {
    case 'SET_MANAGED_AR_ACL_PERMISSIONS':
    case 'SET_BASIC_AR_FIELDS':
      return true
  }
  return false
}
