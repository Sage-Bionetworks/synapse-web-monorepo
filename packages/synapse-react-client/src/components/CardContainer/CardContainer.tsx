import React from 'react'
import useGetInfoFromIds from '../../utils/hooks/useGetInfoFromIds'
import {
  DATASET,
  FUNDER,
  GENERIC_CARD,
  MEDIUM_USER_CARD,
  OBSERVATION_CARD,
} from '../../utils/SynapseConstants'
import {
  ColumnTypeEnum,
  EntityHeader,
  Row,
} from '@sage-bionetworks/synapse-types'
import { CardConfiguration } from '../CardContainerLogic'
import GenericCard from '../GenericCard'
import loadingScreen from '../LoadingScreen'
import { useInfiniteQueryContext } from '../QueryContext'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import { Dataset, Funder } from '../row_renderers'
import {
  LoadingObservationCard,
  ObservationCard,
} from '../row_renderers/ObservationCard'
import TotalQueryResults from '../TotalQueryResults'
import UserCardList from '../UserCardList/UserCardList'
import WideButton from '../styled/WideButton'
import { Box } from '@mui/material'

export type CardContainerProps = {
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
    default:
      return <div /> // this should never happen
  }
}

export function CardContainer(props: CardContainerProps) {
  const {
    isHeader = false,
    unitDescription,
    type,
    isLoading,
    secondaryLabelLimit = 3,
    title,
    ...rest
  } = props
  const infiniteQueryContext = useInfiniteQueryContext()
  const { NoContentPlaceholder } = useQueryVisualizationContext()
  const { data, appendNextPageToResults, hasNextPage } = infiniteQueryContext

  const queryVisualizationContext = useQueryVisualizationContext()

  const ids = data?.queryResult!.queryResults.tableId
    ? [data?.queryResult.queryResults.tableId]
    : []
  const tableEntityConcreteType = useGetInfoFromIds<EntityHeader>({
    ids,
    type: 'ENTITY_HEADER',
  })
  // the cards only show the loading screen on initial load, this occurs when data is undefined
  if (!data) {
    return (
      <div>
        {isLoading && type === OBSERVATION_CARD && <LoadingObservationCard />}
        {isLoading && type !== OBSERVATION_CARD && loadingScreen}
      </div>
    )
  } else if (data && data.queryResult!.queryResults.rows.length === 0) {
    // Show "no results" UI (see PORTALS-1497)
    return <NoContentPlaceholder />
  }
  const schema = {}
  data.queryResult!.queryResults.headers.forEach((element, index) => {
    schema[element.name] = index
  })
  const showViewMoreButton = hasNextPage && (
    <Box display="flex" justifyContent="flex-end">
      <WideButton
        variant="contained"
        color="secondary"
        size="large"
        onClick={() => {
          appendNextPageToResults()
        }}
      >
        View More
      </WideButton>
    </Box>
  )
  let cards
  if (type === MEDIUM_USER_CARD) {
    // Hard coding ownerId as a column name containing the user profile ownerId
    // for each row, grab the column with the ownerId
    const userIdColumnIndex = data.queryResult!.queryResults.headers.findIndex(
      el => el.columnType === ColumnTypeEnum.USERID,
    )
    if (userIdColumnIndex === -1) {
      throw Error(
        'Type MEDIUM_USER_CARD specified but no columnType USERID found',
      )
    }
    const listIds = data.queryResult!.queryResults.rows.map(
      el => el.values[userIdColumnIndex],
    )
    cards = <UserCardList data={data} list={listIds} size={MEDIUM_USER_CARD} />
  } else {
    // render the cards
    const cardsData = data.queryResult!.queryResults.rows
    cards = cardsData.length ? (
      cardsData.map((rowData: Row, index) => {
        const key = JSON.stringify(rowData.values)
        const propsForCard = {
          key,
          type,
          schema,
          isHeader,
          secondaryLabelLimit,
          rowId: rowData.rowId,
          data: rowData.values,
          selectColumns: data.selectColumns,
          columnModels: data.columnModels,
          tableEntityConcreteType:
            tableEntityConcreteType[0] && tableEntityConcreteType[0].type,
          tableId: data?.queryResult!.queryResults.tableId,
          queryContext: infiniteQueryContext,
          queryVisualizationContext,
          ...rest,
        }
        return (
          <Card
            key={rowData.rowId ?? index}
            propsToPass={propsForCard}
            type={type}
          />
        )
      })
    ) : (
      <></>
    )
  }

  return (
    <div role="list">
      {title && <h2 className="SRC-card-overview-title">{title}</h2>}
      {!title && unitDescription && (
        <TotalQueryResults frontText={'Displaying'} />
      )}
      {/* ReactCSSTransitionGroup adds css fade in property for cards that come into view */}
      {cards}
      {showViewMoreButton}
    </div>
  )
}

export default CardContainer
