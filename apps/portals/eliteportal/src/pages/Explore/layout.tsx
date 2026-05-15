import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'

function ExploreLayout() {
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
          displayName: 'Files',
          path: 'Data',
        },
        {
          displayName: 'Cohort Discovery',
          path: 'Cohort Builder',
        },
        {
          path: 'Publications',
        },
        {
          displayName: 'Tools',
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
