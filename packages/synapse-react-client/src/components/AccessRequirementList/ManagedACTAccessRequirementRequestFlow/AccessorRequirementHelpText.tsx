import { NewReleasesOutlined } from '@mui/icons-material'
import { Box, Link } from '@mui/material'
import { AccessorStepAccessRequirement } from './requestFlowTypes'

export type AccessorRequirementHelpTextProps = {
  accessRequirement: AccessorStepAccessRequirement
  isEDucEnabled: boolean
}

export default function AccessorRequirementHelpText(
  props: AccessorRequirementHelpTextProps,
) {
  const { accessRequirement, isEDucEnabled } = props
  let link: string = ''
  let msg: string = ''

  if (
    accessRequirement.isCertifiedUserRequired &&
    accessRequirement.isValidatedProfileRequired
  ) {
    link = 'https://help.synapse.org/docs/User-Types.2007072795.html'
    msg =
      'All data requesters must be certified users and have a validated user profile.'
  } else if (accessRequirement.isCertifiedUserRequired) {
    link =
      'https://help.synapse.org/docs/User-Types.2007072795.html#UserAccountTiers-CertifiedUsers'
    msg = 'All data requesters must be a certified user.'
  } else if (accessRequirement.isValidatedProfileRequired) {
    link =
      'https://help.synapse.org/docs/User-Types.2007072795.html#UserAccountTiers-ValidatedUsers'
    msg = 'All data requesters must have a validated user profile.'
  }
  return (
    <>
      {accessRequirement.isDUCRequired && !isEDucEnabled ? (
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', py: 1 }}>
          <NewReleasesOutlined sx={{ color: 'error.main' }} />
          <div>
            You must list the Synapse user names of all collaborators listed in
            your Data Use Certificate (DUC).
          </div>
        </Box>
      ) : (
        ''
      )}
      {msg}{' '}
      {link && (
        <Link href={link} target={'_blank'} rel={'noreferrer'}>
          Learn more
        </Link>
      )}
    </>
  )
}
