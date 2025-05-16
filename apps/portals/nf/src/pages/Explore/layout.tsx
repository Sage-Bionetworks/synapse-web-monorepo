import ExploreWrapper from '@sage-bionetworks/synapse-portal-framework/components/Explore/ExploreWrapper'

function ExploreLayout() {
  return (
    <ExploreWrapper
      explorePaths={[
        { path: 'Studies' },
        { path: 'Datasets' },
        { path: 'Files' },
        { path: 'Publications' },
        { path: 'Tools' },
        {
          path: 'Hackathon',
          displayName: 'Hackathon Projects',
        },
      ]}
    />
  )
}

export default ExploreLayout
