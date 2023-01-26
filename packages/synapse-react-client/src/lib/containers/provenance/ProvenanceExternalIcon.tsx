import React from 'react'
import IconSvg, { Icon } from '../IconSvg'

export type ProvenanceExternalIconProps = {
  url: string
}
const githubRegex = /^(.+?\.)?github\.com$/
const githubusercontentRegex = /^(.+?\.)?githubusercontent\.com$/

export const ProvenanceExternalIcon = (props: ProvenanceExternalIconProps) => {
  const { url } = props
  let icon: Icon = 'link'
  const parsedUrl = new URL(url)
  const { hostname } = parsedUrl

  if (hostname.match(githubRegex) || hostname.match(githubusercontentRegex)) {
    icon = 'github'
  }
  // else if (url.includes("genomespace.org")) {
  //   icon = 'genomespace'
  // }

  // return the default (File icon)
  return <IconSvg icon={icon} />
}
