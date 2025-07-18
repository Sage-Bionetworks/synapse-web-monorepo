import { UserProfile } from '@sage-bionetworks/synapse-types'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import * as SynapseConstants from 'synapse-react-client/utils/SynapseConstants'
import UserCard from 'synapse-react-client/components/UserCard/UserCard'

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
    </>
  )
}

export default NavUserLink
