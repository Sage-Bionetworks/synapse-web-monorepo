import InfiniteTableLayout from '@/components/layout/InfiniteTableLayout'
import { useGetForumThreadsInfinite } from '@/synapse-queries/forum/useForum'
import { AVATAR } from '@/utils/SynapseConstants'
import { Link } from '@mui/material'
import {
  DiscussionFilter,
  DiscussionThreadBundle,
  DiscussionThreadOrder,
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
import isEmpty from 'lodash-es/isEmpty'
import { useMemo, useState } from 'react'
import IconSvg from '../IconSvg/IconSvg'
import ColumnHeader from '../TanStackTable/ColumnHeader'
import StyledTanStackTable from '../TanStackTable/StyledTanStackTable'
import { UserBadge } from '../UserCard/UserBadge'
import UserCard from '../UserCard/UserCard'

export type ForumTableProps = {
  forumId: string
  limit: number
  onClickLink: (threadId: string) => void
  filter: DiscussionFilter
}

const columnHelper = createColumnHelper<DiscussionThreadBundle>()

function getColumns(
  onClickLink: (threadId: string) => void,
): ColumnDef<DiscussionThreadBundle, any>[] {
  return [
    columnHelper.accessor('title', {
      header: props => <ColumnHeader {...props} title={'Topic'} />,
      cell: ({ row }) => (
        <Link onClick={() => onClickLink(row.original.id)}>
          {row.original.isPinned ? <IconSvg icon="pushpin" /> : <></>}
          {row.original.title}
        </Link>
      ),
      enableSorting: true,
      size: 250,
    }),
    columnHelper.accessor('createdBy', {
      header: props => <ColumnHeader {...props} title={'Author'} />,
      cell: ({ getValue }) => <UserBadge userId={getValue()} />,
      enableSorting: false,
      size: 60,
    }),
    columnHelper.accessor('activeAuthors', {
      header: props => <ColumnHeader {...props} title={'Active Users'} />,
      cell: ({ getValue }) =>
        getValue().map((userId: string) => (
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
    }),
    columnHelper.accessor('numberOfReplies', {
      header: props => <ColumnHeader {...props} title={'Replies'} />,
      cell: ({ getValue }) => getValue().toLocaleString(),
      enableSorting: true,
      minSize: 10,
      size: 20,
    }),
    columnHelper.accessor('numberOfViews', {
      header: props => <ColumnHeader {...props} title={'Views'} />,
      cell: ({ getValue }) => getValue().toLocaleString(),
      enableSorting: true,
      minSize: 10,
      size: 20,
    }),
    columnHelper.accessor('lastActivity', {
      header: props => <ColumnHeader {...props} title={'Activity'} />,
      cell: ({ getValue }) => dayjs(getValue()).format('L'),
      enableSorting: true,
      size: 30,
    }),
  ]
}

export function ForumTable({
  forumId,
  limit,
  filter,
  onClickLink,
}: ForumTableProps) {
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

  const { data, isLoading, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useGetForumThreadsInfinite(
      forumId,
      limit,
      discussionThreadOrder,
      !tableSortState[0]?.desc,
      filter,
    )

  const threads = useMemo(
    () => data?.pages.flatMap(page => page.results) ?? [],
    [data],
  )

  const columns = useMemo(() => getColumns(onClickLink), [onClickLink])

  const table: Table<DiscussionThreadBundle> =
    useReactTable<DiscussionThreadBundle>({
      data: threads,
      columns: columns,
      state: {
        sorting: tableSortState,
      },
      onSortingChange: setTableSortState,
      getRowId: row => row.id,
      getCoreRowModel: getCoreRowModel(),
      columnResizeMode: 'onChange',
      manualSorting: true,
      enableMultiSort: false,
      enableFilters: false,
    })

  const hasNoResults = !isLoading && table.getRowModel().rows.length === 0

  return (
    <div className="ForumTable">
      <InfiniteTableLayout
        table={
          <StyledTanStackTable
            table={table}
            styledTableContainerProps={{ sx: { my: 2, maxHeight: '250px' } }}
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
