import { useEffect, useState } from 'react'
import { History } from './compotents/HIstory'
import { Header } from './compotents/Header'
import { InfoBlock } from './compotents/InfoBlock'
import { Measurements } from './compotents/Measurements'
import { getWeather } from './services/getWeather'
import './interface'
import { WeatherProps } from './interface'
import { Loader } from './compotents/Loader'

function App() {
  const [search, setSearch] = useState('')
  const [weatherData, setWeatherData] = useState<WeatherProps>()
  const [isLoading, setIsLoading] = useState(true)

  console.log(weatherData)

  useEffect(() => {
    setTimeout(
      () =>
        getWeather()
          .then((res) => setWeatherData(res))
          .finally(() => setIsLoading(false)),
      3000
    )
  }, [])

  return (
    <>
      <Header search={search} onChange={setSearch} onSubmit={() => null} />
      {isLoading ? <Loader /> : <InfoBlock weatherData={weatherData!} />}
      <Measurements />
      <History />
    </>
  )
}

export default App
