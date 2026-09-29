import { AccessorChange } from '@sage-bionetworks/synapse-types'

/**
 * The answers to the questions that the server itself consumes (eDUC signing and the accessor lifecycle). These are
 * always asked, ahead of the schema-driven questions.
 */
export type FirstClassFieldValues = {
  accessorChanges: AccessorChange[]
  institution: string
  piName: string
  piUserId: string | null
  piEmail: string
  signingOfficialName: string
  signingOfficialEmail: string
}

/**
 * Whether the first-class fields are complete enough to continue. Institution, PI, and signing official are only
 * required to sign an eDUC.
 */
export function areFirstClassFieldsComplete(
  values: FirstClassFieldValues,
  isEDucEnabled: boolean,
): boolean {
  if (!isEDucEnabled) {
    return true
  }
  return Boolean(
    values.institution &&
    values.piName &&
    values.piUserId &&
    values.piEmail &&
    values.signingOfficialName &&
    values.signingOfficialEmail,
  )
}
