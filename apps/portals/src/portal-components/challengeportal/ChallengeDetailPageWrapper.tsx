import React from 'react'
import { Link, Box, Skeleton } from '@mui/material'
import {
  AppUtils,
  ChallengeDetailPage,
  SynapseQueries,
  SynapseUtilityFunctions,
} from 'synapse-react-client'

/**
 * This is the Challenge Registration button.  This includes:
 * - Agree to terms
 * - Join Challenge registration/participant team
 * - Create/join a submission team
 * @returns
 */
const ChallengeDetailPageWrapper = () => {
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
  const { data: teamMembers, isLoading: isTeamMembersLoading } =
    SynapseQueries.useGetTeamMembers(challenge?.participantTeamId ?? '', {
      enabled: !!challenge,
    })
  if (isEntityBundleLoading || isChallengeLoading || isTeamMembersLoading) {
    return <Skeleton height="60px" width="400px" />
  }
  const isChallengeActive =
    entityBundle?.annotations.annotations['Status']?.value[0] == 'Active'
  const memberCount = teamMembers?.totalNumberOfResults
  if (projectId !== undefined) {
    return (
      // mimic card container layout to align with card fields
      <div className="container-fluid container-full-width">
        <div className="row">
          <div className="col-md-offset-1 col-md-10">
            <Box sx={{ display: 'flex', marginLeft: '15px' }}>
              <Box sx={{ width: '25%', maxWidth: '215px' }} />
              <Box sx={{ width: '100%' }}>
                <Box
                  sx={{
                    position: 'relative',
                    marginTop: '-150px',
                    paddingLeft: '47px',
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
                      )}#!Team:${challenge?.participantTeamId}`}
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
          </div>
        </div>
      </div>
    )
  } else return <></>
}

export default ChallengeDetailPageWrapper
