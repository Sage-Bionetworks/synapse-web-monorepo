import CertifiedUserIcon from '../../assets/icons/CertifiedUser'
import { UserProfile } from '@sage-bionetworks/synapse-types'

type UserCardLargeProps = {
  userProfile: UserProfile
  isCertified?: boolean
}

/**
 * UserCardLarge wraps around UserCardMedium
 *
 * @export UserCardLarge
 * @param {UserCardLargeProps} { userProfile }
 */
// Disable function name because compiler has to know that its a class
// tslint:disable-next-line:function-name
export function UserCardLarge({
  userProfile,
  isCertified,
}: UserCardLargeProps) {
  const { summary, industry, location, url } = userProfile

  return (
    <div className="SRC-cardMetaData">
      <div className="SRC-cardMetaData-scroll">
        {summary && (
          <div>
            <p className="SRC-card-metadata-title"> Bio </p>
            <p>{summary}</p>
          </div>
        )}
        {url && (
          <div>
            <p className="SRC-card-metadata-title"> More Info </p>
            <p>{url}</p>
          </div>
        )}
        {industry && (
          <div>
            <p className="SRC-card-metadata-title"> Industry </p>
            <p>{industry}</p>
          </div>
        )}
        {location && (
          <div>
            <p className="SRC-card-metadata-title"> Location </p>
            <p>{location}</p>
          </div>
        )}
        {isCertified && (
          <div>
            <p className="SRC-card-metadata-title"> Access </p>
            <p>{CertifiedUserIcon} Certified Account</p>
          </div>
        )}
      </div>
    </div>
  )
}
