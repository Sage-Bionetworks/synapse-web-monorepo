import type { Meta, StoryObj } from '@storybook/react-vite'
import HubAndSpokes, { Spoke } from './HubAndSpokes'

const COLORS = [
  '#a5001e',
  '#8c1515',
  '#00768c',
  '#a51c30',
  '#002d72',
  '#20558a',
]

function textImage(text: string, color: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="260" height="80" viewBox="0 0 260 80"><rect x="0" y="10" width="60" height="60" rx="8" fill="${color}"/><text x="72" y="52" font-family="sans-serif" font-size="28" font-weight="700" fill="${color}">${text}</text></svg>`
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

const hubImageUrl = `data:image/svg+xml;utf8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><radialGradient id="g"><stop offset="0" stop-color="#e2f3fc"/><stop offset="1" stop-color="#e4f4f5"/></radialGradient></defs><circle cx="100" cy="100" r="100" fill="url(#g)"/><text x="100" y="112" text-anchor="middle" font-family="sans-serif" font-size="32" font-weight="700" fill="#1d2939">Hub</text></svg>',
)}`

function makeSpokes(count: number): Spoke[] {
  return Array.from({ length: count }, (_, index) => {
    const name = `Center ${index + 1}`
    return {
      label: `Research Area ${index + 1}`,
      href: `https://www.synapse.org/?center=${index + 1}`,
      imageUrl: textImage(name, COLORS[index % COLORS.length]),
      imageAlt: name,
    }
  })
}

const meta = {
  title: 'Components/HubAndSpokes',
  component: HubAndSpokes,
  tags: ['autodocs'],
  args: {
    hubImageUrl,
    hubImageAlt: 'Hub',
  },
} satisfies Meta<typeof HubAndSpokes>

export default meta
type Story = StoryObj<typeof meta>

export const EightSpokes: Story = {
  args: { spokes: makeSpokes(8) },
}

export const SixSpokes: Story = {
  args: { spokes: makeSpokes(6) },
}

export const FourSpokes: Story = {
  args: { spokes: makeSpokes(4) },
}

export const NarrowContainer: Story = {
  args: { spokes: makeSpokes(8) },
  decorators: [
    Story => (
      <div style={{ maxWidth: 400 }}>
        <Story />
      </div>
    ),
  ],
}
