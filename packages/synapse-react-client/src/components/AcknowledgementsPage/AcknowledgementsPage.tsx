import { Box, Button, Container, Link, Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import { ReactComponent as AcknowledgementStatementsIllustration } from '../../assets/illustrations/acknowledgement_statements_illustration.svg'
import ComponentCollapse from '../ComponentCollapse'
import AcknowledgementsDialog from './AcknowledgementsDialog'
import { MarkdownSynapseProps } from '../Markdown/MarkdownSynapse'
import MarkdownCollapse from '../Markdown/MarkdownCollapse'
import { StudyAcknowledgements } from './StudyAcknowledgements'
export type AcknowledgementPageProps = {
  portalName: string
  createDoiHelpUrl: string
  portalAcknowledgementProps?: MarkdownSynapseProps
  dataAvailabilityProps?: MarkdownSynapseProps
  studyAcknowledgementSql: string
}

export type AcknowledgementItem = {
  title: string
  statement: string
}

export function AcknowledgementPage(props: AcknowledgementPageProps) {
  const {
    portalName,
    createDoiHelpUrl,
    portalAcknowledgementProps,
    dataAvailabilityProps,
    studyAcknowledgementSql,
  } = props
  const [isAcknowledgementsDialogOpen, setAcknowledgementsDialogOpen] =
    useState<boolean>(false)

  const [portalAcknowledgement, setPortalAcknowledgement] = useState<string>()
  const [dataAvailabilityStatement, setDataAvailabilityStatement] =
    useState<string>()
  const [acknowledgementItems, setAcknowledgementItems] = useState<
    AcknowledgementItem[]
  >([])
  const handleCloseDialog = useCallback(
    () => setAcknowledgementsDialogOpen(false),
    [],
  )
  return (
    <>
      <Container maxWidth={'lg'} sx={{ mt: '2em', mb: '2em' }}>
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
        <StudyAcknowledgements
          sql={studyAcknowledgementSql}
          onSelectChange={(item, checked) => {
            if (checked) {
              // add
              acknowledgementItems.push(item)
            } else {
              // remove
              const index = acknowledgementItems.findIndex(
                i => i.title === item.title && i.statement === item.statement,
              )
              if (index > -1) {
                acknowledgementItems.splice(index, 1)
              }
            }
            setAcknowledgementItems([...acknowledgementItems])
          }}
        />
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
          textContainerSx={{ backgroundColor: 'unset', p: 0 }}
          collapseBoxSx={{ backgroundColor: 'unset', p: '20px 0px' }}
          iconSx={{ width: '25px', height: '25px' }}
        >
          {portalAcknowledgementProps && (
            <>
              <Typography variant="h5" sx={{ mb: '1em' }}>
                Portal Acknowledgement Statement (Required)
              </Typography>
              <Typography variant="body1" sx={{ mb: '1em' }}>
                This statement is required, but is automatically included in the
                generated data acknowledgement text.
              </Typography>
              <MarkdownCollapse
                {...portalAcknowledgementProps}
                setPlainTextResult={setPortalAcknowledgement}
                textDescription="full statement"
                showCopyPlainText={true}
              />
            </>
          )}
          {dataAvailabilityProps && (
            <>
              <Typography variant="h5" sx={{ m: '1em 0' }}>
                Data Availability Statement (Required)
              </Typography>
              <Typography variant="body1" sx={{ mb: '1em' }}>
                This statement is required, but is automatically included in the
                generated data acknowledgement text.
              </Typography>
              <MarkdownCollapse
                {...dataAvailabilityProps}
                setPlainTextResult={setDataAvailabilityStatement}
                textDescription="full statement"
                showCopyPlainText={true}
              />
            </>
          )}
        </ComponentCollapse>
      </Container>

      <AcknowledgementsDialog
        open={isAcknowledgementsDialogOpen}
        onClose={handleCloseDialog}
        createDoiHelpUrl={createDoiHelpUrl}
        portalAcknowledgement={portalAcknowledgement}
        dataAvailabilityStatement={dataAvailabilityStatement}
        studyAcknowledgements={acknowledgementItems}
      />
    </>
  )
}

export default AcknowledgementPage
