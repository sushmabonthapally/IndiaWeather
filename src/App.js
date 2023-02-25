import './App.css';
import FormWeather from './components/FormWeather';
import React, {useEffect, useState, useCallback} from 'react';
import axios from 'axios'
import Weather from './components/Weather';
import { apiKey } from './api/config';

function App() {
 const [userEnteredData, setUserEnteredData] = useState();
 const [precipitation, setPrecipitation] = useState('');
 const [humidity, setHumidity] = useState('');
 const [wind, setWind] = useState('');
 const [country, setCountry] = useState('');
 const [temperature, setTemperature] = useState('');
 const [description, setDescription] =  useState('');
 const [time, setTime] =  useState('');
 const [error, setError] =  useState(false);


 const addCityData = (city)=>{
    setUserEnteredData(()=>{
      return {
        city
      }
    })
 }

 const fetchCityData = useCallback(async()=>{
  try{
  if(userEnteredData?.city){
   let response  = await axios(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${userEnteredData?.city}&days=1&aqi=no&alerts=no`)
   setHumidity(response.data.current.humidity);
   setPrecipitation(response.data.current.precip_in);
   setWind(response.data.current.wind_kph);
   setCountry(response.data.location.country);
   setTime(response.data.location.localtime);
   setTemperature(response.data.current.temp_c);
   setDescription(response.data.current.condition.text);
   setError(false)
  }
}
catch (error) {
  setError(true);
}
 },[userEnteredData])

 useEffect(()=>{
   fetchCityData()
 },[fetchCityData])

 
  return (
    <div className="App">
      <h3>Enter India states</h3>
      <FormWeather cityData = {addCityData}/>
      <Weather 
       cityName = {userEnteredData?.city}
       humidityData={humidity}
       precipitationData = {precipitation} 
       windData = {wind}
       countryName = {country}
       temperatureData = {temperature}
       descriptionData = {description}
       timeData={time}
       statusError = {error}
      />
    </div>
  );
}

export default App;
