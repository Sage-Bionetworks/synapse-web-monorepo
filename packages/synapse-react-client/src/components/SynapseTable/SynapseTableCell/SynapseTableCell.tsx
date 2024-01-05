import React from 'react'
import dayjs from 'dayjs'
import { formatDate } from '../../../utils/functions/DateFormatter'
import {
  isDataset,
  isDatasetCollection,
  isEntityView,
} from '../../../utils/functions/EntityTypeUtils'
import {
  ColumnModel,
  ColumnType,
  ColumnTypeEnum,
  FileHandleAssociateType,
  Row,
  SelectColumn,
} from '@sage-bionetworks/synapse-types'
import {
  CardLink,
  ColumnSpecifiedLink,
  MarkdownLink,
} from '../../CardContainerLogic'
import DirectDownload from '../../DirectDownload/DirectDownload'
import EntityIdList from './EntityIdList'
import { EntityLink } from '../../EntityLink'
import EvaluationIdRenderer from './EvaluationIdRenderer'
import { SynapseCardLabel } from '../../GenericCard'
import { NOT_SET_DISPLAY_VALUE } from '../SynapseTableConstants'
import UserIdList from './UserIdList'
import JSONTableCellRenderer from './JSON/JSONTableCellRenderer'
import { Link, Typography } from '@mui/material'
import UserOrTeamBadge from '../../UserOrTeamBadge'
import { isFileViewOrDataset } from '../SynapseTableUtils'
import { useAtomValue } from 'jotai'
import { tableQueryEntityAtom } from '../../QueryWrapper/QueryWrapper'
import { EntityImage } from '../../CardContainerLogic/CardContainerLogic'
import Linkify from '../../GenericCard/Linkify'

export type SynapseTableCellProps = {
  columnType: ColumnType
  columnValue: string | null
  isBold: string
  columnLinkConfig?: CardLink | MarkdownLink | ColumnSpecifiedLink | EntityImage
  columnName: string
  selectColumns?: SelectColumn[]
  columnModels?: ColumnModel[]
  rowData: Row['values']
  rowId?: string
  rowVersionNumber?: number
  isRowEntityColumn?: boolean
}

function SynapseTableCell(props: SynapseTableCellProps) {
  const {
    columnType,
    columnValue,
    isBold,
    columnLinkConfig,
    columnName,
    selectColumns,
    columnModels,
    rowData,
    rowId,
    rowVersionNumber,
    isRowEntityColumn,
  } = props
  const entity = useAtomValue(tableQueryEntityAtom)
  if (!columnValue) {
    return <p className="SRC-inactive"> {NOT_SET_DISPLAY_VALUE}</p>
  }

  if (columnLinkConfig) {
    return (
      <SynapseCardLabel
        value={columnValue}
        columnName={columnName}
        selectColumns={selectColumns}
        columnModels={columnModels}
        isHeader={false}
        labelLink={columnLinkConfig}
        rowData={rowData}
        rowId={rowId}
      />
    )
  }

  // PORTALS-2095: Special case. If this is an EntityView, and we are rendering the 'id' or 'name' column,
  // and we have a rowId and rowVersionNumber (should always be the case), and our entityIdToHeader map
  // contains the row Synapse ID, then auto-link.
  const tableRowRepresentsEntity =
    entity &&
    (isEntityView(entity) || isDataset(entity) || isDatasetCollection(entity))
  if (
    (tableRowRepresentsEntity || isRowEntityColumn) &&
    (columnName === 'id' || columnName === 'name') &&
    rowId &&
    rowVersionNumber
  ) {
    return (
      <p>
        <EntityLink
          entity={rowId}
          versionNumber={rowVersionNumber}
          className={`${isBold}`}
          showIcon={false}
          displayTextField={columnName}
        />
      </p>
    )
  }

  switch (columnType) {
    case ColumnTypeEnum.ENTITYID:
      return (
        <p>
          <EntityLink
            entity={columnValue}
            className={`${isBold}`}
            displayTextField={'name'}
          />
        </p>
      )
    case ColumnTypeEnum.DATE_LIST: {
      const jsonData: number[] = JSON.parse(columnValue)
      return (
        <p>
          {jsonData.map((val: number, index: number) => {
            return (
              <span key={index} className={isBold}>
                {formatDate(dayjs(Number(val)))}
                {index !== jsonData.length - 1 ? ', ' : ''}
              </span>
            )
          })}{' '}
        </p>
      )
    }
    case ColumnTypeEnum.BOOLEAN_LIST: {
      const jsonData: boolean[] = JSON.parse(columnValue)
      return (
        <p>
          {jsonData.map((val: boolean, index: number) => {
            return (
              <span key={index} className={isBold}>
                {val ? 'true' : 'false'}
                {index !== jsonData.length - 1 ? ', ' : ''}
              </span>
            )
          })}
        </p>
      )
    }
    case ColumnTypeEnum.FILEHANDLEID: {
      let associatedObjectId = entity!.id!
      let associatedObjectType = FileHandleAssociateType.TableEntity
      if (isFileViewOrDataset(entity) && columnName === 'dataFileHandleId') {
        associatedObjectId = String(rowId)
        associatedObjectType = FileHandleAssociateType.FileEntity
      }
      return (
        <>
          {entity && (
            <p>
              <DirectDownload
                iconSvgPropOverrides={{ sx: { color: 'primary.main' } }}
                associatedObjectId={associatedObjectId}
                associatedObjectType={associatedObjectType}
                fileHandleId={columnValue}
                displayFileName={true}
              />
            </p>
          )}
        </>
      )
    }
    case ColumnTypeEnum.ENTITYID_LIST: {
      const jsonData: string[] = JSON.parse(columnValue)
      return (
        <p>
          <EntityIdList entityIdList={jsonData} />
        </p>
      )
    }
    case ColumnTypeEnum.USERID_LIST: {
      const jsonData: string[] = JSON.parse(columnValue)
      return <UserIdList userIds={jsonData} />
    }
    // handle other list types
    case ColumnTypeEnum.STRING_LIST:
    case ColumnTypeEnum.INTEGER_LIST: {
      const jsonData: string[] = JSON.parse(columnValue)
      return (
        <p className={isBold}>
          {jsonData.map((val: string, index: number) => {
            const textRenderer =
              columnType == ColumnTypeEnum.STRING_LIST ? (
                <Linkify text={val} />
              ) : (
                <>{val}</>
              )
            return (
              <React.Fragment key={val}>
                {textRenderer}
                {index !== jsonData.length - 1 ? ', ' : ''}
              </React.Fragment>
            )
          })}
        </p>
      )
    }
    case ColumnTypeEnum.EVALUATIONID: {
      return <EvaluationIdRenderer evaluationId={columnValue} />
    }

    case ColumnTypeEnum.DATE:
      return <p className={isBold}>{formatDate(dayjs(Number(columnValue)))}</p>

    case ColumnTypeEnum.USERID:
      return <UserOrTeamBadge principalId={columnValue} />
    case ColumnTypeEnum.LINK:
      return (
        <p>
          <Link target="_blank" rel="noopener noreferrer" href={columnValue}>
            {columnValue}
          </Link>
        </p>
      )
    case ColumnTypeEnum.STRING:
    case ColumnTypeEnum.BOOLEAN:
    case ColumnTypeEnum.MEDIUMTEXT:
    case ColumnTypeEnum.LARGETEXT: {
      return (
        <Typography variant={'smallText1'} className={isBold}>
          <Linkify text={columnValue} />
        </Typography>
      )
    }
    case ColumnTypeEnum.INTEGER:
      return (
        <Typography
          variant={'smallText1'}
          sx={{ textAlign: 'right' }}
          className={isBold}
        >
          {parseInt(columnValue).toLocaleString()}
        </Typography>
      )
    case ColumnTypeEnum.DOUBLE:
      return (
        <Typography
          variant={'smallText1'}
          sx={{ textAlign: 'right' }}
          className={isBold}
        >
          {parseFloat(columnValue).toLocaleString()}
        </Typography>
      )
    case ColumnTypeEnum.JSON:
      return <JSONTableCellRenderer value={columnValue} />
    default:
      console.warn(
        `ColumnType ${columnType} has unspecified handler. Rendering the column value.`,
      )
      return (
        <Typography variant={'smallText1'} className={isBold}>
          {columnValue}
        </Typography>
      )
  }
  // We can reach this if we don't get a mapping of IDs to entities or principals.
  // TODO: If we don't have a id:data mapping, we should render a component that can fetch the required data, rather than breaking from the case.
  return <p className={isBold}>{columnValue}</p>
}

export default React.memo(SynapseTableCell)
