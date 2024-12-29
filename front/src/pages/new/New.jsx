import React from "react";
import UseForm from "../../components/UseForm";

export default function New(){
  return (<UseForm name="Criar" method="POST" url={`http://localhost:3000/v1/users`}/>)
}