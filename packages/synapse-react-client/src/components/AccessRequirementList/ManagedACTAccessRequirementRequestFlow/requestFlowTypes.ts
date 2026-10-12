import { ManagedACTAccessRequirement } from '@sage-bionetworks/synapse-types'
import { RequestableAccessRequirement } from '../RequestDataStep'

/**
 * The part of an access requirement that every data access request step needs. Satisfied by any access requirement
 * type that supports the data access request flow.
 */
export type RequestFlowAccessRequirement = Pick<
  RequestableAccessRequirement,
  'id' | 'concreteType'
> &
  Partial<Pick<ManagedACTAccessRequirement, 'eDucTemplateId'>>

/**
 * The part of an access requirement that determines how accessors are collected and which documents are requested.
 */
export type AccessorStepAccessRequirement = RequestFlowAccessRequirement &
  Partial<
    Pick<
      ManagedACTAccessRequirement,
      | 'isCertifiedUserRequired'
      | 'isValidatedProfileRequired'
      | 'isDUCRequired'
      | 'ducTemplateFileHandleId'
    >
  >
