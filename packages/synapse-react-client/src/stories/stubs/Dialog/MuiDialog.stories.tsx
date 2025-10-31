import { Meta, StoryObj } from '@storybook/react-vite'
import { Dialog } from './MuiDialog'

const meta = {
  title: 'UI/MUI/Dialog',
  component: Dialog,
  argTypes: {
    fullWidth: {
      options: [false, true],
      control: { type: 'boolean' },
    },
    maxWidth: {
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/0oPm5lLSUva8kyfVNMS6FA/Sage-Style-%26-Component-Library?type=design&node-id=1361-18613',
    },
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Demo: Story = {
  args: {
    open: true,
    maxWidth: 'sm',
    title: 'My Dialog Title',
    content: (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          consequat ultricies bibendum. Suspendisse sapien sem, dignissim eget
          viverra ut, volutpat vitae tellus. Nam rhoncus commodo velit, vitae
          suscipit est aliquet id. Cras et lectus finibus, imperdiet quam id,
          tempor velit. Cras ex mi, fermentum ac facilisis varius, euismod sed
          lectus. Praesent gravida mollis purus, non rhoncus elit placerat sit
          amet. Phasellus id elementum lorem. Pellentesque pharetra tincidunt
          mollis. Morbi faucibus porttitor lacus ac condimentum. Nulla quam
          erat, tincidunt quis dolor eu, dictum sodales ligula. Etiam eget
          luctus eros. Curabitur tempor massa ac nisi iaculis pellentesque.
          Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
        <p>
          Vivamus fermentum in ex quis vestibulum. Vestibulum id nibh varius
          magna porttitor semper. Phasellus eu tellus libero. Maecenas nec purus
          eu ante suscipit imperdiet. Vestibulum elementum a tellus at
          convallis. Vestibulum tincidunt tristique dictum. Nullam imperdiet
          ultricies ex et tristique.
        </p>
        <p>
          Proin suscipit fringilla massa, hendrerit tincidunt sapien. Vestibulum
          gravida convallis ligula quis vulputate. Curabitur venenatis purus sed
          volutpat pretium. Mauris tortor nibh, ornare in blandit vitae,
          interdum vitae nibh. Proin nec feugiat nisi. Morbi velit felis,
          sollicitudin porta enim in, gravida pretium magna. Cras nec risus
          vestibulum, rhoncus purus quis, iaculis est.
        </p>
        <p>
          {' '}
          Maecenas quis semper sem. Donec tincidunt quis neque congue eleifend.
          Fusce ultrices nibh id purus tincidunt egestas. In semper dolor
          tempor, consectetur enim eget, convallis dolor. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Suspendisse tincidunt sapien vitae
          diam tincidunt commodo. Nullam porta lacinia nisi, eget scelerisque
          ante commodo a. Integer tincidunt id lectus sit amet finibus. Sed
          elementum aliquam nibh. Nullam dapibus a nisi ac varius. Praesent eu
          sapien tortor. Aliquam eros turpis, ultricies ac fringilla eu,
          dignissim pellentesque odio. Pellentesque sodales lorem felis, et
          mollis ante accumsan nec. Donec augue est, vestibulum id ultricies
          eget, ultrices in mauris.
        </p>
      </>
    ),
  },
}
