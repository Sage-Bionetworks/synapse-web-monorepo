import { CommonCardProps } from '@/components/CardContainer/CardConfiguration'
import { CardLink } from '@/components/CardContainer/CardLink'
import { GenericCardIcon } from '@/components/GenericCard/GenericCardIcon'
import { useGetEntity } from '@/synapse-queries'
import { SynapseConstants } from '@/utils'
import { calculateFriendlyFileSize } from '@/utils/functions/calculateFriendlyFileSize'
import {
  isDatasetCollection,
  isTableEntity,
} from '@/utils/functions/EntityTypeUtils'
import { PRODUCTION_ENDPOINT_CONFIG } from '@/utils/functions/getEndpoint'
import {
  convertDoiToLink,
  SYNAPSE_ENTITY_ID_REGEX,
} from '@/utils/functions/RegularExpressions'
import { getColumnIndex } from '@/utils/functions/SqlFunctions'
import { GetAppTwoTone } from '@mui/icons-material'
import { Collapse } from '@mui/material'
import {
  ColumnModel,
  ColumnType,
  ColumnTypeEnum,
  Entity,
  FileHandleAssociateType,
  FileHandleAssociation,
  SelectColumn,
  Table,
} from '@sage-bionetworks/synapse-types'
import React, { useState } from 'react'
import { TargetEnum } from '../CardContainerLogic'
import CitationPopover from '../CitationPopover'
import { EntityDownloadConfirmation } from '../EntityDownloadConfirmation'
import { HeaderCardVariant } from '../HeaderCard'
import IconList from '../IconList'
import { useQueryContext } from '../QueryContext'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import GenericCard from './GenericCard'
import GenericCardActionButton from './GenericCardActionButton'
import { SynapseCardLabel } from './SynapseCardLabel'

/**
 * Maps a table query result to a GenericCard.
 */
export type TableToGenericCardMapping = {
  /** The 'type' of resource a card refers to. Renders a label on the card with this string value */
  type: string
  /** The column name whose data contains the title of the card */
  title: string
  /** The column name whose data contains the subtitle of the card */
  subTitle?: string
  /** The column name whose data contains the description of the card */
  description?: string
  /** If true, a 'Cite As' button will be displayed for those cards with a DOI in the 'doi' column  */
  includeCitation?: boolean
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
    value: string
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
  /** The column name whose data contains a synId that can be used to show a button to add the corresponding entity to the download cart. */
  downloadCartSynId?: string
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
} & CommonCardProps

export const getFileHandleAssociation = (
  table?: Entity,
  fileHandleId?: string,
  rowSynapseId?: string, // only applicable if this is an EntityView
) => {
  let fileHandleAssociation: FileHandleAssociation | undefined = undefined
  if (table && fileHandleId) {
    if (isTableEntity(table)) {
      // The file handle is in the table
      fileHandleAssociation = {
        fileHandleId,
        associateObjectId: table?.id ?? '',
        associateObjectType: FileHandleAssociateType.TableEntity,
      }
    } else if (rowSynapseId) {
      // We're looking at a view, so the FileEntity (whose ID matches the row ID) gives permission to download the file handle
      fileHandleAssociation = {
        fileHandleId,
        associateObjectId: rowSynapseId,
        associateObjectType: FileHandleAssociateType.FileEntity,
      }
    }
  }
  return fileHandleAssociation
}

export const getValueOrMultiValue = ({
  columnName,
  value,
  selectColumns,
  columnModels,
}: {
  columnName?: string
  value?: string
  selectColumns?: SelectColumn[]
  columnModels?: ColumnModel[]
}): ValueOrMultiValue => {
  if (!value) {
    return {
      str: '',
      strList: undefined,
      columnModelType: undefined,
    }
  }
  const selectedColumnOrUndefined =
    selectColumns?.find(el => el.name === columnName) ||
    columnModels?.find(el => el.name === columnName)
  const isMultiValue = selectedColumnOrUndefined?.columnType.endsWith('_LIST')

  if (isMultiValue) {
    let val: any = value
    let strList: any
    try {
      strList = JSON.parse(val)
      val = (strList as string[]).join(', ')
      return {
        strList,
        str: val,
        columnModelType: selectedColumnOrUndefined?.columnType,
      }
    } catch (e) {
      console.error(
        'Could not parse multivalue string ',
        val,
        ' caught err ',
        e,
      )
    }
  }
  return { str: value, columnModelType: selectedColumnOrUndefined?.columnType }
}

// SWC-6115: special rendering of the version column (for Views)
export function VersionLabel(props: { synapseId: string; version: string }) {
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

type ValueOrMultiValue = {
  str: string
  strList?: string[]
  columnModelType?: ColumnType
}

export function getCardLinkHref(
  cardLink: CardLink | undefined,
  data: string[] | undefined,
  schema?: Record<string, number>,
  rowId?: number,
): string | undefined {
  if (cardLink) {
    if (!data || !schema) {
      throw Error('Must specify CardLink and data for linking to work')
    }
    const { matchColumnName, overrideValueWithRowID } = cardLink

    // PORTALS-2088:  Return the link, unless...
    // an overrideLinkURLColumnName has been set and its value is defined.
    // In this case, just use the overrideLinkURLColumnName value
    if ('overrideLinkURLColumnName' in cardLink) {
      const { overrideLinkURLColumnName, overrideLinkURLColumnTransform } =
        cardLink
      if (schema[overrideLinkURLColumnName]) {
        const indexOfOverrideLinkURLColumnName =
          schema[overrideLinkURLColumnName]
        const overrideLinkValue = data[indexOfOverrideLinkURLColumnName]
        if (overrideLinkValue && overrideLinkURLColumnTransform) {
          return overrideLinkURLColumnTransform(overrideLinkValue)
        } else if (overrideLinkValue) {
          return overrideLinkValue
        }
      }
    }

    const indexInData = schema[matchColumnName]
    if (indexInData === undefined) {
      console.error(
        `Could not find match for data: ${data} with columnName ${matchColumnName}`,
      )
    } else if ('baseURL' in cardLink) {
      const { baseURL, URLColumnName } = cardLink
      const value = overrideValueWithRowID ? `syn${rowId}` : data[indexInData]
      if (value) {
        // value is defined!
        return `/${baseURL}?${URLColumnName}=${encodeURIComponent(value)}`
      }
    }
  }
  return undefined
}

export function getLinkParams(
  link: string,
  cardLinkConfig: CardLink | undefined,
  data: string[] | undefined,
  schema?: Record<string, number>,
  rowId?: number,
) {
  link = link.trim()
  let href = link
  const doiLink = convertDoiToLink(href)
  let defaultTarget = TargetEnum.CURRENT_WINDOW
  if (link.match(SYNAPSE_ENTITY_ID_REGEX)) {
    // its a synId
    href = `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}Synapse:${link}`
  } else if (doiLink) {
    defaultTarget = TargetEnum.NEW_WINDOW
    href = doiLink
  } else if (!cardLinkConfig) {
    defaultTarget = TargetEnum.NEW_WINDOW
  } else if (cardLinkConfig) {
    href = getCardLinkHref(cardLinkConfig, data, schema, rowId) ?? ''
    if (href.includes('/DetailsPage')) {
      defaultTarget = TargetEnum.NEW_WINDOW
    }
  }

  const target = cardLinkConfig?.target ?? defaultTarget
  return { href, target }
}

/**
 * Maps a table row to a GenericCard.
 */
export function TableRowGenericCard(props: TableRowGenericCardProps) {
  const [showDownloadConfirmation, setShowDownloadConfirmation] =
    useState(false)
  const [downloadButtonDisabled, setDownloadButtonDisabled] = useState(false)

  const { entityId, versionNumber } = useQueryContext()
  const { getColumnDisplayName } = useQueryVisualizationContext()

  const { data: table } = useGetEntity<Table>(entityId, versionNumber)

  const {
    schema,
    data,
    rowId,
    genericCardSchema,
    secondaryLabelLimit,
    selectColumns,
    columnModels,
    iconOptions,
    useTypeColumnForIcon = false,
    isHeader = false,
    headerCardVariant,
    titleLinkConfig,
    ctaLinkConfig,
    labelLinkConfig,
    descriptionConfig,
    columnIconOptions,
  } = props

  const {
    link = '',
    type,
    includeCitation,
    defaultCitationFormat,
    citationBoilerplateText,
    downloadCartSynId,
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
  const values: {
    columnDisplayName: string
    value: React.ReactNode
    columnName?: string
  }[] = []
  const { secondaryLabels = [] } = genericCardSchema
  const customLabelConfig = genericCardSchema.customSecondaryLabelConfig

  if (customLabelConfig?.isVisible(schema, data)) {
    const { key, value } = customLabelConfig
    values.push({ columnDisplayName: key, value })
  }

  const isView = table && !isTableEntity(table)
  for (let i = 0; i < secondaryLabels.length; i += 1) {
    const columnName = secondaryLabels[i]
    const rawValue: string | undefined = data[schema[columnName]]
    let renderedValue: React.ReactNode = rawValue
    let columnDisplayName
    if (renderedValue) {
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

  let downloadCartSynIdColumnIndex: number | undefined
  let downloadCartSynIdValue: string | undefined
  if (downloadCartSynId) {
    downloadCartSynIdColumnIndex = schema[downloadCartSynId]
    downloadCartSynIdValue =
      downloadCartSynIdColumnIndex !== undefined
        ? data[downloadCartSynIdColumnIndex]
        : undefined
  }
  downloadCartSynIdValue = downloadCartSynIdValue?.match(
    /syn\d+/i, // regex to extract the synapse ID from the URL
  )?.[0]
  let ctaHref: string | undefined = undefined,
    ctaTarget: string | undefined = undefined
  if (ctaLinkConfig) {
    const ctaLinkValue: string = data[schema[ctaLinkConfig.link]] || ''
    const { href: newCtaHref, target: newCtaTarget } = getLinkParams(
      ctaLinkValue,
      undefined, //card link config
      data,
      schema,
      rowId,
    )
    ctaHref = newCtaHref
    ctaTarget = newCtaTarget
  }

  return (
    <GenericCard
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
          {/* PORTALS-3386 Use synapseLink in schema to add entity to download cart */}
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
    />
  )
}

export default TableRowGenericCard
