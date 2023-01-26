import * as React from 'react'
import { useEffect, useState } from 'react'
import {
  SelfSignAccessRequirement,
  WikiPageKey,
  UserBundle,
} from '../../utils/synapseTypes'
import { SynapseClient, SynapseConstants } from '../../utils'
import AccessApprovalCheckMark from './AccessApprovalCheckMark'
import AcceptedRequirements from './AcceptedRequirements'
import { AccessRequirementProps } from './AccessRequirementProps'
import { useSynapseContext } from '../../utils/SynapseContext'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'

export default function SelfSignAccessRequirementComponent({
  accessRequirement,
  user,
  onHide,
  accessRequirementStatus,
  entityId,
}: AccessRequirementProps<SelfSignAccessRequirement>) {
  const { accessToken } = useSynapseContext()
  const [wikiPage, setWikiPage] = useState<WikiPageKey | undefined>(undefined)
  const [userBundle, setUserBundle] = useState<UserBundle | undefined>(
    undefined,
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    const getSelfSignAccessData = async () => {
      try {
        setIsLoading(true)
        const wikiPageRequirment =
          await SynapseClient.getWikiPageKeyForAccessRequirement(
            accessToken,
            accessRequirement.id,
          )

        setWikiPage(wikiPageRequirment)

        const certificationOrVerification =
          SynapseConstants.USER_BUNDLE_MASK_IS_CERTIFIED |
          SynapseConstants.USER_BUNDLE_MASK_IS_VERIFIED

        if (user?.ownerId) {
          const bundle = await SynapseClient.getUserBundle(
            user.ownerId,
            certificationOrVerification,
            accessToken,
          )
          setUserBundle(bundle)
        }
      } catch (err) {
        console.error('Error on get Self Sign Access Requirement: ', err)
      } finally {
        setIsLoading(false)
      }
    }

    getSelfSignAccessData()
  }, [accessRequirement, accessToken, user])

  return (
    <>
      {accessRequirement.isCertifiedUserRequired && (
        <div className="requirement-container">
          <AccessApprovalCheckMark isCompleted={userBundle?.isCertified} />
          <div>
            <p className="self-sign-access-title bold-text">
              You must first become a
              <a
                className="self-sign-access-certified bold-text"
                href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Quiz:`}
              >
                &nbsp;certified user
              </a>
            </p>
            {isLoading && <span className="spinner" />}

            <p
              className={`self-sign-access-certified-success-text ${
                userBundle?.isCertified ? 'show' : 'hidden'
              }`}
            >
              You are a certified user
            </p>
          </div>
        </div>
      )}
      {accessRequirement.isValidatedProfileRequired && (
        <div className="requirement-container">
          <AccessApprovalCheckMark isCompleted={userBundle?.isVerified} />
          <div>
            <p className="self-sign-access-title bold-text">
              You must first apply to have your
              <a
                className="self-sign-access-validated bold-text"
                href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Profile:v/settings`}
              >
                &nbsp;user profile validated
              </a>
            </p>
            {isLoading && <span className="spinner" />}

            <p
              className={`self-sign-access-verified-success-text ${
                userBundle?.isVerified ? 'show' : 'hidden'
              }`}
            >
              You have applied to have user profile valiadation successfully
            </p>
          </div>
        </div>
      )}
      <AcceptedRequirements
        user={user}
        wikiPage={wikiPage}
        accessRequirement={accessRequirement}
        accessRequirementStatus={accessRequirementStatus}
        onHide={onHide}
        entityId={entityId}
      />
    </>
  )
}
