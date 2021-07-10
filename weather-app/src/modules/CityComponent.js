import styled from "styled-components";
import React from "react";

const WeatherLogo = styled.img`
  color: black;
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

const ChooseCityLabel = styled.span`
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 10px auto;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  border-radius: 4px;

  color: black;
  font-size: 18px;
  margin: 20px auto;

  & input {
      padding: 10px;
      font-size-14px;
      font-weight: bold;

      border: none;
      outline: none
  }

  & button {
      padding: 10px;
      font-size: 14px;
      color: white;
      background-color: black;
      border: none;
      outline: none;
      font-weight: bold;
      cursor: pointer;
  }

`;

const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <WeatherLogo src="icons/perfect-day.svg" />
      <ChooseCityLabel>Find Weather of your City</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          placeholder="Enter City Name"
          onChange={(e) => updateCity(e.target.value)}
        />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;
