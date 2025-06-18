import { render, screen } from '@testing-library/react'
import CTASectionWrapper, { CTASectionWrapperProps } from './CTASectionWrapper'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'
import { AddAlertTwoTone } from '@mui/icons-material'

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

const mockProps: CTASectionWrapperProps = {
  content: content,
  themeMode: 'light',
}

describe('CTASectionWrapper tests', () => {
  it('renders title and subtitle correctly', () => {
    render(<CTASectionWrapper {...mockProps} />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
  })

  it('renders button with external link', () => {
    render(<CTASectionWrapper {...mockProps} />)
    const button = screen.getByRole('link')
    expect(button).toHaveAttribute('href', 'https://test-link.com')
    expect(button).toHaveAttribute('target', '_blank')
    expect(screen.getByText('Test Button')).toBeInTheDocument()
  })

  it('renders the correct icon inside the button', () => {
    render(<CTASectionWrapper {...mockProps} />)
    const icon = screen.getByTestId('AddAlertTwoToneIcon')
    expect(icon).toBeInTheDocument()
  })
})
