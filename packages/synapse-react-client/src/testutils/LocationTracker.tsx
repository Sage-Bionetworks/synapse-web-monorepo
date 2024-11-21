import { useLocation } from 'react-router-dom'

/**
 * Simple component that writes the current React Router location to an object to be used in tests.
 * @param props
 * @constructor
 */
export function getLocationTracker() {
  let location: ReturnType<typeof useLocation> | undefined
  function LocationTracker() {
    location = useLocation()
    return null
  }

  return { getLocation: () => location!, LocationTracker }
}
