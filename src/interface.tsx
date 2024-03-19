export interface WeatherProps {
  base: string
  clouds: {
    all: number
  }
  cod: number
  coord: {
    lon: number
    lat: number
  }
  dt: number
  id: number
  main: {
    feels_like: number
    humidity: number
    pressure: number
    temp: number
    temp_max: number
    temp_min: number
  }
  name: string
  sys: {
    id: number
    main: string
    description: string
    sunrise: number
    sunset: number
  }
  timezone: number
  visibility: number
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  wind: {
    speed: number
    deg: number
    gust: number
  }
}
