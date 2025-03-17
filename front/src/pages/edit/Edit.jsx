import React from "react";
import UseForm from "../../components/UseForm";
import { useParams } from "react-router-dom";
import { UseFetch }from "../../components/FetchData";

export default function Edit(){
  const { id } = useParams();

  const user = UseFetch(`http://localhost:3000/v1/users/${id}/edit`, 'GET', {'Content-Type': 'application/json'});
  
  return (<UseForm name="Editar" data={user} method="PUT" url={`http://localhost:3000/v1/users/${id}`} />)
}