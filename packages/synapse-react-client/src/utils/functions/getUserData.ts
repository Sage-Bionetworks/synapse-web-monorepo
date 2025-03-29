import SynapseClient from '@/synapse-client'
import { BackendDestinationEnum, getEndpoint } from './getEndpoint'

/*
  Utility functions for UserCards
*/

export async function getUserProfileWithProfilePicAttached(
  principalIds: string[],
) {
  const userProfiles = await SynapseClient.getUserProfiles(principalIds)
  const profilesWithPictures = userProfiles.list.map(profile => {
    if (profile.profilePicureFileHandleId) {
      return {
        ...profile,
        clientPreSignedURL: `${getEndpoint(
          BackendDestinationEnum.REPO_ENDPOINT,
        )}/repo/v1/userProfile/${profile.ownerId}/image/preview?redirect=true`,
      }
    } else {
      return profile
    }
  })
  return { list: profilesWithPictures }
}

const COLORS: string[] = [
  'chocolate',
  'black',
  'firebrick',
  'maroon',
  'olive',
  'green',
  'forestgreen',
  'darkturquoise',
  'teal',
  'blue',
  'navy',
  'darkmagenta',
  'purple',
  'blue',
  'orangered',
  'blueviolet',
]

const hash = (userName: string) => {
  const val = userName
    .split('')
    .reduce(
      (prevHash, currVal) =>
        ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
      0,
    )
  return Math.abs(val)
}

export const getColor = (userName: string) => {
  const hashedUserName = hash(userName)
  return COLORS[hashedUserName % COLORS.length]
}
