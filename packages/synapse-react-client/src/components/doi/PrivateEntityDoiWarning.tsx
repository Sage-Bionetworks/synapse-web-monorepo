import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import { Box, Link, Typography } from '@mui/material'

export function PrivateEntityDoiWarning() {
  return (
    <>
      <Box sx={{ backgroundColor: '#F9EBE8' }} mb={2} p={'5px 10px'}>
        <Typography variant="body1">
          This page is currently <strong>private</strong>.<br />
          You may want to make it <strong>public</strong> before you continue.
        </Typography>
      </Box>
      <Box rowGap={'15px'} display="flex" flexDirection="column">
        <Typography variant="body1">
          DOIs are permanent identifiers for citing research works. When someone
          accesses a DOI, they must be able to view basic information (metadata)
          about the work. We recommend making this metadata publicly visible,
          even if the underlying data remains access-restricted.
        </Typography>
        <Link
          href={'https://www.doi.org/the-identifier/what-is-a-doi/'}
          target={'_blank'}
          rel={'noreferrer'}
          variant="body1"
        >
          More about DOIs (external URL)
        </Link>
        <Link
          href={
            'https://docs.synapse.org/synapse-docs/sharing-settings-permissions-and-conditions-for-use'
          }
          target={'_blank'}
          rel={'noreferrer'}
          variant="body1"
        >
          Show me how to make this page public
        </Link>
        <Typography variant="body1">
          <strong>Note:</strong> Resources with a DOI may be included in the{' '}
          <Link
            href={`${getEndpoint(
              BackendDestinationEnum.PORTAL_ENDPOINT,
            )}DataCatalog:0`}
            target="_blank"
          >
            Synapse Data Catalog
          </Link>
          .
        </Typography>
      </Box>
    </>
  )
}
