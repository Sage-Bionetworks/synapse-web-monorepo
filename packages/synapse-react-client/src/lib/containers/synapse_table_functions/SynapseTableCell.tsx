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
  columnValue: string
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
    return (
      <p className="SRC-center-text SRC-inactive"> {NOT_SET_DISPLAY_VALUE}</p>
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
    case ColumnType.ENTITYID:
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
    case ColumnType.DATE_LIST: {
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
    case ColumnType.BOOLEAN_LIST: {
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
    case ColumnType.FILEHANDLEID:
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
    case ColumnType.ENTITYID_LIST: {
      const jsonData: string[] = JSON.parse(columnValue)
      return <EntityIdList entityIdList={jsonData} />
    }
    case ColumnType.USERID_LIST: {
      const jsonData: string[] = JSON.parse(columnValue)
      return <UserIdList userIds={jsonData} />
    }
    // handle other list types
    case ColumnType.STRING_LIST:
    case ColumnType.INTEGER_LIST: {
      const jsonData: string[] = JSON.parse(columnValue)
      return (
        <p>
          {jsonData.map((val: string, index: number) => {
            return (
              <span key={val} className={isBold}>
                {val}
                {index !== jsonData.length - 1 ? ', ' : ''}
              </span>
            )
          })}
        </p>
      )
    }
    case ColumnType.EVALUATIONID: {
      return <EvaluationIdRenderer evaluationId={columnValue} />
    }

    case ColumnType.DATE:
      return <p className={isBold}>{formatDate(dayjs(Number(columnValue)))}</p>

    case ColumnType.USERID:
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
    case ColumnType.LINK:
      return (
        <a target="_blank" rel="noopener noreferrer" href={columnValue}>
          {columnValue}
        </a>
      )
    case ColumnType.STRING:
    case ColumnType.DOUBLE:
    case ColumnType.INTEGER:
    case ColumnType.BOOLEAN:
    case ColumnType.MEDIUMTEXT:
    case ColumnType.LARGETEXT: {
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
