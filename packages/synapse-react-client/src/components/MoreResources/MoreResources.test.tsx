import { render, screen } from '@testing-library/react'
import MoreResources, { MoreResourcesProps } from './MoreResources'
import { MemoryRouter } from 'react-router'

const props: MoreResourcesProps = {
  resources: [
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

const renderComponent = (props: MoreResourcesProps) => {
  return render(
    <MemoryRouter>
      <MoreResources {...props} />
    </MemoryRouter>,
  )
}

describe('MoreResources tests', () => {
  it('renders card title, description, and link text', () => {
    renderComponent(props)
    props.resources.forEach(resource => {
      expect(screen.getByText(resource.title)).toBeInTheDocument()
      expect(screen.getByText(resource.description)).toBeInTheDocument()
    })
    const linkText = screen.getAllByText('More Resources')
    expect(linkText.length).toBeGreaterThan(0)
  })

  it('renders link', () => {
    renderComponent(props)
    const links = screen.getAllByRole('link', { name: 'More Resources' })
    expect(links).toHaveLength(props.resources.length)

    links.forEach((link, index) => {
      expect(link).toHaveAttribute('href', props.resources[index].link)
    })
  })
})
