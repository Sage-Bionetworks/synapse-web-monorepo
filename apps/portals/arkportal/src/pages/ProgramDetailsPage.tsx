import {
  datasetCardConfiguration,
  datasetColumnAliases,
} from '@/config/synapseConfigs/datasets'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/index'
import columnAliases from '../config/columnAliases'
import { datasetsSql, programSql, projectsSql } from '../config/resources'
import {
  programsCardConfiguration,
  programSchema,
  programsRgbIndex,
} from '../config/synapseConfigs/programs'
import { projectsCardConfiguration } from '../config/synapseConfigs/projects'
import { portalMetadata } from '@/config/portalMetadata'
import { createDetailPageRouteExports } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { metadataConfig } from './ProgramDetailsPage.config'
import { ErrorPage, SynapseErrorType } from 'synapse-react-client'
import { useParams } from 'react-router'

export { metadataConfig }

const _routeExports = createDetailPageRouteExports(
  metadataConfig,
  portalMetadata,
)

export const loader = _routeExports.loader
export const clientLoader = _routeExports.clientLoader
export const meta = _routeExports.meta

function ProgramsDetailPage() {
  const { Program } = useParams<{ Program: string }>()

  if (!Program) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      header={
        <CardContainerLogic
          isAlignToLeftNav={true}
          cardConfiguration={{
            ...programsCardConfiguration,
            genericCardSchema: {
              ...programSchema,
              title: 'Program',
              link: 'Program',
            },
            isHeader: true,
          }}
          rgbIndex={programsRgbIndex}
          columnAliases={columnAliases}
          sql={programSql}
          searchParams={{ Program }}
        />
      }
      sql={programSql}
      resourcePrimaryKey={['Program']}
      searchParams={{ Program }}
      disableCanonicalUrl
    >
      <DetailsPageContent
        content={[
          {
            title: 'Projects',
            id: 'Projects',
            element: (
              <DetailsPageContextConsumer columnName={'Program'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={projectsCardConfiguration}
                    sql={projectsSql}
                    searchParams={{ Program: value! }}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
          {
            title: 'Datasets',
            id: 'Datasets',
            element: (
              <DetailsPageContextConsumer columnName={'Program'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={{
                      ...datasetCardConfiguration,
                      secondaryLabelLimit: 4,
                    }}
                    sql={datasetsSql}
                    searchParams={{ program: value! }}
                    columnAliases={datasetColumnAliases}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
        ]}
      />
    </DetailsPage>
  )
}

export default ProgramsDetailPage
