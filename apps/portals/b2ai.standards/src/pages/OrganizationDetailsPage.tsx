import {
  DetailsPageContent,
  DetailsPageContentType,
} from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContentLayout'
import { DetailsPageContextConsumer } from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/DetailsPageContext'
import DetailsPage from '@sage-bionetworks/synapse-portal-framework/components/DetailsPage/index'
import { useGetPortalComponentSearchParams } from '@sage-bionetworks/synapse-portal-framework/utils/UseGetPortalComponentSearchParams'
import {
  ErrorPage,
  SynapseConstants,
  SynapseErrorType,
  RowDataTable,
  SkeletonTable,
  CardConfiguration,
  EntityDownloadConfirmation,
} from 'synapse-react-client'
import { CardContainerLogic } from 'synapse-react-client'
import { TableToGenericCardMapping } from 'synapse-react-client/components/GenericCard/TableRowGenericCard'
import columnAliases from '../config/columnAliases'
import {
  ColumnSingleValueFilterOperator,
  ColumnTypeEnum,
} from '@sage-bionetworks/synapse-types'
import { organizationDetailsPageSQL } from '../config/resources'
import { GenericCardIcon } from 'synapse-react-client/components/GenericCard/GenericCardIcon'
import GenericCard from 'synapse-react-client/components/GenericCard/GenericCard'
import { Collapse } from '@mui/material'
import IconList from 'synapse-react-client/components/IconList'
import GenericCardActionButton from 'synapse-react-client/components/GenericCard/GenericCardActionButton'
import { GetAppTwoTone } from '@mui/icons-material'
import CitationPopover from 'synapse-react-client/components/CitationPopover'
import React from 'react'
const dataSql = organizationDetailsPageSQL
console.log({ dataSql })

export const organizationCardSchema: TableToGenericCardMapping = {
  type: SynapseConstants.ORGANIZATION,
  title: 'name',
  subTitle: 'description',
  // description: 'description',
  link: 'URL',
  secondaryLabels: ['rorId', 'wikidataId', 'topics', 'dataTypes'],
}

export const linkedDataSetCardConfiguration: CardConfiguration = {
  type: SynapseConstants.GENERIC_CARD,
  genericCardSchema: {
    type: SynapseConstants.DATASET,
    title: 'acronym',
    subTitle: 'standardName',
    description: 'description',
    link: '',
  },
  titleLinkConfig: {
    isMarkdown: false,
    baseURL: 'Explore/Standard/DetailsPage',
    URLColumnName: 'id',
    matchColumnName: 'id',
  },
}

export const organizationDetailsPageContent: DetailsPageContentType = [
  {
    id: 'About the Organization',
    title: 'About the Organization',
    element: (
      <DetailsPageContextConsumer columnName={'id'}>
        {({ context }) => {
          if (context.rowData && context.rowSet) {
            return (
              <RowDataTable
                rowData={context.rowData.values ?? []}
                headers={context.rowSet?.headers ?? []}
                displayedColumns={['name', 'rorId']}
                columnAliases={columnAliases}
              />
            )
          } else {
            return <SkeletonTable numRows={6} numCols={1} />
          }
        }}
      </DetailsPageContextConsumer>
    ),
  },
  {
    id: 'DataSets',
    title: 'DataSets',
    element: (
      <DetailsPageContextConsumer columnName={'dataset_json'}>
        {({ value }) => (
          <CardContainerLogic
            cardConfiguration={linkedOrganizationCardConfiguration}
            sql={dataSql}
            // need a dummy value for search to properly exclude null values and an empty string doesn't work
            searchParams={{ id: value || 'notreal' }}
            sqlOperator={ColumnSingleValueFilterOperator.IN}
          />
        )}
      </DetailsPageContextConsumer>
    ),
  },
]

export default function OrganizationDetailsPage() {
  const { id } = useGetPortalComponentSearchParams()

  /*
  This is the code previously used on home page to generate the Explore Standards
  links. Need to get it working here now.

  function createExplorePageLink(query: Query): string {
    return `/Explore?QueryWrapper0=${encodeURIComponent(JSON.stringify(query))}`
  }

  const query: Query = {
    sql: dataSql,
    limit: 25,
    selectedFacets: [
      {
        concreteType:
          'org.sagebionetworks.repo.model.table.FacetColumnValuesRequest',
        columnName: DST_TABLE_COLUMN_NAMES.RELEVANT_ORG_NAMES,
        facetValues: [org[ORG_DENORMALIZED_COLUMN_NAMES.NAME]],
      },
    ],
  }
  ctaButtonText: 'Explore Standards',
  ctaButtonURL: createExplorePageLink(query),
  */

  if (!id) {
    return <ErrorPage type={SynapseErrorType.NOT_FOUND} gotoPlace={() => {}} />
  }
  return (
    <>
      <CardContainerLogic
        query={{
          sql: dataSql,
          additionalFilters: [
            {
              concreteType:
                'org.sagebionetworks.repo.model.table.ColumnSingleValueQueryFilter',
              columnName: 'id',
              operator: ColumnSingleValueFilterOperator.EQUAL,
              values: [id],
            },
          ],
        }}
        columnAliases={columnAliases}
        cardConfiguration={{
          type: SynapseConstants.GENERIC_CARD,
          genericCardSchema: organizationCardSchema,
          secondaryLabelLimit: 6,
          isHeader: true,
          headerCardVariant: 'HeaderCardV2',
          ctaLinkConfig: {
            text: 'View Organization on External Website',
            link: 'URL',
          },
        }}
      />

      <DetailsPage sql={dataSql}>
        <DetailsPageContent content={organizationDetailsPageContent} />
      </DetailsPage>
    </>
  )
}

function DataSetCard(props) {
  return (
    <GenericCard
    /*
      ref={ref}
      icon={
        <GenericCardIcon
          type={
            useTypeColumnForIcon ? data[schema['type']] : genericCardSchema.type
          }
          useTypeForIcon={useTypeColumnForIcon}
          thumbnailRequiresPadding={genericCardSchema.thumbnailRequiresPadding}
          imageFileHandleId={imageFileHandleIdValue}
          fileHandleAssociation={fileHandleAssociation}
          iconOptions={iconOptions}
          iconValue={iconValue}
        />
      }
      isHeader={isHeader}
      headerCardVariant={headerCardVariant}
      type={type}
      title={title}
      subtitle={subTitle}
      titleLinkConfiguration={{ target, href }}
      titleAsFileHandleLinkConfiguration={
        !titleLinkConfig &&
        titleColumnType === ColumnTypeEnum.FILEHANDLEID &&
        fileHandleAssociation
          ? {
            fileHandleAssociation: fileHandleAssociation,
            showDownloadIcon: type !== SynapseConstants.EXPERIMENTAL,
          }
          : undefined
      }
      ctaLinkConfig={
        ctaLinkConfig
          ? {
            text: ctaLinkConfig?.text,
            href: ctaHref,
            target: ctaTarget,
          }
          : undefined
      }
      description={description}
      descriptionSubTitle={descriptionSubTitle}
      descriptionConfig={descriptionConfig}
      labels={values}
      secondaryLabelLimit={secondaryLabelLimit}
      columnIconOptions={columnIconOptions}
      useStylesForDisplayedImage={Boolean(imageFileHandleIdValue)}
      cardTopContent={
        downloadCartSynIdValue && (
          <Collapse in={showDownloadConfirmation}>
            <EntityDownloadConfirmation
              entityId={downloadCartSynIdValue}
              versionNumber={downloadCartVersionNumber}
              handleClose={() => setShowDownloadConfirmation(false)}
              onIsLoadingChange={isLoading => {
                setDownloadButtonDisabled(isLoading)
              }}
            />
          </Collapse>
        )
      }
      renderedIconList={
        // If the portal configs has columnIconOptions.columns.dataType option
        // and the column value is not null, display the card data type icons
        columnIconOptions?.columns?.dataType &&
        dataTypeIconNames?.length && (
          <div style={{ marginTop: '20px' }}>
            <IconList
              iconConfigs={columnIconOptions.columns.dataType}
              iconNames={JSON.parse(dataTypeIconNames)}
              commonIconProps={{
                sx: { fontSize: '40px' },
              }}
              useBackground={true}
              useTheme={true}
            />
          </div>
        )
      }
      cardTopButtons={
        <>
          {croissantButton}
          {/* PORTALS-3386 Use synapseLink in schema to add entity to download cart * /}
          {downloadCartSynIdValue && (
            <>
              <GenericCardActionButton
                onClick={() => setShowDownloadConfirmation(val => !val)}
                variant="outlined"
                startIcon={<GetAppTwoTone sx={{ height: '12px' }} />}
                disabled={downloadButtonDisabled}
              >
                Download
              </GenericCardActionButton>
            </>
          )}
          {includeCitation && (
            <CitationPopover
              title={title}
              doi={doiValue}
              boilerplateText={citationBoilerplateText}
              defaultCitationFormat={defaultCitationFormat}
            />
          )}
        </>
      }
      */
    />
  )
}
