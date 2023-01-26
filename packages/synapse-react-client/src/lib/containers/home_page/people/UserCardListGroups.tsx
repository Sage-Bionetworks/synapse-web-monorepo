import React from 'react'
import useShowDesktop from '../../../utils/hooks/useShowDesktop'
import { UserCardSize } from '../../UserCard'
import UserCardListGroupsMobile from './UserCardListGroups.Mobile'
import UserCardListGroupsDesktop from './UserCardListGroups.Desktop'
import { Button } from 'react-bootstrap'

export type UserCardListGroupsProps = {
  sql: string
  columnName: string
  facetValues: string[]
  size: UserCardSize
  summaryLink?: string
  summaryLinkText?: string
  count: number
  useQueryResultUserData?: boolean
}

export default function UserCardListGroups(props: UserCardListGroupsProps) {
  const { summaryLink, summaryLinkText, ...rest } = props
  const showDesktop = useShowDesktop()
  return (
    <div
      className={`bootstrap-4-backport UserCardListGroups${
        showDesktop ? '__Desktop' : ''
      }`}
    >
      <div>
        {showDesktop ? (
          <UserCardListGroupsDesktop {...rest} />
        ) : (
          <UserCardListGroupsMobile {...rest} />
        )}
        {summaryLink && summaryLinkText && (
          <div className="UserCardListGroups__summary">
            <Button
              variant="secondary"
              size="lg"
              className="pill"
              href={summaryLink}
            >
              {summaryLinkText}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
