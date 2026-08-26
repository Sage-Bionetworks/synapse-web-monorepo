import { getAccessRequirementStatus } from '@/synapse-client/SynapseClient'
import { useGetDataAccessRequestForUpdate } from '@/synapse-queries'
import { useMediaQuery, useTheme } from '@mui/material'
import { ManagedACTAccessRequirement } from '@sage-bionetworks/synapse-types'
import { sortBy } from 'lodash-es'
import { useRef } from 'react'

/**
 * Given an array of access requirement IDs, return the IDs sorted by the user's status, where
 * completed access requirements are shown first.
 * @param accessToken
 * @param requirementIds
 */
export const sortAccessRequirementsByCompletion = async (
  accessToken: string | undefined,
  requirementIds: string[],
): Promise<string[]> => {
  const statuses = requirementIds.map(id => {
    return getAccessRequirementStatus(accessToken, id)
  })
  const accessRequirementStatuses = await Promise.all(statuses)

  return sortBy(requirementIds, id => {
    // if its true then it should come first, which means that it should be higher in the list
    // which is sorted ascendingly
    return (
      -1 *
      Number(
        accessRequirementStatuses.find(
          status => id === status.accessRequirementId,
        )!.isApproved,
      )
    )
  })
}

/**
 * Determines if we can show ManagedACTAccessRequirement wiki content alongside the forms using a media query.
 * See SWC-6432.
 */
export function useCanShowManagedACTWikiInWizard(): boolean {
  const theme = useTheme()
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.up('md'))
  return matchesBreakpoint
}

/**
 * PORTALS-4382: when the ManagedACT wizard is opened for an eDUC-enabled AR that already has a
 * DocuSign envelope routed, resume at the signature-status step instead of restarting at the
 * research project step.
 *
 * The redirect fires exactly once per wizard session so a user who navigates back to the research
 * project step later is not kicked forward again. Uses the render-time state-adjustment pattern
 * (https://react.dev/reference/react/useState#storing-information-from-previous-renders) so React
 * bails out of the current render and re-renders synchronously without a flash of the wrong step.
 */
export function useAutoResumeSignatureStatusStep<TStep extends number>(params: {
  managedACTAccessRequirement: ManagedACTAccessRequirement | undefined
  requestDataStep: TStep
  researchProjectStep: TStep
  signatureStatusStep: TStep
  setRequestDataStep: (step: TStep) => void
}) {
  const {
    managedACTAccessRequirement,
    requestDataStep,
    researchProjectStep,
    signatureStatusStep,
    setRequestDataStep,
  } = params
  const hasAutoResumedRef = useRef(false)

  const arId = managedACTAccessRequirement?.id
  const isEDucEnabled = Boolean(managedACTAccessRequirement?.eDucTemplateId)
  const { data: existingDar } = useGetDataAccessRequestForUpdate(
    String(arId ?? ''),
    { enabled: isEDucEnabled && Boolean(arId), staleTime: Infinity },
  )

  if (
    !hasAutoResumedRef.current &&
    requestDataStep === researchProjectStep &&
    existingDar?.eDucSignatureEnvelopeId
  ) {
    hasAutoResumedRef.current = true
    setRequestDataStep(signatureStatusStep)
  }
}
