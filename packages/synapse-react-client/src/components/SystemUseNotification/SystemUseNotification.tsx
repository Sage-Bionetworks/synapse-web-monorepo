import { Box, Typography } from '@mui/material'

/**
 * FISMA SAR V1-AC-8 System Use Notification, see https://sagebionetworks.jira.com/browse/SWC-6430
 */
export function SystemUseNotification() {
  return (
    <Box
      sx={{
        color: 'grey.700',
        maxHeight: '110px',
        overflow: 'auto',
        margin: '20px 0px',
      }}
    >
      <Typography
        variant="smallText1"
        sx={{
          fontWeight: 700,
          marginBottom: '5px',
        }}
      >
        System Use Notice
      </Typography>
      <Typography variant="smallText1" sx={{ lineHeight: '21px' }}>
        Sage Bionetworks actively monitors this system and activity to maintain
        system security and availability and to ensure appropriate and
        legitimate usage. Any individual who intentionally accesses a computer
        or system without authorization, and who alters, damages, makes
        unauthorized modifications to, or destroys information, or exceeds
        authorized access, is in violation of applicable federal laws, Executive
        Orders, directives, policies, regulations, standards, and guidance. Any
        evidence of possible violations of proper use or applicable laws found
        as a result of this monitoring may be turned over to law enforcement.
        Any individual found to be in violation of the system&apos;s proper use
        rules or law could be punished with loss of system access, fines, and/or
        imprisonment. By proceeding, you hereby acknowledge your agreement with
        these terms and the system&apos;s rules of behavior and consent to such
        monitoring and information retrieval for law enforcement and other
        official purposes.
      </Typography>
    </Box>
  )
}

export default SystemUseNotification
