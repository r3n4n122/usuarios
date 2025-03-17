import {React, useState, useEffect} from "react";
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

export default function State({index, value, handleAddressChange}){

  const [state, setState] = useState(value || 0)

  const data = UseFetch('http://localhost:3000/v1/addresses/states', 'GET', {'Accept': 'application/json',
    'Content-Type': 'application/json'});
  const states = data?.collection || []
  
  useEffect(() => {
    setState(value)
  }, [value]); 

  return(
    <>
      <StateBox> 
        <h3>Estado</h3>
      
        <select  value={value} onChange={(e) => handleAddressChange(index, 'state_id', e.target.value)}>
          <option key={index} >Selecione um Estado</option>
          {states.map((state, index) => (
            <option key={index} value={state?.id}>{state.name}</option>
          ))}    
        </select>
      </StateBox>
    </>
  );
}