import { Meta, StoryObj } from '@storybook/react-vite'
import CTASectionWrapper from './CTASectionWrapper'
import { Button, Typography, Link } from '@mui/material'
import { AddAlertTwoTone } from '@mui/icons-material'

const meta = {
  title: 'Home Page/CTASectionWrapper',
  component: CTASectionWrapper,
  parameters: {
    chromatic: { viewports: [600, 1200] },
    withRouter: true,
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const title = 'Test Title'
const subtitle = 'Test Subtitle'
const buttonText = 'Test Button'
const buttonLink = 'https://test-link.com'

const content = (
  <>
    <Typography
      variant="headline2"
      sx={{
        fontSize: '24px',
        color: 'grey.900',
        lineHeight: 'normal',
        marginBottom: '16px',
      }}
    >
      {title}
    </Typography>
    <Typography
      sx={{
        color: 'grey.900',
        fontStyle: 'italic',
        lineHeight: '22.4px',
        marginBottom: '26px',
      }}
    >
      {subtitle}
    </Typography>
    <Button
      variant="contained"
      component={Link}
      href={buttonLink}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        color: '#FFF',
        '&:hover': { color: '#FFF', textDecorationColor: '#FFF' },
        '&:focus': { color: '#FFF' },
        textDecorationColor: '#FFF',
        display: 'flex',
        padding: '6px 24px',
        gap: '10px',
      }}
    >
      <AddAlertTwoTone sx={{ width: '24px', height: '24px' }} />
      <Typography
        sx={{
          fontSize: '18px',
          fontWeight: '600',
          lineHeight: '144%',
        }}
      >
        {buttonText}
      </Typography>
    </Button>
  </>
)

export const Demo: Story = {
  render: args => <CTASectionWrapper {...args} />,
  args: {
    content: content,
    themeMode: 'light',
  },
}
