import { Box } from '@mui/material'
import * as React from 'react'
import {
  AppUtils,
  ChallengeDetailPage,
  SynapseQueries,
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
  const { data, isLoading } = SynapseQueries.useGetEntityBundle(
    projectId,
    undefined,
    {
      includeAnnotations: true,
    },
    {
      enabled: !!projectId,
    },
  )
  if (isLoading) {
    return <></>
  }
  if (
    !!projectId &&
    data?.annotations.annotations['Status'].value[0] == 'Active'
  ) {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-offset-1 col-md-10">
            <Box
              sx={{ position: 'absolute', marginTop: '-150px', zIndex: 100 }}
            >
              <ChallengeDetailPage projectId={projectId} />
            </Box>
          </div>
        </div>
      </div>
    )
  } else return <></>
}

export default ChallengeDetailPageWrapper
