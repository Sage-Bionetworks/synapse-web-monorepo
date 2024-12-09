import { Divider, Typography } from '@mui/material'
import { InfoWindow, Marker } from '@react-google-maps/api'
import { Fragment, useMemo } from 'react'
import { GeoData } from '../../synapse-client'
import { UserBadge } from '../UserCard/UserBadge'

const MAP_MARKER_IMAGE_URL =
  'https://s3.amazonaws.com/static.synapse.org/images/synapse-map-marker.png'

type SynapseUserMarkerProps = {
  /** The location and users that this point represents */
  geoData: GeoData
  /** Whether to show the list of users in a pop-up modal */
  showInfoWindow: boolean
  /** Invoked when the marker is clicked */
  onClick: () => void
  /** Invoked when the InfoWindow close button is clicked */
  onInfoWindowCloseClick: () => void
}

/**
 * A Google Maps marker that represents a particular location for one or more Synapse users.
 * @param props
 * @returns
 */
export function SynapseUserMarker(props: SynapseUserMarkerProps) {
  const { geoData, showInfoWindow, onClick, onInfoWindowCloseClick } = props
  const position = useMemo(
    () => ({
      lat: geoData.latLng[0],
      lng: geoData.latLng[1],
    }),
    [geoData.latLng],
  )

  const options = useMemo(
    () => ({
      icon: {
        url: MAP_MARKER_IMAGE_URL,
        size: new google.maps.Size(20, 32),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(0, 32),
      },
    }),
    [],
  )
  return (
    <Marker onClick={onClick} position={position} options={options}>
      {showInfoWindow && (
        <InfoWindow onCloseClick={onInfoWindowCloseClick}>
          <>
            <Typography variant="body1" component={'span'}>
              {geoData.location}
            </Typography>
            <Divider />
            {geoData.userIds.map(id => (
              <Fragment key={id}>
                <br />
                <UserBadge userId={id} openLinkInNewTab={true} />
              </Fragment>
            ))}
          </>
        </InfoWindow>
      )}
    </Marker>
  )
}

export default SynapseUserMarker
