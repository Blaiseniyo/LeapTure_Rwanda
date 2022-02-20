import React,{useEffect,useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import { getWeather } from '../screens/Splash/Redux/action'
import "../App.css"

const Weather = () => {
    const dispatch = useDispatch()
    const [city, setCity] = useState('');
    
    
    const weather = useSelector(state => state.WeatherReducer)
    useEffect(()=>{
        dispatch(getWeather())
    },[])
    
    const search = (e) => {
      if(e.key === 'Enter') {
        console.log(city)
          dispatch(getWeather(city))
          setCity('');
      }
  }
  return (
    <div className="main-container">
    <input type="text" className="search" placeholder="Search..." value={city} onChange={(e) => setCity(e.target.value)} onKeyPress={search}/>
    {weather.data?
    <div>
    {weather.data.main && (
        <div className="city-container" >
            <div className='city'>
                <h2 className="city-name">
                    <span>{weather.data.name}</span>
                    <sup>{weather.data.sys.country}</sup>
                </h2>
                <div className="city-temp">
                    {Math.round(weather.data.main.temp-273.15)}
                    <sup>&deg;C</sup>
                </div>
                <div className="info">
                    <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`} alt={weather.data.weather[0].description} />
                    <p>{weather.data.weather[0].description}</p>
                </div>
            </div>
        </div>
    )}
    </div> 
      :
      <div className='not-found'>
      <div className="city-container" >
          <div className='city'>
                <h2 className="city-name">
                    <span>{"City Not Found"}</span>
                </h2>
          </div>
          </div>
      </div>
    }
    
</div>
  )
}

export default Weather
