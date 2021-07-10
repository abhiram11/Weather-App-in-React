import styled from "styled-components";

const weatherLogo = styled.img`
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

const CityComponent = () => {
  return (
    <>
      <h1>Hi, weather image here</h1>
      <weatherLogo src="/icons/perfect-day.svg" />
      <ChooseCityLabel>Find Weather of your City</ChooseCityLabel>
      <SearchBox>
        <input placeholder="Enter City Name" />
        <button>Search</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;
