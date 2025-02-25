import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import { EvenlyDistributedWrappedContainer } from './EvenlyDistributedWrappedContainer'
import times from 'lodash-es/times'

const meta: Meta = {
  title: 'UI/EvenlyDistributedWrappedContainer',
  component: EvenlyDistributedWrappedContainer,
  argTypes: {
    nItems: { type: 'number' },
  },
  render: (args, context) => {
    return (
      <EvenlyDistributedWrappedContainer {...args}>
        {times(args.nItems).map(i => (
          <CardExample />
        ))}
      </EvenlyDistributedWrappedContainer>
    )
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

function CardExample() {
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          Word of the Day
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export const CheckboxDemo: Story = {
  name: 'Evenly Distributed Wrapped Container',
  args: {
    nItems: 4,
  },
}
