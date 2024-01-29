import React from 'react'
import { SynapseConstants, SynapseContext } from '../../utils'
import {
  isDatasetCollection,
  isTableEntity,
} from '../../utils/functions/EntityTypeUtils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import {
  DOI_REGEX,
  SYNAPSE_ENTITY_ID_REGEX,
} from '../../utils/functions/RegularExpressions'
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
import { Box, Link } from '@mui/material'
import {
  CardLink,
  ColumnIconConfigs,
  CommonCardProps,
  TargetEnum,
} from '../CardContainerLogic'
import HeaderCard from '../HeaderCard'
import IconList from '../IconList'
import IconSvg, { type2SvgIconName } from '../IconSvg/IconSvg'
import { CardFooter, Icon } from '../row_renderers/utils'
import { FileHandleLink } from '../widgets/FileHandleLink'
import { ImageFileHandle } from '../widgets/ImageFileHandle'
import {
  QueryVisualizationContextType,
  useQueryVisualizationContext,
} from '../QueryVisualizationWrapper'
import { IconOptions } from '../Icon'
import { calculateFriendlyFileSize } from '../../utils/functions/calculateFriendlyFileSize'
import { SynapseCardLabel } from './SynapseCardLabel'
import { useAtomValue } from 'jotai'
import { tableQueryEntityAtom } from '../QueryWrapper/QueryWrapper'
import {
  CHAR_COUNT_CUTOFF,
  CollapsibleDescription,
} from './CollapsibleDescription'

export type KeyToAlias = {
  key: string
  alias?: string
}

export type KeyToAliasMap = {
  [index: number]: KeyToAlias
  [index: string]: KeyToAlias
}

export type GenericCardSchema = {
  type: string
  title: string
  subTitle?: string
  description?: string
  icon?: string
  imageFileHandleColumnName?: string
  thumbnailRequiresPadding?: boolean
  secondaryLabels?: string[]
  link?: string
  dataTypeIconNames?: string
}

export type GenericCardPropsInternal = {
  selectColumns?: SelectColumn[]
  columnModels?: ColumnModel[]
  iconOptions?: IconOptions
  useTypeColumnForIcon?: boolean
  isHeader?: boolean
  isAlignToLeftNav?: boolean
  // Maps columnName to index
  schema: Record<string, number>
  // Row values
  data: string[]
  rowId?: number
  columnIconOptions?: ColumnIconConfigs
  table: Table | undefined
  queryVisualizationContext: QueryVisualizationContextType
} & CommonCardProps

export type GenericCardProps = Omit<
  GenericCardPropsInternal,
  'table' | 'queryVisualizationContext'
>

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

export const getColumnIndex = (
  columnName?: string,
  selectColumns?: SelectColumn[],
  columnModels?: ColumnModel[],
): number | undefined => {
  return (
    selectColumns?.findIndex(el => el.name === columnName) ||
    columnModels?.findIndex(el => el.name === columnName)
  )
}

// SWC-6115: special rendering of the version column (for Views)
export const VersionLabel: React.FC<{
  synapseId: string
  version: string
}> = props => {
  const { synapseId, version } = props
  return (
    <span>
      {version}&nbsp;&nbsp;
      <a
        target={TargetEnum.NEW_WINDOW}
        rel="noopener noreferrer"
        href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${synapseId}.${version}`}
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
    const {
      matchColumnName,
      URLColumnName,
      overrideLinkURLColumnName,
      overrideValueWithRowID,
    } = cardLink

    // PORTALS-2088:  Return the link, unless...
    // an overrideLinkURLColumnName has been set and it's value is defined.
    // In this case, just use the overrideLinkURLColumnName value
    if (overrideLinkURLColumnName && schema[overrideLinkURLColumnName]) {
      const indexOfOverrideLinkURLColumnName = schema[overrideLinkURLColumnName]
      const overrideLinkValue = data[indexOfOverrideLinkURLColumnName]
      if (overrideLinkValue) {
        return overrideLinkValue
      }
    }

    const indexInData = schema[matchColumnName]
    if (indexInData === undefined) {
      console.error(
        `Could not find match for data: ${data} with columnName ${matchColumnName}`,
      )
    } else {
      const value = overrideValueWithRowID ? `syn${rowId}` : data[indexInData]
      if (value) {
        // value is defined!
        return `/${cardLink.baseURL}?${URLColumnName}=${value}`
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
  let defaultTarget = TargetEnum.CURRENT_WINDOW
  if (link.match(SYNAPSE_ENTITY_ID_REGEX)) {
    // its a synId
    href = `${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${link}`
  } else if (link.match(DOI_REGEX)) {
    defaultTarget = TargetEnum.NEW_WINDOW
    href = `https://dx.doi.org/${link}`
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
 * Renders a card from a table query
 */
class _GenericCard extends React.Component<GenericCardPropsInternal> {
  static contextType = SynapseContext

  constructor(props: GenericCardPropsInternal) {
    super(props)
    this.state = {
      hasClickedShowMore: false,
    }
  }

  getCutoff = (summary: string) => {
    let previewText = ''
    const summarySplit = summary.split(' ')
    // find num words to join such that its >= char_count_cutoff
    let i = 0
    while (previewText.length < CHAR_COUNT_CUTOFF && i < summarySplit.length) {
      previewText += `${summarySplit[i]} `
      i += 1
    }
    previewText = previewText.trim()
    return { previewText }
  }

  toggleShowMore = () => {
    this.setState({
      hasClickedShowMore: true,
    })
  }

  renderTitle = ({
    href,
    target,
    titleSearchHandle,
    title,
  }: {
    target: string
    titleSearchHandle: string | undefined
    title: string
    href: string
  }) => {
    if (href) {
      return (
        <Link
          data-search-handle={titleSearchHandle}
          target={target}
          href={href}
        >
          {title}
        </Link>
      )
    } else {
      return <span data-search-handle={titleSearchHandle}> {title} </span>
    }
  }

  render() {
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
      titleLinkConfig,
      ctaLinkConfig,
      labelLinkConfig,
      descriptionConfig,
      rgbIndex,
      columnIconOptions,
      table,
      queryVisualizationContext: { getColumnDisplayName },
    } = this.props
    // GenericCard inherits properties from CommonCardProps so that the properties have the same name
    // and type, but theres one nuance which is that we can't override if one specific property will be
    // defined, so we assert genericCardSchema is not null and assign to genericCardSchemaDefined
    const genericCardSchemaDefined = genericCardSchema!
    const { link = '', type } = genericCardSchemaDefined
    const title = data[schema[genericCardSchemaDefined.title]]
    let subTitle =
      genericCardSchemaDefined.subTitle &&
      data[schema[genericCardSchemaDefined.subTitle]]
    subTitle =
      genericCardSchemaDefined?.subTitle &&
      getValueOrMultiValue({
        value: subTitle,
        columnName: genericCardSchemaDefined?.subTitle,
        selectColumns,
        columnModels,
      }).str
    const description = data[schema[genericCardSchemaDefined.description || '']]
    const iconValue = data[schema[genericCardSchemaDefined.icon || '']]
    const dataTypeIconNames =
      data[schema[genericCardSchemaDefined.dataTypeIconNames || '']]
    const imageFileHandleIdValue =
      data[schema[genericCardSchemaDefined.imageFileHandleColumnName || '']]
    const titleColumnModel = columnModels?.find(
      el => genericCardSchemaDefined.link === el.name,
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
    const values: string[][] = []
    const { secondaryLabels = [] } = genericCardSchemaDefined
    const isView = table && !isTableEntity(table)
    for (let i = 0; i < secondaryLabels.length; i += 1) {
      const columnName = secondaryLabels[i]
      let value: any = data[schema[columnName]]
      let columnDisplayName
      if (value) {
        // PORTALS-2750: special rendering of the datasetSizeInBytes (for Dataset Collections)
        if (
          isDatasetCollection(table as Entity) &&
          columnName === 'datasetSizeInBytes'
        ) {
          columnDisplayName = 'Size'
          value = calculateFriendlyFileSize(parseInt(value))
        } // SWC-6115: special rendering of the version column (for Views)
        else if (isView && columnName === 'currentVersion') {
          const synapseId = data[schema.id]
          const version = value
          value = VersionLabel({ synapseId, version })
          columnDisplayName = 'Version'
        } else {
          const labelLink = labelLinkConfig?.find(
            el => el.matchColumnName === columnName,
          )
          value = (
            <SynapseCardLabel
              value={value}
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
        const keyValue = [columnDisplayName, value, columnName]
        values.push(keyValue)
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

    const showFooter = values.length > 0

    const style: React.CSSProperties = {
      // undefined, take default value from class
      marginTop: isHeader ? '0px' : undefined,
      marginBottom: isHeader ? '0px' : undefined,
      paddingBottom: showFooter || imageFileHandleIdValue ? undefined : '15px',
    }
    const icon: JSX.Element = (
      <>
        {!useTypeColumnForIcon && imageFileHandleIdValue && (
          <div
            className="SRC-imageThumbnail"
            style={{
              padding: genericCardSchemaDefined.thumbnailRequiresPadding
                ? '21px'
                : undefined,
            }}
          >
            {fileHandleAssociation && (
              <ImageFileHandle fileHandleAssociation={fileHandleAssociation} />
            )}
          </div>
        )}
        {!useTypeColumnForIcon && !imageFileHandleIdValue && (
          <div className="SRC-cardThumbnail">
            <Icon iconOptions={iconOptions} value={iconValue} type={type} />
          </div>
        )}
        {useTypeColumnForIcon && (
          <div className="SRC-cardThumbnail">
            <IconSvg
              icon={
                type2SvgIconName[
                  data[schema['type']] as keyof typeof type2SvgIconName
                ]
              }
            />
          </div>
        )}
      </>
    )

    if (isHeader) {
      return (
        <HeaderCard
          descriptionConfig={descriptionConfig}
          title={title}
          subTitle={subTitle}
          description={description}
          type={type}
          icon={icon}
          values={values}
          href={href}
          target={target}
          isAlignToLeftNav={true}
          secondaryLabelLimit={secondaryLabelLimit}
          rgbIndex={rgbIndex}
        />
      )
    }

    const titleSearchHandle = getColumnDisplayName(
      genericCardSchemaDefined.title,
    )
    const stubTitleSearchHandle = getColumnDisplayName(
      genericCardSchemaDefined.subTitle || '',
    )
    const descriptionSubTitle = getColumnDisplayName(
      genericCardSchemaDefined.description || '',
    )

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
      <div style={style} className={'SRC-portalCard'}>
        <div className={'SRC-portalCardMain'}>
          {icon}
          <div className="SRC-cardContent">
            <div className="SRC-type">{type}</div>
            {
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
            <div>
              <h3
                className="SRC-boldText SRC-blackText"
                style={{ margin: 'none' }}
              >
                {!titleLinkConfig &&
                titleColumnType === ColumnTypeEnum.FILEHANDLEID &&
                fileHandleAssociation ? (
                  <FileHandleLink
                    fileHandleAssociation={fileHandleAssociation}
                    showDownloadIcon={type !== SynapseConstants.EXPERIMENTAL}
                    displayValue={title}
                  />
                ) : (
                  this.renderTitle({
                    href,
                    target,
                    titleSearchHandle,
                    title,
                  })
                )}
              </h3>
            </div>
            {subTitle && (
              <div
                data-search-handle={stubTitleSearchHandle}
                className="SRC-author"
              >
                {subTitle}
              </div>
            )}
            <CollapsibleDescription
              description={description}
              descriptionSubTitle={descriptionSubTitle}
              descriptionConfig={descriptionConfig}
            />
            {ctaLinkConfig && ctaHref && ctaTarget && (
              <Box sx={{ mt: '20px' }}>
                <Link
                  target={ctaTarget}
                  rel="noopener noreferrer"
                  href={ctaHref}
                >
                  {ctaLinkConfig.text}
                </Link>
              </Box>
            )}
          </div>
        </div>
        {showFooter && (
          <CardFooter
            isHeader={false}
            secondaryLabelLimit={secondaryLabelLimit}
            values={values}
            columnIconOptions={columnIconOptions}
            className={`${imageFileHandleIdValue ? 'hasImage' : 'hasIcon'}`}
          />
        )}
      </div>
    )
  }
}

export default function GenericCard(props: GenericCardProps) {
  const table = useAtomValue(tableQueryEntityAtom)
  const queryVisualizationContext = useQueryVisualizationContext()
  return (
    <_GenericCard
      {...props}
      table={table}
      queryVisualizationContext={queryVisualizationContext}
    />
  )
}
