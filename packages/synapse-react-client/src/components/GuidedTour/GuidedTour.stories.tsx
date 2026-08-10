import { Box, Button, Paper, Typography } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import GuidedTourTooltip from './GuidedTourTooltip'
import {
  GuidedTourConfig,
  TOUR_DATA_ATTRIBUTE,
  tourSelector,
} from './TourTypes'
import { useGuidedTour } from './useGuidedTour'

const demoTour: GuidedTourConfig = {
  id: 'storybook-demo',
  version: 1,
  steps: [
    {
      target: 'body',
      placement: 'center',
      title: 'Welcome to the portal',
      content:
        'This short tour shows you the main features. It takes about a minute.',
    },
    {
      target: tourSelector('demo-search'),
      title: 'Search everything',
      content: 'Search for studies, files, and tools from any page.',
    },
    {
      target: tourSelector('demo-cards'),
      title: 'Browse resources',
      content:
        'Each section of the home page highlights recently added resources.',
      placement: 'top',
      spotlightPadding: 8,
    },
    {
      target: tourSelector('demo-explore'),
      title: 'Explore the data',
      content: 'This step lives on a second page — the tour navigated to it.',
      pathname: '/explore',
    },
  ],
}

function DemoPage(props: { tour: GuidedTourConfig }) {
  const [pathname, setPathname] = useState('/')
  const { startTour, isRunning, tourNode } = useGuidedTour({
    tour: props.tour,
    currentPathname: pathname,
    onNavigate: setPathname,
  })

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, p: 3 }}>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
        <Button variant="contained" onClick={startTour} disabled={isRunning}>
          Take a tour
        </Button>
        <Button
          onClick={() => setPathname(pathname === '/' ? '/explore' : '/')}
        >
          Toggle page (current: {pathname})
        </Button>
      </Box>
      {pathname === '/' ? (
        <>
          <Paper {...{ [TOUR_DATA_ATTRIBUTE]: 'demo-search' }} sx={{ p: 2 }}>
            <Typography variant="headline3">Search box</Typography>
            <Typography>A stand-in for the portal search.</Typography>
          </Paper>
          <Paper {...{ [TOUR_DATA_ATTRIBUTE]: 'demo-cards' }} sx={{ p: 2 }}>
            <Typography variant="headline3">Resource cards</Typography>
            <Typography>A stand-in for a home page card section.</Typography>
          </Paper>
        </>
      ) : (
        <Paper {...{ [TOUR_DATA_ATTRIBUTE]: 'demo-explore' }} sx={{ p: 2 }}>
          <Typography variant="headline3">Explore page</Typography>
          <Typography>
            A stand-in for the Explore page on a different route.
          </Typography>
        </Paper>
      )}
      {tourNode}
    </Box>
  )
}

const meta = {
  title: 'Synapse/GuidedTour',
  component: DemoPage,
} satisfies Meta<typeof DemoPage>

export default meta

type Story = StoryObj<typeof meta>

export const MultiPageTour: Story = {
  args: {
    tour: demoTour,
  },
}

export const Tooltip: StoryObj<typeof GuidedTourTooltip> = {
  render: () => (
    <GuidedTourTooltip
      continuous
      index={1}
      isLastStep={false}
      size={4}
      step={
        {
          title: 'Search everything',
          content: 'Search for studies, files, and tools from any page.',
        } as never
      }
      backProps={buttonProps('Back')}
      closeProps={buttonProps('Close tour')}
      primaryProps={buttonProps('Next')}
      skipProps={buttonProps('Skip tour')}
      tooltipProps={{ 'aria-modal': true, role: 'alertdialog' }}
      controls={{} as never}
    />
  ),
}

function buttonProps(label: string) {
  return {
    'aria-label': label,
    'data-action': label,
    onClick: () => {},
    role: 'button',
    title: label,
  }
}
