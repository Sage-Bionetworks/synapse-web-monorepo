import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import SizeMe from 'react-sizeme'
import ProjectViewCarousel, {
  ProjectViewCarouselProps,
} from './ProjectViewCarousel'
import { createWrapper } from '../../testutils/TestingLibraryUtils'
import SynapseClient from '../../synapse-client'
import { mockQueryResult } from '../../mocks/query/mockProjectViewQueryResults'
import { ObjectType } from '@sage-bionetworks/synapse-types'
SizeMe.noPlaceholders = true

jest
  .spyOn(SynapseClient, 'getQueryTableResults')
  .mockResolvedValue(mockQueryResult)

const PRESIGNED_URL = 'https://some-url-that-resolves.toSomeImage/image.jpeg'

jest.spyOn(SynapseClient, 'getWikiPageKeyForEntity').mockResolvedValue({
  wikiPageId: '12345',
  ownerObjectId: 'syn123',
  ownerObjectType: ObjectType.ENTITY,
})

jest
  .spyOn(SynapseClient, 'getPresignedUrlForWikiAttachment')
  .mockResolvedValue(PRESIGNED_URL)

describe('basic functionality', () => {
  const props: ProjectViewCarouselProps = {
    entityId: 'syn123',
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('retrieves project data and images and inserts cards into carousel', async () => {
    render(<ProjectViewCarousel {...props} />, {
      wrapper: createWrapper(),
    })

    await waitFor(() =>
      expect(SynapseClient.getQueryTableResults).toHaveBeenCalledTimes(1),
    )

    // There are 5 results, but only 4 have an image specified
    await waitFor(() =>
      expect(SynapseClient.getWikiPageKeyForEntity).toHaveBeenCalledTimes(4),
    )
    await waitFor(() =>
      expect(
        SynapseClient.getPresignedUrlForWikiAttachment,
      ).toHaveBeenCalledTimes(4),
    )

    screen.getByRole('marquee')

    expect((await screen.findAllByRole('listitem')).length).toBeGreaterThan(0)

    // Check that the currently selected card (card 0) contains an image element with the correct src
    expect(screen.getAllByRole('img')[0].getAttribute('src')).toEqual(
      PRESIGNED_URL,
    )
  })
})
