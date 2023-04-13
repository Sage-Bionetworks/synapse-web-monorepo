import { isEmpty } from 'lodash-es'
import React from 'react'
import { SynapseConstants } from '../utils'
import { isTableEntity } from '../utils/functions/EntityTypeUtils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../utils/functions/getEndpoint'
import {
  DOI_REGEX,
  SYNAPSE_ENTITY_ID_REGEX,
} from '../utils/functions/RegularExpressions'
import { SMALL_USER_CARD } from '../utils/SynapseConstants'
import { SynapseContext } from '../utils/SynapseContext'
import {
  ColumnModel,
  ColumnType,
  ColumnTypeEnum,
  Entity,
  FileHandleAssociateType,
  FileHandleAssociation,
  Row,
  SelectColumn,
} from '../utils/synapseTypes'
import { Tooltip } from '@mui/material'
import {
  CardLink,
  ColumnIconConfigs,
  ColumnSpecifiedLink,
  CommonCardProps,
  DescriptionConfig,
  MarkdownLink,
  TargetEnum,
} from './CardContainerLogic'
import HeaderCard from './HeaderCard'
import IconList from './IconList'
import IconSvg, { type2SvgIconName } from './IconSvg'
import MarkdownSynapse from './markdown/MarkdownSynapse'
import { QueryContextType } from './QueryContext'
import { CardFooter, Icon } from './row_renderers/utils'
import UserCard from './UserCard'
import { FileHandleLink } from './widgets/FileHandleLink'
import { ImageFileHandle } from './widgets/ImageFileHandle'
import { QueryVisualizationContextType } from './QueryVisualizationWrapper'
import { IconOptions } from './row_renderers/utils/Icon'

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

export type GenericCardProps = {
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
  tableId: string | undefined
  columnIconOptions?: ColumnIconConfigs
  queryContext: QueryContextType
  queryVisualizationContext: QueryVisualizationContextType
} & CommonCardProps

export type GenericCardState = {
  hasClickedShowMore: boolean
}

const CHAR_COUNT_CUTOFF = 400
export const CARD_SHORT_DESCRIPTION_CSS = 'SRC-short-description'
export const CARD_LONG_DESCRIPTION_CSS = 'SRC-long-description'

// This function isn't in the class only for ease of testing with renderShortDescription
export const getCutoff = (summary: string) => {
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

type SynapseCardLabelProps = {
  value: string
  columnName: string
  labelLink: CardLink | MarkdownLink | ColumnSpecifiedLink | undefined
  selectColumns: SelectColumn[] | undefined
  columnModels: ColumnModel[] | undefined
  isHeader: boolean
  className?: string
  rowData: Row['values']
  rowId?: number
}

export const SynapseCardLabel: React.FC<SynapseCardLabelProps> = props => {
  const {
    value,
    columnName,
    labelLink,
    selectColumns,
    columnModels,
    isHeader,
    className,
    rowData,
    rowId,
  } = props
  if (!value) {
    return <p>{value}</p>
  }
  const { strList, str, columnModelType } = getValueOrMultiValue({
    columnName,
    value,
    selectColumns,
    columnModels,
  })

  if (!str) {
    // the array came back empty
    return <p>{str}</p>
  }

  let newClassName = className
  const style: React.CSSProperties = {}
  if (isHeader) {
    newClassName = className?.concat(' ', 'SRC-lightLink')
  }
  // PORTALS-1913: special rendering for user ID lists
  if (columnModelType === ColumnTypeEnum.USERID_LIST && strList) {
    return (
      <p>
        {strList.map((val: string, index: number) => {
          return (
            <React.Fragment key={val}>
              <UserCard
                ownerId={val}
                size={SMALL_USER_CARD}
                className={newClassName}
              />
              {/* \u00a0 is a nbsp; */}
              {index < strList.length - 1 && ',\u00a0\u00a0'}
            </React.Fragment>
          )
        })}
      </p>
    )
  }
  if (columnModelType === ColumnTypeEnum.USERID && str) {
    return (
      <UserCard ownerId={str} size={SMALL_USER_CARD} className={newClassName} />
    )
  }

  if (!labelLink) {
    // if this looks like a Synapse ID, then autolink.
    if (str.match(SYNAPSE_ENTITY_ID_REGEX)) {
      // its a synId
      return (
        <a
          target={TargetEnum.NEW_WINDOW}
          rel="noopener noreferrer"
          href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${str}`}
          className={newClassName}
        >
          {str}
        </a>
      )
    } else {
      // they don't need a link
      return <p>{str}</p>
    }
  }

  let labelContent: JSX.Element
  if (labelLink.isMarkdown) {
    if (strList) {
      labelContent = (
        <p>
          {strList.map((el, index) => {
            return (
              <React.Fragment key={el}>
                <MarkdownSynapse key={el} renderInline={true} markdown={el} />
                {/* \u00a0 is a nbsp; */}
                {index < strList.length - 1 && ',\u00a0\u00a0'}
              </React.Fragment>
            )
          })}
        </p>
      )
    } else {
      labelContent = <MarkdownSynapse renderInline={true} markdown={value} />
    }
  } else {
    const split = strList ? strList : str.split(',')
    let linkTarget: TargetEnum | undefined = undefined
    if ('target' in labelLink) {
      linkTarget = labelLink.target!
    }
    if ('linkColumnName' in labelLink) {
      const linkIndex = getColumnIndex(
        labelLink.linkColumnName,
        selectColumns,
        columnModels,
      )
      if (linkIndex == null) {
        console.warn(
          `Could not determine column index of ${labelLink.linkColumnName}`,
        )
        labelContent = <>{value}</>
      } else {
        const href = rowData[linkIndex]

        if (isEmpty(href)) {
          labelContent = <>{value}</>
        } else {
          labelContent = (
            <p>
              {split.map((el, index) => {
                return (
                  <React.Fragment key={el}>
                    <a
                      href={href ?? undefined}
                      target={linkTarget ?? TargetEnum.NEW_WINDOW}
                      rel="noopener noreferrer"
                      key={el}
                      className={newClassName}
                      style={style}
                    >
                      {el}
                    </a>
                    {index < split.length - 1 && (
                      <span style={{ marginRight: 4 }}>, </span>
                    )}
                  </React.Fragment>
                )
              })}
            </p>
          )
        }
      }
    } else {
      labelContent = (
        <p>
          {split.map((el, index) => {
            const { baseURL, URLColumnName, wrapValueWithParens } = labelLink
            const elOrRowId = labelLink.overrideValueWithRowID
              ? `syn${rowId}`
              : el
            const value = wrapValueWithParens ? `(${elOrRowId})` : elOrRowId
            const href = `/${baseURL}?${URLColumnName}=${value}`

            return (
              <React.Fragment key={el}>
                <a
                  href={href}
                  key={el}
                  className={newClassName}
                  style={style}
                  target={linkTarget ?? TargetEnum.CURRENT_WINDOW}
                >
                  {el}
                </a>
                {index < split.length - 1 && (
                  <span style={{ marginRight: 4 }}>, </span>
                )}
              </React.Fragment>
            )
          })}
        </p>
      )
    }
  }

  if (labelLink.tooltipText) {
    // wrap in a tooltip
    return (
      <Tooltip title={labelLink.tooltipText} enterNextDelay={300}>
        <span>{labelContent}</span>
      </Tooltip>
    )
  } else {
    return labelContent
  }
}

type ValueOrMultiValue = {
  str: string
  strList?: string[]
  columnModelType?: ColumnType
}

export function getCardLinkHref(
  cardLink: CardLink | undefined,
  data: string[] | undefined,
  schema: Record<string, number> | undefined,
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
  schema: any | undefined,
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

export function LongDescription(props: {
  description: string
  hasClickedShowMore: boolean
  descriptionSubTitle: any
  descriptionConfig?: DescriptionConfig
}) {
  const {
    description,
    hasClickedShowMore,
    descriptionSubTitle,
    descriptionConfig,
  } = props
  let content: JSX.Element | string = description
  if (descriptionConfig?.isMarkdown) {
    content = <MarkdownSynapse markdown={content} />
  }
  const show =
    hasClickedShowMore || descriptionConfig?.showFullDescriptionByDefault
  return (
    <div className={show ? '' : 'SRC-hidden'}>
      <span
        data-search-handle={descriptionSubTitle}
        className={`SRC-font-size-base ${CARD_LONG_DESCRIPTION_CSS}`}
      >
        {content}
      </span>
    </div>
  )
}

export function ShortDescription(props: {
  description: string
  hasClickedShowMore: boolean
  descriptionSubTitle: any
  descriptionConfig?: DescriptionConfig
  toggleShowMore: () => void
}) {
  const {
    description,
    hasClickedShowMore,
    descriptionSubTitle,
    descriptionConfig,
    toggleShowMore,
  } = props
  if (descriptionConfig?.showFullDescriptionByDefault) {
    return <></>
  }
  return (
    <div className={hasClickedShowMore ? 'SRC-hidden' : ''}>
      <span
        data-search-handle={descriptionSubTitle}
        className={`SRC-font-size-base ${CARD_SHORT_DESCRIPTION_CSS} SRC-short-description`}
      >
        {getCutoff(description).previewText}
      </span>
      {description.length >= CHAR_COUNT_CUTOFF && (
        <a
          style={{
            fontSize: '16px',
            cursor: 'pointer',
            marginLeft: '5px',
          }}
          className="highlight-link"
          onClick={toggleShowMore}
        >
          ...Show More
        </a>
      )}
    </div>
  )
}

/**
 * Renders a card from a table query
 */
export default class GenericCard extends React.Component<
  GenericCardProps,
  GenericCardState
> {
  static contextType = SynapseContext

  constructor(props: GenericCardProps) {
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
        <a
          data-search-handle={titleSearchHandle}
          target={target}
          href={href}
          className="highlight-link"
        >
          {title}
        </a>
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
      queryContext: { entity: table },
      queryVisualizationContext: { getColumnDisplayName },
    } = this.props
    // GenericCard inherits properties from CommonCardProps so that the properties have the same name
    // and type, but theres one nuance which is that we can't override if one specific property will be
    // defined, so we assert genericCardSchema is not null and assign to genericCardSchemaDefined
    const genericCardSchemaDefined = genericCardSchema!
    const { hasClickedShowMore } = this.state
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
        // SWC-6115: special rendering of the version column (for Views)
        if (isView && columnName === 'currentVersion') {
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
            <IconSvg icon={type2SvgIconName[data[schema['type']]]} />
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
      genericCardSchemaDefined.subTitle,
    )
    const descriptionSubTitle = getColumnDisplayName(
      genericCardSchemaDefined.description,
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
            {/* 
              Below is a hack that allows word highlighting to work, the Search component insert's
              html elements outside of the React DOM which if detected would break the app,
              but as written below this avoids that reconcilliation process.
            */}
            {description && (
              <ShortDescription
                description={description}
                hasClickedShowMore={hasClickedShowMore}
                descriptionSubTitle={descriptionSubTitle}
                descriptionConfig={descriptionConfig}
                toggleShowMore={this.toggleShowMore}
              />
            )}
            {description && (
              <LongDescription
                description={description}
                hasClickedShowMore={hasClickedShowMore}
                descriptionSubTitle={descriptionSubTitle}
                descriptionConfig={descriptionConfig}
              />
            )}
            {ctaLinkConfig && ctaHref && ctaTarget && (
              <div className="SRC-portalCardCTALink bootstrap-4-backport">
                <a target={ctaTarget} rel="noopener noreferrer" href={ctaHref}>
                  {ctaLinkConfig.text}
                </a>
              </div>
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
