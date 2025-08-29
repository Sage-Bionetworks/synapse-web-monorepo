import { Box, Button, Container, Link, Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import { ReactComponent as AcknowledgementStatementsIllustration } from '../../assets/illustrations/acknowledgement_statements_illustration.svg'
import ComponentCollapse from '../ComponentCollapse'
import FullWidthAlert from '../FullWidthAlert'
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
        <Typography variant="body1" sx={{ mb: '2em' }}>
          To properly acknowledge the studies from which you use data, please be
          sure to copy the full statement provided for each study you used. You
          can expand each section for detailed information or simply click 'Copy
          full statement to clipboard' to easily save the text for your
          references.
        </Typography>
        TODO - Study specific statement list component
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          2. Generate Data Acknowledgements
        </Typography>
        <hr />
        <Typography variant="body1" sx={{ fontWeight: 'bold', mb: '1em' }}>
          Click to generate a set of acknowledgements for your article based on
          your selected studies.
        </Typography>
        <Typography variant="body1" sx={{ mb: '1em' }}>
          The generated text will include all the specific acknowledgement
          statements for the studies you selected, along with all other required
          Acknowledgement Statements listed below.
        </Typography>
        <Button
          variant="contained"
          onClick={() => setAcknowledgementsDialogOpen(true)}
          sx={{ mb: '3em' }}
        >
          Generate Data Acknowledgements
        </Button>
        <ComponentCollapse
          text={
            'Click to see other statements included in the Generated Data Acknowledgement'
          }
          textVariant="h5"
          textSx={{ fontWeight: 'bold' }}
          textContainerSx={{ backgroundColor: undefined, p: 0 }}
          collapseBoxSx={{ backgroundColor: undefined, p: '20px 0px' }}
          iconSx={{ width: '25px', height: '25px' }}
        >
          <Typography variant="body1" sx={{ mb: '1em' }}>
            TODO - Portal Acknowledgement Statement and Data Availability
            Statement
          </Typography>
        </ComponentCollapse>
      </Container>

      {isAcknowledgementsDialogOpen && (
        <FullWidthAlert
          isGlobal={true}
          variant={'info'}
          show={true}
          title={'TODO - Generated Acknowledgements Dialog'}
          onClose={handleCloseDialog}
        />
      )}

      {/* <AcknowledgementsDialog
        isOpen={isAcknowledgementsDialogOpen}
        onHide={handleCloseDialog}
      /> */}
    </>
  )
}

export default AcknowledgementPage
