import styled from "styled-components";
import CityComponent from "./modules/CityComponent";
import WeatherInfoComponent from "./modules/WeatherInfoComponent";

//writing container for this app
//showing city component first,
//then we conditionally render the weather component after entering city

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

function App() {
  return (
    <Container>
      <AppLabel> Weather App in React! </AppLabel>
      <CityComponent />
      <WeatherInfoComponent />
    </Container>
  );
}

export default App;
