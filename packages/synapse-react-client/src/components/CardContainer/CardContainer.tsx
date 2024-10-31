import React, { Suspense } from 'react'
import useGetInfoFromIds from '../../utils/hooks/useGetInfoFromIds'
import {
  DATASET,
  FUNDER,
  GENERIC_CARD,
  MEDIUM_USER_CARD,
  OBSERVATION_CARD,
  RELEASE_CARD,
} from '../../utils/SynapseConstants'
import {
  ColumnTypeEnum,
  EntityHeader,
  Row,
  RowSet,
} from '@sage-bionetworks/synapse-types'
import { CardConfiguration } from '../CardContainerLogic'
import GenericCard from '../GenericCard'
import loadingScreen from '../LoadingScreen/LoadingScreen'
import { useQueryContext } from '../QueryContext'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import { Dataset, Funder } from '../row_renderers'
import { ReleaseCard } from '../ReleaseCard'
import {
  LoadingObservationCard,
  ObservationCard,
} from '../row_renderers/ObservationCard'
import TotalQueryResults from '../TotalQueryResults'
import UserCardList from '../UserCardList/UserCardList'
import { Box } from '@mui/material'
import { useSuspenseQuery } from '@tanstack/react-query'

const defaultListSx = { display: 'block' }
const releaseCardMediumListSx = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 272px)',
  gridAutoRows: 'auto',
  gridAutoFlow: 'row',
  gap: '10px',
  mb: '30px',
}

export type CardContainerProps = {
  rowSet: RowSet
  isHeader?: boolean
  isAlignToLeftNav?: boolean
  title?: string
  isLoading?: boolean
  unitDescription?: string
} & CardConfiguration

function Card(props: { propsToPass: any; type: string }) {
  const { propsToPass, type } = props
  switch (type) {
    case DATASET:
      return <Dataset {...propsToPass} />
    case FUNDER:
      return <Funder {...propsToPass} />
    case GENERIC_CARD:
      return <GenericCard {...propsToPass} />
    case OBSERVATION_CARD:
      return <ObservationCard {...propsToPass} />
    case RELEASE_CARD:
      return <ReleaseCard {...propsToPass} />
    default:
      return <div /> // this should never happen
  }
}

function _CardContainer(props: CardContainerProps) {
  const {
    isHeader = false,
    unitDescription,
    type,
    secondaryLabelLimit = 3,
    title,
    rowSet,
    ...rest
  } = props
  const { NoContentPlaceholder } = useQueryVisualizationContext()
  const queryContext = useQueryContext()
  const { queryMetadataQueryOptions } = queryContext
  const { data: queryMetadata } = useSuspenseQuery(queryMetadataQueryOptions)
  const queryVisualizationContext = useQueryVisualizationContext()

  const dataRows: Row[] = rowSet.rows

  const ids = [rowSet.tableId]
  const tableEntityConcreteType = useGetInfoFromIds<EntityHeader>({
    ids,
    type: 'ENTITY_HEADER',
  })

  // the cards only show the loading screen on initial load, this occurs when data is undefined
  if (dataRows.length === 0) {
    // Show "no results" UI (see PORTALS-1497)
    return <NoContentPlaceholder />
  }

  const schema: Record<string, number> = {}
  rowSet.headers.forEach((element, index) => {
    schema[element.name] = index
  })

  const getPropsForCard = (rowData: Row, index: number) => ({
    key: JSON.stringify(rowData.values),
    type,
    schema,
    isHeader,
    secondaryLabelLimit,
    rowId: rowData.rowId ?? index,
    data: rowData.values,
    selectColumns: rowSet.headers,
    columnModels: queryMetadata.columnModels,
    tableEntityConcreteType: tableEntityConcreteType[0]?.type,
    tableId: rowSet.tableId,
    queryContext,
    queryVisualizationContext,
    ...rest,
  })

  const renderCards = (rows: any) =>
    rows.length ? (
      rows.map((rowData: any, index: number) => (
        <Card
          key={rowData.rowId ?? index}
          propsToPass={getPropsForCard(rowData, index)}
          type={type}
        />
      ))
    ) : (
      <></>
    )

  let cards
  switch (type) {
    case MEDIUM_USER_CARD: {
      // Hard coding ownerId as a column name containing the user profile ownerId
      // for each row, grab the column with the ownerId
      const userIdColumnIndex = rowSet.headers.findIndex(
        el => el.columnType === ColumnTypeEnum.USERID,
      )
      if (userIdColumnIndex === -1) {
        throw Error(
          'Type MEDIUM_USER_CARD specified but no columnType USERID found',
        )
      }
      const listIds = dataRows.map(el => el.values[userIdColumnIndex])
      cards = (
        <UserCardList rowSet={rowSet} list={listIds} size={MEDIUM_USER_CARD} />
      )
      break
    }

    default:
      cards = renderCards(dataRows)
      break
  }

  const isReleaseCardMediumList =
    type === RELEASE_CARD && rest.releaseCardConfig?.cardSize === 'medium'

  return (
    <>
      <Box
        role="list"
        sx={isReleaseCardMediumList ? releaseCardMediumListSx : defaultListSx}
      >
        {title && <h2 className="SRC-card-overview-title">{title}</h2>}
        {!title && unitDescription && (
          <TotalQueryResults frontText={'Displaying'} />
        )}
        {cards}
      </Box>
    </>
  )
}

export function CardContainer(props: CardContainerProps) {
  const fallback = (
    <div>
      {props.type === OBSERVATION_CARD && <LoadingObservationCard />}
      {props.type !== OBSERVATION_CARD && loadingScreen}
    </div>
  )
  return (
    <Suspense fallback={fallback}>
      <_CardContainer {...props} />
    </Suspense>
  )
}
