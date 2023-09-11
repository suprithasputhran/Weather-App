import React from 'react'

function Error({setError}) {
  return (
    // Error message
    <div>             
    
    <p class="py-2">Sorry, something went wrong, please try again.</p>

    <p v-if="!serverError && apiSearchResults.length === 0">No results your query, try a different term</p>
    </div>
  )
}

export default Error