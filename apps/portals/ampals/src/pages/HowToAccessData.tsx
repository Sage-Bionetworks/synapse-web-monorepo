import researcherResourcesHeaderSlat from '@/assets/researcher_resources_slat.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  Box,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import AMPALSResearchPageLayout from '@sage-bionetworks/synapse-portal-framework/components/ampals/AMPALSResearchPageLayout'
import { ReactNode } from 'react'
import { Link as RouterLink } from 'react-router'
import { useOneSageURL } from 'synapse-react-client/utils/hooks/useOneSageURL'

const RDCA_DAP_URL = 'https://c-path.org/programs/rdca-dap/'
const GEO_URL = 'https://www.ncbi.nlm.nih.gov/geo/'

type AccessType = { title: string; description: ReactNode }

const ACCESS_TYPES: AccessType[] = [
  {
    title: 'Open access',
    description: (
      <>
        Datasets hosted in public repositories such as the{' '}
        <Link href={GEO_URL} target="_blank" rel="noreferrer">
          Gene Expression Omnibus (GEO)
        </Link>{' '}
        are free to use. No account or request is needed.
      </>
    ),
  },
  {
    title: 'Controlled access (Synapse)',
    description:
      'Datasets hosted in Synapse are protected to respect participant consent. You need a Synapse account and an approved data access request. The steps below walk you through the process.',
  },
  {
    title: 'Critical Path Institute (RDCA-DAP)',
    description: (
      <>
        Datasets from the Critical Path Institute are requested through the{' '}
        <Link href={RDCA_DAP_URL} target="_blank" rel="noreferrer">
          Rare Disease Cures Accelerator-Data and Analytics Platform
        </Link>
        , which has its own application process.
      </>
    ),
  },
]

type AccessStep = { title: string; body: ReactNode }

function useAccessSteps(): AccessStep[] {
  const registrationUrl = useOneSageURL('/register1')
  return [
    {
      title: 'Create an account',
      body: (
        <Typography>
          <Link href={registrationUrl.toString()}>
            Register for a Synapse account
          </Link>{' '}
          using your institutional email address, and link your ORCID profile.
          Every person who will work with controlled data needs their own
          account.
        </Typography>
      ),
    },
    {
      title: 'Identify your team and a lead data access requester',
      body: (
        <Typography>
          Decide who on your team will access the data. Choose one person to act
          as the lead data access requester. That person submits the request on
          behalf of the team and is the main contact for the Synapse Access and
          Compliance Team (ACT).
        </Typography>
      ),
    },
    {
      title: 'Make sure each team member is registered',
      body: (
        <Typography>
          The lead requester adds team members to the request by their Synapse
          username, so each team member must complete step 1 before the request
          is submitted.
        </Typography>
      ),
    },
    {
      title: 'Submit a data access request',
      body: (
        <Stack sx={{ gap: 1 }}>
          <Typography>
            Find the dataset on the{' '}
            <Link component={RouterLink} to="/Explore/Datasets">
              Datasets
            </Link>{' '}
            page and request access. The lead requester submits:
          </Typography>
          <Box component="ul" sx={{ m: 0 }}>
            <li>
              <Typography>
                A Data Use Certificate (DUC), signed by your institution&apos;s
                signing official
              </Typography>
            </li>
            <li>
              <Typography>
                An Intended Data Use (IDU) statement describing your research
              </Typography>
            </li>
          </Box>
          <Typography>
            ACT reviews the request and emails you when a decision is made.
          </Typography>
        </Stack>
      ),
    },
  ]
}

function HowToAccessData() {
  const accessSteps = useAccessSteps()
  return (
    <AMPALSResearchPageLayout
      headerTitle="How to Access Data"
      headerImageURL={researcherResourcesHeaderSlat}
      sidebarTitle="Accessing data from the ALS Knowledge Portal"
    >
      <Stack sx={{ gap: 4 }}>
        {/* PORTALS-4585: DUC/IDU wording needs ACT sign-off before release. */}
        <Alert severity="warning">
          Draft content, pending review by the Synapse Access and Compliance
          Team.
        </Alert>
        <Stack component="section" sx={{ gap: 2 }}>
          <Typography variant="headline2">Types of access</Typography>
          <Typography>
            Data in the ALS Knowledge Portal comes from several repositories.
            How you get access depends on where a dataset is hosted.
          </Typography>
          {ACCESS_TYPES.map(accessType => (
            <Box key={accessType.title}>
              <Typography variant="headline3">{accessType.title}</Typography>
              <Typography>{accessType.description}</Typography>
            </Box>
          ))}
        </Stack>
        <Stack component="section" sx={{ gap: 2 }}>
          <Typography variant="headline2">
            Requesting controlled access in Synapse
          </Typography>
          <Box>
            {accessSteps.map((step, index) => (
              <Accordion key={step.title} disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="headline3">
                    Step {index + 1}: {step.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>{step.body}</AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Stack>
        <Alert severity="info">
          Questions about accessing data?{' '}
          <Link component={RouterLink} to="/ContactUs">
            Contact us
          </Link>
          .
        </Alert>
      </Stack>
    </AMPALSResearchPageLayout>
  )
}

export default HowToAccessData
