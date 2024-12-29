import React from "react";
import { UseFetch } from './FetchData'
import styled from "styled-components";

const CityBox = styled.div`
  padding-left: 20px;
  h3{
    text-align: center;
  }
  select {
    padding: 10px 50px 10px 50px;
    font-size: 15px;
  }
`
export default function City({index, handleAddressChange}){
  const data = UseFetch('http://localhost:3000/v1/addresses/cities', 'GET', {'Accept': 'application/json',
    'Content-Type': 'application/json'});
  const cities = data?.collection || []

  return(
    <>
      <CityBox>
        <h3>Cidade</h3>
      
        <select onChange={(e) => handleAddressChange(index, 'city', e.target.value)}>
          {cities.map((city, index) => (
            <option key={index} value={city.id}>{city.name}</option>
          ))}    
        </select>
      </CityBox>
    </>
  );
}