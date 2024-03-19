import { WeatherProps } from "../interface";

export const getWeather = async (): Promise<WeatherProps> => {
   const API_KEY = "aa073df7040817a5e4b3fb20f99ed9d9";
   const api_url = await fetch(
     `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`,
   );
   const data = await api_url.json();
   return data;
 };