import { DataAccessRequestType } from '@sage-bionetworks/synapse-client'
import {
  AccessorChange,
  Renewal,
  Request,
} from '@sage-bionetworks/synapse-types'
import { ensureCurrentUserIsAccessor } from '../ManagedACTAccessRequirementRequestFlow/useInitializeRequestAccessors'
import {
  getSchemaDataFileHandleIds,
  SchemaData,
  withSubmissionContext,
} from '@/utils/jsonschema/schemaData'
import { RJSFSchema } from '@rjsf/utils'

/**
 * The answers to the questions that the server itself consumes (eDUC signing and the accessor lifecycle). These are
 * always asked, ahead of the schema-driven questions.
 */
export type RequesterInformationValues = {
  accessorChanges: AccessorChange[]
  institution: string
  piName: string
  piUserId: string | null
  piEmail: string
  signingOfficialName: string
  signingOfficialEmail: string
}

/**
 * Whether the requester information is complete enough to continue. Institution, PI, and signing official are only
 * required to sign an eDUC.
 */
export function isRequesterInformationComplete(
  values: RequesterInformationValues,
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

export function getRequestType(
  request: Request | Renewal,
): DataAccessRequestType {
  return isRenewalRequest(request)
    ? DataAccessRequestType.RENEWAL
    : DataAccessRequestType.REQUEST
}

export function isRenewalRequest(
  request: Request | Renewal,
): request is Renewal {
  return (
    request.concreteType === 'org.sagebionetworks.repo.model.dataaccess.Renewal'
  )
}

/**
 * The requester information to show for a saved request. The current user is always listed as an accessor.
 */
export function toRequesterInformationValues(
  request: Request | Renewal,
  currentUserId: string,
): RequesterInformationValues {
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
 *
 * `attachments` always lists exactly the file handles that the saved `schemaData` answers reference, replacing any
 * earlier list: Synapse does not find file handles inside `schemaData`. The DUC is not an attachment. Answers that
 * apply only to the other request type are not saved (see `withSubmissionContext`), so they list no attachment.
 */
export function buildRequest(
  request: Request | Renewal,
  values: RequesterInformationValues,
  schemaData: SchemaData,
  schema: RJSFSchema,
  isEDucEnabled: boolean,
): Request | Renewal {
  const submittedSchemaData = withSubmissionContext(
    schema,
    schemaData,
    getRequestType(request),
  )
  return {
    ...request,
    accessorChanges: values.accessorChanges,
    schemaData: submittedSchemaData,
    attachments: getSchemaDataFileHandleIds(schema, submittedSchemaData),
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
