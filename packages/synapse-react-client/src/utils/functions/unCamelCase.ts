export const unCamelCase = (str: string): string => {
  // https://stackoverflow.com/questions/4149276/how-to-convert-camelcase-to-camel-case
  return (
    str
      // insert a space between lower & upper
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      // space before last upper in a sequence followed by lower
      .replace(/\b([A-Z]+)([A-Z])([a-z])/, '$1 $2$3')
      // uppercase the first character
      .replace(/^./, (str: string) => {
        return str.toUpperCase()
      })
  )
}
