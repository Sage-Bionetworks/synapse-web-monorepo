import { initialize } from '@googlemaps/jest-mocks'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { GeoData } from '../../../../src/lib/containers/GoogleMap/GeoData'
import GoogleMap, {
  MapProps,
} from '../../../../src/lib/containers/GoogleMap/GoogleMap'
import { createWrapper } from '../../../testutils/TestingLibraryUtils'
import { rest, server } from '../../../../mocks/msw/server'
import {
  MOCK_TEAM_ID,
  MOCK_USER_ID,
  MOCK_USER_ID_2,
  MOCK_USER_NAME,
  MOCK_USER_NAME_2,
} from '../../../../mocks/user/mock_user_profile'

/** Mock the Google Maps library */
jest.mock('@react-google-maps/api', () => ({
  LoadScript: ({ children }) => <div data-testid="LoadScript">{children}</div>,
  GoogleMap: ({ children }) => <div data-testid="GoogleMap">{children}</div>,
  Marker: ({ onClick, children }) => (
    <div data-testid="Marker" onClick={onClick}>
      {children}
    </div>
  ),
  InfoWindow: ({ children }) => <div data-testid="InfoWindow">{children}</div>,
}))

const mockGeoData: GeoData[] = [
  {
    location: 'Seattle, WA',
    latLng: [47.6062, -122.3321],
    userIds: [MOCK_USER_ID.toString()],
  },
  {
    location: 'Columbus, OH',
    latLng: [39.9612, -82.9988],
    userIds: [MOCK_USER_ID_2.toString()],
  },
]

const geoDataHandlers = [
  rest.get(
    'https://s3.amazonaws.com/geoloc.sagebase.org/googlemap.txt',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.text('mockApiKey'))
    },
  ),
  rest.get(
    'https://s3.amazonaws.com/geoloc.sagebase.org/allPoints.json',
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(mockGeoData))
    },
  ),
  rest.get(
    `https://s3.amazonaws.com/geoloc.sagebase.org/${MOCK_TEAM_ID}.json`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json([mockGeoData[0]]))
    },
  ),
]

function renderComponent(props: MapProps) {
  return render(<GoogleMap {...props} />, { wrapper: createWrapper() })
}

describe('GoogleMap tests', () => {
  beforeAll(() => server.listen())
  beforeEach(() => {
    server.use(...geoDataHandlers)
    initialize()
  })
  afterEach(() => server.resetHandlers())

  it('Fetches all data if no team ID is specified', async () => {
    const props: MapProps = {}
    const expectedNumberOfMarkers = mockGeoData.length

    renderComponent(props)

    await screen.findByTestId('LoadScript')
    await screen.findByTestId('GoogleMap')
    const markers = await screen.findAllByTestId('Marker')
    expect(markers).toHaveLength(expectedNumberOfMarkers)

    // No InfoWindow is shown as nothing has been clicked
    expect(screen.queryByTestId('InfoWindow')).not.toBeInTheDocument()

    // Clicking a marker shows the info window
    await userEvent.click(markers[0])
    await screen.findByTestId('InfoWindow')
    await screen.findByText('Seattle, WA')
    await screen.findByText(`@${MOCK_USER_NAME}`)

    // Clicking the other marker shows the new location
    await userEvent.click(markers[1])
    await screen.findByText('Columbus, OH')
    await screen.findByText(`@${MOCK_USER_NAME_2}`)

    // The old location is hidden
    expect(screen.queryByText('Seattle, WA')).not.toBeInTheDocument()
  })
  it('Fetches a team ID if specified', async () => {
    const props: MapProps = {
      teamId: MOCK_TEAM_ID.toString(),
    }
    const expectedNumberOfMarkers = 1

    renderComponent(props)

    await screen.findByTestId('LoadScript')
    await screen.findByTestId('GoogleMap')
    const markers = await screen.findAllByTestId('Marker')
    expect(markers).toHaveLength(expectedNumberOfMarkers)
  })
})
