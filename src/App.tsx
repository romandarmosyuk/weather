import { useEffect, useState } from 'react';
import { History } from './compotents/HIstory';
import { Header } from './compotents/Header';
import { InfoBlock } from './compotents/InfoBlock';
import { dataWeather } from './compotents/InfoBlock/data';
import { Measurements } from './compotents/Measurements';
import './interface'

const API_KEY = 'aa073df7040817a5e4b3fb20f99ed9d9';

const getWeather = async () => {
   const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`)
   const data = await api_url.json();
   return data
}

function App() {
   const [search, setSearch] =useState('');
   const [weatherData, setWeatherData] =useState({});

   console.log(weatherData)

   useEffect(() => { getWeather().then((res) => setWeatherData(res))
   }, [])

  return (
         <>
            <Header search={ search } onChange={ setSearch } onSubmit={()=> null}/>
            <InfoBlock infoWeather={ dataWeather }/>
            <Measurements/>
            <History/>
         </>
         
  )
}

export default App
