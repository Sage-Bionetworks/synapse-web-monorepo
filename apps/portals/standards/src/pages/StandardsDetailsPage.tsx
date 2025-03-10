import {
  DetailsPageContent,
  DetailsPageContentType,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import {
  ErrorPage,
  GenericCardSchema,
  SynapseConstants,
  SynapseErrorType,
} from 'synapse-react-client'
import { dataSql } from '../config/resources'
import { CardContainerLogic } from 'synapse-react-client'

export const standardsCardSchema: GenericCardSchema = {
  type: SynapseConstants.GENERIC_CARD,
  title: 'Name',
  // subTitle: '',
  // description: '',
  secondaryLabels: ['Collections', 'Data_Topic', 'Organizations'],
}

export const standardDetailsPageContent: DetailsPageContentType = [
  {
    id: 'About The Standard',
    title: 'About The Standard',
    element: (
      <MarkdownSynapseFromColumnData columnName={'studyDescriptionLocation'} />
    ),
  },
  {
    id: 'Linked Training Resources',
    title: 'Linked Training Resources',
    element: (
      <DetailsPageContextConsumer columnName={'id'}>
        {({ value }) => (
          <>{value}</>
          // TODO:
          // <CardContainerLogic
          //   {...trainingResourcesCardContainerProps}
          //   searchParams={{ standardId: value! }}
          // />
        )}
      </DetailsPageContextConsumer>
    ),
  },
  {
    id: 'Related Standards',
    title: 'Related Standards',
    element: (
      <DetailsPageContextConsumer columnName={'id'}>
        {({ value }) => (
          <>{value}</>
          // TODO:
          // <CardContainerLogic
          //   {...standardCardContainerProps}
          //   searchParams={{ standardId: value! }}
          // />
        )}
      </DetailsPageContextConsumer>
    ),
  },
]

export default function StandardsDetailsPage() {
  const { Name } = useGetPortalComponentSearchParams()

  if (!Name) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }
  return (
    <>
      {/* TODO: header card */}
      <CardContainerLogic
        sql={dataSql}
        type={SynapseConstants.GENERIC_CARD}
        genericCardSchema={standardsCardSchema}
        secondaryLabelLimit={6}
        isHeader={true}
        searchParams={{ Name }}
      />

      <DetailsPage sql={dataSql}>
        <DetailsPageContent content={standardDetailsPageContent} />
      </DetailsPage>
    </>
  )
}
