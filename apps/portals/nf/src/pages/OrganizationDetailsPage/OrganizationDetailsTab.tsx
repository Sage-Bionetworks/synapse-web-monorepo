import { publicationsSql, studiesSql } from '@/config/resources'
import {
  columnAliases,
  searchConfiguration,
} from '@/config/synapseConfigs/commonProps'
import { publicationsCardConfiguration } from '@/config/synapseConfigs/publications'
import { studyCardConfiguration } from '@/config/synapseConfigs/studies'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import { CardContainerLogic, QueryWrapperPlotNav } from 'synapse-react-client'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'

function OrganizationDetailsTab() {
  const { value: fundingAgency } = useDetailsPageContext('fundingAgency')

  if (fundingAgency == null) {
    return null
  }

  return (
    <DetailsPageContent
      content={[
        {
          id: 'Funded Studies',
          element: (
            <QueryWrapperPlotNav
              rgbIndex={8}
              shouldDeepLink={false}
              defaultShowPlots={false}
              sql={studiesSql}
              visibleColumnCount={7}
              sqlOperator={ColumnSingleValueFilterOperator.LIKE}
              initialLimit={2}
              cardConfiguration={studyCardConfiguration}
              name="Funded Studies"
              columnAliases={columnAliases}
              searchConfiguration={searchConfiguration}
              searchParams={{ fundingAgency }}
              lockedColumn={{
                columnName: 'fundingAgency',
                value: fundingAgency,
              }}
              hideQueryCount
            />
          ),
        },
        {
          id: 'Publications',
          title: 'Publications',
          element: (
            <CardContainerLogic
              sql={publicationsSql}
              initialLimit={3}
              cardConfiguration={publicationsCardConfiguration}
              sqlOperator={ColumnSingleValueFilterOperator.LIKE}
              searchParams={{ fundingAgency }}
            />
          ),
        },
        {
          title: 'Funding Impact',
          id: 'Funding Impact',
          element: <MarkdownSynapse ownerId={'syn22272075'} wikiId="604853" />,
        },
      ]}
    ></DetailsPageContent>
  )
}

export default OrganizationDetailsTab
