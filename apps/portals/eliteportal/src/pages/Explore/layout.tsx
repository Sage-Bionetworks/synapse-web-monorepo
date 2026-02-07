import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'

function ExploreLayout() {
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

  return (
    <ExploreWrapper
      explorePaths={[
        {
          path: 'Data',
        },
        {
          displayName: 'Cohort Builder',
          path: 'Cohort Builder',
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
          path: 'Programs',
        },
        {
          path: 'Projects',
        },
        {
          path: 'Studies',
        },
        {
          path: 'Publications',
        },
        {
          path: 'Computational Tools',
        },
        {
          path: 'People',
        },
      ]}
    />
  )
}

export default ExploreLayout
