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

const DATA_ACCESS_POLICY_PATH = '/Data Access/Data Access Overview'
const DUC_URL = 'https://www.synapse.org/Synapse:syn68932033'
const ORCID_REGISTER_URL = 'https://orcid.org/register'

function PolicyLink(props: { children: ReactNode }) {
  return (
    <Link component={RouterLink} to={DATA_ACCESS_POLICY_PATH}>
      {props.children}
    </Link>
  )
}

function useAccessSteps(): AccessStep[] {
  const registrationUrl = useOneSageURL('/register1')
  return [
    {
      title: 'Create an account with Sage Bionetworks',
      body: (
        <Typography>
          <Link href={registrationUrl.toString()}>Register for an account</Link>
          . Account registration requires an ORCID and an institutional email
          address (see the <PolicyLink>data access requirements</PolicyLink> for
          what counts as an institutional email).{' '}
          <Link href={ORCID_REGISTER_URL} target="_blank" rel="noreferrer">
            Get an ORCID
          </Link>{' '}
          if you don&apos;t have one.
        </Typography>
      ),
    },
    {
      title: 'Identify team members for your project',
      body: (
        <Stack sx={{ gap: 1 }}>
          <Typography>
            Data access requests require a signed agreement, known as a{' '}
            <Link href={DUC_URL} target="_blank" rel="noreferrer">
              Data Use Certificate (DUC)
            </Link>
            , between Sage Bionetworks and any member of your team who will
            access requested data. Your research team must include a senior
            researcher (typically an academic professor or scientific project
            manager) who will serve as the lead data access requester. This
            person must be a permanent employee of their institution with direct
            responsibility over all team members who will access data as part of
            the project. Lab technicians, staff scientists, and trainees
            (postdocs and students) cannot serve as a lead data access
            requester.
          </Typography>
          <Typography>
            If your position does not fall under the category of a senior
            researcher, you may still submit a data access request to the ALS
            KP. However, the team lead of your research group must sign a DUC on
            your behalf as the lead data access requester. See the full{' '}
            <PolicyLink>eligibility requirements</PolicyLink>.
          </Typography>
        </Stack>
      ),
    },
    {
      title: 'Invite your team members to the project',
      body: (
        <Typography>
          All team members must create an account with Sage Bionetworks (step
          1). Account registration requires an ORCID and an institutional email
          address. When you submit the request, you add each team member by
          their username, so everyone needs an account first.
        </Typography>
      ),
    },
    {
      title: 'Submit a data access request',
      body: (
        <Stack sx={{ gap: 1 }}>
          <Typography>
            Find the datasets you wish to access on the{' '}
            <Link component={RouterLink} to="/Explore/Datasets">
              Datasets
            </Link>{' '}
            page and request access in Synapse. You will be asked to:
          </Typography>
          <Box component="ol" sx={{ m: 0 }}>
            <li>
              <Typography>identify the datasets you wish to access</Typography>
            </li>
            <li>
              <Typography>
                submit an executed{' '}
                <Link href={DUC_URL} target="_blank" rel="noreferrer">
                  DUC
                </Link>
              </Typography>
            </li>
            <li>
              <Typography>
                submit an Intended Data Use (IDU) statement
              </Typography>
            </li>
          </Box>
          <Typography>
            The DUC must be signed by the lead data access requester, any team
            members who will access data, and your institution&apos;s authorized
            signing official.
          </Typography>
          <Typography>
            The IDU is a brief summary (500 words or less) of the scientific
            purpose, analysis, computing environment, data safety measures, and
            outputs of your planned research. The IDU questions, with examples,
            are in the <PolicyLink>data access requirements</PolicyLink>.
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
            Requesting controlled access
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
          Need help?{' '}
          <Link component={RouterLink} to="/ContactUs">
            Get in touch with us
          </Link>
          .
        </Alert>
      </Stack>
    </AMPALSResearchPageLayout>
  )
}

export default HowToAccessData
