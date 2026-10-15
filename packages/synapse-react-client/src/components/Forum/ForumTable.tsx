import { ErrorBanner } from '@/components/error/ErrorBanner'
import InfiniteTableLayout from '@/components/layout/InfiniteTableLayout'
import {
  useGetEntityThreadsInfinite,
  useGetForumThreadsInfinite,
} from '@/synapse-queries/forum/useForum'
import { AVATAR } from '@/utils/SynapseConstants'
import { Link } from '@mui/material'
import { DiscussionThreadBundle as DiscussionThreadBundleGenerated } from '@sage-bionetworks/synapse-client'
import {
  DiscussionFilter,
  DiscussionThreadOrder,
  PaginatedResults,
} from '@sage-bionetworks/synapse-types'
import {
  ColumnDef,
  createColumnHelper,
  getCoreRowModel,
  SortingState,
  Table,
  useReactTable,
} from '@tanstack/react-table'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import isEmpty from 'lodash-es/isEmpty'
import { useEffect, useMemo, useState } from 'react'
import IconSvg from '../IconSvg/IconSvg'
import ColumnHeader from '../TanStackTable/ColumnHeader'
import StyledTanStackTable from '../TanStackTable/StyledTanStackTable'
import { UserBadge } from '../UserCard/UserBadge'
import UserCard from '../UserCard/UserCard'
import DiscussionEmpty from './DiscussionEmpty'

dayjs.extend(relativeTime)

type ForumTableBaseProps = {
  limit: number
  onClickLink: (threadId: string) => void
  noBackgroundColor?: boolean
  /** Called when the first page loads, with whether there are no threads */
  onIsEmptyChange?: (isEmpty: boolean) => void
  /** Max height of the table before it scrolls. Use 'none' for full height. @default '250px' */
  maxHeight?: string
}

export type ForumTableProps = ForumTableBaseProps &
  (
    | { forumId: string; filter: DiscussionFilter }
    | { entityId: string; onViewForumClicked?: () => void }
  )

const columnHelper = createColumnHelper<DiscussionThreadBundleGenerated>()

function getColumns(
  onClickLink: (threadId: string) => void,
): ColumnDef<DiscussionThreadBundleGenerated, any>[] {
  return [
    columnHelper.accessor('title', {
      header: props => <ColumnHeader {...props} title={'Topic'} />,
      cell: ({ row }) => (
        <Link onClick={() => row.original.id && onClickLink(row.original.id)}>
          {row.original.isPinned ? <IconSvg icon="pushpin" /> : <></>}
          {row.original.title}
        </Link>
      ),
      enableSorting: true,
      size: 300,
    }),
    columnHelper.accessor('createdBy', {
      header: props => <ColumnHeader {...props} title={'Author'} />,
      cell: ({ getValue }) => <UserBadge userId={getValue()} />,
      enableSorting: false,
      size: 150,
    }),
    columnHelper.accessor('activeAuthors', {
      header: props => <ColumnHeader {...props} title={'Active Users'} />,
      cell: ({ getValue }) =>
        (getValue() ?? []).map((userId: string) => (
          <div key={userId} className="avatarContainer">
            <UserCard
              showCardOnHover={true}
              className="ActiveUsers"
              size={AVATAR}
              avatarSize={'MEDIUM'}
              ownerId={userId}
            />
          </div>
        )),
      enableSorting: false,
      size: 200,
    }),
    columnHelper.accessor('numberOfReplies', {
      header: props => <ColumnHeader {...props} title={'Replies'} />,
      cell: ({ getValue }) => getValue()?.toLocaleString(),
      enableSorting: true,
      minSize: 90,
      size: 100,
    }),
    columnHelper.accessor('numberOfViews', {
      header: props => <ColumnHeader {...props} title={'Views'} />,
      cell: ({ getValue }) => getValue()?.toLocaleString(),
      enableSorting: true,
      minSize: 90,
      size: 100,
    }),
    columnHelper.accessor('lastActivity', {
      header: props => <ColumnHeader {...props} title={'Activity'} />,
      cell: ({ getValue }) => getValue() && dayjs(getValue()).fromNow(),
      enableSorting: true,
      minSize: 120,
      size: 140,
    }),
  ]
}

export function ForumTable(props: ForumTableProps) {
  const {
    limit,
    onClickLink,
    noBackgroundColor,
    onIsEmptyChange,
    maxHeight = '250px',
  } = props
  const isEntityMode = 'entityId' in props

  const [tableSortState, setTableSortState] = useState<SortingState>([
    {
      desc: true,
      id: 'lastActivity',
    },
  ])

  const discussionThreadOrder = useMemo(() => {
    if (!isEmpty(tableSortState)) {
      if (tableSortState[0].id == 'lastActivity') {
        return DiscussionThreadOrder.PINNED_AND_LAST_ACTIVITY
      } else if (tableSortState[0].id == 'numberOfReplies') {
        return DiscussionThreadOrder.NUMBER_OF_REPLIES
      } else if (tableSortState[0].id == 'title') {
        return DiscussionThreadOrder.THREAD_TITLE
      } else if (tableSortState[0].id == 'numberOfViews') {
        return DiscussionThreadOrder.NUMBER_OF_VIEWS
      }
    }
    return DiscussionThreadOrder.PINNED_AND_LAST_ACTIVITY
  }, [tableSortState])

  const ascending = !tableSortState[0]?.desc

  const forumThreadsQuery = useGetForumThreadsInfinite(
    isEntityMode ? '' : props.forumId,
    limit,
    discussionThreadOrder,
    ascending,
    isEntityMode ? undefined : props.filter,
    { enabled: !isEntityMode },
  )

  const entityThreadsQuery = useGetEntityThreadsInfinite(
    isEntityMode ? props.entityId : '',
    limit,
    discussionThreadOrder,
    ascending,
    { enabled: isEntityMode },
  )

  const {
    data,
    isLoading,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = isEntityMode ? entityThreadsQuery : forumThreadsQuery

  const threads = useMemo(() => {
    const pages: PaginatedResults<DiscussionThreadBundleGenerated>[] =
      data?.pages ?? []
    return pages.flatMap(page => page.results)
  }, [data])

  const columns = useMemo(() => getColumns(onClickLink), [onClickLink])

  const table: Table<DiscussionThreadBundleGenerated> =
    useReactTable<DiscussionThreadBundleGenerated>({
      data: threads,
      columns: columns,
      state: {
        sorting: tableSortState,
      },
      onSortingChange: setTableSortState,
      getRowId: (row, index) => row.id ?? String(index),
      getCoreRowModel: getCoreRowModel(),
      columnResizeMode: 'onChange',
      manualSorting: true,
      enableMultiSort: false,
      enableFilters: false,
    })

  const hasNoResults = !isLoading && table.getRowModel().rows.length === 0

  useEffect(() => {
    if (!isLoading) {
      onIsEmptyChange?.(hasNoResults)
    }
  }, [isLoading, hasNoResults, onIsEmptyChange])

  const onViewForumClicked = isEntityMode ? props.onViewForumClicked : undefined

  if (hasNoResults && onViewForumClicked) {
    return (
      <>
        <ErrorBanner error={error} />
        <DiscussionEmpty onViewForumClicked={onViewForumClicked} />
      </>
    )
  }

  return (
    <div className="ForumTable">
      <ErrorBanner error={error} />
      <InfiniteTableLayout
        table={
          <StyledTanStackTable
            table={table}
            styledTableContainerProps={{
              sx: { my: 2, maxHeight },
              noBackgroundColor,
            }}
          />
        }
        isLoading={isLoading}
        isEmpty={hasNoResults}
        hasNextPage={hasNextPage}
        onFetchNextPageClicked={() => {
          void fetchNextPage()
        }}
        isFetchingNextPage={isFetchingNextPage}
      />
    </div>
  )
}

export default ForumTable
