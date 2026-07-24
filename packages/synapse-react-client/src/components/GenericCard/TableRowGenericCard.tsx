import { CommonCardProps } from '@/components/CardContainer/CardConfiguration'
import {
  getFileHandleAssociation,
  getLinkParams,
  getValueOrMultiValue,
} from '@/components/GenericCard/CardUtils'
import CroissantButton from '@/components/GenericCard/CroissantButton/CroissantButton'
import { GenericCardIcon } from '@/components/GenericCard/GenericCardIcon'
import PortalDOI from '@/components/GenericCard/PortalDOI/PortalDOI'
import {
  getCandidateDoiId,
  useShowDoiCardLabel,
} from '@/components/GenericCard/PortalDOI/PortalDOIUtils'
import { mapRowToRecord } from '@/components/SynapseTable/SynapseTableUtils'
import { useGetEntity } from '@/synapse-queries'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import {
  isDatasetCollection,
  isTableEntity,
} from '@/utils/functions/EntityTypeUtils'
import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'
import { parseSynId } from '@/utils/functions/RegularExpressions'
import { getColumnIndex } from '@/utils/functions/SqlFunctions'
import { TargetEnum } from '@/utils/html/TargetEnum'
import * as SynapseConstants from '@/utils/SynapseConstants'
import { GetAppTwoTone } from '@mui/icons-material'
import { Box, Collapse, Link, Stack, Typography } from '@mui/material'
import {
  ColumnModel,
  ColumnTypeEnum,
  Entity,
  SelectColumn,
  Table,
} from '@sage-bionetworks/synapse-types'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import CitationPopover from '../CitationPopover'
import {
  DATASET_HOSTING_CONFIG,
  type DatasetHostingType,
  normalizeHosting,
} from '../DatasetHosting/DatasetHosting'
import DatasetDownloadButton from '../DatasetHosting/DatasetDownloadButton'
import { EntityDownloadConfirmation } from '../EntityDownloadConfirmation'
import { HeaderCardVariant } from '../HeaderCard'
import IconList from '../IconList'
import { useQueryContext } from '../QueryContext/QueryContext'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import ShareThisPage, {
  ShareThisPageProps,
} from '../ShareThisPage/ShareThisPage'
import { SustainabilityScorecardProps } from '../SustainabilityScorecard/SustainabilityScorecard'
import { CardActionButtonStyleContext } from './CardActionButtonStyleContext'
import GenericCard from './GenericCard'
import GenericCardActionButton from './GenericCardActionButton'
import DuoTermTags from './DuoTermTags/DuoTermTags'
import { parseDuoModifiers } from './DuoTermTags/duoTerms'
import { PortalDOIConfiguration } from './PortalDOI/PortalDOIConfiguration'
import { SynapseCardLabel } from './SynapseCardLabel'
import { useResolvedSynapseEntity } from './useResolvedSynapseEntity'

type RowSynapseEntityConfig = {
  /** Use the table rowId to resolve the Synapse entity ID. */
  id: {
    source: 'rowId'
  }
  /** Use the table rowVersionNumber to resolve the Synapse entity version (if available). */
  version?: {
    source: 'rowVersionNumber'
  }
}

type ColumnSynapseEntityConfig = {
  /** Use a column value to resolve the Synapse entity ID. */
  id: {
    source: 'column'
    columnName: string
  }
  /** Use a column value to resolve the Synapse entity version. */
  version?: {
    source: 'column'
    columnName: string
  }
}

export type SynapseEntityConfig =
  | RowSynapseEntityConfig
  | ColumnSynapseEntityConfig

/**
 * Maps a table query result to a GenericCard.
 */
export type TableToGenericCardMapping = {
  /** The 'type' of resource a card refers to. Renders a label on the card with this string value.
   *  Can be hidden by setting it to '' (empty string)
   */
  type: string
  /** The column name whose data contains the title of the card */
  title: string
  /** The column name whose data contains the subtitle of the card */
  subTitle?: string
  /** The column name whose data contains the description of the card */
  description?: string
  /** If true, a 'Cite As' button will be displayed for those cards with a DOI in the 'doi' column  */
  includeCitation?: boolean
  /** If true, a 'Share this page' button will be displayed  */
  includeShareButton?: boolean
  /**
   * Configuration for displaying the SustainabilityScorecard component
   */
  sustainabilityScorecard?: SustainabilityScorecardProps
  /** The initial citation format to use in the 'Cite As' UI */
  defaultCitationFormat?: 'bibtex' | 'apa' | 'ieee' | 'nature' | 'science'
  /** Static text displayed in the 'Cite As' UI */
  citationBoilerplateText?: string
  /** The column name whose data contains the value used to map to the icon */
  icon?: string
  /** The column name whose data contains an image file handle to be displayed on the card */
  imageFileHandleColumnName?: string
  /** Static boolean value used if the image displayed using `imageFileHandleColumnName` requires extra padding */
  thumbnailRequiresPadding?: boolean
  /** Array of column names to be used for labels in the Card Footer */
  secondaryLabels?: string[]
  /** Can be used to add a custom secondary label */
  customSecondaryLabelConfig?: {
    /** The displayed label key */
    key: string
    /** The value to display */
    value: React.ReactNode
    /** Callback to determine visibility of the label
     * @param schema the mapping of columnName to data index
     * @param data the row data
     */
    isVisible: (schema: Record<string, number>, data: string[]) => boolean
  }
  /** Column name of the link value if the title should be linked */
  link?: string
  /** Column name of the STRING_LIST column that includes icon names that represent icons that should be displayed on the card */
  dataTypeIconNames?: string
  /**
   * Ordered list of column names to display to the right of the title area.
   * Each renders as "Display Name: Value" on its own line. Rows with empty values are skipped.
   * The display name is derived from getColumnDisplayName (respects column aliases and unCamelCase).
   *
   * Can also be a function that receives the schema and row data and returns the list of column
   * names to display, allowing the displayed details to vary based on the row's actual values.
   */
  titleAreaDetails?:
    | string[]
    | ((schema: Record<string, number>, data: string[]) => string[])
  /** Configuration for resolving the Synapse entity ID/version represented by each card row.
   *  The ID and version sources must both reference either row-based values or column-based values.
   */
  synapseEntityConfig?: SynapseEntityConfig
  /** The column name whose data contains a synId that can be used to show a button to add the corresponding entity to the download cart. */
  downloadCartSynId?: string
  /**
   * Opt-in configuration for hosting-aware download/access. When `hostingColumn`
   * is provided, the card's primary action becomes a `DatasetDownloadButton` driven
   * by the row's hosting value: downloadable hosting types show the standard dataset
   * download options, while non-downloadable types (e.g. external-access) swap to a
   * link to the external repository instead. Other portals that don't set this
   * are unaffected.
   */
  hostingConfig?: {
    /** Column holding the hosting type. Blank/unknown → `synapse`. */
    hostingColumn: string
    /**
     * Optional map from the column's raw values to hosting types, for columns that
     * use portal-specific labels rather than the canonical vocabulary (e.g. CCKP's
     * `downloadType`: "Synapse Indexed" → `external-download`). Values not in the
     * map fall back to `normalizeHosting` (canonical value, or → `synapse`).
     */
    hostingValueMap?: Record<string, DatasetHostingType>
    /** Column holding the free-text external repository name (e.g. "GEO", "dbGaP"). */
    repositoryColumn?: string
    /** Column holding the external URL used for non-downloadable (external-access) datasets. */
    externalUrlColumn?: string
  }
  /** Configuration to display a DOI, as well as the ability to create one for users with such permission */
  portalDoiConfiguration?: PortalDOIConfiguration
  /**
   * Column name of a STRING_LIST of Data Use Ontology (DUO) values (ontology
   * codes or term names). When set, the values are rendered as DUO tags in a
   * metadata row labeled with the column's display name, so the card matches the
   * corresponding facet.
   */
  dataUseModifiersColumnName?: string
}

export type TableRowGenericCardProps = {
  /** The schema that maps a table result to the GenericCard UI */
  genericCardSchema: TableToGenericCardMapping
  /** The table's SelectColumns */
  selectColumns?: SelectColumn[]
  /** The table's ColumnModels */
  columnModels?: ColumnModel[]
  /** If true, the 'type' column will be used as the icon string to choose the icon */
  useTypeColumnForIcon?: boolean
  /** If true, render the card as a HeaderCard */
  isHeader?: boolean
  /** If isHeader is true, use this variant of HeaderCard */
  headerCardVariant?: HeaderCardVariant
  isAlignToLeftNav?: boolean
  /** Mapping of column name to row data index */
  schema: Record<string, number>
  /** The row data */
  data: string[]
  /** The ID of the table row */
  rowId?: number
  /** The versionNumber of the table row */
  versionNumber?: number
  /** Optional props for the ShareThisPage component */
  sharePageLinkButtonProps?: ShareThisPageProps
  /** Optional function that receives schema and data and returns a ReactNode to be rendered next to the card type */
  CardTypeAdornment?: React.ComponentType<{
    schema: Record<string, number>
    data: string[]
  }>
} & CommonCardProps

// SWC-6115: special rendering of the version column (for Views)
function VersionLabel(props: { synapseId: string; version: string }) {
  const { synapseId, version } = props
  return (
    <span>
      {version}&nbsp;&nbsp;
      <a
        target={TargetEnum.NEW_WINDOW}
        rel="noopener noreferrer"
        href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Synapse:${synapseId}.${version}`}
      >
        (Show Version History on Synapse)
      </a>
    </span>
  )
}

/**
 * Maps a table row to a GenericCard.
 */
export function TableRowGenericCard(props: TableRowGenericCardProps) {
  const [showDownloadConfirmation, setShowDownloadConfirmation] =
    useState(false)
  const [downloadButtonLoading, setDownloadButtonLoading] = useState(false)

  const { entityId, versionNumber } = useQueryContext()
  const { getColumnDisplayName } = useQueryVisualizationContext()

  const { ref, inView: cardIsInView } = useInView()

  const { data: table } = useGetEntity<Table>(entityId, versionNumber)

  const {
    schema,
    data,
    rowId,
    versionNumber: rowVersionNumber,
    genericCardSchema,
    secondaryLabelLimit,
    sharePageLinkButtonProps,
    selectColumns,
    columnModels,
    iconOptions,
    useTypeColumnForIcon = false,
    isHeader = false,
    sustainabilityScorecard,
    headerCardVariant,
    titleLinkConfig,
    ctaLinkConfig,
    ctaLinkPosition,
    labelLinkConfig,
    descriptionConfig,
    columnIconOptions,
    CardTypeAdornment,
    charCountCutoff,
    actionButtonStyle = 'button',
  } = props

  const {
    link = '',
    type,
    includeCitation,
    includeShareButton,
    defaultCitationFormat,
    citationBoilerplateText,
    downloadCartSynId,
    portalDoiConfiguration,
  } = genericCardSchema
  const title = data[schema[genericCardSchema.title]]
  let subTitle =
    genericCardSchema.subTitle && data[schema[genericCardSchema.subTitle]]
  subTitle =
    genericCardSchema.subTitle &&
    getValueOrMultiValue({
      value: subTitle,
      columnName: genericCardSchema.subTitle,
      selectColumns,
      columnModels,
    }).str
  const description = data[schema[genericCardSchema.description || '']]
  const iconValue = data[schema[genericCardSchema.icon || '']]
  const dataTypeIconNames =
    data[schema[genericCardSchema.dataTypeIconNames || '']]
  const imageFileHandleIdValue =
    data[schema[genericCardSchema.imageFileHandleColumnName || '']]
  const titleColumnModel = columnModels?.find(
    el => genericCardSchema.link === el.name,
  )
  const titleColumnType = titleColumnModel?.columnType
  // wrap link in parens because undefined would throw an error
  const linkValue: string = data[schema[link]] || ''
  const { href, target } = getLinkParams(
    linkValue,
    titleLinkConfig,
    data,
    schema,
    rowId,
  )

  const synapseEntityConfig = genericCardSchema.synapseEntityConfig

  const getColumnValue = useCallback(
    (columnName?: string) => {
      if (!columnName) {
        return undefined
      }
      const columnIndex = schema[columnName]
      if (columnIndex === undefined) {
        return undefined
      }
      return data[columnIndex]
    },
    [schema, data],
  )

  // DUO (Data Use Ontology) tags, when a dataUseModifiers column is configured.
  // Rendered as a metadata row labeled with the column's display name.
  const duoContent = useMemo(() => {
    const col = genericCardSchema.dataUseModifiersColumnName
    if (!col) {
      return undefined
    }
    const terms = parseDuoModifiers(data[schema[col]])
    if (terms.length === 0) {
      return undefined
    }
    return <DuoTermTags terms={terms} />
  }, [genericCardSchema, data, schema])

  const resolvedTitleAreaRightContent = useMemo(() => {
    const { titleAreaDetails } = genericCardSchema
    if (!titleAreaDetails) return undefined
    const columns =
      typeof titleAreaDetails === 'function'
        ? titleAreaDetails(schema, data)
        : titleAreaDetails
    if (columns.length === 0) return undefined
    const rows = columns
      .map(columnName => {
        const rawValue: string | undefined = data[schema[columnName]]
        if (!rawValue) return null
        return { name: getColumnDisplayName(columnName), rawValue, columnName }
      })
      .filter(Boolean) as {
      name: string
      rawValue: string
      columnName: string
    }[]
    if (rows.length === 0) return undefined
    return (
      <Stack direction="column" gap="4px">
        {rows.map(({ name, rawValue, columnName }) => (
          <Stack key={columnName} direction="row" gap="4px" alignItems="center">
            <Typography component="span" variant="body1">
              {name}:
            </Typography>
            <SynapseCardLabel
              value={rawValue}
              columnName={columnName}
              labelLink={undefined}
              isHeader={isHeader}
              selectColumns={selectColumns}
              columnModels={columnModels}
              rowData={data}
              columnIconOptions={columnIconOptions}
            />
          </Stack>
        ))}
      </Stack>
    )
  }, [
    genericCardSchema,
    data,
    schema,
    getColumnDisplayName,
    isHeader,
    selectColumns,
    columnModels,
    columnIconOptions,
  ])

  const {
    entityId: resolvedSynapseEntityId,
    entityVersionNumber: resolvedSynapseEntityVersionNumber,
  } = useResolvedSynapseEntity({
    synapseEntityConfig,
    getColumnValue,
    rowId,
    rowVersionNumber,
  })

  let resolvedDownloadCartSynIdValue = resolvedSynapseEntityId
  let resolvedDownloadCartVersionNumber = resolvedSynapseEntityVersionNumber

  if (downloadCartSynId) {
    const reference = parseSynId(getColumnValue(downloadCartSynId) ?? '')
    resolvedDownloadCartSynIdValue = reference?.targetId
    resolvedDownloadCartVersionNumber = reference?.targetVersionNumber
  }

  // Opt-in hosting-aware action: when the schema declares a hosting column, the
  // primary action is a DatasetDownloadButton driven by the row's hosting value.
  const hostingConfig = genericCardSchema.hostingConfig
  const rawHostingValue = hostingConfig
    ? getColumnValue(hostingConfig.hostingColumn)
    : undefined
  const hostingType = hostingConfig
    ? (rawHostingValue && hostingConfig.hostingValueMap?.[rawHostingValue]) ||
      normalizeHosting(rawHostingValue)
    : undefined
  const hostingRepository = hostingConfig?.repositoryColumn
    ? getColumnValue(hostingConfig.repositoryColumn)
    : undefined
  const rawHostingExternalUrl = hostingConfig?.externalUrlColumn
    ? getColumnValue(hostingConfig.externalUrlColumn)
    : undefined
  // The externalUrl column may be a markdown link (e.g. CCKP's `externalLink`:
  // "[label](https://...)") rather than a plain URL — extract the href if so.
  const hostingExternalUrl = rawHostingExternalUrl
    ? (rawHostingExternalUrl.match(/\]\(([^)]+)\)/)?.[1] ??
      rawHostingExternalUrl)
    : undefined
  // Non-downloadable hosting (e.g. external-access) suppresses the Synapse
  // download flow entirely; everything else keeps the add-to-download-list behavior.
  const hostingIsDownloadable = hostingType
    ? DATASET_HOSTING_CONFIG[hostingType].downloadable
    : true
  // Portal target for the DatasetDownloadButton's download-confirmation dialog, so
  // it renders in the card's top content region rather than inline in the button row.
  const datasetDownloadConfirmationRef = useRef<HTMLDivElement>(null)

  // Transform the row to a record of (columnName, value) pairs for compatibility with getCandidateDoiId
  const dataAsRecord: Record<string, string | null> = useMemo(
    () => mapRowToRecord(data, schema),
    [data, schema],
  )

  const candidateDoiId = getCandidateDoiId({
    data: dataAsRecord,
    portalDoiConfiguration,
  })

  const showDoiCardLabel = useShowDoiCardLabel({
    portalId: portalDoiConfiguration?.portalId,
    resourceId: candidateDoiId,
  })

  const values: {
    columnDisplayName: string
    value: React.ReactNode
    columnName?: string
  }[] = []
  const { secondaryLabels = [] } = genericCardSchema
  const customLabelConfig = genericCardSchema.customSecondaryLabelConfig

  // DUO tags rendered as a metadata row (alongside "How to download", size, …).
  // Label it with the DUO column's display name so the card row matches the
  // facet exactly (respecting any column alias) rather than a hardcoded string.
  if (duoContent && genericCardSchema.dataUseModifiersColumnName) {
    values.push({
      columnName: genericCardSchema.dataUseModifiersColumnName,
      columnDisplayName: getColumnDisplayName(
        genericCardSchema.dataUseModifiersColumnName,
      ),
      value: duoContent,
    })
  }

  // PORTALS-3549 - if a DOI exists or can be created by the current user, show it
  if (
    showDoiCardLabel &&
    portalDoiConfiguration &&
    candidateDoiId &&
    cardIsInView
  ) {
    values.push({
      columnDisplayName: 'DOI',
      value: (
        <PortalDOI
          portalId={portalDoiConfiguration.portalId}
          resourceId={candidateDoiId}
        />
      ),
    })
  }

  // Overwrite the 'HOW TO DOWNLOAD' link if a synapse ID is available — but not
  // for non-downloadable hosting (e.g. external-access), where adding to the
  // Synapse download list wouldn't work; fall back to the static guidance instead.
  if (customLabelConfig?.isVisible(schema, data)) {
    const { key, value } = customLabelConfig
    if (resolvedDownloadCartSynIdValue && hostingIsDownloadable) {
      values.push({
        columnDisplayName: 'HOW TO DOWNLOAD',
        value: (
          <Link onClick={() => setShowDownloadConfirmation(val => !val)}>
            Click here to add to Synapse download list
          </Link>
        ),
      })
    } else {
      values.push({ columnDisplayName: key, value })
    }
  }

  const isView = table && !isTableEntity(table)
  for (let i = 0; i < secondaryLabels.length; i += 1) {
    const columnName = secondaryLabels[i]
    const rawValue: string | undefined = data[schema[columnName]]
    let renderedValue: React.ReactNode = rawValue
    let columnDisplayName
    if (renderedValue && rawValue !== '[]' && rawValue !== '[""]') {
      // PORTALS-2750: special rendering of the datasetSizeInBytes (for Dataset Collections)
      if (
        isDatasetCollection(table as Entity) &&
        columnName === 'datasetSizeInBytes'
      ) {
        columnDisplayName = 'Size'
        renderedValue = calculateFriendlyFileSize(parseInt(rawValue))
      } // SWC-6115: special rendering of the version column (for Views)
      else if (isView && columnName === 'currentVersion') {
        const synapseId = data[schema.id]
        renderedValue = (
          <VersionLabel synapseId={synapseId} version={rawValue} />
        )
        columnDisplayName = 'Version'
      } else {
        const labelLink = labelLinkConfig?.find(
          el => el.matchColumnName === columnName,
        )
        renderedValue = (
          <SynapseCardLabel
            value={rawValue}
            columnName={columnName}
            labelLink={labelLink}
            isHeader={isHeader}
            selectColumns={selectColumns}
            columnModels={columnModels}
            rowData={data}
            columnIconOptions={columnIconOptions}
          />
        )
        columnDisplayName = getColumnDisplayName(columnName)
      }
      values.push({ columnDisplayName, value: renderedValue, columnName })
    }
  }

  const fileHandleId = imageFileHandleIdValue || linkValue

  /**
   * To show a direct download link to a file, we need to determine the association that gives permission to download the file.
   */
  const fileHandleAssociation = getFileHandleAssociation(
    table,
    fileHandleId,
    data[schema.id],
  )

  const descriptionSubTitle = getColumnDisplayName(
    genericCardSchema.description || '',
  )

  const doiColumnIndex = getColumnIndex('doi', selectColumns, columnModels)
  const doiValue =
    doiColumnIndex !== undefined ? data[doiColumnIndex] : undefined

  // Normalize ctaLinkConfig to array and resolve each config
  const ctaLinkConfigs = ctaLinkConfig
    ? Array.isArray(ctaLinkConfig)
      ? ctaLinkConfig
      : [ctaLinkConfig]
    : []
  const resolvedCtaLinkConfigs = ctaLinkConfigs
    .map(config => {
      const ctaLinkValue: string = data[schema[config.link]] || ''
      if (!ctaLinkValue) return null
      const { href, target } = getLinkParams(
        ctaLinkValue,
        undefined, //card link config
        data,
        schema,
        rowId,
      )
      return {
        text: config.endIcon ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {config.text}
            {config.endIcon}
          </div>
        ) : (
          config.text
        ),
        href,
        target,
      }
    })
    .filter(Boolean) as { text: string; href: string; target?: string }[]

  let croissantButton = <></>
  if (
    resolvedSynapseEntityId != null &&
    resolvedSynapseEntityVersionNumber != null
  ) {
    croissantButton = (
      <CroissantButton
        datasetId={resolvedSynapseEntityId}
        datasetVersionNumber={resolvedSynapseEntityVersionNumber}
      />
    )
  }

  const resolvedCardTypeAdornment = CardTypeAdornment ? (
    <CardTypeAdornment schema={schema} data={data} />
  ) : null

  let isRenderingIcon = true
  if (isHeader && !imageFileHandleIdValue && !iconValue) {
    // For header cards, if there is no image or explicit icon value, we don't show an icon at all
    isRenderingIcon = false
  }
  const iconNode = isRenderingIcon ? (
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
  ) : undefined
  return (
    <GenericCard
      ref={ref}
      icon={iconNode}
      isHeader={isHeader}
      sustainabilityScorecard={sustainabilityScorecard}
      headerCardVariant={headerCardVariant}
      type={type}
      title={title}
      subtitle={subTitle}
      titleLinkConfiguration={{ target, href }}
      cardTypeAdornment={resolvedCardTypeAdornment}
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
        resolvedCtaLinkConfigs.length > 0 ? resolvedCtaLinkConfigs : undefined
      }
      ctaLinkPosition={ctaLinkPosition}
      titleAreaRightContent={resolvedTitleAreaRightContent}
      description={description}
      descriptionSubTitle={descriptionSubTitle}
      descriptionConfig={descriptionConfig}
      charCountCutoff={charCountCutoff}
      labels={values}
      secondaryLabelLimit={secondaryLabelLimit}
      useStylesForDisplayedImage={Boolean(imageFileHandleIdValue)}
      cardTopContent={
        <>
          {!hostingConfig && resolvedDownloadCartSynIdValue && (
            <Collapse in={showDownloadConfirmation}>
              <EntityDownloadConfirmation
                entityId={resolvedDownloadCartSynIdValue}
                versionNumber={resolvedDownloadCartVersionNumber}
                handleClose={() => setShowDownloadConfirmation(false)}
                onIsLoadingChange={isLoading => {
                  setDownloadButtonLoading(isLoading)
                }}
              />
            </Collapse>
          )}
          {/* DatasetDownloadButton (hosting path) portals its confirmation here. */}
          {hostingConfig && <div ref={datasetDownloadConfirmationRef} />}
        </>
      }
      renderedIconList={
        // If the portal configs has columnIconOptions.columns.dataType option
        // and the column value is not null, display the card data type icons
        columnIconOptions?.columns?.dataType &&
        dataTypeIconNames?.length && (
          <div style={{ marginTop: '20px' }}>
            <IconList
              iconConfigs={columnIconOptions.columns.dataType}
              iconNames={JSON.parse(dataTypeIconNames) as string[]}
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
        <CardActionButtonStyleContext.Provider value={actionButtonStyle}>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {croissantButton}
            {/* Hosting-aware action (opt-in via schema.hostingConfig): downloadable
              hosting shows the standard dataset download options; non-downloadable
              hosting links out to the external repository or is non-actionable. */}
            {hostingConfig &&
              (resolvedDownloadCartSynIdValue || !hostingIsDownloadable) && (
                <DatasetDownloadButton
                  entityId={resolvedDownloadCartSynIdValue}
                  name={title}
                  version={resolvedDownloadCartVersionNumber}
                  hosting={hostingType}
                  repository={hostingRepository}
                  externalUrl={hostingExternalUrl}
                  downloadConfirmationContainer={datasetDownloadConfirmationRef}
                />
              )}
            {/* PORTALS-3386 Use synapseLink in schema to add entity to download cart */}
            {!hostingConfig && resolvedDownloadCartSynIdValue && (
              <GenericCardActionButton
                onClick={() => setShowDownloadConfirmation(val => !val)}
                variant="outlined"
                startIcon={<GetAppTwoTone sx={{ height: '12px' }} />}
                loading={downloadButtonLoading}
              >
                Download
              </GenericCardActionButton>
            )}
            {includeCitation && doiValue && (
              <CitationPopover
                title={title}
                doi={doiValue}
                boilerplateText={citationBoilerplateText}
                defaultCitationFormat={defaultCitationFormat}
              />
            )}
            {includeShareButton && isHeader && (
              <ShareThisPage {...sharePageLinkButtonProps} />
            )}
          </Box>
        </CardActionButtonStyleContext.Provider>
      }
    />
  )
}

export default TableRowGenericCard
