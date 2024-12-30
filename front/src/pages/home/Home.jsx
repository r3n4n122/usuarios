import React from "react";
import { useState, useEffect } from "react";
import TablePagination from "./TablePagination";
import { UseApi } from "./Context"
import styled from "styled-components";
import {Link } from "react-router-dom";


const Title = styled.h1`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 3%;
`
const Btn = styled.div`
  margin: 10% 0px 20px 15px;
  .btn-create{
    background-color: #6495ED;
    padding: 10px 25px 10px 25px;
    border-radius: 5px;
    color: white;
    text-decoration: none;
  }
`

function Home(){
  const [users, setUsers] = useState([]);
  let data = UseApi();

  useEffect(() => {
    if (data?.collection?.length > 0) {
      setUsers(data.collection);
    }
  }, [data]);
  return (
    <>
      <Title>Tabela De Usuarios</Title>
      <Btn><Link className="btn-create" to="/novo">Criar</Link></Btn>
      <TablePagination users={users} setUsers={setUsers} />
    </>
  )
}

export default Home