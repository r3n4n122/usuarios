import React from "react";
import UseForm from "../../components/UseForm";
import { useParams } from "react-router-dom";

export default function Edit(){
  const { id } = useParams();

  return (<UseForm name="Editar" method="PUT" url={`http://localhost:3000/v1/users/${id}`} />)
}