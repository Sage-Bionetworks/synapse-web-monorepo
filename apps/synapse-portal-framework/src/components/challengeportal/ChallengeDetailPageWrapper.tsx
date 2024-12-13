import { Box, Link, Skeleton } from '@mui/material'
import { ChallengeDetailPage } from 'synapse-react-client/components/ChallengeDetailPage/index'
import useGetEntityBundle from 'synapse-react-client/synapse-queries/entity/useEntityBundle'
import { useGetEntityChallenge } from 'synapse-react-client/synapse-queries/entity/useGetEntityChallenge'
import { useGetTeamMemberCount } from 'synapse-react-client/synapse-queries/team/useTeamMembers'
import {
  BackendDestinationEnum,
  getEndpoint,
} from 'synapse-react-client/utils/functions/getEndpoint'
import { useQuerySearchParam } from 'synapse-react-client/utils/hooks/useQuerySearchParam'

/**
 * This is the Challenge Registration button.  This includes:
 * - Agree to terms
 * - Join Challenge registration/participant team
 * - Create/join a submission team
 * @returns
 */
const ChallengeDetailPageWrapper = () => {
  const projectId = useQuerySearchParam('id')
  const { data: entityBundle, isLoading: isEntityBundleLoading } =
    useGetEntityBundle(
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
    useGetEntityChallenge(
      projectId ?? '', //fallback for type safety, but should only be enabled when projectId is set
      {
        enabled: !!projectId,
      },
    )

  const { data: teamMemberCount, isLoading: isTeamMemberCountLoading } =
    useGetTeamMemberCount(challenge?.participantTeamId ?? '', {
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
                      href={`${getEndpoint(
                        BackendDestinationEnum.PORTAL_ENDPOINT,
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
          </div>
        </div>
      </div>
    )
  } else return <></>
}

export default ChallengeDetailPageWrapper
