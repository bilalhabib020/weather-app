import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Oval } from 'react-loader-spinner';
import  axios  from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';
import Error from './components/Error';
import Input from './components/Input'
import Output from './components/Output';
import './App.css'


function App() {
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({
    data: {},
    loading: false,
    error: false
  });
  const date = new Date ();
  const hour = date.getHours();
  let background;
  if(hour >= 5 && hour <= 10) {
     background = "https://images.unsplash.com/photo-1501588647130-2e99f4585623?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }
  else if(hour > 10 && hour <= 16) {
     background = "https://images.unsplash.com/photo-1577985759186-0854dfd3f218?q=80&w=1514&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }
  else if(hour > 16 && hour <= 20) { 
     background = "https://images.unsplash.com/photo-1612931005269-0f3362d7ee01?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }
  else if(hour > 20 || hour < 5) {
     background = "https://images.unsplash.com/photo-1716573253327-cda613725dca?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  }

  const searchWeather = async (e) => {
    if(e.key === "Enter") {
      e.preventDefault();
      setInput("");
      setWeather({
        ...weather,
        loading: true
      });
      const url = 'https://api.openweathermap.org/data/2.5/weather';
      const api_key = 'f00c38e0279b7bc85480c3fe775d518c';
     await axios
     .get(url, {
        params: {
          q: input,
          units: 'metric',
          appid: api_key,
        }
      })
      .then((res) => {
        console.log('res', res);
        setWeather({
          data: res.data,
          loading: false,
          error: false
        })
      })
      .catch((error) => {
        console.log('error', error);
        setWeather({
          ...weather,
          data: {},
          error: true
        })
      })
    }
  }



  return (
    <>
     <div id="wrapper" style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
     }}>
      
      <div id="box">
      <h1>Weather App</h1>
        <Input 
        input={input}
        onChange = {(e) => setInput(e.target.value)}
        onKeyDown = {searchWeather}
        />



        { weather.loading && <Oval type="Oval" color="black" height={100} width={100} />}

        { weather.error && <Error /> }
      { 
      weather && weather.data && weather.data.main && (
        <Output 
        city = {weather.data.name}
        country = {weather.data.sys.country}
        temperature = {weather.data.main.temp}
        icon = {`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`}
        description = {weather.data.weather[0].description}
        weatherType = {weather.data.weather[0].main}
        windSpeed = {weather.data.wind.speed}
        humidity = {weather.data.main.humidity}
        pressure = {weather.data.main.pressure}
        feelsLike = {weather.data.main.feels_like}
        />


       
       )
}
      </div>
     </div>
    </>
  )
}

export default App
