import { challengeDetailsPageTabConfig } from '@/config/challengeDetailsPageTabConfig'
import { challengeProjectsSql } from '@/config/resources'
import { challengeCardConfiguration } from '@/config/synapseConfig/challenges'
import ChallengeDetailPageWrapper from '@sage-bionetworks/synapse-portal-framework/components/challenges/ChallengeDetailPageWrapper'
import { DetailsPageTabs } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { Outlet } from 'react-router'
import {
  CardContainerLogic,
  ErrorPage,
  SynapseErrorType,
} from 'synapse-react-client'

function ChallengeDetailsPage() {
  const { id } = useGetPortalComponentSearchParams()

  if (!id) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }
  return (
    <DetailsPage
      header={
        <>
          <div className={'challengeDetailPageHeaderCard'}>
            <CardContainerLogic
              cardConfiguration={{
                ...challengeCardConfiguration,
                isHeader: true,
              }}
              sql={challengeProjectsSql}
              searchParams={{ id }}
            />
          </div>
          {/*Register For Challenge component is here, and the wrapper positions it properly in the header card*/}
          <ChallengeDetailPageWrapper />
        </>
      }
      sql={challengeProjectsSql}
      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
      resourcePrimaryKey={['id']}
    >
      <DetailsPageTabs tabConfig={challengeDetailsPageTabConfig} />
      <Outlet />
    </DetailsPage>
  )
}

export default ChallengeDetailsPage
