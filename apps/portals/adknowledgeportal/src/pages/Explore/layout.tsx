import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'

function Layout() {
  return (
    <ExploreWrapper
      explorePaths={[
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
          path: 'Data',
        },
        {
          displayName: 'Cohort Builder',
          path: 'Cohort Builder/Individuals',
          matchPaths: ['Cohort Builder', 'Cohort Builder/Data'],
        },
        {
          path: 'Publications',
        },
        {
          path: 'People',
        },
        {
          path: 'Experimental Models',
        },
        {
          path: 'Computational Tools',
        },
        {
          path: 'Target Enabling Resources',
        },
        {
          path: 'Results',
        },
      ]}
    />
  )
}

export default Layout
