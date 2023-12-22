import {
  CloudProviderFileHandleInterface,
  COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER_CONCRETE_TYPE_VALUE,
  COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
  ColumnMultiValueFunctionQueryFilter,
  ColumnSingleValueQueryFilter,
  DOCKER_REPOSITORY_CONCRETE_TYPE_VALUE,
  DockerRepository,
  EXTERNAL_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  ExternalFileHandle,
  ExternalFileHandleInterface,
  FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
  FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE,
  FacetColumnRangeRequest,
  FacetColumnValuesRequest,
  FILE_ENTITY_CONCRETE_TYPE_VALUE,
  FileEntity,
  GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  INVITEE_VERIFICATION_CONCRETE_TYPE_VALUE,
  InviteeVerificationSignedToken,
  JOIN_TEAM_CONCRETE_TYPE_VALUE,
  JoinTeamSignedToken,
  Link,
  LINK_CONCRETE_TYPE_VALUE,
  MEMBERSHIP_INVITATION_CONCRETE_TYPE_VALUE,
  MembershipInvtnSignedToken,
  PROXY_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  S3_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  S3FileHandle,
  TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  TermsOfUseAccessRequirement,
  TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE_VALUE,
  TextMatchesQueryFilter,
} from '@sage-bionetworks/synapse-types'

/**
 * TypeScript doesn't support nominal typing, but we can utilize the concreteType field in Synapse objects to identify the class of an object. This function
 * will return a function that can be used as a type guard using the concreteType field.
 *
 * Generic `TTypeChecked` is the type that you are trying to verify/assert.
 * Generic `ObjectType` is optional and can be used to require a specific interface or type before calling this method. Defaults to `unknown`.
 *
 * @param expectedConcreteTypes
 * @returns a function that checks if a given object is an instance of `TTypeChecked` using the expected concrete type value.
 */
export function isTypeViaConcreteTypeFactory<
  TTypeChecked extends ObjectType, // The type that you are trying to verify/assert
  ObjectType extends { concreteType: string } = { concreteType: string },
>(...expectedConcreteTypes: TTypeChecked['concreteType'][]) {
  return (object: ObjectType): object is TTypeChecked =>
    !!(
      object &&
      typeof object === 'object' &&
      'concreteType' in object &&
      expectedConcreteTypes.includes(object['concreteType'])
    )
}

export const implementsCloudProviderFileHandleInterface =
  isTypeViaConcreteTypeFactory<CloudProviderFileHandleInterface>(
    S3_FILE_HANDLE_CONCRETE_TYPE_VALUE,
    GOOGLE_CLOUD_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  )
export const isExternalFileHandle =
  isTypeViaConcreteTypeFactory<ExternalFileHandle>(
    EXTERNAL_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  )
export const isLink = isTypeViaConcreteTypeFactory<Link>(
  LINK_CONCRETE_TYPE_VALUE,
)
export const implementsExternalFileHandleInterface =
  isTypeViaConcreteTypeFactory<ExternalFileHandleInterface>(
    PROXY_FILE_HANDLE_CONCRETE_TYPE_VALUE,
    EXTERNAL_OBJECT_STORE_FILE_HANDLE_CONCRETE_TYPE_VALUE,
    EXTERNAL_FILE_HANDLE_CONCRETE_TYPE_VALUE,
  )
export const isDockerRepository =
  isTypeViaConcreteTypeFactory<DockerRepository>(
    DOCKER_REPOSITORY_CONCRETE_TYPE_VALUE,
  )
export const isFacetColumnValuesRequest =
  isTypeViaConcreteTypeFactory<FacetColumnValuesRequest>(
    FACET_COLUMN_VALUES_REQUEST_CONCRETE_TYPE_VALUE,
  )
export const isFacetColumnRangeRequest =
  isTypeViaConcreteTypeFactory<FacetColumnRangeRequest>(
    FACET_COLUMN_RANGE_REQUEST_CONCRETE_TYPE_VALUE,
  )
export const isTextMatchesQueryFilter =
  isTypeViaConcreteTypeFactory<TextMatchesQueryFilter>(
    TEXT_MATCHES_QUERY_FILTER_CONCRETE_TYPE_VALUE,
  )
export const isColumnSingleValueQueryFilter =
  isTypeViaConcreteTypeFactory<ColumnSingleValueQueryFilter>(
    COLUMN_SINGLE_VALUE_QUERY_FILTER_CONCRETE_TYPE_VALUE,
  )
export const isColumnMultiValueFunctionQueryFilter =
  isTypeViaConcreteTypeFactory<ColumnMultiValueFunctionQueryFilter>(
    COLUMN_MULTI_VALUE_FUNCTION_QUERY_FILTER_CONCRETE_TYPE_VALUE,
  )
export const isS3FileHandle = isTypeViaConcreteTypeFactory<S3FileHandle>(
  S3_FILE_HANDLE_CONCRETE_TYPE_VALUE,
)
export const isFileEntity = isTypeViaConcreteTypeFactory<FileEntity>(
  FILE_ENTITY_CONCRETE_TYPE_VALUE,
)
export const isTermsOfUseAccessRequirement =
  isTypeViaConcreteTypeFactory<TermsOfUseAccessRequirement>(
    TERMS_OF_USE_ACCESS_REQUIREMENT_CONCRETE_TYPE_VALUE,
  )
export const isInviteeVerificationSignedToken =
  isTypeViaConcreteTypeFactory<InviteeVerificationSignedToken>(
    INVITEE_VERIFICATION_CONCRETE_TYPE_VALUE,
  )
export const isJoinTeamSignedToken =
  isTypeViaConcreteTypeFactory<JoinTeamSignedToken>(
    JOIN_TEAM_CONCRETE_TYPE_VALUE,
  )
export const isMembershipInvtnSignedToken =
  isTypeViaConcreteTypeFactory<MembershipInvtnSignedToken>(
    MEMBERSHIP_INVITATION_CONCRETE_TYPE_VALUE,
  )
