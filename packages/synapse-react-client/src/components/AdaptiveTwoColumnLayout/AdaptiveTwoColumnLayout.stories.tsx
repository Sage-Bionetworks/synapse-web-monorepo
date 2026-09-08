import type { Meta, StoryObj } from '@storybook/react-vite'
import { Box, Typography } from '@mui/material'
import { Fragment, useState } from 'react'
import {
  AdaptiveTwoColumnLayout,
  AdaptiveTwoColumnLayoutProps,
  MeasurementInfo,
} from './AdaptiveTwoColumnLayout'

// ── Shared content helpers ────────────────────────────────────────────────────

const LOREM_LONG = `Longitudinal analysis of neurodegeneration in aging cohorts spanning three
continents and twelve research sites. Participants aged 55–90 were recruited via
primary care networks and followed at annual intervals using a standardized battery
of cognitive, imaging, and biomarker assessments. High-density cortical EEG recordings
were combined with volumetric MRI to derive atrophy indices for hippocampal subfields
and entorhinal cortex. Plasma neurofilament light chain (NfL) was quantified at each
visit as a continuous marker of axonal injury. Genome-wide association data were
integrated using polygenic risk scoring for late-onset Alzheimer's disease to stratify
participants into low, medium, and high genetic-risk quintiles. Bayesian mixed-effects
models accounted for site, age, sex, education, and APOE ε4 carrier status. The
primary endpoint was annual change in composite cognitive z-score; secondary endpoints
included white-matter hyperintensity volume progression and CSF Aβ42/40 ratio decline.`

const LOREM_SHORT = `A brief study examining neurodegeneration at a single research site using
standard cognitive and imaging assessments.`

type Pair = { key: string; value: string }

const FEW_PROPERTIES: Pair[] = [
  { key: 'Status', value: 'Active' },
  { key: 'Data Type', value: 'Genomics, Proteomics' },
  { key: 'Access', value: 'Public' },
  { key: 'Grant', value: 'NIH R01-AG123456' },
]

const MANY_PROPERTIES: Pair[] = [
  { key: 'Status', value: 'Active' },
  { key: 'Data Type', value: 'Genomics, Proteomics' },
  { key: 'Access', value: 'Public' },
  { key: 'Grant', value: 'NIH R01-AG123456' },
  { key: 'Principal Investigator', value: 'Dr. Jane Smith' },
  { key: 'Institution', value: 'University of California, San Francisco' },
  { key: 'Start Date', value: '2021-03-01' },
  { key: 'End Date', value: '2026-02-28' },
  { key: 'Disease Focus', value: "Alzheimer's Disease" },
  { key: 'Cohort Size', value: '4,200 participants' },
  { key: 'Biobank', value: 'Yes' },
  { key: 'Species', value: 'Human' },
  { key: 'Platform', value: 'Synapse' },
  { key: 'DOI', value: '10.7303/syn1234567' },
  { key: 'Last Updated', value: '2025-11-14' },
]

function PropertyList({
  items,
  color = 'inherit',
}: {
  items: Pair[]
  color?: string
}) {
  return (
    <Box
      component="dl"
      sx={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        columnGap: '24px',
        rowGap: '6px',
        margin: 0,
      }}
    >
      {items.map(({ key, value }) => (
        <Fragment key={key}>
          <Typography
            component="dt"
            variant="caption"
            sx={{
              fontWeight: 600,
              textTransform: 'uppercase',
              opacity: 0.7,
              whiteSpace: 'nowrap',
              paddingTop: '2px',
              color,
            }}
          >
            {key}
          </Typography>
          <Typography
            component="dd"
            variant="body2"
            sx={{ margin: 0, lineHeight: 1.55, color }}
          >
            {value}
          </Typography>
        </Fragment>
      ))}
    </Box>
  )
}

// ── Debug helpers ─────────────────────────────────────────────────────────────

function DebugPanel({ info }: { info: MeasurementInfo | null }) {
  const pending = info === null
  return (
    <Box
      sx={{
        marginTop: '12px',
        padding: '8px 12px',
        background: '#1e1e1e',
        color: pending ? '#9ca3af' : '#d4d4d4',
        fontFamily: 'monospace',
        fontSize: '0.8rem',
        borderRadius: '6px',
      }}
    >
      {pending ? (
        'Measuring…'
      ) : (
        <>
          Left:{' '}
          <strong style={{ color: '#7dd3fc' }}>{info.leftHeight}px</strong>
          {'  ·  '}Right:{' '}
          <strong style={{ color: '#7dd3fc' }}>{info.rightHeight}px</strong>
          {'  ·  '}Ratio:{' '}
          <strong style={{ color: '#fbbf24' }}>{info.ratio.toFixed(3)}</strong>
          {'  →  '}
          <strong style={{ color: info.stacked ? '#86efac' : '#f9a8d4' }}>
            {info.stacked ? '⬇ STACKED' : '↔ SIDE-BY-SIDE'}
          </strong>
        </>
      )}
    </Box>
  )
}

/**
 * Wraps AdaptiveTwoColumnLayout and shows a live debug panel with the
 * measured heights, ratio, and stacking decision.
 */
function WithDebug(props: AdaptiveTwoColumnLayoutProps) {
  const [info, setInfo] = useState<MeasurementInfo | null>(null)
  return (
    <>
      <AdaptiveTwoColumnLayout {...props} onMeasure={setInfo} />
      <DebugPanel info={info} />
    </>
  )
}

// ── Meta ──────────────────────────────────────────────────────────────────────

const meta = {
  title: 'Components/AdaptiveTwoColumnLayout',
  component: AdaptiveTwoColumnLayout,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    leftContent: { control: false },
    rightContent: { control: false },
    onMeasure: { control: false },
    stackRatioThreshold: {
      control: { type: 'number', min: 0.05, max: 1.5, step: 0.05 },
      description:
        'Stack when leftHeight ÷ rightHeight falls below this value. Default 0.45.',
    },
    gap: { control: 'text' },
  },
} as Meta<typeof AdaptiveTwoColumnLayout>

export default meta
type Story = StoryObj<typeof meta>

// ── Stories ───────────────────────────────────────────────────────────────────

/**
 * The left column (long description) is taller than the right (few properties),
 * so ratio > 1 → stays side-by-side.
 */
export const SideBySide: Story = {
  name: 'Side-by-side (long left / short right)',
  render: args => (
    <Box sx={{ padding: '40px 48px', background: '#f8f9fa' }}>
      <WithDebug
        stackRatioThreshold={args.stackRatioThreshold ?? 0.45}
        gap={args.gap ?? '40px'}
        leftContent={
          <Typography variant="body1" sx={{ lineHeight: 1.65 }}>
            {LOREM_LONG.trim()}
          </Typography>
        }
        rightContent={<PropertyList items={FEW_PROPERTIES} />}
      />
    </Box>
  ),
  args: { stackRatioThreshold: 0.45, gap: '40px' },
}

/**
 * The left column (one-sentence description) is much shorter than the right
 * (15 properties), so ratio is small → stacks.
 */
export const Stacked: Story = {
  name: 'Stacked (short left / tall right)',
  render: args => (
    <Box sx={{ padding: '40px 48px', background: '#f8f9fa' }}>
      <WithDebug
        stackRatioThreshold={args.stackRatioThreshold ?? 0.45}
        gap={args.gap ?? '40px'}
        leftContent={
          <Typography variant="body1" sx={{ lineHeight: 1.65 }}>
            {LOREM_SHORT.trim()}
          </Typography>
        }
        rightContent={<PropertyList items={MANY_PROPERTIES} />}
      />
    </Box>
  ),
  args: { stackRatioThreshold: 0.45, gap: '40px' },
}

/**
 * Mimics the HeaderCard scenario: a 4-line clamped description on the left and
 * 8 key-value pairs on the right (dark blue background). Should stack.
 */
export const HeaderCardLike: Story = {
  name: 'HeaderCard-like (clamped description + properties)',
  render: args => (
    <Box sx={{ background: '#253578', color: 'white', padding: '40px 48px' }}>
      <Typography
        variant="overline"
        sx={{ color: 'rgba(255,255,255,0.65)', letterSpacing: '0.1em' }}
      >
        Study
      </Typography>
      <Typography
        variant="h5"
        sx={{ fontWeight: 700, color: 'white', marginBottom: '24px' }}
      >
        Longitudinal Analysis of Neurodegeneration in Aging Cohorts
      </Typography>
      <WithDebug
        stackRatioThreshold={args.stackRatioThreshold ?? 0.45}
        gap={args.gap ?? '40px'}
        leftContent={
          <Box
            sx={{
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.65,
              fontSize: '0.9375rem',
            }}
          >
            {LOREM_LONG.trim()}
          </Box>
        }
        rightContent={
          <PropertyList items={MANY_PROPERTIES.slice(0, 8)} color="white" />
        }
      />
    </Box>
  ),
  args: { stackRatioThreshold: 0.45, gap: '40px' },
}

/**
 * No right column — single full-width layout. Becomes visible immediately
 * (no measurement needed).
 */
export const SingleColumn: Story = {
  name: 'Single column (no right content)',
  render: args => (
    <Box sx={{ padding: '40px 48px', background: '#f8f9fa' }}>
      <WithDebug
        stackRatioThreshold={args.stackRatioThreshold ?? 0.45}
        gap={args.gap ?? '40px'}
        leftContent={
          <Typography variant="body1" sx={{ lineHeight: 1.65 }}>
            {LOREM_LONG.trim()}
          </Typography>
        }
      />
    </Box>
  ),
  args: { stackRatioThreshold: 0.45 },
}
