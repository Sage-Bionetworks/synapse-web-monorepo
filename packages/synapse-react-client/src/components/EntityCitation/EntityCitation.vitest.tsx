import { render, screen } from '@testing-library/react'
import EntityCitation from './EntityCitation'

describe('EntityCitation tests', () => {
  it('Only entity DOI exits', () => {
    render(
      <EntityCitation
        projectId="syn60582629"
        entityId="syn61841662"
        versionNumber={1}
      />,
    )
    expect(
      screen.getByRole('button', { name: 'Cite page' }),
    ).toBeInTheDocument()
  })

  it('Only project DOI exists', () => {
    render(
      <EntityCitation
        projectId="syn64042437"
        entityId={undefined}
        versionNumber={undefined}
      />,
    )
    expect(
      screen.getByRole('button', { name: 'Cite project' }),
    ).toBeInTheDocument()
  })

  it('Both project and entity have DOIs', () => {
    render(
      <EntityCitation
        entityId="syn66268092"
        projectId="syn64042437"
        versionNumber={1}
      />,
    )
    expect(screen.queryByText('Cite as...')).not.toBeInTheDocument()
  })

  it('Fallback to versionless DOI when versioned DOI is missing but entity is latest version', () => {
    render(
      <EntityCitation
        entityId="syn61841662"
        projectId="syn60582629"
        versionNumber={undefined}
      />,
    )
    expect(
      screen.getByRole('button', { name: 'Cite page' }),
    ).toBeInTheDocument()
  })

  it('Does not use fallback if entity is not the latest version', () => {
    render(
      <EntityCitation
        entityId="syn61841662"
        projectId="syn60582629"
        versionNumber={1}
      />,
    )
    expect(
      screen.getByRole('button', { name: 'Cite page' }),
    ).not.toBeInTheDocument()
  })

  it('No citation button when no DOI is available for either project or entity', () => {
    render(<EntityCitation projectId="syn123" />)
    expect(screen.queryByText('Cite as')).not.toBeInTheDocument()
  })
})
