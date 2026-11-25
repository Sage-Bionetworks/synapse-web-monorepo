import NoSearchResults from '@/assets/icons/NoSearchResults'

export default function SearchResultsNotFound() {
  return (
    <div className="text-center">
      <NoSearchResults
        className="no-search-results"
        sx={{ display: 'block', height: '181px', pt: '40px', pb: '10px' }}
      />
      <h4>No Matching Results</h4>
      <p>Try checking the spelling or removing filters.</p>
    </div>
  )
}
