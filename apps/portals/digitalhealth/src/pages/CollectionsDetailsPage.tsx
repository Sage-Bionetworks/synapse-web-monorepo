import {
  DetailsPageContent,
  DetailsPageContentType,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import {
  CardContainerLogic,
  ErrorPage,
  StandaloneQueryWrapper,
  SynapseErrorType,
} from 'synapse-react-client'
import columnAliases from '../config/columnAliases'
import { studySql } from '../config/resources'
import { dataDetailPageProps } from '../config/synapseConfigs/data'
import { publicationDetailPageProps } from '../config/synapseConfigs/publications'
import {
  studiesCardConfiguration,
  studiesRgbIndex,
  studySchema,
} from '../config/synapseConfigs/studies'
import { toolsDetailPageProps } from '../config/synapseConfigs/tools'

export const studyDetailsPageContent: DetailsPageContentType = [
  {
    id: 'Study Description',
    title: 'Study Description',
    element: (
      <MarkdownSynapseFromColumnData columnName={'studyDescriptionLocation'} />
    ),
  },
  {
    id: 'Data Access',
    title: 'Data Access',
    element: (
      <div className={'PORTALS-1365'}>
        <MarkdownSynapseFromColumnData
          columnName={'dataAccessInstructions'}
          isRawMarkdown
        />
      </div>
    ),
  },
  {
    id: 'Data Description',
    title: 'Data Description',
    element: (
      <MarkdownSynapseFromColumnData
        columnName={'studyDataDescriptionLocation'}
      />
    ),
  },
  {
    id: 'Data Files',
    title: 'Data Files',
    element: (
      <DetailsPageContextConsumer columnName={'id'}>
        {({ value }) => (
          <StandaloneQueryWrapper
            {...dataDetailPageProps}
            searchParams={{ projectId: value! }}
            hideQueryCount
          />
        )}
      </DetailsPageContextConsumer>
    ),
  },
  {
    id: 'Suggested Tools',
    title: 'Suggested Tools',
    element: (
      <DetailsPageContextConsumer columnName={'id'}>
        {({ value }) => (
          <CardContainerLogic
            {...toolsDetailPageProps}
            searchParams={{ suggestedStudies: value! }}
          />
        )}
      </DetailsPageContextConsumer>
    ),
  },
  {
    id: 'Publications',
    title: 'Publications',
    element: (
      <DetailsPageContextConsumer columnName={'id'}>
        {({ value }) => (
          <CardContainerLogic
            {...publicationDetailPageProps}
            searchParams={{ synID: value! }}
          />
        )}
      </DetailsPageContextConsumer>
    ),
  },
]

function CollectionsDetailsPage() {
  const { study } = useGetPortalComponentSearchParams()

  if (!study) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }
  return (
    <DetailsPage
      header={
        <CardContainerLogic
          isAlignToLeftNav
          cardConfiguration={{
            ...studiesCardConfiguration,
            genericCardSchema: {
              ...studySchema,
              title: 'study',
              link: 'id',
            },
            isHeader: true,
          }}
          rgbIndex={studiesRgbIndex}
          columnAliases={columnAliases}
          sql={studySql}
          searchParams={{ study }}
        />
      }
      resourcePrimaryKey={['study']}
      sql={studySql}
    >
      <DetailsPageContent content={studyDetailsPageContent} />
    </DetailsPage>
  )
}

export default CollectionsDetailsPage
