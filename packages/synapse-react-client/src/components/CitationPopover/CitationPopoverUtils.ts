export const createLinkAndDownload = (
  title: string,
  fileExtension: string,
  url: string,
) => {
  const citationTitle = `${title.replaceAll(/\s+/g, '_')}`
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', `${citationTitle}.${fileExtension}`)
  document.body.appendChild(link)
  link.click()
  link.remove()
}
