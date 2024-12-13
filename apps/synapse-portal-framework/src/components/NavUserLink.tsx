import { UserProfile } from '@sage-bionetworks/synapse-types'
import UserCard from 'synapse-react-client/components/UserCard/UserCard'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

type NavUserLinkProps = {
  userProfile: UserProfile | undefined
}

function NavUserLink({ userProfile }: NavUserLinkProps) {
  return (
    <>
      {/* this div is an overlay to capture click events (the UserCard Avatar stops propogation) */}
      <div style={{ width: '50px', height: '50px', position: 'absolute' }} />
      <UserCard
        userProfile={userProfile}
        size={SynapseConstants.AVATAR}
        avatarSize="MEDIUM"
        preSignedURL={userProfile?.clientPreSignedURL}
        link="javascript:void(0)"
      />
      <ExpandMoreIcon className="user-expand" />
      <div className="mb-user-extra">
        <div className="user-fullname">
          {userProfile?.firstName} {userProfile?.lastName}
        </div>
        <div className="user-account">View Account</div>
      </div>
    </>
  )
}

export default NavUserLink
