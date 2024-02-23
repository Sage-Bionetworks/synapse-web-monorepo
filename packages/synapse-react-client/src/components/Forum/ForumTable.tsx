import dayjs from 'dayjs'
import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import SortIcon from '../../assets/icons/Sort'
import { useGetForumThreadsInfinite } from '../../synapse-queries/forum/useForum'
import { AVATAR } from '../../utils/SynapseConstants'
import {
  Direction,
  DiscussionFilter,
  DiscussionThreadOrder,
} from '@sage-bionetworks/synapse-types'
import IconSvg from '../IconSvg/IconSvg'
import UserCard from '../UserCard/UserCard'
import { Button, Link } from '@mui/material'
import { UserBadge } from '../UserCard/UserBadge'

export type ForumTableProps = {
  forumId: string
  limit: number
  onClickLink: (threadId: string) => void
  filter: DiscussionFilter
}

export const ForumTable: React.FC<ForumTableProps> = ({
  forumId,
  limit,
  filter,
  onClickLink,
}) => {
  const [sort, setSort] = useState<DiscussionThreadOrder>(
    DiscussionThreadOrder.PINNED_AND_LAST_ACTIVITY,
  )
  const [isAscending, setIsAscending] = useState(false)

  const { data, hasNextPage, fetchNextPage } = useGetForumThreadsInfinite(
    forumId,
    limit,
    sort,
    isAscending,
    filter,
  )

  const threads = data?.pages.flatMap(page => page.results) ?? []

  const onSort = (field: DiscussionThreadOrder) => {
    if (sort == field) {
      setSort(field)
      setIsAscending(!isAscending)
    } else {
      setSort(field)
      setIsAscending(false)
    }
  }

  return (
    <div className="ForumTable bootstrap-4-backport">
      <Table>
        <thead>
          <tr>
            <th>
              <span className="SRC-split">
                <span>Topic</span>
                <SortIcon
                  role="button"
                  aria-label="Sort by Topic"
                  active={sort === DiscussionThreadOrder.THREAD_TITLE}
                  direction={
                    sort === 'THREAD_TITLE'
                      ? isAscending === false
                        ? Direction.DESC
                        : Direction.ASC
                      : Direction.DESC
                  }
                  onClick={() => onSort(DiscussionThreadOrder.THREAD_TITLE)}
                />
              </span>
            </th>
            <th>Author</th>
            <th>Active Users</th>
            <th>
              <span className="SRC-split">
                <span>Replies</span>
                <SortIcon
                  role="button"
                  aria-label="Sort by Replies"
                  active={sort === DiscussionThreadOrder.NUMBER_OF_REPLIES}
                  direction={
                    sort === 'NUMBER_OF_REPLIES'
                      ? isAscending === false
                        ? Direction.DESC
                        : Direction.ASC
                      : Direction.DESC
                  }
                  onClick={() =>
                    onSort(DiscussionThreadOrder.NUMBER_OF_REPLIES)
                  }
                />
              </span>
            </th>
            <th>
              <span className="SRC-split">
                <span>Views</span>
                <SortIcon
                  role="button"
                  aria-label="Sort by Views"
                  active={sort === DiscussionThreadOrder.NUMBER_OF_VIEWS}
                  direction={
                    sort === 'NUMBER_OF_VIEWS'
                      ? isAscending === false
                        ? Direction.DESC
                        : Direction.ASC
                      : Direction.DESC
                  }
                  onClick={() => onSort(DiscussionThreadOrder.NUMBER_OF_VIEWS)}
                />
              </span>
            </th>
            <th>
              <span className="SRC-split">
                <span>Activity</span>
                <SortIcon
                  role="button"
                  aria-label="Sort by Last Activity"
                  active={
                    sort === DiscussionThreadOrder.PINNED_AND_LAST_ACTIVITY
                  }
                  direction={
                    sort === 'PINNED_AND_LAST_ACTIVITY'
                      ? isAscending === false
                        ? Direction.DESC
                        : Direction.ASC
                      : Direction.DESC
                  }
                  onClick={() =>
                    onSort(DiscussionThreadOrder.PINNED_AND_LAST_ACTIVITY)
                  }
                />
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {threads.map(item => {
            return (
              <tr key={item.id}>
                <td>
                  <Link onClick={() => onClickLink(item.id)}>
                    {item.isPinned ? <IconSvg icon="pushpin" /> : <></>}
                    {item.title}
                  </Link>
                </td>
                <td>
                  <UserBadge userId={item.createdBy} />
                </td>
                <td>
                  {item.activeAuthors.map(user => (
                    <div key={user} className="avatarContainer">
                      <UserCard
                        showCardOnHover={true}
                        className="ActiveUsers"
                        size={AVATAR}
                        avatarSize={'MEDIUM'}
                        ownerId={user}
                      />
                    </div>
                  ))}
                </td>
                <td>{item.numberOfReplies}</td>
                <td>{item.numberOfViews}</td>
                <td>{dayjs(item.lastActivity).format('L')}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
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
