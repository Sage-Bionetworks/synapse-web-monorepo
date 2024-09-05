import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as DataIconSvg } from './assets/data-icon.svg'
import { ReactComponent as InsightIconSvg } from './assets/insight-icon.svg'
import { ReactComponent as MethodsIconSvg } from './assets/methods-icon.svg'
import { ReactComponent as PeopleIconSvg } from './assets/people-icon.svg'

type LinkProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  description: string
  title: string
  linkText: string
  to: string
}

const links: LinkProps[] = [
  {
    title: 'Research',
    icon: PeopleIconSvg,
    description:
      'Funded grant programs comprising institutions and investigators that are pursuing common cancer research themes with diverse approaches. This network drives the activity and output presented in this portal and provides a rich community for potential collaborations.',
    linkText: 'Explore Grants',
    to: 'Explore/Grants',
  },
  {
    title: 'Data',
    icon: DataIconSvg,
    description:
      'Collected from tumor samples and cell lines, assayed or simulated, across a spectrum of indications and experimental conditions. Data in the portal are shared freely to enable reuse by researchers to develop, validate, or apply new methods.',
    linkText: 'Explore Data',
    to: 'Explore/Datasets',
  },
  {
    title: 'Methods',
    icon: MethodsIconSvg,
    description:
      'Software tools and algorithms, models, and applications for interrogating and exploring a variety of data types and characterizing cancer related features. The catalog of tools developed by investigators can be used to derive new insights from existing data.',
    linkText: 'Explore Tools',
    to: 'Explore/Tools',
  },
  {
    title: 'Publications',
    icon: InsightIconSvg,
    description:
      'Lessons learned from consortia data and methods, shared as peer-reviewed journal articles. The growing library of publications is annotated by disease area, experimental metadata, and scientific theme to allow users to hone in on the most relevant knowledge.',
    linkText: 'Explore Publications',
    to: 'Explore/Publications',
  },
]
const PortalHomePageLinks = () => {
  return (
    <div className="HomePageLinks">
      <p>
        The Cancer Complexity Knowledge Portal is a Community Research resource
        which aims to
        <a href="https://www.synapse.org">
          &nbsp;<i>synthesize and expose the activities and outputs</i>&nbsp;
        </a>
        of these consortia. In this portal, users can find information about and
        access to the following:
      </p>
      <div className="link-container">
        {links.map(el => {
          const Icon = el.icon
          return (
            <div className="link-child" key={el.linkText}>
              <h4>
                <Icon className="icon" />
                {el.title}
              </h4>
              <p>{el.description}</p>
              <Link style={{ fontWeight: 'bold' }} className="link" to={el.to}>
                {el.linkText}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PortalHomePageLinks
