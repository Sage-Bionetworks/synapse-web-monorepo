import React from 'react'
import {
  ColumnModel,
  ColumnTypeEnum,
  Row,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'
import UserCard from '../UserCard/UserCard'
import { SMALL_USER_CARD } from '../../utils/SynapseConstants'
import { SYNAPSE_ENTITY_ID_REGEX } from '../../utils/functions/RegularExpressions'
import { Link, Tooltip } from '@mui/material'
import {
  CardLink,
  ColumnSpecifiedLink,
  MarkdownLink,
  TargetEnum,
} from '../CardContainerLogic'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import MarkdownSynapse from '../Markdown/MarkdownSynapse'
import { isEmpty } from 'lodash-es'
import { getColumnIndex, getValueOrMultiValue } from './GenericCard'

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
        <Link
          target={TargetEnum.NEW_WINDOW}
          rel="noopener noreferrer"
          href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Synapse:${str}`}
          className={newClassName}
        >
          {str}
        </Link>
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
            const { baseURL, URLColumnName, wrapValueWithParens } = labelLink
            const elOrRowId = labelLink.overrideValueWithRowID
              ? `syn${rowId}`
              : el
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
