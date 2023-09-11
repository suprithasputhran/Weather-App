import React, { createContext, useEffect, useState } from 'react'
import HomeView from './components/SearchBar'
import axios from 'axios';
import CardSkeleton from './components/CardSkeleton';
import SearchBar from './components/SearchBar';
import { WeatherContext } from './context';

function App() {
  const [data, setData] = useState([]);
  const apiKey = "1d35dcc8063b4122ad764306233001";
  const [city, setCity] = useState('udupi');
  const [loading, isLoading] = useState(true);
  // const [error, setError]=useState(null);
  // const [queryTimeout, setQueryTimeout]=useState(null);
  // const [searchResult,setSearchResult]=useState(null);
  const apiUrl=`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`;
  useEffect(() => {
   
    axios.get(apiUrl)
      .then((response) => { 
        setData(response.data);
        isLoading(false);
        console.log(response.data);
     
      }).catch(error => {

        console.log("error", error);
      })
  }, [apiUrl])

  return (
    <div className="flex flex-col min-h-screen font-Roboto bg-weather-primary text-white">
      {loading ?
        <div >Loading</div>
        :
        <div >
          <WeatherContext.Provider value={{ data }}  >
          
            {/* {city ?   <SearchBar /> : <Error setError={setError}/>} */}
            <SearchBar setCity={setCity} />
            <CardSkeleton />
          </WeatherContext.Provider>
        </div>
      }
    </div>
  )
}

export default App