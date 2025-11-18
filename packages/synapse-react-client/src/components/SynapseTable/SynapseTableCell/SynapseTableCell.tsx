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
import { EntityLink, EntityLinkProps } from '../../EntityLink/EntityLink'
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
    return <p className="SRC-inactive">{NOT_SET_DISPLAY_VALUE}</p>
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
    case ColumnTypeEnum.ENTITYID: {
      const displayTextField = getDisplayTextFieldForEntityIdColumn(columnName)
      return (
        <p>
          <EntityLink
            entity={columnValue}
            className={`${isBold}`}
            displayTextField={displayTextField}
            showIcon={false}
          />
        </p>
      )
    }
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
      const displayTextField = getDisplayTextFieldForEntityIdColumn(columnName)
      const jsonData: string[] = JSON.parse(columnValue)
      return (
        <p>
          <EntityIdList
            entityIdList={jsonData}
            displayTextField={displayTextField}
            showIcon={false}
          />
        </p>
      )
    }
    case ColumnTypeEnum.USERID_LIST: {
      const jsonData: string[] = JSON.parse(columnValue)
      return (
        <p>
          <UserIdList userIds={jsonData} />
        </p>
      )
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
              <Fragment key={val}>
                {textRenderer}
                {index !== jsonData.length - 1 ? ', ' : ''}
              </Fragment>
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

export default memo(SynapseTableCell)
