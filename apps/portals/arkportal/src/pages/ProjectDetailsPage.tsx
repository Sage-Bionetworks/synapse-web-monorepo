import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import {
  ColumnSingleValueFilterOperator,
  ColumnMultiValueFunction,
} from '@sage-bionetworks/synapse-types'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/index'
import columnAliases from '../config/columnAliases'
import { datasetsSql, projectsSql } from '../config/resources'
import {
  datasetCardConfiguration,
  datasetColumnAliases,
} from '../config/synapseConfigs/datasets'
import {
  projectsCardConfiguration,
  projectSchema,
  projectsRgbIndex,
} from '../config/synapseConfigs/projects'
import { portalMetadata } from '@/config/portalMetadata'
import { createDetailPageRouteExports } from '@sage-bionetworks/synapse-portal-framework/utils/detailPageRouteUtils'
import { useParams } from 'react-router'
import { ErrorPage, SynapseErrorType } from 'synapse-react-client'
import { metadataConfig } from './ProjectDetailsPage.config'

export { metadataConfig }

const _routeExports = createDetailPageRouteExports(
  metadataConfig,
  portalMetadata,
)

export const loader = _routeExports.loader
export const clientLoader = _routeExports.clientLoader
export const meta = _routeExports.meta

function ProjectDetailsPage() {
  const { Project } = useParams<{ Project: string }>()

  if (!Project) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }

  return (
    <DetailsPage
      header={
        <CardContainerLogic
          isAlignToLeftNav={true}
          cardConfiguration={{
            ...projectsCardConfiguration,
            genericCardSchema: {
              ...projectSchema,
              link: '',
            },
            isHeader: true,
          }}
          rgbIndex={projectsRgbIndex}
          columnAliases={columnAliases}
          sql={projectsSql}
          sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
          searchParams={{ Project }}
        />
      }
      sql={projectsSql}
      sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
      resourcePrimaryKey={['Project']}
      searchParams={{ Project }}
      disableCanonicalUrl
    >
      <DetailsPageContent
        content={[
          {
            title: 'Datasets',
            id: 'Datasets',
            element: (
              <DetailsPageContextConsumer columnName={'Project'}>
                {({ value }) => (
                  <CardContainerLogic
                    cardConfiguration={{
                      ...datasetCardConfiguration,
                      secondaryLabelLimit: 4,
                    }}
                    sqlOperator={ColumnMultiValueFunction.HAS}
                    sql={datasetsSql}
                    searchParams={{ project: value! }}
                    columnAliases={datasetColumnAliases}
                  />
                )}
              </DetailsPageContextConsumer>
            ),
          },
        ]}
        hideMenu={true}
      />
    </DetailsPage>
  )
}

export default ProjectDetailsPage
