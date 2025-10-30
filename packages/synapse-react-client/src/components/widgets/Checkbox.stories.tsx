import { Meta, StoryObj } from '@storybook/react-vite'
import {
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
} from '@mui/material'

const meta: Meta = {
  title: 'UI/Checkbox & Radio',
  parameters: {
    design: [
      {
        name: 'checkbox',
        type: 'figma',
        url: 'https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=70-1253',
      },
      {
        name: 'radio',
        type: 'figma',
        url: 'https://www.figma.com/design/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?node-id=132-3283&t=dVoIbwiaKO0XaSkd-4',
      },
    ],
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const CheckboxDemo: Story = {
  name: 'Checkbox',
  render: () => {
    return (
      <Stack>
        <FormControlLabel control={<Checkbox />} label={'uncontrolled'} />
        <FormControlLabel control={<Checkbox checked />} label={'checked'} />
        <FormControlLabel
          control={<Checkbox disabled={true} checked />}
          label={'checked + disabled'}
        />
        <FormControlLabel
          control={<Checkbox checked={false} />}
          label={'unchecked'}
        />
        <FormControlLabel
          control={<Checkbox disabled={true} checked={false} />}
          label={'disabled unchecked'}
        />
        <FormControlLabel
          control={<Checkbox indeterminate />}
          label={'indeterminate'}
        />
        <FormControlLabel
          control={<Checkbox disabled={true} indeterminate />}
          label={'disabled indeterminate'}
        />
      </Stack>
    )
  },
}

export const RadioDemo: Story = {
  name: 'Radio',
  render: () => {
    return (
      <RadioGroup>
        <FormControlLabel control={<Radio checked />} label={'checked'} />
        <FormControlLabel
          control={<Radio disabled={true} checked />}
          label={'checked + disabled'}
        />
        <FormControlLabel
          control={<Radio checked={false} />}
          label={'unchecked'}
        />
        <FormControlLabel
          control={<Radio disabled={true} checked={false} />}
          label={'disabled unchecked'}
        />
      </RadioGroup>
    )
  },
}
