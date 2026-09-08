import React from 'react'
import { Link, Box, Skeleton, Container } from '@mui/material'
import * as AppUtils from 'synapse-react-client/utils/AppUtils/index'
import { ChallengeDetailPage } from 'synapse-react-client/components/ChallengeDetailPage/ChallengeDetailPage'
import * as SynapseQueries from 'synapse-react-client/synapse-queries/index'
import * as SynapseUtilityFunctions from 'synapse-react-client/utils/functions/index'

/**
 * This is the Challenge Registration button.  This includes:
 * - Agree to terms
 * - Join Challenge registration/participant team
 * - Create/join a submission team
 * @returns
 */
const ChallengeDetailPageWrapper = (): React.ReactNode => {
  const projectId = AppUtils.useQuerySearchParam('id')
  const { data: entityBundle, isLoading: isEntityBundleLoading } =
    SynapseQueries.useGetEntityBundle(
      projectId ?? '', //fallback for type safety, but should only be enabled when projectId is set
      undefined,
      {
        includeAnnotations: true,
      },
      {
        enabled: !!projectId,
      },
    )
  const { data: challenge, isLoading: isChallengeLoading } =
    SynapseQueries.useGetEntityChallenge(
      projectId ?? '', //fallback for type safety, but should only be enabled when projectId is set
      {
        enabled: !!projectId,
      },
    )

  const { data: teamMemberCount, isLoading: isTeamMemberCountLoading } =
    SynapseQueries.useGetTeamMemberCount(challenge?.participantTeamId ?? '', {
      enabled: !!challenge,
    })
  if (isEntityBundleLoading || isChallengeLoading || isTeamMemberCountLoading) {
    return <Skeleton height="60px" width="400px" />
  }
  const isChallengeActive =
    entityBundle?.annotations.annotations['Status']?.value[0] == 'Active'
  const memberCount = teamMemberCount?.count
  if (projectId !== undefined) {
    return (
      // mimic card container layout to align with card fields
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ width: '100%' }}>
            <Box
              sx={{
                position: 'relative',
                marginTop: '-130px',
                zIndex: 100,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  columnGap: '20px',
                }}
              >
                {isChallengeActive && (
                  <ChallengeDetailPage projectId={projectId} />
                )}
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href={`${SynapseUtilityFunctions.getEndpoint(
                    SynapseUtilityFunctions.BackendDestinationEnum
                      .PORTAL_ENDPOINT,
                  )}Team:${challenge?.participantTeamId}`}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      color: 'white',
                      textDecorationColor: 'white',
                    },
                    '&:focus': { color: 'white' },
                    textDecorationColor: 'white',
                  }}
                >
                  {memberCount} Registered Participants
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    )
  } else return <></>
}

export default ChallengeDetailPageWrapper
