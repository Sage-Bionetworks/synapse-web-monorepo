import React from 'react'
import {
  ColumnModel,
  ColumnTypeEnum,
  Row,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'
import { Link, Tooltip } from '@mui/material'
import {
  CardLink,
  ColumnSpecifiedLink,
  MarkdownLink,
  TargetEnum,
} from '../CardContainerLogic'
import MarkdownSynapse from '../Markdown/MarkdownSynapse'
import { isEmpty } from 'lodash-es'
import { getColumnIndex, getValueOrMultiValue } from './GenericCard'
import { UserBadge } from '../UserCard/UserBadge'
import { formatDate } from '../../utils/functions/DateFormatter'
import dayjs from 'dayjs'
import { EntityColumnImage } from '../widgets/EntityColumnImage'
import { EntityImage } from '../CardContainerLogic/CardContainerLogic'
import Linkify from './Linkify'

type SynapseCardLabelProps = {
  value: string
  columnName: string
  labelLink:
    | CardLink
    | MarkdownLink
    | ColumnSpecifiedLink
    | EntityImage
    | undefined
  selectColumns: SelectColumn[] | undefined
  columnModels: ColumnModel[] | undefined
  isHeader: boolean
  className?: string
  rowData: Row['values']
  rowId?: string
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
              <UserBadge userId={val} className={newClassName} />
              {/* \u00a0 is a nbsp; */}
              {index < strList.length - 1 && ',\u00a0\u00a0'}
            </React.Fragment>
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

  let labelContent: JSX.Element
  if ('isMarkdown' in labelLink && labelLink.isMarkdown) {
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
  } else if ('isEntityImage' in labelLink && labelLink.isEntityImage) {
    if (strList) {
      labelContent = (
        <p>
          {strList.map((el, index) => {
            return (
              <React.Fragment key={el}>
                <EntityColumnImage entityId={el} />

                {/* \u00a0 is a nbsp; */}
                {index < strList.length - 1 && ',\u00a0\u00a0'}
              </React.Fragment>
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
                  <React.Fragment key={el}>
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
            const cardLink = labelLink as CardLink
            const { baseURL, URLColumnName, wrapValueWithParens } = cardLink
            const elOrRowId = cardLink.overrideValueWithRowID ? rowId : el
            const value = wrapValueWithParens ? `(${elOrRowId})` : elOrRowId
            const href = `/${baseURL}?${URLColumnName}=${value}`

            return (
              <React.Fragment key={el}>
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
              </React.Fragment>
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
