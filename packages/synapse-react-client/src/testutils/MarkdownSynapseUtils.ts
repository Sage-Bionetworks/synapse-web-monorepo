import { screen, waitFor } from '@testing-library/react'

export async function confirmMarkdownSynapseIsShown(times: number = 1) {
  await waitFor(() => {
    const wikiElements = screen.getAllByTestId('markdown')
    expect(wikiElements).toHaveLength(times)
    wikiElements.forEach(el => expect(el).not.toBeEmptyDOMElement())
  })
}

// Note - matches text content rendered by MarkdownSynapse, but does not
// confirm that formatting was applied or widgets embedded
export async function confirmMarkdownSynapseTextContent(textContent: string) {
  await waitFor(() => {
    const markdownField = screen.getByTestId('markdown')
    expect(markdownField).toHaveTextContent(textContent)
  })
}
