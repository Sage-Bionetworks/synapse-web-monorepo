import { render, screen } from '@testing-library/react'
import React from 'react'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import { SynapseContextType } from '../../utils'
import { mockFolderEntityHeader } from '../../mocks/entity/mockEntity'
import mockFileEntityData from '../../mocks/entity/mockFileEntity'
import { server } from '../../mocks/msw/server'
import FavoritesPage from './FavoritesPage'

function renderComponent(wrapperProps?: SynapseContextType) {
  render(<FavoritesPage />, {
    wrapper: createWrapper(wrapperProps),
  })
}

describe('FavoritesPage tests', () => {
  beforeAll(() => server.listen())
  afterEach(() => server.restoreHandlers())
  afterAll(() => server.close())

  it('Shows the table of favorites', async () => {
    // mock successful response set up in handlers.ts
    renderComponent()

    await screen.findByText(mockFolderEntityHeader.name)
    await screen.findByText(mockFileEntityData.name)
  })
})
