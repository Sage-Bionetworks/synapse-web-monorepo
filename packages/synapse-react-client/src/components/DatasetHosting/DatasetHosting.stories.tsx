import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import { useRef } from 'react'
import { GenericCard } from '../GenericCard/GenericCard'
import { GenericCardIcon } from '../GenericCard/GenericCardIcon'
import {
  CardActionButtonStyle,
  CardActionButtonStyleContext,
} from '../GenericCard/CardActionButtonStyleContext'
import { CardLabel } from '../row_renderers/utils/CardFooter'
import * as SynapseConstants from '@/utils/SynapseConstants'
import {
  DATASET_HOSTING_CONFIG,
  DatasetHostingType,
  fillRepository,
} from './DatasetHosting'
import {
  DatasetDownloadButton,
  DatasetDownloadButtonProps,
} from './DatasetDownloadButton'

/**
 * Demonstrates how the dataset action button adapts to the six ways NF (and other
 * portals) host data, giving users a predictable experience. `hosting` only
 * modulates the standard download affordance — for downloadable datasets the button
 * is the shared `EntityDownloadButton` (Add to Download List / Programmatic Access /
 * Export Table); non-downloadable types link out or are non-actionable. The button
 * text, icon, and tooltip carry the hosting signal — there is no separate badge.
 */

// A mock dataset id/name so the downloadable button can render the shared
// EntityDownloadButton in Storybook.
const MOCK_DATASET_ID = 'syn123'
const MOCK_DATASET_NAME = 'Example NF dataset'

type DatasetCardExample = {
  hosting: DatasetHostingType
  repository?: string
  externalUrl?: string
  title: string
  description: string
}

// Wraps a bare DatasetDownloadButton with a confirmation container, so the
// download-confirmation dialog (e.g. the unauthenticated "Please Sign In" banner)
// renders in-flow beneath the button instead of overlapping neighboring content.
function DemoDownloadButton(
  props: Omit<DatasetDownloadButtonProps, 'downloadConfirmationContainer'>,
) {
  const confirmationRef = useRef<HTMLDivElement>(null)
  return (
    <>
      <DatasetDownloadButton
        {...props}
        downloadConfirmationContainer={confirmationRef}
      />
      <div ref={confirmationRef} />
    </>
  )
}

function DatasetCardDemo(props: {
  example: DatasetCardExample
  actionButtonStyle?: CardActionButtonStyle
}) {
  const { example, actionButtonStyle = 'chip' } = props
  // The card's download-confirmation dialog portals here, mirroring how the real
  // card (TableRowGenericCard) targets its footer — otherwise the unauthenticated
  // "Please Sign In" banner renders inline and overlaps the absolutely-positioned
  // card header.
  const confirmationRef = useRef<HTMLDivElement>(null)
  const labels: CardLabel[] = [
    { columnDisplayName: 'Disease Focus', value: 'Neurofibromatosis type 1' },
    { columnDisplayName: 'Assay', value: 'RNA-seq' },
    { columnDisplayName: 'Files', value: '128' },
  ]

  return (
    <CardActionButtonStyleContext.Provider value={actionButtonStyle}>
      <GenericCard
        type={SynapseConstants.DATASET}
        title={example.title}
        description={example.description}
        icon={
          <GenericCardIcon type={SynapseConstants.DATASET} useTypeForIcon />
        }
        cardTopButtons={
          <DatasetDownloadButton
            entityId={MOCK_DATASET_ID}
            name={example.title}
            hosting={example.hosting}
            repository={example.repository}
            externalUrl={example.externalUrl}
            downloadConfirmationContainer={confirmationRef}
          />
        }
        labels={labels}
      />
      <div ref={confirmationRef} />
    </CardActionButtonStyleContext.Provider>
  )
}

function renderDatasetCard(
  example: DatasetCardExample,
  actionButtonStyle: CardActionButtonStyle = 'chip',
) {
  return (
    <DatasetCardDemo example={example} actionButtonStyle={actionButtonStyle} />
  )
}

const EXAMPLES: Record<string, DatasetCardExample> = {
  synapse: {
    hosting: 'synapse',
    title: 'NF1 Patient-Derived Cell Line Atlas',
    description:
      'Whole-genome and RNA sequencing of patient-derived NF1 cell lines, stored in Synapse-managed storage and downloadable through any Synapse client.',
  },
  externalCloud: {
    hosting: 'external-cloud',
    title: 'Plexiform Neurofibroma Imaging Collection',
    description:
      'High-resolution MRI volumes hosted in a collaborator-owned cloud bucket. Files download exactly like Synapse-hosted data, but live outside Sage-managed storage.',
  },
  externalDownload: {
    hosting: 'external-download',
    repository: 'GEO',
    externalUrl: 'https://www.ncbi.nlm.nih.gov/geo/',
    title: 'Schwann Cell Transcriptome Series',
    description:
      'Expression series indexed in Synapse but downloaded directly from GEO. Fully downloadable through Synapse clients, though transfer speed depends on the external server.',
  },
  externalAccess: {
    hosting: 'external-access',
    repository: 'dbGaP',
    externalUrl: 'https://www.ncbi.nlm.nih.gov/gap/',
    title: 'NF1 Germline Variation Study (Controlled Access)',
    description:
      'Records describing controlled-access whole-genome data held in dbGaP. The data cannot be downloaded through Synapse and must be requested through the external access process.',
  },
  mixed: {
    hosting: 'mixed',
    repository: 'dbGaP',
    title: 'Multi-Omics NF1 Cohort (Open + Controlled)',
    description:
      'Processed expression and imaging files are downloadable from Synapse, while the raw germline sequencing for the same samples is controlled-access in dbGaP. Download retrieves the Synapse-available files; the rest is requested separately.',
  },
  unavailable: {
    hosting: 'unavailable',
    title: 'NF Registry Cohort (Record Only)',
    description:
      'A discovery record describing a cohort whose data is not available for download through Synapse, with no external repository to link to. No download or access action is offered.',
  },
}

const meta = {
  title: 'Explore/DatasetHosting',
  component: DatasetDownloadButton,
  // Downloadable datasets require sign-in to add to the download list; default the
  // stories to authenticated so the buttons show their normal (enabled) state.
  args: { isAuthenticated: true },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: [
          'The dataset action button both communicates **how a dataset is hosted** and performs the correct action for it. `hosting` only modulates the standard download affordance — it never invents a parallel download path.',
          '',
          'A dataset card is driven by three annotation values:',
          '',
          '- **`hosting`** — a *controlled vocabulary* (`synapse`, `external-cloud`, `external-download`, `external-access`, `mixed`, `unavailable`). This is the only field that changes behavior: whether the shared download control is shown, or an external link, or a disabled indicator, plus the icon and tooltip wording. A blank/unknown value falls back to `synapse`.',
          '- **`repository`** — *free text* (e.g. `GEO`, `dbGaP`, `Zenodo`). Used only as the display label in the button/tooltip; it does **not** affect behavior.',
          '- **`externalUrl`** — *free text*, the link target for non-downloadable (`external-access`) datasets.',
          '',
          'For downloadable types the button adds the dataset to the download list (the only download path); signed-out users get a clickable button that flips to a red "Sign in to download" call-to-action opening the sign-in modal.',
        ].join('\n'),
      },
    },
  },
} satisfies Meta<DatasetDownloadButtonProps & { isAuthenticated: boolean }>
export default meta

const MODEL_ROWS: {
  field: string
  kind: string
  affectsBehavior: string
  example: string
}[] = [
  {
    field: 'hosting',
    kind: 'Controlled (6 values)',
    affectsBehavior: 'Yes — the only field that does',
    example: 'external-download',
  },
  {
    field: 'repository',
    kind: 'Free text',
    affectsBehavior: 'No — display label only',
    example: 'GEO, Zenodo, Smith Lab Server…',
  },
  {
    field: 'externalUrl',
    kind: 'Free text',
    affectsBehavior: 'No — link target for external-access',
    example: 'https://www.ncbi.nlm.nih.gov/gap/',
  },
]

/**
 * Reviewer-facing summary of the data model: which annotation is controlled vs.
 * free text, and which one actually drives behavior.
 */
export const Overview: StoryObj = {
  render: () => (
    <Stack gap={3} sx={{ maxWidth: 820 }}>
      <Box>
        <Typography variant="headline3" sx={{ mb: 1 }}>
          Dataset hosting — data model
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          One button per dataset communicates how it is hosted and performs the
          right action. It is driven by three annotation values:
        </Typography>
      </Box>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Annotation</strong>
            </TableCell>
            <TableCell>
              <strong>Kind</strong>
            </TableCell>
            <TableCell>
              <strong>Drives behavior?</strong>
            </TableCell>
            <TableCell>
              <strong>Example</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {MODEL_ROWS.map(row => (
            <TableRow key={row.field}>
              <TableCell>
                <code>{row.field}</code>
              </TableCell>
              <TableCell>{row.kind}</TableCell>
              <TableCell>{row.affectsBehavior}</TableCell>
              <TableCell>{row.example}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box>
        <Typography
          variant="body1"
          sx={{ display: 'block', mb: 1, fontWeight: 700 }}
        >
          The six hosting values
        </Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>
                <strong>hosting</strong>
              </TableCell>
              <TableCell>
                <strong>Downloadable?</strong>
              </TableCell>
              <TableCell>
                <strong>Button style</strong>
              </TableCell>
              <TableCell>
                <strong>Chip style</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(
              Object.keys(
                DATASET_HOSTING_CONFIG,
              ) as (keyof typeof DATASET_HOSTING_CONFIG)[]
            ).map(key => {
              const config = DATASET_HOSTING_CONFIG[key]
              const repository = config.label.includes('{repository}')
                ? key === 'external-access'
                  ? 'dbGaP'
                  : 'GEO'
                : undefined
              const button = (style: CardActionButtonStyle) => (
                <CardActionButtonStyleContext.Provider value={style}>
                  <DemoDownloadButton
                    entityId={MOCK_DATASET_ID}
                    name={MOCK_DATASET_NAME}
                    hosting={key}
                    repository={repository}
                    externalUrl="https://example.org/"
                  />
                </CardActionButtonStyleContext.Provider>
              )
              return (
                <TableRow key={key}>
                  <TableCell>
                    <code>{key}</code>
                  </TableCell>
                  <TableCell>{config.downloadable ? 'Yes' : 'No'}</TableCell>
                  <TableCell>{button('button')}</TableCell>
                  <TableCell>{button('chip')}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Box>
    </Stack>
  ),
}

/** All six dataset flavors stacked, each annotated with what the user sees and why. */
export const AllFlavors: StoryObj = {
  name: 'All Flavors - Chip Style',
  render: () => (
    <Stack gap={4} sx={{ maxWidth: 900 }}>
      {Object.values(EXAMPLES).map(example => {
        const config = DATASET_HOSTING_CONFIG[example.hosting]
        return (
          <Box key={example.hosting}>
            <Stack direction="row" gap={1} alignItems="baseline" sx={{ mb: 1 }}>
              <Typography variant="overline" sx={{ fontWeight: 700 }}>
                {example.hosting}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {config.downloadable
                  ? 'Downloadable through Synapse'
                  : 'Not downloadable — access handled externally'}
                {config.tooltip
                  ? ` · ${fillRepository(config.tooltip, example.repository)}`
                  : ''}
              </Typography>
            </Stack>
            {renderDatasetCard(example)}
          </Box>
        )
      })}
    </Stack>
  ),
}

/**
 * The same hosting types rendered with `actionButtonStyle: 'button'` — the default,
 * compact `GenericCardActionButton` look. Portals choose `'chip'` (above) or
 * `'button'` (here) per card configuration.
 */
export const ButtonStyle: StoryObj = {
  name: 'All Flavors - Button Style',
  render: () => (
    <Stack gap={4} sx={{ maxWidth: 900 }}>
      {Object.values(EXAMPLES).map(example => (
        <Box key={example.hosting}>
          <Typography variant="overline" sx={{ fontWeight: 700 }}>
            {example.hosting}
          </Typography>
          {renderDatasetCard(example, 'button')}
        </Box>
      ))}
    </Stack>
  ),
}

/**
 * Signed out: the download button stays clickable; clicking it flips the button
 * to a red "Sign in to download" call-to-action (which opens the sign-in modal in
 * the app), rather than greying out. External-access (a plain link-out) and
 * unavailable are unaffected by auth.
 */
export const SignedOut: StoryObj = {
  args: { isAuthenticated: false },
  render: () => (
    <Stack gap={4} sx={{ maxWidth: 900 }}>
      {[EXAMPLES.synapse, EXAMPLES.externalAccess, EXAMPLES.unavailable].map(
        example => (
          <Box key={example.hosting}>
            <Typography variant="overline" sx={{ fontWeight: 700 }}>
              {example.hosting}
            </Typography>
            {renderDatasetCard(example)}
          </Box>
        ),
      )}
    </Stack>
  ),
}

export const SynapseHosted: StoryObj = {
  render: () => renderDatasetCard(EXAMPLES.synapse),
}

/**
 * A dataset whose `hosting` annotation is blank (the common case for legacy /
 * Synapse-hosted rows). It falls back to the default `synapse` treatment: the
 * standard Download control — identical to `SynapseHosted`.
 */
export const BlankHosting: StoryObj = {
  render: () =>
    renderDatasetCard({
      hosting: '' as DatasetHostingType,
      title: 'Legacy NF Dataset (no hosting annotation)',
      description:
        'This row has no hosting value. The card treats it as Synapse-hosted: the standard Download control.',
    }),
}

export const ExternalCloudBucket: StoryObj = {
  render: () => renderDatasetCard(EXAMPLES.externalCloud),
}

export const ExternalDownloadable: StoryObj = {
  render: () => renderDatasetCard(EXAMPLES.externalDownload),
}

export const ExternalAccessOnly: StoryObj = {
  render: () => renderDatasetCard(EXAMPLES.externalAccess),
}

/**
 * A dataset whose files live in more than one location — some downloadable through
 * Synapse, some controlled externally. Download stays the primary action (it
 * retrieves the Synapse-available subset); the label ("Download available files")
 * and tooltip flag that the rest must be obtained separately from the repository.
 */
export const MixedSources: StoryObj = {
  render: () => renderDatasetCard(EXAMPLES.mixed),
}

/**
 * A discovery record whose data is not downloadable through Synapse and has no
 * external repository to link to (distinct from external-access). The card shows
 * a neutral, non-actionable "Not available for download" button — no download, no link.
 */
export const Unavailable: StoryObj = {
  render: () => renderDatasetCard(EXAMPLES.unavailable),
}

/**
 * `repository` is free text — whatever the curator enters renders verbatim in the
 * label and tooltip. The same `hosting` value works with any repository name; only
 * `hosting` decides whether it's a download or an external-access link.
 */
export const FreeTextRepository: StoryObj = {
  render: () => (
    <Stack gap={3} sx={{ maxWidth: 720 }}>
      <Box>
        <Typography variant="body1" sx={{ fontWeight: 700, mb: 1 }}>
          external-download — any repository, still a download
        </Typography>
        <Stack direction="row" gap={2} flexWrap="wrap" alignItems="center">
          {['GEO', 'ENA', 'Zenodo', 'figshare', 'Smith Lab Server'].map(
            repository => (
              <DemoDownloadButton
                key={repository}
                entityId={MOCK_DATASET_ID}
                name={MOCK_DATASET_NAME}
                hosting="external-download"
                repository={repository}
              />
            ),
          )}
        </Stack>
      </Box>
      <Box>
        <Typography variant="body1" sx={{ fontWeight: 700, mb: 1 }}>
          external-access — any repository, still an external link
        </Typography>
        <Stack direction="row" gap={2} flexWrap="wrap" alignItems="center">
          {['dbGaP', 'EGA', 'JGA', 'Some Other Archive'].map(repository => (
            <DemoDownloadButton
              key={repository}
              name={MOCK_DATASET_NAME}
              hosting="external-access"
              repository={repository}
              externalUrl="https://example.org/"
            />
          ))}
        </Stack>
      </Box>
      <Box>
        <Typography variant="body1" sx={{ fontWeight: 700, mb: 1 }}>
          No repository provided — graceful generic label
        </Typography>
        <Stack direction="row" gap={2} flexWrap="wrap" alignItems="center">
          <DemoDownloadButton
            entityId={MOCK_DATASET_ID}
            name={MOCK_DATASET_NAME}
            hosting="external-download"
          />
          <DemoDownloadButton
            name={MOCK_DATASET_NAME}
            hosting="external-access"
            externalUrl="https://example.org/"
          />
        </Stack>
      </Box>
    </Stack>
  ),
}
