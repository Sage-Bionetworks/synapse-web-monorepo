import WideButton from '@/components/styled/WideButton'
import { Component, MouseEvent } from 'react'

export type FunderProps = {
  data?: any
  schema?: any
}

export default class Funder extends Component<FunderProps, never> {
  constructor(props: FunderProps) {
    super(props)
    this.handleLinkClick = this.handleLinkClick.bind(this)
  }
  public handleLinkClick =
    (link: string) => (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      window.open(link, '_blank')
    }
  public render() {
    const { data, schema } = this.props
    const organizationName = data[schema.organizationName]
    const organizationPath = data[schema.organizationPath]
    const summary = data[schema.summary]
    const website = data[schema.website]
    const logoHref: string = data[schema.logo]
    // remove leading http(s):// and trailing /
    let websiteDisplayName = website.replace('https://', '')
    websiteDisplayName = websiteDisplayName.replace('http://', '')
    if (websiteDisplayName.charAt(websiteDisplayName.length - 1) === '/') {
      websiteDisplayName = websiteDisplayName.substring(
        0,
        websiteDisplayName.length - 1,
      )
    }
    const isOnOrgPath = window.location.hash.substring(1) === organizationPath
    const style: any = {}
    let showOrgLink
    if (!isOnOrgPath) {
      showOrgLink = (
        <div className="SRC-marginAuto SRC-cardAction">
          <WideButton
            href={organizationPath}
            variant="contained"
            color="secondary"
          >
            View Funded Research
          </WideButton>
        </div>
      )
    } else {
      style.paddingBottom = '42px'
    }
    return (
      <div className="SRC-portalCard SRC-typeFunder " style={style}>
        <div className="SRC-cardContent">
          <div className="SRC-type">Organization</div>
          {logoHref && (
            <div className="SRC-cardThumbnail">
              <img alt="funder logo" className="SRC-logo" src={logoHref} />
            </div>
          )}
          <div>
            <h3>
              {isOnOrgPath && organizationName}
              {!isOnOrgPath && (
                <a href={organizationPath}>{organizationName}</a>
              )}
            </h3>
          </div>
          <div className="SRC-website">
            <a rel="noopener noreferrer" target="_blank" href={website}>
              {websiteDisplayName}
            </a>
          </div>
          <div className="SRC-description">{summary}</div>
        </div>
        {showOrgLink}
      </div>
    )
  }
}
