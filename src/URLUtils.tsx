export const handleErrorRedirect = (error:any) => {
  console.error(error)
  const redirectUri = getURLParam('redirect_uri')
  if (error["error"] && redirectUri) {
    // is this a valid URL?
    if (isValidUrl(redirectUri)) {
      // we have a redirectUri and an error code from the backend (and possibly an error description!).  Redirect.
      const errorDescription = error["error_description"] ? `&error_description=${encodeURIComponent(error["error_description"])}` : ''
      window.location.replace(`${redirectUri}?${getStateParam()}error=${encodeURIComponent(error["error"])}${errorDescription}`)
    } else {
      alert(`${error["error"]} - ${error["error_description"]}`)
    }
  }
}

export const getURLParam = (keyName: string): string | undefined => {
  const urlSearchParams = new URLSearchParams(window.location.search)
  let paramValue: string | undefined = undefined
  if (urlSearchParams && urlSearchParams.get(keyName)) {
      paramValue = urlSearchParams.get(keyName)!
  }
  return paramValue
}
export const getStateParam = () => {
  let state = getURLParam('state')
  let stateParam = ''
  if (state) {
      state = encodeURIComponent(state)
      stateParam = `state=${state}&`
  }
  return stateParam
}

export const isValidUrl = (str:string) => {
  try {
    new URL(str);
  } catch (_) {
    return false;  
  }
  return true;
}