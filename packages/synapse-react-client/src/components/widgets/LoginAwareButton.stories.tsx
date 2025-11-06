import { Meta, StoryObj } from '@storybook/react-vite'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { LoginAwareButton } from './LoginAwareButton'

const meta: Meta = {
  title: 'UI/LoginAwareButton',
  component: LoginAwareButton,
  parameters: {
    backgrounds: {
      default: 'Challenge Header',
      values: [{ name: 'Challenge Header', value: '#3E68AA' }],
    },
  },
  argTypes: {
    isAuthenticated: {
      control: { type: 'boolean' },
    },
  },
  args: {
    isAuthenticated: true,
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Register: Story = {
  args: {
    isAuthenticated: false,
    children: 'Register for this Challenge',
    to: '/pathName?key=value#fragment',
    href: '',
    disableElevation: true,
    variant: 'contained',
    color: 'secondary',
    sx: {
      color: 'white',
      fontSize: '1.12em',
      textTransform: 'none',
      padding: '4px 18px',
      fontWeight: 400,
      ':hover': { color: 'white' },
      ':active': { color: 'white' },
      ':visited': { color: 'white' },
    },
    replace: false,
  },
}

export const Leave: Story = {
  args: {
    isAuthenticated: true,
    children: 'Leave Challenge',
    onClick: () => {
      alert('Leave Challenge Clicked')
    },
    endIcon: <ExitToAppIcon />,
    variant: 'outlined',
    sx: {
      borderColor: 'white',
      color: 'white',
      fontSize: '1.12em',
      textTransform: 'none',
      padding: '4px 18px',
      fontWeight: 400,
      ':hover': {
        color: '#172430',
        borderColor: '#172430',
      },
    },
    replace: false,
  },
}
