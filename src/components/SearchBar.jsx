import React, { useContext, useState } from 'react'

import PropTypes from 'prop-types';
import { WeatherContext } from '../context';

function SearchBar({ setCity }) {
  const { data } = useContext(WeatherContext)
  const [searchQuery, setSearchQuery] = useState('');

  const getSearchResult = (event) => {
    if (event.key === 'Enter') {
      console.log(searchQuery);
      setCity(searchQuery)
    }

    //  return setCity(searchQuery)

    // setCity(searchQuery);


  }


  // const updateHandle = (event) => {
  //   setSearchQuery(event.target.value);
  // }

  return (
    <div className="pt-5 mb-8 flex flex-row items-center justify-center  relative">

      {/* input search value */}
      <div className='flex flex-row gap-2 items-center'>
      <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onKeyDown={getSearchResult} placeholder="Search for city or state" className="py-2 px-6 w-96 text-left  bg-transparent border-b 
            focus:border-weather-secondary focus:outline-none 
            focus:shadow-[0px_1px_0_0#004E71]"/>
     
      <button type="submit" onClick={getSearchResult}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      </svg></button>
      </div>

     
       
      {/* {searchQuery ? <li ><p onClick={getSearchResult} >{searchQuery}</p></li>:<div>no data found</div>} */}
      {/* <button type="submit" onClick={getSearchResult}>click</button> */}

    </div>
  )
}

SearchBar.prototype = {
  setCity: PropTypes.func.isRequired,
}
export default SearchBar