import { render, screen } from '@testing-library/react'
import CardGridWithLinks, { CardGridWithLinksProps } from './CardGridWithLinks'
import { MemoryRouter } from 'react-router'

const props: CardGridWithLinksProps = {
  linkText: 'More Resources',
  cards: [
    {
      title: 'title 1',
      description: 'desc 1',
      link: '/some-path-1',
    },
    {
      title: 'title 2',
      description: 'desc 2',
      link: '/some-path-2',
    },
    {
      title: 'title 3',
      description: 'desc 3',
      link: '/some-path-3',
    },
  ],
}

const renderComponent = (props: CardGridWithLinksProps) => {
  return render(
    <MemoryRouter>
      <CardGridWithLinks {...props} />
    </MemoryRouter>,
  )
}

describe('CardGridWithLinks tests', () => {
  it('renders card title, description, and link text', () => {
    renderComponent(props)
    props.cards.forEach(card => {
      expect(screen.getByText(card.title)).toBeInTheDocument()
      expect(screen.getByText(card.description)).toBeInTheDocument()
    })
    const linkText = screen.getAllByText('More Resources')
    expect(linkText.length).toBeGreaterThan(0)
  })

  it('renders link', () => {
    renderComponent(props)
    const links = screen.getAllByRole('link', { name: 'More Resources' })
    expect(links).toHaveLength(props.cards.length)

    links.forEach((link, index) => {
      expect(link).toHaveAttribute('href', props.cards[index].link)
    })
  })
})
