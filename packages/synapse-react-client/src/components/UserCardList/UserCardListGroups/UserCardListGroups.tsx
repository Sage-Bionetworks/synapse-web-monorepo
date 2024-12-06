import useShowDesktop from '../../../utils/hooks/useShowDesktop'
import UserCardListGroupsMobile from './UserCardListGroups.Mobile'
import UserCardListGroupsDesktop from './UserCardListGroups.Desktop'
import LargeButton from '../../../components/styled/LargeButton'
import { UserCardSize } from '../../../utils/SynapseConstants'

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
    <div className={`UserCardListGroups${showDesktop ? '__Desktop' : ''}`}>
      <div>
        {showDesktop ? (
          <UserCardListGroupsDesktop {...rest} />
        ) : (
          <UserCardListGroupsMobile {...rest} />
        )}
        {summaryLink && summaryLinkText && (
          <div className="UserCardListGroups__summary">
            <LargeButton
              color="secondary"
              variant="contained"
              href={summaryLink}
            >
              {summaryLinkText}
            </LargeButton>
          </div>
        )}
      </div>
    </div>
  )
}
