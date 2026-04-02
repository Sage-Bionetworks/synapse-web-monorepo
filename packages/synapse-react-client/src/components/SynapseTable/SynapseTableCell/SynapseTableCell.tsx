import { CardLink } from '@/components/CardContainer/CardLink'
import { useGetEntity } from '@/synapse-queries'
import { formatDate } from '@/utils/functions/DateFormatter'
import {
  isDataset,
  isDatasetCollection,
  isEntityView,
} from '@/utils/functions/EntityTypeUtils'
import { Link, Typography } from '@mui/material'
import {
  ColumnModel,
  ColumnType,
  ColumnTypeEnum,
  FileHandleAssociateType,
  Row,
  SelectColumn,
  Table,
} from '@sage-bionetworks/synapse-types'
import dayjs from 'dayjs'
import { Fragment, memo } from 'react'
import { ColumnSpecifiedLink, MarkdownLink } from '../../CardContainerLogic'
import {
  EntityImage,
  MapValueToReactComponentConfig,
} from '../../CardContainerLogic/CardContainerLogic'
import DirectDownload from '../../DirectDownload/DirectDownload'
import { EntityLink, EntityLinkProps } from '../../EntityLink'
import { SynapseCardLabel } from '../../GenericCard'
import Linkify from '../../GenericCard/Linkify'
import { useQueryContext } from '../../QueryContext'
import UserOrTeamBadge from '../../UserOrTeamBadge'
import { NOT_SET_DISPLAY_VALUE } from '../SynapseTableConstants'
import { isFileViewOrDataset } from '../SynapseTableUtils'
import EntityIdList from './EntityIdList'
import EvaluationIdRenderer from './EvaluationIdRenderer'
import JSONTableCellRenderer from './JSON/JSONTableCellRenderer'
import UserIdList from './UserIdList'

export type SynapseTableCellProps = {
  columnType: ColumnType
  columnValue: string | null
  isBold: string
  columnLinkConfig?:
    | CardLink
    | MarkdownLink
    | ColumnSpecifiedLink
    | EntityImage
    | MapValueToReactComponentConfig
  columnName: string
  selectColumns?: SelectColumn[]
  columnModels?: ColumnModel[]
  rowData: Row['values']
  rowId?: string
  rowVersionNumber?: number
  isRowEntityColumn?: boolean
}

function getDisplayTextFieldForEntityIdColumn(
  columnName: string,
): EntityLinkProps['displayTextField'] {
  // SWC-7235 - For any table type, if the column is an ENTITYID and the column name is 'id', then display the ID.
  // Otherwise, display the entity name.
  if (columnName.toLowerCase() === 'id') {
    return 'id'
  }
  return 'name'
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
  const { entityId, versionNumber } = useQueryContext()
  const { data: entity } = useGetEntity<Table>(entityId, versionNumber)

  if (!columnValue) {
    return (
      <div className="SynapseTableCellContent SRC-inactive">
        {NOT_SET_DISPLAY_VALUE}
      </div>
    )
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
      <div className="SynapseTableCellContent">
        <EntityLink
          entity={rowId}
          versionNumber={rowVersionNumber}
          className={`${isBold}`}
          showIcon={false}
          displayTextField={columnName}
        />
      </div>
    )
  }

  switch (columnType) {
    case ColumnTypeEnum.ENTITYID: {
      const displayTextField = getDisplayTextFieldForEntityIdColumn(columnName)
      return (
        <div className="SynapseTableCellContent">
          <EntityLink
            entity={columnValue}
            className={`${isBold}`}
            displayTextField={displayTextField}
            showIcon={false}
          />
        </div>
      )
    }
    case ColumnTypeEnum.DATE_LIST: {
      const jsonData: number[] = JSON.parse(columnValue)
      return (
        <div className="SynapseTableCellContent">
          {jsonData.map((val: number, index: number) => {
            return (
              <span key={index} className={isBold}>
                {formatDate(dayjs(Number(val)))}
                {index !== jsonData.length - 1 ? ', ' : ''}
              </span>
            )
          })}{' '}
        </div>
      )
    }
    case ColumnTypeEnum.BOOLEAN_LIST: {
      const jsonData: boolean[] = JSON.parse(columnValue)
      return (
        <div className="SynapseTableCellContent">
          {jsonData.map((val: boolean, index: number) => {
            return (
              <span key={index} className={isBold}>
                {val ? 'true' : 'false'}
                {index !== jsonData.length - 1 ? ', ' : ''}
              </span>
            )
          })}
        </div>
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
            <div className="SynapseTableCellContent">
              <DirectDownload
                iconSvgPropOverrides={{ sx: { color: 'primary.main' } }}
                associatedObjectId={associatedObjectId}
                associatedObjectType={associatedObjectType}
                fileHandleId={columnValue}
                displayFileName={true}
              />
            </div>
          )}
        </>
      )
    }
    case ColumnTypeEnum.ENTITYID_LIST: {
      const displayTextField = getDisplayTextFieldForEntityIdColumn(columnName)
      const jsonData: string[] = JSON.parse(columnValue)
      return (
        <div className="SynapseTableCellContent">
          <EntityIdList
            entityIdList={jsonData}
            displayTextField={displayTextField}
            showIcon={false}
          />
        </div>
      )
    }
    case ColumnTypeEnum.USERID_LIST: {
      const jsonData: string[] = JSON.parse(columnValue)
      return (
        <div className="SynapseTableCellContent">
          <UserIdList userIds={jsonData} />
        </div>
      )
    }
    // handle other list types
    case ColumnTypeEnum.STRING_LIST:
    case ColumnTypeEnum.INTEGER_LIST: {
      const jsonData: string[] = JSON.parse(columnValue)
      return (
        <div className={`SynapseTableCellContent ${isBold}`}>
          {jsonData.map((val: string, index: number) => {
            const textRenderer =
              columnType == ColumnTypeEnum.STRING_LIST ? (
                <Linkify text={val} />
              ) : (
                <>{val}</>
              )
            return (
              <Fragment key={val}>
                {textRenderer}
                {index !== jsonData.length - 1 ? ', ' : ''}
              </Fragment>
            )
          })}
        </div>
      )
    }
    case ColumnTypeEnum.EVALUATIONID: {
      return (
        <div className="SynapseTableCellContent">
          <EvaluationIdRenderer evaluationId={columnValue} />
        </div>
      )
    }

    case ColumnTypeEnum.DATE:
      return (
        <div className={`SynapseTableCellContent ${isBold}`}>
          {formatDate(dayjs(Number(columnValue)))}
        </div>
      )

    case ColumnTypeEnum.USERID:
      return (
        <div className="SynapseTableCellContent">
          <UserOrTeamBadge principalId={columnValue} />
        </div>
      )
    case ColumnTypeEnum.LINK:
      return (
        <div className="SynapseTableCellContent">
          <Link target="_blank" rel="noopener noreferrer" href={columnValue}>
            {columnValue}
          </Link>
        </div>
      )
    case ColumnTypeEnum.STRING:
    case ColumnTypeEnum.BOOLEAN:
    case ColumnTypeEnum.MEDIUMTEXT:
    case ColumnTypeEnum.LARGETEXT: {
      return (
        <div className="SynapseTableCellContent">
          <Typography variant={'smallText1'} className={isBold}>
            <Linkify text={columnValue} />
          </Typography>
        </div>
      )
    }
    case ColumnTypeEnum.INTEGER:
      return (
        <div className="SynapseTableCellContent">
          <Typography
            variant={'smallText1'}
            sx={{ textAlign: 'right' }}
            className={isBold}
          >
            {parseInt(columnValue).toLocaleString()}
          </Typography>
        </div>
      )
    case ColumnTypeEnum.DOUBLE:
      return (
        <div className="SynapseTableCellContent">
          <Typography
            variant={'smallText1'}
            sx={{ textAlign: 'right' }}
            className={isBold}
          >
            {parseFloat(columnValue).toLocaleString()}
          </Typography>
        </div>
      )
    case ColumnTypeEnum.JSON:
      return (
        <div className="SynapseTableCellContent">
          <JSONTableCellRenderer value={columnValue} />
        </div>
      )
    default:
      console.warn(
        `ColumnType ${columnType} has unspecified handler. Rendering the column value.`,
      )
      return (
        <div className="SynapseTableCellContent">
          <Typography variant={'smallText1'} className={isBold}>
            {columnValue}
          </Typography>
        </div>
      )
  }
  // We can reach this if we don't get a mapping of IDs to entities or principals.
  // TODO: If we don't have a id:data mapping, we should render a component that can fetch the required data, rather than breaking from the case.
  return (
    <div className={`SynapseTableCellContent ${isBold}`}>{columnValue}</div>
  )
}

export default memo(SynapseTableCell)
