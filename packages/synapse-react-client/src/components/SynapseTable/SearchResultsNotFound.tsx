import React from 'react'
import NoSearchResults from '../../assets/icons/NoSearchResults'

export default function SearchResultsNotFound() {
  return (
    <div className="text-center">
      {NoSearchResults}
      <h4>No Matching Results</h4>
      <p>Try checking the spelling or removing filters.</p>
    </div>
  )
}
