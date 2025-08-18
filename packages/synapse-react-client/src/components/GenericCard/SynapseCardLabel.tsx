import { CardLink } from '@/components/CardContainer/CardLink'
import { getValueOrMultiValue } from '@/components/GenericCard/CardUtils'
import { formatDate } from '@/utils/functions/DateFormatter'
import { getColumnIndex } from '@/utils/functions/index'
import { Link, Tooltip } from '@mui/material'
import {
  ColumnModel,
  ColumnTypeEnum,
  Row,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import { isEmpty } from 'lodash-es'
import { CSSProperties, Fragment, ReactNode } from 'react'
import { ColumnSpecifiedLink, MarkdownLink } from '../CardContainerLogic'
import { TargetEnum } from '@/utils/html/TargetEnum'
import {
  EntityImage,
  MapValueToReactComponentConfig,
} from '../CardContainerLogic/CardContainerLogic'
import { EntityLink } from '../EntityLink'
import MarkdownSynapse from '../Markdown/MarkdownSynapse'
import { UserBadge } from '../UserCard/UserBadge'
import { EntityColumnImage } from '../widgets/EntityColumnImage'
import Linkify from './Linkify'

type SynapseCardLabelProps = {
  value: string
  columnName: string
  labelLink:
    | CardLink
    | MarkdownLink
    | ColumnSpecifiedLink
    | EntityImage
    | MapValueToReactComponentConfig
    | undefined
  selectColumns: SelectColumn[] | undefined
  columnModels: ColumnModel[] | undefined
  isHeader: boolean
  className?: string
  rowData: Row['values']
  rowId?: string
}
export function SynapseCardLabel(props: SynapseCardLabelProps) {
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
  const { strList, str, selectColumn } = getValueOrMultiValue({
    columnName,
    value,
    selectColumns,
    columnModels,
  })

  const columnModelType = selectColumn?.columnType

  if (!str) {
    // the array came back empty
    return <p>{str}</p>
  }

  let newClassName = className
  const style: CSSProperties = {}
  if (isHeader) {
    newClassName = className?.concat(' ', 'SRC-lightLink')
  }
  // PORTALS-1913: special rendering for user ID lists
  if (columnModelType === ColumnTypeEnum.USERID_LIST && strList) {
    return (
      <p>
        {strList.map((val: string, index: number) => {
          return (
            <Fragment key={val}>
              <UserBadge userId={val} className={newClassName} />
              {/* \u00a0 is a nbsp; */}
              {index < strList.length - 1 && ',\u00a0\u00a0'}
            </Fragment>
          )
        })}
      </p>
    )
  }
  if (columnModelType === ColumnTypeEnum.USERID && str) {
    return <UserBadge userId={str} className={newClassName} />
  }

  // NFINT-906
  if (columnModelType === ColumnTypeEnum.DATE && str) {
    return <p>{formatDate(dayjs(Number(str)))}</p>
  }

  if (!labelLink) {
    return <Linkify text={str} className={newClassName} />
  }

  if ('resolveEntityName' in labelLink && labelLink.resolveEntityName && str) {
    const { baseURL, URLColumnName } = labelLink
    const href = `/${baseURL}?${URLColumnName}=${str}`
    return <EntityLink entity={str} link={href} showIcon={false} />
  }

  let labelContent: ReactNode

  if (
    'isMapValueToReactNodeConfig' in labelLink &&
    labelLink.isMapValueToReactNodeConfig
  ) {
    const { Component } = labelLink
    labelContent = (
      <Component value={strList || str} selectColumn={selectColumn!} />
    )
  } else if ('isMarkdown' in labelLink && labelLink.isMarkdown) {
    if (strList) {
      labelContent = (
        <p>
          {strList.map((el, index) => {
            return (
              <Fragment key={el}>
                <MarkdownSynapse key={el} renderInline={true} markdown={el} />
                {/* \u00a0 is a nbsp; */}
                {index < strList.length - 1 && ',\u00a0\u00a0'}
              </Fragment>
            )
          })}
        </p>
      )
    } else {
      labelContent = <MarkdownSynapse renderInline={true} markdown={value} />
    }
  } else if ('isEntityImage' in labelLink && labelLink.isEntityImage) {
    if (strList) {
      labelContent = (
        <p>
          {strList.map((el, index) => {
            return (
              <Fragment key={el}>
                <EntityColumnImage entityId={el} />

                {/* \u00a0 is a nbsp; */}
                {index < strList.length - 1 && ',\u00a0\u00a0'}
              </Fragment>
            )
          })}
        </p>
      )
    } else {
      labelContent = <EntityColumnImage entityId={value} />
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
                  <Fragment key={el}>
                    <Link
                      href={href ?? undefined}
                      target={linkTarget ?? TargetEnum.NEW_WINDOW}
                      rel="noopener noreferrer"
                      key={el}
                      className={newClassName}
                      style={style}
                    >
                      {el}
                    </Link>
                    {index < split.length - 1 && (
                      <span style={{ marginRight: 4 }}>, </span>
                    )}
                  </Fragment>
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
            const cardLink = labelLink as CardLink
            const elOrRowId = cardLink.overrideValueWithRowID ? rowId : el
            let href = ''
            if ('baseURL' in cardLink) {
              const { baseURL, URLColumnName, wrapValueWithParens } = cardLink
              const value = wrapValueWithParens ? `(${elOrRowId})` : elOrRowId
              href = `/${baseURL}?${URLColumnName}=${value}`
            } else if ('overrideLinkURLColumnName' in cardLink) {
              const overrideHrefIndex = getColumnIndex(
                cardLink.overrideLinkURLColumnName,
                selectColumns,
                columnModels,
              )
              if (overrideHrefIndex) {
                const overrideHrefData = rowData[overrideHrefIndex]
                if (overrideHrefData) {
                  if (cardLink.overrideLinkURLColumnTransform) {
                    href =
                      cardLink.overrideLinkURLColumnTransform(overrideHrefData)
                  } else {
                    href = overrideHrefData
                  }
                }
              }
            }

            return (
              <Fragment key={el}>
                <Link
                  href={href}
                  key={el}
                  className={newClassName}
                  style={style}
                  target={linkTarget ?? TargetEnum.CURRENT_WINDOW}
                >
                  {el}
                </Link>
                {index < split.length - 1 && (
                  <span style={{ marginRight: 4 }}>, </span>
                )}
              </Fragment>
            )
          })}
        </p>
      )
    }
  }

  if ('tooltipText' in labelLink && labelLink.tooltipText) {
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
