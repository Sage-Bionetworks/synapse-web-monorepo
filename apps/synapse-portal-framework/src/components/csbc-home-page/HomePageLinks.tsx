import { ComponentType, SVGProps } from 'react'
import { Link } from 'react-router'
import { ReactComponent as DataIconSvg } from './assets/data-icon.svg'
import { ReactComponent as InsightIconSvg } from './assets/insight-icon.svg'
import { ReactComponent as MethodsIconSvg } from './assets/methods-icon.svg'
import { ReactComponent as PeopleIconSvg } from './assets/people-icon.svg'

type LinkProps = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
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
      'Looking for funding or collaboration? Find active cancer research programs, connect with leading investigators, and explore opportunities to advance your your work.',
    linkText: 'Explore Grants',
    to: 'Explore/Grants',
  },
  {
    title: 'Data',
    icon: DataIconSvg,
    description:
      'Need high quality cancer datasets? Access available datasets from cancer specimens and model systems hosted across various repositories in one spot.',
    linkText: 'Explore Data',
    to: 'Explore/Datasets',
  },
  {
    title: 'Research Software',
    icon: MethodsIconSvg,
    description:
      'Building or refining analytical tools? Or looking for an appropriate tool for your analysis? Leverage investigator developed software, models, or algorithms to explore cancer complexity and extract deeper insights.',
    linkText: 'Explore Tools',
    to: 'Explore/Tools',
  },
  {
    title: 'Publications',
    icon: InsightIconSvg,
    description:
      'Seeking the latest research breakthroughs? Browse peer reviewed studies filtered by disease, experiment, or research theme to stay informed or guide your next steps.',
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
