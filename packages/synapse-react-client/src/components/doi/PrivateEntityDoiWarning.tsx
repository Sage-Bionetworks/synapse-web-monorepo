import { BackendDestinationEnum, getEndpoint } from '@/utils/functions'
import {
  DATA_CATALOG_PATH_SEGMENT,
  SYNAPSE_DOCS_SHARING_SETTINGS_PERMISSIONS_CONDITIONS_FOR_USE_URL,
} from '@/utils/SynapseConstants'
import { Alert, Box, Link, Typography } from '@mui/material'

export function PrivateEntityDoiWarning() {
  return (
    <>
      <Alert severity="error" sx={{ mb: 2 }}>
        This page is currently <strong>private</strong>.<br />
        You may want to make it <strong>public</strong> before you continue.
      </Alert>
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
          rel={'noreferrer noopener'}
          variant="body1"
        >
          More about DOIs (external URL)
        </Link>
        <Link
          href={
            SYNAPSE_DOCS_SHARING_SETTINGS_PERMISSIONS_CONDITIONS_FOR_USE_URL
          }
          target={'_blank'}
          rel={'noreferrer noopener'}
          variant="body1"
        >
          Show me how to make this page public
        </Link>
        <Typography variant="body1">
          <strong>Note:</strong> Resources with a DOI may be included in the{' '}
          <Link
            href={`${getEndpoint(
              BackendDestinationEnum.PORTAL_ENDPOINT,
            )}${DATA_CATALOG_PATH_SEGMENT}`}
            target="_blank"
            rel="noopener"
          >
            Synapse Data Catalog
          </Link>
          .
        </Typography>
      </Box>
    </>
  )
}
