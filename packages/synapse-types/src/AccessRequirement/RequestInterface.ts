/**
 * This is the base interface that all Request implements.
 * http://rest-docs.synapse.org/rest/org/sagebionetworks/repo/model/dataaccess/RequestInterface.html
 */
import { AccessorChange } from './AccessorChange'

export interface PrincipalInvestigator {
  userId?: string
  name?: string
  title?: string
  institutionalEmail?: string
}

export interface SigningOfficial {
  name?: string
  title?: string
  institutionalEmail?: string
}

export interface RequestInterface {
  id: string
  accessRequirementId: string
  researchProjectId: string
  createdOn: string
  modifiedOn: string
  createdBy: string
  modifiedBy: string
  ducFileHandleId?: string
  irbFileHandleId: string
  attachments?: string[]
  accessorChanges: AccessorChange[]
  etag: string
  concreteType: string
  /* The institution of the collaborators. Used by the eDUC signing flow. */
  institution?: string
  /* Principal Investigator information. Used by the eDUC signing flow. */
  principalInvestigator?: PrincipalInvestigator
  /* Signing Official information. Used by the eDUC signing flow. */
  signingOfficial?: SigningOfficial
  /* DocuSign envelope ID for the routed eDUC. Set when the request has been sent for e-signature. */
  eDucSignatureEnvelopeId?: string
}

export interface Request extends RequestInterface {
  concreteType: 'org.sagebionetworks.repo.model.dataaccess.Request'
}

export interface Renewal extends RequestInterface {
  concreteType: 'org.sagebionetworks.repo.model.dataaccess.Renewal'
  publication?: string
  summaryOfUse?: string
}
