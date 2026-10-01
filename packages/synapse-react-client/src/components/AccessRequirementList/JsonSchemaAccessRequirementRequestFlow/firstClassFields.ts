import {
  AccessorChange,
  Renewal,
  Request,
} from '@sage-bionetworks/synapse-types'
import { ensureCurrentUserIsAccessor } from '../ManagedACTAccessRequirementRequestFlow/useInitializeRequestAccessors'
import { SchemaData, withSubmissionContext } from './schemaData'

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

export function isRenewalRequest(
  request: Request | Renewal,
): request is Renewal {
  return (
    request.concreteType === 'org.sagebionetworks.repo.model.dataaccess.Renewal'
  )
}

/**
 * The first-class field values to show for a saved request. The current user is always listed as an accessor.
 */
export function toFirstClassFieldValues(
  request: Request | Renewal,
  currentUserId: string,
): FirstClassFieldValues {
  return {
    accessorChanges: ensureCurrentUserIsAccessor(
      request.accessorChanges,
      currentUserId,
      isRenewalRequest(request),
    ),
    institution: request.institution ?? '',
    piName: request.principalInvestigator?.name ?? '',
    piUserId: request.principalInvestigator?.userId ?? null,
    piEmail: request.principalInvestigator?.institutionalEmail ?? '',
    signingOfficialName: request.signingOfficial?.name ?? '',
    signingOfficialEmail: request.signingOfficial?.institutionalEmail ?? '',
  }
}

/**
 * The request to save for the answers given so far. Institution, PI, and signing official are only written when
 * the AR uses an eDUC; otherwise the request's existing values are kept.
 */
export function buildRequest(
  request: Request | Renewal,
  values: FirstClassFieldValues,
  schemaData: SchemaData,
  isEDucEnabled: boolean,
): Request | Renewal {
  return {
    ...request,
    accessorChanges: values.accessorChanges,
    schemaData: withSubmissionContext(schemaData, isRenewalRequest(request)),
    ...(isEDucEnabled
      ? {
          institution: values.institution,
          principalInvestigator: {
            ...request.principalInvestigator,
            name: values.piName || undefined,
            userId: values.piUserId ?? undefined,
            institutionalEmail: values.piEmail || undefined,
          },
          signingOfficial: {
            ...request.signingOfficial,
            name: values.signingOfficialName || undefined,
            institutionalEmail: values.signingOfficialEmail || undefined,
          },
        }
      : {}),
  } as Request | Renewal
}
