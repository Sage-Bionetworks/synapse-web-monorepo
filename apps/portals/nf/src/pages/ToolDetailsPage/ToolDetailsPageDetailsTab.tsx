import { Typography } from '@mui/material'
import { DetailsPageContent } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { useDetailsPageContext } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import { MarkdownSynapseFromColumnData } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/markdown/MarkdownSynapseFromColumnData'
import { ColumnSingleValueFilterOperator } from '@sage-bionetworks/synapse-types'
import {
  catalogNumberSql,
  developmentPublicationSql,
  fundingAgencySql,
  investigatorSql,
  mutationsSql,
  publicationsV2Sql,
  toolApplicationsSql,
  usageRequirementsSql,
  vendorSql,
} from 'src/config/resources'
import { columnAliases } from 'src/config/synapseConfigs/commonProps'
import { datasetsRgbIndex } from 'src/config/synapseConfigs/datasets'
import { publicationsV2CardConfiguration } from 'src/config/synapseConfigs/publications'
import { CardContainerLogic } from 'synapse-react-client/components/CardContainerLogic/index'
import MarkdownSynapse from 'synapse-react-client/components/Markdown/MarkdownSynapse'
import StandaloneQueryWrapper from 'synapse-react-client/components/StandaloneQueryWrapper/StandaloneQueryWrapper'
import SubsectionRowRenderer from 'synapse-react-client/components/SubsectionRowRenderer/SubsectionRowRenderer'
import UserCardListRotate from 'synapse-react-client/components/UserCardList/UserCardListRotate'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'

export default function ToolDetailsPageDetailsTab() {
  const { value: resourceId } = useDetailsPageContext('resourceId')

  if (resourceId == null) {
    return <></>
  }

  return (
    <DetailsPageContent
      hideMenu
      content={[
        {
          id: 'How To Obtain The Tool',
          title: 'How To Obtain The Tool',
          element: (
            <MarkdownSynapseFromColumnData
              columnName="howToAcquire"
              isRawMarkdown
            />
          ),
        },
        {
          id: 'usageRequirements',
          element: (
            <SubsectionRowRenderer
              sql={usageRequirementsSql}
              isMarkdown={true}
              sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
              searchParams={{ resourceId }}
            />
          ),
        },
        {
          id: 'usageRequirements',
          element: (
            <SubsectionRowRenderer
              sql={vendorSql}
              sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
              searchParams={{ resourceId }}
              columnLink={{
                linkColumnName: 'Vendor Url',
                matchColumnName: 'Vendor',
                isMarkdown: false,
              }}
            />
          ),
        },
        {
          id: 'catalogNumber',
          element: (
            <SubsectionRowRenderer
              sql={catalogNumberSql}
              sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
              columnLink={{
                linkColumnName: 'Catalog Number URL',
                matchColumnName: 'Catalog Number',
                isMarkdown: false,
              }}
              searchParams={{ resourceId }}
            />
          ),
        },
        {
          id: 'Tool Origin',
          title: 'Tool Origin',
          element: (
            <>
              <Typography variant="headline3" sx={{ my: 3 }}>
                Investigator
              </Typography>
              <UserCardListRotate
                sql={investigatorSql}
                count={1}
                size={SynapseConstants.MEDIUM_USER_CARD}
                useQueryResultUserData={true}
                sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
                searchParams={{ resourceId }}
              />
            </>
          ),
        },
        {
          id: 'Development Publication',
          title: 'Development Publication',
          helpText:
            'The first report providing a detailed characterization of a tool.',
          element: (
            <CardContainerLogic
              {...publicationsV2CardConfiguration}
              initialLimit={3}
              columnAliases={columnAliases}
              sql={developmentPublicationSql}
              secondaryLabelLimit={4}
              searchParams={{ resourceId }}
            />
          ),
        },
        {
          id: 'fundingAgency',
          element: (
            <SubsectionRowRenderer
              sql={fundingAgencySql}
              isMarkdown={true}
              sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
              searchParams={{ resourceId }}
            />
          ),
        },
        {
          id: 'toolApplications',
          element: (
            <SubsectionRowRenderer
              sql={toolApplicationsSql}
              columnNameIsSectionTitle={true}
              sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
              limit={1}
              searchParams={{ resourceId }}
            />
          ),
        },
        {
          id: 'mutations',
          title: 'Mutations',
          element: (
            <StandaloneQueryWrapper
              unitDescription="Mutations"
              sqlOperator={ColumnSingleValueFilterOperator.EQUAL}
              rgbIndex={datasetsRgbIndex}
              sql={mutationsSql}
              showTopLevelControls={true}
              searchParams={{ resourceId }}
              hideQueryCount
            />
          ),
        },
        {
          id: 'Publications',
          title: 'Publications',
          helpText:
            'Subsequent reports that utilize the tool outlined in the development publication.',
          element: (
            <CardContainerLogic
              {...publicationsV2CardConfiguration}
              initialLimit={3}
              columnAliases={columnAliases}
              sql={publicationsV2Sql}
              searchParams={{ resourceId }}
            />
          ),
        },
        {
          id: 'Submit an Observation',
          title: 'Submit an Observation',
          element: <MarkdownSynapse ownerId="syn26338068" wikiId="613438" />,
        },
      ]}
    />
  )
}
