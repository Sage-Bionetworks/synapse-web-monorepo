import { Box, Button, Container, Link, Typography } from '@mui/material'
import { useCallback, useState } from 'react'
import { ReactComponent as AcknowledgementStatementsIllustration } from '../../assets/illustrations/acknowledgement_statements_illustration.svg'
import ComponentCollapse from '../ComponentCollapse'
import AcknowledgementsDialog from './AcknowledgementsDialog'
import { MarkdownSynapseProps } from '../Markdown/MarkdownSynapse/MarkdownSynapse'
import MarkdownCollapse from '../Markdown/MarkdownCollapse'
import { StudyAcknowledgements } from './StudyAcknowledgements'
import { LaunchTwoTone } from '@mui/icons-material'
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
          All publications using {portalName} data must include the provided
          statements:
        </Typography>
        <Box sx={{ mb: '2em', svg: { maxWidth: '100%' } }}>
          <AcknowledgementStatementsIllustration />
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          How to use this page:
        </Typography>
        <hr />
        <Typography variant="body1" sx={{ mb: '.5em' }}>
          This page will guide you through creating the acknowledgement
          statements required when publishing with {portalName} data.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mb: '2em',
            '& li::marker': {
              fontWeight: 'bold', // bold the number
            },
          }}
        >
          <ol>
            <li>
              <strong>Select study acknowledgement statements</strong>
              <br />
              From the list below, select all the studies whose data you used.
              Each study has a pre-written acknowledgement statement that must
              be included in your publication.
            </li>
            <li>
              <strong>Generate compiled statement</strong>
              <br />
              Click the Generate Compiled Statement button at the bottom of the
              page. This will compile:
              <ul>
                <li>The Portal Acknowledgement Statement</li>
                <li>The acknowledgement(s) for the studies you selected</li>
                <li>A template data availability statement</li>
              </ul>
              <i>
                Important: You will need to edit the compiled statement to add a
                brief description of the data used in your manuscript and a DOI
                that points to your dataset.
              </i>
            </li>
            <li>
              <strong>Create a DOI for your dataset</strong>
              <br />
              As part of the data availability statement, you will need to
              create a dataset that captures all files used in your publication
              and mint the dataset with a persistent Digital Object Identifier
              (DOI). For more instructions read&nbsp;
              <Link
                href={createDoiHelpUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                How to get a DOI for your Publication
              </Link>
            </li>
          </ol>
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          <ol start={1} style={{ paddingInlineStart: '20px' }}>
            <li>Select study acknowledgement statements</li>
          </ol>
        </Typography>
        <hr />
        <Typography variant="body1">
          From the list below, select all studies whose data you used. Each
          study has a pre-written acknowledgement statement that must be
          included in your publication.
        </Typography>
        <Typography variant="body1" sx={{ mb: '2em' }}>
          You can also expand each section for detailed information or click
          "Copy full statement to clipboard" to save the text.
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
          <ol start={2} style={{ paddingInlineStart: '25px' }}>
            <li>Generate compiled statement</li>
          </ol>
        </Typography>
        <hr />
        <Typography variant="body1" sx={{ fontWeight: 'bold', mb: '1em' }}>
          Click to generate a compiled statement for your publication.
        </Typography>
        <Typography variant="body1" sx={{ mb: '1em' }}>
          The generated text will include your selected study acknowledgement
          statements and all other required statements listed below.
        </Typography>
        <Button
          variant="contained"
          onClick={() => setAcknowledgementsDialogOpen(true)}
          sx={{ mb: '3em' }}
        >
          Generate compiled statement
        </Button>
        <ComponentCollapse
          text={'Click to see other text included in the compiled statement'}
          textVariant="h5"
          textSx={{ fontSize: '16px', fontWeight: 'bold' }}
          textContainerSx={{ backgroundColor: 'unset', p: 0 }}
          collapseBoxSx={{ backgroundColor: 'unset', p: '20px 0px' }}
          iconSx={{ width: '20px', height: '20px' }}
        >
          {portalAcknowledgementProps && (
            <>
              <Typography variant="h5" sx={{ fontSize: '18px', mb: '1em' }}>
                Portal Acknowledgement Statement (Required)
              </Typography>
              <Typography variant="body1" sx={{ mb: '1em' }}>
                This statement is required and automatically included in the
                compiled statement
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
              <Typography variant="h5" sx={{ fontSize: '18px', m: '1em 0' }}>
                Data Availability Statement (Required)
              </Typography>
              <Typography variant="body1" sx={{ mb: '1em' }}>
                This statement is required and automatically included in the
                compiled statement
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
        <hr />
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          <ol start={3} style={{ paddingInlineStart: '25px' }}>
            <li>Create a DOI for your dataset</li>
          </ol>
        </Typography>
        <hr />
        <Typography variant="body1" sx={{ mb: '1em' }}>
          A digital object identifier (DOI) provides a persistent identifier
          that allows readers to find the data cited in your publication.
          Creating a DOI in the Synapse platform is free and required as part of
          the data availability statement.
        </Typography>

        <Button
          variant="outlined"
          href={createDoiHelpUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <LaunchTwoTone sx={{ mr: '0.5em' }} />
          Learn how to get a DOI for your publication
        </Button>
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
