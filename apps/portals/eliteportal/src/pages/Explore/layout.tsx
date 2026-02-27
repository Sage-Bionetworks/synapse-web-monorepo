import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'

function ExploreLayout() {
  return (
    <ExploreWrapper
      explorePaths={[
        {
          path: 'Data',
        },
        {
          displayName: 'Cohort Builder',
          path: 'Cohort Builder',
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
