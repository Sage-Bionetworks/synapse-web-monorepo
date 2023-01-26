/**
 * Models the output data created by https://github.com/Sage-Bionetworks/Synapse-User-Geolocation
 * The output files each contain a JSON array where each element matches this type.
 */
export type GeoData = {
  location: string
  latLng: [number, number]
  userIds: string[]
}
