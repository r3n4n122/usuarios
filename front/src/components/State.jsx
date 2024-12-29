import React, { useEffect, useState } from "react";
import { UseFetch } from './FetchData'
import styled from "styled-components";

const StateBox = styled.div`
  padding-left: 20px;
  h3{
    text-align: center;
  }
  select {
    padding: 10px 50px 10px 50px;
    font-size: 15px;
  }
`

export default function State({index, handleAddressChange}){
  const data = UseFetch('http://localhost:3000/v1/addresses/states', 'GET', {'Accept': 'application/json',
    'Content-Type': 'application/json'});
  const states = data?.collection || []
  return(
    <>
      <StateBox> 
        <h3>Estado</h3>
      
        <select onChange={(e) => handleAddressChange(index, 'state', e.target.value)}>
          {states.map((state, index) => (
            <option key={index} value={state?.id}>{state.name}</option>
          ))}    
        </select>
      </StateBox>
    </>
  );
}