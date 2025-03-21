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

export const hexDecodeAndDeserialize = (str: string) => {
  const json = Buffer.from(str, 'hex').toString()
  return JSON.parse(json)
}
