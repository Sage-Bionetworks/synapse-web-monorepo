import { ExplorePageRoute } from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapperProps'
import { QueryWrapperPlotNav } from 'synapse-react-client'
import {
  filesViewQueryWrapperPlotNavProps,
  individualsViewQueryWrapperPlotNavProps,
  peopleQueryWrapperPlotNavProps,
  projectsQueryWrapperPlotNavProps,
  studiesQueryWrapperPlotNavProps,
} from './synapseConfigs'
import computationalToolsQueryWrapperPlotNavProps from './synapseConfigs/computational_tools'
import publicationsQueryWrapperPlotNavProps from './synapseConfigs/publications'

const COHORT_BUILDER_ORIENTATION_BANNER_TEXT = (
  <>
    Cohort Builder helps you filter data in the ELITE Portal to find relevant
    data records for your research. Apply filters to define cohorts based on
    demographic and dataset attributes and view the files associated with your
    cohort. Visit our{' '}
    <a
      href="https://help.eliteportal.org/help/explore-data#ExploringData-OverviewoftheCohortBuilderSubtab"
      target="_blank"
      rel="noreferrer"
    >
      Help Docs
    </a>{' '}
    for more information.
  </>
)

const explorePageRoutes: ExplorePageRoute[] = [
  {
    path: 'Data',
    element: <QueryWrapperPlotNav {...filesViewQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Cohort Builder',
    element: (
      <QueryWrapperPlotNav {...individualsViewQueryWrapperPlotNavProps} />
    ),
    OrientationBannerProps: {
      name: 'CohortBuilder',
      title: 'Getting Started With Cohort Builder',
      text: COHORT_BUILDER_ORIENTATION_BANNER_TEXT,
      sx: { position: 'relative', zIndex: 1, marginBottom: '0px' },
      // TODO DOCS-122
      // secondaryButtonConfig: {
      //    text: 'Learn more about Cohort Builder',
      //    href: '',
      // }
    },
  },
  {
    path: 'Projects',
    element: <QueryWrapperPlotNav {...projectsQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Studies',
    element: <QueryWrapperPlotNav {...studiesQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Publications',
    element: <QueryWrapperPlotNav {...publicationsQueryWrapperPlotNavProps} />,
  },
  {
    path: 'Computational Tools',
    element: (
      <QueryWrapperPlotNav {...computationalToolsQueryWrapperPlotNavProps} />
    ),
  },
  {
    path: 'People',
    element: <QueryWrapperPlotNav {...peopleQueryWrapperPlotNavProps} />,
  },
]

export default explorePageRoutes
