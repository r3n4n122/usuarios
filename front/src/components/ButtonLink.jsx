import React from "react";
import {Link } from "react-router-dom";
import styled from 'styled-components'

const Button = styled.div`
  margin-left: 77%;
  margin-top: 8%;

  .btn-nav{
    background-color: #6495ED;
    padding: 10px;
    border-radius: 5px;
    color: white;
    text-decoration: none;
  }
`

function ButtonLink(props){
  return(
    <>
      <Button><Link className="btn-nav" to={props.path}>{props.value}</Link></Button>
    </>
  )
}

export default ButtonLink