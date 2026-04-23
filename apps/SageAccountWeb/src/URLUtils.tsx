export const getSearchParam = (keyName: string): string | undefined => {
  const urlSearchParams = new URLSearchParams(window.location.search)
  let paramValue: string | undefined = undefined
  if (urlSearchParams && urlSearchParams.get(keyName)) {
    paramValue = urlSearchParams.get(keyName)!
  }
  return paramValue
}
export const getStateParam = () => {
  let state = getSearchParam('state')
  let stateParam = ''
  if (state) {
    state = encodeURIComponent(state)
    stateParam = `state=${state}&`
  }
  return stateParam
}

export const isValidUrl = (str: string) => {
  try {
    new URL(str)
  } catch (_) {
    return false
  }
  return true
}

export function serializeAndHexEncode(data: any): string {
  const json = JSON.stringify(data)

  // 1. Convert string to UTF-8 bytes
  const bytes = new TextEncoder().encode(json)

  // 2. Convert each byte to a hex string and join them
  return Array.from(bytes)
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('')
}

export function hexDecodeAndDeserialize(str: string): any {
  // 1. Convert Hex string to Uint8Array
  const bytes = new Uint8Array(str.length / 2)
  for (let i = 0; i < str.length; i += 2) {
    bytes[i / 2] = parseInt(str.substring(i, i + 2), 16)
  }

  // 2. Decode the bytes into a UTF-8 string
  const json = new TextDecoder().decode(bytes)

  // 3. Parse as JSON
  return JSON.parse(json)
}
