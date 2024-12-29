import React from "react";
import { useState, useEffect } from "react";
import ButtonLink from "../../components/ButtonLink";
import TablePagination from "./TablePagination";
import { UseApi } from "./Context"
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 3%;
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
      <ButtonLink path="/new" value="Cadastrar" />
      <TablePagination users={users} setUsers={setUsers} />
    </>
  )
}

export default Home