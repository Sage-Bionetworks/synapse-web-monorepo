import { Box, Container, Link, Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import { ReactComponent as AcknowledgementStatementsIllustration } from '../../assets/illustrations/acknowledgement_statements_illustration.svg'
export type AcknowledgementPageProps = {
  portalName: string
  createDoiHelpUrl: string
}

function AcknowledgementPage(props: AcknowledgementPageProps) {
  const { portalName, createDoiHelpUrl } = props
  const [isAcknowledgementsDialogOpen, setAcknowledgementsDialogOpen] =
    useState<boolean>(false)

  const handleCloseDialog = useCallback(
    () => setAcknowledgementsDialogOpen(false),
    [],
  )
  return (
    <>
      <Container maxWidth={'lg'}>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          How to acknowledge data from this portal
        </Typography>
        <hr />
        <Typography variant="body1" sx={{ mb: '1em' }}>
          The data available in the {portalName} would not be possible without
          the participation of research volunteers and the contribution of data
          by collaborating researchers. All use of data from the {portalName}{' '}
          must be acknowledged and referenced appropriately.
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 'bold', mb: '1em' }}>
          If you use data from this portal in a manuscript, article, or any
          other publication, you must include an acknowledgement. All
          acknowledgements for this portal must include the following:
        </Typography>
        <Box sx={{ mb: '2em', svg: { maxWidth: '100%' } }}>
          <AcknowledgementStatementsIllustration />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          How to use this page:
        </Typography>
        <hr />
        <Typography variant="body1" sx={{ mb: '.5em' }}>
          Select study-specific acknowledgement statements from the list below
        </Typography>
        <Typography variant="body1" sx={{ mb: '2em' }}>
          <ol>
            <li>
              When you’ve selected all your studies, click the Generate Data
              Acknowledgements button at the bottom of the page.
            </li>
            <li>
              Customize the generated data availability statement with a summary
              of the contents you used in your manuscript and a digital object
              identifier (DOI). <br />
              <Link
                href={createDoiHelpUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                How do I generate a DOI for my dataset?
              </Link>
            </li>
          </ol>
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          1. Select study-specific acknowledgement statements
        </Typography>
        <hr />
        <Typography variant="body1" sx={{ mb: '1em' }}>
          To properly acknowledge the studies from which you use data, please be
          sure to copy the full statement provided for each study you used. You
          can expand each section for detailed information or simply click 'Copy
          full statement to clipboard' to easily save the text for your
          references.
        </Typography>
        TODO: Add study specific statement list component here
      </Container>
      <Box
        sx={{
          display: { xs: 'flex', lg: 'grid' },
          columnGap: '80px',
          flexDirection: { xs: 'column', lg: undefined },
          gridTemplateColumns: { lg: '40% 60%' },
        }}
      >
        <Box
          sx={{
            justifySelf: 'end',
            alignSelf: 'center',
            '& svg': {
              height: '360px',
              maxWidth: '300px',
            },
            pt: '50px',
            pb: '50px',
          }}
        ></Box>
        {/* <AcknowledgementsDialog
          isOpen={isAcknowledgementsDialogOpen}
          onHide={handleCloseDialog}
        /> */}
      </Box>
    </>
  )
}

export default AcknowledgementPage
