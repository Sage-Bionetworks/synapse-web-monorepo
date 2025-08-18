import { CardConfiguration } from '@/components/CardContainer/CardConfiguration'
import TableRowGenericCard from '@/components/GenericCard/TableRowGenericCard'
import useGetInfoFromIds from '@/utils/hooks/useGetInfoFromIds'
import {
  DATASET,
  FUNDER,
  GENERIC_CARD,
  MEDIUM_USER_CARD,
  OBSERVATION_CARD,
  RELEASE_CARD,
} from '@/utils/SynapseConstants'
import { Box } from '@mui/material'
import {
  ColumnTypeEnum,
  EntityHeader,
  Row,
  RowSet,
} from '@sage-bionetworks/synapse-types'
import { Suspense } from 'react'
import loadingScreen from '../LoadingScreen/LoadingScreen'
import { useQueryContext } from '../QueryContext'
import { useQueryVisualizationContext } from '../QueryVisualizationWrapper'
import { useSuspenseGetQueryMetadata } from '../QueryWrapper/useGetQueryMetadata'
import { ReleaseCard } from '../ReleaseCard'
import { Dataset, Funder } from '../row_renderers'
import {
  LoadingObservationCard,
  ObservationCard,
} from '../row_renderers/ObservationCard'
import TotalQueryResults from '../TotalQueryResults'
import UserCardList from '../UserCardList/UserCardList'
import { SustainabilityScorecardProps } from '../SustainabilityScorecard'

const defaultListSx = { display: 'block' }
const releaseCardMediumListSx = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, 272px)',
  gridAutoRows: 'auto',
  gridAutoFlow: 'row',
  gap: '10px',
  mb: '30px',
}
const multiCardListSx = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gridColumnGap: '20px',
  marginBottom: '20px',
  marginTop: '20px',

  '& .SRC-portalCard': {
    margin: '10px 0px',
  },
}

export type CardContainerProps = {
  rowSet: RowSet
  isHeader?: boolean
  sustainabilityScorecard?: SustainabilityScorecardProps
  isAlignToLeftNav?: boolean
  title?: string
  isLoading?: boolean
  unitDescription?: string
  multiCardList?: boolean
} & CardConfiguration

function Card(props: { propsToPass: any; type: string }) {
  const { propsToPass, type } = props
  switch (type) {
    case DATASET:
      return <Dataset {...propsToPass} />
    case FUNDER:
      return <Funder {...propsToPass} />
    case GENERIC_CARD:
      return <TableRowGenericCard {...propsToPass} />
    case OBSERVATION_CARD:
      return <ObservationCard {...propsToPass} />
    case RELEASE_CARD:
      return <ReleaseCard {...propsToPass} />
    default:
      return <div /> // this should never happen
  }
}

function CardContainerInternal(props: CardContainerProps) {
  const {
    unitDescription,
    type,
    secondaryLabelLimit = 3,
    title,
    rowSet,
    multiCardList,
    ...rest
  } = props
  const { NoContentPlaceholder } = useQueryVisualizationContext()
  const queryContext = useQueryContext()
  const { data: queryMetadata } = useSuspenseGetQueryMetadata()
  const queryVisualizationContext = useQueryVisualizationContext()

  const dataRows: Row[] = rowSet.rows
  const isMultipleCards = dataRows.length > 1

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

  let cards
  if (type === MEDIUM_USER_CARD) {
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
  } else {
    // render the cards
    cards = dataRows.length ? (
      dataRows.map((rowData: Row, index) => {
        const propsForCard = {
          type,
          schema,
          secondaryLabelLimit,
          rowId: rowData.rowId,
          versionNumber: rowData.versionNumber,
          data: rowData.values,
          selectColumns: rowSet.headers,
          columnModels: queryMetadata.columnModels,
          tableEntityConcreteType:
            tableEntityConcreteType[0] && tableEntityConcreteType[0].type,
          tableId: rowSet.tableId,
          queryContext: queryContext,
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

  const isReleaseCardMediumList =
    props.type === RELEASE_CARD &&
    props.releaseCardConfig?.cardSize === 'medium'

  let cardListSx = defaultListSx
  if (isReleaseCardMediumList) {
    cardListSx = releaseCardMediumListSx
  } else if (multiCardList && isMultipleCards) {
    cardListSx = multiCardListSx
  }

  return (
    <>
      <Box role="list" sx={cardListSx}>
        {title && <h2 className="SRC-card-overview-title">{title}</h2>}
        {!title && unitDescription && (
          <TotalQueryResults frontText={'Displaying'} />
        )}
        {/* ReactCSSTransitionGroup adds css fade in property for cards that come into view */}
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
      <CardContainerInternal {...props} />
    </Suspense>
  )
}
