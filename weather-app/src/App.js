import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherInfoComponent from "./modules/WeatherInfoComponent";
import { useState } from "react";
import axios from "axios";

//writing container for this app
//showing city component first,
//then we conditionally render the weather component after entering city
// what is flex wrap? 42:21 wrap the component if there is more data
// using axios library for calling api to get weather 50:30
// 51:30 using axios.get with async and await, and the output of method get() is stored as response
// 54:10 if weather available we wont show city component, directly show weather component

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 3px 6px 0 #555;
  padding: 20px 10px;
  border-radius: 4px;
  width: 380px;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

// const cityComponent = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// const weatherComponent = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

const API_KEY = "421be02f61347a6f429e0b237021e1f3";

function App() {
  // 2 things are changing in city/search component, so 2 things to maintain
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  // fetch weather from api
  // 421be02f61347a6f429e0b237021e1f3
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    console.log(response);
    updateWeather(response.data);
  };

  return (
    <Container>
      <AppLabel> Weather App in React! </AppLabel>
      {weather ? (
        <WeatherInfoComponent weather={weather} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
      {/* <WeatherInfoComponent /> */}
    </Container>
  );
}

export default App;
