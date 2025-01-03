import React from "react";
import Email from "./Email";
import Cpf from "./Cpf";
import Name from "./Name";
import Address from "./Address";
import styled from "styled-components";
import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import DateofBirthday from "./DateofBirthday";
import Swal from 'sweetalert2';

const PersonalInformation = styled.div`
  display: flex;
  justify-content: center;

  form{
    padding-left: 10px;
  }
`

const Title = styled.h1`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 3%;
`

function UseForm(props){
  const [addresses, setAddresses] = useState(props?.data?.addresses || [{ street: "", city: 0, state: 0, number: "", zip_code: ""}]);
  const [user, setUser] = useState(props?.data?.user || {name: "", email: "", cpf: "", date_of_birthday: ""})
  const [validate, setValidate] = useState({cpf: false, email: false})
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const handleUserChange = (field, value) => {
    const updateUser = user
    updateUser[field] = value 
    setUser(updateUser)
  } 

  const handleAddressChange = (index, field, value) => {
    const updatedAddresses = [...addresses];
    updatedAddresses[index][field] = value;
    setAddresses(updatedAddresses);
  };

  const handleAddAddress = () => {
    setAddresses([...addresses, { street: "", city: 0, state: 0, number: "", zip_code: ""}]);
  };

  const handleRemoveAddress = (index) => {
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    setAddresses(updatedAddresses);
  };

  const handleValidate = (field, value) => {
    const updateFields = validate
    updateFields[field] = value
    setValidate(updateFields)
    if (validate.cpf && validate.email){
      setButtonDisabled(false)
    }
  
  }

  const handleSubmit = async (url, user, addresses, method) => {
    const isAddressValid = addresses.some(address =>
      address?.street?.trim() &&
      address?.city?.trim() &&
      address?.state?.trim() &&
      address?.number?.trim() &&
      address?.zip_code?.trim()
    );
  
    if (!isAddressValid) {
      Swal.fire({
        icon: 'error',
        text: 'O usuário deve ter pelo menos 1 endereço completo.',
        timer: 3000
      });
      return;
    }
  
    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, addresses }),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);
  
        Swal.fire({
          icon: 'success',
          text: method === 'POST' ? 'Usuário criado com sucesso!'  : 'Usuário atualizado com sucesso!',
          timer: 3000
        });
        window.location.href = 'http://localhost:4000/';
      } else {
        Swal.fire({
          icon: 'error',
          text: method === 'POST' ? 'Erro ao cadastrar usuário.': 'Erro ao atualizar usuário.',
          timer: 3000
        });
      }
    } catch (error) {
      console.error("Erro:", error);
      Swal.fire({
        icon: 'error',
        text: 'Ocorreu um erro ao processar sua solicitação.',
        timer: 3000
      });
    }
  };  

  useEffect(() => {
    setAddresses(props?.data?.addresses || [{ street: "", city: "", state: "", number: "", zip_code: ""}])
    setUser(props?.data?.user || {name: "", email: "", cpf: "", date_of_birthday: ""})
  }, [props?.data?.user, props?.data?.addresses])
  
  return (
    <>
      <Title>Cadastro De Usúarios</Title>
      <Box sx={{ p: 3 }}>
        <PersonalInformation>
          <Name handleUserChange={handleUserChange} value={props.data?.user?.name} />
          <Cpf  handleValidate={handleValidate} handleUserChange={handleUserChange} value={props.data?.user?.cpf}/>
          <Email handleValidate={handleValidate} handleUserChange={handleUserChange} value={props.data?.user?.email}/>
          <DateofBirthday handleUserChange={handleUserChange} />
        </PersonalInformation>
        
        {addresses.map((address, index) => (
          <Address
            key={index}
            value={address}
            index={index}
            address={address}
            handleAddressChange={handleAddressChange}
            handleRemoveAddress={handleRemoveAddress}
          />
        ))}
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddAddress}
          sx={{ mt: 2 }}
        >
          Adicionar Endereço
        </Button>
      </Box>
      <Button
          disabled={buttonDisabled}
          variant="contained"
          color="success"
          onClick={() => handleSubmit(props.url, user, addresses, props.method)}
          sx={{ mt: 2, ml: 2 }}
        >
        {props.name}
      </Button>
    </>
  );

}

export default UseForm