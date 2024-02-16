import { GoogleMap, LoadScript } from '@react-google-maps/api'
import React, { useCallback, useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import {
  GeoData,
  getAllSynapseUserGeoData,
  getGoogleMapsApiKey,
  getSynapseTeamGeoData,
} from '../../synapse-client'
import { SynapseSpinner } from '../LoadingScreen/LoadingScreen'
import { SynapseUserMarker } from './SynapseUserMarker'

// Load the google maps types -- note that the script is dynamically loaded, so the module will not be immediately available
/// <reference types="google.maps" />

export type MapProps = {
  /** If selected, then the map will only show locations for users in a particular team. */
  teamId?: string
  /** Override the Google Maps API key used by the component. Useful for Storybook. */
  apiKeyOverride?: string
}

/**
 * Returns a map component showing the locations of Synapse users. Note that this component must be wrapped in a container with defined size, or else the map will not appear.
 * Note that the geolocation data is updated via a cron job, so the map will not update in real time.
 * @param props
 * @returns
 */
function Map(props: MapProps) {
  const { teamId, apiKeyOverride } = props

  const { data: apiKey } = useQuery({
    queryKey: ['googleMapsApiKey'],
    queryFn: getGoogleMapsApiKey,
    throwOnError: true,
  })

  /** Tracks the currently selected marker on click */
  const [currentOpenGeoData, setCurrentOpenGeoData] = useState<GeoData | null>(
    null,
  )

  const { data: geoData, isLoading: isLoadingGeoData } = useQuery({
    queryKey: ['synapseGeoData', teamId],

    queryFn: () => {
      if (teamId) {
        return getSynapseTeamGeoData(teamId)
      } else {
        return getAllSynapseUserGeoData()
      }
    },

    throwOnError: true,
  })

  const onLoad = useCallback(
    function callback(map: google.maps.Map) {
      if (geoData) {
        const bounds = new google.maps.LatLngBounds()
        geoData.forEach(gd => {
          bounds.extend({ lat: gd.latLng[0], lng: gd.latLng[1] })
        })
        map.fitBounds(bounds)
      }
    },
    [geoData],
  )

  const initialOptions = useMemo(
    () => ({
      zoom: 1,
      scrollwheel: true,
      mapTypeControl: false,
      streetViewControl: false,
      draggable: true,
      maxZoom: 12,
      controlSize: 22,
    }),
    [],
  )
  if (!(apiKeyOverride || apiKey) || isLoadingGeoData) {
    return <SynapseSpinner />
  }

  return (
    <LoadScript
      googleMapsApiKey={(apiKeyOverride || apiKey)!}
      loadingElement={<SynapseSpinner />}
    >
      <GoogleMap
        mapContainerStyle={{ height: '100%', width: '100%' }}
        onLoad={onLoad}
        options={initialOptions}
      >
        {geoData!.map(gd => {
          return (
            <SynapseUserMarker
              key={gd.location}
              geoData={gd}
              onClick={() => setCurrentOpenGeoData(gd)}
              onInfoWindowCloseClick={() => setCurrentOpenGeoData(null)}
              showInfoWindow={gd === currentOpenGeoData}
            />
          )
        })}
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
