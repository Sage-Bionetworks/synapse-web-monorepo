import React from 'react'
import dayjs from 'dayjs'
import { formatDate } from '../../utils/functions/DateFormatter'
import {
  isDataset,
  isDatasetCollection,
  isEntityView,
} from '../../utils/functions/EntityTypeUtils'
import { PRODUCTION_ENDPOINT_CONFIG } from '../../utils/functions/getEndpoint'
import { AUTHENTICATED_USERS } from '../../utils/SynapseConstants'
import {
  ColumnModel,
  ColumnType,
  ColumnTypeEnum,
  EntityHeader,
  FileHandleAssociateType,
  Row,
  SelectColumn,
  UserGroupHeader,
  UserProfile,
} from '../../utils/synapseTypes'
import {
  CardLink,
  ColumnSpecifiedLink,
  MarkdownLink,
} from '../CardContainerLogic'
import DirectDownload from '../DirectDownload'
import EntityIdList from '../EntityIdList'
import { EntityLink } from '../EntityLink'
import EvaluationIdRenderer from '../EvaluationIdRenderer'
import { SynapseCardLabel } from '../GenericCard'
import IconSvg, { Icon } from '../IconSvg'
import { useQueryContext } from '../QueryContext'
import { NOT_SET_DISPLAY_VALUE } from '../table/SynapseTableConstants'
import UserCard from '../UserCard'
import UserIdList from '../UserIdList'

export type SynapseTableCellProps = {
  columnType: ColumnType
  columnValue: string | null
  isBold: string
  columnLinkConfig?: CardLink | MarkdownLink | ColumnSpecifiedLink
  mapEntityIdToHeader: Record<string, EntityHeader>
  mapUserIdToHeader: Partial<UserGroupHeader & UserProfile>
  columnName: string
  selectColumns?: SelectColumn[]
  columnModels?: ColumnModel[]
  rowData: Row['values']
  rowId?: number
  rowVersionNumber?: number
}

export const SynapseTableCell: React.FC<SynapseTableCellProps> = ({
  columnType,
  columnValue,
  isBold,
  mapEntityIdToHeader,
  mapUserIdToHeader,
  columnLinkConfig,
  columnName,
  selectColumns,
  columnModels,
  rowData,
  rowId,
  rowVersionNumber,
}) => {
  const { entity } = useQueryContext()

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
  if (
    entity &&
    (isEntityView(entity) ||
      isDataset(entity) ||
      isDatasetCollection(entity)) &&
    (columnName === 'id' || columnName === 'name') &&
    rowId &&
    rowVersionNumber
  ) {
    const synId = `syn${rowId.toString()}`
    const entity = mapEntityIdToHeader[synId] ?? synId
    return (
      <p>
        <EntityLink
          entity={entity}
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
            entity={mapEntityIdToHeader[columnValue] ?? columnValue}
            className={`${isBold}`}
            displayTextField={'name'}
          />
        </p>
      )
      break
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
    case ColumnTypeEnum.FILEHANDLEID:
      return (
        <>
          {entity && (
            <DirectDownload
              associatedObjectId={entity.id!}
              associatedObjectType={FileHandleAssociateType.TableEntity}
              fileHandleId={columnValue}
              displayFileName={true}
            />
          )}
        </>
      )
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
            return (
              <React.Fragment key={val}>
                {val}
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
      if (
        Object.prototype.hasOwnProperty.call(mapUserIdToHeader, columnValue)
      ) {
        const { ownerId, userName } = mapUserIdToHeader[columnValue]
        if (mapUserIdToHeader[columnValue].isIndividual === false) {
          // isUserGroupHeader
          const icon: Icon =
            userName === AUTHENTICATED_USERS ? 'public' : 'people'
          if (userName === AUTHENTICATED_USERS) {
            return (
              <span>
                <IconSvg icon={icon} /> All registered Synapse users
              </span>
            )
          }
          return (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`${PRODUCTION_ENDPOINT_CONFIG.PORTAL}#!Team:${ownerId}`}
            >
              <IconSvg icon={icon} /> {userName}
            </a>
          )
        } else {
          // isUserCard
          return (
            <UserCard
              userProfile={mapUserIdToHeader[columnValue]}
              preSignedURL={mapUserIdToHeader[columnValue].clientPreSignedURL}
              size={'SMALL USER CARD'}
            />
          )
        }
      }
      break
    case ColumnTypeEnum.LINK:
      return (
        <a target="_blank" rel="noopener noreferrer" href={columnValue}>
          {columnValue}
        </a>
      )
    case ColumnTypeEnum.STRING:
    case ColumnTypeEnum.DOUBLE:
    case ColumnTypeEnum.INTEGER:
    case ColumnTypeEnum.BOOLEAN:
    case ColumnTypeEnum.MEDIUMTEXT:
    case ColumnTypeEnum.LARGETEXT: {
      return <p className={isBold}>{columnValue}</p>
    }
    default:
      console.warn(
        `ColumnType ${columnType} has unspecified handler. Rendering the column value.`,
      )
      return <p className={isBold}>{columnValue}</p>
  }
  // We can reach this if we don't get a mapping of IDs to entities or principals.
  // TODO: If we don't have a id:data mapping, we should render a component that can fetch the required data, rather than breaking from the case.
  return <p className={isBold}>{columnValue}</p>
}
