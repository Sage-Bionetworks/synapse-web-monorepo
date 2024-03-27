import dayjs from 'dayjs'
import React, { useMemo, useState } from 'react'
import { useGetForumThreadsInfinite } from '../../synapse-queries/forum/useForum'
import { AVATAR } from '../../utils/SynapseConstants'
import {
  DiscussionFilter,
  DiscussionThreadBundle,
  DiscussionThreadOrder,
} from '@sage-bionetworks/synapse-types'
import IconSvg from '../IconSvg/IconSvg'
import UserCard from '../UserCard/UserCard'
import { Button, Link } from '@mui/material'
import { UserBadge } from '../UserCard/UserBadge'
import { StyledTableContainer } from '../styled/StyledTableContainer'
import {
  ColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  SortingState,
  Table,
  useReactTable,
} from '@tanstack/react-table'
import ColumnHeader from '../styled/ColumnHeader'
import { isEmpty } from 'lodash-es'

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
      header: props => <ColumnHeader {...props} title={'Thread'} />,
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

export const ForumTable: React.FC<ForumTableProps> = ({
  forumId,
  limit,
  filter,
  onClickLink,
}) => {
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

  const { data, hasNextPage, fetchNextPage } = useGetForumThreadsInfinite(
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
    })

  return (
    <div className="ForumTable">
      <StyledTableContainer
        sx={{
          my: 2,
          ['th,td']: { px: 1 },
          td: {
            py: 1,
          },
        }}
      >
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            {table.getHeaderGroups().map(headerGroup => {
              return (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map(header => (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      style={{ width: header.getSize() }}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                      {header.column.getCanResize() && (
                        <div
                          className={`resizer ${
                            header.column.getIsResizing() ? 'isResizing' : ''
                          }`}
                          onMouseDown={header.getResizeHandler()}
                          onTouchStart={header.getResizeHandler()}
                        />
                      )}
                    </th>
                  ))}
                </tr>
              )
            })}
            {/*<tr>*/}
            {/*    <th>*/}
            {/*      <span className="SRC-split">*/}
            {/*        <span>Topic</span>*/}
            {/*        <SortIcon*/}
            {/*          role="button"*/}
            {/*          aria-label="Sort by Topic"*/}
            {/*          active={sort === DiscussionThreadOrder.THREAD_TITLE}*/}
            {/*          direction={*/}
            {/*            sort === 'THREAD_TITLE'*/}
            {/*              ? isAscending === false*/}
            {/*                ? Direction.DESC*/}
            {/*                : Direction.ASC*/}
            {/*              : Direction.DESC*/}
            {/*          }*/}
            {/*          onClick={() => onSort(DiscussionThreadOrder.THREAD_TITLE)}*/}
            {/*        />*/}
            {/*      </span>*/}
            {/*    </th>*/}
            {/*    <th>Author</th>*/}
            {/*    <th>Active Users</th>*/}
            {/*    <th>*/}
            {/*      <span className="SRC-split">*/}
            {/*        <span>Replies</span>*/}
            {/*        <SortIcon*/}
            {/*          role="button"*/}
            {/*          aria-label="Sort by Replies"*/}
            {/*          active={sort === DiscussionThreadOrder.NUMBER_OF_REPLIES}*/}
            {/*          direction={*/}
            {/*            sort === 'NUMBER_OF_REPLIES'*/}
            {/*              ? isAscending === false*/}
            {/*                ? Direction.DESC*/}
            {/*                : Direction.ASC*/}
            {/*              : Direction.DESC*/}
            {/*          }*/}
            {/*          onClick={() =>*/}
            {/*            onSort(DiscussionThreadOrder.NUMBER_OF_REPLIES)*/}
            {/*          }*/}
            {/*        />*/}
            {/*      </span>*/}
            {/*    </th>*/}
            {/*    <th>*/}
            {/*      <span className="SRC-split">*/}
            {/*        <span>Views</span>*/}
            {/*        <SortIcon*/}
            {/*          role="button"*/}
            {/*          aria-label="Sort by Views"*/}
            {/*          active={sort === DiscussionThreadOrder.NUMBER_OF_VIEWS}*/}
            {/*          direction={*/}
            {/*            sort === 'NUMBER_OF_VIEWS'*/}
            {/*              ? isAscending === false*/}
            {/*                ? Direction.DESC*/}
            {/*                : Direction.ASC*/}
            {/*              : Direction.DESC*/}
            {/*          }*/}
            {/*          onClick={() =>*/}
            {/*            onSort(DiscussionThreadOrder.NUMBER_OF_VIEWS)*/}
            {/*          }*/}
            {/*        />*/}
            {/*      </span>*/}
            {/*    </th>*/}
            {/*    <th>*/}
            {/*      <span className="SRC-split">*/}
            {/*        <span>Activity</span>*/}
            {/*        <SortIcon*/}
            {/*          role="button"*/}
            {/*          aria-label="Sort by Last Activity"*/}
            {/*          active={*/}
            {/*            sort === DiscussionThreadOrder.PINNED_AND_LAST_ACTIVITY*/}
            {/*          }*/}
            {/*          direction={*/}
            {/*            sort === 'PINNED_AND_LAST_ACTIVITY'*/}
            {/*              ? isAscending === false*/}
            {/*                ? Direction.DESC*/}
            {/*                : Direction.ASC*/}
            {/*              : Direction.DESC*/}
            {/*          }*/}
            {/*          onClick={() =>*/}
            {/*            onSort(DiscussionThreadOrder.PINNED_AND_LAST_ACTIVITY)*/}
            {/*          }*/}
            {/*        />*/}
            {/*      </span>*/}
            {/*    </th>*/}
            {/*  </tr>*/}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => {
                  return (
                    <td
                      key={cell.id}
                      style={{
                        width: cell.column.getSize(),
                      }}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </StyledTableContainer>
      {hasNextPage && (
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            fetchNextPage()
          }}
        >
          Show more results
        </Button>
      )}
    </div>
  )
}
