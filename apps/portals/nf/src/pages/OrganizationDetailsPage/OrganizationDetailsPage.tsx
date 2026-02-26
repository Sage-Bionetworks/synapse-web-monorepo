import { fundersSql } from '@/config/resources'
import { organizationCardSchema } from '@/config/synapseConfigs/organizations'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage'
import {
  DetailsPageTabConfig,
  DetailsPageTabs,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageTabs'
import { Outlet, useParams } from 'react-router'
import { CardContainerLogic, SynapseConstants } from 'synapse-react-client'
import {
  ORGANIZATION_DATA_TAB_PATH,
  ORGANIZATION_DETAILS_TAB_PATH,
} from '@/config/routeConstants'

const tabConfig: DetailsPageTabConfig[] = [
  {
    title: 'Organization Details',
    path: ORGANIZATION_DETAILS_TAB_PATH,
    iconName: 'study',
  },
  {
    title: 'Organization Data',
    path: ORGANIZATION_DATA_TAB_PATH,
    iconName: 'database',
    tooltip: "All of the Data generated from this Organization's studies",
    iconClassName: 'tab-database',
  },
]

/**
 * Organization detail page.
 *
 * The `:abbreviation` path parameter holds the identifier for the org.
 * For most orgs this is the `abbreviation` column value.
 * For the NCI DHART SPORE org (which has no abbreviation), the path param
 * holds the `fundingAgency` value (`NIH-NCI`), mirroring the legacy
 * `?fundingAgency=NIH-NCI` query string behaviour.
 *
 * We pass both possibilities to `CardContainerLogic` as `searchParams` so
 * Synapse matches whichever column is present on the row.
 */
function OrganizationDetailsPage() {
  const { abbreviation } = useParams<{ abbreviation: string }>()
  // Build searchParams that cover both the abbreviation-keyed orgs and the
  // fundingAgency-keyed org (NCI DHART SPORE / NIH-NCI).
  const searchParams: Record<string, string> = abbreviation
    ? { abbreviation, fundingAgency: abbreviation }
    : {}
  return (
    <DetailsPage
      header={
        <CardContainerLogic
          sql={fundersSql}
          cardConfiguration={{
            type: SynapseConstants.GENERIC_CARD,
            genericCardSchema: {
              ...organizationCardSchema,
              imageFileHandleColumnName: 'headerLogo',
            },
            isHeader: true,
          }}
          searchParams={searchParams}
        />
      }
      sql={fundersSql}
      ContainerProps={{ maxWidth: 'xl' }}
      resourcePrimaryKey={['abbreviation']}
    >
      <DetailsPageTabs tabConfig={tabConfig} />
      <Outlet />
    </DetailsPage>
  )
}

export default OrganizationDetailsPage
